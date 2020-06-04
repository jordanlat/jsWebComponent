// Mon Code
/*
export default class HelloWorld extends HTMLElement {
    constructor() {
      super();
  
      // this.innerHTML = '<p>HELLO Beach CHeeese</p>'
      const headingElement = document.createElement('H1')
      headingElement.textContent = `Hello ${this.getAttribute('text')}!`
      headingElement.classList.add('font-bold')
      headingElement.classList.add('text-xl')
      headingElement.classList.add('mb-2')
      headingElement.classList.add('text-gray-600')
      this.appendChild(headingElement)
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

  }
  */

  export default class HelloWorld extends HTMLElement {
    static get observeAttributes() { return ['text']; }
  
    constructor() {
      super();

      this.headingElement = document.createElement('H1')
      this.headingElement.textContent = `Hello ${this.getAttribute('text')}!`
      this.headingElement.classList.add('font-bold')
      this.headingElement.classList.add('text-xl')
      this.headingElement.classList.add('mb-2')
      this.headingElement.classList.add('text-gray-600')
      this.appendChild(this.headingElement)
      this.updateHeadingElement()
    }
    attributesChangeCallback(name, oldValue, newValue) {
      if(name === 'text') this.updateHeadingElement
    }

    updateHeadingElement() {
      this.headingElement.textContent = `Hello ${this.getAttribute('text')}!`
    }
  }