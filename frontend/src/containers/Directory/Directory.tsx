import React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faFolder } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowsUpDownLeftRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useBooks } from "../../api/books";

export enum FileType {
  Book = 'book',
  Location = 'location',
}

export type File = {
  id: number;
  name: string;
  type: FileType;
  parent?: number|null;
};

export type DirectoryProps = {
  id?: number;
  onClickBack?: () => void;
  onFolderClick?: (file: File) => void;
  onFileDelete?: (file: File) => void;
  hideBackFolder?: boolean;
};

export function Directory({
  id,
  onClickBack,
  onFolderClick,
  onFileDelete,
  hideBackFolder = false,
}: DirectoryProps) {
  const { isLoading, data: files} = useBooks(id);

  if(isLoading) {
    return <div>Loading</div>;
  }

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
      {files?.map((file) => {
        const isLocation = file.type === FileType.Location;

        return (
          <div key={file.id} className="flex items-center justify-between pb-1 border-0 border-b-2 hover:bg-slate-100">
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
