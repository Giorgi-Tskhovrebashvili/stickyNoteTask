import React from "react";
import Button from "../Button/Button";
import { PopupType } from "@/app/types";

const Popup = ({onClick, className}: PopupType) => {
  return (
    <div className={className}>
          <Button
              key=""
        className={"w-12 h-12 rounded-full bg-yellow-200"}
        onClick={onClick}
      />
      <Button
        className={"w-12 h-12 rounded-full bg-green-200"}
        onClick={onClick}
      />
      <Button
        className={"w-12 h-12 rounded-full bg-blue-200"}
        onClick={onClick}
      />
      <Button
        className={"w-12 h-12 rounded-full bg-red-200"}
        onClick={onClick}
          />
          <Button
        className={"w-12 h-12 rounded-full bg-purple-200"}
        onClick={onClick}
      />
    </div>
  );
};

export default Popup;
