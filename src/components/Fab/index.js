import React from "react";
import { FABButton } from "./styles";
import chevronTop from "../../assets/expand_less_black_24dp.svg";

function Fab() {
  return (
    <FABButton
      onClick={() => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <img src={chevronTop} alt="back" />
    </FABButton>
  );
}

export default Fab;
