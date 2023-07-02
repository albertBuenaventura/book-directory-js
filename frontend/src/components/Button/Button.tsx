import React from "react";

export type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
} & React.HTMLProps<HTMLButtonElement>;

export function Button({
  onClick,
  children,
  disabled,
  className = "",
  ...otherProps
}: ButtonProps) {
  return (
    <button
      {...otherProps}
      className={`text-white bg-sky-500 hover:bg-sky-500/75 py-2 px-2.5 rounded ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
