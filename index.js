const grid = document.getElementById('grid');
const images = [
    "https://picsum.photos/id/10/300/200",
    "https://picsum.photos/id/20/300/200",
    "https://picsum.photos/id/30/300/200",
    "https://picsum.photos/id/40/300/200",
    "https://picsum.photos/id/50/300/200",
    "https://picsum.photos/id/60/300/200"
];
images.forEach((url, index) => {
    const id = index + 1; // IDs start at 1
    const box = document.createElement('div');
    box.className = 'box';
    box.id = id;
    box.innerHTML = `
    <img src="${url}" alt="Box ${id}">
    <a>Box ${id}</a>
    `;
    box.addEventListener('click', () => {
    window.location.href = `embed.html?id=${id}`;
    });
    grid.appendChild(box);
});
