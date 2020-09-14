module.exports = {
  type: 'line',
  add: function(node, value) {
    if (value) {
      node.classList.add('p-large-text');
    }

    return node;
  }
};
