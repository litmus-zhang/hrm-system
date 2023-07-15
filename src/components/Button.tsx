import React, { ReactNode } from "react";

interface IButtonProps {
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
  variants: "solid" | "outline";
  type?: "button" | "reset" | "submit" | undefined;
}

export default function Button(props: IButtonProps) {
  const { text, icon, onClick, variants, type } = props;
  const BtnStyle =
    variants === "solid"
      ? "px-4 py-2 rounded-md text-white bg-primary hover:bg-blue-600"
      : "px-4 py-2 rounded-md text-primary border border-primary hover:bg-primary hover:text-white";

  return (
    <button type={type} onClick={onClick} className={`${BtnStyle}`}>
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}
