import React from "react";
import { Wrapper } from "./prismElements";
import CodeEditor from "./editor";
const PrismCode = () => {
  return (
    <div>
      <Wrapper>
        <CodeEditor></CodeEditor>
      </Wrapper>
    </div>
  );
};

export default PrismCode;
