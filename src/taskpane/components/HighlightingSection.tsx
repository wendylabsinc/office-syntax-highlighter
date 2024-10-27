import * as React from "react";
import { useEffect } from "react";
import { BundledLanguage, BundledThemeInfo, bundledThemesInfo, codeToTokens } from "shiki";
import { useState } from "react";
import LanguageAutocompleteSelector from "./LanguageAutocompleteSelector";
import ThemeAutocompleteSelector from "./ThemeAutocompleteSelector";

/* global PowerPoint */
/* global Office */

export function HighlightingSection() {
  const [language, setLanguage] = useState<BundledLanguage>("typescript");
  const [theme, setTheme] = useState<BundledThemeInfo>(bundledThemesInfo[0]);
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
          theme: theme,
        });

        firstShape.textFrame.textRange.text = code;
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
      setError((error as Error).message);
    }
  };

  const insertHighlightCodeTextBox = async () => {
    setError(null);
    try {
      await PowerPoint.run(async (context) => {
        const slide = context.presentation.getSelectedSlides().getItemAt(0);
        const textBox = slide.shapes.addTextBox(code);
        await context.sync();

        const { tokens } = await codeToTokens(code, {
          lang: language,
          theme: theme,
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
    <div className="flex flex-col h-screen p-4">
      <div className="flex flex-row gap-2">
        <LanguageAutocompleteSelector value={language} onChange={(lang) => setLanguage(lang)} />
        <ThemeAutocompleteSelector value={theme} onChange={(theme) => setTheme(theme)} />
      </div>
      <textarea
        className="font-mono text-xs mt-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full max-h-[400px]"
        placeholder="Enter your code here"
        rows={100}
        value={code}
        onChange={(e) => {
          setError(null);
          setCode(e.target.value);
        }}
      />
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
      {numberOfSelectedShapes > 1 && (
        <span className="mt-4 font-mono dark:text-orange-400 text-orange-600">Select only one shape at a time</span>
      )}
    </div>
  );
}
