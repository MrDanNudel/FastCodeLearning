document.addEventListener("DOMContentLoaded", function () {
  const questionsAndAnswers = {
    "What is HTML?!":
      "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. It describes the structure of a Web page using a series of elements, which tell the browser how to display the content. HTML elements label pieces of content such as headings, paragraphs, links, etc.",
    "Explain HTML Document tags(<!DOCTYPE html>,<html>,<head>,<title>,<body>,<h1>,<p1>)":
      "The <!DOCTYPE html> declaration defines that this document is an HTML5 document. The <html> element is the root element of an HTML page. The <head> element contains meta information about the HTML page. The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab). The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc. The <h1> element defines a large heading. The <p> element defines a paragraph.",
    "What is an HTML Element?":
      "An HTML element is defined by a start tag, some content, and an end tag:\n\n<tagname> Content goes here... </tagname>\n\nThe HTML element is everything from the start tag to the end tag:\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n\nNote: Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!",
    "What is the web?":
      "The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly. A browser does not display the HTML tags, but uses them to determine how to display the document.",
    "HTML Page Structure": {
      text: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My HTML Page</title>\n    <!-- Additional metadata and links to external resources -->\n</head>\n<body>\n    <h1>Hello, World!</h1>\n    <p>This is a basic HTML page.</p>\n    <!-- Additional content and elements -->\n</body>\n</html>',
      imagePath: "picsForFast/html-structure.png", // Corrected path
    },
    "<!DOCTYPE> Declaration":
      "The <!DOCTYPE> declaration represents the document type, and helps browsers to display web pages correctly. It must only appear once, at the top of the page (before any HTML tags). The <!DOCTYPE> declaration is not case sensitive. The <!DOCTYPE> declaration for HTML5 is: <!DOCTYPE html>",
    "HTML Headings":
      "HTML headings are defined with the <h1> to <h6> tags.\n<h1> defines the most important heading.\n<h6> defines the least important heading.\n\n<h1>This is heading 1</h1>\n<h2>This is heading 2</h2>\n<h3>This is heading 3</h3>",
    "HTML Paragraphs":
      "HTML paragraphs are defined with the <p> tag:\n<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>",
    "HTML Links":
      "HTML links are defined with the <a> tag:\n<a href='https://www.w3schools.com'>This is a link</a>\n\nThe link's destination is specified in the href attribute.\nattributes are used to provide additional information about HTML elements.\nYou will learn more about attributes in a later chapter.",
    "HTML Images":
      "HTML images are defined with the <img> tag.\nThe source file (src), alternative text (alt), width, and height are provided as attributes:\n\n<img src='w3schools.jpg' alt='W3Schools.com' width='104' height='142'>",
    "How to View HTML Source":
      "Click CTRL + U in an HTML page, or right-click on the page and select 'View Page Source'.\nthis will open a new tab containing the HTML source code of the page.\nInspect an HTML Element:\nright-click on an element (or a blank area), and choose 'Inspect' to see what elements are made up of (you will see both the HTML and the CSS).\nYou can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.",
    "Nested HTML Elements":
      "HTML elements can be nested (this means that elements can contain other elements).\nall HTML documents consist of nested HTML elements.\nThe following example contains four HTML elements (<html>, <body>, <h1> and <p>):\nExample Explained\n\nThe <html> element is the root element and it defines the whole HTML document.\nit has a start tag <html> and an end tag </html>.\nThen, inside the <html> element there is a <body> element:(nested element)",
    "Never Skip the End Tag":
      "Some HTML elements will display correctly, even if you forget the end tag:\nHowever, never rely on this! Unexpected results and errors may occur if you forget the end tag!",
    "Empty HTML Elements":
      "HTML elements with no content are called empty elements.\nThe <br> tag defines a line break, and is an empty element without a closing tag:\n<p>This is a <br> paragraph with a line break.</p>\n",
    "HTML Attributes":
      "HTML attributes provide additional information about HTML elements.\nAll HTML elements can have attributes\nAttributes provide additional information about elements\nAttributes are always specified in the start tag\nAttributes usually come in name/value pairs like: name='value'",
    "The href Attribute":
      "The <a> tag defines a hyperlink.\nThe href attribute specifies the URL of the page the link goes to\n\nExample\n\n<a href='https://www.w3schools.com'>Visit W3Schools</a>",
    "The src Attribute":
      "The <img> tag is used to embed an image in an HTML page.\nThe src attribute specifies the path to the image to be displayed: img src='img_sky.jpg'>\nThere are two ways to specify the URL in the src attribute:\n1.Absolute URL - Links to an external image that is hosted on another website.\n\nExample:\nsrc='https://www.w3schools.com/images/img_sky.jpg'.\n\nRelative URL - Links to an image that is hosted within the website.\nHere, the URL does not include the domain name.\nIf the URL begins without a slash, it will be relative to the current page.\n\nExample:\n src='img_sky.jpg'.\nIf the URL begins with a slash, it will be relative to the domain.\n\nExample:\n src='/images/img_sky.jpg'.",
    "The style Attribute":
      "The style attribute is used to add styles to an element, such as color, font, size, and more.\n\nExample:\n<p style='color:red;'>This is a red paragraph.</p>",
    "The lang Attribute":
      "You should always include the lang attribute inside the <html> tag, to declare the language of the Web page.\nThis is meant to assist search engines and browsers.\n\nThe following example specifies English as the language:\n\n<!DOCTYPE html>\n<html lang='en'>\n<body>\n...\n...\n</body>\n</html>",
    "The title Attribute":
      "The title attribute defines some extra information about an element.\nThe value of the title attribute will be displayed as a tooltip when you mouse over the element:\n\nExample:\n\n<p title='I'm a tooltip'>This is a paragraph.</p>",
    "Single or Double Quotes?":
      "Double quotes around attribute values are the most common in HTML\nbut single quotes can also be used.\nIn some situations, when the attribute value itself contains double quotes,\n it is necessary to use single quotes.\n\nExample\n\n<p title='John ''ShotGun'' Nelson'>",
    "HTML Display":
      "You cannot be sure how HTML will be displayed.\nLarge or small screens, and resized windows will create different results.\nWith HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.\nThe browser will automatically remove any extra spaces and lines when the page is displayed",
    "HTML Horizontal Rules":
      "The <hr> tag defines a thematic break in an HTML page,\n and is most often displayed as a horizontal rule.\nThe <hr> element is used to separate content (or define a change) in an HTML page\n\nExample:\n\n<h1>This is heading 1</h1>\n<p>This is some text.</p>\n<hr>\n<h2>This is heading 2</h2>\n<p>This is some other text.</p>\n<hr>",
    "HTML Line Breaks":
      "The HTML <br> element defines a line break.\nUse <br> if you want a line break (a new line) without starting a new paragraph:\n\n<p>This is<br>a paragraph<br>with line breaks.</p>\n\nThe <br> tag is an empty tag, which means that it has no end tag.",
    "The Poem Problem":
      "This poem will display on a single line:\n\n<p>\nMy Bonnie lies over the ocean.\nmy Bonnie lies over the sea.\n<p>\n\nSolution - The HTML <pre> Element\n\nThe HTML <pre> element defines preformatted text\nThe text inside a <pre> element is displayed in a fixed-width font (usually Courier)\nand it preserves both spaces and line breaks:",
    "HTML Text Formatting":
      "HTML contains several elements for defining text with a special meaning.\n<b> - Bold text\n<strong> - Important text\n<i> - Italic text\n<em> - Emphasized text\n<mark> - Marked text\n<small> - Smaller text\n<del> - Deleted text\n<ins> - Inserted text\n<sub> - Subscript text\n<sup> - Superscript text\n",
    "HTML Comment Tag":
      "You can add comments to your HTML source by using the following syntax:\n\n<!-- Write your comments here -->",
    "HTML Colors":
      "HTML colors are specified with predefined color names,\nor with RGB, HEX, HSL, RGBA, or HSLA values.\n\nExample\n\nrgb(255, 99, 71)\n#ff6347\nhsl(9, 100%, 64%)\nYou can add transparency (by adding another value):\n\nrgba(255, 99, 71, 0.5)",
  };

  const cssQuestionsAndAnswers = {
    "What is CSS?":
      "CSS is the language we use to style a Web page.\n\nCSS stands for Cascading Style Sheets\nCSS describes how HTML elements are to be displayed on screen, paper, or in other media\nCSS saves a lot of work. It can control the layout of multiple web pages all at once\nExternal stylesheets are stored in CSS files",
    "Why Use CSS?":
      "CSS is used to define styles for your web pages,\nincluding the design, layout and variations in display for different devices and screen sizes.",
    "CSS Syntax":
      "A CSS rule consists of a selector and a declaration block\nThe selector points to the HTML element you want to style.\nThe declaration block contains one or more declarations separated by semicolons.\nEach declaration includes a CSS property name and a value, separated by a colon.\nMultiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.",
    "CSS Selectors":
      "A CSS selector selects the HTML element(s) you want to style.\n\nWe can divide CSS selectors into five categories:\n\nSimple selectors (select elements based on name, id, class)\nCombinator selectors (select elements based on a specific relationship between them)\nPseudo-class selectors (select elements based on a certain state)\nPseudo-elements selectors (select and style a part of an element)\nAttribute selectors (select elements based on an attribute or attribute value)",
    "The CSS element Selector":
      "The element selector selects HTML elements based on the element name.\n\nExample:\n\np {\n  text-align: center;\n  color: red;\n}",
    "The CSS id Selector":
      "The id selector uses the id attribute of an HTML element to select a specific element.\nThe id of an element is unique within a page,\nso the id selector is used to select one unique element!\nTo select an element with a specific id, write a hash (#) character, followed by the id of the element.\nExample\n\n#para1 {\n text-align: center;\n color: red;\n}",
    "The CSS class Selector":
      "The class selector selects HTML elements with a specific class attribute.\nTo select elements with a specific class, write a period (.) character, followed by the class name.\n\nExample\nIn this example all HTML elements with class='center' will be red and center-aligned:\n\n.center {\n text-align: center;\n color: red;\n}\n\nYou can also specify that only specific HTML elements should be affected by a class.\n\nIn this example only <p> elements with class='center' will be red and center-aligned:\n\np.center {\n text-align: center;\n color: red;\n}\n\nHTML elements can also refer to more than one class\nExample\nIn this example the <p> element will be styled according to class='center' and to class='large':\n\n<p class='center large'>This paragraph refers to two classes.</p>",
    "CSS Universal Selector":
      "The universal selector (*) selects all HTML elements on the page.\n\nExample\nThe CSS rule below will affect every HTML element on the page:\n\n*{\ntext-align: center;\n color: blue;\n} ",
    "CSS Grouping Selector":
      "The grouping selector selects all the HTML elements with the same style definitions.\nTo group selectors, separate each selector with a comma.\n\nExample:\n\nh1, h2, p {\n text-align: center;\n color: red;\n}",
    "How To Add CSS":
      "There are three ways of inserting a style sheet:\nExternal CSS\nInternal CSS\nInline CSS\n\nExternal CSS\nWith an external style sheet, you can change the look of an entire website by changing just one file!\nEach HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section.\nInternal CSS\nAn internal style sheet may be used if one single HTML page has a unique style.\nThe internal style is defined inside the <style> element, inside the head section.\nInline CSS\nAn inline style may be used to apply a unique style for a single element.To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.",
    "Cascading Order":
      "What style will be used when there is more than one style specified for an HTML element?\nAll the styles in a page will 'cascade' into a new 'virtual' style sheet by the following rules,\nwhere number one has the highest priority:\n\n1.Inline style (inside an HTML element), \n2.External and internal style sheets (in the head section),\n3.Browser default.",
  };

  var displayedQuestions = [];
  //set defult current subject
  let currentSubject = "html";

  //fun that updates ths display of current subject
  function updateCurrentSubject() {
    document.getElementById("currentSubject").innerText =
      "Current Subject : " + " " + currentSubject.toUpperCase();
  }

  //caling the fun to display current sub
  updateCurrentSubject();

  //html
  var indexQuestion = 0;
  const questionsArray = Object.keys(questionsAndAnswers);
  let isAnswerDisplayed = false;

  //css
  var indexQuestionCss = 0;
  const cssQuestionsArray = Object.keys(cssQuestionsAndAnswers);
  let isAnswerDisplayedCss = false;

  //get the textera
  const textarea = document.getElementById("message");

  // Function to display CSS question and answer in textarea
  function displayQuestionAndAnswerCss(index) {
    textarea.value = cssQuestionsArray[index];
  }
  // Function to display HTML question and answer in textarea
  function displayQuestionAndAnswer(index) {
    textarea.value = questionsArray[index];
  }

  let isByOrder = true;

  // Set initial question in the textarea
  if (currentSubject == "html") {
    textarea.value = questionsArray[0];
  } else if (currentSubject == "css") {
    textarea.value = cssQuestionsArray[0];
  }

  // Add event listener to start over button
  document
    .getElementById("startOverButton")
    .addEventListener("click", function (event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      isAnswerDisplayed = false;
      isAnswerDisplayedCss = false;
      currentSubject = "html";

      //updated the display of current sub"
      updateCurrentSubject();

      indexQuestion = 0;
      indexQuestionCss = 0;
      document.getElementById("progressBar").value = 0;
      displayQuestionAndAnswer(indexQuestion);
      const submitButton = document.getElementById("showAnswerButton");
      submitButton.textContent = "show answer";
    });

  // Add event listener to show answer button

  document
    .getElementById("showAnswerButton")
    .addEventListener("click", function (event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      const submitButton = document.getElementById("showAnswerButton");
      if (currentSubject == "html" && isByOrder) {
        if (!isAnswerDisplayed) {
          textarea.value =
            questionsArray[indexQuestion] +
            "\n\n" +
            questionsAndAnswers[questionsArray[indexQuestion]];
          isAnswerDisplayed = true;
          submitButton.textContent = "hide answer";
        } else {
          textarea.value = questionsArray[indexQuestion];
          isAnswerDisplayed = false;
          submitButton.textContent = "show answer";
        }
      } else if (currentSubject == "css") {
        if (!isAnswerDisplayedCss) {
          textarea.value =
            cssQuestionsArray[indexQuestionCss] +
            "\n\n" +
            cssQuestionsAndAnswers[cssQuestionsArray[indexQuestionCss]];

          isAnswerDisplayedCss = true;
          submitButton.textContent = "hide answer";
        } else {
          textarea.value = cssQuestionsArray[indexQuestionCss];
          isAnswerDisplayedCss = false;
          alert(textarea.value);
          submitButton.textContent = "show answer";
        }
      }
    });

  // Add event listener to previous question button
  document
    .getElementById("prevQuestionButton")
    .addEventListener("click", function (event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      if (currentSubject == "html") {
        if (indexQuestion > 0) {
          indexQuestion--;
          document.getElementById("progressBar").value =
            (indexQuestion / (questionsArray.length - 1)) * 100;
          displayQuestionAndAnswer(indexQuestion);
          const submitButton = document.getElementById("showAnswerButton");
          submitButton.textContent = "show answer";
        }
      } else if (currentSubject == "css") {
        if (indexQuestionCss > 0) {
          indexQuestionCss--;
          document.getElementById("progressBar").value =
            (indexQuestionCss / (cssQuestionsArray.length - 1)) * 100;
          displayQuestionAndAnswerCss(indexQuestionCss);
          const submitButton = document.getElementById("showAnswerButton");
          submitButton.textContent = "show answer";
        }
      }
    });

  // Add event listener to next question button
  document
    .getElementById("nextQuestionButton")
    .addEventListener("click", function (event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      const randomCheckBox = document.getElementById("random");
      let isRandomSelected = randomCheckBox.checked;
      if (isRandomSelected) {
        const submitButton = document.getElementById("showAnswerButton");
        submitButton.textContent = "show answer";
        isAnswerDisplayed = false;
        displayRandomQuestion();
        return;
      }

      if (currentSubject == "html") {
        if (indexQuestion < questionsArray.length - 1) {
          indexQuestion++;
          document.getElementById("progressBar").value =
            (indexQuestion / (questionsArray.length - 1)) * 100;
          if (isAnswerDisplayed == true) {
            isAnswerDisplayed = false;
          }
          displayQuestionAndAnswer(indexQuestion);
          const submitButton = document.getElementById("showAnswerButton");
          submitButton.textContent = "show answer";
        }
      } else if (currentSubject == "css") {
        if (indexQuestionCss < cssQuestionsArray.length - 1) {
          // If there are more questions available
          indexQuestionCss++;
          document.getElementById("progressBar").value =
            (indexQuestionCss / (cssQuestionsArray.length - 1)) * 100;
          if (isAnswerDisplayedCss == true) {
            isAnswerDisplayedCss = false;
          }
          displayQuestionAndAnswerCss(indexQuestionCss);
          const submitButton = document.getElementById("showAnswerButton");
          submitButton.textContent = "show answer";
        }
      }
    });

  //Add event listener to the "next subject" input
  document
    .getElementById("nextSubjectButton")
    .addEventListener("click", function (event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      isAnswerDisplayedCss = false;
      currentSubject = "css";
      updateCurrentSubject();
      indexQuestion = 0;
      indexQuestionCss = 0;
      document.getElementById("progressBar").value = 0;
      displayQuestionAndAnswerCss(indexQuestionCss);

      submitButton.textContent = "show answer";
    });

  // Add event listener for the "html" button
  document.getElementById("htmlButton").addEventListener("click", function () {
    // Code to add and style new buttons
    const htmlButton = document.getElementById("htmlButton");
    const navbar = document.querySelector(".navbar");

    const existingNewButtons = document.querySelectorAll(".new-button");
    if (existingNewButtons.length > 0) {
      // If new buttons exist, remove them
      existingNewButtons.forEach((button) => {
        button.remove();
      });
    } else {
      // If new buttons don't exist, create and append them
      const dropdownContent = document.createElement("div");
      dropdownContent.classList.add("dropdown-content");

      // Loop through questionsAndAnswers object and create buttons
      for (const question in questionsAndAnswers) {
        if (questionsAndAnswers.hasOwnProperty(question)) {
          const button = document.createElement("button");
          button.textContent = question;
          button.classList.add("nav-button", "new-button");
          button.addEventListener("click", function () {
            // Display the question in the textarea when the button is clicked
            textarea.value = question;
            // Update the progress bar based on the index of the clicked question
            const index = questionsArray.indexOf(question);
            indexQuestion = index;
            currentSubject = "html";
            document.getElementById("progressBar").value =
              (index / (questionsArray.length - 1)) * 100;
            isAnswerDisplayed = false;
            const submitButton = document.getElementById("showAnswerButton");
            submitButton.textContent = "show answer";
          });
          dropdownContent.appendChild(button);
        }
      }

      // Add scrollbar to dropdown content
      dropdownContent.style.overflowY = "auto";
      dropdownContent.style.maxHeight = "400px"; // Twice the current height

      // Customize scrollbar appearance
      dropdownContent.style.scrollbarWidth = "thin";
      dropdownContent.style.scrollbarColor =
        "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.05)"; // Customize scrollbar colors

      // Align questions centrally within the dropdown content
      dropdownContent.style.display = "flex";
      dropdownContent.style.flexDirection = "column";
      dropdownContent.style.alignItems = "center";

      navbar.insertBefore(dropdownContent, htmlButton.nextSibling);
    }
  });
  // Add event listener for the "css" button
  document.getElementById("cssButton").addEventListener("click", function () {
    // Code to add and style new buttons
    const cssButton = document.getElementById("cssButton");
    const navbar = document.querySelector(".navbar");

    const existingNewButtons = document.querySelectorAll(".new-button");
    if (existingNewButtons.length > 0) {
      // If new buttons exist, remove them
      existingNewButtons.forEach((button) => {
        button.remove();
      });
    } else {
      // If new buttons don't exist, create and append them
      const dropdownContent = document.createElement("div");
      dropdownContent.classList.add("dropdown-content");

      // Loop through cssQuestionsAndAnswers object and create buttons
      for (const question in cssQuestionsAndAnswers) {
        if (cssQuestionsAndAnswers.hasOwnProperty(question)) {
          const button = document.createElement("button");
          button.textContent = question;
          button.classList.add("nav-button", "new-button");
          button.addEventListener("click", function () {
            // Display the question in the textarea when the button is clicked
            textarea.value = question;
            // Update the progress bar based on the index of the clicked question
            const index = cssQuestionsArray.indexOf(question);
            indexQuestionCss = index;
            document.getElementById("progressBar").value =
              (index / (cssQuestionsArray.length - 1)) * 100;

            isAnswerDisplayedCss = false;
            const submitButton = document.getElementById("showAnswerButton");
            submitButton.textContent = "show answer";
            currentSubject = "css";
          });
          dropdownContent.appendChild(button);
        }
      }

      // Add scrollbar to dropdown content
      dropdownContent.style.overflowY = "auto";
      dropdownContent.style.maxHeight = "400px"; // Twice the current height

      // Customize scrollbar appearance
      dropdownContent.style.scrollbarWidth = "thin";
      dropdownContent.style.scrollbarColor =
        "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.05)"; // Customize scrollbar colors

      // Align questions centrally within the dropdown content
      dropdownContent.style.display = "flex";
      dropdownContent.style.flexDirection = "column";
      dropdownContent.style.alignItems = "center";

      navbar.insertBefore(dropdownContent, cssButton.nextSibling);
    }
  });

  // Function to reset and disable the progress bar
  function resetAndDisableProgressBar() {
    const progressBar = document.getElementById("progressBar");
    progressBar.value = 0; // Reset the progress bar value to zero
    progressBar.disabled = true; // Disable the progress bar
  }

  // Function to enable the progress bar
  function enableProgressBar() {
    const progressBar = document.getElementById("progressBar");
    progressBar.disabled = false; // Enable the progress bar
  }

  // Add event listener to "Random" radio button
  document.getElementById("random").addEventListener("click", function () {
    if (this.checked) {
      // Disable the "Previous Question" and "Start Over" buttons and olso to click the random again button
      document.getElementById("prevQuestionButton").disabled = true;
      document
        .getElementById("prevQuestionButton")
        .classList.add("disabled-button");
      document.getElementById("startOverButton").disabled = true;
      document
        .getElementById("startOverButton")
        .classList.add("disabled-button");

      const byOrderCheckbox = document.getElementById("byOrder");
      let byOrderSelected = byOrderCheckbox.checked;
      if (!byOrderSelected) {
        //disable the progress bar
        resetAndDisableProgressBar();
      } else {
        enableProgressBar();
        return;
      }
      isAnswerDisplayed = false;
      const submitButton = document.getElementById("showAnswerButton");
      submitButton.textContent = "show answer";
      document.getElementById("random").disabled = true;
      indexQuestion = 0;
      isByOrder = false;
      displayRandomQuestion();
    }
  });

  // Add event listener to "By Order" radio button
  document.getElementById("byOrder").addEventListener("click", function () {
    if (this.checked) {
      // Enable the "Previous Question" and "Start Over" buttons
      document.getElementById("prevQuestionButton").disabled = false;
      document
        .getElementById("prevQuestionButton")
        .classList.remove("disabled-button");
      document.getElementById("startOverButton").disabled = false;
      document
        .getElementById("startOverButton")
        .classList.remove("disabled-button");
      document.getElementById("random").disabled = false;
      document.g;
      isAnswerDisplayed = false;
      const submitButton = document.getElementById("showAnswerButton");
      submitButton.textContent = "show answer";

      displayedQuestions = [];
      //set defult current subject
      currentSubject = "html";

      //fun that updates ths display of current subject
      updateCurrentSubject();

      //html
      indexQuestion = 0;

      //css
      indexQuestionCss = 0;
      let isAnswerDisplayedCss = false;
      // Function to display HTML question in textarea
      isByOrder = true;
      textarea.value = questionsArray[0];
    }
  });

  // Function to display a random question
  function displayRandomQuestion() {
    // Check if all questions have been displayed
    if (displayedQuestions.length === questionsArray.length) {
      alert("All questions have been displayed.");
      // disabeling the next qestion and oslo changing its style
      let nextQ = document.getElementById("nextQuestionButton");
      nextQ.disabled = true;
      nextQ.classList.add("disabled-button");
      // Define a variable to keep track of the questions that have already been displayed
      displayedQuestions = [];
      return;
    }

    // Generate a random index to select a question from the array
    var randomIndex = Math.floor(Math.random() * questionsArray.length);

    // Check if the selected question has already been displayed
    if (displayedQuestions.includes(questionsArray[randomIndex])) {
      // If the question has already been displayed, recursively call the function again
      displayRandomQuestion();
      return;
    }

    // Get the random question
    var randomQuestion = questionsArray[randomIndex];

    // Get the corresponding answer
    var answer = questionsAndAnswers[randomQuestion];

    // Display the random question in the textarea
    document.getElementById("message").value = randomQuestion;

    // Display the answer olso when the show answer is clicked  document
    document
      .getElementById("showAnswerButton")
      .addEventListener("click", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        const submitButton = document.getElementById("showAnswerButton");
        if (currentSubject == "html" && isByOrder == false) {
          if (!isAnswerDisplayed) {
            textarea.value = randomQuestion + "\n\n" + answer;
            isAnswerDisplayed = true;
            submitButton.textContent = "hide answer";
          } else {
            alert("hide answer");
            textarea.value = randomQuestion;
            isAnswerDisplayed = false;
            submitButton.textContent = "show answer";
          }
        }
      });
    indexQuestion = 0;

    // Add the question to the displayedQuestions array
    displayedQuestions.push(randomQuestion);
    return;
  }
});

