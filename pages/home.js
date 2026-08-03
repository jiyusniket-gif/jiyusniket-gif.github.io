export function renderHome() {
  return `
    <div class="page wrap">

      <section class="section reveal quote-block">
        <blockquote class="display quote-text">구조를 보는 습관이, 그대로 실행이 됩니다.</blockquote>
        </br>
        <p class="muted">안녕하세요!<br>대표 프로젝트 사례로 직무에 대한 경험을 공유합니다.</p>
      </section>

      <section class="section feature reverse feature-link" data-nav-post="50-1" style="margin-top:clamp(28px, 4vw, 48px);">
        <div class="feature-media reveal">
          <div class="media-sq" style="background-image:url('content/posts/images/etc/home_1.png'); background-size:cover; background-position:center; border-radius:var(--radius-img); overflow:hidden;"></div>
        </div>
        <div class="feature-copy reveal">
          <h2 class="display h-md">현장에서 문제를 봅니다</h2>
          <p class="muted feature-sub">아르바이트로 시작한 현장에서 업무 자동화 프로젝트를 시작하다</p>
        </div>
      </section>

      <section class="section feature reverse feature-link" data-nav-post="50-2" style="margin-top:clamp(28px, 4vw, 48px);">
        <div class="feature-media reveal">
          <div class="media-sq" style="background-image:url('content/posts/images/etc/home_2.png'); background-size:cover; background-position:center; border-radius:var(--radius-img); overflow:hidden;"></div>
        </div>
        <div class="feature-copy reveal">
          <h2 class="display h-md">기획을 코드로 옮길 수 있습니다</h2>
          <p class="muted feature-sub">수기작성에 가까운 업무 배정 프로세스를 재정의하고, Google Apps Script 웹앱으로 직접 설계·구현하기</p>
        </div>
      </section>

      <section class="section feature reverse feature-link" data-nav-post="50-3" style="margin-top:clamp(28px, 4vw, 48px);">
        <div class="feature-media reveal">
          <div class="media-sq" style="background-image:url('content/posts/images/etc/home_3.png'); background-size:cover; background-position:center; border-radius:var(--radius-img); overflow:hidden;"></div>
        </div>
        <div class="feature-copy reveal">
          <h2 class="display h-md">감이 아니라 반응으로 다시 설계합니다</h2>
          <p class="muted feature-sub">테스트 배포에서 사용자 반응을 분석하여 UI와 안내 방식을 전면 수정하기</p>
        </div>
      </section>

      <section class="section reveal quote-block">
        <blockquote class="display h-md">그밖의 JD와 관련된 FAQ</blockquote></br>
        <p class="muted faq-link" data-nav-post="51">JAPANESE LANGUAGE PROFICIENCY - 언어는 트레이닝할 수 있지만, 문화를 읽는 감각은 시간이 만든다<span class="nav-arrow">↗</span></p>
        <p class="muted faq-link" data-nav-post="52">BACKGROUND - 제약, 건설, 호스피탈리티,다른 업종 같은 패턴 <span class="nav-arrow">↗</span></p>
      </section>

      <section class="section feature reverse feature-link" data-nav-post="53">
        <div class="feature-media reveal">
          <div class="media-sq" style="background-image:url('content/posts/images/50/52.png'); background-size:cover; background-position:center; border-radius:var(--radius-img); overflow:hidden;"></div>
        </div>
        <div class="feature-copy reveal">
          <h2 class="display h-md">FOR CHANNEL TALK</h2>
          <p class="muted feature-sub">지원 준비를 하며 채널톡의 ALF 도입 경로를 살펴봤습니다. <br>AI Product Owner 로서 가장 처음 하고싶은 일을 채널톡과 이야기하고 싶습니다.</p>
        </div>
      </section>


    </div>
  `;
}
