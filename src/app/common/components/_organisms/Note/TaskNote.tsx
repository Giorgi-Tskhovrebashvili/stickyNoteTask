import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Task, TaskNoteType } from "@/app/common/types/common";
import { Button, Input } from "../..";
import "react-toastify/dist/ReactToastify.css";
import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "@/app/common/utils/localStorage";
import { downloadNoteContent } from "@/app/common/utils/noteDownload";
import { Draggable } from "@hello-pangea/dnd";

const TaskNote = ({ color, onRemove, taskId, index }: TaskNoteType) => {
  const [taskNote, setTaskNote] = useState<Task[]>([]);
  const [inputTask, setInputTask] = useState("");

  useEffect(() => {
    setTaskNote(loadTasksFromLocalStorage(taskId));
  }, [taskId]);

  useEffect(() => {
    if (taskNote.length > 0) {
      saveTasksToLocalStorage(taskId, taskNote);
    } else {
      localStorage.removeItem(taskId);
    }
  }, [taskNote, taskId]);

  const addTask = () => {
    if (inputTask.trim() === "") {
      toast.error("Something went wrong", {
        position: "bottom-left",
        autoClose: 3000,
      });
    } else {
      const newTask: Task = {
        id: Date.now(),
        text: inputTask,
        completed: false,
      };
      setTaskNote((prev) => [...prev, newTask]);
      setInputTask("");
      toast.success("Note succesfully added!!!", {
        position: "bottom-left",
      });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTaskNote((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId: number) => {
    setTaskNote((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const downloadNote = () => {
    downloadNoteContent(taskId, taskNote);
  };

  const removeNote = () => {
    onRemove(taskId);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(event.target.value);
  };

  return (
    <div>
      <Draggable draggableId={taskId} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={`note ${color} relative flex flex-col p-4 m-4 border rounded-lg shadow-lg `}
          >
            <div className="space-y-2 mb-12">
              <div className="flex space-x-2 p-2 justify-end">
                <Button
                  className={"text-red-500 bg-white p-2 rounded-full"}
                  onClick={removeNote}
                >
                  ❌
                </Button>
                <Button
                  className={"text-white bg-blue-500 p-2 rounded-full"}
                  onClick={downloadNote}
                >
                  📥
                </Button>
              </div>
              <div className="flex gap-2 mb-4">
                <Input
                  className={"mt-2 w-full p-2 border rounded h-10"}
                  type={"text"}
                  placeholder={""}
                  onChange={handleChange}
                  name={""}
                  onKeyDown={handleKeyDown}
                  value={inputTask}
                />
                <Button
                  className={
                    "mt-2 bg-green-500 text-white p-2 rounded h-10 w-24"
                  }
                  onClick={addTask}
                >
                  Add
                </Button>
              </div>
            </div>
            <div>
              {taskNote.map((task) => (
                <div key={task.id} className="flex justify-between mb-4">
                  <Input
                    className={"form-checkbox"}
                    type={"checkbox"}
                    placeholder={""}
                    onChange={() => toggleTaskCompletion(task.id)}
                    checked={task.completed}
                    value={inputTask}
                  />
                  <span className={task.completed ? "line-through" : ""}>
                    {task.text}
                  </span>
                  <Button
                    className={"text-red-500"}
                    onClick={() => deleteTask(task.id)}
                  >
                    ❌
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </Draggable>
      <ToastContainer />
    </div>
  );
};

export default TaskNote;
