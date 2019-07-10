module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('public');
  eleventyConfig.addPassthroughCopy('robots.txt');

  return {
    dir: {
      input: 'src/pages',
      layouts: '../layouts',
    },
  };
};