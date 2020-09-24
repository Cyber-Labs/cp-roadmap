---
title: Shifting from C to C++
author: Chirag Jain
author_title: Incoming SDE Intern @ Microsoft
author_url: https://www.facebook.com/profile.php?id=100005981172975
author_image_url: https://scontent.fbho1-2.fna.fbcdn.net/v/t1.0-9/118854839_1452819681594057_8968804622460589631_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=syNqJZRSahUAX_2msXL&_nc_ht=scontent.fbho1-2.fna&oh=41103a389ae68535c666033fe116301e&oe=5F931B46
tags: [c, c++, shift to c++]
---

This is a short guide, for those who are familiar with the syntax of C programming language and want to shift to C++, mainly for competitive programming.

<!--truncate-->

## Header Files

- In C,  you generally use the header files :
  - stdio.h
  - math.h
  - string.h

- In C++,  you generally use the header files :
  - iostream
  - cmath
  - cstring
  - Other STL libraries

- In C++, unlike C, you don’t need to include a bunch of header files. Instead you can include only one header file which will include most of the required header files :

```cpp
#include <bits/stdc++.h>
```

## Input Output Functions

- In C, the basic input output functions are scanf, printf, gets, puts.
- In C++, you use cin, cout, [getline](https://www.geeksforgeeks.org/getline-string-c/).
- For a new line, in C we use ‘\n’ in printf statement while we can use endl in cout statement in c++.
<br/>
<b>Caution</b>: endl slows down output, so it is better to use ‘\n’.
- To input a line i.e. to input a string with spaces we use gets in C while getline in C++.
- All the functions like cin, cout etc. are defined in a standard namespace. So, instead of directly using it we usually add a namespace to avoid writing std every time. You do not need to understand much about namespace. Just remember to add this statement at the top in your C++ code :
```cpp
using namespace std;
```

## Multiline inputs

Suppose you need to take the input in the following format :

1. The first line contains an integer, a floating point number and a character.
2. The second line contains a sentence, with spaces between the words.

Now, try running these codes.

- In C, the code for this would be :
```cpp
#include <stdio.h>
// No namespace in C

int main()
{
  int a;
  float b;
  char c;
  char d[100]; // No data-type for string

  scanf("%d %f %c",&a,&b,&c);
  scanf("\n");
  gets(d);
  printf("%d %f %c %s",a,b,c,d);
  return 0;
}
```

- In C++, the code would be :
```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
  int a;
  float b;
  char c;
  string d;

  cin>>a>>b>>c;
  gets(d);
  gets(d);
  cout<<a<<" "<<b<<" "<<c<<" "<<d;
  return 0;
}
```

- **Note** : Do note the use of two gets in cpp code (line 12) and ‘\n’ in scanf statement in C code (line 12). This is because when you press enter after taking a, b, c as input ‘\n’ gets stored in d. So, we need to input d again. In C code, we also take \n as input in scanf statement. So we don't need to use gets. If we do not use \n in scanf, then we will have to use two gets. This might be a little bit confusing but you shall understand it as you practice.

## Summarising the differences

For better understanding the differences, you can see this table below :

C                |                 C++      | Explanation
------------ | ------------- | -------------
```#include<stdio.h>```<br/> ```#include<math.h>``` <br/>.... | ```#include <bits/stdc++.h>``` | You need to include only one header file
No namespace statement | using namespace std; | Namespace std is used in cpp
int a;<br/>scanf(“%d”,&a);<br/>printf(“%d,a); | int a; <br/> cin >> a; <br/> cout << a; | Use of cin, cout in place of scanf and printf
int a; float b; char c;<br/>scanf(“%d %f %c”,&a,&b,&c);<br/>printf(“%d %f %c”,a,b,c); | int a; float b; char c;<br/> cin >> a >> b >> c;<br/>cout << a << b << c; | Multiple input output at the same time
printf(“%d\n”,a); | cout << a << endl; | To print some variable a followed by a newline character
char a[100]; <br/> scanf(“%s”,a); | char a[100];<br/>cin >> a; | To input a string without spaces
char a[100];<br/>gets(a); | string a;<br/>getline(cin,a); | To input a line <br/>Note - If you make a character array, you will have to use gets in cpp as well.
