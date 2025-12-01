// slice()
// slice() extracts a part of the string based on the given stating-index and ending-index and returns a new string.
// Define a string variable 
var A = 'Geeks for Geeks';
// Use the slice() method to extract a substring
var b = A.slice(0, 5);
var c = A.slice(6, 9);
var d = A.slice(10);
// Output the value of variable
console.log(b);
console.log(c);
console.log(d);

// substring()
// substring() returns the part of the given string from the start index to the end index. Indexing starts from zero (0).
// Define a string variable
var str = "Mind, Power, Soul";
// Use the substring() method to extract a substring 
var part = str.substring(6, 11);
// Output the value of variable
console.log(part);

// substr()
// substr() This method returns the specified number of characters from the specified index from the given string. It extracts a part of the original string.
// Define a string variable 'str'
var str = "Mind, Power, Soul";
// Use the substr() method to extract a substring f
var part = str.substr(6, 5);
// Output the value of variable
console.log(part);

// replace()
// replace() replaces a part of the given string with another string or a regular expression. The original string will remain unchanged.
// Define a string variable 'str' 
var str = "Mind, Power, Soul";
// Use the replace() method to replace the substring
var part = str.replace("Power", "Space");
// Output the resulting string after replacement
console.log(part);

// replaceAll()
// replaceAll() returns a new string after replacing all the matches of a string with a specified string or a regular expression. The original string is left unchanged after this operation.
// Define a string variable 'str'
var str = "Mind, Power, Power, Soul";
// Use the replaceAll() method to replace all occurrences
//of "Power" with "Space" in the string 'str'
var part = str.replaceAll("Power", "Space");
// Output the resulting string after replacement
console.log(part);


// toUpperCase()
// toUpperCase() converts all the characters present in the String to upper case and returns a new String with all characters in upper case. This method accepts single parameter stringVariable string that you want to convert in upper case.
// Define a string variable
var gfg = 'GFG ';
// Define another string variable 
var geeks = 'stands-for-GeeksforGeeks';
// Convert the string 'geeks' to uppercase using the toUpperCase() method
console.log(geeks.toUpperCase());


// toLowerCase()
// toLowerCase() converts all the characters present in the so lowercase and returns a new string with all the characters in lowercase.
// Define a string variable
var gfg = 'GFG ';
// Define a string variable 
var geeks = 'stands-for-GeeksforGeeks';
// Convert the string 'geeks' to lowercase using the toLowerCase() method
console.log(geeks.toLowerCase());

// concat()
// concat() combines the text of two strings and returns a new combined or joined string. To concatenate two strings, we use the concat() method on one object of string and send another object of string as a parameter. This method accepts one argument. The variable contains text in double quotes or single quotes.
var gfg = 'GFG ';
var geeks = 'stands for GeeksforGeeks';
// Accessing concat method on an object
// of String passing another object 
// as a parameter
console.log(gfg.concat(geeks));

// trim()
// trim() is used to remove either white spaces from the given string. This method returns a new string with removed white spaces. This method is called on a String object. This method doesn't accept any parameter.

 gfvarg = 'GFG    ';
var geeks = 'stands-for-GeeksforGeeks';
// Storing new object of string
// with removed white spaces
var newGfg = gfg.trim();
// Old length
console.log(gfg.length);
​
// New length
console.log(newGfg.length)

// trimStart()
// trimStart() removes whitespace from the beginning of a string. The value of the string is not modified in any manner, including any whitespace present after the string.

// Define a string variable 
var str = "  Soul";
// Output the original value of the string 
console.log(str);
// Use the trimStart() method to remove leading whitespace from the string 'str'
var part = str.trimStart();
// Output the resulting string after removing leading whitespace
console.log(part);

// trimEnd()
// trimEnd() removes white space from the end of a string. The value of the string is not modified in any manner, including any white-space present before the string.
// Define a string variable 
var str = "Soul  ";
​
// Output the original value of the string 'str'
console.log(str);
​
// Use the trimEnd() method to remove trailing whitespace from the string 'str'
var part = str.trimEnd();
​
// Output the resulting string after removing trailing whitespace
console.log(part);


// padStart()
// padStart() pad a string with another string until it reaches the given length. The padding is applied from the left end of the string.




// Define a string variable 
var stone = "Soul";
​
// Use the padStart() method to add padding characters "Mind "
//to the beginning of the string 'stone' 
stone = stone.padStart(9, "Mind ");
​
// Output the resulting string after padding
console.log(stone);


// padEnd()
// padEnd() pad a string with another string until it reaches the given length. The padding is applied from the right end of the string.




// Define a string variable 
var stone = "Soul";
​
// Use the padEnd() method to add padding characters
//" Power" to the end of the string 'stone' 
stone = stone.padEnd(10, " Power");
​
// Output the resulting string after padding
console.log(stone);

// charAt()
// charAt() returns the character at the specified index. String in JavaScript has zero-based indexing.

var gfg = 'GeeksforGeeks';
var geeks = 'GfG is the best platform to learn and\n'+
'experience Computer Science.';
​
// Print the string as it is
console.log(gfg); 
​
console.log(geeks); 
​
// As string index starts from zero
// It will return first character of string
console.log(gfg.charAt(0)); 
​
console.log(geeks.charAt(5));


// charCodeAt()
// charCodeAt() returns a number that represents the Unicode value of the character at the specified index. This method accepts one argument.

var gfg = 'GeeksforGeeks';
var geeks = 'GfG is the best platform\n\
to learn and experience\n\
Computer Science.';
​
// Return a number indicating Unicode
// value of character at index 0 ('G')
console.log(gfg.charCodeAt(0));
console.log(geeks.charCodeAt(5));


// split()
// split() splits the string into an array of sub-strings. This method returns an array. This method accepts a single parameter character on which you want to split the string.

var gfg = 'GFG '
var geeks = 'stands-for-GeeksforGeeks'
​
// Split string on '-'. 
console.log(geeks.split('-'))

Output
[ 'stands', 'for', 'GeeksforGeeks' ]