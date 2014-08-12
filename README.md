# Modern Blink

The `<blink>` element resurrected as an HTML Custom Element (Web Component)!

## Usage

Include the component's JavaScript and CSS file, then use the `<modern-blink>`
element:

```html
<link rel="stylesheet" href="path/to/modern-blink.min.css">
<script src="path/to/modern-blink.min.js"></script>

<modern-blink>This text will blink</modern-blink>
```

### Options

A number of options are available as attributes (defaults are shown):

```html
<!--
  Duration of the animation of 1 iteration:
  from visible to non-visible to visible
-->
<modern-blink duration="1000ms">Duration</modern-blink>

<!--
  Number of animation iterations:
  Integer or string "infinite"
-->
<modern-blink iterationCount="infinite">Iteration Count</modern-blink>

<!--
  Whether the animation should run or not:
  Boolean
  Useful for accessibility or programmatically starting/stopping the animation
-->
<modern-blink run="true">Run</modern-blink>
```

## Dependencies

Browsers not supporting Custom Elements yet should be polyfilled. There are two
custom elements polyfills available:

1. [Polymer Custom Elements](https://github.com/Polymer/CustomElements)
2. [document-register-element](https://github.com/WebReflection/document-register-element)

## Browser Support

Tested in:

* Chrome

## License

MIT License
