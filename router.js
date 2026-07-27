import { postIds }      from './data/posts.js';
import { loadAllPosts } from './data/loader.js';
import { renderPost }   from './pages/post.js';

const scrollPositions = {};
let currentPage = null;
let io = null;

function revealAll(container) {
  if (io) io.disconnect();
  io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  container.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      el.classList.add('in');
    } else {
      io.observe(el);
    }
  });
}

function initExperienceFilters(app) {
  const filters = app.querySelector('#feedFilters');
  const feed = app.querySelector('#feed');
  if (!filters || !feed) return;

  const empty = app.querySelector('#feedEmpty');
  const items = Array.from(feed.querySelectorAll('.post'));

  filters.addEventListener('click', e => {
    const chip = e.target.closest('.fchip');
    if (!chip) return;
    const f = chip.dataset.filter;
    filters.querySelectorAll('.fchip').forEach(c => c.classList.toggle('active', c === chip));
    let shown = 0;
    items.forEach(p => {
      const match = f === 'all' || (p.dataset.tags || '').split(' ').includes(f);
      p.style.display = match ? '' : 'none';
      if (match) {
        shown++;
        p.classList.remove('in');
        requestAnimationFrame(() => p.classList.add('in'));
      }
    });
    if (empty) empty.hidden = shown !== 0;
  });

  // Open post detail — use loader cache so body is already available
  feed.addEventListener('click', async e => {
    const postEl = e.target.closest('.post');
    if (!postEl) return;
    e.preventDefault();
    const all = await loadAllPosts(postIds);
    const post = all.find(p => p.id === postEl.dataset.postId);
    if (post) navigate('post', true, post);
  });
}

let renderers = {};

export async function navigate(key, push = true, state = null) {
  if (currentPage) scrollPositions[currentPage] = window.scrollY;

  const app = document.getElementById('app');
  const nav = document.getElementById('nav');

  const html = (key === 'post' && state)
    ? await renderPost(state)
    : await renderers[key]?.();

  if (!html) { navigate('home', push); return; }

  app.innerHTML = html;

  if (window.hljs) {
    app.querySelectorAll('pre code').forEach(el => hljs.highlightElement(el));
  }

  requestAnimationFrame(() => {
    window.scrollTo(0, key === 'post' ? 0 : (scrollPositions[key] ?? 0));
  });

  const navKey = key === 'post' ? 'experience' : key;
  nav.querySelectorAll('[data-nav]').forEach(a => {
    a.classList.toggle('active', a.getAttribute('data-nav') === navKey);
  });
  nav.classList.remove('open');

  currentPage = key;
  if (push) {
    const hash = (key === 'post' && state) ? `#post/${state.id}` : `#${key}`;
    history.pushState(null, '', hash);
  }

  revealAll(app);
  if (key === 'experience') {
    initExperienceFilters(app);
    const filterTag = state?.filter;
    if (filterTag) {
      const chip = app.querySelector(`.fchip[data-filter="${filterTag}"]`);
      if (chip) chip.click();
    }
  }
}

export function initRouter(pageRenderers) {
  renderers = pageRenderers;

  document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('open');
  });

  document.addEventListener('click', async e => {
    // Post link from timeline (data-nav-post="post-id")
    const postLink = e.target.closest('[data-nav-post]');
    if (postLink) {
      e.preventDefault();
      const all = await loadAllPosts(postIds);
      const post = all.find(p => p.id === postLink.getAttribute('data-nav-post'));
      if (post) navigate('post', true, post);
      return;
    }
    // Standard page navigation (data-nav="page-key")
    const link = e.target.closest('[data-nav]');
    if (!link) return;
    e.preventDefault();
    navigate(link.getAttribute('data-nav'), true, { filter: link.dataset.navFilter || null });
  });

  async function resolveHash(hash) {
    if (hash.startsWith('#post/')) {
      const id = decodeURIComponent(hash.slice(6));
      const all = await loadAllPosts(postIds);
      const post = all.find(p => p.id === id);
      if (post) navigate('post', false, post);
      else navigate('home', false);
    } else {
      navigate(hash.slice(1) || 'home', false);
    }
  }

  window.addEventListener('hashchange', () => resolveHash(location.hash || '#home'));

  resolveHash(location.hash || '#home');
}
