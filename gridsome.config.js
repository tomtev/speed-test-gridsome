module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A WordPress starter for Gridsome',

  templates: {
    WordPressPost: '/:slug', 
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://generatethis.wpengine.com/',
        typeName: 'WordPress'
      }
    }
  ]
}