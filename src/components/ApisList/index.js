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
            <table>
              <thead>
                <tr>
                  <th>API</th>
                  <th>Description</th>
                  <th>Auth</th>
                  <th>HTTPS</th>
                  <th>CORS</th>
                </tr>
              </thead>
              <tbody>
                {i.apis.map((api, xx) => (
                  <tr key={xx}>
                    <td>{api.API}</td>
                    <td>{api.Description}</td>
                    <td>{api.Auth}</td>
                    <td>{api.HTTPS ? "Yes" : "No"}</td>
                    <td>{api.Cors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
}

export default ApisList;
