import * as vscode from "vscode";

const mutedStatusBarColors = [
  ["#6a8caf", "#ffffff"], //dustyBlue
  ["#78866b", "#ffffff"], //mutedOlive
  ["#9e9e9e", "#000000"], //warmGray
  ["#708090", "#ffffff"], //slateGray
  ["#a98ba5", "#000000"], //softPlum
  ["#5e8b8e", "#ffffff"], //desaturatedTeal
  ["#dcb7b7", "#000000"], //mistyRose
  ["#c2b280", "#000000"], //coolSand
  ["#b0c4de", "#000000"], //cloudBlue
  ["#8da399", "#000000"], //paleForestGreen
];

const getRandomColor = (): string[] =>
  mutedStatusBarColors.at(Math.floor(Math.random() * mutedStatusBarColors.length))!;

const updateColors = (selectedColor: string[]): void => {
  console.log("Current Color", selectedColor);
  const config = vscode.workspace.getConfiguration();
  config.update(
    "workbench.colorCustomizations",
    {
      "statusBar.background": `${selectedColor[0]}`,
      "statusBar.foreground": `${selectedColor[1]}`,
      "statusBar.noFolderBackground": `${selectedColor[0]}`,
      "statusBar.noFolderForeground": `${selectedColor[1]}`,
      "statusBar.debuggingBackground": `${selectedColor[0]}`,
      "statusBar.debuggingForeground": `${selectedColor[1]}`,
      "titleBar.activeBackground": `${selectedColor[0]}`,
      "titleBar.activeForeground": `${selectedColor[1]}`,
      "titleBar.inactiveBackground": `${selectedColor[0]}`,
      "titleBar.inactiveForeground": `${selectedColor[1]}`,
    },
    vscode.ConfigurationTarget.Workspace
  );
};

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("vscolorcode.colorcode", () => {
    const selectedColor: string[] = getRandomColor();
    updateColors(selectedColor);
  });

  const selectedColor: string[] = getRandomColor();
  updateColors(selectedColor);

  context.subscriptions.push(disposable);
}
