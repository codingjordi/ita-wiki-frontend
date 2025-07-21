import { FC, SVGProps } from "react";
import type { FormatDocumentCategory } from "../../../types";
import { AiOutlineOrderedList, AiOutlineUnorderedList } from "react-icons/ai";
import { RxTextAlignLeft, RxTextAlignCenter } from "react-icons/rx";
import { FiUnderline, FiBold, FiItalic } from "react-icons/fi";

type SvgIcon = FC<SVGProps<SVGSVGElement>>;

import { Category } from "../../../types";
import sql_vector from '../../../assets/sqlVector.svg?react';
import python_vector from '../../../assets/pythonVector.svg?react';
import ts_vector from '../../../assets/TypescriptVector.svg?react';
import js_vector from '../../../assets/javascript.svg?react';
import java_vector from '../../../assets/logo-java 1.svg?react';
import php_vector from '../../../assets/logo-php 1.svg?react';
import node_vector from '../../../assets/logo-node 1.svg?react';
import react_vector from '../../../assets/react.svg?react';
import angular_vector from '../../../assets/angular.svg?react';
import dataScience_vector from '../../../assets/data-science.svg?react';


export const asideContent: { icon: SvgIcon; label: Category }[] = [
  { icon: node_vector, label: "Node" },
  { icon: react_vector, label: "React" },
  { icon: angular_vector, label: "Angular" },
  { icon: js_vector, label: "JavaScript" },
  { icon: ts_vector, label: "TypeScript" },
  { icon: java_vector, label: "Java" },
  { icon: php_vector, label: "PHP" },
  { icon: dataScience_vector, label: "Data Science" },
  { icon: sql_vector, label: "BBDD" },
  { icon: python_vector, label: "Python" },
];

export const formatDocumentIcons: {icon: SvgIcon, label: FormatDocumentCategory} [] = [
  { label: "bold", icon: FiBold },
  { label: "italic", icon: FiItalic },
  { label: "underline", icon: FiUnderline },
  { label: "align-left", icon: RxTextAlignLeft },
  { label: "align-center", icon: RxTextAlignCenter },
  { label: "ordered-list", icon: AiOutlineOrderedList },
  { label: "unordered-list", icon: AiOutlineUnorderedList },
]
