import { FC, SVGProps } from "react";

type SvgIcon = FC<SVGProps<SVGSVGElement>>;

import CircleIcon from "@/assets/circle-icon.svg?react";

export const asideContent: { icon: SvgIcon; label: string }[] = [
  { icon: CircleIcon, label: "PHP" },
  { icon: CircleIcon, label: "JavaScript" },
  { icon: CircleIcon, label: "Java" },
  { icon: CircleIcon, label: "React" },
  { icon: CircleIcon, label: "TypeScript" },
  { icon: CircleIcon, label: "Python" },
  { icon: CircleIcon, label: "SQL" },
];
