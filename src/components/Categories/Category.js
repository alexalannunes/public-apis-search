import React, { memo } from "react";
import { formatCategory } from "../../utils";

import styles from "./category.module.css";

function isActive(activeCategory, categoryItem) {
  return formatCategory(activeCategory) === formatCategory(categoryItem);
}

function Category({ onSelectCategory, category, selected, children }) {
  return (
    <li>
      <span
        onClick={() => {
          onSelectCategory(formatCategory(category));
        }}
        className={isActive(selected, category) ? styles.categoryItemActive : ""}
      >
        {children}
      </span>
    </li>
  );
}

export default memo(Category);
