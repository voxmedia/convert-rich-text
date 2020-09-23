module.exports = {
  type: 'line',
  add: function(node, value) {
    if (!node.id) {
      node.id = value;
    }
  }
};
