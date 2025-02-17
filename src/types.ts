import { ReactNode } from "react";

export type TypChildren = {
  children?: ReactNode
}
export interface IntUser {
  id: string;
  displayName: string;
  photoURL: string;
}

export interface IntResource {
  resource_id: number,
  title: string,
  description: string,
  favorite: boolean,
  votes: number,
  user: IntUser,
  create_at: string
}