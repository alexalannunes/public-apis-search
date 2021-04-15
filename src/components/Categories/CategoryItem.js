import React, { memo } from "react";

const CategoryItem = ({ children }) => <li>{children}</li>;

export default memo(CategoryItem);
