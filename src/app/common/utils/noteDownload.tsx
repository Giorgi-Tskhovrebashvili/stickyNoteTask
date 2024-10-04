import { Task } from "../types";

export const downloadNoteContent = (noteId: string, tasks: Task[]): void => {
    const blob = new Blob([JSON.stringify(tasks)], {
      type: "text/plain;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `note_${noteId}.txt`;
    link.click();
};
