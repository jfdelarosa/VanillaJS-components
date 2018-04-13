'use strict';

var hola = "asdasdasd";
var loadComponent = function loadComponent(component) {
  var script = document.createElement('script');
  script.src = component + '.js';
  script.onerror = function () {
    console.error("Component not found at", script.src);
  };
  document.head.appendChild(script);
};

var registerComponent = function registerComponent(tag, options) {
  var elements = document.getElementsByTagName(tag);
  var keys = options.functions ? Object.keys(options.functions) : [];
  var temp = [];
  var kv = {};
  if (!options.template) {
    console.error("Template not found.");
  }
  if (options.stylesheet) {
    var style = document.createElement('link');
    style.rel = "stylesheet";
    style.href = options.stylesheet;
    document.head.appendChild(style);
  }

  for (var i = elements.length - 1; i >= 0; i--) {
    temp[i] = document.createElement('div');
    temp[i].innerHTML = options.template.apply({});

    for (var j = options.attributes.length - 1; j >= 0; j--) {
      var attrName = options.attributes[j];

      if (elements[i].hasAttribute(attrName)) {
        var attrVal = elements[i].getAttribute(attrName);
        var camel = attrName.toLowerCase().replace(/-(.)/g, function (match, str) {
          return str.toUpperCase();
        });

        kv[camel] = attrVal;

        if (keys.includes(attrName)) {
          options.functions[attrName](attrVal, temp[i].firstChild);
        }
      }
    }
    temp[i].innerHTML = options.template.apply(kv);
    elements[i].replaceWith(temp[i].firstChild);
  }
};