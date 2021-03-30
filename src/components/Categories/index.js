import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { categoriesMock } from "../../mock";
import { formatCategory } from "../../utils";

function Categories({ selectCategory }) {
  return (
    <div style={{ padding: "10px 0", borderRight: "1px solid #f0f0f0" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflowY: "auto" }}>
        <div onMouseDown={() => selectCategory("")}>All</div>
        {categoriesMock.map((i, x) => (
          <AnchorLink href={`#public-apis-${formatCategory(i)}`} key={x}>
            <div style={{ borderRadius: "100px 0 0 100px" }} onMouseDown={() => selectCategory(i)}>
              {i}
            </div>
          </AnchorLink>
        ))}
      </div>
    </div>
  );
}

export default Categories;
