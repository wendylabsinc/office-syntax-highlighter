import React from "react";
import { BundledLanguage, BundledTheme, bundledLanguages, bundledThemes, bundledThemesInfo } from "shiki";
import { useState } from "react";

/* global PowerPoint */
/* global alert */

export function HighlightingSection() {
  const [language, setLanguage] = useState<BundledLanguage>("typescript");
  const [theme, setTheme] = useState<BundledTheme>("github-dark");
  const [code, setCode] = useState("");

  const highlightCode = async () => {
    alert("highlightCode");
    await PowerPoint.run(async (context) => {
      const selectedShapes = context.presentation.getSelectedShapes().items;

      await selectedShapes.forEach(async (shape) => {
        const text = shape.textFrame.textRange.text;
        shape.textFrame.textRange.text = `formatted text ${text}`;
      });

      await context.sync();
    });
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex flex-row gap-2">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as BundledLanguage)}
          aria-label="Select programming language"
        >
          {(Object.keys(bundledLanguages) as BundledLanguage[]).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as BundledTheme)}
          aria-label="Select color theme"
          className="w-full"
        >
          {Object.values(bundledThemesInfo).map((theme) => (
            <option key={theme.id} value={theme.id}>
              {theme.displayName}
            </option>
          ))}
        </select>
      </div>
      <textarea
        className="font-mono mt-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full max-h-[400px]"
        placeholder="Enter your code here"
        rows={100}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <span className="mt-4 font-mono dark:text-white text-black">{code}</span>
      <button
        className="mt-4 px-3 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
        onClick={highlightCode}
      >
        Highlight Code
      </button>
    </div>
  );
}
