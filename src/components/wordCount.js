// Mon Code
/*
export default class WordCount extends HTMLElement {

    constructor() {
        super();
        const getP = this.parentElement.querySelector('p');
        const text = getP.innerText || getP.textContent;
        const words = text.split(/\s+/g).length;
        
        const mkSpan = document.createElement('span')
        mkSpan.textContent = `Words: ${words}`
        this.parentElement.parentElement.querySelector('.word-count').appendChild(mkSpan)
    }

}
*/

//Code cours
export default class WordCount extends HTMLSpanElement {
    constructor() {
      super();
      
      this.paragraph = this.closest('article').querySelector('p');
      this.shadow = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback () {
      this.displayCountWords()
      this.timer = window.setInterval(() => {
        this.displayCountWords()
      }, 500)
    }
  
    disconnectedCallback () {
      clearInterval(this.timer)
    }
  
    displayCountWords() {
      this.shadow.textContent = `Words: ${this.countWords()}`
    }
  
    countWords() {
      const text = this.paragraph.innerText || this.paragraph.textContent;
      return text.split(/\s+/g).length;
    }
  }
