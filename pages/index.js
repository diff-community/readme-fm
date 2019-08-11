const html = require('html-template-tag');

const page = () => html`
<main>
  <div class="container flex h-screen mx-auto items-center justify-around flex-wrap">
    <div class="px-6">
      <h1 class="font-mono text-4xl"><span class="text-pink-600">#</span> README.fm</h1>
      <br>
      <h2 class="font-mono lg:max-w-md xs:max-w-xs"><span class="text-yellow-500">**</span>A podcast aimed at bridging the gap between people and technology for social good<span class="text-yellow-500">**</span></h2>
      <br>
      <span class="font-mono">
        [<span class="text-red-700">Check it out</span>](<a class="text-blue-400" href="https://soundcloud.com/readme-fm">soundcloud.com/readme-fm</a>)
      </span>
    </div>
    <div>
      <img src="/public/logo.png" class="rounded shadow-2xl max-w-xs max-h-xs" alt="README.fm Logo">
    </div>
  </div>
</main>
`;

const metaInfo = [
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
];

module.exports = {
  layout: 'default',
  page,
  head: () => [
    ...metaInfo.map((tag) => ['meta', tag]),
  ],
};