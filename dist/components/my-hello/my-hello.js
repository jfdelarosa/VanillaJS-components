registerComponent('my-hello', {
  template: function(){
    return `<div class="my-hello">Hello ${this.myText}!</div>`;
  },
  stylesheet: 'dist/components/my-hello/my-hello.css',
  attributes: ['my-text', 'debug'],
  functions: {
    'debug': function(value, template){
      console.log(value);
      console.log(template);
    }
  }
});