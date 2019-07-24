module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('public');
  eleventyConfig.addPassthroughCopy('robots.txt');
  eleventyConfig.addPassthroughCopy('sw.js');
  eleventyConfig.addPassthroughCopy('manifest.json');

  return {
    dir: {
      input: 'src/pages',
      layouts: '../layouts',
    },
  };
};