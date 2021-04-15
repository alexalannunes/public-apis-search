import React, { useEffect, useState } from "react";
import { formatApis } from "./utils";
import { Categories, ContentApis, Fab, Footer } from "./components";
import { api } from "./services/api";
import { apisMock } from "./mock";
import { Header } from "./globals";

async function temp(params = "") {
  const req = "/entries" + (params ? "?" + params : "");
  const r = await api.get(req);
  return r.data;
}

function App() {
  const [loading, setLoading] = useState(false);
  const [apis, setApis] = useState([]);
  const [params, setParams] = useState({});

  const selectFilter = (e) => {
    setParams((oldParams) => {
      return { ...oldParams, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    // setLoading(true);
    // const query = new URLSearchParams(params).toString();
    // console.log(query);
    // temp(query).then((data) => {
    //   setApis(formatApis(data));
    //   setLoading(false);
    // });
    setApis(formatApis(apisMock));
  }, [params]);

  return (
    <div>
      <Header>
        <div className="header-categories-title">
          <span>Categories</span>
        </div>
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
      </Header>
      <div>
        <div style={{ width: "100%" }}>
          <div className="flex">
            <Categories />
            <ContentApis apis={apis} loading={loading} selectFilter={selectFilter} params={params} />
          </div>
        </div>
      </div>
      <Footer />
      <Fab />
    </div>
  );
}

export default App;
