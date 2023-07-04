import React, { useMemo } from "react";
import cx from "classnames";
import { File } from "../../containers/Directory/Directory";

export type BreadcrumbsProps = {
  paths: Pick<File, 'id'|'name'>[];
  onClick?: (breadcrumb?: Pick<File, 'id'|'name'>) => void;
  className?: string;
};

export function Breadcrumbs({ paths, onClick, className }: BreadcrumbsProps) {
  const lastIndex = paths.length - 1;

  return (
    <div className={cx("bg-white p-2 rounded flex flex-wrap", className)}>
      <div className="flex">
            <div
              onClick={() => onClick?.()}
              role="button"
            >
              Home
            </div>
            <div className="px-2"> &gt; </div>
          </div>
      {paths.map((path, i) => {
        const isLast = lastIndex === i;

        return (
          <div key={path.id} className="flex">
            <div
              onClick={() => onClick?.(path)}
              className={cx({
                "font-bold": isLast,
              })}
              role="button"
            >
              {path.name}
            </div>
            {!isLast && <div className="px-2"> &gt; </div>}
          </div>
        );
      })}
    </div>
  );
}
