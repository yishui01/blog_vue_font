import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css';
import '../../styles/hl.css'
export default (value) => {
  if (!value) return
  var myRenderer = new marked.Renderer();
  if (typeof hljs != 'undefined') {
    myRenderer.code = function(code, lang, escaped) {
      code = hljs.highlight(lang, code).value;
      return '<pre><code'
          + (lang
              ? ' class="hljs ' + this.options.langPrefix + lang + '"'
              : ' class="hljs"')
          + '>'
          + code
          + '\n</code></pre>\n';
    };
  }

  // marked.setOptions({
  //   renderer: myRenderer
  // });

  const rendererMD = new marked.Renderer()
  // 基本设置
  marked.setOptions({
    renderer: myRenderer,
    highlight: function(code) {
      var val =  hljs.highlightAuto(code).value;
      val = val.replace(/<pre>/g, '<pre class="hljs">')
      alert(val)
      return val
    },
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  })
  return marked(value)
}
