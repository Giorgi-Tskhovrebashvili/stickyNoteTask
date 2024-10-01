import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { toast } from "react-toastify";
import { Task } from "@/app/types/common";

const TaskNote = () => {
  const [taskNote, setTaskNote] = useState<Task[]>([]);
  const [inputTask, setInputTask] = useState("");

  const addTask = () => {
    if (inputTask.trim() === "") {
      toast.error("Something went wrong", {
        position: "bottom-left",
        autoClose: 3000,
      });
    } else {
      const newTask: Task = {
        id: Date.now(),
        text: inputTask.trim(),
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

  const deleteTask = (taskId: number) => {
    setTaskNote((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTaskNote((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <div className="flex space-x-2 p-2 justify-end">
        <Button
          className={"text-red-500 bg-white p-2 rounded-full"}
          onClick={function (event: any): void {
            throw new Error("Function not implemented.");
          }}
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
          onChange={(e) => setInputTask(e.target.value)}
          name={""}
          onKeyDown={handleKeyDown}
          value={inputTask}
        />
        <Button
          className={"mt-2 bg-green-500 text-white p-2 rounded h-10 w-24"}
          onClick={addTask}
        >
          Add
        </Button>
        {taskNote.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between gap-8"
          >
            <Input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="form-checkbox"
              placeholder={""}
              name={""}
            />
            <span className={task.completed ? "line-through" : ""}>
              {task.text}
            </span>
            <Button
              onClick={() => deleteTask(task.id)}
              className="text-red-500"
            >
              ❌
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskNote;
