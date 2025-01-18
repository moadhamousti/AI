import React from "react";
import { Button } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const NewChatButton = () => {
  return (
    <Button
      className="w-full flex justify-center items-center gap-2 p-0" // Centering and adding gap
      variant="secondary"
    >
      <FontAwesomeIcon icon={faCirclePlus} className="w-5 h-5" />
      <p className="text-start ml-3 font-semibold">New Chat</p> 
      <FontAwesomeIcon icon={faPenToSquare} className="w-4 h-4 ml-auto" />

    </Button>
  );
};

export default NewChatButton;
