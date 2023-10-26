"use client"
import React from "react";
import {Input} from "@nextui-org/react";

export default function EmailInput({label}:{label:string}) {
  return (
    <Input
      isClearable
      type="email"
      label={label}
      variant="bordered"
      className=""
    />
  );
}
