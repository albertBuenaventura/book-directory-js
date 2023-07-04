import React, { useCallback, useMemo, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Button } from "./components/Button";
import { Directory, File, FileType } from "./containers/Directory/Directory";
import { AddModal } from "./components/Modals/AddModal";
import { addBook, deleteBook } from "./api/books";

function App() {
  const [queryClient] = useState(() => new QueryClient());

  const [showAddBookModal, setShowAddBookModal] = useState(false); 
  const [showAddLocationModal, setShowAddLocationModal] = useState(false); 
  const [currentFileId, setCurrentFileId] = useState<number>();
  const [directories, setDirectories] = useState<File[]>([]);

  const onSubmitAdd = useCallback(async(name: string, type: FileType) => {
    await addBook(name, type, currentFileId);
    await queryClient.invalidateQueries(['books', currentFileId]);

    setShowAddBookModal(false);
    setShowAddLocationModal(false);
  }, [currentFileId]);

  const onFolderClick = useCallback((file: File) => {
    setCurrentFileId(file.id);

    directories.push(file);
    setDirectories(directories);
  }, [directories]);

  const onDeleteFile = useCallback(async (file: File) => {
    await deleteBook(file.id);
    await queryClient.invalidateQueries(['books', currentFileId]);
  }, [currentFileId])

  const onClickBack = useCallback(() => {
    directories.pop();
    const lastDirectory = directories[directories.length - 1];
    
    setDirectories(directories);
    setCurrentFileId(lastDirectory?.id ?? undefined);
  }, [directories]);

  const onBreadCrumbClick = useCallback((file: Pick<File, 'id'|'name'>) => {
    const index = directories.findIndex((directory) => directory.id === file.id);
    setDirectories(directories.splice(0, index + 1));

    setCurrentFileId(file.id);
  }, [directories]);

  return (
    <QueryClientProvider client={queryClient}>
    <div className="flex flex-col w-full h-full mt-10 justify-center items-center gap-y-8">
      <div className="flex flex-col gap-y-8 bg-slate-200 p-6 w-11/12 max-w-7xl rounded">
        <div className="flex w-full items-center gap-x-4">
          <Breadcrumbs paths={directories} className="w-full" onClick={onBreadCrumbClick}/>
          <Button onClick={() => setShowAddBookModal(true)} className="whitespace-nowrap">
            Add Book
          </Button>
          <Button onClick={() => setShowAddLocationModal(true)} className="whitespace-nowrap">
            Add Location
          </Button>
        </div>
        <Directory id={currentFileId} onFolderClick={onFolderClick} onFileDelete={onDeleteFile} onClickBack={onClickBack} hideBackFolder={directories.length === 0}/>
      </div>
    </div>
      <AddModal show={showAddBookModal} onSubmit={(name: string) => onSubmitAdd(name, FileType.Book)} onClose={() => setShowAddBookModal(false)}/>
      <AddModal show={showAddLocationModal} onSubmit={(name: string) => onSubmitAdd(name, FileType.Location)} onClose={() => setShowAddLocationModal(false)}/>
    </QueryClientProvider>

  );
}

export default App;
