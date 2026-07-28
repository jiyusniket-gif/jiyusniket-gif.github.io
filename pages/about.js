const IC = 'https://api.iconify.design/simple-icons'; // Iconify → Simple Icons

const SKILL_ICONS = {
  'google-apps-script': `${IC}/googleappsscript.svg?color=%231a1a1a`,
  'excel':              `${IC}/microsoftexcel.svg?color=%231a1a1a`,
  'python':             `${IC}/python.svg?color=%231a1a1a`,
  'javascript':         `${IC}/javascript.svg?color=%231a1a1a`,
  'claude':             `${IC}/anthropic.svg?color=%231a1a1a`,
  'claude-code':        `${IC}/anthropic.svg?color=%231a1a1a`,
  'openai':             `${IC}/openai.svg?color=%231a1a1a`,
  'gemini':             `${IC}/googlegemini.svg?color=%231a1a1a`,
  'notion':             `${IC}/notion.svg?color=%231a1a1a`,
  'markdown':           `${IC}/markdown.svg?color=%231a1a1a`,
  'microsoft-office':   `${IC}/microsoftoffice.svg?color=%231a1a1a`,
  'slack':              `${IC}/slack.svg?color=%231a1a1a`,
  'discord':            `${IC}/discord.svg?color=%231a1a1a`,
  'teams':              `${IC}/microsoftteams.svg?color=%231a1a1a`,
  'figma':              `${IC}/figma.svg?color=%231a1a1a`,
  'html5':              `${IC}/html5.svg?color=%231a1a1a`,
  'github':             `${IC}/github.svg?color=%231a1a1a`,
};

const FLAGS = { japan: '🇯🇵', usa: '🇺🇸' };

function skill(id, label) {
  const flag = FLAGS[id];
  const src  = SKILL_ICONS[id];
  const icon = flag ? `<span class="skill-flag">${flag}</span>`
             : src  ? `<img class="skill-icon-img" src="${src}" alt="" width="16" height="16">`
             : '';
  return `<div class="skill-item">${icon}<span class="skill-label">${label}</span></div>`;
}

export function renderAbout() {
  return `
    <section class="apage wrap">
      <div class="section reveal">
        <h1 class="display h-xl reveal about-title">About me</h1>
        <div class="about-intro reveal">
          <div class="about-portrait">
            <img src="content/posts/images/etc/profil.png" style="width:100%; height:auto; display:block; border-radius:18px;">
          </div>
          <div class="about-intro-copy">
            <h2 class="display h-md">Introduction</h2>
            <p class="muted">잘 웃고, 친절할 사람이 되기 위해 노력한다. <br>AI들은 내가 집요하다고 말한다. <br>정직하고 정확한 것들이 좋다. <br>어느 곳에 있건 한결같은 사람이었다.</p>
            <nav class="socials" aria-label="Contact links" style="margin-top:16px;">
              <a href="mailto:jiyusniket@gmail.com" aria-label="Email" class="social">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M4 7l8 6 8-6"/></svg>
              </a>
              <a href="tel:010-9290-7075" aria-label="Phone" class="social">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6.6 10.8a15.3 15.3 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.5 11.5 0 0 0 3.6.6 1 1 0 0 1 1 1V19a1 1 0 0 1-1 1A17 17 0 0 1 4 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1L6.6 10.8z"/></svg>
              </a>
              <a href="https://github.com/jiyusniket-gif" aria-label="GitHub" class="social" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <div class="page wrap">
      <section class="section reveal">
        <h2 class="display h-md">Skills</h2><br>
        <p class="muted">도메인은 매번 달랐지만, 쓰는 도구와 방식은 계속 쌓여왔다.</p><br>

        <div class="skills-group">
          <p class="skills-group-label">자동화 · 스크립팅</p>
          <div class="skills-icon-row">
            ${skill('google-apps-script', 'Google Apps Script')}
            ${skill('excel', 'Excel VBA · 매크로')}
            ${skill('python', 'Python')}
            ${skill('javascript', 'JavaScript')}
          </div>
        </div>

        <div class="skills-group">
          <p class="skills-group-label">AI · 프롬프트 엔지니어링</p>
          <div class="skills-icon-row">
            ${skill('claude', 'Claude API')}
            ${skill('claude-code', 'Claude Code')}
            ${skill('openai', 'GPT')}
            ${skill('gemini', 'Gemini')}
          </div>
        </div>

        <div class="skills-group">
          <p class="skills-group-label">데이터 · 문서화</p>
          <div class="skills-icon-row">
            ${skill('excel', '엑셀 함수 · 피벗테이블')}
            ${skill('notion', 'Notion')}
            ${skill('markdown', 'Markdown · PRD 작성')}
          </div>
        </div>

        <div class="skills-group">
          <p class="skills-group-label">협업 · 커뮤니케이션 툴</p>
          <div class="skills-icon-row">
            ${skill('microsoft-office', 'Microsoft Office')}
            ${skill('slack', 'Slack')}
            ${skill('discord', 'Discord')}
            ${skill('teams', 'Microsoft Teams')}
          </div>
        </div>

        <div class="skills-group">
          <p class="skills-group-label">디자인 · 퍼블리싱</p>
          <div class="skills-icon-row">
            ${skill('figma', 'Figma')}
            ${skill('html5', 'HTML · CSS')}
            ${skill('github', 'GitHub Pages')}
          </div>
        </div>

        <div class="skills-group">
          <p class="skills-group-label">언어</p>
          <div class="skills-icon-row">
            ${skill('japan', '일본어 JLPT N1')}
            ${skill('usa', '영어 TOEIC 810')}
          </div>
        </div>
      </section>

      <section class="section reveal">
        <h2 class="display h-md">Interests</h2><br>
        <p class="muted">일 얘기가 아닌 것들.</p><br>
        <div class="grid cols-3 about-gallery">
          <div class="about-gallery-item">
            <img src="content/posts/images/etc/artoflove.jpg" style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-img); display:block;">
            <br>
            <h3 class="h-sm">에리히 프롬</h3><br>
            <p class="muted">「사랑의 기술」을 가장 좋아한다.</p>
          </div>
          <div class="about-gallery-item">
            <img src="content/posts/images/etc/tensura.png" style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-img); display:block;">
            <br>
            <h3 class="h-sm">전생했더니 슬라임이었던 건에 대하여</h3><br>
            <p class="muted">요즘 제일 좋아하는 애니메이션.</p>
          </div>
          <div class="about-gallery-item">
            <img src="content/posts/images/etc/ruripic.jpg" style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-img); display:block;">
            <br>
            <h3 class="h-sm">한로로, 이루리</h3><br>
            <p class="muted">불꺼진 방에 누워 노래 듣기를 좋아한다.</p>
          </div>
        </div>
      </section>

      <section class="section reveal cv-list">
        <a class="cv-item" href="#timeline" data-nav-post="50">
          <span class="display h-sm cv-name">한국에스웨이 — 신라호텔 발렛팀</span>
          <span class="muted cv-year">현재</span>
        </a>
        <a class="cv-item" href="#timeline" data-nav-post="30">
          <span class="display h-sm cv-name">한국아이큐비아솔루션스 (IQVIA)</span>
          <span class="muted cv-year">2024–2025</span>
        </a>
        <a class="cv-item" href="#timeline" data-nav-post="22">
          <span class="display h-sm cv-name">레어웍스 (Rare-works)</span>
          <span class="muted cv-year">2024</span>
        </a>
      </section>
    </div>
  `;
}
