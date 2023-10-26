"use client"
import React from "react";
import {Input} from "@nextui-org/react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function PasswordInput(
    {
        label,
        value,
        onInput,
    }:
    {
        label:string,
        value:string,
        onInput: (value:string) => void
    }) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      label={label}
      variant="bordered"
      value={value}
      onInput={(e)=>onInput((e.target as HTMLInputElement).value)}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeOffIcon className="text-xl text-default-400 pointer-events-none" />
          ) : (
            <EyeIcon className="text-xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className=""
    />
  );
}
