const params = new URLSearchParams(window.location.search);
const id = params.get('id') - 1;
const iframe = document.getElementById('viewer');
const embeds = [
    "https://cdn.jsdelivr.net/gh/genizy/web-port@main/buckshot-roulette/index.html",
    "https://openai.com",
    "https://wikipedia.org",
    "https://github.com",
    "https://mozilla.org",
    "https://archive.org"
];
iframe.src = embeds[id] || 'about:blank';
