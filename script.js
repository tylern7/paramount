const b=document.querySelector('.burger'),m=document.getElementById('menu');
b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);m.classList.toggle('open',!o);document.body.classList.toggle('lock',!o)});
m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{b.setAttribute('aria-expanded','false');m.classList.remove('open');document.body.classList.remove('lock')}));
document.getElementById('yr').textContent=new Date().getFullYear();
const f=document.getElementById('quoteForm'),svc=f.de_fb_service,typ=f.de_fb_type,bw=document.getElementById('budgetWrap'),cw=document.getElementById('companyWrap');
function cond(){const sb=svc.value==='Landscape Construction';bw.hidden=!sb;f.budget.required=sb;
 const sc=['Commercial','Industrial','Multiple Types','Multi-Residential'].includes(typ.value);cw.hidden=!sc;f.de_fb_company.required=sc}
svc.addEventListener('change',cond);typ.addEventListener('change',cond);
f.addEventListener('submit',e=>{e.preventDefault();const msg=f.querySelector('.form-msg');
 if(!f.checkValidity()){f.reportValidity();msg.textContent='Please fill in the required fields.';return}
 const d=new FormData(f),L={de_fb_name:'Name',de_fb_email:'Email',de_fb_address:'Address',de_fb_city:'City',de_fb_phone:'Phone',de_fb_service:'Service',de_fb_type:'Property Type',budget:'Budget',de_fb_company:'Company',de_fb_description:'Project'};
 let body='';for(const[k,v]of d)if(v)body+=`${L[k]||k}: ${v}\n`;
 // TODO on handover: reconnect to the WordPress/Divi form endpoint or a form service.
 location.href='mailto:doug@paramountlandscaping.ca?subject='+encodeURIComponent('Quote request – '+d.get('de_fb_name'))+'&body='+encodeURIComponent(body);
 msg.textContent='Thanks! Your email app should open with your request ready to send.'});
