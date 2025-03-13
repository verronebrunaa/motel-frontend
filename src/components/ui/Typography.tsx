import React, { JSX } from "react";

interface TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline";
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  children,
  className,
  ...props
}) => {
  const componentMap: { [key: string]: keyof JSX.IntrinsicElements } = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    caption: "span",
    button: "button",
    overline: "span",
  };

  const Component = componentMap[variant] || "span";
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
