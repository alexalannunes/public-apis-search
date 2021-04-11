import React from "react";
import { ContainerHeader } from "../../globals";
import ApisList from "../ApisList";

function ContentApis({ apis, loading, selectFilter, params }) {
  return (
    <div style={{ width: "100%", marginRight: 190 }}>
      <ContainerHeader className="jc-between" style={{ padding: "7.5px 15px" }}>
        <input style={{ height: 30 }} type="text" placeholder="Search API name or description" />

        <div className="flex ai-center">
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

        <span>{apis?.count}</span>

        {loading && <span>loading</span>}
      </ContainerHeader>
      <div style={{ marginTop: 20 }}>
        <ApisList apis={apis.data} />
      </div>
    </div>
  );
}

export default ContentApis;
