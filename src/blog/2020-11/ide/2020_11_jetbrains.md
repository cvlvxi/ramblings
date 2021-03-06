<!-- vscode-markdown-toc -->
* [Jetbrains](#Jetbrains)
	* [File Search](#FileSearch)
	* [Reconfigure Go Back + Go Forward](#ReconfigureGoBackGoForward)
	* [Is there a hotkey to see all symbols in a class?](#Isthereahotkeytoseeallsymbolsinaclass)
* [Visual Code](#VisualCode)
	* [Layout](#Layout)
	* [Python Path stuff](#PythonPathstuff)
	* [Vscode Variables](#VscodeVariables)
	* [Simple vscode debugging (lldb)](#Simplevscodedebugginglldb)
	* [Quick Find and replace in file](#QuickFindandreplaceinfile)
	* [Select just the word that has underscores](#Selectjustthewordthathasunderscores)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

# Utimate IDE Zombie Mode 

## <a name='Jetbrains'></a>Jetbrains

### <a name='FileSearch'></a>File Search

```
cmd + e
```

### <a name='ReconfigureGoBackGoForward'></a>Reconfigure Go Back + Go Forward

```
f11 - Go back
f12 - Go forward
```

### <a name='Isthereahotkeytoseeallsymbolsinaclass'></a>Is there a hotkey to see all symbols in a class?

I can't seem to find any hotkey but there's a `structure` tab which is the same view as Project

Best to move that to the top right

-----------------------------------------------------------

## <a name='VisualCode'></a>Visual Code

### <a name='Layout'></a>Layout

<img src="https://imgur.com/v97IO0e.png"/>

### <a name='PythonPathstuff'></a>Python Path stuff
- Add to .vscode/settings.json

```
    "python.autoComplete.extraPaths": [
        "/path/to/src",
    ],
    "python.linting.pylintEnabled": true,
    "python.analysis.extraPaths": [
        "/path/to/src"
    ],
```

### <a name='VscodeVariables'></a>Vscode Variables

- [Variable Documentation](https://code.visualstudio.com/docs/editor/variables-reference)

```
${workspaceFolder} - the path of the folder opened in VS Code
${workspaceFolderBasename} - the name of the folder opened in VS Code without any slashes (/)
${file} - the current opened file
${relativeFile} - the current opened file relative to workspaceFolder
${relativeFileDirname} - the current opened file's dirname relative to workspaceFolder
${fileBasename} - the current opened file's basename
${fileBasenameNoExtension} - the current opened file's basename with no file extension
${fileDirname} - the current opened file's dirname
${fileExtname} - the current opened file's extension
${cwd} - the task runner's current working directory on startup
${lineNumber} - the current selected line number in the active file
${selectedText} - the current selected text in the active file
${execPath} - the path to the running VS Code executable
${defaultBuildTask} - the name of the default build task
```

### <a name='Simplevscodedebugginglldb'></a>Simple vscode debugging (lldb)

- Install CodeLLDB Extension
- .vscode/launch.json

```json
{
  "configurations": [
    {
      "name": "Launch Example Debug",
      "type": "lldb",
      "request": "launch",
      "program": "${workspaceFolder}/build/src/example/example",
      "args": [],
    },
    {
      "name": "Launch Example2 Debug",
      "type": "lldb",
      "request": "launch",
      "program": "${workspaceFolder}/build/src/example2/example2",
      "args": [],
    },
    {
      "name": "Launch Sdoku Debug",
      "type": "lldb",
      "request": "launch",
      "program": "${workspaceFolder}/build/src/sdoku/sdoku",
      "args": [],
    }
  ]
}
```

### <a name='QuickFindandreplaceinfile'></a>Quick Find and replace in file

- Keybind : Select All Occurences Find Match
- I use ctrl + 2 

<video  controls>
  <source src="https://imgur.com/ZwbPOH8.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

### <a name='Selectjustthewordthathasunderscores'></a>Select just the word that has underscores

- settings.json

```json
    "editor.wordSeparators": "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?_",
```

- Now when you select the word it will not include these