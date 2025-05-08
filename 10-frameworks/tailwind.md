# Tailwind CSS

## Plugins

### Typography

For having nice paragraphs and texts layouts, you can use the [`typography`](https://github.com/tailwindlabs/tailwindcss-typography) plugin.

#### Installation

Install the plugin from npm:
```sh
npm install -D @tailwindcss/typography
```

Then add the plugin to your main style.css file:
```sh
  @import "tailwindcss";
+ @plugin "@tailwindcss/typography";
```

#### Basic usage

Now you can use the prose classes to add sensible typography styles to any vanilla HTML:

```html
<article class="prose lg:prose-xl">
  <h1>Garlic bread with cheese</h1>
  <p>
    For years parents have espoused the health benefits...
  </p>
  <p>
    But a recent study shows that the...
  </p>
</article>
```
