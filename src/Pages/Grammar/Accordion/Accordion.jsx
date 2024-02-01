import React, { useState } from "react";
import "./style.css";
import { FaPlus } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

function Accordion({ title, index }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="grammar-item-title">
        <span>{index < 10 ? `0${index}` : index}</span>
        <p>{title}</p>
        <button
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          {show ? (
            <FaPlus style={{ transform: "rotate(45deg)" }} />
          ) : (
            <FaPlus />
          )}
        </button>
      </div>
      {show && (
        <div className="grammar-item-links">
          <div>
            <p>Title here 1111</p>
            <a href={`/grammarItem`}>
              <LuArrowUpRight />
            </a>
          </div>
          <div>
            <p>Title here 1</p>
            <LuArrowUpRight />
          </div>
          <div>
            <p>Title here 1</p>
            <LuArrowUpRight />
          </div>
        </div>
      )}
    </>
  );
}

export default Accordion;
