const metaInfo = () => [
  {
    name: 'description',
    content: 'README.fm is a podcast aimed at bridging the gap between people and technology for social good'
  },
  {
    property: 'og:title',
    content: 'README.fm | A podcast bridging the gap between people and technology for social good',
  },
  {
    property: 'og:description',
    content: 'README.fm is a podcast aimed at bridging the gap between people and technology for social good'
  },
  {
    property: 'og:site_name',
    content: 'README.fm'
  },
  {
    property: 'og:url',
    content: 'https://readme.fm'
  },
  {
    property: 'og:image',
    content: ''
  }
].map((tag) => {
  const [a, b] = Object.keys(tag);
  return `<meta ${a}="${tag[a]}" ${b}="${tag[b]}" />`
}).join('\n');

module.exports = ({ content, title }) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${metaInfo()}
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <title>${title}</title>
  </head>
  <body class="bg-gray-50">
    ${content}
  </body>
</html>`