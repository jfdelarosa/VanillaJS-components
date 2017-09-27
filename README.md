# VanillaJS Components

A set of web componens made using only vanilla js

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
  <my-hello my-text="world"></my-hello>
  <script src="route/to/vanillajs-components.js"></script>
  <script>
    loadComponent('route/to/component.html');
  </script>
</body>
</html>
```
**component.html**
```HTML
<template id="hello">
  <span>Hello <span class="my-text"></span>!</span>
  <style>
    :host > span {
      background: #DEDEDE;
      padding: 1rem;
      font-size: 2rem;
    }
  </style>
</template>
<script>
  registerComponent('my-hello', {
    attributes: {
      "my-text": function(value, template) {
        template.querySelector('.my-text').innerHTML = value;
      }
    }
  });
</script>
```

## Browser Support

| VanillaJS components   | IE11+ | Chrome | Firefox | Safari 9+ | Chrome Android | Mobile Safari |
| :--------------------: | :---: | :----: | :-----: | :-------: | :------------: | :-----------: |
| VanillaJS components   | ✗ | ✓ | ? | ? | ? | ? |
