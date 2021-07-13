import _ from "lodash";

export const formatApis = (apis) => {
  const example = apis.entries;
  const keys_ = _.groupBy(example, "Category");
  const f = Object.keys(keys_).map((i) => {
    return {
      Category: i,
      apis: keys_[i],
      length: keys_[i].length,
    };
  });

  // try this
  // console.log({ data: f, count: apis.count });

  return {
    data: f,
    count: apis.count,
  };
};

export const formatParams = (params) => {
  let obj = { ...params };

  for (let key in obj) {
    obj[key] = obj[key] || null;
  }

  return obj;
};

export const formatCategory = (str = "") => (!str ? "" : str).toLowerCase().replace(/\s/g, "-");

export const scrollToElement = (y) => {
  window.scroll({ top: y, behavior: "smooth" });
};
