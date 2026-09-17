const screens=[...document.querySelectorAll('.screen')];
function go(id){screens.forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');scrollTo(0,0)}
function checkPassword(){const v=document.getElementById('pass').value.trim();if(v==='26/09')go('entry');else document.getElementById('wrong').textContent='Hmm… password galat hai 😭 Hint dekho na 🎀'}
document.getElementById('pass').addEventListener('keydown',e=>{if(e.key==='Enter')checkPassword()});
function addHeart(){const h=document.createElement('span');h.className='heart';h.textContent=['♡','♥','✦','❤︎'][Math.floor(Math.random()*4)];h.style.left=Math.random()*100+'%';h.style.fontSize=10+Math.random()*15+'px';h.style.animationDuration=5+Math.random()*5+'s';h.style.setProperty('--drift',(Math.random()*120-60)+'px');document.getElementById('hearts').appendChild(h);setTimeout(()=>h.remove(),10000)}setInterval(addHeart,600);
function celebrate(){for(let i=0;i<90;i++)setTimeout(()=>{const h=document.createElement('span');h.className='heart';h.textContent=['♥','✦','✧','♡'][Math.floor(Math.random()*4)];h.style.left=(25+Math.random()*50)+'%';h.style.bottom=(25+Math.random()*20)+'%';h.style.fontSize=10+Math.random()*20+'px';h.style.animationDuration=1.5+Math.random()*2+'s';h.style.setProperty('--drift',(Math.random()*500-250)+'px');document.getElementById('hearts').appendChild(h);setTimeout(()=>h.remove(),4000)},i*12);document.getElementById('wish').textContent='Wish maang liya? 🤭🩷 Ab woh zaroor poora ho ✨'}
const letter=`Ananya, pata hai… har kisi ke saath memories nahi banti.
Kuch log bas life mein aa jaate hain aur phir memories khud banne lagti hain.
Tu unhi logon mein se hai. 🩷🤭

Hum dono ko saathme jyda time nhi hua par fir bhi aisa lgta h ki hum dono saalon se dost h aisi friendship hogyi h humari..😭🌷

Humari friendship aisehi bani rahe bss yahi pray krta huu bhagwan se aur bhagwan se yeh bhi pray krta huu ki mujhe har janam me tu as a bestt freinddd mile 🧿🤭

~HARSHIT 🩷🌷`;
let typed=false;async function typeLetter(){if(typed)return;typed=true;document.getElementById('openLetter').classList.add('hidden');const out=document.getElementById('typed');for(let i=0;i<letter.length;i++){out.textContent+=letter[i];await new Promise(r=>setTimeout(r,letter[i]==='.'?1200:28))}document.getElementById('lastBtn').classList.remove('hidden')}
