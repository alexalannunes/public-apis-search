import React from "react";
import ApisList from "../ApisList";

function ContentApis({ apis }) {
  return (
    <div style={{ flex: 3, margin: "20px 10px 20px 20px", width: 700 }}>
      <div>
        <input type="text" placeholder="Search API name or description" />
        <span>{apis?.count}</span>
      </div>
      <div style={{ marginTop: 20 }}>
        <ApisList apis={apis.data} />
      </div>
    </div>
  );
}

export default ContentApis;
