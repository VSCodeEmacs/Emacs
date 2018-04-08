import * as assert from 'assert'
import * as vscode from 'vscode'

import * as utils from './utils'
import {Editor} from '../src/editor'

suite("C-K functionality", () => {

    test("EOL behavior", async () => {

        let c = "line 1\nline 2\nline 3\n",
            e = new Editor()

        let doc = await vscode.workspace.openTextDocument({content: c, language: 'text'})
        await vscode.window.showTextDocument(doc)

        await e.kill()
        await e.kill()
        await e.kill()
        assert.equal(doc.getText(), "\nline 3\n")
        await e.yank()
        assert.equal(doc.getText(), c)

        await utils.moveCursorToBeginning()
        
        await e.kill()
        assert.equal(doc.getText(), "\nline 2\nline 3\n")
        await e.yank()
        assert.equal(doc.getText(), c)
        
        await utils.moveCursorToBeginning()

        await e.kill()
        await e.kill()
        assert.equal(doc.getText(), "line 2\nline 3\n")
        await e.yank()
        assert.equal(doc.getText(), c)

        await utils.moveCursorToBeginning()

        await e.kill()
        await e.kill()
        await e.kill()
        await e.kill()
        assert.equal(doc.getText(), "line 3\n")
        await e.yank()
        assert.equal(doc.getText(), c)
    });
});
