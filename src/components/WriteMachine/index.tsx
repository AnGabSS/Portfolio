// At the top of your file
"use client"; // This tells React that this file is a client component

import { useEffect, useState } from "react";

interface Props {
  textToBeWritten: string;
}

const WriteMachine = ({ textToBeWritten }: Props) => {
  const [text, setText] = useState("");

  const writingInTheDisplay = (text: string, i: number = 0) => {
    if (i < text.length) {
      setText((prev) => prev + text[i]);
      setTimeout(() => writingInTheDisplay(text, i + 1), 20);
    }
  };

  useEffect(() => {
    setText("");
    writingInTheDisplay(textToBeWritten);
  }, [textToBeWritten]);

  return <>{text}</>;
};

export default WriteMachine;
