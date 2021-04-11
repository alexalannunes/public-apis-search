import React, { useEffect, useState } from "react";
import { formatApis } from "./utils";
import { Categories, ContentApis, Fab, Footer } from "./components";
import { api } from "./services/api";
import "./App.css";
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
  const [categorySelected, setCategory] = useState("");

  const selectCategory = (category) => {
    setCategory(category);
  };

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
      <div>
        <div style={{ width: "100%" }}>
          <div className="flex">
            <Categories selectCategory={selectCategory} activeCategory={categorySelected} />
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
