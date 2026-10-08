import React from "react";
import { splitLinks } from "./format";

const RichText = ({ text }: { text: string }) => (
  <>
    {splitLinks(text).map((part, index) =>
      typeof part === "string" ? (
        part
      ) : (
        <a
          key={index}
          href={part.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {part.text}
        </a>
      )
    )}
  </>
);

export default RichText;
