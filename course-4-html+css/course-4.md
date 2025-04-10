# HTML and CSS in-depth

# 1. Module 1

## 1.1 A basic structure
A simple structure of html
```html
<!DOCTYPE html>
<html>
<head>
    <title>My HTML Page</title>
</head>
<body>
    <head>
        <title>My HTML Page</title>
    </head>
    <main>
        <h1>Welcome to My HTML Page</h1>
        <p>This is a simple HTML page.</p>
    </main>
    <footer>
        <p>Copyright &copy; 2025 My HTML Page</p>
    </footer>
</body>
</html>
```

## 1.2 Semantic tags

### 1.2.1 Header element

```html
<header>
    <h1>Welcome to My HTML Page</h1>
</header>
```

### 1.2.2 Nav element

The `<nav>` menu is commonly found on headers
```html
<header>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>
```

### 1.2.3 Article element

the article element indicates content which represents a complete. Or self contained composition in a document page application or site that is independently distributable.

Examples of this include a forum post, a magazine or a newspaper article, a blog entry, a user submitted comment, an interactive widget or gadget or any other independent item of content.

It's good practice to contain the blog post content inside of the article element because it's a complete self-contained composition on a web page. You should place the article element within your main element. Then you add your regular heading and paragraph tags inside the article element.

### 1.2.4 Section Element

```html
<section>
  <h2>About me</h2>
  <p>My name is Sushi</p>
</section>
<section>
  <h2>Techs I know</h2>
  <ul>
      <li>html</li>
      <li>css</li>
</section>
```

### 1.2.5 Section Tags

1. `<aside>` a secondary set of content that is not required to understand the main content.
2. `<details>` a collapsed section of content that can be expanded if the user wishes to view it.
3. `<summary>` Specifies the summary or caption of a `<details>` element.

### 1.2.6 Content Tags

1. `<blockquote>` Used to describe quotation.
1. `<dd>` Used to define a description for the preceding <dt> element.
1. `<dl>` Used to define a description list.
1. `<dt>` Used to describe terms inside <dl> elements.
1. `<figcaption>` Defines a caption for a photo image.
1. `<figure>` Applies markup to a photo image.
1. `<hr>` Adds a horizontal line to the parent element.
1. `<menu>` A semantic alternative to <ul> tag.
1. `<p>` Defines a paragraph.
1. `<pre>` Used to represent preformatted text. Typically rendered in the web browser using a monospace font.

### 1.2.7 Inline Tags

1. `<a>` An anchor *link* to another HTML document.
1. `<abbr>` Specifies that the containing text is an *abbreviation* or acronym.
1. `<b>` Bolds the containing text. When used to indicate importance use `<strong>` instead.
1. `<br>` A *line break*. Moves the subsequent text to a new line.
1. `<cite>` Defines the title of creative work (for example a book, poem, song, movie, painting or sculpture). The text in the `<cite>` element is usually rendered in *italics*.
1. `<code>` Indicates that the containing text is a *block of computer code*.
1. `<data>` Indicates machine-readable data.
1. `<em>` *Emphasizes* the containing text.
1. `<i>` The containing text is displayed in italics. Used to indicate idiomatic text or technical terms.
1. `<mark>` The containing text should be marked or highlighted.
1. `<q>` The containing text is a short quotation.
1. `<s>` Displays the containing text with a *strikethrough* or line through it.
1. `<samp>` The containing text represents a *sample*.
1. `<small>` Used to represent *small text*, such as copyright and legal text.
1. `<span>` A generic element for grouping content for CSS styling.
1. `<strong>` Displays the containing text in bold. Used to indicate importance.
1. `<sub>` The containing text is subscript text, displayed with a *lowered baseline*.
1. `<sup>` The containing text is superscript text, displayed with a *raised baseline*.
1. `<time>` A semantic tag used to display both dates and times.
1. `<u>` Displays the containing text with a solid underline.
1. `<var>` The containing text is a *variable in a mathematical expression*.

### 1.2.8 Embedded content and media tags

