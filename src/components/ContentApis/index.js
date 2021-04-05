import React from "react";
import { formatApis } from "../../utils";
import ApisList from "../ApisList";

function ContentApis({ apis }) {
  return (
    <div style={{ flex: 3, margin: "20px 10px 20px 20px", width: 700 }}>
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
