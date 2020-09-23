module.exports = {
  type: 'line',
  add: function(node, value) {
    // add the attribute to the top-most wrapper div
    var target = node;
    while (target.parentNode.parentNode) {
      target = target.parentNode;
    }
    target.setAttribute('data-ad-placement-anchor', value);
    // return the original node
    return node;
  }
};
