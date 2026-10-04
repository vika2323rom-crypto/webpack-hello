export function heading(text) {
    const title = document.createElement('h1');
    title.className = 'speech__title';
    title.textContent = text;
    return title;
}