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

  return (
    <div>
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
      </div>
    </div>
  );
};

export default TaskNote;
