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

Different elements of the website may look different in different browsers. To solve this, CSS allows you to define the visual styling of HTML elements.

There are many resources that simplify the styling of forms. Popular libraries and frameworks such as Bootstrap, Tailwind CSS, and Foundation provide CSS rules for forms, ensuring visual consistency across different devices and browsers.

## 1.10 Media Elements

### 1.10.1 Video and Audio Source

```html
<video src="video.mp4" type="video/mp4" controls></video>
<audio src="audio.ogg" type="audio/ogg" controls></audio>
```

Can specify the width and height of the video. Also can use player controls by adding `controls`. And also can use `loop` to loop the media. And `mute` to mute the media.
```html
<video width="320" height="240">
    <source src="dance.mp4" type="video/mp4">
    <source src="dance.ogg" type="video/ogg">
</video>
```

### 1.10.2 Embedded

```html
<h1>Intro Music</h1>
<video width="320" height="240"  controls>
    <source src="video.mp4" type="video/mp4">
</video>
<p>Our company......</p>
<audio loop controls>
    <source src="intro-vid.mp3" type="video/mp3">
</audio>
```

### 1.10.3 Image

You can also specify the width and height of the image using the width and height attributes. But what happens if the photo doesn’t load? Perhaps the file was accidentally deleted, or you mistyped the file name.
```html
<img src="photo.png" width="640" height="480">
<img src="photo.png" width="320" alt="My Profile Photo">
```

It is important to ensure that screen reader accessibility software can interpret images displayed in the web browser. To support this, the `<img>` tag is combined with the `<figure>` and `<figcaption>` tags to provide a description of the image. The `<img>` tag is added inside the `<figure>` tag and the `<figcaption>` is specified after it.

```html
<figure>
   <img src="photo.png" width="320" alt="My Profile Photo">
   <figcaption>A photo of myself on a beach in 2015</figcaption>
</figure>
```

Videos and audio, the web browser only supports specific file types.::

- **.APNG** – Animated Portable Network Graphics
- **.AVIF** – AV1 Image Format
- **.GIF** – Graphics Interchange Format
- **.JPEG** / **.JPG** – Joint Photographic Expert Group image format
- **.PNG** – Portable Network Graphics
- **.SVG** – Scalable Vector Graphics
- **.WEBP** – Web Picture Format

### 1.10.4 iframe

An iframe is HTML element that allows you to place or embed content from another website into a webpage. Therefore, it's running the HTML, CSS, and JavaScript of the embedded webpage.
```html
<iframe src="https://meta.com" width="320" height="520">

</iframe>
```

While iframe is very useful. It security has been a concern since its inception because it's vulnerable to malicious code and injection. Fortunately, there are some attributes that can be applied to limit the behavior of the iframe. Such as not allow camera and microphone access or not allow downloads or pop-up windows.

#### 1.10.4.1 Allow

It specifies what features or permissions are available to the frame, for instance, access to the microphone, camera, other APIs and so on. For example:

`allow="fullscreen”` the fullscreen mode can be activated
`allow=“geolocation”` lets you access the user’s location

```html
<iframe src="https://example.com/…" allow="camera; microphone"> </iframe>
```

#### 1.10.4.2 Name and title

This attribute let's you add a description to the iframe for accessibility purposes. The value of this attribute should accurately describe the iframe's content.

```html
<iframe src="history.html" title="An embedded document about the history of my family" name="my frame"> </iframe>
```

#### 1.10.4.3 referrerpolicy

A referrer is the HTTP header that lets the page know who is loading it. This attribute indicates which referrer information to send when loading the frame resource. The common values are:

`no-referrer` The referrer header will not be sent.
`origin` The referrer will be limited to the origin of the referring page
`strict-origin` The origin of the document is sent as the referrer only when using the same protocol security level (HTTPS to HTTPS)

#### 1.10.4.4 Sandbox

To enforce greater security, a sandbox applies extra restrictions to the content in the <iframe>. To lift particular restrictions, an attribute value (permission token) is used. The common permission tokens are listed below:

