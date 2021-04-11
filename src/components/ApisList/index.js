import React from "react";
import { Card } from "../../globals";
import { formatCategory } from "../../utils";

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
          <Card key={a} id={`public-apis-${formatCategory(i.Category)}`}>
            <div className="card-header">
              <h3 className="m-0">
                <span style={{ fontWeight: "500", background: "#fff" }}>{i.Category}</span>
                <span style={{ margin: "0 5px", color: "#ccc" }}>&bull;</span>
                <strong style={{ color: "#555", fontWeight: "400", fontSize: 17 }}>{i.length}</strong>
              </h3>
            </div>
            <div style={{ background: "#fff", marginTop: 0 }}>
              <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                  <tr>
                    <th className="text-left">API</th>
                    <th className="text-left">Description</th>
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
                      <td className="api-description-td">{api.Description}</td>
                      <td className="text-center capitalize">{api.Auth ? <span>{api.Auth}</span> : <span style={{ color: "#888" }}>--</span>}</td>
                      <td className="text-center capitalize">{api.HTTPS ? "Yes" : "No"}</td>
                      <td className="text-center capitalize">{api.Cors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        ))}
      </>
    );
  }

  return <ResultApis />;
}

export default ApisList;
