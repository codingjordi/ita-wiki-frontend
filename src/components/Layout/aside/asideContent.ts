import { FC, SVGProps } from "react";

type SvgIcon = FC<SVGProps<SVGSVGElement>>;

import CircleIcon from "@/assets/circle-icon.svg?react";
import { Category } from "../../../types";

export const asideContent: { icon: SvgIcon; label: Category }[] = [
  { icon: CircleIcon, label: "Node" },
  { icon: CircleIcon, label: "React" },
  { icon: CircleIcon, label: "Angular" },
  { icon: CircleIcon, label: "JavaScript" },
  { icon: CircleIcon, label: "Java" },
  { icon: CircleIcon, label: "Fullstack PHP" },
  { icon: CircleIcon, label: "Data Science" },
  { icon: CircleIcon, label: "BBDD" },
];

export const asideContentForTechnicalTest: { icon: SvgIcon; label: string }[] = [
  { icon: CircleIcon, label: "PHP" },
  { icon: CircleIcon, label: "JavaScript" },
  { icon: CircleIcon, label: "Java" },
  { icon: CircleIcon, label: "React" },
  { icon: CircleIcon, label: "TypeScript" },
  { icon: CircleIcon, label: "Python" },
  { icon: CircleIcon, label: "SQL" },
];
