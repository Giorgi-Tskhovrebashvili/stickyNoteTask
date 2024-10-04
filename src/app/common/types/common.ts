import { ReactNode } from "react";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export interface ButtonType {
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

export interface InputType {
  className: string;
  type: "text" | "checkbox";
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export interface NoteProps {
  noteId: string;
  index: number;
  onRemove: (id: string) => void;
}

export interface Note {
  id: string;
  color: string;
}

export interface TaskNoteType {
  color: string;
  onRemove: (id: string) => void;
  taskId: string;
  index: number;
}
