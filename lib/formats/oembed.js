module.exports = {
  add: function(node, value, dom) {
    var doc = node.ownerDocument;
    dom(node.parentNode).switchTag('div');

    if (value.html) {
      var temp = doc.createElement('div');
      temp.innerHTML = value.html;

      var frag = doc.createDocumentFragment();
      while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
      }

      if (value.caption) {
        var caption = doc.createElement('div');
        caption.setAttribute('class', 'caption');
        caption.innerHTML = value.caption;
        frag.appendChild(caption);
      }

      dom(node).replace(frag);
      return frag;
    }
  }
};
