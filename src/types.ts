import { ReactNode } from "react";

export type TypChildren = {
  children?: ReactNode;
};
export interface IntUser {
  id: string;
  displayName: string | null;
  photoURL: string | null;
  role?: string;
}

export interface IntResource {
  id: number;
  id_github: string;
  title: string;
  url: string;
  create_at?: string;
  update_at?: string;
}

export type TypTechnologyResource =
  | "All"
  | "Node"
  | "React"
  | "Angular"
  | "Javascript"
  | "Java"
  | "FullStack PHP"
  | "Data Science"
  | "BBDD";
