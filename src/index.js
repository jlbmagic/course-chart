import c3 from "c3";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
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
        console.log("data", d);
        // const index = d.index;
        // const month = months[index];
        // const name = d.name;
        // const value = d.value;
        const { index, name, value } = d;
        console.log("INDEX", index);
        console.log("Month", month);
        const newObj = { month, name, value };
        console.log("NO", newObj);
        //{month:"Mar"}
        FileMaker.PerformScript("On Chart Click", JSON.stringify(newObj));
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
  window.loadData = function (json) {
    const obj = JSON.parse(json);
    // console.log(obj);
    const data = obj.data;
    console.log(data);
    chart.load({
      json: data,
      keys: {
        x: "month",
        value: ["Bananas"],
      },
    });
  };
};
