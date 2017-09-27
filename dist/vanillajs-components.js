'use strict';

var registerComponent = function registerComponent(tag, options) {
  var thisDoc = document.currentScript.ownerDocument;
  var element = Object.create(HTMLElement.prototype);

  element.createdCallback = function () {
    var shadow = this.attachShadow({
      mode: 'open'
    });
    var templateSelector = options.template || "template";
    var template = thisDoc.querySelector(templateSelector).content;
    var keys = Object.keys(options.attributes);

    for (var i = keys.length - 1; i >= 0; i--) {
      if (this.hasAttribute(keys[i])) {
        var who = this.getAttribute(keys[i]);
        options.attributes[keys[i]](who, template);
      }
    }

    shadow.appendChild(template.cloneNode(true));
  };

  document.registerElement(tag, {
    prototype: element
  });
};

var loadComponent = function loadComponent(component) {
  var link = document.createElement('link');
  link.rel = 'import';
  link.href = component;
  document.getElementsByTagName('head')[0].appendChild(link);
};