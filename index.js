module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily: 'Fira Code',

    // terminal cursor background color (hex)
    cursorColor: '#F81CE5',

    // The shape of the caret in the terminal.
    // Available options are: 'BEAM', 'UNDERLINE', 'BLOCK'
    cursorShape: 'BEAM',

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    backgroundColor: '#000',

    // border color (window, tabs)
    borderColor: '#333',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '3px 4px',

    // some color overrides. see http://bit.ly/29k1iU2 for
    // the full list
    colors: []
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyperterm-one-light',
    'hypercwd',
    'hyperterm-subpixel-antialiased',
    'hyperlinks',
  ],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [
  ]
};
