export function renderHome() {
  return `
    <div class="page wrap">

      <section class="section reveal quote-block">
        <blockquote class="display quote-text">문제를 푸는 비결은 늘 같습니다</blockquote>
        </br>
        <p class="muted">그리고 저에게는 이미 습관이었습니다.</p>
      </section>

      <section class="section reveal" style="margin-top:clamp(24px, 4vw, 48px);">
        <img src="content/posts/images/etc/main.png" style="width:100%; height:auto; display:block; border-radius:var(--radius-img);">
      </section>

      <section class="section grid cols-3" style="margin-top:clamp(24px, 4vw, 48px);">
        <a class="reveal col-item" href="#post/51" data-nav-post="51">
          <hr class="rule" />
          <h3 class="h-sm">보고, 듣고</h3>
          <p class="muted">경영 전략적 시선으로</br>관찰하고, 듣기</p>
        </a>
        <a class="reveal col-item" href="#post/32" data-nav-post="32">
          <hr class="rule" />
          <h3 class="h-sm">쓰고</h3>
          <p class="muted">문서화를 통해 정보를</br>구체화하고 컨센서스를 형성</p>
        </a>
        <a class="reveal col-item" href="#post/41" data-nav-post="41">
          <hr class="rule" />
          <h3 class="h-sm">만들기</h3>
          <p class="muted">AI 기술을 활용하여 반복적인 업무를 자동화하고, 더 나은 프로세스 만들기</p>
        </a>
      </section>

      <section class="section feature feature-link" data-nav-post="32">
        <div class="feature-copy reveal">
          <h2 class="display h-md">발렛 주차장의 혼란을, <br>구조로 바꿨습니다</h2>
          <p class="muted feature-sub">수기작성에 가까운 업무 배정 프로세스를 재정의하고 웹앱으로 만들어 지금 현장에 도입 예정입니다.</p>
        </div>
        <div class="feature-media reveal">
          <div class="media-sq" style="background-image:url('content/posts/images/50/50.jpg'); background-size:cover; background-position:center; border-radius:var(--radius-img); overflow:hidden;"></div>
        </div>
      </section>

      <section class="section feature reverse feature-link" data-nav-post="41">
        <div class="feature-media reveal">
          <div class="media-sq" style="border-radius:var(--radius-img); overflow:hidden; display:flex; align-items:center;">
            <img src="content/posts/images/40/41.png" style="width:100%; height:auto; display:block;">
          </div>
        </div>
        <div class="feature-copy reveal">
          <h2 class="display h-md">챗봇을 사용한</br>블로그 자동발행</h2>
          <p class="muted feature-sub">텔레그램으로 맛집 인터뷰를 나누면, Claude API가 정리하고 검토를 거쳐 영어·일본어로 발행하는 에이전트.</p>
        </div>
      </section>

      <section class="section reveal bg-nav-link" data-nav="timeline">
        <p class="eyebrow">BACKGROUND</p>
        <h2 class="display h-md">제약, 건설, 호스피탈리티 — 경계를 넘을 수 있는 이유</h2>
        <p class="muted longform-body">전공은 경영학이었지만, 실제로 일해온 현장은 제약 운영, 건설 시공 관리, 호텔 발렛 운영까지 서로 완전히 다른 업종이었습니다. 그럼에도 저는 여전히 현장을 구조적으로 관찰하고, 매뉴얼로 남기고, 반복되는 일을 시스템으로 바꿉니다. 어떤 전문가와도 그들의 언어로 대화하고 그 안의 구조를 함께 찾아낼 수 있습니다. 일본어 능력까지 더해, 언어의 경계 없이 협업합니다. 제가 걸어온 길을 소개합니다.<span class="nav-arrow">↗</span></p>
      </section>


      <section class="section reveal">
        <h2 class="display h-md">다양한 프로젝트들을 통해 만나보세요</h2>
        </br>
        <div class="gallery">
          <div class="tile" data-nav-post="20"   style="background-image:url('content/posts/images/20/20.png'); background-size:cover; background-position:center;"><span class="tile-title">사장님이 되고 싶어진 이유</span></div>
          <div class="tile" data-nav-post="42-1" style="background-image:url('content/posts/images/40/gongsamaster_moc.png'); background-size:cover; background-position:center;"><span class="tile-title">공사마스터</span></div>
          <div class="tile" data-nav-post="34"   style="background-image:url('content/posts/images/30/34.png'); background-size:cover; background-position:center;"><span class="tile-title">회의록 작성 프롬프트</span></div>
          <div class="tile" data-nav-post="32"   style="background-image:url('content/posts/images/30/32.png'); background-size:cover; background-position:center;"><span class="tile-title">나에게 매뉴얼이란</span></div>
          <div class="tile" data-nav-post="31"   style="background-image:url('content/posts/images/30/vbaimg.png'); background-size:cover; background-position:center;"><span class="tile-title">서류 자동 배치 매크로</span></div>
          <div class="tile" data-nav-post="21"   style="background-image:url('content/posts/images/20/21.png'); background-size:cover; background-position:center;"><span class="tile-title">실내건축기사</span></div>
          <div class="tile" data-nav-post="43"   style="background-image:url('content/posts/images/40/43.png'); background-size:cover; background-position:center;"><span class="tile-title">포트폴리오 사이트 만들기</span></div>
        </div>
      </section>

    </div>
  `;
}
