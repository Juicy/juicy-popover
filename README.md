# &lt;juicy-dropdown&gt;

`<juicy-dropdown>` is a (vanilla) Custom Element that expands an area when clicked on a handle

## Demo

[Check it live!](http://juicy.github.io/juicy-dropdown)

## Usage

1. Install the component using [Bower](http://bower.io/):

    ```sh
    $ bower install juicy-dropdown --save
    ```

2. Import Web Components' polyfill (optional, allows to run it in old browsers):

    ```html
    <script src="http://cdnjs.cloudflare.com/ajax/libs/polymer/0.2.2/platform.js"></script>
    ```

3. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/juicy-dropdown/src/juicy-dropdown.html">
    ```

4. Start using it!

    ```html
      <juicy-dropdown position="bottom left" handleSelector="button.handle" expandableSelector=".expandable">
        <button class="handle">▼</button>
        <div class="expandable">
          You only see me when the button is pressed
      </juicy-dropdown>
    ```

## Attributes

Attribute            | Type           | Default       | Description
---                  | ---            | ---           | ---
`position`           | *String*       | `bottom left` | Position of expandable after button is pressed. Possible values: `top` or `bottom`, `left` or `right` (space separated)
`handleSelector`     | *String*       | `.handle`     | Selector to find the handle child node in `<juicy-dropdown>` light DOM
`expandableSelector` | *String*       | `.expandable` | Selector to find the expandable child node in `<juicy-dropdown>` light DOM

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