"use client";
import React, { useState } from "react";
import { Note } from "./types";
import { Button, MainLayout, TaskNote } from "./components";


export default function Home() {
  const [showColors, setShowColors] = useState(false);
  const [stickyNote, setStickyNote] = useState<Note[]>([]);

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
          <div className={`fixed bottom-[70px] right-4 flex flex-col space-y-2`}>
          <Button
            className={"w-12 h-12 rounded-full bg-yellow-200"}
            onClick={() => addStickyNote("bg-yellow-200")}
          />
          <Button
            className={"w-12 h-12 rounded-full bg-green-200"}
            onClick={() => addStickyNote("bg-green-200")}
          />
          <Button
            className={"w-12 h-12 rounded-full bg-blue-200"}
            onClick={() => addStickyNote("bg-blue-200")}
          />
          <Button
            className={"w-12 h-12 rounded-full bg-red-200"}
            onClick={() => addStickyNote("bg-red-200")}
          />
          <Button
            className={"w-12 h-12 rounded-full bg-purple-200"}
            onClick={() => addStickyNote("bg-purple-200")}
          />
        </div>
        )}
        <Button
          className={
            "fixed bottom-4 right-4 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg"
          }
          onClick={() => setShowColors(!showColors)}
        >
          +
        </Button>
      </div>
    </MainLayout>
  );
}
