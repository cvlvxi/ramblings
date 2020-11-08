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


## First Project Example
Let's build a Hello World app 

Git Repo: [https://github.com/cvlvxi/emscripten_testing](https://github.com/cvlvxi/emscripten_testing)

### Hello World

```c++
#include <iostream>

int main() { std::cout << "Hello World" << std::endl; }
```


### Basic Makefile

```makefile
BUILD_DIR=build
DEBUGGER=lldb

all: link_build

cmakebuild: makebuilddir
	(cd $(BUILD_DIR); emcmake cmake ..; emmake make)

link_build: cmakebuild
	((rm compile_commands.json 2> /dev/null || true) && ln -s $(BUILD_DIR)/compile_commands.json compile_commands.json)

makebuilddir:
	mkdir -p $(BUILD_DIR)

clean:
	rm -rf $(BUILD_DIR)

run: link_build
	./build/src/example/example

debug: link_build
	$(DEBUGGER) ./build/src/example/example
```

Note running emcmake and emmake 

### Compilation

Compiling an executable will output a `.js` and a `.wasm` file 

```bash
➜  example git:(master) ls -1
.
..
CMakeFiles
Makefile
cmake_install.cmake
example.js
example.wasm
```

### Linking js with a html file

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <script src="./example.js"></script>
    
</body>
</html>
```




