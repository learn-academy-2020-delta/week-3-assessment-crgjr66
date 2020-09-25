# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object destructuring?

  Your answer: Bringing/referencing a state element from the parent component into a child component, and removing the this.state so we can directly update the referenced element

  Researched answer: The object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables. What's better, object destructuring can extract multiple properties in one statement, can access properties from nested objects, and can set a default value if the property doesn't exist.


2. What are React lifecycle methods? Provide three examples.

  Your answer: Mounting, Updating, and Unmounting.  constructor() is an example of Mounting, it is when the component is created.  setState() is an example of Updating, it is how we change the value of state.  Cannot think of an example of Unmounting.

  Researched answer: The three phases are: Mounting, Updating, and Unmounting. The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values. A component is updated whenever there is a change in the component's state or props. The render() method is required and will always be called, the others are optional and will be called if you define them. React has only one built-in method that gets called when a component is unmounted, componentWillUnmount(). The componentWillUnmount method is called when the component is about to be removed from the DOM.


3. What is the difference between a class and an object?

  Your answer: Class is a template for an object, i.e. objects are created with the properties of a class.

  Researched answer: Many people get confused by the difference between class and object. The difference is simple and conceptual. A class is a template for objects. A class defines object properties including a valid range of values, and a default value.


4. What is the difference between a HTML div and a span?

  Your answer: a Span is usually a small piece of a Div.  Div defines an entire block of code.

  Researched answer: A div is a block-level element and a span is an inline element. The div should be used to wrap sections of a document, while use spans to wrap small portions of text, images, etc. The <div> element is used while creating CSS based layouts in html, whereas <span> element is used to stylize texts


5. What is React.Fragment (or <>) and why would you want to use it?

  Your answer: A react.fragment is used so that you can render multiple items

  Researched answer: A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM


6. What are three options for creating responsive design?

  Your answer: Making website flexible so that it is displayed correctly on any device. Handle with CSS styling.

  Researched answer: Responsive website design consists of the following three main components:

Flexible layouts - Using a flexible grid to create the website layout that will dynamically resize to any width.
Media queries - An extension to media types when targeting and including styles. Media queries allow designers to specify different styles for specific browser and device circumstances.
Flexible media - Makes media (images, video and other formats) scalable, by changing the size of the media as the size of the viewport changes.

Images, style="width:100% (percentage of screen). Text, style="font-size:10vw" (scale according to viewport width). Margin, margin: 1em 2em, which means 1 element of size, regardless of the size.


7. What are props in React?

  Your answer: Props stand for properties.  It is the data that gets passed between components.

  Researched answer: “Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. But the important part here is that data with props are being passed in a uni-directional flow. ( one way from parent to child)


8. What is `this` in JavaScript?

  Your answer: 'this' is a way of identifying which object an element belongs to

  Researched answer: The JavaScript this keyword refers to the object it belongs to. ... In a function, this refers to the global object. In a function, in strict mode, this is undefined . In an event, this refers to the element that received the event. Methods like call() , and apply() can refer this to any object.


9. STRETCH: What is a ternary operator in JavaScript?

  Your answer: The ternary operator is a way of writing shortcut code to replace an if-then-else condition.

  Researched answer: The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy


10. STRETCH: What is an anonymous function in JavaScript?

  Your answer: A function without a name.  Can be used to immediately execute the function after it is created.

  Researched answer: Anonymous functions are functions without names.
Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution.



## Looking Ahead: Terms for Next Week
- Ruby: A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write

- Object oriented programming: Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior. OOP focuses on the objects that developers want to manipulate rather than the logic required to manipulate them. This approach to programming is well-suited for programs that are large, complex and actively updated or maintained.

- RSpec: RSpec is a testing tool for Ruby, created for behavior-driven development (BDD). It is the most frequently used testing library for Ruby in production applications. Even though it has a very rich and powerful DSL (domain-specific language), at its core it is a simple tool which you can start using rather quickly

- Instance variable: In the Ruby programming language, an instance variable is a type of variable which starts with an @ symbol. An instance variable is used as part of Object-Oriented Programming (OOP) to give objects their own private space to store data.

- Ruby blocks: A Ruby block is a way of grouping statements, and may appear only in the source adjacent to a method call; the block is written starting on the same line as the method call's last parameter (or the closing parenthesis of the parameter list). The code in the block is not executed at the time it is encountered.

- Ruby hashes: Advertisements. A Hash is a collection of key-value pairs like this: "employee" = > "salary". It is similar to an Array, except that indexing is done via arbitrary keys of any object type, not an integer index

- `getter` and `setter` methods in Ruby: these methods allow us to access a class's instance variable from outside the class. ... Getter methods are used to get the value of an instance variable while the setter methods are used to set the value of an instance variable of some class.
