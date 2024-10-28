/* eslint-disable no-undef */
// @ts-expect-error React is needed for JSX
import * as React from "react";
import { useEffect } from "react";
import { BundledLanguage, BundledThemeInfo, bundledThemesInfo, codeToTokens } from "shiki/bundle/full";
import { useState } from "react";
import LanguageAutocompleteSelector from "./LanguageAutocompleteSelector";
import ThemeAutocompleteSelector from "./ThemeAutocompleteSelector";
import TextEditor from "./TextEditor";
/* global PowerPoint */
/* global Office */

interface CachedPreferences {
  language: BundledLanguage;
  themeId: string;
}

export function HighlightingSection() {
  const [language, setLanguage] = useState<BundledLanguage>(() => {
    const cached = localStorage.getItem("codeHighlightPrefs");
    if (cached) {
      const prefs = JSON.parse(cached) as CachedPreferences;
      return prefs.language;
    }
    return "typescript";
  });

  const [theme, setTheme] = useState<BundledThemeInfo>(() => {
    const cached = localStorage.getItem("codeHighlightPrefs");
    if (cached) {
      const prefs = JSON.parse(cached) as CachedPreferences;
      const savedTheme = bundledThemesInfo.find((t) => t.id === prefs.themeId);
      return savedTheme || bundledThemesInfo[0];
    }
    return bundledThemesInfo[0];
  });

  const [newTextBoxHeight, setNewTextBoxHeight] = useState(100);
  const [newTextBoxWidth, setNewTextBoxWidth] = useState(400);
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [numberOfSelectedShapes, setNumberOfSelectedShapes] = useState(0);

  useEffect(() => {
    const callback = async () => {
      setError(null);
      try {
        await PowerPoint.run(async (context) => {
          const selectedShapes = context.presentation.getSelectedShapes();
          const countResult = await selectedShapes.getCount();
          await context.sync();
          setNumberOfSelectedShapes(countResult.value);
        });
      } catch (error) {
        setError((error as Error).message);
        setNumberOfSelectedShapes(0);
      }
    };

    Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, callback);
    return () => {
      Office.context.document.removeHandlerAsync(Office.EventType.DocumentSelectionChanged, callback);
    };
  }, []);

  useEffect(() => {
    const prefs: CachedPreferences = {
      language,
      themeId: theme.id,
    };
    localStorage.setItem("codeHighlightPrefs", JSON.stringify(prefs));
  }, [language, theme]);

  const highlightAndSetCode = async () => {
    setError(null);
    try {
      await PowerPoint.run(async (context) => {
        if (!numberOfSelectedShapes) {
          throw new Error("Select at least one");
        }
        const shapes = context.presentation.getSelectedShapes();
        const firstShape = shapes.getItemAt(0);
        await firstShape.load("textFrame/textRange/text");
        await context.sync();

        const { tokens } = await codeToTokens(code, {
          lang: language,
          theme: theme.id,
        });
        firstShape.textFrame.textRange.font.name = "Monaco";
        firstShape.textFrame.textRange.text = code;
        // firstShape.textFrame.textRange.paragraphFormat.bulletFormat.visible = false;
        await tokens.forEach(async (token) => {
          token.forEach(async (themedToken) => {
            const offset = themedToken.offset;
            const length = themedToken.content.length;
            const color = themedToken.color;
            const subrange = firstShape.textFrame.textRange.getSubstring(offset, length);
            if (color) {
              subrange.font.color = color;
            }
          });
        });

        await context.sync();
      });
    } catch (error) {
      setError((error as Error).stack?.split("\n")[0] ?? "Unknown error");
    }
  };

  const insertHighlightCodeTextBox = async () => {
    setError(null);
    try {
      await PowerPoint.run(async (context) => {
        const slide = context.presentation.getSelectedSlides().getItemAt(0);
        const textBox = slide.shapes.addTextBox(code);
        textBox.height = 100;
        textBox.width = 400;
        textBox.textFrame.textRange.font.name = "Monaco";
        await context.sync();
        slide.setSelectedShapes([textBox.id]);

        const { tokens } = await codeToTokens(code, {
          lang: language,
          theme: theme.id,
        });
        await tokens.forEach(async (token) => {
          token.forEach(async (themedToken) => {
            const offset = themedToken.offset;
            const length = themedToken.content.length;
            const color = themedToken.color;
            const subrange = textBox.textFrame.textRange.getSubstring(offset, length);
            if (color) {
              subrange.font.color = color;
            }
          });
        });

        await context.sync();
      });
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className="flex flex-col h-screen p-4 gap-4">
      <div className="flex flex-row gap-2">
        <LanguageAutocompleteSelector value={language} onChange={(lang) => setLanguage(lang)} />
        <ThemeAutocompleteSelector value={theme} onChange={(theme) => setTheme(theme)} />
      </div>
      <TextEditor className="min-h-[50vh]" value={code} onValueChange={(value) => setCode(value ?? "")} />
      {error && <span className="mt-4 font-mono dark:text-red-400 text-red-600">{error}</span>}
      {numberOfSelectedShapes === 1 && (
        <button
          className="mt-4 px-3 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
          onClick={highlightAndSetCode}
        >
          Set Highlighted Code
        </button>
      )}
      {numberOfSelectedShapes === 0 && (
        <button
          className="mt-4 px-3 py-2 bg-emerald-500 text-white rounded-md shadow-sm hover:bg-emerald-600"
          onClick={insertHighlightCodeTextBox}
        >
          Insert Highlight Code Text Box
        </button>
      )}
      {numberOfSelectedShapes === 0 && (
        <div className="flex flex-col gap-2">
          <span className="font-mono dark:text-zinc-400 text-zinc-600 text-xs">New Code Text Box Dimensions</span>
          <div className="flex flex-row gap-2">
            <div className="flex items-center gap-2">
              <label htmlFor="height" className="font-mono dark:text-zinc-400 text-zinc-600 text-xs">
                height:
              </label>
              <input
                id="height"
                type="number"
                min={10}
                value={newTextBoxHeight}
                onChange={(e) => setNewTextBoxHeight(Number(e.target.value))}
                className="w-20 px-2 py-1 text-xs font-mono rounded border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="width" className="font-mono dark:text-zinc-400 text-zinc-600 text-xs">
                width:
              </label>
              <input
                id="width"
                type="number"
                min={10}
                value={newTextBoxWidth}
                onChange={(e) => setNewTextBoxWidth(Number(e.target.value))}
                className="w-20 px-2 py-1 text-xs font-mono rounded border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100"
              />
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-1">
          <span className="font-mono dark:text-zinc-400 text-zinc-600 text-xs">{`language: ${language}`}</span>
          <span className="font-mono dark:text-zinc-400 text-zinc-600 text-xs">{`theme: ${theme.id}`}</span>
        </div>
      </div>
      {numberOfSelectedShapes > 1 && (
        <span className="mt-4 font-mono dark:text-orange-400 text-orange-600">Select only one shape at a time</span>
      )}
    </div>
  );
}
