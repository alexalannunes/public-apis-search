import React, { useEffect, useState } from "react";
import { formatApis } from "./utils";
import { Content, Fab, Side, Header } from "./components";
import { api } from "./services/api";
import { apisMock } from "./mock";

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
      <Header />
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <Side />
        <Content />
      </div>
      <Fab />
    </div>
  );
}

export default App;
