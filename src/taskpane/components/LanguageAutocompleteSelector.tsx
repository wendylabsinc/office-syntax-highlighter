import React, { useState } from "react";
import { BundledLanguage, bundledLanguages } from "shiki";

interface LanguageAutocompleteSelectorProps {
  value: BundledLanguage;
  onChange: (language: BundledLanguage) => void;
}

export default function LanguageAutocompleteSelector({ value, onChange }: LanguageAutocompleteSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(value);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const languages = Object.keys(bundledLanguages) as BundledLanguage[];
  const filteredLanguages = languages.filter((lang) => lang.toLowerCase().includes(searchValue.toLowerCase()));

  const handleSelect = (language: BundledLanguage) => {
    setSearchValue(language);
    setIsOpen(false);
    onChange(language);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      if (filteredLanguages.length > 0) {
        handleSelect(filteredLanguages[selectedIndex]);
      } else {
        handleSelect("javascript" as BundledLanguage);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, filteredLanguages.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          className="py-3 ps-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
          type="text"
          role="combobox"
          name="language"
          title="Language"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value as BundledLanguage)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            setTimeout(() => {
              if (filteredLanguages.length === 0) {
                handleSelect("javascript" as BundledLanguage);
              }
              setIsOpen(false);
            }, 200);
          }}
        />
        <button
          className="absolute top-1/2 end-3 -translate-y-1/2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle language selector"
        >
          <svg
            className="shrink-0 size-3.5 text-gray-500 dark:text-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full max-h-72 p-1 bg-white border border-gray-200 rounded-lg overflow-y-auto dark:bg-neutral-900 dark:border-neutral-700">
          {filteredLanguages.map((language, index) => (
            <div
              key={language}
              className={`cursor-pointer py-2 px-4 w-full text-sm text-gray-800 rounded-lg focus:outline-none ${
                index === selectedIndex
                  ? "bg-gray-100 dark:bg-neutral-800"
                  : "hover:bg-gray-100 dark:hover:bg-neutral-800"
              } dark:text-neutral-200`}
              onClick={() => handleSelect(language)}
              onMouseEnter={() => setSelectedIndex(index)}
              tabIndex={index}
            >
              <div className="flex justify-between items-center w-full">
                <span>{language}</span>
                {language === searchValue && (
                  <svg
                    className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
