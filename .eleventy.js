var { DateTime } = require('luxon');

module.exports = (function(eleventyConfig) {
  eleventyConfig.setPugOptions({ compileDebug: true });
  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('MMMM d, yyyy')
  })
  eleventyConfig.addFilter("dateFormat", function(value) {
    return `${value.getMonth()+1}/${value.getDate()}/${value.getFullYear()}`;
  });
  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist',
    },
  };
});