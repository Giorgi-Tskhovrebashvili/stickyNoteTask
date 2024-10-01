export interface MainLayoutProps {
  children: React.ReactNode;
}

export interface ButtonType {
  className: string;
  onClick: (event: any) => void;
  children?: string;
  key?: string;
}

export interface InputType {
  className: string;
  type: "text" | "checkbox";
  placeholder: string;
  onChange: (event: any) => void;
  value?: string;
  name: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

export interface PopupType {
  onClick: (event: any) => void;
  className: string;
}

export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export interface NoteProps {
  noteId: string;
  index: number;
  onRemove: (id: string) => void;
}

export type Note = {
  id: string;
  color: string;
};
