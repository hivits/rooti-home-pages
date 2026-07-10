(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/logo-BeZQB8nb.png`;function t(){return`
  <header class="fixed inset-x-0 top-0 z-[200] flex h-[72px] items-center border-b border-border-200 bg-white/85 backdrop-blur-[14px] backdrop-saturate-[1.8] header-px">
    <a class="flex items-center" href="#top" aria-label="Rooti 홈">
      <img src="${e}" alt="Rooti" class="h-[34px] w-auto" />
    </a>
    <nav class="ml-auto flex items-center gap-5" aria-label="주요">
      <a class="text-[16px] font-semibold text-ink-600 no-underline transition-colors duration-150 hover:text-blue-deep" href="#contact">문의</a>
      <a class="inline-flex h-[42px] items-center rounded-[11px] bg-ink-900 px-[22px] text-[15px] font-bold text-white no-underline transition-[transform,background] duration-[180ms] hover:-translate-y-px hover:bg-blue-deep" href="https://dev.rooti.work/">로그인</a>
    </nav>
  </header>`}var n=`/assets/hero-dashboard-Bm2wm-a0.png`,r=`/assets/hero-splash-BHeTYyTF.png`,i=`w-[2.5px] origin-center rounded-[2px] bg-[#1e7ae4] animate-rt-wave motion-reduce:animate-none`,a=`
<span class="flex h-[18px] items-center gap-[3px]" aria-hidden="true">
  <span class="${i}" style="height:6px;animation-delay:-.05s"></span>
  <span class="${i}" style="height:6px;animation-delay:.32s"></span>
  <span class="${i}" style="height:9px;animation-delay:.12s"></span>
  <span class="${i}" style="height:13px;animation-delay:.5s"></span>
  <span class="${i}" style="height:17px;animation-delay:.22s"></span>
</span>`;function o(){return`
  <section id="top" class="relative grid w-full grid-cols-1 items-center gap-10 overflow-hidden bg-white pt-[120px] pb-16 section-px scroll-mt-20 md:grid-cols-[1.04fr_.96fr] md:gap-14 md:pt-[158px] md:pb-28" data-screen-label="01 Hero">
    <div class="relative" data-reveal-stagger>
      <div class="mb-8 inline-flex h-[42px] items-center gap-[11px] rounded-full border border-blue-tint-border bg-white px-[19px] text-[16px] font-semibold text-blue-deep shadow-[0_6px_18px_-8px_rgb(37_99_235/0.3)]" data-reveal>
        <span class="size-[9px] rounded-full bg-blue-primary" aria-hidden="true"></span>중증장애인 근로관리 AI 원솔루션
      </div>
      <h1 class="text-[clamp(38px,9vw,66px)] leading-[1.2] font-normal tracking-[-0.04em] text-ink-900 md:text-[66px]" data-reveal>모두를 위한 <br />더 나은 근무 환경</h1>
      <p class="mt-[30px] max-w-[560px] text-[16pt] leading-[1.65] text-ink-600" data-reveal>
        <strong class="font-bold text-ink-900">근로자 · 보호자 · 기업</strong>을 하나로 연결하는 통합 근로관리 서비스. <br />
        모두가 함께 성장하는 지속가능한 고용 환경을 만듭니다.
      </p>
    </div>

    <div class="relative flex h-[560px] items-center justify-center md:h-[806px]" data-reveal style="--reveal-delay:200ms">
      <!-- Device morph: 브라우저(대시보드) ↔ 폰(스플래시) 형태 전환 -->
      <div class="scale-[.62] min-[440px]:scale-75 md:scale-100">
        <div class="group relative h-[340px] w-[520px] overflow-hidden rounded-2xl bg-white shadow-float animate-device-frame hover:[animation-play-state:paused] motion-reduce:animate-none">
          <img src="${n}" alt="Rooti 관리자 대시보드 화면"
            class="absolute inset-x-0 top-10 h-[calc(100%-40px)] w-full object-cover object-top animate-device-fade-a group-hover:[animation-play-state:paused] motion-reduce:animate-none" />
          <img src="${r}" alt="Rooti 앱 스플래시 화면"
            class="absolute inset-0 h-full w-full object-cover opacity-0 animate-device-fade-b group-hover:[animation-play-state:paused] motion-reduce:animate-none" />

          <div class="absolute inset-x-0 top-0 z-10 flex h-10 items-center gap-1.5 border-b border-border-300 bg-white px-4 animate-device-fade-a group-hover:[animation-play-state:paused] motion-reduce:animate-none" aria-hidden="true">
            <span class="size-2.5 rounded-full bg-[#e3897e]"></span>
            <span class="size-2.5 rounded-full bg-[#e9c46a]"></span>
            <span class="size-2.5 rounded-full bg-[#8fd0a2]"></span>
            <span class="ml-2 rounded-md border border-border-300 bg-surface-inner px-2.5 py-0.5 text-[11px] font-semibold text-ink-400">app.rooti.kr/dashboard</span>
          </div>
          <div class="absolute top-2.5 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-[#0d1424] opacity-0 animate-device-fade-b group-hover:[animation-play-state:paused] motion-reduce:animate-none" aria-hidden="true"></div>
        </div>
      </div>

      <div class="absolute right-2 bottom-[42px] z-20 w-[min(80%,392px)] drop-shadow-[0_28px_50px_rgb(16_26_48/0.16)] animate-rt-float [animation-delay:.5s] motion-reduce:animate-none md:w-[392px]">
        <div class="rounded-[20px] border border-[#eff2f7] bg-white py-5 pr-[18px] pl-[22px]">
          <div class="mb-4 flex items-center gap-3.5">
            <span class="flex size-11 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgb(26_140_200/0.16)]" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M11 5.5L6.8 8.7H3.6v6.6h3.2L11 18.5V5.5Z" fill="#1A2330"/>
                <path d="M15 9.6a3.4 3.4 0 0 1 0 4.8M17.5 7.2a6.8 6.8 0 0 1 0 9.6" stroke="#1A2330" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </span>
            ${a}
            <span class="text-[16px] font-bold text-[#1e7ae4]">듣고 있어요</span>
          </div>
          <div class="flex h-[46px] items-center justify-center rounded-[23px] border border-[#ededed] text-[16px] font-semibold text-[#1a2330] shadow-[0_4px_14px_-6px_rgb(16_26_48/0.12)]">도와주세요</div>
        </div>
      </div>
    </div>
  </section>`}var s=`/assets/sga-C0DmN-Ne.png`,c=`/assets/yonsei-Cro44Swk.png`,l=`/assets/kcc-DqU6JWwm.png`,u=`/assets/bitplanet-DWgkyT48.jpg`,ee=`/assets/kisca-CzL9aEdL.svg`,te=`/assets/kuh-BhstKM18.png`,ne=`/assets/moez-BZ_ITJAw.png`,re=`/assets/useplace-CNPBFzpI.png`,d=`/assets/kpr-CjyS2xfo.png`,f=`/assets/ckd-9fbXdkq8.jpg`,p=`/assets/daiso-BVurZFpG.jpg`,m=`relative w-full section-px py-16 md:py-[104px] scroll-mt-[72px]`;function h(e,t=`text-blue-primary`){return`<div class="mb-3 text-[15px] font-bold tracking-[0.18em] ${t}">${e}</div>`}function g(e){return`<h2 class="text-[32px] leading-[1.16] font-bold tracking-[-0.03em] text-ink-900 md:text-[46px]">${e}</h2>`}function _(e,t){return`
    <div class="mb-12 text-center" data-reveal>
      ${h(e)}
      ${g(t)}
    </div>`}function v(e){return`<span class="rounded-full border border-border-300 bg-surface-chip px-3 py-2 text-[14px] font-semibold whitespace-nowrap text-ink-500">${e}</span>`}function y(e,t,n){return`
    <div class="flex items-center gap-3.5 rounded-2xl border border-[#eef1f5] bg-white px-5 py-[18px] transition-colors duration-200 hover:border-blue-tint-border hover:bg-blue-tint/40" data-reveal>
      <span class="flex size-12 shrink-0 items-center justify-center">${e}</span>
      <div>
        <div class="text-[20px] font-medium text-ink-900">${t}</div>
        <div class="mt-1 text-[16px] text-ink-400">${n}</div>
      </div>
    </div>`}var ie=[{src:s,name:`SGA솔루션`},{src:c,name:`연세올바른재활의학과의원`},{src:l,name:`KCC`},{src:u,name:`비트플래닛`},{src:ee,name:`KISCA`},{src:te,name:`건국대학교병원`},{src:ne,name:`moez`},{src:re,name:`유즈플레이스`},{src:d,name:`KPR`},{src:f,name:`종근당`},{src:p,name:`다이소`}],b=`flex items-center gap-16 pr-16 md:gap-24 md:pr-24`;function ae(){let e=ie.map(e=>`
      <figure class="flex shrink-0 flex-col items-center gap-3">
        <span class="flex h-16 items-center md:h-20">
          <img src="${e.src}" alt="${e.name} 로고"
            class="max-h-full w-auto max-w-[240px] object-contain" />
        </span>
        <figcaption class="text-[14px] font-medium whitespace-nowrap text-ink-400 md:text-[15px]">${e.name}</figcaption>
      </figure>`).join(``);return`
  <section class="relative w-full overflow-hidden bg-white pt-2 pb-16 section-px md:pb-24" data-screen-label="01b Partners">
    <div class="mb-10 text-center" data-reveal>
      ${h(`TRUSTED BY`)}
      <div class="text-[19px] font-semibold text-ink-600">Rooti와 함께하는 기업</div>
    </div>
    <div class="relative [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]" data-reveal>
      <div class="flex w-max items-start animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        <div class="${b}">${e}</div>
        <div class="${b}" aria-hidden="true">${e}</div>
      </div>
    </div>
  </section>`}var x=`/assets/logo-white-CsR2MFCp.png`,S=`
<svg width="18" height="32" viewBox="0 0 18 32" fill="none" aria-hidden="true">
  <path d="M9 2v18" stroke="#B9CBF0" stroke-width="2" stroke-dasharray="2 4" stroke-linecap="round"/>
  <path d="M3 17l6 7 6-7" stroke="#9DB4EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,C=`
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <path d="M5 12h13M13 6l6 6-6 6" stroke="#A9B2C2" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,w=`
<svg width="36" height="36" viewBox="0 0 24 24" fill="#1D4ED8" aria-hidden="true">
  <path d="M8 5.5v13l11-6.5z"/>
</svg>`,T=`
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <path d="M12 19V6M6 12l6-6 6 6" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,E=[`폐플라스틱`,`출근`,`루티 앱 실행`,`비츠봇`,`병뚜껑 분리 작업`,`업사이클링 키링 제작`];function D(){let e=E.map((e,t)=>`
      <span class="rounded-full border-[1.5px] border-blue-tint-border bg-white px-[19px] py-[11px] text-[16px] font-medium whitespace-nowrap text-ink-900 shadow-[0_6px_16px_-8px_rgb(37_99_235/0.35)] transition-transform duration-200 hover:-translate-y-0.5" data-reveal>${e}</span>
      ${t<E.length-1?C:``}`).join(``);return`
  <section id="video" class="${m} flex flex-col items-center bg-surface-alt" data-screen-label="02 Video">
    ${_(`SEE ROOTI IN 30s`,`Rooti와 함께하는 하루`)}

    <div class="relative aspect-video w-[1000px] max-w-full overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#1c3a2a,#101d36)] shadow-[0_50px_100px_-38px_rgb(16_26_48/0.46)]" data-reveal>
      <div class="absolute inset-0 bg-[linear-gradient(160deg,rgb(37_99_235/0.34),rgb(20_32_26/0.6))]"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center gap-5">
        <button class="flex size-24 cursor-pointer items-center justify-center rounded-full border-none bg-white/95 shadow-[0_16px_46px_rgb(0_0_0/0.32)] transition-transform duration-250 hover:scale-[1.07]" aria-label="소개 영상 재생">${w}</button>
        <div class="text-center text-white">
          <img src="${x}" alt="Rooti" class="inline-block h-[30px] w-auto" />
          <div class="mt-2 text-[15px] opacity-80">서비스 소개 영상 · 00:30</div>
        </div>
      </div>
      <div class="absolute right-[22px] bottom-5 left-[22px] h-[5px] rounded-full bg-white/25">
        <span class="block h-full w-[14%] rounded-full bg-white"></span>
      </div>
    </div>

    <div class="mt-14 flex flex-wrap items-center justify-center gap-[11px]" data-reveal-stagger>${e}</div>
  </section>`}var O=[{no:`1`,category:`근무 관리`,asIs:`복잡한 근무 관리`,toBe:`출퇴근부터 휴가까지 하나로 관리`,icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 13a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3Z" stroke="#fff" stroke-width="1.8"/><path d="M6 10a6 6 0 0 0 12 0M12 16v3" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>`},{no:`2`,category:`접근성`,asIs:`장애를 고려하지 않은 시스템`,toBe:`장애 유형별 맞춤형 UI·UX 제공`,icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M7 3h7l4 4v14H7z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><path d="M13 3v5h5M9.5 13l1.6 1.6L15 11" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`},{no:`3`,category:`업무·소통`,asIs:`어려운 업무 전달과 소통`,toBe:`AI 업무 안내와 빠른 연결 지원`,icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#fff" stroke-width="1.8"/><circle cx="12" cy="12" r="2.6" fill="#fff"/></svg>`},{no:`4`,category:`기업 관리`,asIs:`높은 관리 부담`,toBe:`기업을 위한 통합 근무 관리 시스템`,icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5.5 4h3l1.5 4.5L7.8 10.2a11 11 0 0 0 5 5l1.7-2.2 4.5 1.5V18a2 2 0 0 1-2.2 2A14.5 14.5 0 0 1 3.5 6.2 2 2 0 0 1 5.5 4Z" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`}];function k(){let e=O.map(e=>`
    <div class="flex flex-col" data-reveal>
      <div class="mb-2 text-center">
        <span class="inline-flex items-center justify-center text-[15px] font-semibold text-[#a9b2c2]">${e.no}</span>
        <div class="mt-2.5 text-[16px] font-semibold text-ink-600">${e.category}</div>
      </div>
      <div class="rounded-2xl border border-[#f1dad3] bg-white px-[22px] py-5 text-center">
        <span class="mb-3 inline-block rounded-lg bg-[#fbeae5] px-3 py-[5px] text-[13px] font-semibold text-[#b5564a]">As is</span>
        <div class="text-[18px] font-medium text-problem-red">${e.asIs}</div>
      </div>
      <div class="flex h-9 items-center justify-center">${S}</div>
      <div class="flex flex-1 flex-col items-center rounded-2xl border border-blue-tint-border bg-blue-tint px-[22px] pt-[22px] pb-6 text-center">
        <span class="mb-[18px] inline-block rounded-lg bg-blue-tint-border px-3 py-[5px] text-[13px] font-semibold text-blue-deep">To be!</span>
        <span class="mb-[18px] flex size-[62px] items-center justify-center rounded-full bg-blue-primary">${e.icon}</span>
        <div class="mt-auto text-[18px] font-medium text-ink-900">${e.toBe}</div>
      </div>
    </div>`).join(``);return`
  <section id="problem" class="${m} flex flex-col bg-white" data-screen-label="03 Problem">
    ${_(`THE PROBLEM`,`더 나은 근무 환경을 만드는 시작`)}
    <div class="grid grid-cols-1 items-stretch gap-5 min-[560px]:grid-cols-2 md:grid-cols-4" data-reveal-stagger>${e}</div>
  </section>`}var A=[{role:`근로자`,icon:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.4" stroke="#2563EB" stroke-width="1.8"/><path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" stroke="#2563EB" stroke-width="1.8" stroke-linecap="round"/></svg>`,pain:`“복잡한 앱과 서류가 어려워요. 오늘 무슨 일을 어떻게 해야 하는지 물어보기가 힘들어요.”`,solution:`장애 유형별 맞춤 화면과 AI 업무 안내로, 혼자서도 출근부터 업무까지 스스로 해낼 수 있어요.`},{role:`보호자`,icon:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="8.5" cy="8" r="3" stroke="#2563EB" stroke-width="1.8"/><circle cx="16" cy="9.2" r="2.4" stroke="#2563EB" stroke-width="1.8"/><path d="M3 19c0-3 2.4-5 5.5-5s5.5 2 5.5 5M14.5 19c0-2.6 1.8-4.3 4.4-4.3 1.5 0 2.8.8 3.4 2.2" stroke="#2563EB" stroke-width="1.8" stroke-linecap="round"/></svg>`,pain:`“회사에서 잘 지내고 있는지 알 수 없어 늘 불안해요. 문제가 생겨도 뒤늦게 알게 돼요.”`,solution:`실시간 근무 현황과 안심 알림으로 언제 어디서나 확인하고, 담당자와 바로 소통할 수 있어요.`},{role:`기업 관리자`,icon:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 21V5.5A1.5 1.5 0 0 1 6.5 4h7A1.5 1.5 0 0 1 15 5.5V21M15 10h2.5A1.5 1.5 0 0 1 19 11.5V21M3 21h18" stroke="#2563EB" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 8h4M8 12h4M8 16h4" stroke="#2563EB" stroke-width="1.8" stroke-linecap="round"/></svg>`,pain:`“장애인 근로자 관리 방법을 몰라 부담이 커요. 근태·업무 전달·서류 작업이 제각각이에요.”`,solution:`통합 대시보드와 AI 업무 전달로 관리 부담은 줄이고, 고용 성과는 데이터로 남겨요.`}];function j(){let e=A.map(e=>`
    <article class="flex flex-col rounded-[22px] border border-border-200 bg-white p-[30px] shadow-card transition-[translate,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_56px_-30px_rgb(16_26_48/0.35)]" data-reveal>
      <div class="mb-[22px] flex items-center gap-3.5">
        <span class="flex size-[50px] shrink-0 items-center justify-center rounded-[15px] bg-blue-tint">${e.icon}</span>
        <div class="text-[22px] font-bold text-ink-900">${e.role}</div>
      </div>
      <div class="mb-4 rounded-[14px] bg-surface-inner px-5 py-[18px]">
        <div class="mb-[9px] text-[13px] font-semibold text-ink-icon">이런 점이 힘들었어요</div>
        <p class="text-[16px] leading-[1.65] text-ink-600">${e.pain}</p>
      </div>
      <div class="mt-auto rounded-[14px] bg-blue-tint px-5 py-[18px]">
        <div class="mb-[9px] text-[13px] font-semibold text-blue-primary">루티는 이렇게 해결해요</div>
        <p class="text-[16px] leading-[1.65] font-semibold text-ink-900">${e.solution}</p>
      </div>
    </article>`).join(``);return`
  <section class="${m} flex flex-col bg-surface-alt" data-screen-label="03b Persona">
    ${_(`PROBLEM &amp; SOLUTION`,`루티가 해결하는 문제`)}
    <div class="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3" data-reveal-stagger>${e}</div>
  </section>`}var M=`/assets/worker-1-Dl5jiNIC.png`,N=`/assets/worker-2-C_h5lgf-.png`,P=`/assets/worker-3-CKpPDhVH.png`,F=`/assets/worker-4-CMQ2aZCw.png`,I=`/assets/worker-5-BPYTc2lh.jpg`,L=[{title:`장애 맞춤형 UI · UX`,desc:`청각·시각·발달장애 접근성 설계`,icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="4.6" r="2" stroke="#8693AB" stroke-width="1.8"/><path d="M4.5 8.6h15M12 8.6v5M12 13.6l-3.2 6M12 13.6l3.2 6" stroke="#8693AB" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`},{title:`쉽고 편리한 근무 관리`,desc:`출퇴근·휴가·근로일지를 앱 하나로`,icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="16" rx="2.4" stroke="#8693AB" stroke-width="1.8"/><path d="M4 9h16M8 3v4M16 3v4M9 14l2 2 4-4" stroke="#8693AB" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`},{title:`음성 안내 및 쉬운 업무 지원`,desc:`음성 안내·인식과 쉬운 업무 안내`,icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 13a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3Z" stroke="#8693AB" stroke-width="1.8"/><path d="M6 10a6 6 0 0 0 12 0M12 16v3" stroke="#8693AB" stroke-width="1.8" stroke-linecap="round"/></svg>`},{title:`빠른 소통`,desc:`관리자·보호자에게 즉시 전화 연결`,icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 4l3 .6 1 3-2 1.4a11 11 0 0 0 6 6l1.4-2 3 1 .6 3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 6 4Z" stroke="#8693AB" stroke-width="1.8" stroke-linejoin="round"/></svg>`}],R=`<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.2 4.2L19 7" stroke="#1E7AE4" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,z=`absolute inset-0 will-change-[transform,opacity] motion-reduce:animate-none`,B=`absolute inset-0 h-full w-full`,V=`absolute left-[87.69%] -mt-3 -ml-3 size-6 origin-center motion-reduce:animate-none`,H=`absolute left-[87.69%] size-[38px] rounded-full bg-[rgb(30_122_228/0.32)] animate-rt-ripple motion-reduce:animate-none`,U=`absolute top-[84%] left-[4%] h-[7%] w-[92%] origin-center rounded-[14px] animate-rt-btn-press motion-reduce:animate-none`;function W(){let e=L.map(e=>y(e.icon,e.title,e.desc)).join(``);return`
  <section class="${m} grid grid-cols-1 items-center gap-8 bg-white md:grid-cols-[.9fr_1.1fr] md:gap-20" data-screen-label="07 Worker">
    <div class="flex items-center justify-center" data-reveal>
      <div class="relative w-[300px] drop-shadow-[0_42px_66px_rgb(16_26_48/0.28)]">
        <div class="relative w-full overflow-hidden rounded-[33px] bg-[#eff2f7] pt-[217.41%]">
          <div class="${z} animate-scr-1">
            <img src="${M}" alt="Rooti 근로자 앱 - 근무시간 전" class="${B}" />
          </div>
          <div class="${z} animate-scr-2">
            <img src="${N}" alt="Rooti 근로자 앱 - 시작 전 확인" class="${B}" />
            <span class="${V} top-[32.19%] animate-rt-pop-2">${R}</span>
            <span class="${V} top-[40.31%] animate-rt-pop-3">${R}</span>
            <span class="${H} top-[32.19%] [animation-delay:2.7s]"></span>
            <span class="${H} top-[40.31%] [animation-delay:3.5s]"></span>
            <span class="${U} bg-[rgb(30_122_228/0.18)] [animation-delay:4.7s]"></span>
          </div>
          <div class="${z} animate-scr-3">
            <img src="${P}" alt="Rooti 근로자 앱 - 지금 할 일" class="${B}" />
            <span class="${U} bg-[rgb(30_122_228/0.18)] [animation-delay:7.2s]"></span>
          </div>
          <div class="${z} animate-scr-4">
            <img src="${F}" alt="Rooti 근로자 앱 - 휴식 시간" class="${B}" />
            <span class="${U} bg-[rgb(20_150_110/0.18)] [animation-delay:10s]"></span>
          </div>
          <div class="${z} animate-scr-5">
            <img src="${I}" alt="Rooti 근로자 앱 - 완료" class="${B}" />
          </div>
        </div>
      </div>
    </div>

    <div>
      <div data-reveal>
        ${h(`FOR WORKERS · 근로자 앱`)}
        ${g(`누구나 쉽게 사용할 수 있는<br />장애 맞춤형 근무 앱`)}
        <p class="mt-6 max-w-[560px] text-[16pt] text-ink-600">청각·시각·발달장애 근로자 누구나 쉽게 쓸 수 있도록,<br />접근성과 사용 편의성을 최우선으로 설계했습니다.</p>
      </div>
      <div class="mt-[38px] grid grid-cols-1 gap-5 md:grid-cols-2" data-reveal-stagger>${e}</div>
    </div>
  </section>`}var G=`/assets/guardian-home-CF_cCeCX.png`,oe=[{title:`실시간 근무 확인`,desc:`출퇴근 및 근무 현황을 실시간으로 확인`,icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#8693AB" stroke-width="1.8"/><circle cx="12" cy="12" r="2.6" fill="#8693AB"/></svg>`},{title:`근무 기록 관리`,desc:`근로일지와 제출 서류를 손쉽게 확인`,icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 3h9l4 4v14H6z" stroke="#8693AB" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 3v5h5M9 13h6M9 16h4" stroke="#8693AB" stroke-width="1.8" stroke-linecap="round"/></svg>`},{title:`공지사항 · 문의하기`,desc:`공지사항을 확인하고 궁금한 점을 바로 문의`,icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 8a6 6 0 0 0-12 0c0 6-2.5 7.5-2.5 7.5h17S18 14 18 8Z" stroke="#8693AB" stroke-width="1.8" stroke-linejoin="round"/><path d="M10.3 19a2 2 0 0 0 3.4 0" stroke="#8693AB" stroke-width="1.8" stroke-linecap="round"/></svg>`},{title:`빠른 연락`,desc:`근로자 및 관리자에게 즉시 전화 연결`,icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 4l3 .6 1 3-2 1.4a11 11 0 0 0 6 6l1.4-2 3 1 .6 3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 6 4Z" stroke="#8693AB" stroke-width="1.8" stroke-linejoin="round"/></svg>`}];function K(){let e=oe.map(e=>y(e.icon,e.title,e.desc)).join(``);return`
  <section class="${m} grid grid-cols-1 items-center gap-8 bg-surface-alt md:grid-cols-[1.1fr_.9fr] md:gap-20" data-screen-label="08 Guardian">
    <div>
      <div data-reveal>
        ${h(`FOR GUARDIANS · 보호자 앱`,`text-sky-primary`)}
        ${g(`근로자의 근무 상황을<br />언제 어디서나 확인`)}
        <p class="mt-6 max-w-[560px] text-[16pt] text-ink-600">근로자의 근무 현황을 실시간으로 확인하고,<br />멀리 있어도 언제나 안심할 수 있습니다.</p>
      </div>
      <div class="mt-[38px] grid grid-cols-1 gap-5 md:grid-cols-2" data-reveal-stagger>${e}</div>
    </div>
    <div class="order-first flex items-center justify-center md:order-none" data-reveal>
      <div class="relative w-[300px] drop-shadow-[0_42px_66px_rgb(16_26_48/0.28)]">
        <img src="${G}" alt="Rooti 보호자 앱 - 홈 화면" class="w-full" />
      </div>
    </div>
  </section>`}var q=`/assets/admin-dashboard-C4rKldk0.png`,se=[`통합 근무관리`,`업무 생성 및 배치`,`출퇴근 관리`,`근로일지`,`전체 일정 관리`,`서류 관리`,`근로자 관리`];function ce(){let e=se.map(v).join(``);return`
  <section class="${m} flex flex-col bg-white" data-screen-label="09 Admin">
    <div class="mb-9 flex flex-wrap items-end justify-between gap-5" data-reveal-stagger>
      <div data-reveal>
        ${h(`FOR ENTERPRISE · 관리자 웹`)}
        ${g(`모든 근무 관리를 하나의 웹에서`)}
      </div>
      <div class="flex flex-wrap justify-start gap-[9px] md:justify-end" data-reveal>${e}</div>
    </div>

    <div class="overflow-hidden rounded-[22px] border border-border-300 bg-white shadow-[0_50px_100px_-40px_rgb(16_26_48/0.4)]" data-reveal>
      <div class="flex h-[52px] items-center gap-[9px] border-b border-border-300 bg-white px-5">
        <span class="size-3 rounded-full bg-[#e3897e]"></span>
        <span class="size-3 rounded-full bg-[#e9c46a]"></span>
        <span class="size-3 rounded-full bg-[#8fd0a2]"></span>
        <span class="ml-4 rounded-lg border border-border-300 bg-surface-inner px-4 py-1.5 text-[14px] font-semibold text-ink-400">app.rooti.kr/dashboard</span>
      </div>
      <div class="aspect-[1909/815] w-full overflow-hidden bg-white">
        <img src="${q}" alt="Rooti 관리자 대시보드 화면" class="h-full w-full object-cover object-top" />
      </div>
    </div>
  </section>`}var le=[{value:`286`,unit:`명`,desc:`전국 거점에서 함께 일하는 장애인 고용 인원<br />(2025.12 계약 포함)`},{value:`90`,unit:`%`,desc:`고용부담금 감면 (최대)<br />PET 무인 수거 시스템 연계 도입 시 기업 혜택`}];function ue(){let e=le.map(e=>`
      <div data-reveal>
        <div class="flex items-baseline justify-center gap-2">
          <span class="text-[76px] leading-none font-normal text-blue-primary md:text-[108px]" data-count-to="${e.value}">${e.value}</span>
          <span class="text-[30px] font-semibold text-blue-primary">${e.unit}</span>
        </div>
        <p class="mt-5 text-center text-[17px] leading-[1.6] text-ink-600">${e.desc}</p>
      </div>`).join(``);return`
  <section class="${m} flex flex-col bg-surface-alt" data-screen-label="06 Outcomes">
    <div class="mb-16 text-center" data-reveal>
      ${h(`EXPECTED OUTCOMES`)}
      ${g(`Rooti가 만드는 변화`)}
    </div>
    <div class="grid grid-cols-1 items-start justify-center gap-12 min-[720px]:grid-cols-[repeat(2,minmax(0,300px))] min-[720px]:gap-[90px]" data-reveal-stagger>${e}</div>
  </section>`}var de=[{eyebrow:`ENVIRONMENT`,eyebrowClass:`text-green-primary`,title:`환경 · 자원순환`,body:`버려지는 플라스틱이 근로자의 손을 거쳐<br />새로운 가치로 다시 태어납니다.`,pills:[`자원순환`,`비츠봇 운영`,`업사이클링 제품`],watermark:`<svg width="190" height="190" viewBox="0 0 24 24" fill="none"><path d="M5 19c0-8 6-13 15-14-1 10-7 15-14 14Z" fill="#E1F2E9"/><path d="M11 13c2-2 5-3.5 7-4" stroke="#CDE9D9" stroke-width="1.1" stroke-linecap="round"/></svg>`},{eyebrow:`SOCIAL`,eyebrowClass:`text-sky-primary`,title:`사회`,body:`중증장애인에게 안정적인 일자리를 제공하고<br />자립을 지원합니다.`,pills:[`중증장애인 일자리`,`안정적인 근무 환경`],watermark:`<svg width="190" height="190" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.2" fill="#DCEFFA"/><circle cx="16.5" cy="9.5" r="2.4" fill="#DCEFFA"/><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="#DCEFFA" stroke-width="1.3" stroke-linecap="round"/><path d="M14.5 19c.2-2.4 1.8-4 4-4 1.6 0 3 .9 3.5 2.4" stroke="#DCEFFA" stroke-width="1.1" stroke-linecap="round"/></svg>`},{eyebrow:`GOVERNANCE`,eyebrowClass:`text-blue-deep`,title:`지배구조`,body:`근태와 업무 데이터를 체계적으로 관리해<br />투명한 운영을 만듭니다.`,pills:[`체계적인 근태 관리`,`업무 관리`],watermark:`<svg width="190" height="190" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 2.6v5.2c0 4.4-3 8-7 9.2-4-1.2-7-4.8-7-9.2V5.6L12 3Z" fill="#E4EAFC"/><path d="M8.8 12l2.3 2.3 4-4.4" stroke="#D2DCFA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`}];function fe(){let e=de.map(e=>`
    <article class="relative flex flex-col overflow-hidden rounded-[26px] border border-border-300 bg-white px-[34px] py-9 shadow-card transition-[translate,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_56px_-30px_rgb(16_26_48/0.35)]" data-reveal>
      <div class="mb-[18px]">
        <div class="mb-1.5 text-[14px] font-semibold tracking-[0.12em] ${e.eyebrowClass}">${e.eyebrow}</div>
        <div class="text-[30px] font-semibold tracking-[-0.02em] text-ink-900">${e.title}</div>
      </div>
      <span class="pointer-events-none absolute -right-[30px] -bottom-[34px] opacity-45" aria-hidden="true">${e.watermark}</span>
      <p class="relative z-1 mb-[26px] text-[17px] leading-[1.65] text-ink-600">${e.body}</p>
      <div class="relative z-1 mt-auto flex flex-wrap gap-[7px]">
        ${e.pills.map(v).join(``)}
      </div>
    </article>`).join(``);return`
  <section id="esg" class="${m} flex flex-col overflow-hidden bg-white" data-screen-label="04 ESG">
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(37_99_235/0.05)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:linear-gradient(to_bottom,transparent,#000_28%,#000_72%,transparent)]" aria-hidden="true"></div>
    <div class="relative mb-12 text-center" data-reveal>
      ${h(`ESG VALUE`)}
      ${g(`기술로 실천하는 ESG`)}
      <p class="mt-3.5 text-[19px] leading-[1.6] text-ink-600">모두가 함께 일할 수 있는 환경을 만들며 사회적 가치를 실현합니다.</p>
    </div>
    <div class="relative grid grid-cols-1 items-stretch gap-7 md:grid-cols-3" data-reveal-stagger>${e}</div>
  </section>`}var pe=[{label:`회사명`,value:`하이비츠`},{label:`대표자`,value:`최찬숙`},{label:`사업자등록번호`,value:`788-86-01781`},{label:`주소`,value:`서울 구로구 디지털로31길 62<br />1013, 1014호 (구로동, 아티스포럼)`},{label:`대표번호`,value:`02-3281-8880`},{label:`이메일`,value:`<a class="text-white/92 no-underline hover:underline" href="mailto:hivits@naver.com">hivits@naver.com</a>`}],J=`mb-5 text-[16px] font-semibold tracking-[0.16em] text-white/50`,Y=`text-[16px] text-white/90 no-underline hover:text-white`;function me(){return`
  <footer id="contact" class="relative flex w-full flex-col items-center overflow-hidden bg-[linear-gradient(150deg,#142a52,#0d1b38)] pt-[120px] pb-14 section-px scroll-mt-[72px]" data-screen-label="10 Contact">
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.08)_1.3px,transparent_1.3px)] bg-[size:34px_34px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute -top-[140px] -left-[90px] size-[480px] rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.14),transparent_70%)]" aria-hidden="true"></div>

    <div class="relative mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]" data-reveal-stagger>
      <div data-reveal>
        <img src="${x}" alt="Rooti" class="h-[46px] w-auto opacity-95" />
        <h2 class="mt-[26px] text-[32px] leading-[1.16] font-medium tracking-[-0.035em] text-white">모두가 함께 일할 수 있는<br />환경을 만듭니다.</h2>
        <p class="mt-[22px] max-w-[380px] text-[16px] text-white/78">루티는 장애인 근로자의 자립과 기업의 ESG 경영을 함께 지원합니다. 도입을 검토하고 계신다면, 기업 환경에 맞는 방안을 안내해 드립니다.</p>
      </div>

      <div data-reveal>
        <div class="${J}">회사정보</div>
        <div class="flex flex-col gap-[18px]">${pe.map(e=>`
      <div>
        <div class="mb-[5px] text-[14px] text-white/50">${e.label}</div>
        <div class="text-[16px] leading-[1.6] text-white/92">${e.value}</div>
      </div>`).join(``)}</div>
      </div>

      <div data-reveal>
        <div class="${J}">정책</div>
        <div class="flex flex-col gap-3">
          <a class="${Y}" href="#">개인정보처리방침</a>
          <a class="${Y}" href="#">이용약관</a>
        </div>
        <div class="${J} mt-[30px] mb-[18px]">고객지원</div>
        <div class="flex flex-col gap-3">
          <a class="${Y}" href="#contact">문의</a>
          <a class="${Y}" href="https://dev.rooti.work/">로그인</a>
        </div>
      </div>
    </div>

    <div class="relative mx-auto mt-9 w-full max-w-[1320px] text-[14px] text-white/50">© 2026 Rooti. ESG · Accessibility · Inclusive Design</div>
  </footer>`}var X=[`opacity-0`,`translate-y-2`,`pointer-events-none`],Z=[`opacity-100`,`translate-y-0`,`pointer-events-auto`];function he(){return`
  <button
    class="fixed right-8 bottom-8 z-[300] flex size-14 ${X.join(` `)} cursor-pointer items-center justify-center rounded-full border-none bg-ink-900 text-white shadow-[0_14px_34px_-10px_rgb(16_26_48/0.6)] transition-all duration-250 hover:bg-blue-deep"
    aria-label="맨 위로"
    data-back-to-top
  >
    ${T}
  </button>`}function ge(){let e=document.querySelector(`[data-back-to-top]`);if(!e)return;e.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})});let t=()=>{let t=window.scrollY>600;e.classList.remove(...t?X:Z),e.classList.add(...t?Z:X)};t(),window.addEventListener(`scroll`,t,{passive:!0})}var Q=`w-[5px] origin-center rounded-full animate-rt-wave motion-reduce:animate-none`,$=`
