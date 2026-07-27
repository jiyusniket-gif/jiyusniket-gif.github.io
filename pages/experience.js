import { postIds }      from '../data/posts.js';
import { loadAllPosts } from '../data/loader.js';

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

export async function renderExperience() {
  const posts = await loadAllPosts(postIds);

  const counts = {};
  posts.forEach(p => p.tags.forEach(t => { counts[t] = (counts[t] || 0) + 1; }));

  const chips = Object.entries(counts)
    .map(([t, n]) => `<button class="fchip" data-filter="${t}">${cap(t)} <span class="fcount">${n}</span></button>`)
    .join('');

  const items = posts.map(p => `
    <article class="post reveal" data-tags="${p.tags.join(' ')}" data-post-id="${p.id}">
      <div class="post-main">
        <h3 class="post-title">${p.title}</h3>
        <p class="post-excerpt muted">${p.excerpt || ''}</p>
        <p class="post-date muted">${p.date || ''}</p>
        <div class="post-tags">${p.tags.map(t => `<span class="tag">${cap(t)}</span>`).join('')}</div>
      </div>
      <div class="post-thumb${p.thumbnail ? ' post-thumb-img' : ''}"
           ${p.thumbnail ? `style="background-image:url('${p.thumbnail}')"` : ''}>
        <span class="thumb-title">${p.title}</span>
        <span class="thumb-mark">jiyu.work</span>
      </div>
    </article>
  `).join('');

  return `
    <div class="page wrap feed-wrap">
      <header class="feed-head reveal">
        <h1 class="display h-xl">Experience</h1>
        <p class="muted">경험을 태그별로 공유합니다. 궁금한 능력들을 확인해보세요.</p>
      </header>
      <div class="feed-filters reveal" id="feedFilters">
        <button class="fchip active" data-filter="all">All <span class="fcount">${posts.length}</span></button>
        ${chips}
      </div>
      <div class="feed" id="feed">
        ${items}
        <p class="feed-empty muted" id="feedEmpty" hidden>Nothing here yet under this filter.</p>
      </div>
    </div>
  `;
}