`allow-downloads` Allows the user to download an item
`allow-forms` Allows the user to submit forms
`allow-modals` The resource can open modal windows
`allow-orientation-lock` Lets the resource lock the screen orientation
`allow-popups` Allows popups to open
`allow-presentation` Allows a presentation session to start
`allow-scripts` Lets the resource run scripts without creating popup windows

> When the value of this attribute is empty, all restrictions are applied. To apply more than one permission, use a space-separated list.

```html
<iframe src="my_iframe_sandbox.html" sandbox="allow-forms allow-scripts"> </iframe>
```

#### 1.10.4.4 src and srcdoc

##### src

The URL of the page to embed in the <iframe>. Using the value about:blank would embed an empty page.

##### srcdoc

Let's you specify the inline HTML to embed in the <iframe>. When defined, this attribute would override the src attribute.

#### 1.10.4.5 loading

This attribute let's you specify if the iframe should be loaded immediately when the web page loads `eager` or loaded when iframe is displayed in the browser `lazy`. This allows you to defer loading iframe content if it is further down your web page and outside of the display area when the page is initially loaded.

```html
<iframe src="my_iframe_src.html" loading="lazy" > </iframe>
```

### 1.11 Canvas

There are many authoring tools available to produce animated and video game content for the web browser. But all of these are underpinned by one of four technologies GIF. WebP 2D canvas and WebGL.

The 2D Canvas allows 2D graphics to be drawn in the web browser. It's popular for building 2D video games and animations. WebGL will always use the GPU, but the 2D canvas will not always use the GPU.

The WebGL API allows 3D graphics to be drawn in the web browser. It's popular for building 3D video games and animations. WebGL will always use the GPU.

### 1.12 Additional Resources

