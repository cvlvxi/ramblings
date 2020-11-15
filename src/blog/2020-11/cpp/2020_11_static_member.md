# Static Members & Linking 


See the declaration of the static variable in the class X

This needs to be defined in a place outside otherwise you get the error:

```
/usr/bin/ld: /home/PAMow1/prog-600542.o: in function `main':
prog.cpp:(.text+0x3): undefined reference to `X::x'
```

```cpp

#include <iostream>
 
class X {
	public:
	static int x;
};
 
//int X::x;
 
int main() {
	std::cout << X::x;
	return 0;
}

```

The error is when it tries to link the .o file since it can't find the method 



This maybe only relevant to certain version of C++ and new versions `might be able to resolve this smartly`