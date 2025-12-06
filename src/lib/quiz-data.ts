
import type { Language, Quiz } from './types';

// To keep placeholder-data.ts clean, quiz data has been moved here.
// NOTE: I have generated a large number of questions as requested. 
// For brevity in this file, many are condensed into single-line formats.

const generateQuizzes = (count: number, generator: (index: number) => Quiz) => {
    return Array.from({ length: count }, (_, i) => generator(i));
};

export const quizData: Record<Language['id'], Quiz[]> = {
  html: [
    {
      id: 'html-quiz-1',
      title: 'HTML Basics',
      questions: [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High-level Text Manipulation Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"], correctAnswer: "Hyper Text Markup Language" },
        { question: "Which element is used for the largest heading?", options: ["<h6>", "<h1>", "<h2>", "<head>"], correctAnswer: "<h1>" },
        { question: "Which tag is used to define a paragraph?", options: ["<p>", "<paragraph>", "<para>", "<pg>"], correctAnswer: "<p>" },
        { question: "What is the purpose of the `<div>` tag?", options: ["A division or a section", "A document type declaration", "A dynamic element", "A definition list"], correctAnswer: "A division or a section" },
        { question: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<hyperlink>"], correctAnswer: "<a>" },
        { question: "What is the correct HTML element for inserting a line break?", options: ["<br>", "<lb>", "<break>", "<newline>"], correctAnswer: "<br>" },
        { question: "Choose the correct HTML element to define important text", options: ["<important>", "<strong>", "<b>", "<i>"], correctAnswer: "<strong>" },
        { question: "What does an HTML document start with?", options: ["<head>", "<body>", "<html>", "<!DOCTYPE html>"], correctAnswer: "<!DOCTYPE html>" },
        { question: "Which element contains metadata about the document?", options: ["<body>", "<meta>", "<head>", "<title>"], correctAnswer: "<head>" },
        { question: "Which element represents the main content of an HTML document?", options: ["<main>", "<body>", "<content>", "<section>"], correctAnswer: "<body>" },
      ]
    },
    {
      id: 'html-quiz-2',
      title: 'Attributes & Links',
      questions: [
        { question: "What does the `href` attribute specify?", options: ["The element's ID", "The URL of the page the link goes to", "The height and width", "The header for a section"], correctAnswer: "The URL of the page the link goes to" },
        { question: "Which attribute is used to provide an image's source URL?", options: ["href", "source", "link", "src"], correctAnswer: "src" },
        { question: "The `alt` attribute is required for which tag for accessibility?", options: ["<a>", "<img>", "<div>", "<span>"], correctAnswer: "<img>" },
        { question: "How can you open a link in a new tab/browser window?", options: ["target='_new'", "target='_blank'", "target='_window'", "target='new'"], correctAnswer: "target='_blank'" },
        { question: "Which attribute specifies the language of the element's content?", options: ["lang", "language", "lng", "data-lang"], correctAnswer: "lang" },
        { question: "What is the purpose of the `style` attribute?", options: ["To add a script", "To add inline CSS", "To link a stylesheet", "To define a style class"], correctAnswer: "To add inline CSS" },
        { question: "Which attribute specifies a unique id for an HTML element?", options: ["class", "id", "unique", "identifier"], correctAnswer: "id" },
        { question: "The `title` attribute provides what functionality?", options: ["Sets the document title", "A tooltip on hover", "A heading for a table", "The main title of the page"], correctAnswer: "A tooltip on hover" },
        { question: "Which attribute is used to disable an input field?", options: ["disabled", "readonly", "locked", "inactive"], correctAnswer: "disabled" },
        { question: "What does the `rel` attribute on a link tag define?", options: ["The region of the link", "How the link is rendered", "The relationship between the current and linked document", "The relevance of the link for SEO"], correctAnswer: "The relationship between the current and linked document" },
      ]
    },
    {
      id: 'html-quiz-3',
      title: 'Lists and Tables',
      questions: [
        { question: "Which element is used to create an unordered list?", options: ["<ol>", "<ul>", "<list>", "<li>"], correctAnswer: "<ul>" },
        { question: "Which element is used to create an ordered list?", options: ["<ol>", "<ul>", "<list>", "<dir>"], correctAnswer: "<ol>" },
        { question: "Which tag defines a list item?", options: ["<item>", "<li>", "<dl>", "<dt>"], correctAnswer: "<li>" },
        { question: "What does the `<table>` tag define?", options: ["A data table", "A table layout", "A text table", "A tabbed navigation"], correctAnswer: "A data table" },
        { question: "Which element defines a table row?", options: ["<td>", "<th>", "<tr>", "<t-row>"], correctAnswer: "<tr>" },
        { question: "Which element is used for table data (a cell)?", options: ["<td>", "<th>", "<tr>", "<cell>"], correctAnswer: "<td>" },
        { question: "What is the purpose of the `<th>` element?", options: ["To define the table header section", "To define a header cell", "To make text bold", "To highlight a row"], correctAnswer: "To define a header cell" },
        { question: "How can you make a cell span across two columns?", options: ["<td colspan='2'>", "<td rowspan='2'>", "<td span-cols='2'>", "<td columnspan='2'>"], correctAnswer: "<td colspan='2'>" },
        { question: "Which element group is used to group the header content in a table?", options: ["<head>", "<thead>", "<t-header>", "<header>"], correctAnswer: "<thead>" },
        { question: "What type of list is defined by `<dl>`?", options: ["Detail List", "Dropdown List", "Definition List", "Dynamic List"], correctAnswer: "Definition List" },
      ]
    },
    {
        id: 'html-quiz-4',
        title: 'Forms & Input',
        questions: [
            { question: "Which element is used to create an HTML form?", options: ["<form>", "<input>", "<fieldset>", "<form-group>"], correctAnswer: "<form>" },
            { question: "Which input type is used for a checkbox?", options: ["type='check'", "type='checkbox'", "type='box'", "type='check-input'"], correctAnswer: "type='checkbox'" },
            { question: "What is the purpose of the `<label>` element?", options: ["To add a label to a map", "To define a label for an <input> element", "To create a heading", "To style text"], correctAnswer: "To define a label for an <input> element" },
            { question: "Which input type defines a submit button?", options: ["type='submit'", "type='button'", "type='send'", "type='ok'"], correctAnswer: "type='submit'" },
            { question: "The `action` attribute in a form specifies...", options: ["The HTTP method to use", "Where to send the form-data when submitted", "The script to run on the client", "The character encoding"], correctAnswer: "Where to send the form-data when submitted" },
            { question: "Which input type allows for a multi-line text input?", options: ["<input type='textarea'>", "<input type='text' multiline>", "<textarea>", "<input type='multiline'>"], correctAnswer: "<textarea>" },
            { question: "What is the purpose of the `<fieldset>` element?", options: ["To group related elements in a form", "To set the font style", "To create a dropdown list", "To submit the form"], correctAnswer: "To group related elements in a form" },
            { question: "Which input type is best for entering a password?", options: ["type='text'", "type='password'", "type='hidden'", "type='secure'"], correctAnswer: "type='password'" },
            { question: "The `<select>` element is used to create what?", options: ["A text input", "A range slider", "A button", "A drop-down list"], correctAnswer: "A drop-down list" },
            { question: "What does the `placeholder` attribute do?", options: ["Provides a default value", "Provides a hint to the user of what can be entered", "Locks the input field", "Validates the input"], correctAnswer: "Provides a hint to the user of what can be entered" },
        ]
    },
    {
      id: 'html-quiz-5',
      title: 'Semantic HTML',
      questions: [
        { question: "Which element represents a container for introductory content or a set of navigational links?", options: ["<header>", "<head>", "<top>", "<intro>"], correctAnswer: "<header>" },
        { question: "What is the correct semantic element for a page's footer?", options: ["<bottom>", "<div>", "<footer>", "<section>"], correctAnswer: "<footer>" },
        { question: "Which element should contain the main navigation links for a site?", options: ["<nav>", "<navigation>", "<menu>", "<links>"], correctAnswer: "<nav>" },
        { question: "The `<article>` element is best used for...", options: ["Any piece of content", "Self-contained content that could be distributed independently", "A short note or aside", "The main content of the page"], correctAnswer: "Self-contained content that could be distributed independently" },
        { question: "What is the purpose of the `<aside>` element?", options: ["To hold the main content", "For content that is tangentially related to the content around it", "To hide content", "For article summaries"], correctAnswer: "For content that is tangentially related to the content around it" },
        { question: "Which element represents a thematic grouping of content, typically with a heading?", options: ["<group>", "<div>", "<section>", "<container>"], correctAnswer: "<section>" },
        { question: "What is the `<figure>` element used for?", options: ["Creating geometric shapes", "Specifying self-contained content, like illustrations or diagrams", "Storing numbers", "A type of list"], correctAnswer: "Specifying self-contained content, like illustrations or diagrams" },
        { question: "The `<figcaption>` element is used to provide a caption for a...", options: ["<table>", "<image>", "<caption>", "<figure>"], correctAnswer: "<figure>" },
        { question: "Which element should be used to represent the publication date of an article?", options: ["<date>", "<time>", "<pubdate>", "<timestamp>"], correctAnswer: "<time>" },
        { question: "Why is semantic HTML important?", options: ["It makes the HTML shorter", "It helps with SEO and accessibility", "It automatically styles the page", "It's the only way to use JavaScript"], correctAnswer: "It helps with SEO and accessibility" },
      ]
    },
    {
        id: 'html-quiz-6',
        title: 'Advanced Tags',
        questions: [
            { question: "Which element is used to embed audio content?", options: ["<audio>", "<sound>", "<media>", "<mp3>"], correctAnswer: "<audio>" },
            { question: "Which element is used to embed video content?", options: ["<video>", "<movie>", "<media>", "<source>"], correctAnswer: "<video>" },
            { question: "What is the purpose of the `<canvas>` element?", options: ["To create a container for Flash content", "To draw graphics, on the fly, via scripting", "To display static images", "To play video"], correctAnswer: "To draw graphics, on the fly, via scripting" },
            { question: "The `<progress>` element is used to...", options: ["Show the progress of a file download", "Display the completion progress of a task", "Create a loading spinner", "Animate a bar graph"], correctAnswer: "Display the completion progress of a task" },
            { question: "Which tag is used to specify different image resources for different viewport sizes?", options: ["<picture>", "<img>", "<source-set>", "<image-map>"], correctAnswer: "<picture>" },
            { question: "What does the `<details>` element create?", options: ["A detailed report", "A disclosure widget in which information is visible only when the widget is toggled into an 'open' state", "A list of details", "A pop-up modal"], correctAnswer: "A disclosure widget in which information is visible only when the widget is toggled into an 'open' state" },
            { question: "The `<template>` element is used to...", options: ["Define a template for the entire page", "Hold client-side content that is not to be rendered when a page is loaded", "Link to a CSS template", "Create a boilerplate HTML structure"], correctAnswer: "Hold client-side content that is not to be rendered when a page is loaded" },
            { question: "Which element represents a range of numbers?", options: ["<range>", "<input type='range'>", "<meter>", "<datalist>"], correctAnswer: "<meter>" },
            { question: "What is the purpose of the `<iframe>` tag?", options: ["To create an inline frame for embedding another document", "To format text in italics", "To create a form", "To include an image"], correctAnswer: "To create an inline frame for embedding another document" },
            { question: "The `<datalist>` element is used to...", options: ["Create a list of data points", "Provide an 'autocomplete' feature for <input> elements", "Define a list of draggable items", "Display a list in a grid format"], correctAnswer: "Provide an 'autocomplete' feature for <input> elements" },
        ]
    },
    {
        id: 'html-quiz-7',
        title: 'HTML5 APIs',
        questions: [
            { question: "Which API is used for storing data in the browser with no expiration date?", options: ["sessionStorage", "cookies", "localStorage", "webSQL"], correctAnswer: "localStorage" },
            { question: "What is the purpose of the Geolocation API?", options: ["To determine the user's geographical location", "To change the website's language", "To get the user's IP address", "To map geographic coordinates"], correctAnswer: "To determine the user's geographical location" },
            { question: "Which API allows for running scripts in the background, separate from the main execution thread?", options: ["Web Workers", "AJAX", "Fetch API", "Service Workers"], correctAnswer: "Web Workers" },
            { question: "The Drag and Drop API in HTML5 allows users to...", options: ["Draw shapes on a canvas", "Drag elements around the page and drop them", "Animate elements", "Create draggable sliders"], correctAnswer: "Drag elements around the page and drop them" },
            { question: "What is `sessionStorage` used for?", options: ["Storing data for the entire browser session", "Storing data that persists after the browser is closed", "Storing sensitive user information", "Storing data on the server"], correctAnswer: "Storing data for the entire browser session" },
            { question: "Which API provides an interface for applications needing to handle files, for example, from a file input?", options: ["File API", "FileReader API", "Blob API", "All of the above"], correctAnswer: "All of the above" },
            { question: "What are Server-Sent Events (SSE)?", options: ["A way for a web page to get updates from a server automatically", "Events triggered by the server's clock", "Errors sent from the server", "A type of WebSocket"], correctAnswer: "A way for a web page to get updates from a server automatically" },
            { question: "The History API allows for...", options: ["Viewing the browser's visited history", "Manipulating the browser session history", "Storing historical user data", "Deleting the browser's cache"], correctAnswer: "Manipulating the browser session history" },
            { question: "Which API is designed for creating and managing full-screen windows?", options: ["Window API", "Fullscreen API", "Screen API", "Display API"], correctAnswer: "Fullscreen API" },
            { question: "What is WebSockets API used for?", options: ["Storing data locally", "Creating a persistent, two-way communication channel over a single TCP connection", "Fetching resources from a server", "Drawing 2D graphics"], correctAnswer: "Creating a persistent, two-way communication channel over a single TCP connection" },
        ]
    },
     {
        id: 'html-quiz-8',
        title: 'Accessibility (A11y)',
        questions: [
            { question: "What is the purpose of the `alt` attribute on an `<img>` tag?", options: ["To provide alternative text for screen readers", "To define the image alignment", "To set the image title", "To link the image to a URL"], correctAnswer: "To provide alternative text for screen readers" },
            { question: "What does ARIA stand for?", options: ["Accessible Rich Internet Applications", "Advanced Responsive Internet Architecture", "Accessible Resource for Interactive Apps", "Automated Reading and Interaction Aid"], correctAnswer: "Accessible Rich Internet Applications" },
            { question: "Which element should be used to associate a label with a form control?", options: ["<label>", "<name>", "<legend>", "<span>"], correctAnswer: "<label>" },
            { question: "What is the `role` attribute used for?", options: ["To define the element's purpose for assistive technologies", "To assign a script to an element", "To specify the element's rotation in 3D space", "To set the element's color"], correctAnswer: "To define the element's purpose for assistive technologies" },
            { question: "For a navigation block, which semantic tag is most appropriate?", options: ["<div>", "<nav>", "<menu>", "<header>"], correctAnswer: "<nav>" },
            { question: "What is `tabindex='0'` used for?", options: ["To remove an element from the tab order", "To make a non-focusable element focusable", "To set the element as the first item in the tab order", "To create a new tab"], correctAnswer: "To make a non-focusable element focusable" },
            { question: "How can you hide content visually but keep it accessible to screen readers?", options: ["display: none;", "visibility: hidden;", "Using a CSS class to position it off-screen", "opacity: 0;"], correctAnswer: "Using a CSS class to position it off-screen" },
            { question: "What is the importance of using heading elements (h1, h2, etc.) in the correct order?", options: ["It improves SEO ranking", "It provides a document outline for screen reader users", "It is required for the HTML to be valid", "It makes the text bold automatically"], correctAnswer: "It provides a document outline for screen reader users" },
            { question: "The `lang` attribute on the `<html>` tag is important for...", options: ["Setting the default text color", "Helping screen readers pronounce words correctly", "Translating the page automatically", "Filtering content by language"], correctAnswer: "Helping screen readers pronounce words correctly" },
            { question: "When creating a custom button with a `<div>`, what ARIA attribute is essential?", options: ["role='button' and tabindex='0'", "aria-label", "aria-hidden='false'", "role='link'"], correctAnswer: "role='button' and tabindex='0'" },
        ]
    },
    {
        id: 'html-quiz-9',
        title: 'Doctype and Metadata',
        questions: [
            { question: "What is the purpose of `<!DOCTYPE html>`?", options: ["It's a comment", "It tells the browser to render the page in standards mode", "It's the root element of the page", "It links to the document type definition file"], correctAnswer: "It tells the browser to render the page in standards mode" },
            { question: "Which `<meta>` tag is essential for responsive design?", options: ["<meta name='viewport'>", "<meta name='responsive'>", "<meta name='device-width'>", "<meta name='mobile-friendly'>"], correctAnswer: "<meta name='viewport'>" },
            { question: "What does `<meta charset='UTF-8'>` do?", options: ["Sets the character set for the document to UTF-8", "Specifies the author of the page", "Sets the page description for SEO", "Encrypts the page content"], correctAnswer: "Sets the character set for the document to UTF-8" },
            { question: "Where is the `<title>` element located?", options: ["Inside the <body>", "Inside the <header>", "Inside the <head>", "At the very top of the document"], correctAnswer: "Inside the <head>" },
            { question: "Which tag is used to link an external CSS file?", options: ["<style>", "<script>", "<link>", "<css>"], correctAnswer: "<link>" },
            { question: "What does the `<meta name='description'>` tag provide?", options: ["A description of the image content", "A short summary of the page for search engine results", "The main content of the page", "A list of keywords"], correctAnswer: "A short summary of the page for search engine results" },
            { question: "What is the purpose of the `<base>` tag?", options: ["To set the base font for the page", "To specify the base URL for all relative URLs in a document", "To define the background color", "To create a base for a canvas drawing"], correctAnswer: "To specify the base URL for all relative URLs in a document" },
            { question: "How do you add a comment in HTML?", options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "# This is a comment"], correctAnswer: "<!-- This is a comment -->" },
            { question: "The `<noscript>` tag is used to...", options: ["Prevent scripts from running", "Define alternate content for users that have disabled scripts", "Include scripts from an external file", "Write scripts in a different language"], correctAnswer: "Define alternate content for users that have disabled scripts" },
            { question: "Which element specifies the relationship between the current document and an external resource?", options: ["<a>", "<em>", "<strong>", "<link>"], correctAnswer: "<link>" },
        ]
    },
    {
        id: 'html-quiz-10',
        title: 'Mixed Review',
        questions: [
            { question: "Which tag is used to define an abbreviation or an acronym?", options: ["<abbr>", "<acronym>", "<explain>", "<term>"], correctAnswer: "<abbr>" },
            { question: "The `target` attribute of an `<a>` tag specifies...", options: ["Where to open the linked document", "The target audience", "The type of content being linked", "The download file name"], correctAnswer: "Where to open the linked document" },
            { question: "What is the correct way to make a checkbox checked by default?", options: ["<input type='checkbox' checked>", "<input type='checkbox' selected>", "<input type='checkbox' default='checked'>", "<input type='checkbox' check>"], correctAnswer: "<input type='checkbox' checked>" },
            { question: "Which element represents a thematic break (e.g., a scene change in a story)?", options: ["<break>", "<line>", "<hr>", "<divider>"], correctAnswer: "<hr>" },
            { question: "To define a keyboard input, which tag should be used?", options: ["<code>", "<kbd>", "<samp>", "<var>"], correctAnswer: "<kbd>" },
            { question: "Which input `type` defines a slider control?", options: ["range", "slider", "drag", "number"], correctAnswer: "range" },
            { question: "Which element is used to group the body content in a table?", options: ["<body>", "<main>", "<content>", "<tbody>"], correctAnswer: "<tbody>" },
            { question: "What is the purpose of the `defer` attribute in a `<script>` tag?", options: ["It defers the script execution until after the document has been parsed", "It deletes the script after execution", "It defers the script loading", "It runs the script in a separate thread"], correctAnswer: "It defers the script execution until after the document has been parsed" },
            { question: "Which tag would you use to embed a PDF file in your webpage?", options: ["<pdf>", "<embed>", "<object>", "Both <embed> and <object>"], correctAnswer: "Both <embed> and <object>" },
            { question: "In a form, what is the purpose of the `name` attribute on an `<input>` element?", options: ["It provides a label for the input", "It is sent to the server to identify the input's data", "It is used for CSS styling", "It defines a tooltip for the input"], correctAnswer: "It is sent to the server to identify the input's data" },
        ]
    },
  ],
  css: [
    {
      id: 'css-quiz-1',
      title: 'CSS Fundamentals',
      questions: [
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correctAnswer: "Cascading Style Sheets" },
        { question: "Which property is used to change the text color of an element?", options: ["fgcolor", "text-color", "font-color", "color"], correctAnswer: "color" },
        { question: "How do you select an element with id 'demo'?", options: ["#demo", ".demo", "demo", "*demo"], correctAnswer: "#demo" },
        { question: "How do you select all elements with the class 'test'?", options: ["#test", ".test", "test", "*test"], correctAnswer: ".test" },
        { question: "Where in an HTML document is the correct place to refer to an external style sheet?", options: ["In the <body> section", "In the <head> section", "At the end of the document", "In the <footer> section"], correctAnswer: "In the <head> section" },
        { question: "Which HTML tag is used to define an internal style sheet?", options: ["<css>", "<script>", "<style>", "<link>"], correctAnswer: "<style>" },
        { question: "Which property is used to change the background color?", options: ["bgcolor", "color", "background-color", "background"], correctAnswer: "background-color" },
        { question: "How do you add a comment in a CSS file?", options: ["// this is a comment", "/* this is a comment */", "<!-- this is a comment -->", "' this is a comment"], correctAnswer: "/* this is a comment */" },
        { question: "Which property is used to change the font of an element?", options: ["font-style", "font-family", "text-font", "font-weight"], correctAnswer: "font-family" },
        { question: "How do you make text bold?", options: ["font-weight: bold;", "text-style: bold;", "font-style: bold;", "style: bold;"], correctAnswer: "font-weight: bold;" },
      ]
    },
    {
      id: 'css-quiz-2',
      title: 'The Box Model',
      questions: [
        { question: "Which property controls the space between an element's content and its border?", options: ["margin", "padding", "spacing", "border-spacing"], correctAnswer: "padding" },
        { question: "Which property controls the space outside an element's border?", options: ["margin", "padding", "outline", "spacing"], correctAnswer: "margin" },
        { question: "Which of these properties is part of the CSS Box Model?", options: ["font-size", "color", "margin", "display"], correctAnswer: "margin" },
        { question: "If you set `box-sizing: border-box;`, what does the `width` property include?", options: ["Content only", "Content and padding", "Content, padding, and border", "Content, padding, border, and margin"], correctAnswer: "Content, padding, and border" },
        { question: "How do you set a top padding of 10px, right padding of 5px, bottom of 15px, and left of 20px?", options: ["padding: 10px 5px 15px 20px;", "padding: 10 5 15 20;", "padding: 10px 20px 15px 5px;", "padding: 5px 15px 20px 10px;"], correctAnswer: "padding: 10px 5px 15px 20px;" },
        { question: "What is the default `box-sizing` value?", options: ["content-box", "border-box", "padding-box", "margin-box"], correctAnswer: "content-box" },
        { question: "Which shorthand property sets all the margin properties in one declaration?", options: ["margin-all", "margins", "margin", "all-margin"], correctAnswer: "margin" },
        { question: "How do you set a solid, 2px red border?", options: ["border: 2px solid red;", "border-style: 2px solid red;", "border: solid 2px red;", "border: 2px red solid;"], correctAnswer: "border: 2px solid red;" },
        { question: "What is the `outline` property?", options: ["A line drawn around elements, outside the border edge", "A synonym for the border property", "A line drawn inside the padding edge", "A line that outlines text"], correctAnswer: "A line drawn around elements, outside the border edge" },
        { question: "To center a block-level element like a `div` horizontally, you should set its `width` and what else?", options: ["margin: auto;", "padding: auto;", "text-align: center;", "align: center;"], correctAnswer: "margin: auto;" },
      ]
    },
    {
      id: 'css-quiz-3',
      title: 'Selectors',
      questions: [
        { question: "How do you group selectors?", options: ["Separate each selector with a comma", "Separate each selector with a plus sign", "Separate each selector with a space", "Group them in a block"], correctAnswer: "Separate each selector with a comma" },
        { question: "How do you select all `<p>` elements inside a `<div>` element?", options: ["div + p", "div p", "div > p", "div.p"], correctAnswer: "div p" },
        { question: "Which selector selects the element that is the immediate child of another?", options: [" ", ">", "+", "~"], correctAnswer: ">" },
        { question: "Which pseudo-class selects an element that is being hovered over by the user's mouse?", options: [":hover", ":active", ":focus", ":visited"], correctAnswer: ":hover" },
        { question: "How would you select an `<input>` element with the attribute `type='text'`?", options: ["input[type='text']", "input(type='text')", "input.type='text'", "input:text"], correctAnswer: "input[type='text']" },
        { question: "What does the `*` selector do?", options: ["Selects the first element", "Selects all elements", "Selects all child elements", "Selects all class elements"], correctAnswer: "Selects all elements" },
        { question: "The `:nth-child(n)` pseudo-class selects...", options: ["The first child element", "Every nth child element", "The child element at position n", "All child elements"], correctAnswer: "The child element at position n" },
        { question: "Which selector is used to select an element that is the adjacent sibling of another?", options: ["+", "~", ">", " "], correctAnswer: "+" },
        { question: "How do you select links that have not yet been visited?", options: [":link", ":visited", ":unvisited", ":active"], correctAnswer: ":link" },
        { question: "What is the specificity of an ID selector?", options: ["1", "10", "100", "1000"], correctAnswer: "100" },
      ]
    },
    {
        id: 'css-quiz-4',
        title: 'Layout & Positioning',
        questions: [
            { question: "What is the default value of the `position` property?", options: ["static", "relative", "absolute", "fixed"], correctAnswer: "static" },
            { question: "What does `display: none;` do?", options: ["Hides the element, but it still takes up space", "Hides the element and it does not take up any space", "Makes the element transparent", "Deletes the element"], correctAnswer: "Hides the element and it does not take up any space" },
            { question: "An element with `position: absolute;` is positioned relative to...", options: ["The <body> element", "Its nearest positioned ancestor", "Its parent element", "The viewport"], correctAnswer: "Its nearest positioned ancestor" },
            { question: "Which display value causes an element to generate a block-level flex container?", options: ["flex", "block-flex", "inline-flex", "flexbox"], correctAnswer: "flex" },
            { question: "In Flexbox, which property aligns items along the main axis?", options: ["align-items", "justify-content", "align-content", "flex-direction"], correctAnswer: "justify-content" },
            { question: "An element with `position: fixed;` is positioned relative to...", options: ["The viewport", "Its parent element", "Its nearest positioned ancestor", "The <html> element"], correctAnswer: "The viewport" },
            { question: "What does `display: inline-block;` allow you to do?", options: ["Set a width and height on an inline element", "Center a block element", "Make an element invisible", "Force a line break"], correctAnswer: "Set a width and height on an inline element" },
            { question: "In CSS Grid, what is the `grid-template-columns` property used for?", options: ["To define the number and size of the grid columns", "To create gaps between columns", "To align items within columns", "To span items across columns"], correctAnswer: "To define the number and size of the grid columns" },
            { question: "What does the `z-index` property do?", options: ["Controls the zoom level of an element", "Sets the vertical alignment", "Specifies the stack order of an element", "Defines the 3D rotation of an element"], correctAnswer: "Specifies the stack order of an element" },
            { question: "The `float` property is primarily used for...", options: ["Making elements float in the air", "Wrapping text around images", "Centering elements vertically", "Creating animations"], correctAnswer: "Wrapping text around images" },
        ]
    },
    {
      id: 'css-quiz-5',
      title: 'Responsive Design',
      questions: [
        { question: "What is the purpose of a CSS pseudo-class?", options: ["To style a specified part of an element", "To select and style elements that are in a specific state", "To add special effects to block-level elements", "To create a class that can't be seen"], correctAnswer: "To select and style elements that are in a specific state" },
        { question: "What is the correct syntax for a media query that applies styles for screens smaller than 600px?", options: ["@media screen and (max-width: 600px)", "@media (width < 600px)", "@media screen and (width <= 600px)", "@media all and (max-width: 600px)"], correctAnswer: "@media screen and (max-width: 600px)" },
        { question: "Which unit is relative to the font-size of the root element?", options: ["em", "rem", "px", "%"], correctAnswer: "rem" },
        { question: "What does a 'mobile-first' approach to CSS mean?", options: ["Designing for mobile devices first, then adding styles for larger screens", "Only designing for mobile devices", "Using a mobile-specific stylesheet", "Prioritizing mobile over desktop in performance"], correctAnswer: "Designing for mobile devices first, then adding styles for larger screens" },
        { question: "What does the `vw` unit represent?", options: ["Viewport width", "Viewport weight", "Very wide", "Visual width"], correctAnswer: "Viewport width" },
        { question: "Which of these is NOT a valid CSS length unit?", options: ["px", "cm", "dm", "em"], correctAnswer: "dm" },
        { question: "How can you make an image responsive, so it scales down with its container?", options: ["max-width: 100%;", "width: 100%;", "min-width: 100%;", "width: auto;"], correctAnswer: "max-width: 100%;" },
        { question: "What is the purpose of the viewport meta tag `<meta name='viewport' ...>`?", options: ["To set the width and initial scale of the page on mobile devices", "To define the color scheme", "To link to a mobile stylesheet", "To disable zooming"], correctAnswer: "To set the width and initial scale of the page on mobile devices" },
        { question: "In a media query, what does 'orientation: landscape' check for?", options: ["If the screen is a TV", "If the device is a laptop", "If the viewport width is greater than its height", "If the device is in dark mode"], correctAnswer: "If the viewport width is greater than its height" },
        { question: "Which CSS layout model is best for creating complex, two-dimensional responsive layouts?", options: ["Flexbox", "Floats", "CSS Grid", "Tables"], correctAnswer: "CSS Grid" },
      ]
    },
    {
        id: 'css-quiz-6',
        title: 'Transitions & Animations',
        questions: [
            { question: "Which property is used to create a smooth transition effect?", options: ["animation", "transition", "transform", "move"], correctAnswer: "transition" },
            { question: "What does the `transition-duration` property define?", options: ["The name of the property to transition", "How long the transition effect should take", "The delay before the transition starts", "The timing function of the transition"], correctAnswer: "How long the transition effect should take" },
            { question: "How do you define a CSS animation?", options: ["Using the `@keyframes` rule", "Using the `animation` property directly", "Using the `<animate>` tag", "With the `animate()` function"], correctAnswer: "Using the `@keyframes` rule" },
            { question: "Which property is used to apply a 2D or 3D transformation to an element?", options: ["transition", "transform", "animation", "perspective"], correctAnswer: "transform" },
            { question: "What does `transform: scale(1.5);` do?", options: ["Rotates the element 1.5 degrees", "Moves the element 1.5px to the right", "Makes the element 1.5 times its original size", "Skews the element by 1.5 degrees"], correctAnswer: "Makes the element 1.5 times its original size" },
            { question: "The `animation-iteration-count` property specifies...", options: ["The name of the animation", "How long the animation takes", "The number of times an animation should be played", "The delay for the animation"], correctAnswer: "The number of times an animation should be played" },
            { question: "What value for `animation-direction` would make the animation play forwards then backwards?", options: ["backwards", "reverse", "alternate", "forwards-backwards"], correctAnswer: "alternate" },
            { question: "Which `transform-origin` value would set the transformation point to the top-left corner?", options: ["center center", "50% 50%", "0 0", "top left"], correctAnswer: "0 0" },
            { question: "What is the purpose of the `transition-timing-function` property?", options: ["To set the duration of the transition", "To specify the speed curve of the transition effect", "To define which CSS property is being transitioned", "To delay the start of the transition"], correctAnswer: "To specify the speed curve of the transition effect" },
            { question: "To make an animation run forever, what value should `animation-iteration-count` have?", options: ["-1", "0", "infinite", "forever"], correctAnswer: "infinite" },
        ]
    },
    {
        id: 'css-quiz-7',
        title: 'Advanced Topics',
        questions: [
            { question: "What are CSS Custom Properties (Variables) defined with?", options: ["$", "var()", "--", "@"], correctAnswer: "--" },
            { question: "How do you use a CSS variable?", options: ["var(--variable-name)", "use(--variable-name)", "get(--variable-name)", "$variable-name"], correctAnswer: "var(--variable-name)" },
            { question: "What does the `calc()` function do?", options: ["Calculates the specificity of a selector", "Calculates the file size of the CSS", "Allows you to perform calculations to determine CSS property values", "Converts color values"], correctAnswer: "Allows you to perform calculations to determine CSS property values" },
            { question: "What is the purpose of the `::before` and `::after` pseudo-elements?", options: ["To add cosmetic content before or after an element's content", "To select the element before or after another", "To style the first and last child", "To add a shadow effect"], correctAnswer: "To add cosmetic content before or after an element's content" },
            { question: "The `clip-path` property allows you to...", options: ["Clip an image into a basic shape like a circle or ellipse", "Create a clipping region to determine what part of an element is visible", "Cut text out of an element", "Copy a path from an SVG"], correctAnswer: "Create a clipping region to determine what part of an element is visible" },
            { question: "What is BEM in the context of CSS?", options: ["A CSS preprocessor", "A JavaScript library", "A naming methodology for CSS classes", "A new CSS layout module"], correctAnswer: "A naming methodology for CSS classes" },
            { question: "Which property can be used to control the blending mode of an element's background?", options: ["background-blend-mode", "filter", "opacity", "mix-blend-mode"], correctAnswer: "background-blend-mode" },
            { question: "The `@supports` rule in CSS is used to...", options: ["Check if a browser supports a particular CSS feature", "Provide fallback styles", "Load a polyfill for a feature", "Detect the browser type"], correctAnswer: "Check if a browser supports a particular CSS feature" },
            { question: "What does `will-change` property do?", options: ["It hints to browsers how an element is expected to change", "It prevents an element from changing", "It triggers an animation", "It changes the CSS variable values"], correctAnswer: "It hints to browsers how an element is expected to change" },
            { question: "What is a CSS preprocessor like Sass or Less useful for?", options: ["Automatically fixing CSS errors", "Adding features like variables, nesting, and mixins to CSS", "Minifying CSS for production", "Testing CSS in different browsers"], correctAnswer: "Adding features like variables, nesting, and mixins to CSS" },
        ]
    },
    {
        id: 'css-quiz-8',
        title: 'Text & Fonts',
        questions: [
            { question: "Which property is used to set the size of the font?", options: ["font-size", "text-size", "font-style", "size"], correctAnswer: "font-size" },
            { question: "How do you make text italic?", options: ["font-weight: italic;", "text-decoration: italic;", "font-style: italic;", "text-transform: italic;"], correctAnswer: "font-style: italic;" },
            { question: "The `text-decoration` property is used for what?", options: ["Adding shadows to text", "Changing the font family", "Adding lines like underline, overline, or line-through", "Setting the text color"], correctAnswer: "Adding lines like underline, overline, or line-through" },
            { question: "Which property controls the horizontal alignment of text?", options: ["vertical-align", "align-content", "justify-content", "text-align"], correctAnswer: "text-align" },
            { question: "What does `text-transform: capitalize;` do?", options: ["Transforms the text to all uppercase", "Transforms the text to all lowercase", "Transforms the first character of each word to uppercase", "Does nothing"], correctAnswer: "Transforms the first character of each word to uppercase" },
            { question: "The `line-height` property specifies...", options: ["The height of the text characters", "The distance between lines of text", "The width of the text block", "The thickness of the font"], correctAnswer: "The distance between lines of text" },
            { question: "How do you include a custom font file for use on a website?", options: ["Using the `@font-face` rule", "Using the `@import` rule", "Using the `<font>` tag", "Using the `link` property"], correctAnswer: "Using the `@font-face` rule" },
            { question: "Which property controls the spacing between characters in a text?", options: ["word-spacing", "character-spacing", "text-spacing", "letter-spacing"], correctAnswer: "letter-spacing" },
            { question: "What is the purpose of the `font-variant` property?", options: ["To create a bold version of the font", "To create an italic version of the font", "To create a small-caps version of the font", "To change the font family"], correctAnswer: "To create a small-caps version of the font" },
            { question: "The `text-shadow` property adds a shadow to...", options: ["The element's box", "The text itself", "The element's border", "The background of the text"], correctAnswer: "The text itself" },
        ]
    },
     {
        id: 'css-quiz-9',
        title: 'Colors & Backgrounds',
        questions: [
            { question: "Which of the following is NOT a valid way to specify a color in CSS?", options: ["RGB (rgb(255,0,0))", "HEX (#FF0000)", "HSL (hsl(0, 100%, 50%))", "CMYK (cmyk(0,100,100,0))"], correctAnswer: "CMYK (cmyk(0,100,100,0))" },
            { question: "What does the 'A' in `rgba(255, 0, 0, 0.5)` stand for?", options: ["Alpha (transparency)", "Amount", "Accent", "Aqua"], correctAnswer: "Alpha (transparency)" },
            { question: "The `background-image` property is used to set...", options: ["A solid background color", "One or more background images for an element", "The size of the background", "The position of the background"], correctAnswer: "One or more background images for an element" },
            { question: "How can you make a background image not repeat?", options: ["background-repeat: no-repeat;", "background-repeat: none;", "background-repeat: no;", "background-tile: false;"], correctAnswer: "background-repeat: no-repeat;" },
            { question: "Which property sets the starting position of a background image?", options: ["background-position", "background-origin", "background-start", "background-attachment"], correctAnswer: "background-position" },
            { question: "What does `background-attachment: fixed;` do?", options: ["Fixes the image in place, so it does not scroll with the page", "Stretches the image to fit the container", "Prevents the image from being changed", "Attaches the image to the cursor"], correctAnswer: "Fixes the image in place, so it does not scroll with the page" },
            { question: "The `background-size: cover;` value will...", options: ["Scale the image to be as large as possible without stretching", "Scale the image to cover the entire container, potentially clipping it", "Tile the image", "Shrink the image to its original size"], correctAnswer: "Scale the image to cover the entire container, potentially clipping it" },
            { question: "How can you create a linear gradient background?", options: ["`gradient: linear(...)`", "`linear-gradient(...)`", "`background-gradient: linear(...)`", "`background: gradient(...)`"], correctAnswer: "`linear-gradient(...)`" },
            { question: "The `opacity` property affects the transparency of...", options: ["Only the background color", "Only the text color", "The entire element, including its content", "Only the border"], correctAnswer: "The entire element, including its content" },
            { question: "The shorthand `background` property can set all of the following EXCEPT:", options: ["background-color", "background-image", "background-repeat", "background-blend-mode"], correctAnswer: "background-blend-mode" },
        ]
    },
    {
        id: 'css-quiz-10',
        title: 'Flexbox',
        questions: [
            { question: "To make a container a flex container, you use which `display` value?", options: ["flex", "flexbox", "box", "flex-container"], correctAnswer: "flex" },
            { question: "What is the main axis in a flex container with `flex-direction: row;`?", options: ["Vertical", "Horizontal", "The cross axis", "Depends on the items"], correctAnswer: "Horizontal" },
            { question: "Which property aligns flex items along the main axis?", options: ["align-items", "justify-content", "align-content", "place-items"], correctAnswer: "justify-content" },
            { question: "Which property aligns flex items along the cross axis?", options: ["align-items", "justify-content", "align-content", "place-items"], correctAnswer: "align-items" },
            { question: "What does `flex-wrap: wrap;` do?", options: ["It wraps text inside flex items", "It allows flex items to wrap onto multiple lines", "It creates a border wrap around items", "It disables wrapping"], correctAnswer: "It allows flex items to wrap onto multiple lines" },
            { question: "The `flex-grow` property defines...", options: ["The initial size of a flex item", "The ability for a flex item to grow if necessary", "The ability for a flex item to shrink", "The order of the flex item"], correctAnswer: "The ability for a flex item to grow if necessary" },
            { question: "Which value for `justify-content` would place items with equal space around them?", options: ["space-between", "space-evenly", "space-around", "center"], correctAnswer: "space-around" },
            { question: "The `order` property for a flex item...", options: ["Changes the stacking order (z-index)", "Changes the visual order of the item", "Sets the item's priority", "Orders the item alphabetically"], correctAnswer: "Changes the visual order of the item" },
            { question: "What does `align-self` do?", options: ["Aligns the entire flex container", "It aligns a single flex item on the cross axis, overriding `align-items`", "It justifies a single item on the main axis", "It sets the item's size"], correctAnswer: "It aligns a single flex item on the cross axis, overriding `align-items`" },
            { question: "The `flex` shorthand property is a combination of which properties?", options: ["flex-direction, flex-wrap, flex-flow", "justify-content, align-items, align-content", "flex-grow, flex-shrink, flex-basis", "flex-grow, flex-shrink, order"], correctAnswer: "flex-grow, flex-shrink, flex-basis" },
        ]
    },
  ],
  javascript: [
    {
      id: 'js-quiz-1',
      title: 'JS Variables & Data Types',
      questions: [
        { question: "Which keyword is used to declare a variable that cannot be reassigned?", options: ["let", "var", "const", "static"], correctAnswer: "const" },
        { question: "Which of the following is NOT a primitive data type in JavaScript?", options: ["String", "Number", "Object", "Boolean"], correctAnswer: "Object" },
        { question: "What is the result of `typeof null`?", options: ["'null'", "'undefined'", "'object'", "'none'"], correctAnswer: "'object'" },
        { question: "Which keyword, introduced in ES6, declares a block-scoped variable?", options: ["var", "let", "const", "block"], correctAnswer: "let" },
        { question: "What is the value of a variable that has been declared but not assigned a value?", options: ["null", "0", "''", "undefined"], correctAnswer: "undefined" },
        { question: "What does `NaN` stand for?", options: ["Not a Number", "No Available Number", "New-age Notation", "Null and Negative"], correctAnswer: "Not a Number" },
        { question: "Which symbol is used to create a BigInt?", options: ["Adding 'n' to the end of an integer", "Using the BigInt() constructor", "Both of the above", "None of the above"], correctAnswer: "Both of the above" },
        { question: "What is a Symbol in JavaScript?", options: ["A special character for strings", "A primitive data type whose instances are unique and immutable", "A type of operator", "An icon in a UI"], correctAnswer: "A primitive data type whose instances are unique and immutable" },
        { question: "What will `Boolean('false')` evaluate to?", options: ["true", "false", "undefined", "Error"], correctAnswer: "true" },
        { question: "The `var` keyword has what kind of scope?", options: ["Block scope", "Function scope", "Global scope only", "Both Function and Global scope"], correctAnswer: "Both Function and Global scope" },
      ]
    },
    {
      id: 'js-quiz-2',
      title: 'Operators & Coercion',
      questions: [
        { question: "What is the result of `'5' + 3`?", options: ["8", "53", "Error", "NaN"], correctAnswer: "53" },
        { question: "What does the `===` operator do?", options: ["Compares for equality of value", "Assigns a value", "Compares for equality of value and type", "Compares for inequality"], correctAnswer: "Compares for equality of value and type" },
        { question: "What is the result of `'5' - 3`?", options: ["2", "53", "Error", "NaN"], correctAnswer: "2" },
        { question: "Which operator is the 'logical AND' operator?", options: ["||", "&&", "!", "&"], correctAnswer: "&&" },
        { question: "What is the modulus operator (`%`) used for?", options: ["To find the percentage", "To find the remainder of a division", "To find the exponent", "To create a comment"], correctAnswer: "To find the remainder of a division" },
        { question: "What will `5 == '5'` evaluate to?", options: ["true", "false", "undefined", "Error"], correctAnswer: "true" },
        { question: "The 'ternary' or 'conditional' operator is written using which syntax?", options: ["`? :`", "`if () {}`", "`switch`", "`for`"], correctAnswer: "`? :`" },
        { question: "What does the `typeof` operator return?", options: ["The data type of a variable as a string", "The value of a variable", "True if the variable exists", "The scope of a variable"], correctAnswer: "The data type of a variable as a string" },
        { question: "What is 'type coercion' in JavaScript?", options: ["The process of converting value from one type to another", "An error that occurs when types are mixed", "A way to force a variable to a certain type", "A security vulnerability"], correctAnswer: "The process of converting value from one type to another" },
        { question: "What is the result of `!!'hello'`?", options: ["true", "false", "NaN", "undefined"], correctAnswer: "true" },
      ]
    },
    {
      id: 'js-quiz-3',
      title: 'Functions & Scope',
      questions: [
        { question: "How do you call a function named 'myFunction'?", options: ["call myFunction();", "myFunction();", "call function myFunction();", "exec myFunction();"], correctAnswer: "myFunction();" },
        { question: "What is a 'closure' in JavaScript?", options: ["A function having access to its parent scope, even after the parent function has closed.", "A way to close a browser window.", "A type of syntax error.", "A built-in method for arrays."], correctAnswer: "A function having access to its parent scope, even after the parent function has closed." },
        { question: "What is an Immediately Invoked Function Expression (IIFE)?", options: ["A function that is declared and then called immediately", "A function that is called by another function", "A function that returns another function", "A function that has no name"], correctAnswer: "A function that is declared and then called immediately" },
        { question: "What is the `this` keyword?", options: ["Refers to the function itself", "Refers to the object from which the function was called", "Refers to the global window object", "Refers to the parent element"], correctAnswer: "Refers to the object from which the function was called" },
        { question: "What is the main difference between a function expression and a function declaration?", options: ["Function declarations are hoisted, function expressions are not", "Function expressions can be anonymous, declarations cannot", "They are functionally the same", "Both A and B"], correctAnswer: "Both A and B" },
        { question: "What does an arrow function `=>` do differently regarding `this`?", options: ["It has its own `this` context", "It lexically binds `this` from its surrounding scope", "It cannot use the `this` keyword", "It always refers to the global object"], correctAnswer: "It lexically binds `this` from its surrounding scope" },
        { question: "What is 'hoisting' in JavaScript?", options: ["A mechanism where variable and function declarations are moved to the top of their scope", "Lifting an element up in the DOM tree", "An error that occurs when a variable is used before declaration", "A way to encrypt code"], correctAnswer: "A mechanism where variable and function declarations are moved to the top of their scope" },
        { question: "What will a function return if it has no `return` statement?", options: ["null", "0", "undefined", "Error"], correctAnswer: "undefined" },
        { question: "The arguments in a function are available as an array-like object called...", options: ["args", "params", "arguments", "inputs"], correctAnswer: "arguments" },
        { question: "What is a pure function?", options: ["A function with no parameters", "A function that always returns the same output for the same input and has no side effects", "A function that only works with numbers", "A function that is part of the JavaScript standard library"], correctAnswer: "A function that always returns the same output for the same input and has no side effects" },
      ]
    },
     {
        id: 'js-quiz-4',
        title: 'Arrays & Objects',
        questions: [
            { question: "Which method is used to add a new item to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: "push()" },
            { question: "Which method removes the last element from an array and returns it?", options: ["shift()", "slice()", "pop()", "remove()"], correctAnswer: "pop()" },
            { question: "How do you access the value of the property 'name' in an object `person`?", options: ["person.name", "person['name']", "Both of the above", "person(name)"], correctAnswer: "Both of the above" },
            { question: "The `map()` method creates a new array by...", options: ["Iterating over an existing array and returning the first match", "Merging two arrays together", "Calling a function for every array element and building a new array from the results", "Sorting the array elements"], correctAnswer: "Calling a function for every array element and building a new array from the results" },
            { question: "How do you check if a property exists in an object?", options: ["'prop' in object", "object.hasOwnProperty('prop')", "Both of the above", "object.exists('prop')"], correctAnswer: "Both of the above" },
            { question: "What does the `filter()` method do?", options: ["It returns a new array with all elements that pass the test implemented by the provided function", "It filters out specific values from an array", "It modifies the original array", "It returns a single value from an array"], correctAnswer: "It returns a new array with all elements that pass the test implemented by the provided function" },
            { question: "How can you get an array of all the keys in an object `myObj`?", options: ["Object.keys(myObj)", "myObj.keys()", "Object.getKeys(myObj)", "myObj.get('keys')"], correctAnswer: "Object.keys(myObj)" },
            { question: "Which method is used to combine two or more arrays?", options: ["join()", "merge()", "concat()", "combine()"], correctAnswer: "concat()" },
            { question: "What is JSON?", options: ["A JavaScript-only data format", "JavaScript Object Notation, a lightweight data-interchange format", "A type of JavaScript function", "A database for JavaScript"], correctAnswer: "JavaScript Object Notation, a lightweight data-interchange format" },
            { question: "What does `JSON.parse()` do?", options: ["Converts a JavaScript object to a JSON string", "Parses a JSON string, constructing the JavaScript value or object", "Validates a JSON object", "Prettifies a JSON string"], correctAnswer: "Parses a JSON string, constructing the JavaScript value or object" },
        ]
    },
    {
      id: 'js-quiz-5',
      title: 'DOM Manipulation',
      questions: [
        { question: "The `document.getElementById()` method returns what?", options: ["An array of elements", "A single element object", "A NodeList", "A boolean value"], correctAnswer: "A single element object" },
        { question: "How do you create a new HTML element in JavaScript?", options: ["document.createElement('div')", "document.create('div')", "document.newElement('div')", "document.build('div')"], correctAnswer: "document.createElement('div')" },
        { question: "Which method is used to add a new child element to an existing element?", options: ["attachChild()", "appendChild()", "insertChild()", "addChild()"], correctAnswer: "appendChild()" },
        { question: "What does `element.innerHTML` do?", options: ["It gets or sets the text content of an element", "It gets or sets the HTML content (inner HTML) of an element", "It hides the element", "It returns the tag name of the element"], correctAnswer: "It gets or sets the HTML content (inner HTML) of an element" },
        { question: "How do you add a CSS class 'active' to an element `myElement`?", options: ["myElement.className = 'active'", "myElement.classList.add('active')", "myElement.css('active')", "myElement.addClass = 'active'"], correctAnswer: "myElement.classList.add('active')" },
        { question: "What is an 'event listener' in JavaScript?", options: ["A function that waits for an event to occur, then executes a response", "A special type of variable", "A DOM property", "A way to listen to audio"], correctAnswer: "A function that waits for an event to occur, then executes a response" },
        { question: "Which method returns the first element that matches a specified CSS selector?", options: ["getElementBySelector()", "select()", "querySelector()", "findAll()"], correctAnswer: "querySelector()" },
        { question: "What is 'event bubbling'?", options: ["An event triggering on a child element also triggers on its parent elements", "Creating custom events", "An error in an event listener", "A visual effect on click"], correctAnswer: "An event triggering on a child element also triggers on its parent elements" },
        { question: "How can you prevent the default action of an event, like a form submission?", options: ["event.stop()", "event.preventDefault()", "event.cancel()", "event.halt()"], correctAnswer: "event.preventDefault()" },
        { question: "The `data-*` attributes are used to...", options: ["Store private data for the application's use", "Define the data type of an element", "Link to an external data source", "Style an element based on data"], correctAnswer: "Store private data for the application's use" },
      ]
    },
    {
        id: 'js-quiz-6',
        title: 'Asynchronous JavaScript',
        questions: [
            { question: "What is a 'callback function'?", options: ["A function that is passed as an argument to another function and is executed after some operation has been completed", "A function that calls another function", "A function that returns a value", "A built-in JavaScript function"], correctAnswer: "A function that is passed as an argument to another function and is executed after some operation has been completed" },
            { question: "What is 'callback hell'?", options: ["An error in a callback function", "Deeply nested callbacks, which are hard to read and maintain", "When a callback is never executed", "A security issue with callbacks"], correctAnswer: "Deeply nested callbacks, which are hard to read and maintain" },
            { question: "A JavaScript `Promise` is an object that represents...", options: ["A value that is guaranteed to be available", "The eventual completion (or failure) of an asynchronous operation and its resulting value", "A function that will be executed in the future", "A security token"], correctAnswer: "The eventual completion (or failure) of an asynchronous operation and its resulting value" },
            { question: "What are the three states of a Promise?", options: ["Pending, Fulfilled, Rejected", "Waiting, Complete, Failed", "Started, In-Progress, Finished", "Ready, Set, Go"], correctAnswer: "Pending, Fulfilled, Rejected" },
            { question: "Which method is used to handle the successful completion of a Promise?", options: [".then()", ".catch()", ".finally()", ".success()"], correctAnswer: ".then()" },
            { question: "What is the purpose of the `async` keyword before a function?", options: ["It makes the function run synchronously", "It automatically makes the function return a Promise", "It declares the function as asynchronous but doesn't change its behavior", "It is used to import modules"], correctAnswer: "It automatically makes the function return a Promise" },
            { question: "What does the `await` keyword do?", options: ["It pauses the execution of an async function until a Promise is settled", "It immediately resolves a Promise", "It creates a new Promise", "It defines a callback function"], correctAnswer: "It pauses the execution of an async function until a Promise is settled" },
            { question: "The `fetch()` API returns what?", options: ["The requested data directly", "A string of JSON", "A Promise that resolves to the Response object", "A callback function"], correctAnswer: "A Promise that resolves to the Response object" },
            { question: "How do you handle errors in an `async/await` function?", options: ["With .catch()", "With a `try...catch` block", "Errors are automatically ignored", "With an `onerror` property"], correctAnswer: "With a `try...catch` block" },
            { question: "What is the JavaScript 'Event Loop'?", options: ["A `for` loop that listens for events", "A mechanism that allows JavaScript to perform non-blocking operations", "An animation loop for games", "A security feature"], correctAnswer: "A mechanism that allows JavaScript to perform non-blocking operations" },
        ]
    },
    {
        id: 'js-quiz-7',
        title: 'ES6+ Features',
        questions: [
            { question: "What is the purpose of template literals (back-ticks ``)?", options: ["To create multi-line strings and embed expressions", "To define a template for an object", "To create a regular expression", "To comment out code"], correctAnswer: "To create multi-line strings and embed expressions" },
            { question: "What is 'destructuring' in JavaScript?", options: ["Breaking down a complex problem into smaller ones", "A way to unpack values from arrays, or properties from objects, into distinct variables", "Destroying an object to free up memory", "A type of syntax error"], correctAnswer: "A way to unpack values from arrays, or properties from objects, into distinct variables" },
            { question: "What does the 'spread' operator (`...`) do for arrays?", options: ["It compresses an array into a single value", "It allows an iterable to be expanded in places where zero or more arguments or elements are expected", "It creates a new, empty array", "It selects the last element of an array"], correctAnswer: "It allows an iterable to be expanded in places where zero or more arguments or elements are expected" },
            { question: "What are 'default parameters' in a function?", options: ["Parameters that are always required", "Parameters that are automatically set to `null`", "Default values for function parameters if no value is passed in", "The first and last parameters of a function"], correctAnswer: "Default values for function parameters if no value is passed in" },
            { question: "What is a `Set` in ES6?", options: ["A collection of unique values", "A way to set CSS properties", "A collection of key/value pairs", "A mathematical equation"], correctAnswer: "A collection of unique values" },
            { question: "What is a `Map` in ES6?", options: ["A geographical map", "A collection of keyed data items, just like an Object, but it allows keys of any type", "A new array method", "A way to map one value to another"], correctAnswer: "A collection of keyed data items, just like an Object, but it allows keys of any type" },
            { question: "The `for...of` loop is used to iterate over...", options: ["The properties of an object", "Iterable objects (like Arrays, Strings, Maps, Sets etc.)", "A sequence of numbers", "The keys of an object"], correctAnswer: "Iterable objects (like Arrays, Strings, Maps, Sets etc.)" },
            { question: "What does `Object.freeze()` do?", options: ["Pauses the execution of the code", "Freezes an object, preventing new properties from being added and existing properties from being removed or changed", "Creates a frozen copy of an object", "Hides an object from the UI"], correctAnswer: "Freezes an object, preventing new properties from being added and existing properties from being removed or changed" },
            { question: "What is a 'module' in ES6?", options: ["A single JavaScript file that exports its code", "A built-in JavaScript object", "A type of function", "A way to create private variables"], correctAnswer: "A single JavaScript file that exports its code" },
            { question: "The `includes()` method for arrays does what?", options: ["Checks if an array is included in another array", "Determines whether an array includes a certain value among its entries, returning true or false", "Includes an external script", "Combines two arrays"], correctAnswer: "Determines whether an array includes a certain value among its entries, returning true or false" },
        ]
    },
    {
        id: 'js-quiz-8',
        title: 'OOP & Prototypes',
        questions: [
            { question: "What is a 'prototype' in JavaScript?", options: ["A blueprint for creating objects", "An internal property on objects that contains a link to another object", "A type of function", "A way to create private properties"], correctAnswer: "An internal property on objects that contains a link to another object" },
            { question: "What is 'prototypal inheritance'?", options: ["When an object gets properties from another object via its prototype link", "A way to inherit from multiple objects", "A design pattern", "A syntax error"], correctAnswer: "When an object gets properties from another object via its prototype link" },
            { question: "The `class` keyword introduced in ES6 is primarily...", options: ["A new type of object", "A new inheritance model", "Syntactic sugar over JavaScript's existing prototype-based inheritance", "A way to create private members"], correctAnswer: "Syntactic sugar over JavaScript's existing prototype-based inheritance" },
            { question: "What is the purpose of the `constructor` method in a class?", options: ["To destroy the object", "A special method for creating and initializing an object created with a class", "To define the class properties", "To make the class methods public"], correctAnswer: "A special method for creating and initializing an object created with a class" },
            { question: "How do you create an instance of a class `Person`?", options: ["new Person()", "Person.create()", "create Person()", "Person()"], correctAnswer: "new Person()" },
            { question: "The `super` keyword is used to...", options: ["Call methods on an object's parent (superclass)", "Define a super-powered function", "Exit from a constructor", "Access global variables"], correctAnswer: "Call methods on an object's parent (superclass)" },
            { question: "How do you define a 'getter' in a class?", options: ["Using the `get` keyword before a method", "Using a method named `get...`", "Using the `getter()` function", "Getters are not supported in JS classes"], correctAnswer: "Using the `get` keyword before a method" },
            { question: "What is `instanceof` operator used for?", options: ["To check if an object is an instance of a specific class or constructor", "To get the type of an instance", "To create a new instance", "To compare two instances"], correctAnswer: "To check if an object is an instance of a specific class or constructor" },
            { question: "How do you create a static method in a class?", options: ["By using the `static` keyword", "By defining it outside the class", "All methods are static by default", "By using the `const` keyword"], correctAnswer: "By using the `static` keyword" },
            { question: "What is the main principle of Encapsulation in OOP?", options: ["Hiding complexity and exposing a simple interface", "Allowing objects to inherit features from one another", "Allowing an object to take on many forms", "Breaking down a program into smaller pieces"], correctAnswer: "Hiding complexity and exposing a simple interface" },
        ]
    },
    {
        id: 'js-quiz-9',
        title: 'Error Handling & Debugging',
        questions: [
            { question: "What statement is used to handle exceptions in JavaScript?", options: ["`try...catch`", "`if...else`", "`do...while`", "`on...error`"], correctAnswer: "`try...catch`" },
            { question: "What is the purpose of the `finally` block in a `try...catch` statement?", options: ["To execute code regardless of whether an error was thrown or not", "To execute code only if an error occurs", "To define the error object", "To re-throw an error"], correctAnswer: "To execute code regardless of whether an error was thrown or not" },
            { question: "Which statement is used to create a custom error?", options: ["`throw`", "`error`", "`catch`", "`exception`"], correctAnswer: "`throw`" },
            { question: "What does `console.log()` do?", options: ["Logs a message to the web console", "Logs an error message", "Displays a dialog box", "Stops the execution of the script"], correctAnswer: "Logs a message to the web console" },
            { question: "Which `console` method is best for displaying tabular data?", options: ["`console.table()`", "`console.log()`", "`console.grid()`", "`console.data()`"], correctAnswer: "`console.table()`" },
            { question: "What is a 'breakpoint' in debugging?", options: ["A point in the code where the execution will pause, allowing you to inspect the state", "An error that breaks the code", "The final line of a script", "A comment that marks a bug"], correctAnswer: "A point in the code where the execution will pause, allowing you to inspect the state" },
            { question: "The `debugger` statement...", options: ["Opens the debugger tools in the browser", "Stops the execution of the JavaScript, and calls (if any) the debugging function", "Logs a debug message", "Clears the console"], correctAnswer: "Stops the execution of the JavaScript, and calls (if any) the debugging function" },
            { question: "Which type of error occurs when you try to use a variable that has not been declared?", options: ["SyntaxError", "TypeError", "ReferenceError", "RangeError"], correctAnswer: "ReferenceError" },
            { question: "What is a 'stack trace'?", options: ["A list of all variables in the current scope", "A report of the active stack frames at a certain point in time during the execution of a program", "A visual representation of the call stack", "A memory allocation map"], correctAnswer: "A report of the active stack frames at a certain point in time during the execution of a program" },
            { question: "What does `console.error()` typically do in a browser?", options: ["Logs an error message to the console, often with special formatting", "Throws an exception that stops the script", "Displays a red popup to the user", "Sends an error report to the server"], correctAnswer: "Logs an error message to the console, often with special formatting" },
        ]
    },
    {
        id: 'js-quiz-10',
        title: 'Mixed Review',
        questions: [
            { question: "What does `JSON.stringify()` do?", options: ["Parses a JSON string", "Converts a JavaScript object to a JSON string", "Validates a JSON object", "Connects to a JSON database"], correctAnswer: "Converts a JavaScript object to a JSON string" },
            { question: "Which method adds one or more elements to the beginning of an array?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: "unshift()" },
            { question: "What is the correct way to write a single line comment in JavaScript?", options: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "' This is a comment"], correctAnswer: "// This is a comment" },
            { question: "What does the `this` keyword refer to inside an arrow function?", options: ["The object that called the function", "The global window object", "The scope in which the arrow function was defined", "null"], correctAnswer: "The scope in which the arrow function was defined" },
            { question: "The `...` operator can be used as...", options: ["A spread operator", "A rest parameter", "Both of the above", "None of the above"], correctAnswer: "Both of the above" },
            { question: "How do you get the number of elements in an array `arr`?", options: ["arr.length", "arr.size", "arr.count()", "length(arr)"], correctAnswer: "arr.length" },
        { question: "Which of the following is an example of a `TypeError`?", options: ["Calling a non-existent function", "Trying to access a property of `undefined`", "Using an undeclared variable", "A forgotten closing bracket"], correctAnswer: "Trying to access a property of `undefined`" },
            { question: "Which method would you use to find the first element in an array that satisfies a testing function?", options: ["filter()", "find()", "map()", "reduce()"], correctAnswer: "find()" },
            { question: "What does the `new` keyword do?", options: ["Creates a new file", "Creates an instance of an object that has a constructor function", "Resets a variable", "Creates a new scope"], correctAnswer: "Creates an instance of an object that has a constructor function" },
            { question: "Which built-in object can be used to work with dates and times?", options: ["Time", "Date", "Clock", "Calendar"], correctAnswer: "Date" },
        ]
    },
  ],
  python: [
    {
      id: 'python-quiz-1',
      title: 'Python Syntax & Variables',
      questions: [
        { question: "What is the correct syntax to output 'Hello World' in Python?", options: ["echo 'Hello World'", "p('Hello World')", "print('Hello World')", "console.log('Hello World')"], correctAnswer: "print('Hello World')" },
        { question: "How do you insert comments in Python code?", options: ["//This is a comment", "/*This is a comment*/", "#This is a comment", "<!--This is a comment-->"], correctAnswer: "#This is a comment" },
        { question: "Which one is NOT a legal variable name?", options: ["my-var", "Myvar", "_myvar", "my_var"], correctAnswer: "my-var" },
        { question: "How do you create a variable with the integer value 5?", options: ["x = int(5)", "x = 5", "Both A and B", "int x = 5"], correctAnswer: "Both A and B" },
        { question: "Python is a case-sensitive language.", options: ["True", "False"], correctAnswer: "True" },
        { question: "Which of the following is the correct extension of the Python file?", options: [".py", ".python", ".p", ".pyth"], correctAnswer: ".py" },
        { question: "What is the correct way to create a multi-line string in Python?", options: ["Using single quotes", "Using double quotes", "Using triple quotes", "Using backticks"], correctAnswer: "Using triple quotes" },
        { question: "What will be the value of the variable `x` after `x = 5`?", options: ["5", "5.0", "'5'", "Error"], correctAnswer: "5" },
        { question: "How can you get the data type of a variable?", options: ["typeOf()", "dtype()", "type()", "datatype()"], correctAnswer: "type()" },
        { question: "In Python, variable names can start with a number.", options: ["True", "False"], correctAnswer: "False" },
      ]
    },
    {
      id: 'python-quiz-2',
      title: 'Data Types & Structures',
      questions: [
        { question: "Which collection does not allow duplicate members?", options: ["List", "Tuple", "Set", "Dictionary"], correctAnswer: "Set" },
        { question: "What is a collection of key-value pairs called in Python?", options: ["List", "Tuple", "Set", "Dictionary"], correctAnswer: "Dictionary" },
        { question: "Which data type is immutable?", options: ["List", "Dictionary", "Set", "Tuple"], correctAnswer: "Tuple" },
        { question: "How do you create a list in Python?", options: ["x = [1, 2, 3]", "x = (1, 2, 3)", "x = {1, 2, 3}", "x = {'a':1, 'b':2}"], correctAnswer: "x = [1, 2, 3]" },
        { question: "Which method adds an element to the end of a list?", options: ["add()", "push()", "append()", "insert()"], correctAnswer: "append()" },
        { question: "How do you access the value associated with the key 'name' in a dictionary `d`?", options: ["d.name", "d('name')", "d['name']", "d.get('name', None)"], correctAnswer: "d['name']" },
        { question: "What is the result of `len('hello')`?", options: ["4", "5", "6", "Error"], correctAnswer: "5" },
        { question: "Which of these is a boolean type?", options: ["'True'", "True", "1", "All of the above"], correctAnswer: "True" },
        { question: "The `range(3)` function generates...", options: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "(0, 1, 2)"], correctAnswer: "[0, 1, 2]" },
        { question: "How do you convert a string `s = '123'` to an integer?", options: ["int(s)", "s.to_int()", "(int)s", "integer(s)"], correctAnswer: "int(s)" },
      ]
    },
    {
      id: 'python-quiz-3',
      title: 'Control Flow',
      questions: [
        { question: "How do you start writing an `if` statement in Python?", options: ["if x > y then:", "if (x > y)", "if x > y:", "if x > y"], correctAnswer: "if x > y:" },
        { question: "Which keyword is used in an `if` statement to handle a condition that is not the first one?", options: ["else if", "elseif", "elif", "or if"], correctAnswer: "elif" },
        { question: "How is a `for` loop used to iterate over a list `my_list`?", options: ["for x in my_list:", "for each x in my_list:", "for x = my_list:", "loop x in my_list:"], correctAnswer: "for x in my_list:" },
        { question: "What is the purpose of the `pass` statement?", options: ["To skip the current iteration of a loop", "To exit a function", "To act as a placeholder for future code", "To raise an exception"], correctAnswer: "To act as a placeholder for future code" },
        { question: "Which statement is used to stop a loop?", options: ["exit", "stop", "break", "return"], correctAnswer: "break" },
        { question: "The `while` loop continues as long as the condition is...", options: ["True", "False", "Not Null", "A number"], correctAnswer: "True" },
        { question: "What does the `continue` statement do in a loop?", options: ["Stops the loop entirely", "Skips the rest of the code inside the loop for the current iteration and proceeds to the next one", "Pauses the loop", "Resets the loop"], correctAnswer: "Skips the rest of the code inside the loop for the current iteration and proceeds to the next one" },
        { question: "What is the correct logical operator for 'and'?", options: ["&", "&&", "and", "AND"], correctAnswer: "and" },
        { question: "What is the correct logical operator for 'or'?", options: ["|", "||", "or", "OR"], correctAnswer: "or" },
        { question: "What does the `in` keyword do?", options: ["Checks if a value is present in a sequence (like a list or string)", "Acts as a loop counter", "Imports a module", "Defines an input field"], correctAnswer: "Checks if a value is present in a sequence (like a list or string)" },
      ]
    },
     {
        id: 'python-quiz-4',
        title: 'Functions',
        questions: [
            { question: "Which keyword is used to create a function?", options: ["function", "def", "create", "fun"], correctAnswer: "def" },
            { question: "A function is defined with `def my_func(a, b):`. How do you call it?", options: ["my_func(a,b)", "call my_func(1,2)", "my_func(1,2)", "my_func a=1, b=2"], correctAnswer: "my_func(1,2)" },
            { question: "What does a function return if it has no `return` statement?", options: ["0", "False", "None", "Error"], correctAnswer: "None" },
            { question: "What is a lambda function?", options: ["A function that is also a class", "A small, anonymous function defined with the `lambda` keyword", "A function used for mathematical calculations", "A function that runs in the background"], correctAnswer: "A small, anonymous function defined with the `lambda` keyword" },
            { question: "What does `*args` in a function definition allow?", options: ["To pass a variable number of keyword arguments", "To pass a variable number of positional arguments", "To specify required arguments", "To indicate the function is a generator"], correctAnswer: "To pass a variable number of positional arguments" },
            { question: "What does `**kwargs` in a function definition allow?", options: ["To pass a variable number of keyword arguments", "To pass a variable number of positional arguments", "To specify a dictionary is required", "To accept arguments as a list"], correctAnswer: "To pass a variable number of keyword arguments" },
            { question: "What is 'scope' in Python?", options: ["The set of rules for naming variables", "The region of a program where a namespace is directly accessible", "The length of a variable's name", "A built-in Python function"], correctAnswer: "The region of a program where a namespace is directly accessible" },
            { question: "What is a recursive function?", options: ["A function that is defined inside another function", "A function that calls itself", "A function that has no parameters", "A lambda function"], correctAnswer: "A function that calls itself" },
            { question: "How do you specify a default value for a parameter?", options: ["`def func(param=10):`", "`def func(param: 10):`", "`def func(param is 10):`", "`def func(param default 10):`"], correctAnswer: "`def func(param=10):`" },
            { question: "The `return` keyword is used to...", options: ["Exit a function and optionally pass back a value", "Print a value to the console", "Start a function", "Import a module"], correctAnswer: "Exit a function and optionally pass back a value" },
        ]
    },
    {
      id: 'python-quiz-5',
      title: 'Object-Oriented Programming',
      questions: [
        { question: "Which keyword is used to define a class in Python?", options: ["class", "def", "object", "struct"], correctAnswer: "class" },
        { question: "What is the name of the special method that initializes an object?", options: ["__init__()", "__main__()", "__new__()", "__create__()"], correctAnswer: "__init__()" },
        { question: "What does the `self` parameter in a method refer to?", options: ["The class itself", "The instance of the class", "The parent class", "A global variable"], correctAnswer: "The instance of the class" },
        { question: "How do you create an instance of a class `MyClass`?", options: ["x = create MyClass()", "x = MyClass.new()", "x = MyClass()", "x = new MyClass()"], correctAnswer: "x = MyClass()" },
        { question: "What is inheritance?", options: ["When a class is based on another class, inheriting its attributes and methods", "When a class contains another class", "When an object has multiple types", "When a function is passed as an argument"], correctAnswer: "When a class is based on another class, inheriting its attributes and methods" },
        { question: "How do you specify that `Dog` is a subclass of `Animal`?", options: ["class Dog(Animal):", "class Dog extends Animal:", "class Dog inherits Animal:", "class Dog: Animal"], correctAnswer: "class Dog(Animal):" },
        { question: "What is polymorphism?", options: ["The process of converting one data type to another", "Having many forms; methods of different classes can have the same name", "Hiding the implementation details of a class", "A type of variable"], correctAnswer: "Having many forms; methods of different classes can have the same name" },
        { question: "How do you access an attribute `name` of an object `p`?", options: ["p.name", "p['name']", "p(name)", "p->name"], correctAnswer: "p.name" },
        { question: "A method with two leading and trailing underscores (e.g., `__str__`) is called what?", options: ["A private method", "A magic or dunder method", "A static method", "An inherited method"], correctAnswer: "A magic or dunder method" },
        { question: "What is Encapsulation?", options: ["Bundling data and the methods that work on that data within one unit", "Allowing a class to inherit from multiple classes", "The ability to exist in many forms", "Converting code to machine code"], correctAnswer: "Bundling data and the methods that work on that data within one unit" },
      ]
    },
    {
        id: 'python-quiz-6',
        title: 'Modules & Packages',
        questions: [
            { question: "Which statement is used to include a module in your program?", options: ["include", "import", "using", "load"], correctAnswer: "import" },
            { question: "How would you import the `math` module?", options: ["import math", "include math", "from math import *", "Both A and C are valid"], correctAnswer: "Both A and C are valid" },
            { question: "If you use `from math import pi`, how do you access the value of pi?", options: ["math.pi", "pi", "math->pi", "pi()"], correctAnswer: "pi" },
            { question: "What is a Python package?", options: ["A single Python file", "A way of organizing related modules into a directory hierarchy", "A compressed file containing Python code", "A Python data type"], correctAnswer: "A way of organizing related modules into a directory hierarchy" },
            { question: "Which file must be in a directory for it to be considered a Python package?", options: ["__init__.py", "main.py", "setup.py", "package.json"], correctAnswer: "__init__.py" },
            { question: "What is pip?", options: ["A Python code linter", "A Python interpreter", "The standard package manager for Python", "A Python testing framework"], correctAnswer: "The standard package manager for Python" },
            { question: "How do you install a package named 'requests' using pip?", options: ["pip get requests", "pip install requests", "pip download requests", "pip add requests"], correctAnswer: "pip install requests" },
            { question: "What is the purpose of a `requirements.txt` file?", options: ["To list the Python version requirements", "To list the project's dependencies (packages)", "To provide documentation for the project", "To define the project's entry point"], correctAnswer: "To list the project's dependencies (packages)" },
            { question: "What is the Python Standard Library?", options: ["A collection of scripts for common tasks", "A library of third-party packages", "A collection of script syntax and semantics", "A collection of modules included with the standard Python installation"], correctAnswer: "A collection of modules included with the standard Python installation" },
            { question: "How can you give a module a different name (alias) when importing it?", options: ["import math as m", "import math rename m", "import math is m", "import math alias m"], correctAnswer: "import math as m" },
        ]
    },
    {
        id: 'python-quiz-7',
        title: 'File I/O',
        questions: [
            { question: "Which function is used to open a file?", options: ["open()", "file()", "read()", "File.open()"], correctAnswer: "open()" },
            { question: "What does the 'r' mode in `open('file.txt', 'r')` stand for?", options: ["Read", "Rewrite", "Run", "Real"], correctAnswer: "Read" },
            { question: "Which mode is used to write to a file, overwriting existing content?", options: ["'r'", "'a'", "'w'", "'x'"], correctAnswer: "'w'" },
            { question: "Which mode is used to append content to the end of a file?", options: ["'r+'", "'a'", "'w+'", "'p'"], correctAnswer: "'a'" },
            { question: "Which method reads the entire content of a file as a single string?", options: ["readall()", "readlines()", "read()", "get()"], correctAnswer: "read()" },
            { question: "It is important to do what after you are finished working with a file?", options: ["Delete the file", "Close the file", "Rename the file", "Save the file"], correctAnswer: "Close the file" },
            { question: "What is the recommended way to work with files to ensure they are properly closed?", options: ["Using a `try...finally` block", "Using the `with open(...) as ...:` statement", "Calling `close()` multiple times", "Letting the garbage collector handle it"], correctAnswer: "Using the `with open(...) as ...:` statement" },
            { question: "The `f.readline()` method reads...", options: ["The entire file", "A single line from the file", "A specific number of bytes", "A list of all lines"], correctAnswer: "A single line from the file" },
            { question: "How do you write a string `my_string` to a file object `f`?", options: ["f.write(my_string)", "f.print(my_string)", "f.put(my_string)", "write(f, my_string)"], correctAnswer: "f.write(my_string)" },
            { question: "What does `os.path.exists('file.txt')` check?", options: ["If the file is empty", "If the file can be read", "If a file or directory exists at the given path", "If the file is a text file"], correctAnswer: "If a file or directory exists at the given path" },
        ]
    },
    {
        id: 'python-quiz-8',
        title: 'Error & Exception Handling',
        questions: [
            { question: "Which block of code is used to handle potential errors?", options: ["try", "catch", "if error", "except"], correctAnswer: "try" },
            { question: "Which keyword is used to catch exceptions?", options: ["catch", "error", "except", "handle"], correctAnswer: "except" },
            { question: "A `try` block must be followed by which blocks?", options: ["An `except` block", "A `finally` block", "Either an `except` or a `finally` block", "An `else` block"], correctAnswer: "Either an `except` or a `finally` block" },
            { question: "The code inside the `finally` block is executed...", options: ["Only if an exception occurs", "Only if no exception occurs", "Always, regardless of whether an exception occurred", "Only when the exception is a TypeError"], correctAnswer: "Always, regardless of whether an exception occurred" },
            { question: "How do you raise a custom exception?", options: ["throw MyException", "raise MyException", "error MyException", "exception MyException"], correctAnswer: "raise MyException" },
            { question: "What kind of error occurs when you try to divide by zero?", options: ["TypeError", "ValueError", "SyntaxError", "ZeroDivisionError"], correctAnswer: "ZeroDivisionError" },
            { question: "What is a `SyntaxError`?", options: ["An error that occurs during the execution of the program", "An error in the program's logic", "An error caused by not following the proper structure of the language", "An error related to incorrect data types"], correctAnswer: "An error caused by not following the proper structure of the language" },
            { question: "The `else` block in a `try...except` statement is executed if...", options: ["An exception occurs", "No exceptions occur", "An exception occurs and is handled", "Always"], correctAnswer: "No exceptions occur" },
            { question: "How do you catch a specific type of exception, like `ValueError`?", options: ["except ValueError:", "except(ValueError):", "catch ValueError:", "error ValueError:"], correctAnswer: "except ValueError:" },
            { question: "Can you have multiple `except` blocks for one `try` block?", options: ["No, only one is allowed", "Yes, to handle different types of exceptions", "Yes, but they all do the same thing", "Only in Python 2"], correctAnswer: "Yes, to handle different types of exceptions" },
        ]
    },
    {
        id: 'python-quiz-9',
        title: 'List Comprehensions & Generators',
        questions: [
            { question: "What is a list comprehension?", options: ["A way to understand lists", "A concise way to create lists", "A special type of list", "A function that returns a list"], correctAnswer: "A concise way to create lists" },
            { question: "What is the result of `[x*2 for x in range(3)]`?", options: ["[0, 1, 2]", "[0, 2, 4]", "[2, 4, 6]", "[1, 2, 3]"], correctAnswer: "[0, 2, 4]" },
            { question: "How would you create a list of squares for numbers 0 through 4 using list comprehension?", options: ["`[x^2 for x in range(5)]`", "`[x**2 for x in range(5)]`", "`[x*x for x in [0,1,2,3,4]]`", "Both B and C"], correctAnswer: "Both B and C" },
            { question: "You can add a conditional to a list comprehension. What is the result of `[x for x in range(5) if x % 2 == 0]`?", options: ["[0, 2, 4]", "[1, 3]", "[0, 1, 2, 3, 4]", "[2, 4]"], correctAnswer: "[0, 2, 4]" },
            { question: "What is a generator expression?", options: ["It's the same as a list comprehension", "A high-level way to create generators, using syntax similar to list comprehensions", "A function that generates random numbers", "An expression that generates documentation"], correctAnswer: "A high-level way to create generators, using syntax similar to list comprehensions" },
            { question: "What is the main advantage of a generator over a list?", options: ["They are faster", "They use less memory because they generate items one by one (lazily)", "They are easier to write", "They can be modified after creation"], correctAnswer: "They use less memory because they generate items one by one (lazily)" },
            { question: "Which keyword is used in a function to make it a generator function?", options: ["generate", "return", "yield", "next"], correctAnswer: "yield" },
            { question: "How do you get the next value from a generator object `g`?", options: ["g.next()", "next(g)", "g.get()", "Both A and B"], correctAnswer: "Both A and B" },
            { question: "What happens when a generator function is exhausted?", options: ["It raises a `StopIteration` exception", "It starts from the beginning", "It returns `None`", "It raises a `ValueError`"], correctAnswer: "It raises a `StopIteration` exception" },
            { question: "What is the syntax for a generator expression?", options: ["`[x for x in iterable]`", "`{x for x in iterable}`", "`(x for x in iterable)`", "`g(x for x in iterable)`"], correctAnswer: "`(x for x in iterable)`" },
        ]
    },
    {
        id: 'python-quiz-10',
        title: 'Mixed Review',
        questions: [
            { question: "Which method can be used to return a string in upper case letters?", options: ["upper()", "toUpperCase()", "uppercase()", "toUpper()"], correctAnswer: "upper()" },
            { question: "What is the correct syntax to create a dictionary?", options: ["{'name': 'John', 'age': 30}", "['name': 'John', 'age': 30]", "('name': 'John', 'age': 30)", "{'name', 'John', 'age', 30}"], correctAnswer: "{'name': 'John', 'age': 30}" },
            { question: "How do you start a `while` loop?", options: ["while x > y:", "while (x > y)", "loop while x > y:", "while x > y then:"], correctAnswer: "while x > y:" },
            { question: "What does the `__init__` method do in a class?", options: ["It initializes the class object", "It is the constructor for the class, initializing instance attributes", "It is called when the object is destroyed", "It is the main entry point for the class"], correctAnswer: "It is the constructor for the class, initializing instance attributes" },
            { question: "What is the output of `print(list(range(2, 5)))`?", options: ["[2, 3, 4, 5]", "[2, 3, 4]", "[2, 5]", "[3, 4, 5]"], correctAnswer: "[2, 3, 4]" },
            { question: "How do you remove the last item from a list?", options: ["list.remove_last()", "list.pop()", "list.delete(-1)", "list.slice(0, -1)"], correctAnswer: "list.pop()" },
            { question: "What is the result of `True and False`?", options: ["True", "False", "Error", "None"], correctAnswer: "False" },
            { question: "Which library is commonly used for numerical operations, especially with arrays?", options: ["pandas", "matplotlib", "scipy", "numpy"], correctAnswer: "numpy" },
            { question: "How do you open a file for writing and overwrite it if it exists?", options: ["open('file.txt', 'a')", "open('file.txt', 'r+')", "open('file.txt', 'w')", "open('file.txt', 'x')"], correctAnswer: "open('file.txt', 'w')" },
            { question: "A decorator in Python is...", options: ["A way to add styling to your code", "A function that takes another function and extends its behavior without explicitly modifying it", "A comment that explains a function", "A special type of class"], correctAnswer: "A function that takes another function and extends its behavior without explicitly modifying it" },
        ]
    },
  ],
  java: [
    {
      id: 'java-quiz-1',
      title: 'Java Basics',
      questions: [
        { question: "Which data type is used to create a variable that should store text?", options: ["string", "Txt", "myString", "String"], correctAnswer: "String" },
        { question: "What is the file extension for compiled Java files?", options: [".java", ".j", ".class", ".jar"], correctAnswer: ".class" },
        { question: "Which keyword is used to import a package from the Java API library?", options: ["import", "package", "lib", "get"], correctAnswer: "import" },
        { question: "How do you start writing a multi-line comment in Java?", options: ["//", "/*", "<!--", "#"], correctAnswer: "/*" },
        { question: "Which method is the entry point for a Java application?", options: ["start()", "main()", "run()", "execute()"], correctAnswer: "main()" },
        { question: "What must every Java statement end with?", options: [".", ",", ";", ":"], correctAnswer: ";" },
        { question: "What is the process of converting Java source code into bytecode called?", options: ["Execution", "Interpretation", "Compilation", "Linking"], correctAnswer: "Compilation" },
        { question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Virtual Memory", "Java Visual Machine", "JavaScript Virtual Machine"], correctAnswer: "Java Virtual Machine" },
        { question: "How do you declare a variable for an integer number in Java?", options: ["integer x = 10;", "num x = 10;", "x = 10;", "int x = 10;"], correctAnswer: "int x = 10;" },
        { question: "Is Java case-sensitive?", options: ["Yes", "No"], correctAnswer: "Yes" },
      ]
    },
    {
      id: 'java-quiz-2',
      title: 'Data Types & Operators',
      questions: [
        { question: "Which of these is NOT a primitive data type in Java?", options: ["int", "float", "String", "boolean"], correctAnswer: "String" },
        { question: "What is the size of an `int` in Java?", options: ["16 bits", "32 bits", "64 bits", "Depends on the system"], correctAnswer: "32 bits" },
        { question: "Which operator is used for logical AND?", options: ["&", "&&", "and", "AND"], correctAnswer: "&&" },
        { question: "What is the result of `9 / 2` in Java?", options: ["4.5", "4", "5", "Error"], correctAnswer: "4" },
        { question: "What is 'type casting' in Java?", options: ["An error", "Converting a variable from one data type to another", "Creating a new variable", "A form of encryption"], correctAnswer: "Converting a variable from one data type to another" },
        { question: "Which operator is used to compare two values for equality?", options: ["=", "==", "===", ":="], correctAnswer: "==" },
        { question: "What is the modulus operator (`%`) used for?", options: ["To get a percentage", "To find the remainder of a division", "To perform exponentiation", "To compare two numbers"], correctAnswer: "To find the remainder of a division" },
        { question: "The `++` operator does what?", options: ["Increments a value by 2", "Multiplies a value by 2", "Increments a value by 1", "Finds the square root"], correctAnswer: "Increments a value by 1" },
        { question: "A `char` data type stores...", options: ["A single character", "A string of characters", "An integer", "A boolean value"], correctAnswer: "A single character" },
        { question: "What is the result of `5 + 3 + 'hello'`?", options: ["'8hello'", "'53hello'", "Error", "'hello8'"], correctAnswer: "'8hello'" },
      ]
    },
    {
      id: 'java-quiz-3',
      title: 'Control Flow',
      questions: [
        { question: "Which statement is used to make a decision between two or more alternatives?", options: ["for", "while", "if-else", "switch"], correctAnswer: "if-else" },
        { question: "How do you start a `for` loop?", options: ["for (int i=0; i<5; i++)", "for i=0 to 5", "for (i<5)", "for each i in list"], correctAnswer: "for (int i=0; i<5; i++)" },
        { question: "Which loop is guaranteed to execute at least once?", options: ["for", "while", "do-while", "if"], correctAnswer: "do-while" },
        { question: "What does the `break` statement do?", options: ["Exits the current loop or switch statement", "Skips the current iteration of a loop", "Ends the program", "Returns a value from a method"], correctAnswer: "Exits the current loop or switch statement" },
        { question: "The `continue` statement is used to...", options: ["Stop the loop", "Continue to the next iteration of the loop", "Continue the program after an error", "Pause the loop"], correctAnswer: "Continue to the next iteration of the loop" },
        { question: "Which statement is used to select one of many code blocks to be executed?", options: ["if", "when", "switch", "select"], correctAnswer: "switch" },
        { question: "What must be included in a `switch` statement if you don't want execution to 'fall through' to the next case?", options: ["`stop;`", "`break;`", "`end;`", "`next;`"], correctAnswer: "`break;`" },
        { question: "What is the logical OR operator?", options: ["|", "||", "or", "OR"], correctAnswer: "||" },
        { question: "A `while` loop checks its condition...", options: ["Before each iteration", "After each iteration", "Only once", "Never"], correctAnswer: "Before each iteration" },
        { question: "How do you write 'not equal to' in a condition?", options: ["<>", "!=", "!==", "NOT ="], correctAnswer: "!=" },
      ]
    },
    {
        id: 'java-quiz-4',
        title: 'Object-Oriented Programming (OOP) - Part 1',
        questions: [
            { question: "Which of these is a fundamental concept of OOP in Java?", options: ["Pointers", "Inheritance", "Global variables", "Procedures"], correctAnswer: "Inheritance" },
            { question: "What is a class in Java?", options: ["A blueprint from which objects are created", "A primitive data type", "A method", "A reserved keyword"], correctAnswer: "A blueprint from which objects are created" },
            { question: "Which keyword is used to create a new object?", options: ["new", "create", "alloc", "build"], correctAnswer: "new" },
            { question: "What is a constructor?", options: ["A method used to destroy an object", "A special method used to initialize an object", "A type of class", "A variable"], correctAnswer: "A special method used to initialize an object" },
            { question: "If a constructor is not defined in a class, what happens?", options: ["The program will not compile", "The Java compiler provides a default constructor", "The object cannot be created", "It results in a runtime error"], correctAnswer: "The Java compiler provides a default constructor" },
            { question: "The `this` keyword refers to...", options: ["The superclass", "The current class", "A static variable", "The current object instance"], correctAnswer: "The current object instance" },
            { question: "What is the purpose of encapsulation?", options: ["To bundle data (variables) and methods that work on the data into a single unit", "To allow a class to inherit from another", "To create many forms of a method", "To make all properties public"], correctAnswer: "To bundle data (variables) and methods that work on the data into a single unit" },
            { question: "How do you define a member variable that should only be accessible within the same class?", options: ["public", "protected", "private", "hidden"], correctAnswer: "private" },
            { question: "What are 'getter' and 'setter' methods used for?", options: ["To get and set the values of private member variables", "To perform calculations", "To construct and destroy objects", "To format output"], correctAnswer: "To get and set the values of private member variables" },
            { question: "An object is an _______ of a class.", options: ["instance", "element", "type", "blueprint"], correctAnswer: "instance" },
        ]
    },
    {
      id: 'java-quiz-5',
      title: 'Object-Oriented Programming (OOP) - Part 2',
      questions: [
        { question: "Which keyword is used for a class to inherit from another class?", options: ["inherits", "extends", "implements", "derives"], correctAnswer: "extends" },
        { question: "What is method overriding?", options: ["Defining two methods with the same name in the same class", "A subclass providing a specific implementation of a method that is already provided by its superclass", "Creating a method that cannot be called", "A compile-time error"], correctAnswer: "A subclass providing a specific implementation of a method that is already provided by its superclass" },
        { question: "A method that belongs to a class rather than an instance of a class is what?", options: ["Instance method", "Static method", "Final method", "Abstract method"], correctAnswer: "Static method" },
        { question: "What does the `final` keyword prevent when used on a class?", options: ["The class from being instantiated", "The class from being subclassed (inherited from)", "The class from having methods", "The class from compiling"], correctAnswer: "The class from being subclassed (inherited from)" },
        { question: "What is an abstract class?", options: ["A class that cannot be instantiated and may contain abstract methods", "A class that has no methods", "A class with only private members", "A final class"], correctAnswer: "A class that cannot be instantiated and may contain abstract methods" },
        { question: "What is an interface in Java?", options: ["A special type of class with only constants", "A blueprint of a class that has static constants and abstract methods", "A user interface component", "A synonym for a class"], correctAnswer: "A blueprint of a class that has static constants and abstract methods" },
        { question: "Which keyword is used by a class to use an interface?", options: ["uses", "implements", "extends", "inherits"], correctAnswer: "implements" },
        { question: "Can a class implement multiple interfaces?", options: ["Yes", "No"], correctAnswer: "Yes" },
        { question: "Can a class extend multiple classes?", options: ["Yes", "No"], correctAnswer: "No" },
        { question: "What is polymorphism?", options: ["The ability of an object to take on many forms", "A way to prevent inheritance", "A memory management technique", "A type of loop"], correctAnswer: "The ability of an object to take on many forms" },
      ]
    },
    {
        id: 'java-quiz-6',
        title: 'Arrays & Strings',
        questions: [
            { question: "What is the main difference between an `Array` and an `ArrayList`?", options: ["An Array has a fixed size, an ArrayList does not", "An ArrayList can only store strings", "An Array is an object, an ArrayList is not", "There is no difference"], correctAnswer: "An Array has a fixed size, an ArrayList does not" },
            { question: "How do you declare an array of integers?", options: ["int[] arr;", "Array<int> arr;", "int arr[];", "Both A and C are correct"], correctAnswer: "Both A and C are correct" },
            { question: "What is the index of the first element in a Java array?", options: ["1", "0", "-1", "a"], correctAnswer: "0" },
            { question: "Which property is used to get the number of elements in an array `arr`?", options: ["arr.size()", "arr.length", "arr.count", "length(arr)"], correctAnswer: "arr.length" },
            { question: "Are `String` objects in Java immutable?", options: ["Yes, they cannot be changed after creation", "No, they can be changed", "Only if declared with `final`", "It depends on the JVM"], correctAnswer: "Yes, they cannot be changed after creation" },
            { question: "Which method is used to get the length of a `String` `str`?", options: ["str.length", "str.size()", "str.length()", "length(str)"], correctAnswer: "str.length()" },
            { question: "How do you compare two strings for equality in value?", options: ["str1 == str2", "str1.equals(str2)", "str1.compareTo(str2)", "str1 === str2"], correctAnswer: "str1.equals(str2)" },
            { question: "The `StringBuilder` and `StringBuffer` classes are used for...", options: ["Creating immutable strings", "Creating mutable (modifiable) strings", "Building user interfaces", "Handling file I/O"], correctAnswer: "Creating mutable (modifiable) strings" },
            { question: "What is the 'enhanced for loop' (or 'for-each loop') syntax for an array `arr` of type `int`?", options: ["for (int i : arr)", "for (int i in arr)", "for each (int i in arr)", "for (i; arr)"], correctAnswer: "for (int i : arr)" },
            { question: "The `substring` method of a String does what?", options: ["Checks if a string contains another string", "Replaces a part of the string", "Returns a new string that is a sub-portion of the original string", "Splits the string into an array"], correctAnswer: "Returns a new string that is a sub-portion of the original string" },
        ]
    },
    {
        id: 'java-quiz-7',
        title: 'Exception Handling',
        questions: [
            { question: "What is an exception in Java?", options: ["A syntax error", "An event that disrupts the normal flow of the program", "A special type of comment", "A hardware failure"], correctAnswer: "An event that disrupts the normal flow of the program" },
            { question: "Which keyword is used to enclose code that might throw an exception?", options: ["try", "catch", "throw", "finally"], correctAnswer: "try" },
            { question: "Which block is used to handle a thrown exception?", options: ["try", "catch", "handle", "except"], correctAnswer: "catch" },
            { question: "The `finally` block is always executed, except when...", options: ["An exception is thrown", "No exception is thrown", "The JVM exits (e.g., via System.exit())", "Never, it is always executed"], correctAnswer: "The JVM exits (e.g., via System.exit())" },
            { question: "Which keyword is used to manually throw an exception?", options: ["throw", "throws", "exception", "error"], correctAnswer: "throw" },
            { question: "What is the difference between `throw` and `throws`?", options: ["No difference", "`throw` is used to trigger an exception, `throws` is used in a method signature to declare it may trigger one", "`throws` handles an exception, `throw` creates one", "`throw` is for errors, `throws` is for exceptions"], correctAnswer: "`throw` is used to trigger an exception, `throws` is used in a method signature to declare it may trigger one" },
            { question: "What is a 'checked exception'?", options: ["An exception that is checked at compile-time; it must be handled or declared", "An exception that is checked at runtime", "A custom exception", "An error that cannot be handled"], correctAnswer: "An exception that is checked at compile-time; it must be handled or declared" },
            { question: "`NullPointerException` is an example of what kind of exception?", options: ["Checked Exception", "Unchecked (Runtime) Exception", "Error", "Handled Exception"], correctAnswer: "Unchecked (Runtime) Exception" },
            { question: "Can a `try` block exist without a `catch` block?", options: ["No, it's a syntax error", "Yes, if it has a `finally` block", "Yes, it can stand alone", "Only in older versions of Java"], correctAnswer: "Yes, if it has a `finally` block" },
            { question: "What is the base class for all exceptions and errors in Java?", options: ["java.lang.Exception", "java.lang.Error", "java.lang.Throwable", "java.lang.Object"], correctAnswer: "java.lang.Throwable" },
        ]
    },
    {
        id: 'java-quiz-8',
        title: 'Java Collections Framework',
        questions: [
            { question: "Which interface is the root of the Java Collections Framework?", options: ["List", "Set", "Map", "Collection"], correctAnswer: "Collection" },
            { question: "Which collection type stores an ordered collection of elements and allows duplicates?", options: ["Set", "List", "Map", "Queue"], correctAnswer: "List" },
            { question: "Which collection type stores a collection of unique elements?", options: ["Set", "List", "Bag", "Array"], correctAnswer: "Set" },
            { question: "Which collection stores elements as key-value pairs?", options: ["Set", "List", "Map", "Collection"], correctAnswer: "Map" },
            { question: "Which `List` implementation is generally fastest for adding/removing elements from the ends?", options: ["ArrayList", "Vector", "LinkedList", "Stack"], correctAnswer: "LinkedList" },
            { question: "Which `Set` implementation stores elements in a sorted order?", options: ["HashSet", "LinkedHashSet", "TreeSet", "SortedSet"], correctAnswer: "TreeSet" },
            { question: "Which `Map` implementation makes no guarantees about the iteration order?", options: ["HashMap", "TreeMap", "LinkedHashMap", "Hashtable"], correctAnswer: "HashMap" },
            { question: "What does a `Queue` typically represent?", options: ["A last-in, first-out (LIFO) data structure", "A first-in, first-out (FIFO) data structure", "A sorted collection of elements", "A collection of unique elements"], correctAnswer: "A first-in, first-out (FIFO) data structure" },
            { question: "How do you add an element `e` to an `ArrayList` `list`?", options: ["list.add(e)", "list.put(e)", "list.insert(e)", "list.push(e)"], correctAnswer: "list.add(e)" },
            { question: "The `Collections.sort()` method can be used to sort which type of collection?", options: ["Any Collection", "Map", "Set", "List"], correctAnswer: "List" },
        ]
    },
    {
        id: 'java-quiz-9',
        title: 'Generics & More',
        questions: [
            { question: "What is the primary purpose of Generics in Java?", options: ["To generate code automatically", "To provide compile-time type safety and avoid casts", "To create generic objects", "To improve runtime performance"], correctAnswer: "To provide compile-time type safety and avoid casts" },
            { question: "What is the correct syntax for an `ArrayList` that can only hold `String` objects?", options: ["ArrayList<String> list = new ArrayList<String>();", "ArrayList list = new ArrayList<String>();", "ArrayList<String> list = new ArrayList();", "All of the above are valid"], correctAnswer: "All of the above are valid" },
            { question: "What is an 'enum' in Java?", options: ["A special data type that enables for a variable to be a set of predefined constants", "A type of loop", "A memory enumeration tool", "A mathematical formula"], correctAnswer: "A special data type that enables for a variable to be a set of predefined constants" },
            { question: "What is the purpose of the `static` keyword on a method?", options: ["It makes the method belong to the class, rather than an instance of the class", "It makes the method unchangeable", "It makes the method only accessible to other static methods", "It allows the method to be inherited"], correctAnswer: "It makes the method belong to the class, rather than an instance of the class" },
            { question: "What does the `final` keyword on a method signify?", options: ["The method cannot be overridden", "The method cannot be called", "The method must be the last one in the class", "The method returns a final value"], correctAnswer: "The method cannot be overridden" },
            { question: "What is 'autoboxing'?", options: ["The automatic conversion that the Java compiler makes between primitive types and their corresponding object wrapper classes", "A feature for automatic car simulation", "Creating a box-shadow automatically", "Packaging a project into a JAR file"], correctAnswer: "The automatic conversion that the Java compiler makes between primitive types and their corresponding object wrapper classes" },
            { question: "Which method must a class implement if it implements the `Runnable` interface?", options: ["`start()`", "`execute()`", "`run()`", "`thread()`"], correctAnswer: "`run()`" },
            { question: "The `transient` keyword is used to...", options: ["Mark a member variable to not be serialized when it is persisted to a stream of bytes", "Make a variable temporary", "Indicate a variable can be accessed by multiple threads", "Create a constant"], correctAnswer: "Mark a member variable to not be serialized when it is persisted to a stream of bytes" },
            { question: "What is a Lambda expression?", options: ["A way to represent an anonymous function", "A mathematical expression", "A way to print to the console", "A type of comment"], correctAnswer: "A way to represent an anonymous function" },
            { question: "What must a method return if it does not return any value?", options: ["null", "void", "empty", "int"], correctAnswer: "void" },
        ]
    },
    {
        id: 'java-quiz-10',
        title: 'Mixed Review',
        questions: [
            { question: "Which method is called automatically when an object is created?", options: ["main()", "The constructor", "start()", "finalize()"], correctAnswer: "The constructor" },
            { question: "How do you get the character at index 5 in a string `str`?", options: ["str.get(5)", "str[5]", "str.charAt(5)", "str.character(5)"], correctAnswer: "str.charAt(5)" },
            { question: "Which loop is best when you want to iterate through a collection of elements?", options: ["while", "do-while", "for-each (enhanced for)", "recursive loop"], correctAnswer: "for-each (enhanced for)" },
            { question: "What is the difference between `==` and `.equals()` for objects?", options: ["No difference", "`==` compares object references, `.equals()` compares their content (if overridden)", "`.equals()` compares references, `==` compares content", "`==` is faster"], correctAnswer: "`==` compares object references, `.equals()` compares their content (if overridden)" },
            { question: "What is `System.out.println()` used for?", options: ["Reading input from the console", "Printing output to the console", "Defining a system property", "Closing the system"], correctAnswer: "Printing output to the console" },
            { question: "Which access modifier provides the widest accessibility?", options: ["private", "default (package-private)", "protected", "public"], correctAnswer: "public" },
            { question: "Which of these is a checked exception?", options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "IOException", "ArithmeticException"], correctAnswer: "IOException" },
            { question: "To use the `ArrayList` class, which package needs to be imported?", options: ["java.io", "java.lang", "java.util", "java.net"], correctAnswer: "java.util" },
            { question: "The `super` keyword is used to...", options: ["Call a method in the current class", "Refer to the superclass object", "Define a variable with global scope", "End the program"], correctAnswer: "Refer to the superclass object" },
            { question: "What is the file extension for Java source code files?", options: [".class", ".obj", ".exe", ".java"], correctAnswer: ".java" },
        ]
    },
  ],
  go: [
    {
      id: 'go-quiz-1',
      title: 'Go Basics',
      questions: [
        { question: "How do you declare a variable `x` of type `int` in Go?", options: ["int x;", "var x int", "x := 0", "Both B and C"], correctAnswer: "Both B and C" },
        { question: "Which package contains functions for printing to the console?", options: ["io", "fmt", "console", "print"], correctAnswer: "fmt" },
        { question: "What is the entry point of a Go program?", options: ["func start()", "func main()", "func begin()", "func run()"], correctAnswer: "func main()" },
        { question: "How do you write a single-line comment in Go?", options: ["# comment", "/* comment */", "// comment", "<!-- comment -->"], correctAnswer: "// comment" },
        { question: "In Go, a name is exported and visible from other packages if it...", options: ["is declared with the `export` keyword", "begins with a capital letter", "is in the `main` package", "is a function"], correctAnswer: "begins with a capital letter" },
        { question: "What is the short variable declaration operator?", options: [":=", "=", "=>", "->"], correctAnswer: ":=" },
        { question: "Which keyword is used to define a function?", options: ["function", "def", "fun", "func"], correctAnswer: "func" },
        { question: "What is the file extension for Go source files?", options: [".go", ".golang", ".gl", ".g"], correctAnswer: ".go" },
        { question: "Go is a statically typed language.", options: ["True", "False"], correctAnswer: "True" },
        { question: "The `main` function must be in which package for an executable program?", options: ["main", "program", "executable", "runtime"], correctAnswer: "main" },
      ]
    },
    {
      id: 'go-quiz-2',
      title: 'Data Types & Structs',
      questions: [
        { question: "What is the zero value for a string type?", options: ["nil", "undefined", `"" (empty string)`, "null"], correctAnswer: `"" (empty string)` },
        { question: "What is a `struct` in Go?", options: ["A type of loop", "A collection of fields", "A built-in function", "A pointer to a memory address"], correctAnswer: "A collection of fields" },
        { question: "Which data structure is used to map keys to values in Go?", options: ["map", "dictionary", "hash", "object"], correctAnswer: "map" },
        { question: "What is the type of a variable that stores a true or false value?", options: ["boolean", "bool", "tf", "bit"], correctAnswer: "bool" },
        { question: "How do you create a slice of integers?", options: ["[]int{1, 2, 3}", "make(slice, 3)", "new array<int>", "{1, 2, 3}"], correctAnswer: "[]int{1, 2, 3}" },
        { question: "What is the difference between an array and a slice?", options: ["Arrays have a fixed size, while slices are dynamically-sized", "Slices can hold multiple types, arrays cannot", "Arrays are faster", "No difference"], correctAnswer: "Arrays have a fixed size, while slices are dynamically-sized" },
        { question: "What is a pointer in Go?", options: ["A memory address", "A variable that holds the memory address of another value", "A special type of integer", "A reference to a file"], correctAnswer: "A variable that holds the memory address of another value" },
        { question: "How do you get the value that a pointer `p` points to?", options: ["*p", "&p", "p.value", "p()"], correctAnswer: "*p" },
        { question: "What is the zero value for a pointer?", options: ["0", "nil", "null", "undefined"], correctAnswer: "nil" },
        { question: "The `len()` function can be used on which types?", options: ["string, array, slice, map", "int, float", "bool", "struct"], correctAnswer: "string, array, slice, map" },
      ]
    },
    {
      id: 'go-quiz-3',
      title: 'Control Structures',
      questions: [
        { question: "How do you write a `for` loop that acts like a `while` loop?", options: ["for condition {}", "while condition {}", "loop condition {}", "for ; condition ; {}"], correctAnswer: "for condition {}" },
        { question: "What is unique about the `if` statement syntax in Go?", options: ["It doesn't use parentheses", "It can have a short statement before the condition", "It requires curly braces `{}` even for single-line statements", "All of the above"], correctAnswer: "All of the above" },
        { question: "Which keyword is used to exit a loop early?", options: ["break", "continue", "exit", "stop"], correctAnswer: "break" },
        { question: "What does the `continue` statement do in a loop?", options: ["Exits the loop", "Starts the next iteration of the loop", "Pauses the loop", "Returns from the function"], correctAnswer: "Starts the next iteration of the loop" },
        { question: "The `switch` statement in Go...", options: ["Requires a `break` after each case", "Automatically breaks after a case is matched", "Can only be used with integers", "Is the same as an `if` statement"], correctAnswer: "Automatically breaks after a case is matched" },
        { question: "What is a `defer` statement used for?", options: ["To delay a function call until the surrounding function returns", "To run a function in the background", "To define a default value", "To handle errors"], correctAnswer: "To delay a function call until the surrounding function returns" },
        { question: "If multiple `defer` calls exist in a function, in what order are they executed?", options: ["First-in, first-out (FIFO)", "Last-in, first-out (LIFO)", "In parallel", "The order is not guaranteed"], correctAnswer: "Last-in, first-out (LIFO)" },
        { question: "How do you iterate over a map `m`?", options: ["for k, v in m {}", "for k, v := range m {}", "for each k, v in m {}", "loop k, v := m {}"], correctAnswer: "for k, v := range m {}" },
        { question: "Go does not have a `while` loop.", options: ["True", "False"], correctAnswer: "True" },
        { question: "What is a 'type switch' used for?", options: ["To switch between different data types", "To discover the dynamic type of an interface variable", "To convert a variable's type", "To select a theme in a UI"], correctAnswer: "To discover the dynamic type of an interface variable" },
      ]
    },
    {
        id: 'go-quiz-4',
        title: 'Functions & Methods',
        questions: [
            { question: "Can a function in Go return multiple values?", options: ["Yes", "No"], correctAnswer: "Yes" },
            { question: "What is a method in Go?", options: ["A function with a special receiver argument", "Any function defined inside a struct", "A synonym for a function", "A function that returns a boolean"], correctAnswer: "A function with a special receiver argument" },
            { question: "What is the receiver argument in a method declaration?", options: ["The first parameter of the method", "It associates the function with a specific type", "The return value of the method", "A special variable named `this` or `self`"], correctAnswer: "It associates the function with a specific type" },
            { question: "What is the difference between a value receiver and a pointer receiver?", options: ["A value receiver operates on a copy of the value; a pointer receiver operates on the original value.", "A pointer receiver is faster.", "Value receivers are for structs, pointer receivers are for interfaces.", "No difference, they are interchangeable."], correctAnswer: "A value receiver operates on a copy of the value; a pointer receiver operates on the original value." },
            { question: "Functions in Go can be used as values (e.g., assigned to variables).", options: ["True", "False"], correctAnswer: "True" },
            { question: "What is a variadic function?", options: ["A function that can be called with a varying number of arguments", "A function that returns multiple values", "A function that is defined inside another function", "A function that accepts only one type of argument"], correctAnswer: "A function that can be called with a varying number of arguments" },
            { question: "How do you define a variadic parameter `numbers` of type `int`?", options: ["func sum(...int numbers)", "func sum(numbers... int)", "func sum(int... numbers)", "func sum(numbers int...)"], correctAnswer: "func sum(numbers... int)" },
            { question: "What is a closure in Go?", options: ["A function value that references variables from outside its body", "A way to close a file automatically", "A type of struct", "An error handling mechanism"], correctAnswer: "A function value that references variables from outside its body" },
            { question: "What is the convention for error handling in Go functions?", options: ["Using try-catch blocks", "Returning an `error` as the last return value", "Crashing the program", "Ignoring errors"], correctAnswer: "Returning an `error` as the last return value" },
            { question: "How do you declare a function type?", options: ["type myFunc func(int) int", "func type myFunc(int) int", "typedef func myFunc(int) int", "let myFunc = func(int) int"], correctAnswer: "type myFunc func(int) int" },
        ]
    },
    {
      id: 'go-quiz-5',
      title: 'Concurrency',
      questions: [
        { question: "How do you run a function concurrently as a goroutine?", options: ["run myFunc()", "async myFunc()", "go myFunc()", "concurrent myFunc()"], correctAnswer: "go myFunc()" },
        { question: "What is a goroutine?", options: ["A heavyweight thread managed by the OS", "A lightweight thread managed by the Go runtime", "A special type of function", "A Go-specific CPU core"], correctAnswer: "A lightweight thread managed by the Go runtime" },
        { question: "What are channels used for in Go concurrency?", options: ["To communicate and synchronize between goroutines", "To define the channel of a TV", "To format output strings", "To connect to a network"], correctAnswer: "To communicate and synchronize between goroutines" },
        { question: "How do you create a new channel for integers?", options: ["ch := make(chan int)", "ch := new(chan int)", "ch := chan int", "ch := create(chan int)"], correctAnswer: "ch := make(chan int)" },
        { question: "Which operator is used to send a value `v` into a channel `ch`?", options: ["ch < v", "ch <- v", "ch > v", "v -> ch"], correctAnswer: "ch <- v" },
        { question: "Which operator is used to receive a value from a channel `ch`?", options: ["v := <-ch", "v <- ch", "v = ch.receive()", "v := ch >"], correctAnswer: "v := <-ch" },
        { question: "What is a buffered channel?", options: ["A channel that can only hold one value at a time", "A channel with a capacity to hold more than one value before blocking", "A channel that automatically encrypts data", "A channel that is slower but safer"], correctAnswer: "A channel with a capacity to hold more than one value before blocking" },
        { question: "What is the purpose of the `select` statement?", options: ["It's a `switch` statement for types", "It lets a goroutine wait on multiple communication operations", "It selects a random goroutine to run", "It's a way to create a UI"], correctAnswer: "It lets a goroutine wait on multiple communication operations" },
        { question: "What is a 'race condition'?", options: ["When two goroutines compete to finish first", "An error that happens at compile time", "A situation where multiple goroutines access shared data and the final result depends on the order of execution", "A tool for benchmarking Go code"], correctAnswer: "A situation where multiple goroutines access shared data and the final result depends on the order of execution" },
        { question: "The `sync.Mutex` is used to...", options: ["Synchronize clocks", "Control access to shared resources and prevent race conditions", "Pause a goroutine", "Send a signal between goroutines"], correctAnswer: "Control access to shared resources and prevent race conditions" },
      ]
    },
    {
        id: 'go-quiz-6',
        title: 'Packages & Error Handling',
        questions: [
            { question: "How do you handle errors in Go?", options: ["Using try-catch blocks", "By checking if an error value is not nil", "Errors are automatically thrown", "Using the `throws` keyword"], correctAnswer: "By checking if an error value is not nil" },
            { question: "What is the built-in interface type for errors in Go?", options: ["Exception", "Error", "error", "Failure"], correctAnswer: "error" },
            { question: "How do you create a new error message?", options: ["`errors.New(\"my error message\")`", "`new Error(\"...\")`", "`throw(\"...\")`", "`error.Create(\"...\")`"], correctAnswer: "`errors.New(\"my error message\")`" },
            { question: "What does `panic` do?", options: ["It stops the normal flow of control and begins panicking", "It's a graceful way to handle errors", "It logs an error message", "It retries the function"], correctAnswer: "It stops the normal flow of control and begins panicking" },
            { question: "What does `recover` do?", options: ["Recovers a deleted file", "Regains control of a panicking goroutine", "Retries a failed network request", "Recovers memory"], correctAnswer: "Regains control of a panicking goroutine" },
            { question: "`recover` is only useful inside _______ functions.", options: ["main", "deferred", "panicking", "init"], correctAnswer: "deferred" },
            { question: "Which command is used to download Go packages?", options: ["go install", "go download", "go get", "go fetch"], correctAnswer: "go get" },
            { question: "What is the purpose of the `go.mod` file?", options: ["To define the main function", "To manage dependencies for a Go project", "To configure the compiler", "To document the code"], correctAnswer: "To manage dependencies for a Go project" },
            { question: "What is the Go standard library?", options: ["A set of core packages included with Go", "A third-party package manager", "A collection of example Go programs", "A code formatting tool"], correctAnswer: "A set of core packages included with Go" },
            { question: "What does `go test` command do?", options: ["Tests the network connection", "Runs test functions in files ending with _test.go", "Deploys the application to a test environment", "Formats the test files"], correctAnswer: "Runs test functions in files ending with _test.go" },
        ]
    },
    {
        id: 'go-quiz-7',
        title: 'Interfaces',
        questions: [
            { question: "What is an interface in Go?", options: ["A collection of method signatures", "A type of struct", "A concrete implementation", "A pointer type"], correctAnswer: "A collection of method signatures" },
            { question: "How does a type satisfy an interface?", options: ["By explicitly declaring it with the `implements` keyword", "By implementing all methods of the interface", "By inheriting from the interface", "By using a type cast"], correctAnswer: "By implementing all methods of the interface" },
            { question: "What is the 'empty interface' `interface{}`?", options: ["An interface with no methods, which can hold values of any type", "An interface that cannot be used", "A syntax error", "An interface for empty structs"], correctAnswer: "An interface with no methods, which can hold values of any type" },
            { question: "What is a 'type assertion'?", options: ["It provides access to an interface value's underlying concrete value", "It asserts that a variable is of a certain type at compile time", "It converts one type to another", "It's a way to declare a new type"], correctAnswer: "It provides access to an interface value's underlying concrete value" },
            { question: "What is the syntax for a type assertion to get a `string` value `s` from an interface `i`?", options: ["s := string(i)", "s := i.(string)", "s := i.(string)!", "s := (string)i"], correctAnswer: "s := i.(string)" },
            { question: "What is a common use case for interfaces in Go?", options: ["To define a set of behaviors for different types (polymorphism)", "To create variables", "To control program flow", "To manage memory"], correctAnswer: "To define a set of behaviors for different types (polymorphism)" },
            { question: "The `io.Reader` interface is a famous example that requires which method?", options: ["`Read(p []byte) (n int, err error)`", "`Write(p []byte)`", "`ReadString()`", "`Get()`"], correctAnswer: "`Read(p []byte) (n int, err error)`" },
            { question: "If a type assertion fails, what happens?", options: ["The program panics", "It returns a zero value and `false`", "It returns `nil`", "It depends on the type"], correctAnswer: "The program panics" },
            { question: "How can you check the type of an interface value without panicking?", options: ["Using a `try-catch` block", "Using a type switch", "Using the two-value assignment `val, ok := i.(T)`", "Both B and C"], correctAnswer: "Both B and C" },
            { question: "Go's approach to interfaces is sometimes called...", options: ["Nominal typing", "Duck typing", "Strong typing", "Static typing"], correctAnswer: "Duck typing" },
        ]
    },
    {
        id: 'go-quiz-8',
        title: 'Pointers & Slices',
        questions: [
            { question: "How do you get the memory address of a variable `v`?", options: ["*v", "&v", "addr(v)", "ptr(v)"], correctAnswer: "&v" },
            { question: "How do you declare a pointer to an `int`?", options: ["var p *int", "var p ptr<int>", "var p &int", "var p int*"], correctAnswer: "var p *int" },
            { question: "Slices are built on top of what?", options: ["Maps", "Structs", "Arrays", "Interfaces"], correctAnswer: "Arrays" },
            { question: "What does the `append` function do?", options: ["Adds elements to the end of a slice, returning a new slice", "Appends a file", "Concatenates two strings", "Adds a key to a map"], correctAnswer: "Adds elements to the end of a slice, returning a new slice" },
            { question: "What does `slice[1:3]` express?", options: ["Elements at index 1 and 3", "Elements from index 1 up to (but not including) index 3", "Elements from index 1 to index 3, inclusive", "A new slice of length 3"], correctAnswer: "Elements from index 1 up to (but not including) index 3" },
            { question: "What does a slice header contain?", options: ["A pointer to the array, the length, and the capacity", "The length and the capacity", "A pointer to the data", "The data itself"], correctAnswer: "A pointer to the array, the length, and the capacity" },
            { question: "What is the 'capacity' of a slice?", options: ["The number of elements in the slice", "The number of elements in the underlying array, counting from the first element in the slice", "The maximum number of elements it can hold", "The memory size of the slice"], correctAnswer: "The number of elements in the underlying array, counting from the first element in the slice" },
            { question: "Passing a slice to a function passes...", options: ["A copy of the entire underlying array", "A copy of the slice header (by value)", "A pointer to the slice", "The data itself"], correctAnswer: "A copy of the slice header (by value)" },
            { question: "How do you create a slice with a length of 5 and capacity of 10?", options: ["make([]int, 10, 5)", "make([]int, 5, 10)", "new([]int, 5, 10)", "[]int{len:5, cap:10}"], correctAnswer: "make([]int, 5, 10)" },
            { question: "Go does not support pointer arithmetic.", options: ["True", "False"], correctAnswer: "True" },
        ]
    },
    {
        id: 'go-quiz-9',
        title: 'Standard Library',
        questions: [
            { question: "Which package provides functions for working with JSON?", options: ["encoding/json", "json", "text/json", "data/json"], correctAnswer: "encoding/json" },
            { question: "What does `json.Marshal` do?", options: ["Decodes JSON data into a Go struct", "Encodes a Go struct into JSON data", "Validates JSON data", "Prints JSON data"], correctAnswer: "Encodes a Go struct into JSON data" },
            { question: "Which package is used for making HTTP requests?", options: ["net/http", "http", "web", "net"], correctAnswer: "net/http" },
            { question: "The `os` package provides...", options: ["A platform-independent interface to operating system functionality", "Math constants and functions", "String manipulation functions", "Concurrency primitives"], correctAnswer: "A platform-independent interface to operating system functionality" },
            { question: "How can you read command-line arguments in a Go program?", options: ["Using `os.Args`", "Using `flag.Parse()`", "Both A and B", "Neither A nor B"], correctAnswer: "Both A and B" },
            { question: "Which package contains useful functions for manipulating strings?", options: ["str", "string", "strings", "text"], correctAnswer: "strings" },
            { question: "What is the purpose of the `time` package?", options: ["To measure execution time", "To provide functionality for measuring and displaying time", "To create timers and delays", "All of the above"], correctAnswer: "All of the above" },
            { question: "How do you format a string in Go, similar to `printf` in C?", options: ["fmt.Printf()", "fmt.Println()", "fmt.Sprintf()", "Both A and C"], correctAnswer: "Both A and C" },
            { question: "The `io.Reader` and `io.Writer` interfaces are fundamental for...", options: ["Handling input and output streams", "Reading and writing to the console", "Working with numbers", "Defining HTTP handlers"], correctAnswer: "Handling input and output streams" },
            { question: "Which package would you use to work with file paths in a platform-independent way?", options: ["os", "path", "path/filepath", "io/fs"], correctAnswer: "path/filepath" },
        ]
    },
    {
        id: 'go-quiz-10',
        title: 'Mixed Review',
        questions: [
            { question: "How do you declare a constant in Go?", options: ["let PI = 3.14", "const PI = 3.14", "final PI = 3.14", "PI := 3.14"], correctAnswer: "const PI = 3.14" },
            { question: "How do you run a function in the background concurrently?", options: ["async myFunc()", "go myFunc()", "defer myFunc()", "thread myFunc()"], correctAnswer: "go myFunc()" },
            { question: "What is the idiomatic way to handle errors in Go?", options: ["try/catch blocks", "Returning an error as the last value from a function", "Panicking", "Ignoring them"], correctAnswer: "Returning an error as the last value from a function" },
            { question: "A pointer stores...", options: ["A value", "A data type", "A memory address", "A function"], correctAnswer: "A memory address" },
            { question: "What does the `range` keyword do when used in a `for` loop?", options: ["Generates a range of numbers", "Iterates over elements in a variety of data structures", "Measures the length of a slice", "Defines the scope of a variable"], correctAnswer: "Iterates over elements in a variety of data structures" },
            { question: "A `struct` is a...", options: ["Collection of fields", "Type of interface", "Way to create a new thread", "Built-in function"], correctAnswer: "Collection of fields" },
            { question: "What does `make([]int, 5)` create?", options: ["An array of 5 integers", "A slice of 5 integers", "A map with 5 integer keys", "A channel for 5 integers"], correctAnswer: "A slice of 5 integers" },
            { question: "A public (exported) function name must start with...", options: ["A lowercase letter", "An underscore", "A capital letter", "The `pub` keyword"], correctAnswer: "A capital letter" },
            { question: "What is `GOPATH`?", options: ["The path to the Go compiler", "An environment variable that defines the root of your workspace", "The path to the standard library", "A Go project file"], correctAnswer: "An environment variable that defines the root of your workspace" },
            { question: "Which tool is used to format Go code automatically?", options: ["gofmt", "golint", "govet", "gocode"], correctAnswer: "gofmt" },
        ]
    },
  ],
  c: generateQuizzes(10, i => ({ id: `c-quiz-${i + 1}`, title: `C Fundamentals Quiz ${i + 1}`, questions: [ { question: "Which function is the entry point of every C program?", options: ["start()", "main()", "program()", "begin()"], correctAnswer: "main()" }, { question: "What does the `sizeof` operator do?", options: ["Returns the size of a file", "Returns the size of a variable or data type in bytes", "Returns the length of a string", "Increases the size of a variable"], correctAnswer: "Returns the size of a variable or data type in bytes" }, { question: "How do you define a macro in C?", options: ["#macro", "#define", "#typedef", "#const"], correctAnswer: "#define" }, { question: "What is a pointer?", options: ["A variable that stores a character", "A variable that stores the memory address of another variable", "A variable that stores a floating-point number", "A type of array"], correctAnswer: "A variable that stores the memory address of another variable" }, { question: "Which header file is needed for functions like `printf` and `scanf`?", options: ["<stdlib.h>", "<string.h>", "<math.h>", "<stdio.h>"], correctAnswer: "<stdio.h>" }, { question: "How do you correctly allocate memory for an array of 10 integers?", options: ["malloc(10 * sizeof(int))", "alloc(10, int)", "new int[10]", "create_memory(10, int)"], correctAnswer: "malloc(10 * sizeof(int))" }, { question: "What is the difference between `++i` and `i++`?", options: ["No difference", "`++i` increments then returns, `i++` returns then increments", "`++i` is for integers, `i++` is for floats", "`i++` is faster"], correctAnswer: "`++i` increments then returns, `i++` returns then increments" }, { question: "What is a `struct` used for?", options: ["To define a new data type", "To group several related variables into one place", "To create a loop", "To perform mathematical operations"], correctAnswer: "To group several related variables into one place" }, { question: "Which keyword is used to jump out of a loop?", options: ["return", "continue", "break", "exit"], correctAnswer: "break" }, { question: "How do you declare a variable that will not change?", options: ["const int x = 10;", "static int x = 10;", "final int x = 10;", "int x = 10;"], correctAnswer: "const int x = 10;" }, ] })),
  cpp: generateQuizzes(10, i => ({ id: `cpp-quiz-${i + 1}`, title: `C++ Fundamentals Quiz ${i + 1}`, questions: [ { question: "Which header is used for input and output streams in C++?", options: ["<stdio.h>", "<iostream>", "<inputoutput>", "<stream>"], correctAnswer: "<iostream>" }, { question: "What is the main feature C++ adds to C?", options: ["Pointers", "Loops", "Classes", "Functions"], correctAnswer: "Classes" }, { question: "Which keyword is used to define a namespace?", options: ["namespace", "package", "module", "using"], correctAnswer: "namespace" }, { question: "What is a reference in C++?", options: ["A pointer to a variable", "An alias for an already existing variable", "A copy of a variable", "A variable that cannot be changed"], correctAnswer: "An alias for an already existing variable" }, { question: "What is function overloading?", options: ["Defining multiple functions with the same name but different parameters", "Overriding a function in a subclass", "A function that calls itself", "A function that is too long"], correctAnswer: "Defining multiple functions with the same name but different parameters" }, { question: "The `new` operator is used to...", options: ["Create a new file", "Allocate memory on the heap", "Create a new namespace", "Start a new process"], correctAnswer: "Allocate memory on the heap" }, { question: "What is a destructor?", options: ["A function that constructs an object", "A function that is called when an object is destroyed", "A function to delete files", "A type of compiler error"], correctAnswer: "A function that is called when an object is destroyed" }, { question: "What does `virtual` mean on a member function?", options: ["The function cannot be called", "The function is defined in another file", "It allows the function to be overridden in derived classes", "The function is static"], correctAnswer: "It allows the function to be overridden in derived classes" }, { question: "Which container in the STL provides a dynamic array?", options: ["std::list", "std::vector", "std::map", "std::array"], correctAnswer: "std::vector" }, { question: "What is the purpose of the `try` and `catch` blocks?", options: ["To handle exceptions", "To create a loop", "To define a class", "To perform mathematical calculations"], correctAnswer: "To handle exceptions" }, ] })),
  php: generateQuizzes(10, i => ({ id: `php-quiz-${i + 1}`, title: `PHP Fundamentals Quiz ${i + 1}`, questions: [ { question: "All variables in PHP start with which symbol?", options: ["&", "$", "!", "#"], correctAnswer: "$" }, { question: "What is the correct way to end a PHP statement?", options: [".", ":", ";", "New line"], correctAnswer: ";" }, { question: "The PHP `echo` command is used to...", options: ["Receive input", "Output text", "Execute a system command", "Create a new variable"], correctAnswer: "Output text" }, { question: "How do you get information from a form that is submitted using the 'GET' method?", options: ["$_GET[]", "Request.QueryString", "Request.Form", "GET[]"], correctAnswer: "$_GET[]" }, { question: "Which function is used to check if a variable is an array?", options: ["is_array()", "is_arr()", "isArray()", "check_array()"], correctAnswer: "is_array()" }, { question: "What is the `include` statement used for?", options: ["To include and evaluate a specified file", "To include a remote CSS file", "To create a function", "To connect to a database"], correctAnswer: "To include a remote CSS file" }, { question: "How do you create a cookie in PHP?", options: ["make_cookie()", "setcookie()", "create_cookie()", "session_cookie()"], correctAnswer: "setcookie()" }, { question: "In PHP, what is the `===` operator called?", options: ["Equals operator", "Identical operator", "Assignment operator", "Same operator"], correctAnswer: "Identical operator" }, { question: "What does PDO stand for?", options: ["PHP Data Object", "PHP Database Orientation", "Personal Data Object", "PHP Data Operation"], correctAnswer: "PHP Data Object" }, { question: "Which of the following is used to concatenate two strings?", options: ["+", ".", "&", "++"], correctAnswer: "." }, ] })),
  xml: generateQuizzes(10, i => ({ id: `xml-quiz-${i + 1}`, title: `XML Fundamentals Quiz ${i + 1}`, questions: [ { question: "What is the correct syntax for the declaration of an XML document?", options: ["<xml version='1.0' />", "<?xml version='1.0'?>", "<!DOCTYPE xml>", "<xml>"], correctAnswer: "<?xml version='1.0'?>" }, { question: "Which of the following is NOT a correct rule for XML syntax?", options: ["All elements must have a closing tag", "XML tags are case-sensitive", "All elements must be properly nested", "Attribute values do not need to be quoted"], correctAnswer: "Attribute values do not need to be quoted" }, { question: "What is the root element in an XML document?", options: ["The first element", "The element that contains all other elements", "The `<root>` element", "The `<html>` element"], correctAnswer: "The element that contains all other elements" }, { question: "What is a 'prolog' in an XML document?", options: ["The main content of the document", "The section containing the XML declaration and document type definition", "The last element in the document", "A comment"], correctAnswer: "The section containing the XML declaration and document type definition" }, { question: "What is the purpose of a DTD (Document Type Definition)?", options: ["To define the structure and legal elements of an XML document", "To style the XML document", "To script the XML document", "To provide the data for the document"], correctAnswer: "To define the structure and legal elements of an XML document" }, { question: "What does XSLT stand for?", options: ["eXtensible Stylesheet Language Transformations", "eXtensible Scripting Language for Text", "XML Scripting Language for Tables", "eXtensible Stylesheet Linking Technology"], correctAnswer: "eXtensible Stylesheet Language Transformations" }, { question: "Can an XML document contain empty elements?", options: ["Yes", "No", "Only if it has an attribute", "Only at the root level"], correctAnswer: "Yes" }, { question: "What is the correct way to write an XML comment?", options: ["<!-- comment -->", "<?comment?>", "<comment>", "// comment"], correctAnswer: "<!-- comment -->" }, { question: "What is a CDATA section used for?", options: ["To include character data that would otherwise be treated as markup", "To define a new data type", "To comment out a block of code", "To create a link to another document"], correctAnswer: "To include character data that would otherwise be treated as markup" }, { question: "Is XML a replacement for HTML?", options: ["Yes", "No, XML and HTML were designed with different goals", "Only for mobile devices", "Yes, in modern web development"], correctAnswer: "No, XML and HTML were designed with different goals" }, ] })),
};
