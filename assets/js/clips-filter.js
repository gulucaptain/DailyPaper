(() => {
    const sidebar = document.querySelector('.clips-sidebar');
    const buttons = [...sidebar.querySelectorAll('[data-category]')];
    const cards = [...document.querySelectorAll('#clips-results .post-entry')].map(node => ({node, categories: JSON.parse(node.dataset.categories)}));
    const status = document.getElementById('clips-status');
    const available = new Set(buttons.map(button => button.dataset.category));
    function filter(category) {
        if (!available.has(category)) category = '';
        let count = 0;
        for (const {node, categories} of cards) {
            node.hidden = Boolean(category) && !categories.includes(category);
            if (!node.hidden) count++;
        }
        for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.category === category));
        status.textContent = `${category || '全部文章'} · ${count} 篇 · 最新优先`;
    }
    function restore() { filter(new URLSearchParams(location.search).get('category') || ''); }
    for (const button of buttons) button.addEventListener('click', () => {
        const category = button.dataset.category;
        const url = new URL(location.href);
        if (category) url.searchParams.set('category', category); else url.searchParams.delete('category');
        history.pushState(null, '', url);
        filter(category);
    });
    window.addEventListener('popstate', restore);
    restore();
    sidebar.hidden = false;
})();
