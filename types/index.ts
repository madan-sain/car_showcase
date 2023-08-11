import { MouseEventHandler } from "react";

export interface CreateButtonprops{
    title: string,
    containerStyle?:string;
    hendelClick?:MouseEventHandler<HTMLButtonElement>;
    btntype?: "button" | "submit"

}


export interface SearcMaunfacherprops{
    maunfacher: string;
    setmaunfacher: (maunfacher: string) => void;
}