import Indicator from "@/base-ui/indicator";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";

const Demo = memo((props) => {
  const names = [
    "asd",
    "sdfdf",
    "sdfsdf",
    "sdffsdf",
    "sdfsdfs",
    "qwrwer",
    "a",
    "as",
  ];
  const [selectIndex, setSelectIndex] = useState(0);
  function toggleClickHandler(type) {
    let newIndex = type ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = names.length - 1;
    if (newIndex > names.length - 1) newIndex = 0;
    setSelectIndex(newIndex);
    console.log(newIndex);
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
          <Indicator>
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
