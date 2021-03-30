import React from "react";
import { formatCategory } from "../../utils";

const ApiListTitle = ({ category }) => (
  <h3 id={`public-apis-${formatCategory(category)}`} style={{ position: "relative" }}>
    <span style={{ fontWeight: "500", background: "#fff", padding: "0 20px 0 0" }}>{category}</span>
    <div style={{ width: "100%", position: "absolute", height: 1, background: "#ccc", bottom: "calc(50% - 1px)", zIndex: -1 }}></div>
  </h3>
);

const ApiBadgeProps = ({ name, value, showName = true }) => (
  <span style={{ padding: "3px 7px", marginRight: 5, border: "1px solid #ccc", borderRadius: 100 }}>
    {showName && <span>{name}: </span>}
    <span style={{ fontWeight: "500" }}>{value}</span>
  </span>
);

function ApisList({ apis }) {
  return (
    <>
      {apis.map((i, a) => (
        <div key={a} style={{ marginBottom: 30 }}>
          <ApiListTitle category={i.Category} />
          <div style={{ background: "#fff", marginTop: 0 }}>
            {i.apis.map((api, xx) => (
              <div style={{ marginBottom: 10 }} key={xx} size="small">
                <div className="flex ai-center">
                  <a rel="noreferrer" href={api.Link} target="_blank">
                    <strong>{api.API}</strong>
                  </a>
                  <span style={{ margin: "0 10px" }}> &bull;</span>
                  <p style={{ color: "#777", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{api.Description}</p>
                </div>
                <div style={{ color: "#606060" }}>
                  <small>
                    {api.Auth && <ApiBadgeProps name="Auth" value={api.Auth} />}
                    {api.Cors && <ApiBadgeProps name="Cors" value={api.Cors} />}
                    {api.HTTPS && <ApiBadgeProps showName={false} value={api.HTTPS ? "HTTPS" : ""} />}
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
