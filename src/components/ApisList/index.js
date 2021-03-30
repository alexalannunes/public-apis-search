import React from "react";
import { formatCategory } from "../../utils";

const ApiListTitle = ({ category }) => (
  <h4 id={`public-apis-${formatCategory(category)}`} style={{ position: "relative" }}>
    <span style={{ fontWeight: "500", background: "#fff", padding: "0 20px 0 0" }}>{category}</span>
    <div style={{ width: "100%", position: "absolute", height: 1, background: "#ccc", bottom: "calc(50% - 1px)", zIndex: -1 }}></div>
  </h4>
);

function ApisList({ apis }) {
  return (
    <>
      {apis.map((i, a) => (
        <div key={a}>
          <ApiListTitle category={i.Category} />
          <div style={{ background: "#fff", marginTop: 0 }}>
            {i.apis.map((api, xx) => (
              <div style={{ marginBlock: 10 }} key={xx} size="small">
                <div className="flex ai-center">
                  <a rel="noreferrer" href={api.Link} target="_blank">
                    <strong>{api.API}</strong>
                  </a>
                  <span style={{ margin: "0 10px" }}> &bull;</span>
                  <p style={{ color: "#777" }}>{api.Description}</p>
                </div>
                <div style={{ color: "#404040" }}>
                  <small>
                    {api.Auth && <span style={{ padding: "3px 7px", marginRight: 5, border: "1px solid #ccc", borderRadius: 100 }}>Auth: {api.Auth}</span>}&nbsp;
                    {api.Cors && <span style={{ padding: "3px 7px", marginRight: 5, border: "1px solid #ccc", borderRadius: 100 }}>Cors: {api.Cors}</span>}&nbsp;
                    {api.HTTPS && <span style={{ padding: "3px 7px", marginRight: 5, border: "1px solid #ccc", borderRadius: 100 }}>{api.HTTPS ? "HTTPS" : ""}</span>}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ApisList;
