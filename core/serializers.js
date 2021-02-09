import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const serializers = {
  types: {
    code: (props) => (
      <SyntaxHighlighter
        showLineNumbers
        style={vscDarkPlus}
        language={props.node.language}
      >
        {props.node.code}
      </SyntaxHighlighter>
    ),
  },
};

export default serializers;