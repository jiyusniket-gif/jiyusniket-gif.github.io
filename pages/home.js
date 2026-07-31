export function renderHome() {
  return `
    <div class="page wrap">

      <section class="section reveal quote-block">
        <blockquote class="display quote-text">문제를 푸는 비결은 늘 같습니다 → 구조를 보는 습관이, 그대로 실행이 됩니다.</blockquote>
        </br>
        <p class="muted">그리고 저에게는 이미 습관이었습니다 → 현장에서 문제를 발견하고, 직접 코드로 구현하고, 사용자 반응으로 다시 고칩니다.</p>
      </section>

      <section class="section reveal" style="margin-top:clamp(24px, 4vw, 48px);">
        <img src="content/posts/images/etc/main.png" style="width:100%; height:auto; display:block; border-radius:var(--radius-img);">
      </section>

      <section class="section feature feature-link" data-nav-post="52">
        <div class="feature-copy reveal">
          <h2 class="display h-md">회의실이 아니라<br>현장에서 문제를 봅니다</h2>
          <p class="muted feature-sub">"구글폼만 고쳐달라"는 요청 뒤에서, 헬퍼·실무진·관리자 세 층위를 직접 관찰해 진짜 병목을 다시 짚었습니다.</p>
        </div>
        <div class="feature-media reveal">
          <div class="media-sq" style="background-image:url('content/posts/images/50/50-1.png'); background-size:cover; background-position:center; border-radius:var(--radius-img); overflow:hidden;"></div>
        </div>
      </section>

      <section class="section feature reverse feature-link" data-nav-post="50">
        <div class="feature-media reveal">
          <div class="media-sq" style="background-image:url('content/posts/images/50/50.jpg'); background-size:cover; background-position:center; border-radius:var(--radius-img); overflow:hidden;"></div>
        </div>
        <div class="feature-copy reveal">
          <h2 class="display h-md">기획을<br>코드로 옮길 수 있습니다</h2>
          <p class="muted feature-sub">수기작성에 가까운 업무 배정 프로세스를 재정의하고, Google Apps Script 웹앱으로 직접 설계·구현해 시범 운영을 앞두고 있습니다.</p>
        </div>
      </section>

      <section class="section feature feature-link" data-nav-post="53">
        <div class="feature-copy reveal">
          <h2 class="display h-md">감이 아니라<br>반응으로 다시 설계합니다</h2>
          <p class="muted feature-sub">배포 전 연령대·디지털 친화도별 사용자 테스트에서 텍스트 가이드 이해도가 낮다는 걸 발견해, UI와 안내 방식을 전면 수정했습니다.</p>
        </div>
        <div class="feature-media reveal">
          <div class="media-sq grain g-splatter" style="border-radius:var(--radius-img); overflow:hidden;"></div>
        </div>
      </section>

      <section class="section feature reverse feature-link" data-nav-post="54">
        <div class="feature-media reveal">
          <div class="media-sq" style="border-radius:var(--radius-img); overflow:hidden; display:flex; align-items:center;">
            <img src="content/posts/images/etc/profil.png" style="width:100%; height:auto; display:block;">
          </div>
        </div>
        <div class="feature-copy reveal">
          <h2 class="display h-md">언어는 트레이닝할 수 있지만,<br>문화를 읽는 감각은 시간이 만든다</h2>
          <p class="muted feature-sub">구조화 습관은 일하는 방식만이 아니라 소통 방식에도 적용됩니다. JLPT N1, 원어민에게 3.5년간 배운 일본어로 문화의 구조까지 읽어냅니다.</p>
        </div>
      </section>

      <section class="section reveal bg-nav-link" data-nav="timeline">
        <p class="eyebrow">BACKGROUND</p>
        <h2 class="display h-md">제약, 건설, 호스피탈리티 — CS경험</h2>
        <p class="muted longform-body">제약 콜센터의 오퍼레이션, 발주처 및 관계자과 계속해서 소통해야하는 건설 시공 관리, 직접 CS를 봐야했던 호텔과 내부고객 CS를 처리하는 호텔 발렛 운영까지 서로 완전히 다른 업종이었습니다. 그럼에도 저는 여전히 현장을 구조적으로 관찰하고, 매뉴얼로 남기고, 반복되는 일을 시스템으로 바꿉니다. 어떤 전문가와도 그들의 언어로 대화하고 그 안의 구조를 함께 찾아낼 수 있습니다. 일본어 능력까지 더해, 언어의 경계 없이 협업합니다. 제가 걸어온 길을 소개합니다.<span class="nav-arrow">↗</span></p>
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
