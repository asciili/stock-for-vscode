export interface Stock {
  // 名称
  name: string;

  // 代码
  code: string;

  // 当前价
  now: number;

  // 最低价
  low: number;

  // 最高价
  high: number;

  // 昨收价
  yesterday: number;

  // 盈亏百分比
  percent: number;

}

export default Stock;
