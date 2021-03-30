import React, { useEffect, useState } from "react";
import Categories from "./components/Categories";
import Filters from "./components/Filters";
import { formatApis, formatCategory, formatParams } from "./utils";
import { apisMock } from "./mock";
import "./App.css";
import ApisList from "./components/ApisList";

function App() {
  const [apis, setApis] = useState([]);
  const [params, setParams] = useState({});
  const [categorySelected, setCategory] = useState("");

  const selectCategory = (category) => {
    const dew = {
      ...params,
      category: formatCategory(category),
    };
    const search = new URLSearchParams(dew);
    console.log(search.toString());
    window.history.replaceState({}, null, `?${search.toString()}`);
    setCategory(category);
  };

  const selectFilter = (e) => {
    setParams((oldParams) => {
      return { ...oldParams, [e.target.name]: e.target.value };
    });
  };
  useEffect(() => {
    setApis(formatApis(apisMock));

    if (window.location.search) {
      let params = {};
      new URLSearchParams(window.location.search).forEach((value, key) => {
        params[key] = value;
      });

      setParams(params);
    }
    const dew = {
      ...params,
    };
    const search = new URLSearchParams(dew);
    window.history.replaceState({}, null, `?${search.toString()}`);

    setTimeout(() => {
      try {
        const search = new URLSearchParams(window.location.search);

        const id = "public-apis-" + search.get("category");

        const $anchor = document.getElementById(formatCategory(id));

        const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
        window.scroll({
          top: offsetTop,
          behavior: "smooth",
        });
      } catch (e) {
        // error
      }
    }, 1000);
  }, []);

  useEffect(() => {
    setApis(formatApis(apisMock));
    const dew = {
      ...params,
    };
    const search = new URLSearchParams(dew);
    window.history.replaceState({}, null, `?${search.toString()}`);
  }, [params]);

  return (
    <div>
      <div>
        <div style={{ maxWidth: 960, width: "100%", margin: "0 auto 10px" }}>
          <div className="flex">
            <Categories selectCategory={selectCategory} />
            <div style={{ flex: 1, margin: "20px 10px 20px 20px" }}>
              <div>
                <input type="text" placeholder="Search API name or description" />
                <div style={{ marginTop: 20 }}>
                  {categorySelected}
                  <Filters selectFilter={selectFilter} params={params} />
                  {JSON.stringify(formatParams(params))}
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <ApisList apis={formatApis(apisMock)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "#fff" }}>Footer</div>
      <button
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
        style={{ position: "fixed", right: 20, bottom: 20 }}
      >
        ^
      </button>
    </div>
  );
}

export default App;
