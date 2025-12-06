import type { Language, Quiz } from './types';

export const quizData: Record<Language['id'], Quiz> = {
  html: {
    title: "HTML Fundamentals",
    questions: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
      },
      {
        question: "Which HTML element is used to specify a header for a document or section?",
        options: ["<head>", "<header>", "<h1>", "<heading>"],
        correctAnswer: "<header>"
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<lb>", "<break>", "<br>", "<newline>"],
        correctAnswer: "<br>"
      },
      {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: ["src", "title", "alt", "longdesc"],
        correctAnswer: "alt"
      },
      {
        question: "Which HTML element is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correctAnswer: "<ul>"
      }
    ]
  },
  css: {
    title: "CSS Fundamentals",
    questions: [
      {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
      },
      {
        question: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        correctAnswer: "background-color"
      },
      {
        question: "How do you apply a style to all <p> elements?",
        options: ["p { ... }", ".p { ... }", "#p { ... }", "all.p { ... }"],
        correctAnswer: "p { ... }"
      },
      {
        question: "What is the correct CSS syntax for making all the <p> elements bold?",
        options: ["<p style='font-weight:bold;'>", "p {font-weight:bold;}", "p {text-size:bold;}", "<p style='text-size:bold;'>"],
        correctAnswer: "p {font-weight:bold;}"
      },
       {
        question: "Which property is used to change the font of an element?",
        options: ["font-style", "font-family", "font-weight", "font-variant"],
        correctAnswer: "font-family"
      }
    ]
  },
  javascript: {
    title: "JavaScript Fundamentals",
    questions: [
      {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<script>", "<javascript>", "<js>", "<scripting>"],
        correctAnswer: "<script>"
      },
      {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
        correctAnswer: "alert('Hello World');"
      },
      {
        question: "How do you declare a variable in JavaScript?",
        options: ["v carName;", "variable carName;", "var carName;", "let carName;"],
        correctAnswer: "let carName;"
      },
      {
        question: "Which operator is used to assign a value to a variable?",
        options: ["=", "*", "-", "x"],
        correctAnswer: "="
      },
      {
        question: "What will the following code return: Boolean(10 > 9)?",
        options: ["false", "true", "NaN", "undefined"],
        correctAnswer: "true"
      }
    ]
  },
  python: {
    title: "Python Fundamentals",
    questions: [
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "fun", "define"],
        correctAnswer: "def"
      },
      {
        question: "What is the correct file extension for Python files?",
        options: [".pyth", ".pt", ".py", ".pyt"],
        correctAnswer: ".py"
      },
      {
        question: "How do you create a variable with the numeric value 5?",
        options: ["x = 5", "x = int(5)", "Both of the above", "Neither of the above"],
        correctAnswer: "Both of the above"
      },
      {
        question: "Which method can be used to remove any whitespace from both the beginning and the end of a string?",
        options: ["strip()", "trim()", "len()", "ptrim()"],
        correctAnswer: "strip()"
      },
       {
        question: "Which collection is ordered, changeable, and allows duplicate members?",
        options: ["Tuple", "Set", "Dictionary", "List"],
        correctAnswer: "List"
      }
    ]
  },
  java: {
    title: "Java Fundamentals",
    questions: [
      {
        question: "What is a correct syntax to output 'Hello World' in Java?",
        options: ["print('Hello World');", "System.out.println('Hello World');", "echo('Hello World');", "Console.WriteLine('Hello World');"],
        correctAnswer: "System.out.println('Hello World');"
      },
      {
        question: "Which data type is used to create a variable that should store text?",
        options: ["String", "string", "myString", "Txt"],
        correctAnswer: "String"
      },
      {
        question: "How do you create a variable with the floating number 2.8?",
        options: ["float x = 2.8f;", "x = 2.8f;", "int x = 2.8;", "byte x = 2.8"],
        correctAnswer: "float x = 2.8f;"
      },
       {
        question: "Which method can be used to find the length of a string?",
        options: ["len()", "length()", "getSize()", "getLength()"],
        correctAnswer: "length()"
      },
      {
        question: "Which operator is used to compare two values?",
        options: ["=", "==", "<>", "><"],
        correctAnswer: "=="
      }
    ]
  },
  go: {
    title: "Go Fundamentals",
    questions: [
        {
            question: "What is the entry point for a Go program?",
            options: ["func start()", "func main()", "func begin()", "func run()"],
            correctAnswer: "func main()"
        },
        {
            question: "How do you declare a variable in Go?",
            options: ["var name string", "string name", "variable name string", "let name string"],
            correctAnswer: "var name string"
        },
        {
            question: "Which keyword is used to import packages in Go?",
            options: ["import", "include", "require", "uses"],
            correctAnswer: "import"
        },
        {
            question: "How do you print a line in Go?",
            options: ["fmt.PrintLine()", "fmt.Println()", "fmt.Print()", "fmt.Printf()"],
            correctAnswer: "fmt.Println()"
        },
        {
            question: "What is a goroutine?",
            options: ["A function pointer", "A lightweight thread of execution", "A type of variable", "A package manager"],
            correctAnswer: "A lightweight thread of execution"
        }
    ]
  },
  c: {
      title: "C Fundamentals",
      questions: [
          {
              question: "What is the purpose of the #include directive in C?",
              options: ["To define a macro", "To include the content of a file", "To declare a function", "To start a comment"],
              correctAnswer: "To include the content of a file"
          },
          {
              question: "How do you declare a pointer in C?",
              options: ["int *p;", "int &p;", "pointer p;", "int p;"],
              correctAnswer: "int *p;"
          },
          {
              question: "Which function is used to allocate memory in C?",
              options: ["alloc()", "malloc()", "new()", "allocate()"],
              correctAnswer: "malloc()"
          },
          {
              question: "What is the correct way to write a single-line comment in C?",
              options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
              correctAnswer: "// This is a comment"
          },
          {
              question: "What is the size of `int` in C?",
              options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the system"],
              correctAnswer: "Depends on the system"
          }
      ]
  },
  cpp: {
    title: "C++ Fundamentals",
    questions: [
        {
            question: "Which of the following is used for output in C++?",
            options: ["cin", "cout", "printf", "scanf"],
            correctAnswer: "cout"
        },
        {
            question: "How do you create a reference variable in C++?",
            options: ["int &ref = x;", "int *ref = &x;", "ref x;", "int ref = &x;"],
            correctAnswer: "int &ref = x;"
        },
        {
            question: "What does STL stand for in C++?",
            options: ["Standard Template Library", "Static Type Library", "Standard Type Language", "Simple Template Library"],
            correctAnswer: "Standard Template Library"
        },
        {
            question: "Which keyword is used to create a class in C++?",
            options: ["class", "struct", "object", "define"],
            correctAnswer: "class"
        },
        {
            question: "How do you write a single-line comment in C++?",
            options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
            correctAnswer: "// comment"
        }
    ]
  },
  php: {
    title: "PHP Fundamentals",
    questions: [
        {
            question: "What does PHP stand for?",
            options: ["Personal Home Page", "PHP: Hypertext Preprocessor", "Private Home Page", "Personal Hypertext Processor"],
            correctAnswer: "PHP: Hypertext Preprocessor"
        },
        {
            question: "Which symbol is used to denote a variable in PHP?",
            options: ["$", "&", "%", "@"],
            correctAnswer: "$"
        },
        {
            question: "How do you create an array in PHP?",
            options: ["$colors = array('red', 'green');", "$colors = ['red', 'green'];", "Both A and B", "Neither A nor B"],
            correctAnswer: "Both A and B"
        },
        {
            question: "Which function is used to get the length of a string in PHP?",
            options: ["length()", "strlen()", "str_length()", "len()"],
            correctAnswer: "strlen()"
        },
        {
            question: "How do you start a session in PHP?",
            options: ["session_start();", "start_session();", "session.begin();", "begin_session();"],
            correctAnswer: "session_start();"
        }
    ]
  },
  xml: {
    title: "XML Fundamentals",
    questions: [
        {
            question: "What does XML stand for?",
            options: ["eXtensible Markup Language", "eXecutable Multiple Language", "eXtra Modern Link", "eXamine Multiple Language"],
            correctAnswer: "eXtensible Markup Language"
        },
        {
            question: "Is XML case-sensitive?",
            options: ["Yes", "No", "Sometimes", "Depends on the browser"],
            correctAnswer: "Yes"
        },
        {
            question: "Which of the following is true about XML?",
            options: ["XML is a replacement for HTML", "XML is used to display data", "XML is used to store and transport data", "XML tags are predefined"],
            correctAnswer: "XML is used to store and transport data"
        },
        {
            question: "What is a well-formed XML document?",
            options: ["A document with a root element", "A document where all tags are closed", "A document where tags are correctly nested", "All of the above"],
            correctAnswer: "All of the above"
        },
        {
            question: "How do you write a comment in XML?",
            options: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "# This is a comment"],
            correctAnswer: "<!-- This is a comment -->"
        }
    ]
  }
};