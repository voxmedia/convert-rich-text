module.exports = {
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