<span class="flex h-9 items-end justify-center gap-[5px]" aria-hidden="true">
  <span class="${Q} bg-blue-tint-border" style="height:12px;animation-delay:.55s"></span>
  <span class="${Q} bg-sky-primary" style="height:20px;animation-delay:.4s"></span>
  <span class="${Q} bg-blue-primary" style="height:28px;animation-delay:.25s"></span>
  <span class="${Q} bg-blue-deep" style="height:36px;animation-delay:.1s"></span>
  <span class="${Q} bg-blue-primary" style="height:28px;animation-delay:.32s"></span>
  <span class="${Q} bg-sky-primary" style="height:20px;animation-delay:.48s"></span>
  <span class="${Q} bg-blue-tint-border" style="height:12px;animation-delay:.62s"></span>
</span>`;function _e(){return`
  <div
    class="fixed inset-0 z-[400] flex translate-y-0 flex-col items-center justify-center gap-7 bg-white transition-[translate] duration-700 ease-[cubic-bezier(.45,0,.15,1)]"
    role="status"
    aria-label="페이지 로딩 중"
    data-loader
  >
    <div class="flex flex-col items-center gap-7 transition-opacity duration-300" data-loader-inner>
      <img src="${e}" alt="Rooti" class="h-11 w-auto" />
      ${$}
    </div>
  </div>`}function ve(e){let t=document.querySelector(`[data-loader]`);if(!t){e();return}if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){t.remove(),e();return}document.documentElement.style.overflow=`hidden`;let n=()=>{document.documentElement.style.overflow=``,t.querySelector(`[data-loader-inner]`)?.classList.add(`opacity-0`),t.classList.remove(`translate-y-0`),t.classList.add(`-translate-y-full`,`pointer-events-none`),e(),t.addEventListener(`transitionend`,()=>t.remove(),{once:!0}),setTimeout(()=>t.remove(),1200)},r=new Promise(e=>{document.readyState===`complete`?e():window.addEventListener(`load`,()=>e(),{once:!0})}),i=new Promise(e=>setTimeout(e,1100)),a=new Promise(e=>setTimeout(e,3e3));Promise.race([Promise.all([r,i]).then(()=>void 0),a]).then(n)}var ye=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;function be(){document.querySelectorAll(`[data-reveal-stagger]`).forEach(e=>{e.querySelectorAll(`:scope > [data-reveal]`).forEach((e,t)=>{e.style.setProperty(`--reveal-delay`,`${t*80}ms`)})});let e=document.querySelectorAll(`[data-reveal]`);if(!e.length)return;let t=e=>{e.removeAttribute(`data-reveal`),e.style.removeProperty(`--reveal-delay`)},n=new IntersectionObserver(e=>{for(let r of e){if(!r.isIntersecting)continue;let e=r.target;e.classList.add(`is-revealed`),e.addEventListener(`transitionend`,()=>t(e),{once:!0}),setTimeout(()=>t(e),1800),n.unobserve(e)}},{threshold:.15,rootMargin:`0px 0px -8% 0px`});e.forEach(e=>n.observe(e))}function xe(){let e=document.querySelectorAll(`[data-count-to]`);if(!e.length)return;let t=e=>{let t=Number(e.dataset.countTo??`0`);if(ye||!Number.isFinite(t)){e.textContent=String(t);return}let n=0,r=i=>{n||=i;let a=Math.min((i-n)/1600,1),o=1-2**(-10*a);e.textContent=String(Math.round(t*o)),a<1?requestAnimationFrame(r):e.textContent=String(t)};requestAnimationFrame(r)},n=new IntersectionObserver(e=>{for(let r of e)r.isIntersecting&&(t(r.target),n.unobserve(r.target))},{threshold:.5});e.forEach(e=>n.observe(e))}function Se(){let e=document.querySelector(`header`);if(!e)return;let t=()=>{e.classList.toggle(`is-scrolled`,window.scrollY>8)};t(),window.addEventListener(`scroll`,t,{passive:!0})}document.documentElement.classList.add(`js`);var Ce=document.querySelector(`#app`);Ce.innerHTML=`
  ${_e()}
  ${t()}
  <main>
    ${o()}
    ${ae()}
    ${D()}
    ${k()}
    ${j()}
    ${W()}
    ${K()}
    ${ce()}
    ${ue()}
    ${fe()}
  </main>
  ${me()}
  ${he()}
`,ge(),Se(),ve(()=>{be(),xe()});