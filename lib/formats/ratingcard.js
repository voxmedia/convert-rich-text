module.exports = {
  add: function(node, value, dom) {
    dom(node.parentNode).switchTag('ASIDE');

    var data = {
      rating: value.rating,
      title: value.title
    };

    var div = node.ownerDocument.createElement('div');
    div.setAttribute('data-anthem-component', 'ratingcard');
    div.setAttribute('data-anthem-component-data', JSON.stringify(data));
    dom(node).replace(div);

    return div;
  }
};
