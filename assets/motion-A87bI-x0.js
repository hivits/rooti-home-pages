(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/logo-BeZQB8nb.png`;function t({homeHref:t=`#top`}={}){return`
  <header class="fixed inset-x-0 top-0 z-[200] flex h-[72px] items-center border-b border-border-200 bg-white/85 backdrop-blur-[14px] backdrop-saturate-[1.8] header-px">
    <a class="flex items-center" href="${t}" aria-label="Rooti 홈">
      <img src="${e}" alt="Rooti" class="h-[34px] w-auto" />
    </a>
    <nav class="ml-auto flex items-center gap-5" aria-label="주요">
      <a class="text-[16px] font-semibold text-ink-600 no-underline transition-colors duration-150 hover:text-blue-deep" href="#contact">문의</a>
      <a class="inline-flex h-[42px] items-center rounded-[11px] bg-ink-900 px-[22px] text-[15px] font-bold text-white no-underline transition-[transform,background] duration-[180ms] hover:-translate-y-px hover:bg-blue-deep" href="https://dev.rooti.work/">로그인</a>
    </nav>
  </header>`}var n=`/assets/logo-white-CsR2MFCp.png`,r=`
<svg width="18" height="32" viewBox="0 0 18 32" fill="none" aria-hidden="true">
  <path d="M9 2v18" stroke="#B9CBF0" stroke-width="2" stroke-dasharray="2 4" stroke-linecap="round"/>
  <path d="M3 17l6 7 6-7" stroke="#9DB4EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,i=`
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <path d="M5 12h13M13 6l6 6-6 6" stroke="#A9B2C2" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,a=`
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <path d="M12 19V6M6 12l6-6 6 6" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,o=(e,t,n)=>({slug:e,title:t,href:`/policy/${e}/`,summary:n}),s=[o(`privacy`,`개인정보처리방침`,`수집 항목, 보유 기간, 처리 위탁·국외 이전, 정보주체의 권리와 보호책임자 안내`),o(`terms`,`서비스 이용약관`,`근로자·보호자·기업 회원의 계정 발급, 서비스 이용, 탈퇴와 책임에 관한 약관`),o(`consent`,`개인정보 수집·이용 동의`,`가입·근로자 등록 시 받는 필수·선택 동의, 민감정보·고유식별정보·제3자 제공·국외 이전 동의 문안`),o(`dpa`,`기업 고객 개인정보 처리위탁 약관`,`기업(위탁자)과 회사(수탁자) 간 근로자 개인정보 처리 책임, 재위탁 현황, 계약 종료 시 조치`)],c=[{label:`회사명`,value:`하이비츠`},{label:`대표자`,value:`최찬숙`},{label:`사업자등록번호`,value:`788-86-01781`},{label:`주소`,value:`서울 구로구 디지털로31길 62<br />1013, 1014호 (구로동, 아티스포럼)`},{label:`대표번호`,value:`02-3281-8880`},{label:`이메일`,value:`<a class="text-white/92 no-underline hover:underline" href="mailto:hivits@naver.com">hivits@naver.com</a>`}],l=`mb-5 text-[16px] font-semibold tracking-[0.16em] text-white/50`,u=`text-[16px] text-white/90 no-underline hover:text-white`;function d(){let e=document.querySelector(`#contact`),t=e?.querySelector(`[data-footer-glow]`);if(!e||!t)return;let n;e.addEventListener(`pointermove`,r=>{if(r.pointerType!==`mouse`)return;clearTimeout(n);let i=e.getBoundingClientRect(),a=r.clientX-i.left-150,o=r.clientY-i.top-100;t.style.animation=`none`,t.style.transition=`none`,t.style.transform=`translate(${a}px, ${o}px)`}),e.addEventListener(`pointerleave`,()=>{t.style.transition=`transform 0.7s ease-out`,t.style.transform=``,clearTimeout(n),n=setTimeout(()=>{t.style.animation=``,t.style.transition=``},720)})}function f(){return`
  <footer id="contact" class="relative flex w-full flex-col items-center overflow-hidden bg-[linear-gradient(150deg,#142a52,#0d1b38)] pt-[120px] pb-14 section-px scroll-mt-[72px]" data-screen-label="10 Contact">
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.08)_1.3px,transparent_1.3px)] bg-[size:34px_34px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute -top-[140px] -left-[90px] size-[480px] rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.14),transparent_70%)] will-change-transform animate-glow-drift motion-reduce:animate-none" aria-hidden="true" data-footer-glow></div>

    <div class="relative mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]" data-reveal-stagger>
      <div data-reveal>
        <img src="${n}" alt="Rooti" class="h-[46px] w-auto opacity-95" />
        <h2 class="mt-[26px] text-[32px] leading-[1.16] font-medium tracking-[-0.035em] text-white">모두가 함께 일할 수 있는<br />환경을 만듭니다.</h2>
        <p class="mt-[22px] max-w-[380px] text-[16px] text-white/78">루티는 장애인 근로자의 자립과 기업의 ESG 경영을 함께 지원합니다. 도입을 검토하고 계신다면, 기업 환경에 맞는 방안을 안내해 드립니다.</p>
      </div>

      <div data-reveal>
        <div class="${l}">회사정보</div>
        <div class="flex flex-col gap-[18px]">${c.map(e=>`
      <div>
        <div class="mb-[5px] text-[14px] text-white/50">${e.label}</div>
        <div class="text-[16px] leading-[1.6] text-white/92">${e.value}</div>
      </div>`).join(``)}</div>
      </div>

      <div data-reveal>
        <div class="${l}">정책</div>
        <div class="flex flex-col gap-3">${s.map(e=>`<a class="${u}" href="${e.href}">${e.title}</a>`).join(``)}</div>
        <div class="${l} mt-[30px] mb-[18px]">고객지원</div>
        <div class="flex flex-col gap-3">
          <a class="${u}" href="#contact">문의</a>
          <a class="${u}" href="https://dev.rooti.work/">로그인</a>
        </div>
      </div>
    </div>

    <div class="relative mx-auto mt-9 w-full max-w-[1320px] text-[14px] text-white/50">© 2026 Rooti. ESG · Accessibility · Inclusive Design</div>
  </footer>`}var p=[`opacity-0`,`translate-y-2`,`pointer-events-none`],m=[`opacity-100`,`translate-y-0`,`pointer-events-auto`];function h(){return`
  <button
    class="fixed right-8 bottom-8 z-[300] flex size-14 ${p.join(` `)} cursor-pointer items-center justify-center rounded-full border-none bg-ink-900 text-white shadow-[0_14px_34px_-10px_rgb(16_26_48/0.6)] transition-all duration-250 hover:bg-blue-deep"
    aria-label="맨 위로"
    data-back-to-top
  >
    ${a}
  </button>`}function g(){let e=document.querySelector(`[data-back-to-top]`);if(!e)return;e.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})});let t=()=>{let t=window.scrollY>600;e.classList.remove(...t?p:m),e.classList.add(...t?m:p)};t(),window.addEventListener(`scroll`,t,{passive:!0})}var _=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;function v(){document.querySelectorAll(`[data-reveal-stagger]`).forEach(e=>{e.querySelectorAll(`:scope > [data-reveal]`).forEach((e,t)=>{e.style.setProperty(`--reveal-delay`,`${t*80}ms`)})});let e=document.querySelectorAll(`[data-reveal]`);if(!e.length)return;let t=e=>{e.removeAttribute(`data-reveal`),e.style.removeProperty(`--reveal-delay`)},n=new IntersectionObserver(e=>{for(let r of e){if(!r.isIntersecting)continue;let e=r.target;e.classList.add(`is-revealed`),e.addEventListener(`transitionend`,()=>t(e),{once:!0}),setTimeout(()=>t(e),1800),n.unobserve(e)}},{threshold:.15,rootMargin:`0px 0px -8% 0px`});e.forEach(e=>n.observe(e))}function y(){let e=document.querySelectorAll(`[data-count-to]`);if(!e.length)return;let t=e=>{let t=Number(e.dataset.countTo??`0`);if(_||!Number.isFinite(t)){e.textContent=String(t);return}let n=0,r=i=>{n||=i;let a=Math.min((i-n)/1600,1),o=1-2**(-10*a);e.textContent=String(Math.round(t*o)),a<1?requestAnimationFrame(r):e.textContent=String(t)};requestAnimationFrame(r)},n=new IntersectionObserver(e=>{for(let r of e)r.isIntersecting&&(t(r.target),n.unobserve(r.target))},{threshold:.5});e.forEach(e=>n.observe(e))}function b(){let e=document.querySelector(`header`);if(!e)return;let t=()=>{e.classList.toggle(`is-scrolled`,window.scrollY>8)};t(),window.addEventListener(`scroll`,t,{passive:!0})}export{g as a,s as c,n as d,t as f,h as i,r as l,b as n,f as o,e as p,v as r,d as s,y as t,i as u};