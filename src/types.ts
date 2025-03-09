import { ReactNode } from "react";

// Definir los tipos para category, theme y type
export type Category = 'Node' | 'React' | 'Angular' | 'Javascript' | 'Java' | 'Fullstack PHP' | 'Data Science' | 'BBDD';
export type Theme = 'All' | 'Components' | 'UseState & UseEffect' | 'Eventos' | 'Renderizado condicional' | 'Listas' | 'Estilos' | 'Debugging' | 'React Router';
export type ResourceType = 'Video' | 'Cursos' | 'Blog';

export type TypChildren = {
  children?: ReactNode;
};

export interface IntUser {
  id: number;
  displayName: string | null;
  photoURL: string | undefined;
  role?: string;
}

export interface IntResource {
  id?: number;
  github_id: number;
  title: string;
  description: string;
  url: string;
  create_at?: string;
  update_at?: string;
  category: Category;
  theme: Theme;        
  type: ResourceType;  
}

export type TypTechnologyResource = 
"All"
|"Node"
|"React"
|"Angular"
|"Javascript"
|"Data Science"
|"BBDD"

