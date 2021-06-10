// Vscode
import * as vscode from 'vscode';

// Types
import Stock from '../../types/stock';
import VscodeConfig from '../../types/vscode-config';

export function initStocks(stocks: any[]): Stock[] {
  return stocks.map(stock => ({
    name: stock.name || '',
    code: stock.code || '',
    now: stock.now || 0,
    low: stock.low || 0,
    high: stock.high || 0,
    percent: stock.percent || 0,
    yesterday: stock.yesterday || 0,

    watch_low: stock.watch_low || 0,
    watch_high: stock.watch_high || 0,
  }));
}

export function getConfig(): VscodeConfig {
  const tool = vscode.workspace.getConfiguration();

  return {
    api: tool.get('stock-for-vscode.api') || 'sina',
    stocks: initStocks(tool.get('stock-for-vscode.stocks') || []),

    interval: tool.get('stock-for-vscode.interval') || 100,
    up_color: tool.get('stock-for-vscode.up_color') || '#ffffff',
    down_color: tool.get('stock-for-vscode.down_color') || '#000000',

    up_percent: tool.get('stock-for-vscode.up_percent') || 0.5,
    down_percent: tool.get('stock-for-vscode.down_percent') || -0.5,
  };
}

const config: VscodeConfig = getConfig();

export default config;
