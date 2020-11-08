<!-- vscode-markdown-toc -->
* [Getting started with emscripten](#Gettingstartedwithemscripten)
	* [Installation of emscripten](#Installationofemscripten)
	* [Make the "latest" SDK "active" for the current user. (writes .emscripten file)](#MakethelatestSDKactiveforthecurrentuser.writes.emscriptenfile)
	* [Activate PATH and other environment variables in the current terminal](#ActivatePATHandotherenvironmentvariablesinthecurrentterminal)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->


## <a name='Gettingstartedwithemscripten'></a>Getting started with emscripten
- [Emscripten Official Page](https://emscripten.org/)

### <a name='Installationofemscripten'></a>Installation of emscripten
1. `git clone https://github.com/emscripten-core/emsdk.git`
2. `cd emsdk`
3. `./emsdk install latest` (make sure you use latest python3)

### <a name='MakethelatestSDKactiveforthecurrentuser.writes.emscriptenfile'></a>Make the "latest" SDK "active" for the current user. (writes .emscripten file)
4. `./emsdk activate latest`

### <a name='ActivatePATHandotherenvironmentvariablesinthecurrentterminal'></a>Activate PATH and other environment variables in the current terminal
5. `source ./emsdk_env.sh`
