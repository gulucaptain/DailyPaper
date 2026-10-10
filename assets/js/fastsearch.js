// PaperMod's bundled Fuse engine and existing post-entry cards are reused here.
const input = document.getElementById('searchInput');
const list = document.getElementById('searchResults');
const status = document.getElementById('searchStatus');
const scope = document.getElementById('searchType');
const sort = document.getElementById('searchSort');
const more = document.getElementById('searchMore');
const box = document.getElementById('searchbox');
const pageSize = 20;
let data = [], fuse, matches = [], shown = 0, timer;
const urlState = new URLSearchParams(location.search);
input.value = urlState.get('q') || '';
if (['all', 'paper', 'article'].includes(urlState.get('type'))) scope.value = urlState.get('type');
if (urlState.get('sort') === 'newest') sort.value = 'newest';

function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
}
function render() {
    const fragment = document.createDocumentFragment();
    for (const item of matches.slice(shown, shown + pageSize)) {
        const card = element('article', 'post-entry');
        card.setAttribute('role', 'listitem');
        const header = element('header', 'entry-header');
        header.append(element('h2', '', item.title));
        const description = element('div', 'entry-content');
        description.append(element('p', '', item.summary));
        const meta = item.kind === 'paper'
            ? `论文 · arXiv:${item.arxiv} · ${item.issue}`
            : `文章 · ${item.date}`;
        const link = element('a', 'entry-link');
        link.href = item.permalink;
        link.setAttribute('aria-label', `${item.title}，${item.date}`);
        card.append(header, description, element('footer', 'entry-footer', meta), link);
        fragment.append(card);
    }
    list.append(fragment);
    shown = Math.min(shown + pageSize, matches.length);
    more.hidden = shown >= matches.length;
    if (!matches.length) {
        status.textContent = '没有找到匹配内容。试试论文简称、arXiv ID，或更短的中英文关键词。';
    } else {
        const label = input.value.trim() ? `找到 ${matches.length} 条结果` : '最近收录';
        status.textContent = `${label} · 已显示 ${shown} / ${matches.length} 条`;
    }
}
function search() {
    if (!fuse) return;
    const query = input.value.trim();
    const url = new URL(location.href);
    for (const [key, value] of [['q', query], ['type', scope.value === 'all' ? '' : scope.value], ['sort', sort.value === 'relevance' ? '' : sort.value]]) {
        if (value) url.searchParams.set(key, value); else url.searchParams.delete(key);
    }
    history.replaceState(null, '', url);
    const arxivID = query.match(/^(?:(?:https?:\/\/arxiv\.org\/(?:abs|pdf)\/)|arxiv:\s*)?(\d{4}\.\d{4,5})(?:v\d+)?(?:\.pdf)?$/i)?.[1];
    if (arxivID) {
        matches = data.filter(item => item.arxiv === arxivID || (item.kind === 'article' && item.content.includes(arxivID)));
        matches.sort((a, b) => Number(b.kind === 'paper') - Number(a.kind === 'paper'));
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(query)) {
        matches = data.filter(item => item.date === query || item.issue.includes(query));
    } else {
        matches = query ? fuse.search(query).map(result => result.item) : data.filter(item => scope.value === 'article' || item.kind === 'paper');
    }
    if (scope.value !== 'all') matches = matches.filter(item => item.kind === scope.value);
    if (!query || sort.value === 'newest') matches.sort((a, b) => b.date.localeCompare(a.date));
    shown = 0;
    list.replaceChildren();
    render();
}
async function init() {
    try {
        const response = await fetch('../index.json');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        data = await response.json();
        fuse = new Fuse(data, {
            ignoreLocation: true, threshold: 0.25, minMatchCharLength: 2,
            keys: [{ name: 'title', weight: 5 }, { name: 'arxiv', weight: 4 },
                   { name: 'summary', weight: 2 }, { name: 'content', weight: 1 },
                   { name: 'date', weight: 1 }, { name: 'issue', weight: 1 }]
        });
        input.disabled = false;
        search();
        input.focus();
    } catch (error) {
        status.textContent = '搜索索引加载失败，请刷新页面重试；也可以从顶部“归档”浏览文章。';
        console.error(error);
    }
}
input.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(search, 150); });
input.addEventListener('search', search);
scope.addEventListener('change', search);
sort.addEventListener('change', search);
more.addEventListener('click', () => {
    const firstNew = shown;
    render();
    list.children[firstNew]?.querySelector('a').focus();
});
box.addEventListener('keydown', event => {
    if (event.key === 'Escape') { input.value = ''; search(); input.focus(); return; }
    const links = [...list.querySelectorAll('.entry-link')];
    const current = links.indexOf(document.activeElement);
    if (event.key === 'ArrowDown' && (document.activeElement === input || current >= 0)) {
        event.preventDefault(); links[Math.min(current + 1, links.length - 1)]?.focus();
    } else if (event.key === 'ArrowUp' && current >= 0) {
        event.preventDefault(); (current === 0 ? input : links[current - 1]).focus();
    }
});
init();
