# Class Notes

## Hello World

- Create a file with a `.js` extension. JavaScript files can be run in the terminal using `node fileName.js`. If there are no other files with a similar name, you can press the tab key to auto fill the rest of the filename in the terminal so that you don't have to type it all out. You can quickly rerun your code by simply pressing the the up arrow key to see the last command you entered in the terminal.

- Print your first line of js code using `console.log`. The computer will only ever print out what you explicitly tell it to. All the code you write will be executed when you run it but you can use console.log to verify if things are working and actually running as expected.

## Types

- There are several types of data in javascript. Some data can contain several smaller peices of data, such as arrays and objects. Arrays can contain a list of values including addional arrays, which would be reffered to as an array of arrays. It is also common to have a list of objects. Objects can have an array or even another object as a value. This would be a layered object.


## Variables

- Variables are containers that store data. They have to be created using `let` and can only be created once. The data being stored can be modified but the name of the variable cannot be changed. 

- Variable names start with a lower case letter and can't contain spaces or other fancy symbols. Either underscores between words or camelCasing can be used to name variables that need more descriptive names. 

- A good way of thinking (although not neccessarily accurate) is that the computer reads and executes code line by line, like a book. If the value of a variable is logged, then later modified, the earlier value of the variable will be shown since it was asked to log the value before it was told what the new value is. If the value is logged again after being modified, both the earlier value and the new value will be shown. 

## Operators

- Assigning a value to a variable uses one equal sign while checking if something is true requires either teo or three equal signs

- There are some shortcuts used for basic math opertions to change the value of a numerical variable. To quickly inrement or decrement a variable by 1, `++` and `--` can be used.

- Strings being joined together is called concatenation. A space character between words can be added by concatenating a string containg a space. 

## Conditionals

- If statments don't neccessarily need an else of or else statement. Those parts are considered optional and should only be used when needed.

- An if statement can contains multiple else if statements. Each statment can check multiple conditions by using a double ampersand inbetween each statement.
