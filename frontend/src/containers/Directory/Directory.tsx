import React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faFolder } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowsUpDownLeftRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export enum FileType {
  Book = 'book',
  Location = 'location',
}

export type File = {
  id: string;
  name: string;
  type: FileType;
};

export type DirectoryProps = {
  files: File[];
  onClickBack?: () => void;
  onFolderClick?: (file: File) => void;
  onFileDelete?: (file: File) => void;
  hideBackFolder?: boolean;
};

export function Directory({
  files,
  onClickBack,
  onFolderClick,
  onFileDelete,
  hideBackFolder = false,
}: DirectoryProps) {
  return (
    <div className="flex flex-col bg-white rounded p-6 gap-y-2">
      {!hideBackFolder && (
        <div
          className="flex items-center gap-x-4 pb-1 border-0 border-b-2 hover:bg-slate-100"
          onClick={onClickBack}
          role="button"
        >
          <FontAwesomeIcon icon={faFolder} />
          <span>...</span>
        </div>
      )}
      {files.map((file) => {
        const isLocation = file.type === FileType.Location;

        return (
          <div className="flex items-center justify-between pb-1 border-0 border-b-2 hover:bg-slate-100">
            <div
              className={cx("flex items-center gap-x-4", {
                "cursor-pointer": isLocation,
              })}
              onClick={isLocation ? () => onFolderClick?.(file) : undefined}
            >
              <FontAwesomeIcon icon={isLocation ? faFolder : faFileLines} />
              <span>{file.name}</span>
            </div>
            <div className="flex gap-x-4">
              <FontAwesomeIcon icon={faArrowsUpDownLeftRight} />
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => onFileDelete?.(file)}
                role="button"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
