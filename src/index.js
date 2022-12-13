import c3 from "c3";

window.loadChart = function (json) {
  console.log("loadChart", json);
  const obj = JSON.parse(json);
  // console.log(obj);
  const data = obj.data;
  const chartType = obj.chartType;
  // console.log(chartType);
  const options = {
    // size: { width: 500, height: 1200 },
    bindto: "#chart",
    axis: {
      x: { type: "category" },
      y: {},
    },
    data: {
      onclick: function (d) {
        console.log("onclick", d);
      },
      labels: true,
      type: chartType,
      json: data,
      keys: {
        x: "month",
        value: ["Peaches", "Pears", "Apples"],
      },
    },
  };
  const chart = c3.generate(options);

  window.transformChart = function (type) {
    chart.transform(type);
  };
};
