import React from "react";
import { FABButton } from "./styles";
import chevronTop from "../../assets/expand_less_black_24dp.svg";

const activeClass = "active";

function Fab() {
  const fabButtonRef = React.useRef();

  React.useEffect(() => {
    function onScroll(event) {
      if (this.scrollY > 300) {
        fabButtonRef.current.classList.add(activeClass);
      } else {
        fabButtonRef.current.classList.remove(activeClass);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <FABButton
      ref={fabButtonRef}
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
