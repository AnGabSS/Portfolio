// At the top of your file
"use client"; // This tells React that this file is a client component

import { useEffect, useState } from "react";

interface Props {
  textToBeWritten: string;
}

const WriteMachine = ({ textToBeWritten }: Props) => {
  const [text, setText] = useState("");

  // Helper function to simulate the typing effect
  const writingInTheDisplay = (text: string, i: number = 0) => {
    if (i < text.length) {
      setText((prev) => prev + text[i]); // Append each character
      setTimeout(() => writingInTheDisplay(text, i + 1), 100); // Recursively type out next character
    }
  };

  // Effect hook to initiate the typing when the component mounts
  useEffect(() => {
    writingInTheDisplay(textToBeWritten);
  }, [textToBeWritten]); // Dependency on `textToBeWritten`, rerun if it changes

  return <>{text}</>;
};

export default WriteMachine;
