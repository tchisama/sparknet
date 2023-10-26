"use client"
import React from "react";
import {Input} from "@nextui-org/react";

export default function EmailInput(
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
  return (
    <Input
      value={value}
      onInput={(e)=>onInput((e.target as HTMLInputElement).value)}
      isClearable
      type="email"
      label={label}
      variant="bordered"
      className=""
    />
  );
}
