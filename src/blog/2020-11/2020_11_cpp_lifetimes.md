# This is your Life!(time)

Remember that show with the old man interviewing another old person?

<img src="https://i2.wp.com/tvtonight.com.au/wp-content/uploads/mike-munro.jpg?resize=290%2C200/">

Well mate, just like that show C++ has a way of confusing the hell out of someone. By forcing them to think about the concept of lifetimes with very little help unlike a language like `rust` which has these concepts baked into the compiler and will give you nice warnings. 

Something to be super careful of is when dealing with ref or pointers and assigning them to something is be aware of when that something will be destroyed. 


Look at this code:
```c++
    const char& head_b = string_b[0]; // string_b is a std::string
```

Given that we are using a `const char&` we need to be sure that the `operator []` for whatever type string_b is will give you something that will not be deallocated.


```c++
    const char head_b = string[0]; 
```

This actually may be better given its just a char and no need to go indirectly via addresses 

Okay. If we look at this method `.substr()` 

```c++
    const string& tail_b = string_b.substr(1, string_b.length());

```

We're assinging it to a `const string&` but we know that .substr will return an rvalue copy of type string however if we think about the scope of that function call this may cause the `const string&` to point to something that has been deallocated

```c++
    const string tail_b = string_b.substr(1, string_b.length());
```

This however will cause the default constructor for string to be used for `string` and it may have implemented a move from the rvalue return from .substr of copy it it.

Something to be aware of and will avoid the use of the following:

<img src="https://i.pinimg.com/originals/83/5b/2b/835b2b1227522dc6467761fb904d1a34.jpg"/>



