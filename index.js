module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 15,

    // font family with optional fallbacks
    fontFamily: 'Fira Code',

    // terminal cursor background color (hex)
    cursorColor: '#F81CE5',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
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
    colors: [],

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: true,
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
  ]
};