1. `<audio>` Used to embed audio in web pages.
1. `<canvas>` Used to *render 2D and 3D graphics* on web pages.
1. `<embed>` Used as a containing element for external content provided by an *external application* such as a media player or plug-in application.
1. `<iframe>` Used to embed a *nested web page*.
1. `<img>` Embeds an image on a web page.
1. `<object>` Similar to `<embed>` but the content is provided by a web browser plug-in.
1. `<picture>` An element that contains one `<img>` element and one or more `<source>` elements to offer alternative images for different displays/devices.
1. `<video>` Embeds a video on a web page.
1. `<source>` Specifies media resources for `<picture>`, `<audio>` and `<video>` elements.
1. `<svg>` Used to define Scalable Vector Graphics within a web page.

### 1.2.9 Table tags

1. `<table>` Defines a table element to display table data within a web page.
1. `<thead>` Represents the header content of a table. Typically contains one <tr> element.
1. `<tbody>` Represents the main content of a table. Contains one or more <tr>elements.
1. `<tfoot>` Represents the footer content of a table. Typically contains one <tr> element.
1. `<tr>` Represents a row in a table. Contains one or more <td> elements when used within <tbody> or <tfoot>. When used within <thead>, contains one or more <th> elements.
1. `<td>` Represents a cell in a table. Contains the text content of the cell.
1. `<th>` Defines a header cell of a table. Contains the text content of the header.
1. `<caption>` Defines the caption of a table element.
1. `<colgroup>` Defines a semantic group of one or more columns in a table for formatting.
1. `<col>` Defines a semantic column in a table.

## 1.3 Metadata

A major part of launching a website is a process called search engine optimization or SEO.

a search engine visits your website, it analyzes the html document and media content. If it finds a link to another html document, it follows the link to that document and continues following links until it is finished analyzing the entire website. Based on the results of the analysis and the content on your website, the search engine will rank the website for various search terms.

### 1.3.1 Basic meta tags For SEO
`<Meta>` tags influence website ranking. `<Meta>` tags define metadata about a web page. It's data about other data which in this case is data about the web page. Meta tags are added inside the `<head>` element of your html document and as you know, nothing inside the head element is displayed in the web browser. **BUT**, one of the major search engines now ignores this metadata and another uses keywords metadata as a spam indicator because of this, it's recommended not to include this metadata in modern web pages.

1. `<meta name="description"/>` brief description of the web page
1. `<meta name=”title”/>` title of the web page
1. `<meta name="author" content="name">` author of the web page
1. `<meta name="language" content="english">` language of the web page
1. `<meta name="robots" content="index,follow" />` tells search engines how to crawl or index a certain page
1. `<meta name="google"/>` tells Google not to show the sitelinks search box for your page when showing search results
1. `<meta name="googlebot" content=”notranslate” />` tells Google you don’t want to provide an automatic translation for your page if the user uses a different language
1. `<meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />` specifies the last modified date and time on which you have made certain changes
1. `<meta name="rating" content="safe for kids">` specifies the expected audience for your page
1. `<meta name="copyright" content="Copyright 2022">` specifies a Copyright

### 1.3.2 Viewport

The `"viewport"` metadata is important when designing responsive web pages. when a web pages viewed on a phone or tablet, the device will by default attempt to render the web page as if it is being viewed on a desktop. This results in a poor browsing experience for the user. The solution is to define view ports metadata.  The most used value for the mobile experiences is to set the width to device dash with and the initial scale to 1.0

1. `<meta name="format-detection" content="telephone=yes"/>` indicates that telephone numbers should appear as hypertext links that can be clicked to make a phone call
1. `<meta name="HandheldFriendly" content="true"/>` specifies that the page can be properly visualized on mobile devices
1. `<meta name="viewport" content="width=device-width, initial-scale=1.0"/>` specifies the area of the window in which web content can be seen

### 1.3.3 Name

The name of the property can be anything you like, although browsers usually expect a value they understand and can take an action upon. An example would be `<meta name="author" content="name">` to state the author of the page.

### 1.3.4 Content

The content field specifies the property's value. For example, you can use `<meta name="language" content="english">`, to specify the language of the webpage to search engines.

### 1.3.5 Charset

The charset is a special field that lets you specify the character encoding used for the page so that the browser can display it properly. The most frequently used is utf-8, and you would add it to your HTML header as follows: `<meta charset="UTF-8">`

### 1.3.6 HTTP-equiv

This field stands for HTTP equivalent, and it’s used to simulate HTTP response headers. This is rare to see, and it’s recommended to use HTTP headers over HTML http-equiv meta tags. For example, the next tag would instruct the browser to refresh the page every 30 minutes: `<meta http-equiv="refresh" content="30">`

