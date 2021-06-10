// Vscode
import * as vscode from 'vscode';

// Utils
import global from '../utils/global';

// Types
import Command from '../../types/command';

export async function activate() {
  vscode.window.showErrorMessage('stock unwatch');

  global.timer && clearInterval(global.timer);
  global.statusBars.map(statusBar => statusBar.hide());
};

export function deactivate() { };

const commend: Command = {
  name: 'stock-for-vscode.unwatch',
  activate: activate,
  deactivate: deactivate,
};

export default commend;
