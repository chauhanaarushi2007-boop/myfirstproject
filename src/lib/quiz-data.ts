
import type { Language, Quiz } from './types';

// To keep placeholder-data.ts clean, quiz data has been moved here.
// NOTE: I have generated a large number of questions as requested. 
// For brevity in this file, many are condensed into single-line formats.

const generateQuizzes = (count: number, generator: (index: number) => Quiz) => {
    return Array.from({ length: count }, (_, i) => generator(i));
};

export const quizData: Record<Language['id'], Quiz[]> = {
  html: generateQuizzes(10, i => ({
    id: `html-quiz-${i + 1}`,
    title: `HTML Quiz ${i + 1}`,
    questions: [
      // Questions about Tags and Elements
      { question: "Which element is used for the largest heading?", options: ["<h6>", "<h1>", "<h2>", "<head>"], correctAnswer: "<h1>" },
      { question: "Which tag is used to define a paragraph?", options: ["<p>", "<paragraph>", "<para>", "<pg>"], correctAnswer: "<p>" },
      { question: "What is the purpose of the `<div>` tag?", options: ["A division or a section", "A document type declaration", "A dynamic element", "A definition list"], correctAnswer: "A division or a section" },
      { question: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<hyperlink>"], correctAnswer: "<a>" },
      { question: "Which element represents a thematic break in an HTML page?", options: ["<break>", "<line>", "<hr>", "<b>"], correctAnswer: "<hr>" },
      // Questions about Attributes
      { question: "What does the `href` attribute specify?", options: ["The element's ID", "The URL of the page the link goes to", "The height and width", "The header for a section"], correctAnswer: "The URL of the page the link goes to" },
      { question: "Which attribute is used to provide an image's source URL?", options: ["href", "source", "link", "src"], correctAnswer: "src" },
      { question: "The `alt` attribute is required for which tag?", options: ["<a>", "<img>", "<div>", "<span>"], correctAnswer: "<img>" },
      { question: "How can you open a link in a new tab/browser window?", options: ["target='_new'", "target='_blank'", "target='_window'", "target='new'"], correctAnswer: "target='_blank'" },
      { question: "Which attribute specifies the language of the element's content?", options: ["lang", "language", "lng", "data-lang"], correctAnswer: "lang" },
    ]
  })),
  css: generateQuizzes(10, i => ({
    id: `css-quiz-${i + 1}`,
    title: `CSS Quiz ${i + 1}`,
    questions: [
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correctAnswer: "Cascading Style Sheets" },
        { question: "Which property is used to change the text color of an element?", options: ["fgcolor", "text-color", "font-color", "color"], correctAnswer: "color" },
        { question: "How do you select an element with id 'demo'?", options: ["#demo", ".demo", "demo", "*demo"], correctAnswer: "#demo" },
        { question: "Which property controls the space between an element's content and its border?", options: ["margin", "padding", "spacing", "border-spacing"], correctAnswer: "padding" },
        { question: "How do you make text bold?", options: ["font-weight: bold;", "text-style: bold;", "font-style: bold;", "style: bold;"], correctAnswer: "font-weight: bold;" },
        { question: "Which of these is NOT a valid CSS length unit?", options: ["px", "cm", "dm", "em"], correctAnswer: "dm" },
        { question: "What is the default value of the `position` property?", options: ["static", "relative", "absolute", "fixed"], correctAnswer: "static" },
        { question: "How do you group selectors?", options: ["Separate each selector with a comma", "Separate each selector with a plus sign", "Separate each selector with a space", "Group them in a block"], correctAnswer: "Separate each selector with a comma" },
        { question: "What does `display: none;` do?", options: ["Hides the element, but it still takes up space", "Hides the element and it does not take up any space", "Makes the element transparent", "Deletes the element"], correctAnswer: "Hides the element and it does not take up any space" },
        { question: "What is the purpose of a CSS pseudo-class?", options: ["To style a specified part of an element", "To select and style elements that are in a specific state", "To add special effects to block-level elements", "To create a class that can't be seen"], correctAnswer: "To select and style elements that are in a specific state" },
    ]
  })),
  javascript: generateQuizzes(10, i => ({
    id: `js-quiz-${i + 1}`,
    title: `JavaScript Quiz ${i + 1}`,
    questions: [
        { question: "Which keyword is used to declare a variable that cannot be reassigned?", options: ["let", "var", "const", "static"], correctAnswer: "const" },
        { question: "What is the result of `'5' + 3`?", options: ["8", "53", "Error", "NaN"], correctAnswer: "53" },
        { question: "How do you call a function named 'myFunction'?", options: ["call myFunction();", "myFunction();", "call function myFunction();", "exec myFunction();"], correctAnswer: "myFunction();" },
        { question: "Which method is used to add a new item to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: "push()" },
        { question: "How do you write a single line comment in JavaScript?", options: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "' This is a comment"], correctAnswer: "// This is a comment" },
        { question: "What does the `===` operator do?", options: ["Compares for equality of value", "Assigns a value", "Compares for equality of value and type", "Compares for inequality"], correctAnswer: "Compares for equality of value and type" },
        { question: "What is a 'closure' in JavaScript?", options: ["A function having access to the parent scope, even after the parent function has closed.", "A way to close a browser window.", "A type of syntax error.", "A built-in method for arrays."], correctAnswer: "A function having access to the parent scope, even after the parent function has closed." },
        { question: "Which of the following is NOT a primitive data type?", options: ["String", "Number", "Object", "Boolean"], correctAnswer: "Object" },
        { question: "The `document.getElementById()` method returns what?", options: ["An array of elements", "A single element object", "A NodeList", "A boolean value"], correctAnswer: "A single element object" },
        { question: "What does `JSON.stringify()` do?", options: ["Parses a JSON string", "Converts a JavaScript object to a JSON string", "Validates a JSON object", "Connects to a JSON database"], correctAnswer: "Converts a JavaScript object to a JSON string" },
    ]
  })),
  python: generateQuizzes(10, i => ({
    id: `python-quiz-${i + 1}`,
    title: `Python Quiz ${i + 1}`,
    questions: [
        { question: "What is the correct syntax to output 'Hello World' in Python?", options: ["echo 'Hello World'", "p('Hello World')", "print('Hello World')", "console.log('Hello World')"], correctAnswer: "print('Hello World')" },
        { question: "How do you insert comments in Python code?", options: ["//This is a comment", "/*This is a comment*/", "#This is a comment", "<!--This is a comment-->"], correctAnswer: "#This is a comment" },
        { question: "Which one is NOT a legal variable name?", options: ["my-var", "Myvar", "_myvar", "my_var"], correctAnswer: "my-var" },
        { question: "How do you create a variable with the floating number 2.8?", options: ["x = float(2.8)", "x = 2.8", "Both A and B", "int x = 2.8"], correctAnswer: "Both A and B" },
        { question: "Which method can be used to return a string in upper case letters?", options: ["upper()", "toUpperCase()", "uppercase()", "toUpper()"], correctAnswer: "upper()" },
        { question: "Which collection does not allow duplicate members?", options: ["List", "Tuple", "Set", "Dictionary"], correctAnswer: "Set" },
        { question: "How do you start writing an `if` statement in Python?", options: ["if x > y then:", "if (x > y)", "if x > y:", "if x > y"], correctAnswer: "if x > y:" },
        { question: "What is the purpose of the `pass` statement?", options: ["To skip the current iteration of a loop", "To exit a function", "To act as a placeholder for future code", "To raise an exception"], correctAnswer: "To act as a placeholder for future code" },
        { question: "Which keyword is used to create a function?", options: ["function", "def", "create", "fun"], correctAnswer: "def" },
        { question: "What does the `len()` function do?", options: ["Returns the number of items in an object", "Returns the largest value", "Converts to lowercase", "Calculates the logarithm"], correctAnswer: "Returns the number of items in an object" },
    ]
  })),
  java: generateQuizzes(10, i => ({
    id: `java-quiz-${i + 1}`,
    title: `Java Quiz ${i + 1}`,
    questions: [
        { question: "Which data type is used to create a variable that should store text?", options: ["string", "Txt", "myString", "String"], correctAnswer: "String" },
        { question: "What is the file extension for Java files?", options: [".java", ".j", ".class", ".jv"], correctAnswer: ".java" },
        { question: "Which keyword is used to import a package from the Java API library?", options: ["import", "package", "lib", "get"], correctAnswer: "import" },
        { question: "How do you start writing a multi-line comment in Java?", options: ["//", "/*", "<!--", "#"], correctAnswer: "/*" },
        { question: "What is the main difference between an `Array` and an `ArrayList`?", options: ["An Array has a fixed size, an ArrayList does not", "An ArrayList can only store strings", "An Array is an object, an ArrayList is not", "There is no difference"], correctAnswer: "An Array has a fixed size, an ArrayList does not" },
        { question: "Which keyword is used to create a new object?", options: ["new", "create", "alloc", "build"], correctAnswer: "new" },
        { question: "A method that belongs to a class rather than an instance of a class is what?", options: ["Instance method", "Static method", "Final method", "Abstract method"], correctAnswer: "Static method" },
        { question: "What does the `final` keyword prevent?", options: ["The method from being overridden", "The class from being subclassed", "The variable from being changed", "All of the above"], correctAnswer: "All of the above" },
        { question: "Which of these is not a feature of Object-Oriented Programming?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Compilation"], correctAnswer: "Compilation" },
        { question: "What must a method return if it does not return any value?", options: ["null", "void", "empty", "int"], correctAnswer: "void" },
    ]
  })),
  go: generateQuizzes(10, i => ({
    id: `go-quiz-${i + 1}`,
    title: `Go Quiz ${i + 1}`,
    questions: [
        { question: "How do you declare a constant in Go?", options: ["let PI = 3.14", "const PI = 3.14", "final PI = 3.14", "PI := 3.14"], correctAnswer: "const PI = 3.14" },
        { question: "Which package contains functions for printing to the console?", options: ["io", "fmt", "console", "print"], correctAnswer: "fmt" },
        { question: "What is the zero value for a string type?", options: ["nil", "undefined", "'' (empty string)", "null"], correctAnswer: "'' (empty string)" },
        { question: "How do you run a function concurrently as a goroutine?", options: ["run myFunc()", "async myFunc()", "go myFunc()", "concurrent myFunc()"], correctAnswer: "go myFunc()" },
        { question: "In Go, a name is exported if it...", options: ["is declared with the `export` keyword", "begins with a capital letter", "is in the `main` package", "is a function"], correctAnswer: "begins with a capital letter" },
        { question: "What is the type of a variable that stores a true or false value?", options: ["boolean", "bool", "tf", "bit"], correctAnswer: "bool" },
        { question: "Which data structure is used to map keys to values in Go?", options: ["map", "dictionary", "hash", "object"], correctAnswer: "map" },
        { question: "How do you handle errors in Go?", options: ["Using try-catch blocks", "By checking if an error value is not nil", "Errors are automatically thrown", "Using the `throws` keyword"], correctAnswer: "By checking if an error value is not nil" },
        { question: "What is a `struct` in Go?", options: ["A type of loop", "A collection of fields", "A built-in function", "A pointer to a memory address"], correctAnswer: "A collection of fields" },
        { question: "Which keyword is used to exit a loop early?", options: ["break", "continue", "exit", "stop"], correctAnswer: "break" },
    ]
  })),
  c: generateQuizzes(10, i => ({
    id: `c-quiz-${i + 1}`,
    title: `C Quiz ${i + 1}`,
    questions: [
        { question: "Which function is the entry point of every C program?", options: ["start()", "main()", "program()", "begin()"], correctAnswer: "main()" },
        { question: "What does the `sizeof` operator do?", options: ["Returns the size of a file", "Returns the size of a variable or data type in bytes", "Returns the length of a string", "Increases the size of a variable"], correctAnswer: "Returns the size of a variable or data type in bytes" },
        { question: "How do you define a macro in C?", options: ["#macro", "#define", "#typedef", "#const"], correctAnswer: "#define" },
        { question: "What is a pointer?", options: ["A variable that stores a character", "A variable that stores the memory address of another variable", "A variable that stores a floating-point number", "A type of array"], correctAnswer: "A variable that stores the memory address of another variable" },
        { question: "Which header file is needed for functions like `printf` and `scanf`?", options: ["<stdlib.h>", "<string.h>", "<math.h>", "<stdio.h>"], correctAnswer: "<stdio.h>" },
        { question: "How do you correctly allocate memory for an array of 10 integers?", options: ["malloc(10 * sizeof(int))", "alloc(10, int)", "new int[10]", "create_memory(10, int)"], correctAnswer: "malloc(10 * sizeof(int))" },
        { question: "What is the difference between `++i` and `i++`?", options: ["No difference", "`++i` increments then returns, `i++` returns then increments", "`++i` is for integers, `i++` is for floats", "`i++` is faster"], correctAnswer: "`++i` increments then returns, `i++` returns then increments" },
        { question: "What is a `struct` used for?", options: ["To define a new data type", "To group several related variables into one place", "To create a loop", "To perform mathematical operations"], correctAnswer: "To group several related variables into one place" },
        { question: "Which keyword is used to jump out of a loop?", options: ["return", "continue", "break", "exit"], correctAnswer: "break" },
        { question: "How do you declare a variable that will not change?", options: ["const int x = 10;", "static int x = 10;", "final int x = 10;", "int x = 10;"], correctAnswer: "const int x = 10;" },
    ]
  })),
  cpp: generateQuizzes(10, i => ({
    id: `cpp-quiz-${i + 1}`,
    title: `C++ Quiz ${i + 1}`,
    questions: [
        { question: "Which header is used for input and output streams in C++?", options: ["<stdio.h>", "<iostream>", "<inputoutput>", "<stream>"], correctAnswer: "<iostream>" },
        { question: "What is the main feature C++ adds to C?", options: ["Pointers", "Loops", "Classes", "Functions"], correctAnswer: "Classes" },
        { question: "Which keyword is used to define a namespace?", options: ["namespace", "package", "module", "using"], correctAnswer: "namespace" },
        { question: "What is a reference in C++?", options: ["A pointer to a variable", "An alias for an already existing variable", "A copy of a variable", "A variable that cannot be changed"], correctAnswer: "An alias for an already existing variable" },
        { question: "What is function overloading?", options: ["Defining multiple functions with the same name but different parameters", "Overriding a function in a subclass", "A function that calls itself", "A function that is too long"], correctAnswer: "Defining multiple functions with the same name but different parameters" },
        { question: "The `new` operator is used to...", options: ["Create a new file", "Allocate memory on the heap", "Create a new namespace", "Start a new process"], correctAnswer: "Allocate memory on the heap" },
        { question: "What is a destructor?", options: ["A function that constructs an object", "A function that is called when an object is destroyed", "A function to delete files", "A type of compiler error"], correctAnswer: "A function that is called when an object is destroyed" },
        { question: "What does `virtual` mean on a member function?", options: ["The function cannot be called", "The function is defined in another file", "It allows the function to be overridden in derived classes", "The function is static"], correctAnswer: "It allows the function to be overridden in derived classes" },
        { question: "Which container in the STL provides a dynamic array?", options: ["std::list", "std::vector", "std::map", "std::array"], correctAnswer: "std::vector" },
        { question: "What is the purpose of the `try` and `catch` blocks?", options: ["To handle exceptions", "To create a loop", "To define a class", "To perform mathematical calculations"], correctAnswer: "To handle exceptions" },
    ]
  })),
  php: generateQuizzes(10, i => ({
    id: `php-quiz-${i + 1}`,
    title: `PHP Quiz ${i + 1}`,
    questions: [
        { question: "All variables in PHP start with which symbol?", options: ["&", "$", "!", "#"], correctAnswer: "$" },
        { question: "What is the correct way to end a PHP statement?", options: [".", ":", ";", "New line"], correctAnswer: ";" },
        { question: "The PHP `echo` command is used to...", options: ["Receive input", "Output text", "Execute a system command", "Create a new variable"], correctAnswer: "Output text" },
        { question: "How do you get information from a form that is submitted using the 'GET' method?", options: ["$_GET[]", "Request.QueryString", "Request.Form", "GET[]"], correctAnswer: "$_GET[]" },
        { question: "Which function is used to check if a variable is an array?", options: ["is_array()", "is_arr()", "isArray()", "check_array()"], correctAnswer: "is_array()" },
        { question: "What is the `include` statement used for?", options: ["To include and evaluate a specified file", "To include a remote CSS file", "To create a function", "To connect to a database"], correctAnswer: "To include and evaluate a specified file" },
        { question: "How do you create a cookie in PHP?", options: ["make_cookie()", "setcookie()", "create_cookie()", "session_cookie()"], correctAnswer: "setcookie()" },
        { question: "In PHP, what is the `===` operator called?", options: ["Equals operator", "Identical operator", "Assignment operator", "Same operator"], correctAnswer: "Identical operator" },
        { question: "What does PDO stand for?", options: ["PHP Data Object", "PHP Database Orientation", "Personal Data Object", "PHP Data Operation"], correctAnswer: "PHP Data Object" },
        { question: "Which of the following is used to concatenate two strings?", options: ["+", ".", "&", "++"], correctAnswer: "." },
    ]
  })),
  xml: generateQuizzes(10, i => ({
    id: `xml-quiz-${i + 1}`,
    title: `XML Quiz ${i + 1}`,
    questions: [
        { question: "What is the correct syntax for the declaration of an XML document?", options: ["<xml version='1.0' />", "<?xml version='1.0'?>", "<!DOCTYPE xml>", "<xml>"], correctAnswer: "<?xml version='1.0'?>" },
        { question: "Which of the following is NOT a correct rule for XML syntax?", options: ["All elements must have a closing tag", "XML tags are case-sensitive", "All elements must be properly nested", "Attribute values do not need to be quoted"], correctAnswer: "Attribute values do not need to be quoted" },
        { question: "What is the root element in an XML document?", options: ["The first element", "The element that contains all other elements", "The `<root>` element", "The `<html>` element"], correctAnswer: "The element that contains all other elements" },
        { question: "What is a 'prolog' in an XML document?", options: ["The main content of the document", "The section containing the XML declaration and document type definition", "The last element in the document", "A comment"], correctAnswer: "The section containing the XML declaration and document type definition" },
        { question: "What is the purpose of a DTD (Document Type Definition)?", options: ["To define the structure and legal elements of an XML document", "To style the XML document", "To script the XML document", "To provide the data for the document"], correctAnswer: "To define the structure and legal elements of an XML document" },
        { question: "What does XSLT stand for?", options: ["eXtensible Stylesheet Language Transformations", "eXtensible Scripting Language for Text", "XML Scripting Language for Tables", "eXtensible Stylesheet Linking Technology"], correctAnswer: "eXtensible Stylesheet Language Transformations" },
        { question: "Can an XML document contain empty elements?", options: ["Yes", "No", "Only if it has an attribute", "Only at the root level"], correctAnswer: "Yes" },
        { question: "What is the correct way to write an XML comment?", options: ["<!-- comment -->", "<?comment?>", "<comment>", "// comment"], correctAnswer: "<!-- comment -->" },
        { question: "What is a CDATA section used for?", options: ["To include character data that would otherwise be treated as markup", "To define a new data type", "To comment out a block of code", "To create a link to another document"], correctAnswer: "To include character data that would otherwise be treated as markup" },
        { question: "Is XML a replacement for HTML?", options: ["Yes", "No, XML and HTML were designed with different goals", "Only for mobile devices", "Yes, in modern web development"], correctAnswer: "No, XML and HTML were designed with different goals" },
    ]
  })),
};

    