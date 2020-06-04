
export default class TagList extends HTMLSpanElement {
    constructor() {
      super();

      const template = document.getElementById('my-paragraph');
      const templateContent = template.content;
      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
    
  }

