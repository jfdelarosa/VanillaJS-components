# VanillaJS Components

A set of cross-browser web componens made using only vanilla js

[Demo](http://jfdelarosa.me/VanillaJS-components/)

### Installation

```
$ npm install jfdelarosa/vanillajs-components
```
Alternatively, you can [download](https://github.com/jfdelarosa/vanillajs-components/archive/master.zip)  the repo.

### Run server

```
$ npm start
```

## Basic usage


**index.html**
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>VanillaJS components</title>
</head>
<body>
  <my-hello my-text="world">Hello <slot></slot></my-hello>
  <my-hello my-text="goodbye" debug="Using web components!"></my-hello>
  <script src="path/to/vanillajs-components.js"></script>
  <script>
    loadComponent('path/to/my-hello');
  </script>
</body>
</html>
```
**my-hello.js**
```JAVASCRIPT
registerComponent('my-hello', {
  template: function(){
    return `<div class="my-hello">Hello <slot></slot> ${this.myText}!</div>`;
  },
  stylesheet: 'path/to/component-stylesheet.css',
  attributes: ['my-text', 'debug'],
  functions: {
    'debug': function(value, template){
      console.log(value);
      console.log(template);
    }
  }
});
```

## Methods
```JAVASCRIPT
loadComponent(path);
```

**path**

A string wich contains the path of the component script.

```JAVASCRIPT
registerComponent(componentTag, options);
```

**componentTag**

The tag of the component.

**options**

An object containing the configuration of the component, the options are listed below.

## Options
**template** (required)

> A **function** that returns the template, you can pass any component attribute using ES6 template literals `${this.attribute}`.

> Also, you can use external variables if the `this` keyword is omitted `$(globalVar)`.

> Parameters containing hyphens are converted to camel case.

> You can use the `<slot>` tag to use the text inside the component tags in the template, as seen on the example above.

**stylesheet** (optional)

> A **string** containing the path to the component stylesheet.

> Stylesheets are NOT component specific, and can affect other the layout of the page or other components as well.

**attributes** (optional)

> An **array** containing the names of the atributes of the component.

**functions** (optional)

> An **object** containing component parameters as keys and functions as values, each of this functions has the value of the specified component parameter and the component template as parameters.


## Browser Support

|    | IE | Chrome | Firefox | Safari | Chrome Android | Safari iOS |
| :--------------------: | :---: | :----: | :-----: | :-------: | :------------: | :-----------: |
| Version  | x | x | x | x | x | x |


## TODO
- [ ] Check Browser support
- [ ] Attatch events to the component
- [x] Component `<slot>`
- [ ] Refactor code
- [ ] Better documentation