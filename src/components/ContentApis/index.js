import React from "react";
import ApisList from "../ApisList";

import { ContentApisContainer } from "./styles";

function ContentApis({ apis, loading, selectFilter, params }) {
  return (
    <ContentApisContainer>
      <div style={{ marginTop: 20 }}>
        <ApisList apis={apis.data} />
      </div>
    </ContentApisContainer>
  );
}

export default ContentApis;
