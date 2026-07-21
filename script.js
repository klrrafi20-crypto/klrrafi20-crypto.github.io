
const menu=document.querySelector('.menu');const links=document.querySelector('.links');
if(menu&&links){menu.addEventListener('click',()=>{links.classList.toggle('open');menu.setAttribute('aria-expanded',links.classList.contains('open'))});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')))}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const y=document.querySelector('#year');if(y)y.textContent=new Date().getFullYear();
const sections=[...document.querySelectorAll('main section[id]')];const navLinks=[...document.querySelectorAll('.links a[href^="#"]')];
window.addEventListener('scroll',()=>{let current='';sections.forEach(s=>{if(scrollY>=s.offsetTop-150)current=s.id});navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))},{passive:true});
