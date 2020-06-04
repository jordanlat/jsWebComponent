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
  }