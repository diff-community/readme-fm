const html = require('html-template-tag');

module.exports = ({ title, content, head }) => html`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-site-verification" content="eQMU6hVTR8UijnrKXqWYIkw7eerj4Lvym38bBWzIdPU" />
    <meta name="theme-color" content="#000000" />
    $${head}
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="/public/logo.png">
    <link rel="canonical" href="https://readme.fm" />
    <link rel="manifest" href="/manifest.json" />
    <title>${title}</title>
    <script>
      const registerServiceWorker = async () => {
        if (!navigator.serviceWorker) {
          return false;
        }

        const reg = await navigator.serviceWorker.register('/sw.js');

        await reg.update();
      }

      registerServiceWorker();
    </script>
  </head>
  <body class="bg-gray-100">
    $${content}
  </body>
  <footer class="flex flex-wrap items-center justify-around py-5 mt-10 font-mono bg-black text-white text-center">
    <span class="px-4 text-xs">
      <b>README.fm</b> is a project started by <a class="text-blue-500" href="https://diff.org.za">Diff.org.za</a>
    </span>
  </footer>
</html>
`;