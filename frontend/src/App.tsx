import React, { useCallback, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Button } from "./components/Button";
import { Directory, FileType } from "./containers/Directory/Directory";
import { AddModal } from "./components/Modals/AddModal";
import { addBook } from "./api/books";

const breadcrumbs = [
  {
    key: "uuid-1",
    text: "Cabinet A",
  },
  {
    key: "uuid-2",
    text: "Shelf 1",
  },
  {
    key: "uuid-3",
    text: "Folder 123",
  },
];

function App() {
  const queryClient = new QueryClient();
  const [showAddBookModal, setShowAddBookModal] = useState(false); 
  const [showAddLocationModal, setShowAddLocationModal] = useState(false); 
  const [currentFileId, setCurrentFileId] = useState<number>();

  const onSubmitAdd = useCallback(async(name: string, type: FileType) => {
    await addBook(name, type, currentFileId);
    queryClient.invalidateQueries('books');

    setShowAddBookModal(false);
    setShowAddLocationModal(false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
    <div className="flex flex-col w-full h-full mt-10 justify-center items-center gap-y-8">
      <div className="flex flex-col gap-y-8 bg-slate-200 p-6 w-11/12 max-w-7xl rounded">
        <div className="flex w-full items-center gap-x-4">
          <Breadcrumbs paths={breadcrumbs} className="w-full" />
          <Button onClick={() => setShowAddBookModal(true)} className="whitespace-nowrap">
            Add Book
          </Button>
          <Button onClick={() => setShowAddLocationModal(true)} className="whitespace-nowrap">
            Add Location
          </Button>
        </div>
        <Directory id={currentFileId}/>
      </div>
    </div>
      <AddModal show={showAddBookModal} onSubmit={(name: string) => onSubmitAdd(name, FileType.Book)} onClose={() => setShowAddBookModal(false)}/>
      <AddModal show={showAddLocationModal} onSubmit={(name: string) => onSubmitAdd(name, FileType.Location)} onClose={() => setShowAddLocationModal(false)}/>
    </QueryClientProvider>

  );
}

export default App;
