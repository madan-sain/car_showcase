"use client";
import { CreateButtonprops } from "@/types";
import image from "next/image";

const CustomButton = ({
  title,
  containerStyle,
  hendelClick,
  btntype,
}: CreateButtonprops) => {
  return (
    <button
      disabled={false}
      type={ btntype || 'button'}
      className={`custom-btn ${containerStyle}`}
      onClick={hendelClick}
      >
      <span className={"flex-1"}>{title}</span>
    </button>
  );
};

export default CustomButton;
