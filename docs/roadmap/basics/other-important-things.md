---
id: other-important-things
title: Some other important things
sidebar_label: Some other important things
description: Some important things to know, before starting competitive programming
---

## Fast Input/Output

- In C++, for fast input / output, while using cin and cout, use these lines :

```cpp
int main()
{
ios_base::sync_with_stdio(false);
cin.tie(NULL);
cout.tie(NULL);
// all your code below this
….
}
```
- These above lines makes cin, cout work faster. It is advised to add these statements in all your codes.

:::tip

Also for fast output, **don’t use cout << endl**. Instead **use cout << ‘\n’ for a newline**. It works faster.

:::

## Avoid common mistakes

- You must become familiar with the following :
  - Common errors on online judges like TLE, MLE, Runtime error, Compile error and how to get rid of them
  - When does overflow occur ? How to prevent overflow ?
  - How to compare floating point values, like doubles ? (we can’t simply use == )

- You may refer to [this great blog](https://www.hackerearth.com/practice/notes/getting-started-with-the-sport-of-programming/), to get familiar with these.

:::tip

To get rid of type-casting int to long long multiple times for preventing overflow, you may want to write this at the top:
```cpp
#define int long long
```
For this to work, also replace ```int main()``` by :
```cpp
int32_t main()
```
:::

## Session Slides

- The whiteboard slides, used during the introduction session, are available [here](https://drive.google.com/file/d/1vaPTgV7WbH4jE3hh-0RNtfzyAZTDs-Sj/view?usp=sharing)