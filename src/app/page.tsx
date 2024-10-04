"use client";
import React, { useEffect, useState } from "react";
import { Note } from "./common/types";
import { Button, MainLayout, TaskNote } from "./common/components";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";

export default function Home() {
  const [showColors, setShowColors] = useState(false);
  const [stickyNote, setStickyNote] = useState<Note[]>([]);

  useEffect(() => {
    const storedStickyNotes = localStorage.getItem("stickyNote");
    if (storedStickyNotes) {
      setStickyNote(JSON.parse(storedStickyNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("stickyNote", JSON.stringify(stickyNote));
  }, [stickyNote]);

  const addStickyNote = (color: string) => {
    const newNote: Note = { id: Date.now().toString(), color };
    setStickyNote((prevNotes) => [...prevNotes, newNote]);
    setShowColors(false);
  };

  const handleRemoveStickyNote = (id: string) => {
    setStickyNote((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const reorderedStickyNotes = Array.from(stickyNote);
    const [movedNote] = reorderedStickyNotes.splice(source.index, 1);
    reorderedStickyNotes.splice(destination.index, 0, movedNote);

    setStickyNote(reorderedStickyNotes);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={"dropableStickyNotes"} direction="vertical">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="relative"
              >
                {stickyNote.map((notes, index) => (
                  <TaskNote
                    key={notes.id}
                    color={notes.color}
                    onRemove={handleRemoveStickyNote}
                    taskId={notes.id}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {showColors && (
          <div
            className={`fixed bottom-[70px] right-4 flex flex-col space-y-2`}
          >
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
