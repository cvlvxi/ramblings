# Simple VS code debugging c++


1. Install CodeLLDB Extension



2. In .vscode/launch.json


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