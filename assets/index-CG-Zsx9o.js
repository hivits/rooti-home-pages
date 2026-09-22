import{a as e,c as t,f as n,i as r,n as i,o as a,s as o}from"./motion-A87bI-x0.js";import{t as s}from"./mount-D9FiDn5g.js";function c(){let e=t.map(e=>`
      <li>
        <a class="group flex h-full flex-col rounded-[22px] border border-border-200 bg-white p-7 no-underline shadow-card transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-blue-tint-border hover:shadow-[0_26px_56px_-30px_rgb(16_26_48/0.35)]" href="${e.href}">
          <span class="text-[20px] font-bold text-ink-900">${e.title}</span>
          <span class="mt-2 text-[15px] leading-[1.7] text-ink-600">${e.summary}</span>
          <span class="mt-auto inline-flex items-center gap-1 pt-6 text-[14px] font-semibold text-blue-deep">
            전문 보기
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="transition-transform duration-200 group-hover:translate-x-0.5"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </a>
      </li>`).join(``);return`
  ${n({homeHref:`/`})}
  <main class="w-full pt-[72px] section-px">
    <div class="mx-auto w-full max-w-[1320px] py-12 md:py-20">
      <header class="max-w-[760px]">
        <div class="mb-3 text-[14px] font-bold tracking-[0.18em] text-blue-primary">POLICY</div>
        <h1 class="text-[32px] leading-[1.2] font-bold tracking-[-0.03em] text-ink-900 md:text-[44px]">정책 · 약관</h1>
        <p class="mt-4 text-[16px] leading-[1.7] text-ink-600">루티(Rooti) 서비스를 이용하시는 근로자·보호자·기업 담당자께 적용되는 정책과 약관입니다. 문의는 개인정보 보호책임자(<a class="font-semibold text-blue-deep" href="mailto:xixn2@efface.dev">xixn2@efface.dev</a>)에게 보내주세요.</p>
      </header>
      <ul class="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">${e}</ul>
    </div>
  </main>
  ${a()}
  ${r()}`}var l=document.querySelector(`#app`);l.innerHTML=c(),s(l),e(),i(),o();