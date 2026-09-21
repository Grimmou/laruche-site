document.querySelectorAll('[data-invite]').forEach(a=>a.href='https://discord.gg/laruche');
const y=document.querySelector('[data-year]');if(y)y.textContent=new Date().getFullYear();
const els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});els.forEach(e=>io.observe(e))}else{els.forEach(e=>e.classList.add('visible'))}
const toggle=document.querySelector('[data-menu-toggle]');const links=document.querySelector('[data-mobile-menu]');
if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')))}
