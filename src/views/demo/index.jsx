import Indicator from "@/base-ui/indicator";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";

const Demo = memo((props) => {
  const [selectIndex, setSelectIndex] = useState(0);
  const names = [
    "a",
    "s",
    "f",
    "g",
    "j",
    "k",
    "p",
    "i",
    "q","e","r","t","y","u"
  ];
  function toggleClickHandler(type) {
    let newIndex = type ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = names.length - 1;
    if (newIndex > names.length - 1) newIndex = 0;
    setSelectIndex(newIndex);
  }
  return (
    <DemoWrapper>
      {" "}
      <div>
        <div className="control">
          <button onClick={(e) => toggleClickHandler(false)}>prev</button>
          <button onClick={(e) => toggleClickHandler(true)}>next</button>
        </div>
        <div className="list">
          <Indicator selectIndex={selectIndex}>
            {names.map((item) => {
              return <button key={item}>{item}</button>;
            })}
          </Indicator>
        </div>
      </div>
    </DemoWrapper>
  );
});

Demo.propTypes = {};

export default Demo;
