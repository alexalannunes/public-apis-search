import React, { memo } from "react";
import { isActive } from "..";
import { formatCategory } from "../../../utils";

function CategoryItem({ onSelectCategory, category, selected, children }) {
  return (
    <li>
      <span
        onClick={() => {
          onSelectCategory(formatCategory(category));
        }}
        className={isActive(selected, category) ? "active" : ""}
      >
        {children}
      </span>
    </li>
  );
}

export default memo(CategoryItem);
