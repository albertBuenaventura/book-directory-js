import React, { useMemo } from "react";
import cx from "classnames";

export type Breadcrumb = {
  key: string;
  text: string;
};

export type BreadcrumbsProps = {
  paths: Breadcrumb[];
  onClick?: (breadcrumb: Breadcrumb) => void;
  className?: string;
};

export function Breadcrumbs({ paths, onClick, className }: BreadcrumbsProps) {
  const lastIndex = useMemo(() => paths.length - 1, [paths]);

  return (
    <div className={cx("bg-white p-2 rounded flex flex-wrap", className)}>
      {paths.map((path, i) => {
        const isLast = lastIndex === i;

        return (
          <div key={path.key} className="flex">
            <div
              onClick={() => onClick?.(path)}
              className={cx({
                "font-bold": isLast,
              })}
              role="button"
            >
              {path.text}
            </div>
            {!isLast && <div className="px-2"> &gt; </div>}
          </div>
        );
      })}
    </div>
  );
}
