const hola = "asdasdasd";
const loadComponent = (component) => {
  const script = document.createElement('script');
  script.src = component + '.js';
  script.onerror = function(){
    console.error("Component not found at", script.src);
  }
  document.head.appendChild(script);
}

const registerComponent = (tag, options) => {
  const elements = document.getElementsByTagName(tag);
  const keys = (options.functions) ? Object.keys(options.functions) : [];
  const temp = [];
  const kv = {};
  if(!options.template){
    console.error("Template not found.");
  }
  if(options.stylesheet){
    const style = document.createElement('link');
    style.rel = "stylesheet";
    style.href = options.stylesheet;
    document.head.appendChild(style);
  }
  
  for(let i = elements.length - 1; i >= 0; i--){
    temp[i] = document.createElement('div');
    temp[i].innerHTML = options.template.apply({});
    
    for(let j = options.attributes.length - 1; j >= 0; j--){ 
      const attrName = options.attributes[j];
      
      if(elements[i].hasAttribute(attrName)){
        const attrVal = elements[i].getAttribute(attrName);
        const camel = attrName.toLowerCase().replace(/-(.)/g, function(match, str){
          return str.toUpperCase();
        });

        kv[camel] = attrVal;
        
        if(keys.includes(attrName)){
          options.functions[attrName](attrVal, temp[i].firstChild);
        }
      }
    }
    temp[i].innerHTML = options.template.apply(kv);
    elements[i].replaceWith(temp[i].firstChild);
  }
}