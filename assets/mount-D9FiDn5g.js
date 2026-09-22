import{a as e,c as t,f as n,i as r,n as i,o as a,s as o}from"./motion-A87bI-x0.js";function s(e){let[t,n,r]=e.split(`-`).map(Number);return`${t}년 ${n}월 ${r}일`}var c=`text-[16px] leading-[1.8] text-ink-600`,l=`${c} space-y-2 pl-6`;function u(e){switch(e.type){case`p`:return`<p class="${c}">${e.html}</p>`;case`h3`:return`<h3 class="mt-8 text-[18px] font-bold text-ink-900">${e.text}</h3>`;case`ul`:return`<ul class="${l} list-disc marker:text-ink-icon">${e.items.map(e=>`<li>${e}</li>`).join(``)}</ul>`;case`ol`:return`<ol class="${l} list-decimal marker:font-semibold marker:text-ink-500">${e.items.map(e=>`<li class="pl-1">${e}</li>`).join(``)}</ol>`;case`note`:return`
        <aside class="rounded-2xl border border-blue-tint-border bg-blue-tint/60 px-5 py-4">
          ${e.title?`<div class="mb-1.5 text-[14px] font-bold text-blue-deep">${e.title}</div>`:``}
          <p class="text-[15px] leading-[1.75] text-ink-500">${e.html}</p>
        </aside>`;case`table`:return`
        <div class="-mx-1 overflow-x-auto px-1">
          <table class="w-full min-w-[560px] border-collapse text-left text-[15px] leading-[1.6]">
            ${e.caption?`<caption class="mb-2 text-left text-[14px] font-semibold text-ink-500">${e.caption}</caption>`:``}
            <thead>
              <tr>${e.head.map(e=>`<th scope="col" class="border-y border-border-300 bg-surface-chip px-4 py-3 text-[14px] font-bold whitespace-nowrap text-ink-900">${e}</th>`).join(``)}</tr>
            </thead>
            <tbody>
              ${e.rows.map(e=>`<tr class="align-top">${e.map(e=>`<td class="border-b border-border-200 px-4 py-3 text-ink-600">${e}</td>`).join(``)}</tr>`).join(``)}
            </tbody>
          </table>
        </div>`}}function d(e,t){return`
    <section id="${e.id}" class="scroll-mt-24" aria-labelledby="${e.id}-title">
      <h2 id="${e.id}-title" class="mb-5 flex items-baseline gap-3 text-[22px] font-bold tracking-[-0.02em] text-ink-900">
        <span class="text-[15px] font-bold tabular-nums text-blue-primary">${String(t+1).padStart(2,`0`)}</span>
        ${e.title}
      </h2>
      <div class="space-y-4">${e.blocks.map(u).join(``)}</div>
    </section>`}function f(e,t){return e.map((e,n)=>`
      <li>
        <a class="${t}" href="#${e.id}" data-toc-link="${e.id}">
          <span class="w-6 shrink-0 text-[13px] tabular-nums text-ink-icon">${String(n+1).padStart(2,`0`)}</span>
          <span>${e.title}</span>
        </a>
      </li>`).join(``)}var p=`flex items-start gap-2 rounded-lg px-3 py-2 text-[15px] leading-[1.45] text-ink-600 no-underline transition-colors duration-150 hover:bg-surface-chip hover:text-ink-900 aria-[current=true]:bg-blue-tint aria-[current=true]:font-semibold aria-[current=true]:text-blue-deep`;function m(e){return`
  <nav aria-label="정책 문서" class="-mx-1 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
    <ul class="flex gap-2 whitespace-nowrap">
      ${t.map(t=>{let n=t.slug===e;return`
          <li>
            <a
              class="inline-flex h-10 items-center rounded-full border px-4 text-[14px] font-semibold no-underline transition-colors duration-150 ${n?`border-ink-900 bg-ink-900 text-white`:`border-border-300 bg-white text-ink-600 hover:border-ink-400 hover:text-ink-900`}"
              href="${t.href}"
              ${n?`aria-current="page"`:``}
            >${t.title}</a>
          </li>`}).join(``)}
    </ul>
  </nav>`}function h(e){let t=(e,t)=>`
    <div class="flex flex-col gap-0.5">
      <dt class="text-[13px] font-semibold text-ink-icon">${e}</dt>
      <dd class="text-[15px] font-semibold text-ink-900">${t}</dd>
    </div>`;return`
  <dl class="flex flex-wrap gap-x-9 gap-y-3 border-y border-border-200 py-5">
    ${t(`버전`,e.version)}
    ${t(`공고일`,s(e.announcedDate))}
    ${t(`시행일`,s(e.effectiveDate))}
  </dl>`}function g(e){return e.revisions.length?`
  <section id="revisions" class="scroll-mt-24 border-t border-border-200 pt-10" aria-labelledby="revisions-title">
    <h2 id="revisions-title" class="mb-4 text-[18px] font-bold text-ink-900">개정 이력</h2>
    <ul class="space-y-2 text-[15px] leading-[1.6] text-ink-600">
      ${e.revisions.map(e=>`
        <li class="flex flex-wrap gap-x-4 gap-y-1">
          <span class="w-14 shrink-0 font-semibold tabular-nums text-ink-900">${e.version}</span>
          <span class="w-32 shrink-0 tabular-nums text-ink-500">${s(e.date)}</span>
          <span>${e.note}</span>
        </li>`).join(``)}
    </ul>
  </section>`:``}function _(e){return`
  ${n({homeHref:`/`})}
  <main class="w-full pt-[72px] section-px">
    <div class="mx-auto w-full max-w-[1320px] py-12 md:py-20">
      <header class="max-w-[860px]">
        <a class="mb-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink-400 no-underline hover:text-ink-900" href="/policy/">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          정책 · 약관 전체
        </a>
        <div class="mb-3 text-[14px] font-bold tracking-[0.18em] text-blue-primary">${e.titleEn}</div>
        <h1 class="text-[32px] leading-[1.2] font-bold tracking-[-0.03em] text-ink-900 md:text-[44px]">${e.title}</h1>
        <p class="mt-4 max-w-[640px] text-[16px] leading-[1.7] text-ink-600">${e.summary}</p>
        <div class="mt-8">${m(e.slug)}</div>
        <div class="mt-8">${h(e)}</div>
      </header>

      <div class="mt-10 grid grid-cols-1 gap-12 lg:mt-14 lg:grid-cols-[260px_minmax(0,820px)] lg:gap-16">
        <aside class="lg:sticky lg:top-24 lg:self-start" aria-label="목차">
          <details class="rounded-2xl border border-border-300 bg-white lg:hidden" data-toc-mobile>
            <summary class="cursor-pointer list-none px-5 py-4 text-[15px] font-bold text-ink-900 [&::-webkit-details-marker]:hidden">목차</summary>
            <ul class="border-t border-border-200 p-2">${f(e.sections,p)}</ul>
          </details>
          <nav class="hidden lg:block" aria-label="문서 목차">
            <div class="mb-3 px-3 text-[13px] font-bold tracking-[0.16em] text-ink-icon">CONTENTS</div>
            <ul class="max-h-[calc(100vh-160px)] space-y-0.5 overflow-y-auto">${f(e.sections,p)}</ul>
          </nav>
        </aside>

        <article class="min-w-0 space-y-14">
          ${e.intro?`<p class="text-[17px] leading-[1.8] text-ink-600">${e.intro}</p>`:``}
          ${e.sections.map(d).join(``)}
          ${g(e)}
        </article>
      </div>
    </div>
  </main>
  ${a()}
  ${r()}`}function v(e){e.querySelectorAll(`[data-reveal]`).forEach(e=>e.removeAttribute(`data-reveal`))}function y(t){document.title=`${t.title}ㅣRooti`;let n=document.querySelector(`#app`);n.innerHTML=_(t),v(n),e(),i(),o(),b(),x()}function b(){let e=document.querySelectorAll(`[data-toc-link]`);if(!e.length)return;let t=new Map;e.forEach(e=>{let n=e.dataset.tocLink;t.set(n,[...t.get(n)??[],e])});let n=[...t.keys()].map(e=>document.getElementById(e)).filter(e=>e!==null),r=n=>{e.forEach(e=>e.removeAttribute(`aria-current`)),t.get(n)?.forEach(e=>e.setAttribute(`aria-current`,`true`))},i=()=>{let e=window.scrollY+window.innerHeight/3,t=n[0];for(let r of n)if(r.offsetTop<=e)t=r;else break;t&&r(t.id)};i(),window.addEventListener(`scroll`,i,{passive:!0}),window.addEventListener(`resize`,i)}function x(){let e=document.querySelector(`[data-toc-mobile]`);e?.querySelectorAll(`a`).forEach(t=>{t.addEventListener(`click`,()=>{e.open=!1})})}export{y as n,v as t};