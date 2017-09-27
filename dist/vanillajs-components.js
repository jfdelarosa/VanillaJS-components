'use strict';

var registerComponent = function registerComponent(tag, options) {
  var thisDoc = document.currentScript.ownerDocument;
  var element = Object.create(HTMLElement.prototype);

  element.createdCallback = function () {
    var shadow = this.attachShadow({
      mode: 'closed'
    });

    var template = thisDoc.querySelector(options.template).content;

    for (var i = options.attributes.length - 1; i >= 0; i--) {
      if (this.hasAttribute(options.attributes[i])) {
        var who = this.getAttribute(options.attributes[i]);
        template.querySelector('.' + options.attributes[i]).innerHTML = who;
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