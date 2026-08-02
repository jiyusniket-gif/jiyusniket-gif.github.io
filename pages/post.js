import { postIds }      from '../data/posts.js';
import { loadAllPosts } from '../data/loader.js';

function postNav(prev, next, isTop = false) {
  return `
    <nav class="post-nav${isTop ? ' post-nav-top' : ''}">
      ${prev ? `
        <a class="post-nav-btn post-nav-prev" data-nav-post="${prev.id}">
          <span class="post-nav-label">← 이전</span>
          <span class="post-nav-title">${prev.title}</span>
        </a>` : '<span></span>'}
      ${next ? `
        <a class="post-nav-btn post-nav-next" data-nav-post="${next.id}">
          <span class="post-nav-label">다음 →</span>
          <span class="post-nav-title">${next.title}</span>
        </a>` : '<span></span>'}
    </nav>
  `;
}

export async function renderPost(post) {
  const allPosts = await loadAllPosts(postIds);
  const idx      = allPosts.findIndex(p => p.id === post.id);
  const prev     = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  const next     = idx > 0 ? allPosts[idx - 1] : null;

  const detailTitle = post['detail-title'] || post.title;
  const body = post.body
    ? marked.parse(post.body)
    : '<p class="muted">본문이 아직 작성되지 않았습니다.</p>';

  return `
    <article class="page wrap post-page">

      ${postNav(prev, next, true)}

      <header class="post-detail-head reveal">
        <p class="post-detail-date muted">${post.date || ''}</p>
        <h1 class="display post-detail-title">${detailTitle}</h1>
        <p class="post-detail-lead">${post.excerpt || ''}</p>
      </header>

      ${post.thumbnail
        ? `<img class="post-cover-img reveal" src="${post.thumbnail}" alt=""${post['cover-style'] ? ` style="${post['cover-style']}"` : ''}>`
        : `<div class="post-cover grain ${post.gradient} reveal"></div>`
      }

      <div class="prose reveal">${body}</div>

      ${postNav(prev, next)}

    </article>
  `;
}
