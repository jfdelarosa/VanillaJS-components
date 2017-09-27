const registerComponent = (tag, options) => {
  const thisDoc = document.currentScript.ownerDocument;
  const element = Object.create(HTMLElement.prototype);

  element.createdCallback = function(){
    const shadow = this.attachShadow({
      mode: 'open'
    });
    const templateSelector = options.template || "template";
    const template = thisDoc.querySelector(templateSelector).content;
    const keys = Object.keys(options.attributes);
    
    for (let i = keys.length - 1; i >= 0; i--) {
      if (this.hasAttribute(keys[i])) {
        const who = this.getAttribute(keys[i]);
        options.attributes[keys[i]](who, template);
      }
    }

    shadow.appendChild(template.cloneNode(true)); 
  }

  document.registerElement(tag, {
    prototype: element
  });
}

const loadComponent = (component) => {
  const link = document.createElement('link');
  link.rel = 'import'
  link.href = component;
  document.getElementsByTagName('head')[0].appendChild(link);
}