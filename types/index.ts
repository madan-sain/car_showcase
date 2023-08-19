import { MouseEventHandler } from "react";

export interface CreateButtonprops {
  title: string;
  containerStyle?: string;
  rightIcon?: string;
  textStyles?: string;
  hendelClick?: MouseEventHandler<HTMLButtonElement>;
  btntype?: "button" | "submit";
};

export interface SearcMaunfacherprops {
  maunfacher: string;
  setmaunfacher: (maunfacher: string) => void;
};

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  maunfacher?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}