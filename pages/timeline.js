import { timeline }     from '../data/timeline.js';
import { postIds }      from '../data/posts.js';
import { loadAllPosts } from '../data/loader.js';

export async function renderTimeline() {
  const posts = await loadAllPosts(postIds);
  const postMap = Object.fromEntries(posts.map(p => [p.id, p]));

  const items = timeline.map(entry => {
    const articleLinks = entry.articles
      .map(id => postMap[id])
      .filter(Boolean)
      .map(p => `<a class="tl-article" data-nav-post="${p.id}">${p.title}</a>`)
      .join('');

    return `
      <article class="tl-item reveal">
        <div class="tl-aside"><span class="tl-year">${entry.year}</span></div>
        <div class="tl-rail"><span class="tl-dot"></span></div>
        <div class="tl-content">
          <h3 class="h-sm">${entry.title}</h3>
          <p class="muted">${entry.description}</p>
          ${articleLinks ? `<div class="tl-articles">${articleLinks}</div>` : ''}
        </div>
      </article>
    `;
  }).join('');

  return `
    <div class="page wrap">
      <header class="resume-head reveal">
        <h1 class="display h-xl">Timeline</h1>
        <p class="muted resume-sub">시기별로 한 일들을 모아둔 기록.</p>
      </header>
      <div class="timeline">${items}</div>
    </div>
  `;
}
