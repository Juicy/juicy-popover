# &lt;juicy-popover&gt;

`<juicy-popover>` is a (vanilla) Custom Element that expands an area when clicked on a handle.

It is flexible enough to be used to create dropdowns, combo boxes, tooltips, etc.

## Demo

[Check it live!](http://juicy.github.io/juicy-popover)

## Usage

1. Install the component using [Bower](http://bower.io/):

    ```sh
    $ bower install juicy-popover --save
    ```

2. Import Web Components' polyfill (optional, allows to run it in old browsers):

    ```html
    <script src="//cdn.jsdelivr.net/webcomponentsjs/0.5.5/webcomponents.min.js"></script>
    ```

3. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/juicy-popover/src/juicy-popover.html">
    ```

4. Start using it!

    ```html
      <juicy-popover position="bottom left" handleSelector="button.handle" expandableSelector=".expandable">
        <button class="handle">▼</button>
        <div class="expandable">
          You only see me when the button is pressed
      </juicy-popover>
    ```

## Attributes

Attribute            | Type           | Default       | Description
---                  | ---            | ---           | ---
`position`           | *String*       | `bottom left` | Position of expandable after button is pressed. Possible values: `top` or `bottom`, `left` or `right` (space separated)
`handleSelector`     | *String*       | `.handle`     | Selector to find the handle child node in `<juicy-popover>` light DOM
`expandableSelector` | *String*       | `.expandable` | Selector to find the expandable child node in `<juicy-popover>` light DOM

## Methods

Name               | Param name | Type      | Description
---                | ---        | ---       | ---
`expand`           |            |           | Expand the expandable
                   | elem       | *Element* | DOM element is used as the reference to the position of the expandable (normally this is the handle)
`collapse`         |            |           | Collapse the expandable

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)