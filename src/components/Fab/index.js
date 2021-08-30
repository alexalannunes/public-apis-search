import React from "react";
import chevronTop from "../../assets/expand_less_black_24dp.svg";

import styles from "./styles.module.css";

function Fab() {
  const fabButtonRef = React.useRef();

  React.useEffect(() => {
    function onScroll(event) {
      if (this.scrollY > 300) {
        fabButtonRef.current.classList.add(styles.fabButtonActive);
      } else {
        fabButtonRef.current.classList.remove(styles.fabButtonActive);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={styles.fabButton}
      ref={fabButtonRef}
      onClick={() => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <img src={chevronTop} alt="back" />
    </button>
  );
}

export { Fab };
