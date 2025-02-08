import React, { useEffect, useRef } from "react";
import textFill from "../../utils/textFill.js";
import "./standard-screen.css";

function StandardScreen({ activeEquation, equationsHistory }) {
  const historyRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    historyRef.current?.scrollTo(0, historyRef.current.scrollHeight);
  }, [equationsHistory]);

  useEffect(() => {
    textFill({ element: textRef.current, maxSize: 40 });
  }, [activeEquation]);

  useEffect(() => {
    textFill({ elements: historyRef.current.children, maxSize: 28 });
  }, [equationsHistory]);

  return (
    <div className="standard-screen">
      <div className="standard-screen__history" ref={historyRef}>
        {equationsHistory.map((equation, index) => {
          return (
            <div className="standard-screen__history-item" key={index}>
              {equation}
            </div>
          )
        })}
      </div>
      <div className="standard-screen__active" ref={textRef}>
        {activeEquation}
      </div>
    </div>
  );
}

export default StandardScreen;
