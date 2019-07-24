module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('public');
  eleventyConfig.addPassthroughCopy('robots.txt');
  eleventyConfig.addPassthroughCopy('sw.js');

  return {
    dir: {
      input: 'src/pages',
      layouts: '../layouts',
    },
  };
};