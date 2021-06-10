// Vscode
import * as vscode from 'vscode';

// Npm
import dayjs from "dayjs";
import { stocks } from 'stock-api';

// Utils
import global from '../utils/global';
import { getConfig } from '../utils/config';

// Types
import Stock from '../../types/stock';
import Command from '../../types/command';


export async function activate() {
  vscode.window.showInformationMessage('stock watch');

  main();
};

export async function main() {
  const config = getConfig();

  const codes = config.stocks.map(stock => stock.code);

  const items = await (new stocks['sina']).getStocks(codes);

  updateStatusBar(config.stocks.map(stock => {
    const item = items.find(item => item.code === stock.code);

    return { ...stock, ...item };
  }));

  global.timer && clearTimeout(global.timer);
  global.timer = setTimeout(() => main(), config.interval * 1000);
}


export async function updateStatusBar(stocks: Stock[]) {
  let totalIncome = 0;
  let totalAmount = 0;

  const config = getConfig();

  global.statusBars.map(statusBar => statusBar.hide());

  global.statusBars = stocks
    .map(stock => {
      const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 3);

      const baseData = `「${stock.name}」${stock.now.toFixed(2)} ${(stock.percent * 100).toFixed(2)}%`;

      statusBar.color = stock.percent > 0 ? config.up_color : config.down_color;
      statusBar.text = `${baseData}`;

      if (stock.percent > config.up_percent * (global.up_steps + 1)) {
        global.up_steps++;
        vscode.window.showInformationMessage(`${baseData}`);
      }

      if (stock.percent < config.down_percent * (global.down_steps + 1)) {
        global.down_steps++;
        vscode.window.showErrorMessage(`${baseData}`);
      }

      return statusBar;
    });

  global.statusBars.map(statusBar => statusBar.show());
}

export function deactivate() {
  global.timer && clearInterval(global.timer);
  global.statusBars.map(statusBar => statusBar.hide());
};

const commend: Command = {
  name: 'stock-for-vscode.watch',
  activate: activate,
  deactivate: deactivate,
};

export default commend;
