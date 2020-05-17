import * as britecharts from "britecharts";
import { buildTemplate } from "./template";

export default (window: Window) => {
  const chartContainerId = "chartArea";

  window.document.body.innerHTML = buildTemplate(chartContainerId);

  const bar = britecharts.bar();

  console.log(bar.height(100).width(300));
};
