import HtmlWebpackPlugin from 'html-webpack-plugin'

let components = {
  typographie: '',
  tables: '',
  stepbar: '',
  progressBars: '',
  priorityNav: '',
  pagination: '',
  tabs: '',
  nav: '',
  navbar: '',
  modal: '',
  links: '',
  indicators: '',
  forms: '',
  dialogs: '',
  cards: '',
  carousel: '',
  buttons: '',
  bulletpoint: '',
  accordion: ''
}

/* sould return

entry: {
  index: './src/page-index/main.js',
  about: './src/page-about/main.js',
  contacts: './src/page-contacts/main.js'
},

*/

function generateEntries () {
  const entry = {}
  for (const key in components) {
    if (components.hasOwnProperty(key)) {
      entry[key] = `./src/pages/page-${key}/main.js`;
    }
  }

  return entry;
}

/**
 * should return  // https://webpack.js.org/concepts/plugins/
 * 
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/page-index/tmpl.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-about/tmpl.html',
      inject: true,
      chunks: ['about'],
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-contacts/tmpl.html',
      inject: true,
      chunks: ['contacts'],
      filename: 'contacts.html'
    })
  ]
 */

function generatePluginsConf () {
  const pluginsConf = {}
  for (const key in components) {
    if (components.hasOwnProperty(key)) {
      pluginsConf[key] = {
        template: `./src/pages/page-${key}/main.js`,
        inject: true,
        chunks: [`${key}`],
        filename: `${key}.html`
      }
    }
  }
  return pluginsConf;
}

function generatePlugins() {
  let plugins = [];
  let componentsConfig = generatePluginsConf()
  for (const component in componentsConfig) {
    plugins.push(new HtmlWebpackPlugin(component))
  }
  return plugins;
}


export default (env = {}) => ({
  entry: generateEntries(),
  plugins: generatePlugins()
})
