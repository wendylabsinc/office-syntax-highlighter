import React from "react";
import clsx from "clsx";

interface TextEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  initialValue?: string;
  onValueChange: (value: string) => void;
}

/**
 * The TextEditor component is a textarea that automatically inserts two spaces when the Tab key is pressed.
 * It also maintains the cursor position after the text is updated.
 */
export default function TextEditor({ value, initialValue = "", onValueChange, ...props }: TextEditorProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const cursorPositionRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (cursorPositionRef.current !== null && textareaRef.current) {
      textareaRef.current.setSelectionRange(cursorPositionRef.current, cursorPositionRef.current);
      cursorPositionRef.current = null;
    }
  }, [value]);

  return (
    <div {...props}>
      <textarea
        ref={textareaRef}
        title="Text editor"
        placeholder="Enter your text here"
        className={clsx(
          "w-full rounded-lg p-3 font-mono text-sm border border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100",
          props.className
        )}
        rows={20}
        value={value}
        defaultValue={initialValue}
        onChange={(e) => {
          const replacedValue = e.target.value.replace(/[""]/g, '"').replace(/['']/g, "'");
          onValueChange(replacedValue);
        }}
        onKeyDown={(e) => {
          if (e.key === "Tab") {
            e.preventDefault();
            const start = e.currentTarget.selectionStart;
            const end = e.currentTarget.selectionEnd;
            const newValue = value.substring(0, start) + "  " + value.substring(end);

            // Store the desired cursor position
            cursorPositionRef.current = start + 2;

            const event = {
              target: { value: newValue },
              currentTarget: e.currentTarget,
            } as React.ChangeEvent<HTMLTextAreaElement>;
            onValueChange(event.target.value);
          }
        }}
      />
    </div>
  );
}
