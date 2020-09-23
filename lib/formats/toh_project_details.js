module.exports = {
  add: function(node, value, dom) {
    dom(node.parentNode).switchTag('ASIDE');

    var data = {
      skill: value.skill,
      skill_description: value.skill_description,
      estimated_cost: value.estimated_cost,
      estimated_time: value.estimated_time
    };

    var div = node.ownerDocument.createElement('div');
    div.setAttribute('data-anthem-component', 'toh_project_details');
    div.setAttribute('data-anthem-component-data', JSON.stringify(data));
    dom(node).replace(div);

    return div;
  }
};
