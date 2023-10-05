# Brickolage 🧱

A tiny modern Masonry alternative, created with CSS3 Flexbox + vanilla JavaScript. 
Based on an [elegant idea](https://tobiasahlin.com/blog/masonry-with-css) of [Tobias Bjerrome Ahlin](https://tobiasahlin.com).

Update 2023: This is a slightly improved version [of my own lib](https://github.com/wpspade/brickolage).

## [Demo](https://da-yauhenzadziarkouski.github.io/brickolage/examples/)

## Features:

	- Dependency-free.
  - Pure CSS3 Flexbox layout + a little bit of JavaScript. Number of columns is determined by item width via CSS.
  - Grid items stay untouched. No removing/adding DOM elements except separators.
  - No possible issues with absolutely positioned grid items, because it's a Flexbox layout as is.

### Setting up

1. Add a link to the css file in the ```<head>``` tag of your *index.html*:

```html
<link rel="stylesheet" href="assets/brickolage.build.css">
```

2. Insert before your closing ```<body>``` tag:

```html
<script src="assets/brickolage.build.js"></script>
```

3. Add markup to your *index.html*:

```html
<ul class="brickolage--container">
	<li class="brickolage--item">
		...
	</li>

	<li class="brickolage--item">
		...
	</li>

	<li class="brickolage--item">
		...
	</li>
</ul>
```

4. Initialize script in your *app.js*:

```javascript
var fire = function() {
	var brcklg = new Brickolage();
}

( document.readyState === "complete" || ( document.readyState !== "loading" && ! document.documentElement.doScroll ) ) && fire() || document.addEventListener( "DOMContentLoaded", fire );
```

### Options

| Option | Description |
| ------ | ------ |
| container | Specify a selector or HTML element. Default: *".brickolage--container"* |
| item | Specify a selector or HTMLCollection. Default: *".brickolage--item"* |
| separatorClassName | A column separator className. Default: *"brickolage--separator"* |
| separatorTagName | A column separator tagName. Default: *"li"* |
| originalOrder | Determines the items order style. Default: *false* |

Be careful when changing default *container*, *item* and *separatorClassName* options, because of core styles.

**Specify script options**:

```javascript
new Brickolage( {
	container: "[data-brickolage]",
	originalOrder: true
} );
```

### Methods

| Method | Description |
| ------ | ------ |
| reLayout | Use to quickly update the container height and the items order. |
| reFresh | Trigger this method after items were added or removed. Accepts new options. |
| destroy | Destroys and cleans up the DOM. Returns elements to pre-initialized state. Callback function returns a destroyed instance. |

**Call method after initialization**:

```javascript
brcklg.Method();
```
License
----

MIT