/*
 // Function to handle the "Next Question" button click event
  function getNextQuestion() {
    // Display a random question
    displayRandomQuestion();
  }
  // Add event listener for the "html" button
  document.getElementById("htmlButton").addEventListener("click", function () {
    // Code to add and style new buttons
    const htmlButton = document.getElementById("htmlButton");
    const navbar = document.querySelector(".navbar");

    const existingNewButtons = document.querySelectorAll(".new-button");
    if (existingNewButtons.length > 0) {
      // If new buttons exist, remove them
      existingNewButtons.forEach((button) => {
        button.remove();
      });
    } else {
      // If new buttons don't exist, create and append them
      const newButton1 = createNewButton("what is html");
      const newButton2 = createNewButton("HTML Doc tags");

      const newButton3 = createNewButton("HTML element");

      const newButton4 = createNewButton("What is the web");
      const newButton5 = createNewButton("page structure");
      const newButton6 = createNewButton("<!DOCTYPE> Declaration");
      const newButton7 = createNewButton("HTML heading");

      navbar.insertBefore(newButton7, htmlButton.nextSibling);
      navbar.insertBefore(newButton6, htmlButton.nextSibling);

      navbar.insertBefore(newButton5, htmlButton.nextSibling);

      navbar.insertBefore(newButton4, htmlButton.nextSibling);
      navbar.insertBefore(newButton3, htmlButton.nextSibling);

      navbar.insertBefore(newButton2, htmlButton.nextSibling);
      navbar.insertBefore(newButton1, htmlButton.nextSibling);
    }
  });

  // Function to create and style new buttons
  function createNewButton(text) {
    const newButton = document.createElement("button");
    newButton.textContent = text;
    newButton.classList.add("nav-button", "new-button");
    return newButton;
  }
  */
