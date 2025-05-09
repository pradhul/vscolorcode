import * as vscode from "vscode";

/**
 * Array of muted color pairs for status bar customization.
 * Each entry is an array with two elements:
 * - [0]: Background color in hex format
 * - [1]: Foreground (text) color in hex format
 */
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

/**
 * Returns a randomly selected color pair from the mutedStatusBarColors array.
 * @returns {string[]} An array containing background color at index 0 and foreground color at index 1
 */
const getRandomColor = (): string[] =>
  mutedStatusBarColors.at(Math.floor(Math.random() * mutedStatusBarColors.length))!;

/**
 * Updates the VS Code workspace color customizations with the selected color pair.
 * Applies the colors to status bar and title bar elements.
 * @param {string[]} selectedColor - Array containing background color at index 0 and foreground color at index 1
 */
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

/**
 * Activates the extension.
 * Registers the 'vscolorcode.colorcode' command and applies a random color to the workspace.
 * @param {vscode.ExtensionContext} context - The context provided by VS Code on activation
 */
export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("vscolorcode.colorcode", () => {
    const selectedColor: string[] = getRandomColor();
    updateColors(selectedColor);
  });

  const selectedColor: string[] = getRandomColor();
  updateColors(selectedColor);

  context.subscriptions.push(disposable);
}
