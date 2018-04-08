import * as vscode from 'vscode'

export function moveCursorToBeginning(): Thenable<{}> {
    vscode.commands.executeCommand("cursorMove", {to: "wrappedLineStart", select: false})
    return vscode.commands.executeCommand("cursorMove", {to: "up", by: "line", select: false, value: Number.MAX_VALUE})
}
