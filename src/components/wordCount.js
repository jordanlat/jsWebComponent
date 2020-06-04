export default class WordCount extends HTMLElement {
    constructor() {
        super();
  
        console.log(document.querySelectorAll('article').length);
        document.querySelectorAll('article').forEach(article => {
            
            const p = article.querySelector('p')
            const text = p.innerText || p.textContent;
            const words = text.split(/\s+/g).length;
            article.querySelector('.word-count').textContent = `Words: ${words}`
        })
    }
  }
