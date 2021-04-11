import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { categoriesMock } from "../../mock";
import { formatCategory } from "../../utils";

function Categories({ selectCategory, activeCategory = "" }) {
  return (
    <div style={{ flex: 3, padding: "10px 0", borderRight: "1px solid #f0f0f0", minWidth: 280, maxWidth: 300 }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflowY: "auto" }}>
        <div
          style={{ borderRadius: "100px 0 0 100px", display: "block", padding: "5px 10px", background: !activeCategory ? "#1967d2" : "transparent" }}
          onMouseDown={() => selectCategory("")}
        >
          All
        </div>
        {categoriesMock.map((i, x) => (
          <AnchorLink
            onMouseDown={() => selectCategory(i)}
            href={`#public-apis-${formatCategory(i)}`}
            key={x}
            style={{
              fontWeight: "500",
              borderRadius: "100px 0 0 100px",
              display: "block",
              padding: "5px 10px",
              color: formatCategory(activeCategory) === formatCategory(i) ? "#fff" : "#333",
              background: formatCategory(activeCategory) === formatCategory(i) ? "#1967d2" : "transparent",
            }}
          >
            {i}
          </AnchorLink>
        ))}
      </div>
    </div>
  );
}

export default Categories;
