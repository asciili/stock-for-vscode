import Stock from "./stock";

export interface VscodeConfig {
  api: "netease" | "sina" | "tencent" | "xueqiu",

  interval: number,

  up_color: string,

  down_color: string,

  stocks: Stock[],

  up_percent: 0.5,

  down_percent: -0.5,
}

export default VscodeConfig;
