import React from "react";
import cx from "classnames";

export type TextFieldProps = {
  className?: string;
  error?: boolean;
} & React.HTMLProps<HTMLInputElement>;

export function TextField({ className, error, ...otherProps }: TextFieldProps) {
  return (
    <input
      className={cx(
        "border-0 bg-slate-200 py-1.5 px-3 hover:border-sky-600 focus:border-sky-600 focus:outline-none",
        className,
        {
          "!border border-solid border-red-600 hover:border-red-600 focus:border-red-600":
            error,
        }
      )}
      {...otherProps}
    />
  );
}
