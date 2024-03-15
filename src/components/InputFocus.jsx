import React, { useRef, useEffect } from "react";

/*
    Задание Автофокус на поле ввода

    1) Реализовать фокус на инпут при нажатии на кнопку 
    2) Использовать useRef

*/

function InputFocus() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div className="column">
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus my input</button>
    </div>
  );
}

export default InputFocus;
