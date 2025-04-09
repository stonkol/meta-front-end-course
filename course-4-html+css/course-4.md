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

### Table tags

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
