"use client";
import React, { useEffect, useState } from "react";
import { Note } from "./types";
import { Button, MainLayout, Popup, TaskNote } from "./components";


export default function Home() {
  const [showColors, setShowColors] = useState(false);
  const [stickyNote, setStickyNote] = useState<Note[]>([]);

  // useEffect(() => {
  //   const storedNotes = localStorage.getItem("notes");
  //   if (storedNotes) {
  //     setStickyNote(JSON.parse(storedNotes));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todo", JSON.stringify(stickyNote));
  // }, [stickyNote]);

  const handleShowColors = () => setShowColors(!showColors);

  const addStickyNote = (color: string) => {
    const newNote: Note = { id: Date.now().toString(), color };
    setStickyNote((prevNotes) => [...prevNotes, newNote]);
    setShowColors(false);
  };

  const handleRemoveStickyNote = (id: string) => {
    setStickyNote((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4">
        <div>
          {stickyNote.map((notes) => (
            <TaskNote key={notes.id} color={notes.color} onRemove={handleRemoveStickyNote} taskId={notes.id} />
          ))}
        </div>
        {showColors && (
          <Popup
            onClick={addStickyNote}
            className={`fixed bottom-[70px] right-4 flex flex-col space-y-2`}
          />
        )}
        <Button
          className={
            "fixed bottom-4 right-4 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg"
          }
          onClick={handleShowColors}
        >
          +
        </Button>
      </div>
    </MainLayout>
  );
}