[html media](https://html.com/media/)

[choosing-correct-embed-code](https://studio.support.brightcove.com/publish/choosing-correct-embed-code.html)

[Images in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)

[iframes in HTML](https://www.educba.com/iframes-in-html/)

[HTML5 Canvas](https://www.tutorialrepublic.com/html-tutorial/html5-canvas.php)

[HTML5 Media](https://html.spec.whatwg.org/multipage/media.html)

## 2. CSS Web Layout

The browser window that is visible to the user on the screen is called the view ports. An important property is the display property. What does it do you ask? The `display` property specifies the type of box that you want to use for a given html element.

The code changes the property of the display box to a block type layouts created using the block type are good but evolving requirements led to the development of CSS web layouts such as `flex box` and `grid`, which helped create rules for multiple elements.

### 2.1 Flexbox

Flexbox is a layout model that provides a flexible way to arrange and align items within a container. It allows you to create responsive layouts with ease.

#### 2.1.2 Flexbox Properties

Flexbox properties are used to control the layout of elements within a container. Some of the most commonly used properties include:

- `flex-direction`: Specifies the direction in which flex items are placed within the container. Can assign: `row`, `row-reverse`, `column`, `column-reverse`.
- `justify-content`: Specifies how flex items are aligned along the main axis. Can assign: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.
- `align-items`: Specifies how flex items are aligned along the cross axis. Can assign: `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.
- `align-content`: Specifies how flex items are aligned along the cross axis when there are multiple lines of flex items. Can assign: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`, `stretch`.
- `flex-wrap`: Specifies whether flex items should wrap or not. Can assign: `nowrap`, `wrap`, `wrap-reverse`.
- `flex-grow`: Specifies how much a flex item should grow relative to other flex items. Can assign: `0`, `1`, `2`, etc.
- `flex-shrink`: Specifies how much a flex item should shrink relative to other flex items. Can assign: `0`, `1`, `2`, etc.
- `flex-basis`: Specifies the initial size of a flex item. Can assign: `auto`, `length`, `percentage`, `flex`, etc.

### 2.2 CSS Grids

CSS Grids is a layout model that provides a flexible way to arrange and align items within a container. It allows you to create responsive layouts with ease.

Columns are the vertical tracks and rows are the horizontal tracks in your viewport. Grids divide the page into rows and columns, and the space between these tracks are called gutters or gaps. A cell is the space in a grid container where a row and column intersect.

Columns and rows can be defined using the `grid-template-columns` and `grid-template-rows` properties, respectively. These properties accept a space-separated list of values that define the size and number of columns or rows.

>  `fr` are fractions
```html
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
</div>
```
```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
}

.grid-item {
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
}
```

#### 2.2.1 Auto

There are grid auto-placement algorithms that automatically place items in the grid based on their order and size. These algorithms can be used to create responsive layouts without explicitly defining the grid layout.
`grid-auto-rows` `grid-auto-columns`.

#### 2.2.2 Minmax

The `minmax()` function is used to define the minimum and maximum size of a grid track. It takes two arguments: the minimum size and the maximum size.
`grid-auto-rows: minmax(100px, auto);`

#### 2.2.3 Grid-template-areas

The `grid-template-areas` property is used to define named areas in a grid layout. It allows you to create a grid layout using a visual representation of the layout.
```css
grid-template-areas: "head head head"
                    "nav  main main"
                    "footer  footer footer";
```

### 2.3 How Meta creates responsive builds

The problem to solve is to make your app work across a range of viewports. There's other considerations as well when you're building an app for different viewports, if you're building an app to work on a mobile device, you might put the action buttons towards the bottom of the screen, so you can hit it with your thumb versus having to use your index finger to hit the drop-down at the top right.

how do you make things good? How do you take into account? The capabilities of the device you're building for and make it better than it would have been if you just made it work.

It's good to be aware of how your products make people feel.

You make something, and you have no idea how people are going to use it, but that's the fun part.

Be aware of when your website breaks. The goal isn't to make it work for a phone and a desktop and a TV. The goal is to just make it always work.

## 2.4 Selectors

Selectors are used to select elements in a document. They can be used to apply styles to elements, or to select elements for other purposes, such as adding event listeners.

### 2.4.1 Basic Selectors
- Universal selector `* {}`: Select all elements.
- Element selectors `div {}`: Select elements based on their tag name.
- Class selectors `.container`: Select elements based on their class attribute.
- ID selectors `#green-button`: Select elements based on their ID attribute.
- Title selectors `title {}`: Select elements based on their title attribute.

### 2.4.2 Variations of simple selectors
- Two classes `.alpha.beta {}`: All elements with classes alpha and beta
- Two elements `div, p {}`: All `<div>` and `<p>` elements.
- Element and class `div.alpha {}`: All `<div>` elements with class alpha

### 2.4.3 Descendant selectors/combinators
- Descendant `div p`: All `<p>` descendants of `<div>`
- Child `div > p`: All `<p>` direct descendants of `<div>`
- Combinator selectors `div+a`: `<a>` element directly after `<div>`
- Sibling selectors `div~p`: All `<p>` element iterations after `<div>`

### 2.4.4 Pseudo-class

Pseudo-classes are state-based selectors, which means that they allow you to select elements based on their state.

#### 2.4.4.1 Input
1. **:hover**: Select elements when the user hovers over them.
1. **:focus**: Select elements when they have focus.
1. **:active**: Select elements when they are being activated.
1. **:invalid**: Select elements when they are invalid.
1. **:required**: Select elements when they are required.
1. **:valid**: Select elements when they are valid.

#### 2.4.4.2 Link
1. **:visited**: Select elements when they have been visited.
1. **:link**: All unvisited links.

#### 2.4.4.3 Toggle States
1. **:enabled** and **:disabled**: Select elements when they are enabled/disabled.
1. **:checked** and **:unchecked**: Select elements when they are checked.
1. **:indetermined**: Select elements when they are indeterminate.

#### 2.4.4.4 Positioned

1. **:first-child**: elements that are the first child of their parent.
1. **::first-letter**, **::first-line**: used to style the first letter/line of an element.
1. **div:nth-child(3)**: All the `<p>` elements that are the third child of a parent element.
1. **div:nth-last-child(3)**: All the `<div>` elements which are the third child of a parent element, counting from last child element.
1. **p:nth-last-of-type(2)**: The second sibling from the last child of a parent element.
1. **p:last-child**: All the `<p>` elements who are the last child of a parent element.
1. **p:last-of-type**: All the `<p>` elements who are the last `<p>` element of a parent element.
1. **::before**, **::after**: used to insert content before or after an element.
1. **:empty**: Select elements that have no children.

#### 2.4.4.5 Others

1. **::placeholder**: used to style the placeholder text.
1. **::selection**: used to style the selected text.
1: **::marker**: Markers are typically used to add style elements to a list, for instance, to color bullet points.
1. **:not(div)**: All the elements that are not a `<div>` element.
1. **p:only-of-type**: All the `<p>` elements which are only `<p>` elements inside its parent
1. **p:only-child**: All the `<p>` elements which are only child of a parent element
1. **:fullscreen**: All the elements that are in fullscreen mode.
1. **:root**: All the elements that are the root element of a document.

> [!caution] TIP
> To prevent overwriting one of the rules, you must place them in the following order in the CSS file: `link, visited, hover, active.` (LVHA)

### 2.4.5  Attribute selectors

1. `[href] {}`: Selects all elements with a href attribute
2. `[lang="fr"] {}`: Selects all elements with lang attribute that has a value of `"fr"`
3. `[input~=hello] {}`: Elements with input attribute containing the whitespace separated substring "hello"
4. `[lang|=en] {}`: Elements with lang attribute value equal to `"en"` or `"en-"`.
5. `a[href^="https"] {}`: Every `<a>` element with href attribute value begins with "https"
6. `a[href$=".docx"] {}`: Every `<a>` element with href attribute value ends with ".docx".
7. `a[href*="meta"] { }`: Every `<a>` element with href attribute value containing "meta".

### 2.4.6 Calculate specificity of the selector

TO calculate the specificity of the selector `ul#alpha li.visited`

#### We break it down into its components

Based on the specificity rules:

	1.	ID Selectors: `#alpha` contributes 1 point to the ID column.
	2.	Class Selectors and Pseudo-classes: `.visited` contributes 1 point to the Class column.
	3.	Type Selectors (Elements): `ul` and `li` contribute 2 points to the Type column.

#### Specificity Calculation

The specificity is expressed as a three-part value: **ID-Class-Type**.

	•	ID: 1 (from `#alpha`)
	•	Class: 1 (from `.visited`)
	•	Type: 2 (from `ul` and `li`)

Thus, the specificity of the selector `ul#alpha li.visited` is **1-1-2**.

## 2.5 Text Effects

### 2.5.1 Text Decoration

1. `text-decoration: underline;`: Underlines the text.
2. `text-decoration: line-through;`: Strikes through the text.
3. `text-decoration: overline;`: Places a line above the text.
4. `text-decoration: none;`: Removes any text decoration.

### 2.5.2 Text Transform

1. `text-transform: uppercase;`: Converts text to uppercase.
2. `text-transform: lowercase;`: Converts text to lowercase.
3. `text-transform: capitalize;`: Capitalizes the first letter of each word.
4. `text-transform: none;`: Removes any text transformation.

### 2.5.3 Text Shadow

1. `text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);`: Adds a shadow effect to the text.
2. `text-shadow: none;`: Removes any text shadow.

### 2.5.4 Text Alignment

1. `text-align: left;`: Aligns text to the left.
2. `text-align: right;`: Aligns text to the right.
3. `text-align: center;`: Centers text.
4. `text-align: justify;`: Justifies text.
5. `text-align: start;`: Aligns text to the start edge.
6. `text-align: end;`: Aligns text to the end edge.
7. `text-align: initial;`: Resets text alignment to its initial value.
8. `text-align: inherit;`: Inherits text alignment from its parent element.
9. `text-align: justify-all;`: Justifies text in all lines.
10. `text-align: match-parent;`: Matches the text alignment of the parent element.
11. `text-align: match-parent;`: Matches the text alignment of the parent element.

## 2.6 CSS Transform and Transition

### 2.6.1 Transform

1. `transform: none;`: Removes any transform.
1. `transform: scale(2);`: Scales an element by a factor of 2.
1. `transform: translate(10px, 20px);`: Moves an element by 10px horizontally and 20px vertically.
1. `transform: skew(30deg, 15deg);`: Skews an element by 30 degrees horizontally and 15 degrees vertically.
1. `transform: rotate(45deg);`: Rotates an element by 45 degrees.
1. `transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);`: Applies a 2D transformation matrix.

### 2.6.2 Transform 3D

1. `transform: scale3d(2, 1, 0.3);`: Scales an element by a factor of 2 in the x-axis, 1 in the y-axis, and 0.3 in the z-axis.
1. `transform: translate3d(10px, 20px, 30px);`: Moves an element by 10px horizontally, 20px vertically, and 30px in depth.
1. `transform: rotate3d(3,2,1, 100deg);`: The respective values represent x, y, z co-ordinate and degree of rotations

### 2.6.3 Transition

1. `transition: all 0.5s ease;`: Applies a smooth transition to all properties over 0.5 seconds.
2. `transition: none;`: Removes any transition.
3. `transition: all 0.3s ease-in-out;`: Applies a smooth transition to all properties over 0.3 seconds with an ease-in-out timing function.
4. `transition: all 0.2s linear;`: Applies a smooth transition to all properties over 0.2 seconds with a linear timing function.
5. `transition: all 0.1s cubic-bezier(0.42, 0, 0.58, 1);`: Applies a smooth transition to all properties over 0.1 seconds with a cubic-bezier timing function.
6. `transition: all 0.05s step-start;`: Applies a smooth transition to all properties over 0.05 seconds with a step-start timing function.
7. `transition: all 0.025s step-end;`: Applies a smooth transition to all properties over 0.025 seconds with a step-end timing function.
8. `transition: all 0.0125s step-middle;`: Applies a smooth transition to all properties over 0.0125 seconds with a step-middle timing function.

### 2.6.4 will-change

- More info at [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)

The `will-change` CSS property hints to browsers how an element is expected to change. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.

Don't apply will-change to too many elements.

```css
will-change: transform, opacity;
```

> [!warning] Warning
> `will-change` is intended to be used as a last resort, in order to try to deal with existing performance problems. It should not be used to anticipate performance problems.

### 2.6.5 CPU-accelarated transitions

#### Avoid

1. Avoid animating properties that cause layout or paint (like `width`, `height`, `top`, `left`) if you want GPU acceleration benefits.

#### Use
1. Transitions involving `transform` or `opacity` typically benefit from GPU acceleration, resulting in smoother animations and less CPU load.
1. Use 3D transform functions (`translate3d`, `translateZ`) instead of 2D ones (`translateX`, `translateY`) to hint the browser to use the GPU.
1. Use the `will-change` property to inform the browser which properties will change, allowing it to optimize rendering ahead of time:

### 2.6.7 Multiple transform

Multiple transform over the same element:
`transform: rotate(45deg) scale(1.5) translate(45px);`

Additional property under transform:transform-origin determines the anchor point for the centering of transform.

```css
.sample-class {
    transform-origin: right bottom;
}
.sample-class {
    transform-origin: 10px 10px;
}
```

## 2.7 CSS Animation and @keyframes

### 2.7.1 Animation property shorthand

The animation property is a shorthand for the sub-properties below:
1. `animation: none;`: Removes any animation.
1. animation-name
1. animation-duration
1. animation-timing-function
1. animation-delay
1. animation-iteration-count
1. animation-direction
1. animation-fill-mode
1. animation-play-state

### 2.7.2 Multiple Animations

1. `animation: myAnimation 2s ease-in-out infinite;`
  - Applies a custom animation named "myAnimation" over 2 seconds with an ease-in-out timing function and repeats indefinitely.
1. `animation: myAnimation 2s ease-in-out forwards;`
  - Applies a custom animation named "myAnimation" over 2 seconds with an ease-in-out timing function and stops at the last keyframe.
4. `animation: myAnimation 2s ease-in-out backwards;`
  - Applies a custom animation named "myAnimation" over 2 seconds with an ease-in-out timing function and starts from the first keyframe.
5. `animation: myAnimation 2s ease-in-out both;`
  - Applies a custom animation named "myAnimation" over 2 seconds with an ease-in-out timing function and starts from the first keyframe and stops at the last keyframe.
6. `animation: myAnimation 2s ease-in-out alternate;`
  - Applies a custom animation named "myAnimation" over 2 seconds with an ease-in-out timing function and alternates between the first and last keyframes.
7. `animation: myAnimation 2s ease-in-out alternate-reverse;`
  - Applies a custom animation named "myAnimation" over 2 seconds with an ease-in-out timing function and alternates between the first and last keyframes in reverse order.
8. `animation: myAnimation 2s ease-in-out alternate-reverse infinite;`
  - Applies a custom animation named "myAnimation" over 2 seconds with an ease-in-out timing function and alternates between the first and last keyframes in reverse order indefinitely.

### 2.7.3 @keyframes

#### a. `from` -> `to` keyframe

Defines a custom animation named "myAnimation" that translates an element horizontally from 0px to 100px.
```css
@keyframes myAnimation {
    from { transform: translateX(0); }
    to { transform: translateX(100px); }
}
```

#### b. Two keyframes

Defines a custom animation named "myAnimation" that translates an element horizontally from 0px to 100px.
```css
@keyframes myAnimation {
    0% { transform: translateX(0); }
    100% { transform: translateX(100px); }
}
```

#### c. Three keyframes

Defines a custom animation named "myAnimation" that translates an element horizontally from 0px to 50px and then to 100px.
```css
@keyframes myAnimation {
    0% { transform: translateX(0); }
    50% { transform: translateX(50px); }
    100% { transform: translateX(100px); }
}
```

#### d. Back and forth

Defines a custom animation named "myAnimation" that changes to green at 50% and blue at 100%.
```css
@keyframes myAnimation {
    0%, 100% {
        background-color: blue;
    }
    50% {
        background-color: green;
    }
}
```

## 2.8 Preprocessors: sass, scss, Stylus

Preprocessors provide audit functionality on top of the CSS features already present. Some of the features of preprocessors include the option to create variables, loops, and if else statements.

Different preprocessors each have their own syntax and configurations for adding these features. Some of the most commonly used preprocessors include **Sass**, **LESS**, **Stylus** and **PostCSS**. The use of these preprocessors requires the installation of a compiler on top of your web server.

In the early days of CSS, the main problem developers faced was the difficulty of managing the code. The way CSS was designed made the code very long, messy and complex. It also made it difficult to troubleshoot. Preprocessors have their own scripting language that adds logical structures, automation properties, reusability and bloating of the code.

### 2.8.1 SASS and SCSS

There are two syntaxes available for Sass. The first, known as SCSS (Sassy CSS) and used throughout this reference, is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. This syntax is enhanced with the Sass features described below. Files using this syntax have the .scss extension.

##### CSS
```css
body {
    font: 100% Arial;
    color: lightblue;
}
```

##### SCSS
```scss
$font-stack: Arial;
$primary-color: lightblue;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

##### SASS
```sass
$font-stack: Arial
$primary-color: lightblue

body
  font: 100% $font-stack
  color: $primary-color
```

The variables have been defined at the top with labels such as `$font-stack` and `$primary-color`. This is done with the `$` suffix. The result for both will be the same, and it is not hard to imagine how much time this can save for the developer in complex code blocks where there are a number of occurrences of `lightblue` color. These variables are placed at the top of the SCSS page.

#### 2.8.1.1 Syntax: `@mixin` and `@include`

There are two directives `@mixin` and `@include`:
1. In the first step, you will add properties that you want to reuse inside `@mixin`.
1. In the second step, you use the second directive `@include` and add the mixin identifier that you have created using the `@mixin` directive.
```scss
@mixin some-rules {
    color: lightblue;
    font-size: 25px;
    font-weight: bold;
}

div {
    @include some-rules;
}
```

#### 2.8.1.2 Syntax: `@import` and `@extend`

Similar to these, there are a couple of other directives that are also used

1. @import allows the import of rules from another file.
1. @extend allows all the rules from a specific selector to be added inside another selector.

### 2.8.2 Stylus CSS

```stylus
body
  font 100% Arial
  color lightblue
```

It is not hard to miss the simplicity of the code without the colons, brackets or semicolons. But you should note that it is still allowed to use all of them in Stylus without any error. Similarly, you can also use ‘$’ or any other symbol before variables, but you are not ‘required’ to do so.

The preprocessors, as mentioned, allow the use of functions. Here is an example of this using Stylus.

```stylus
add(a, b)
  a + b

div
  margin add(10px, 20px)
```
