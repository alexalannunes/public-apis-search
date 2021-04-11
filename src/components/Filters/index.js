import React from "react";

// import { Container } from './styles';

function Filters({ params, selectFilter }) {
  return (
    <div style={{ flex: 1, minWidth: 180, maxWidth: 200, borderLeft: "1px solid #ccc" }} className="flex column">
      <div className="flex column" style={{ position: "sticky", top: 0 }}>
        <button>reset</button>
        <select placeholder="Auth" defaultValue="" onChange={selectFilter} value={params.auth} name="auth">
          <option value="">Auth</option>

          <option value="apiKey">ApiKey</option>
          <option value="OAuth">OAuth</option>
        </select>
        <select placeholder="CORS" defaultValue="" onChange={selectFilter} value={params.cors} name="cors">
          <option value="">CORS</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unknown">Unknown</option>
        </select>
        <select placeholder="HTTPS" defaultValue="" onChange={selectFilter} value={params.https} name="https">
          <option value="">HTTPS</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
