const metaInfo = () => [
  {
    name: 'description',
    content: 'Interested in civic-tech? Find out what is happening in South Africa\'s civic-tech community via the README.fm podcast'
  },
  {
    property: 'og:title',
    content: 'README.fm: A civic-tech podcast',
  },
  {
    property: 'og:description',
    content: 'Interested in civic-tech? Find out what is happening in South Africa\'s civic-tech community via the README.fm podcast'
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
    content: 'https://readme.fm/public/logo.png'
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
    <meta name="google-site-verification" content="eQMU6hVTR8UijnrKXqWYIkw7eerj4Lvym38bBWzIdPU" />
    ${metaInfo()}
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="/public/logo.png">
    <link rel="canonical" href="https://readme.fm" />
    <title>${title}</title>
  </head>
  <body class="bg-gray-100">
    ${content}
  </body>
  <footer class="flex flex-wrap items-center justify-around py-5 mt-10 font-mono bg-black text-white text-center">
    <span class="px-4 text-xs">
      <b>README.fm</b> is a project started by <a class="text-blue-500" href="https://diff.org.za">Diff.org.za</a>
    </span>
  </footer>
</html>`