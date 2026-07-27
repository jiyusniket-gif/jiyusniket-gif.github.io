// Frontmatter parser + async post loader
// Parses YAML-like frontmatter block between --- delimiters

let _cache = null;

function parseFrontmatter(id, text) {
  const clean = text.replace(/^﻿/, ''); // strip BOM if present
  const match = clean.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    return { id, title: id, 'detail-title': '', date: '', tags: [], excerpt: '', thumbnail: null, gradient: 'g-splatter', body: clean };
  }

  const meta = { id };
  match[1].split(/\r?\n/).forEach(line => {
    const colon = line.indexOf(':');
    if (colon === -1) return;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim();
    meta[key] = val;
  });

  // tags: "branding, web" → ['branding', 'web']
  meta.tags      = meta.tags ? meta.tags.split(',').map(t => t.trim().toLowerCase()).filter(Boolean) : [];
  meta.gradient  = meta.gradient  || 'g-splatter';
  meta.thumbnail = meta.thumbnail || null;
  meta.body      = match[2];

  return meta;
}

async function loadPost(id) {
  try {
    const res = await fetch(`content/posts/${id}.md`);
    if (!res.ok) {
      // File not found — return skeleton so the feed still shows the entry
      return { id, title: id, 'detail-title': '', date: '', tags: [], excerpt: '', thumbnail: null, gradient: 'g-splatter', body: '' };
    }
    return parseFrontmatter(id, await res.text());
  } catch {
    return null;
  }
}

export async function loadAllPosts(ids) {
  if (_cache) return _cache;
  const posts = await Promise.all(ids.map(loadPost));
  _cache = posts.filter(Boolean);
  return _cache;
}
