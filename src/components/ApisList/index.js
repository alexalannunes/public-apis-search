import React from "react";
import { formatCategory } from "../../utils";

const ApiListTitle = ({ category }) => (
  <h3 id={`public-apis-${formatCategory(category)}`} style={{ position: "relative" }}>
    <span style={{ fontWeight: "500", background: "#fff", padding: "0 20px 0 0" }}>{category}</span>
    <div style={{ width: "100%", position: "absolute", height: 1, background: "#ccc", bottom: "calc(50% - 1px)", zIndex: -1 }}></div>
  </h3>
);

function ApisList({ apis }) {
  let ResultApis = null;

  if (!apis) {
    ResultApis = () => <div>Loading...</div>;
  } else if (apis && apis.length === 0) {
    ResultApis = () => <div>No apis</div>;
  } else {
    ResultApis = () => (
      <>
        {apis.map((i, a) => (
          <div key={a} style={{ marginBottom: 30 }}>
            <ApiListTitle category={i.Category} />
            <div style={{ background: "#fff", marginTop: 0 }}>
              <table border={1} style={{ borderCollapse: "collapse", width: "100%" }}>
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
                      <td>
                        <a href={api.Link} target="_blank" rel="noreferrer">
                          {api.API}
                        </a>
                      </td>
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

  return <ResultApis />;
}

export default ApisList;
