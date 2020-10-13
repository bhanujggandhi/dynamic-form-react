import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../styles/FormInputContainer.css";

const FormInputContainer = ({
  skills,
  content_add,
  width,
  currentcolor,
  handleBlur,
  handleChange,
  handleKeypress,
  handleFocus,
  handleClick,
}) => {
  return (
    <div>
      <TransitionGroup>
        {skills.map((listitem, index) => (
          <CSSTransition
            key={listitem.id}
            classNames='item-transition'
            timeout={{ enter: 500, exit: 210 }}
          >
            <li
              onClick={handleClick}
              data-item={listitem.id}
              style={{
                backgroundColor: currentcolor[index % currentcolor.length],
                width: listitem.itemWidth,
              }}
            >
              {listitem.content}
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <input
        id='add'
        type='text'
        name='initvalue'
        autoComplete='off'
        maxLength='70'
        onFocus={handleFocus}
        onChange={handleChange}
        onKeyPress={handleKeypress}
        onBlur={handleBlur}
        value={content_add}
        style={{ width: width }}
      />
    </div>
  );
};

export default FormInputContainer;
