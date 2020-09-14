function makeFormats() {
  return {
    bold: require('./bold'),
    italic: require('./italic'),
    mark: require('./mark'),
    strike: require('./strike'),
    superscript: require('./superscript'),
    subscript: require('./subscript'),
    firstheader: require('./firstheader'),
    secondheader: require('./secondheader'),
    thirdheader: require('./thirdheader'),
    fourthheader: require('./fourthheader'),
    fifthheader: require('./fifthheader'),
    bullet: require('./bullet'),
    list: require('./list'),
    blockquote: require('./blockquote'),
    link: require('./link'),
    ins: require('./ins'),
    del: require('./del'),
    br: require('./br'),
    autolink: require('./autolink'),
    id: require('./id'),
    position: require('./position'),
    grouping: require('./grouping'),
    dropcap: require('./dropcap'),
    leadgraf: require('./leadgraf'),
    endmark: require('./endmark'),
    ad_placement: require('./ad_placement'),
    image: require('./image'),
    pullquote: require('./pullquote'),
    oembed: require('./oembed'),
    video: require('./video'),
    hr: require('./hr'),
    html: require('./html'),
    doc: require('./doc'),
    small: require('./small'),
    actionbox: require('./actionbox'),
    readmore: require('./readmore'),
    ratingcard: require('./ratingcard'),
    newsletter: require('./newsletter'),
    credits: require('./credits'),
    toh_project_details: require('./toh_project_details'),
    toh_tools: require('./toh_tools'),
    pym: require('./pym')
  };
}

module.exports = makeFormats();

exports.options = {
  blockTag: 'P',
  formatOrder: [
    // inline: wrapper tag
    'bold',
    'italic',
    'mark',
    'small',
    'strike',
    'superscript',
    'subscript',
    'autolink',
    'link', // links come last so that they can merge sibling nodes

    // objects
    'actionbox',
    'credits',
    'doc',
    'hr',
    'html',
    'image',
    'oembed',
    'pullquote',
    'ratingcard',
    'newsletter',
    'readmore',
    'video',
    'toh_project_details',
    'toh_tools',
    'pym',

    // line: wrapper tag
    'position',
    'grouping',
    'blockquote',

    // line: wrapper tag + switch tag
    'bullet',
    'list',

    // line: switch tag
    'firstheader',
    'secondheader',
    'thirdheader',
    'fourthheader',
    'fifthheader',

    // line: add classes / attributes
    'dropcap',
    'leadgraf',
    'endmark',
    'ad_placement',
    'br',
    'id'
  ]
};
