import { ReactNode } from "react";

export interface CardProps {
    children?: ReactNode;
    className?: string | string[];
    expand?: boolean;
    scrollX?: 'hidden' | 'auto' | 'scroll';
    scrollY?: 'hidden' | 'auto' | 'scroll';
    dataQaElement?: string;
    style?: React.CSSProperties;
  }