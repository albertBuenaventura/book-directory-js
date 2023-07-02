import React, { useCallback } from "react";
import "./App.css";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Button } from "./components/Button";

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
  const addBook = useCallback(() => {}, []);
  const addLocation = useCallback(() => {}, []);

  return (
    <div className="flex w-full h-full mt-10 justify-center">
      <div className="flex bg-slate-200 p-6 w-11/12 max-w-7xl rounded">
        <div className="flex w-full items-center gap-x-4">
          <Breadcrumbs paths={breadcrumbs} className="w-full" />
          <Button onClick={addBook} className="whitespace-nowrap">
            Add Book
          </Button>
          <Button onClick={addLocation} className="whitespace-nowrap">
            Add Location
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
