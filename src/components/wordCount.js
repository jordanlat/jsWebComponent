export default class WordCount extends HTMLElement {
    constructor() {
        super();
        console.log(this.parentElement);
/*
        document.querySelectorAll('article').forEach(article => {
            const p = article.querySelector('p')
            const text = p.innerText || p.textContent;
            const words = text.split(/\s+/g).length;
            // article.querySelector('.word-count').textContent = `Words: ${words}`
        })
*/
        const getP = this.parentElement.querySelector('p');
        const text = getP.innerText || getP.textContent;
        const words = text.split(/\s+/g).length;
        console.log(words);
        
        const mkSpan = document.createElement('span')
        mkSpan.classList.add('text-sm')
        mkSpan.classList.add('inline-block')
        mkSpan.classList.add('px-3')
        mkSpan.classList.add('py-1')
        mkSpan.classList.add('font-semibold')
        mkSpan.classList.add('text-gray-700')
        mkSpan.textContent = `Words: ${words}`
        this.parentElement.appendChild(mkSpan)


        //this.parentElement.getElementsByTagName('span').textContent = `Words: ${words}`
    }
  }
