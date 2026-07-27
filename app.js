import { renderHome }     from './pages/home.js';
import { renderTimeline } from './pages/timeline.js';
import { renderExperience } from './pages/experience.js';
import { renderAbout }    from './pages/about.js';
import { initRouter }     from './router.js';

initRouter({
  home:     renderHome,
  timeline: renderTimeline,
  experience: renderExperience,
  about:    renderAbout,
});
