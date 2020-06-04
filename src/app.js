import './style.css'
import HelloWorld from './components/helloworld.js'
import WordCount from './components/wordCount.js'
import EditMode from './components/EditMode.js'
import TagList from './components/TagList.js';

customElements.define('hello-world', HelloWorld);
customElements.define('word-count', WordCount, { extends: "span"});
customElements.define('edit-mode', EditMode, { extends: "p"});
customElements.define('tag-list', TagList, { extends: "span"});