1. `<meta http-equiv="content-type" content="text/html">` specifies the format of the document returned by the server
1. `<meta http-equiv="default-style"/>`  specifies the format of the styling document
1. `<meta http-equiv="refresh"/>` specifies the duration of the page before it’s considered stale
1. `<meta http-equiv=”Content-language”/>` specifies the language of the page
1. `<meta http-equiv="Cache-Control" content="no-cache">` instructs the browser how to cache your page

## 1.4 Layout design

### 1.4.1 Top navbar layout

Websites often have a top navbar layout to provide a set of essential anchor links to the user. These typically link to the main areas of the website, such as product pages, careers pages or contact pages. This provides the visitor to the website with a consistent navigation experience.

### 1.4.2 Carousel layout

Product-focused websites often use a large carousel on their homepage to highlight their featured products, discounts and offers. The carousel contains content items that will rotate through the carousel area at a fixed interval.

### 1.4.3 Blog layout

The blog layout is used to feature multiple content items of differing importance. It is often seen on news websites where new articles will appear on the page each day based on current events.

### 1.4.4 Dashboard layout

Dashboard layouts are often used in enterprise software for managing various web applications. They typically feature a sidebar for navigation with the main content area containing forms for configuration or reporting data such as graphs and tables. This trendy layout provides a good user experience for business users.

## 1.5 UX with meta tags

When you share a link, most social networks generate a preview of the link to let users know what the linked webpage is about.

By using Meta tags to control what information is displayed to users, you can get more clicks when you share your websites. But the Meta tags web developers use for this purpose are different from the traditional SEO Meta tags that you learned about earlier in this lesson. Traditional SEO Meta tags are oriented towards search results, not direct links.

To address this challenge, Facebook established the **Open Graph Protocol** in 2010. The Open Graph Protocol is a set of Metadata rules that allow web pages to describe themselves to social networks.

It is also located inside the `<head></head>`, Open Graph Protocol will always start with `og:...`
```html
<head>
  <meta property="og:title" content="My first web page" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="www.example.com" />
  <meta property="og:title" content="www.example.com/jpg" />
</head>
```

## 1.6 Forms and validation

Forms are a fundamental part of any website. They allow users to interact with the site and provide feedback or information. However, forms can be difficult to use and can lead to errors if not properly validated.

To ensure that forms are used correctly, it is important to validate them. Validation can be done on the client-side using JavaScript or on the server-side using PHP or other server-side languages.

Server-side validation is more secure because it prevents malicious users from tampering with your website's code and submitting invalid data to your server. When the form data is received by the web server, the backend will validate the data before processing it. This validation can run more complex checks, such as checking the data against a database, or validating the data against business requirements.

HTML has several input types that are validated by the web browser.
```html
<input type="email">
<input type="tel">
<input type="url">
<input type="date">
<input type="time">
<input type="number">
<input type="range">
```

## 1.7 Input Types

### 1.7.1 Button

This displays a clickable button and it’s mostly used in HTML forms to activate a script when clicked. `<input type="button" value="Click me" onclick="msg()" />`

you can also define buttons with the <button> tag, with the added benefit of being able to place content like text or images inside the tag.
```html
<button onclick="alert('Are you sure you want to continue?')">
    <img src="https://yourserver.com/button_img.jpg"
        alt="Submit the form" height="64" width="64">
</button>
```

### 1.7.2 Checkbox

Defines a check box allowing single values to be selected or deselected. They are used to let a user select one or more options of a limited number of choices.

```html
<input type="checkbox" id="dog" name="dog" value="Dog">
<label for="dog">I like dogs</label>
<input type="checkbox" id="cat" name="cat" value="Cat">
<label for="cat">I like cats</label>
```

### 1.7.3 Radio

Displays a radio button, allowing only a single value to be selected out of multiple choices. They are normally presented in radio groups, which is a collection of radio buttons describing a set of related options that share the same "name" attribute.

```html
<input type="radio" id="light" name="theme" value="Light">
<label for="light">Light</label>
<input type="radio" id="dark" name="theme" value="Dark">
<label for="dark">Dark</label>
```

### 1.7.4 Submit

Displays a submit button for submitting all values from an HTML form to a form-handler, typically a server. The form-handler is specified in the form’s "action" attribute:

