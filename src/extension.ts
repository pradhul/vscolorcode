import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("vscolorcode.colorcode", () => {
    vscode.window.showInformationMessage("Hello World from VSColorCode!");
  });

  context.subscriptions.push(disposable);
}
