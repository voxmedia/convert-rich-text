module.exports = {
  type: 'line',
  add: function(node, value) {
    if (value) {
      node.classList.add('c-end-para');
    }

    return node;
  }
};
