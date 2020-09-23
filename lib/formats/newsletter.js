module.exports = {
  add: function(node, value, dom) {
    dom(node.parentNode).switchTag('ASIDE');

    var data = {
      slug: value.slug
    };

    var div = node.ownerDocument.createElement('div');
    div.setAttribute('data-anthem-component', 'newsletter');
    div.setAttribute('data-anthem-component-data', JSON.stringify(data));
    dom(node).replace(div);

    return div;
  }
};
