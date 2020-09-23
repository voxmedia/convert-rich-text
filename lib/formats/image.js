module.exports = {
  add: function(node, value, dom) {
    var doc = node.ownerDocument;
    dom(node.parentNode).switchTag('figure');
    node.parentNode.classList.add('e-image');
    node.parentNode.setAttribute('data-chorus-asset-id', value.id);

    var frag = doc.createDocumentFragment();
    var img = doc.createElement('img');
    img.src = value.src;
    frag.appendChild(img);

    if (value.caption) {
      var caption = doc.createElement('div');
      caption.setAttribute('class', 'caption');
      caption.innerHTML = value.caption;
      frag.appendChild(caption);
    }

    if (value.hide_credit) {
      node.parentNode.setAttribute('data-hide-credit', 'true');
    }

    if (value.mask_text) {
      node.parentNode.setAttribute('data-mask-text', value.mask_text);
    }

    dom(node).replace(frag);
    return frag;
  }
};
