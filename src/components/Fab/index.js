import React from "react";

function Fab() {
  return (
    <button
      onClick={() => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }}
      style={{ position: "fixed", right: 20, bottom: 20 }}
    >
      ^
    </button>
  );
}

export default Fab;
