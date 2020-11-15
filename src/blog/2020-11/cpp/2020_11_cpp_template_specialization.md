<!-- vscode-markdown-toc -->
* 1. [Input Parameter Template Specialization](#InputParameterTemplateSpecialization)
* 2. [Return Type Template Specialization](#ReturnTypeTemplateSpecialization)
	* 2.1. [Gives a linker error](#Givesalinkererror)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

# Template Specialization 


Sometimes you just want to be a specialist like stallone in:

<img src="https://m.media-amazon.com/images/M/MV5BYjMwZDMwZTItMTc2MC00NDRlLWI3YmUtNTg0ZmQ3MzdhNDJmXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg"/>


##  1. <a name='InputParameterTemplateSpecialization'></a>Input Parameter Template Specialization

```c++

#include <iostream>
using namespace std;
using std::cout;

template <typename T> void dog(T a);

template <> void dog(int a) {
	cout << "This is an int " << a << '\n';
}

template <> void dog(std::string a) {
	cout << "This is a string " << a << '\n';
}


int main() {
	dog(1);
	dog(std::string("HelloWorld"));
	return 0;
}
```

##  2. <a name='ReturnTypeTemplateSpecialization'></a>Return Type Template Specialization


```cpp
#include <iostream>
using namespace std;
using std::cout;

template <typename T> T dog();

template <> int dog() {
		cout << "specialize int " << '\n';
	return 1;
}

template <> std::string dog() {
		cout << "specialize string" << '\n';
	return "helloworld";
}


int main() {
	cout << dog<int>() << '\n';
	cout << dog <std::string>() << '\n';
	cout << dog<float>() << '\n';
	return 0;
}
```

###  2.1. <a name='Givesalinkererror'></a>Gives a linker error

```
Compilation error #stdin compilation error #stdout 0s 4432KB
/usr/bin/ld: /home/UefTKu/ccpgQ4NF.o: in function `main':
prog.cpp:(.text.startup+0x8f): undefined reference to `float dog<float>()'
collect2: error: ld returned 1 exit status
```

It would be nice to add a static assert instead of a linker error since you can give it a message