import { FC, SVGProps } from "react";

type SvgIcon = FC<SVGProps<SVGSVGElement>>;

import CircleIcon from "@/assets/circle-icon.svg?react";
import { Category } from "../../../types";
import sql_vector from '../../../assets/sqlVector.svg';
import python_vector from '../../../assets/pythonVector.svg';
import ts_vector from '../../../assets/TypescriptVector.svg';
import js_vector from '../../../assets/javascript.svg';
import java_vector from '../../../assets/logo-java 1.svg';
import php_vector from '../../../assets/logo-php 1.svg';
import node_vector from '../../../assets/logo-node 1.svg';
import react_vector from '../../../assets/react.svg';
import angular_vector from '../../../assets/angular.svg';
import dataScience_vector from '../../../assets/data-science.svg';


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
