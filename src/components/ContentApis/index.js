import React from "react";
import { formatApis } from "../../utils";
import ApisList from "../ApisList";

function ContentApis({ apis }) {
  return (
    <div style={{ flex: 2, margin: "20px 10px 20px 20px", background: "red" }}>
      <div>
        <input type="text" placeholder="Search API name or description" />
        <div style={{ marginTop: 20 }}></div>
      </div>
      <div style={{ marginTop: 20 }}>
        <ApisList apis={formatApis(apis)} />
      </div>
    </div>
  );
}

export default ContentApis;