```html
<form action="myserver.com" method="POST">
...
<input type="submit" value="Submit" />
</form>
```

### 1.7.5 Text

Defines a basic single-line text field that a user can enter text into.

```html
<input type="text" id="fname" name="fname">
```

### 1.7.6 Password

Defines a single-line text field whose value is obscured, suited for sensitive information like passwords.

```html
<input type="password" id="pwd" name="pwd">
```

### 1.7.7 Date

Displays a control for entering a date with no time (year, month and day).
```html
<label for="dob">Date of birth:</label>
<input type="date" id="dob" name="date of birth">
```

### 1.7.8 Datetime-local

Defines a control for entering a date and time, including the year, month and day, as well as the time in hours and minutes.

```html
<label for="birthdaytime">Birthday (date and time):</label>
<input type="datetime-local" id="birthdaytime" name="birthdaytime">
```

### 1.7.9 Email

Defines a field for an email address. It’s similar to a plain text input, with the addition that it validates automatically when submitted to the server.

```html
<label for="email">Enter your email:</label>
<input type="email" id="email" name="email">
```

### 1.7.10 File

Displays a control that lets the user select and upload a file from their computer. To define the types of files permissible you can use the "accept" attribute. Also, to enable multiple files to be selected, add the "multiple" attribute.

```html
<label for="myfile">Select a file:</label>
<input type="file" id="myfile" name="myfile">
```

### 1.7.11 Hidden

Defines a control that is not displayed but whose value is still submitted to the server.

```html
<input type="hidden" id="custId" name="custId" value="3487">
```

### 1.7.12 Image

Defines an image as a graphical submit button. You should use the “src” attribute to point to the location of your image file.

```html
<input type="image" src="submit_img.png" alt="Submit" width="48" height="48">
```

### 1.7.13 Number

Defines a control for entering a number. You can use attributes to specify restrictions, such as min and max values allowed, number intervals or a default value.

```html
<input type="number" id="quantity" name="quantity" min="1" max="5">
```

### 1.7.14 Range

Displays a range widget for specifying a number between two values. The precise value, however, is not considered important. This is typically represented using a slider or dial control. To define the range of acceptable values, use the “min” and “max” properties.

```html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="10" value="4" oninput="this.nextElementSibling.value = this.value">
<output id="volume-output">4</output>
```

### 1.7.15 Reset

Displays a button that resets the contents of the form to their default values.

```html
<input type="reset">
```

### 1.7.16 Search

Defines a text field for entering a search query. These are functionally identical to text inputs, but may be styled differently depending on the browser.

```html
<label for="gsearch">Search in Google:</label>
<input type="search" id="gsearch" name="gsearch">
```

### 1.7.17 Time

Displays a control for entering a time value in hours and minutes, with no time zone.

```html
<label for="appt">Select a time:</label>
<input type="time" id="appt" name="appt">
```

### 1.7.18 Tel

Defines a control for entering a telephone number. Browsers that do not support “tel” fall back to standard text input. You can optionally use the "pattern" field to perform validation.

```html
<label for="phone">Enter your phone number:</label>
<input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}">
```

### 1.7.19 Url

Displays a field for entering a text URL. It works similar to a text input, but performs automatic validation before being submitted to the server.

```html
<label for="homepage">Enter your homepage URL:</label>
<input type="url" id="homepage" name="homepage">
```

### 1.7.20 Week

Defines a control for entering a date consisting of a week-year number and a year, with no time zone. Keep in mind that this is a newer type that is not supported by all the browsers.

```html
<label for="week">Select a week:</label>
<input type="week" id="week" name="week">
```

### 1.7.21 Month

Displays a control for entering a month and year, with no time zone. Keep in mind that this is a newer type that is not supported by all the browsers.

```html
<label for="bdaymonth">Birthday (month and year):</label><input type="month" id="bdaymonth" name="bdaymonth" min="1930-01" value="2000-01">
```

### 1.7.22 Sign Up Form

Here is a [html](./mod-1/signup.html) and the [css styling](./mod-1/signup.css) of a simple modern Signup Form. And here are the other inputs found above [more-inputs](./mod-1/more-inputs.html)

### 1.7.23 Required

Use required so thus the user could not submit the form until the input that have required are filled.

### 1.7.24 Min max

If you want the user to fill at least a minimum amount of digits.
`minlength="3"` or
`maxlength="10"`

