/* NEXUS · Estudar na Rússia — formulário e animações */
// Número de WhatsApp da organização, só dígitos com indicativo (ex.: 258841234567)
var WA_NUMBER="";
(function(){
 var f=document.getElementById('f'),msg=document.getElementById('msg');
 function v(id){return document.getElementById(id).value.trim()}
 function mark(el,bad){var p=el.closest('[data-r]');if(p)p.classList.toggle('bad',bad);return !bad}
 f.addEventListener('submit',function(e){
  e.preventDefault();
  var ok=true;
  ok=mark(document.getElementById('nome'),v('nome').length<3)&&ok;
  ok=mark(document.getElementById('wa'),v('wa').replace(/\D/g,'').length<8)&&ok;
  ok=mark(document.getElementById('cid'),!v('cid'))&&ok;
  ok=mark(document.getElementById('niv'),!v('niv'))&&ok;
  ok=mark(document.getElementById('ok'),!document.getElementById('ok').checked)&&ok;
  if(!ok){var b=f.querySelector('.bad');if(b)b.scrollIntoView({behavior:'smooth',block:'center'});return}
  var pq=f.querySelector('input[name=pq]:checked').value;
  var t=['*Inscrição · Webinar NEXUS: Estudar na Rússia*','','Nome: '+v('nome'),'WhatsApp: '+v('wa'),v('mail')?'Email: '+v('mail'):null,'Cidade/Província: '+v('cid'),'Nível: '+v('niv'),v('area')?'Área de interesse: '+v('area'):null,'Já pesquisou: '+pq,v('duv')?'Dúvidas: '+v('duv'):null].filter(function(x){return x!==null}).join('\n');
  msg.style.display='block';
  if(!WA_NUMBER){msg.className='msg';msg.textContent='As inscrições abrem em breve. Volta a esta página daqui a pouco.';return}
  msg.className='msg ok';
  msg.innerHTML='<b>Quase lá!</b><br>Toca no botão para enviar a tua inscrição por WhatsApp e concluir.<br>';
  var a=document.createElement('a');a.className='btn';a.target='_blank';a.rel='noopener';a.textContent='ENVIAR NO WHATSAPP';
  a.href='https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(t);msg.appendChild(a);
  msg.scrollIntoView({behavior:'smooth',block:'center'});
 });
 f.addEventListener('input',function(e){var p=e.target.closest('[data-r]');if(p)p.classList.remove('bad')});
 var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
 document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
})();
