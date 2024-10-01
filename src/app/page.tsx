"use client"
import MainLayout from "./components/layouts/MainLayout";
import Button from "./components/Button/Button";
import React, { useState, useEffect } from "react";
import Popup from "./components/Popup/Popup";
import { Note } from "./types";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import TaskNote from "./components/Note/TaskNote";

export default function Home() {
  const [showColors, setShowColors] = useState(false)
  const [stickyNote, setStickyNote] = useState<Note[]>([])

  const handleShowColors = () => setShowColors(!showColors)

  const addNote = (color: string) => {
    const newNote: Note = { id: Date.now().toString(), color };
    setStickyNote((prevNotes) => [...prevNotes, newNote]); 
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-center h-screen">
      
      {showColors && <Popup onClick={addNote} className={`fixed bottom-[70px] right-4 flex flex-col space-y-2`} />}
      <Button
        className={"fixed bottom-4 right-4 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg"}
        onClick={handleShowColors}
      >
        +
      </Button>
      </div>
      
    </MainLayout>
  );
}