### 1.7.25 Input Data is Invalid

```css
input:focus:invalid {
    border-color: red;
}
```

### 1.7.26 Data List

```html
<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Internet Explorer">
    <option value="Opera">
    <option value="Safari">
</datalist>
<input list="browsers">
```

### 1.7.27 Optgroup

The `<optgroup>` HTML element creates a grouping of options within a `<select>` element.

```html
<label for="dino-select">Choose a dinosaur:</label>
<select id="dino-select">
  <optgroup label="Theropods">
    <option>Tyrannosaurus</option>
    <option>Velociraptor</option>
    <option>Deinonychus</option>
  </optgroup>
  <optgroup label="Sauropods">
    <option>Diplodocus</option>
    <option>Saltasaurus</option>
    <option>Apatosaurus</option>
  </optgroup>
</select>
```

### 1.7.28 `<textarea>`

Defines a multi-line input field, typically to allow the user to input longer textual data. The common attributes for this element include:

- `cols` defines the width of the text area, the default value is 20
- `form` the form element the text area is associated with
- `maxlength` when specified, limits the maximum number of characters that can be entered in the text area
- `minlength` the minimum number of characters that the user should enter
- `readonly` once set, the user cannot modify the contents
- `rows` defines the number of visible text lines for the text area
The following line of code defines a text area of 10 visible lines and nearly 30 characters wide where the user can input a maximum of 200 characters:

```html
<textarea name="response" rows="10" cols="30" maxlength="200">
...
</textarea>
```

## 1.8 Form submission

the web browser communicates with a web server using a HTTP request response cycle. This means that the web browser sends requests to the web server, and the web server sends back a response.

There are two ways a form can send data to the web server using the HTTP `GET` method or the HTTP `POST` method.

### 1.8.1 GET Method

```html
<form method="get">
    ...
</form>
```
After the users clicked on the Login button, the form data is sent as part of the request URL. The user data is appended to the end of the URL in the web browser navigation bar. The web server receives the HTTP GET request, and extracts the form data from the URL.

While this is an easy way to submit data, it has three key problems:
1. The length of a URL is limited to around 2,000 characters.
2. The length of a requested URL is also limited on some web servers. (Apache and Engine X lenght are 4096)
3. Security. As part of the URL, it is stored in the browser history and possibly in the request logs on the web server. Not suitable for transmitting personal information

> The form will default to the HTTP `GET` method when the method attribute is not provided.

### 1.8.2 POST Method

```html
<form method="post">
    ...
</form>
```
When the form is submitted, the form data is inserted into the content of the HTTP request. When the submit button is pressed, it will send an HTTP post request with the data contained in the body of the request.

The HTTP post method is more **secure** than the HTTP GET method. However, the data could still be read by a third party listening to the HTTP request. To secure this completely, HTTPS is used to encrypt the data so that only the sender and receiver can understand the data.

### 1.8.3 Submit

You add a form to your web page using the form tag. But how the form is submitted is determined by two essential attributes: `action` and `method`.

#### 1.8.3.1 `action` attribute

It specifies to which web address the form must be sent. This is address is location of server-side code that will process the request.
```html
<form action="/login">
</form>
```

- It can be:

1. A full URL address such as `https://meta.com`
2. An absolute path such as `/login`
  1. It starts with a forward slash, will use the base address of the current website, such as `https://meta.com` and combine it with the absolute path. Then the form will be submitted to `https://meta.com/login`.
  1. If the address is `https://meta.com/company-info/` and `/login` is the absolute path, the submission address will still be `https://meta.com/login`.
3. A relative path such as `login`.
  1. if the web browser is currently on the web page `https://meta.com/company-info/`, and the relative path is set to `login`, the form will be submitted to `https://meta.com/company-info/login`.

However, not only `<forms>` are the only way to submit data to the web server. There are JavaScript and front-end libraries, for submitting HTTP requests directly via code and send data as part of the HTTP request body in a text format called `.json` (JavaScript Object Notation).

## 1.9 Browser differences

Different elements of the website may look different in diffferent broser. To solve it CSS allows you to define the visual styling of HTML elements.

there are a lot of resources that simplify the styling of forms. Popular libraries and frameworks such as Bootstrap, Tailwind CSS, and Foundation provides CSS rules for forms, uninsured visual consistency across different devices and browsers.
