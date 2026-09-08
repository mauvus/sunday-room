const data={
wake:[
  ["☀","07:30","已经自然醒了。",{green:2}],
  ["◌","09:00","刚刚好。",{soft:2}],
  ["☁","10:30","星期日当然要睡懒觉。",{wander:2}],
  ["☾","12:00","醒来的时候，午饭快开始了。",{midnight:2}]
],
view:[
  ["tree","一片绿色的树",{green:2}],
  ["city","城市街景",{coffee:2}],
  ["sea","海边",{open:2}],
  ["street","安静的小街",{soft:2}]
],
room:[
  ["plant","植物",{green:2}],
  ["book","书",{green:2,midnight:1}],
  ["candle","香薰",{midnight:2,soft:1}],
  ["speaker","音响",{wander:2,midnight:1}],
  ["poster","海报",{coffee:2,wander:1}],
  ["bear","毛绒玩偶",{soft:2}]
],
rain:[
  ["☕","去附近咖啡店","",{coffee:2}],
  ["▱","留在房间看书","",{green:2}],
  ["♫","戴上耳机躺着","",{midnight:2}],
  ["☂","撑伞出去走走","",{wander:2,open:1}]
],
drink:[
  ["latte","Latte","拿铁",{coffee:2}],
  ["earlgrey","Earl Grey","伯爵茶",{green:2}],
  ["matcha","Matcha","抹茶",{soft:2}],
  ["americano","Iced Americano","冰美式",{wander:2}],
  ["lemon","Lemon Tea","柠檬茶",{open:2}]
],
music:[
  ["acoustic","Acoustic","", {green:2}, "Ed Sheeran · Perfect (Acoustic)","9vDIzVuDzTs"],
  ["citypop","City Pop","", {coffee:2}, "Mariya Takeuchi · Plastic Love","T_lC2O1oIew"],
  ["rock","Rock","", {wander:2}, "Guns N\' Roses · Sweet Child O\' Mine","1w7OgIMMRc4"],
  ["jazz","Jazz","", {midnight:2}, "Nat King Cole · L-O-V-E","gZYtes1RO_w"]
],
friend:[
  ["♧","进来吧，我刚好泡了茶。","",{soft:2}],
  ["☕","走，我们去附近坐坐。","",{coffee:2}],
  ["☾","今天有点想一个人待着。","",{midnight:2}],
  ["→","走！出去玩！","",{wander:2,open:1}]
]
};
const profiles={
green:{title:"GREEN SUNDAY",name:"植物系生活者",tags:["Natural","Slow","Warm"],quote:"I enjoy the quiet things."},
coffee:{title:"COFFEE SUNDAY",name:"城市咖啡系",tags:["Curious","Social","Refined"],quote:"There is always somewhere new to go."},
midnight:{title:"MIDNIGHT SUNDAY",name:"午夜浪漫系",tags:["Emotional","Creative","Free"],quote:"My inner world is a beautiful place."},
wander:{title:"WANDER SUNDAY",name:"随性漫游系",tags:["Independent","Playful","Spontaneous"],quote:"Let's see where the day takes me."},
soft:{title:"SOFT SUNDAY",name:"柔软生活系",tags:["Gentle","Cozy","Romantic"],quote:"Life should feel good, too."},
open:{title:"OPEN SUNDAY",name:"自由呼吸系",tags:["Open","Adventurous","Light"],quote:"I need a little more sky."}
};
let state={page:0,score:{green:0,coffee:0,midnight:0,wander:0,soft:0,open:0},answers:{},room:[]};

function $(id){return document.getElementById(id)}
function svg(type){
const common=`<svg class="illustration" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">`;
if(type==="tree")return common+`<rect width="200" height="120" fill="#dce7dc"/><circle cx="42" cy="25" r="20" fill="#e7d89d" opacity=".65"/><path d="M92 106V61" stroke="#72816c" stroke-width="6"/><path d="M91 74C55 64 52 36 79 29c25-7 36 13 27 29 31-16 52 3 45 21-8 22-42 18-60-5" fill="#92aa8d" opacity=".9"/><path d="M91 74C68 67 58 48 72 39" fill="none" stroke="#63775f" stroke-width="2"/></svg>`;
if(type==="city")return common+`<rect width="200" height="120" fill="#d9e2df"/><path d="M0 94h200" stroke="#8c9994" stroke-width="3"/><g fill="#a9b5af"><rect x="20" y="48" width="25" height="46"/><rect x="50" y="34" width="32" height="60"/><rect x="88" y="55" width="25" height="39"/><rect x="118" y="25" width="37" height="69"/><rect x="160" y="45" width="22" height="49"/></g><g fill="#e8dba5"><rect x="56" y="44" width="7" height="6"/><rect x="70" y="44" width="7" height="6"/><rect x="127" y="37" width="7" height="6"/><rect x="142" y="37" width="7" height="6"/><rect x="127" y="54" width="7" height="6"/><rect x="142" y="54" width="7" height="6"/></g></svg>`;
if(type==="sea")return common+`<rect width="200" height="120" fill="#dfe7df"/><circle cx="155" cy="25" r="19" fill="#eadb9b"/><path d="M0 65c35-18 45 18 78 0s45 18 78 0 30 8 44 1v54H0z" fill="#8eb1b1"/><path d="M0 80c28-13 42 15 71 0s44 15 73 0 36 8 56 0" fill="none" stroke="#f5f1e8" stroke-width="5" opacity=".8"/><path d="M0 97c34-12 46 11 77 0s44 12 72 0 34 7 51 0" fill="none" stroke="#6f9ca0" stroke-width="3"/></svg>`;
if(type==="street")return common+`<rect width="200" height="120" fill="#e7e3d9"/><path d="M62 120L94 47h28l50 73" fill="#c8c8bd"/><path d="M92 48L65 120M121 48l51 72" stroke="#9c9b91" stroke-width="3"/><path d="M105 58v10m0 12v10m0 12v10" stroke="#e2d38f" stroke-width="4"/><circle cx="33" cy="31" r="17" fill="#9aaa8e"/><path d="M33 49v51" stroke="#74836d" stroke-width="5"/></svg>`;
return common+`<rect width="200" height="120" fill="#e4e7de"/></svg>`;
}
function drinkSvg(type){
const base=`<svg class="illustration" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">`;
if(type==="latte")return base+`<rect width="200" height="120" fill="#e8e0d3"/><ellipse cx="100" cy="94" rx="55" ry="11" fill="#c7bca9" opacity=".45"/><path d="M58 48h83v39c0 12-13 19-41 19S58 99 58 87z" fill="#d9d2c5" stroke="#77786f" stroke-width="2"/><path d="M141 57c26-8 34 9 22 21-6 6-15 5-22 2" fill="none" stroke="#77786f" stroke-width="5"/><ellipse cx="99" cy="48" rx="42" ry="12" fill="#a87d62"/><path d="M77 48c13-12 32-12 45 0-13 7-32 7-45 0z" fill="#d8bd9e"/></svg>`;
if(type==="earlgrey")return base+`<rect width="200" height="120" fill="#dfe6dc"/><ellipse cx="99" cy="96" rx="54" ry="9" fill="#a8b19f" opacity=".45"/><path d="M58 51h78v37c0 13-13 19-39 19S58 101 58 88z" fill="#f1eee3" stroke="#77786f" stroke-width="2"/><path d="M136 60c25-8 33 10 21 21-6 5-14 5-21 2" fill="none" stroke="#77786f" stroke-width="5"/><ellipse cx="97" cy="51" rx="40" ry="11" fill="#b79b72"/><path d="M65 42c-12-10-4-23 8-18 8 3 7 13 1 17" fill="#8ba183" opacity=".8"/><path d="M142 37l17-10" stroke="#8ba183" stroke-width="4"/></svg>`;
if(type==="matcha")return base+`<rect width="200" height="120" fill="#e5e4d4"/><ellipse cx="101" cy="96" rx="55" ry="10" fill="#b9b6a0" opacity=".45"/><path d="M54 51h89v35c0 15-17 22-44 22S54 101 54 86z" fill="#d5d0bd" stroke="#77786f" stroke-width="2"/><ellipse cx="99" cy="51" rx="44" ry="12" fill="#94a56f"/><circle cx="99" cy="50" r="13" fill="#a8b57f" opacity=".75"/><path d="M143 59c25-8 31 10 19 20-6 5-13 5-19 2" fill="none" stroke="#77786f" stroke-width="5"/><path d="M85 49c8-8 20-8 29 0" fill="none" stroke="#dce3bf" stroke-width="3"/></svg>`;
if(type==="americano")return base+`<rect width="200" height="120" fill="#dbe5e3"/><ellipse cx="101" cy="97" rx="53" ry="9" fill="#9eaead" opacity=".4"/><path d="M58 49h84v39c0 12-14 19-42 19S58 100 58 88z" fill="#9baea9" stroke="#77786f" stroke-width="2"/><ellipse cx="100" cy="49" rx="42" ry="11" fill="#72594d"/><path d="M142 58c24-7 32 10 20 20-6 5-13 5-20 2" fill="none" stroke="#77786f" stroke-width="5"/><path d="M77 45c12-5 33-5 46 0" stroke="#c7a98f" stroke-width="2" opacity=".7"/></svg>`;
return base+`<rect width="200" height="120" fill="#e9e2d5"/><ellipse cx="100" cy="96" rx="54" ry="9" fill="#c5b9a7" opacity=".45"/><path d="M60 48h80v39c0 12-14 19-40 19S60 99 60 87z" fill="#f2eee3" stroke="#77786f" stroke-width="2"/><ellipse cx="100" cy="48" rx="40" ry="11" fill="#d8cfac"/><path d="M140 58c25-7 32 10 20 20-6 5-14 5-20 2" fill="none" stroke="#77786f" stroke-width="5"/><path d="M85 49l-10-8m28 8 10-9" stroke="#e4c66f" stroke-width="4" stroke-linecap="round"/><circle cx="91" cy="47" r="2" fill="#a9946a"/></svg>`;
}
function musicSvg(type){
const base=`<svg class="illustration" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">`;
if(type==="acoustic")return base+`<rect width="200" height="120" fill="#e7e1d5"/><ellipse cx="99" cy="94" rx="57" ry="10" fill="#c2b8a7" opacity=".4"/><path d="M71 83c-17-11-13-34 6-35 8-18 34-17 42 1 20 0 26 26 9 35-11 6-22 5-31-2-9 7-17 7-26 1z" fill="#c59678" stroke="#786e63" stroke-width="2"/><path d="M99 54L142 28" stroke="#786e63" stroke-width="5"/><path d="M138 29l25-6" stroke="#786e63" stroke-width="4"/><path d="M96 55v31" stroke="#6f6d65" stroke-width="2"/><circle cx="98" cy="70" r="8" fill="#8b6958"/><path d="M77 67c12 5 29 5 43 0" fill="none" stroke="#e1c3a6" stroke-width="2"/></svg>`;
if(type==="citypop")return base+`<rect width="200" height="120" fill="#dbe4e1"/><circle cx="145" cy="28" r="21" fill="#e7d48c" opacity=".8"/><rect x="54" y="36" width="92" height="54" rx="7" fill="#8d7c89"/><circle cx="77" cy="63" r="12" fill="#d7b7bd"/><circle cx="123" cy="63" r="12" fill="#91a79b"/><path d="M46 96h109" stroke="#777b73" stroke-width="3"/><path d="M69 102v-7m62 7v-7" stroke="#777b73" stroke-width="3"/><path d="M31 88c18-10 28-18 37-32" fill="none" stroke="#718f94" stroke-width="3"/></svg>`;
if(type==="rock")return base+`<rect width="200" height="120" fill="#dfe3df"/><ellipse cx="100" cy="98" rx="62" ry="9" fill="#aeb5ad" opacity=".38"/><path d="M50 88c5-20 17-31 31-31 10 0 17 6 19 17 2-11 9-17 20-17 14 0 25 11 30 31z" fill="#7b837e" stroke="#626963" stroke-width="2"/><path d="M72 57V31m56 26V31" stroke="#626963" stroke-width="5" stroke-linecap="round"/><path d="M62 31h20m36 0h20" stroke="#626963" stroke-width="4" stroke-linecap="round"/><path d="M43 92c10-5 16-12 21-23m93 23c-8-5-14-12-18-23" fill="none" stroke="#b88991" stroke-width="5" stroke-linecap="round"/><circle cx="73" cy="76" r="5" fill="#d8bf77"/><circle cx="128" cy="76" r="5" fill="#d8bf77"/></svg>`;
return base+`<rect width="200" height="120" fill="#e3e0d7"/><ellipse cx="100" cy="94" rx="58" ry="9" fill="#b9b2a3" opacity=".4"/><path d="M58 86c4-29 25-45 42-45s38 16 42 45" fill="#7d7469" stroke="#655f57" stroke-width="2"/><path d="M66 85h68" stroke="#d6c59b" stroke-width="3"/><path d="M81 72c8-6 13-6 19 0m0 0c7-6 12-6 20 0" fill="none" stroke="#e4d7b4" stroke-width="3"/><path d="M100 43v40" stroke="#5e5952" stroke-width="2"/></svg>`;
}
function roomSvg(type){
const base=`<svg class="illustration" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">`;
if(type==="plant")return base+`<rect width="200" height="120" fill="#dce5d9"/><path d="M92 120h20l-3-42H95z" fill="#86a6a0"/><path d="M102 80V26M102 61C78 52 74 35 88 30c12-4 20 8 15 18M103 69c21-18 39-11 41 2 2 14-19 19-39 7" fill="none" stroke="#678365" stroke-width="4" stroke-linecap="round"/><circle cx="86" cy="29" r="10" fill="#9bb38e"/><circle cx="142" cy="70" r="11" fill="#9bb38e"/></svg>`;
if(type==="book")return base+`<rect width="200" height="120" fill="#e8e4d9"/><path d="M47 84c22-9 39-9 55 0V35c-16-8-33-8-55 0z" fill="#c78f9b"/><path d="M153 84c-22-9-39-9-55 0V35c16-8 33-8 55 0z" fill="#839a83"/><path d="M100 36v49" stroke="#716e66" stroke-width="2"/><path d="M60 49h29m-29 9h25m26-9h29m-29 9h25" stroke="#f4f0e5" stroke-width="2"/></svg>`;
if(type==="candle")return base+`<rect width="200" height="120" fill="#e7dfd7"/><path d="M75 82h50l-5 27H80z" fill="#c9949e"/><path d="M100 82V66" stroke="#5c5b52" stroke-width="2"/><path d="M100 66c-8-8 5-13 0-21 13 9 7 17 0 21" fill="#e6cf87"/></svg>`;
if(type==="speaker")return base+`<rect width="200" height="120" fill="#dbe3e0"/><rect x="64" y="23" width="72" height="82" rx="8" fill="#6f6f68"/><circle cx="100" cy="50" r="12" fill="#aaa99f"/><circle cx="100" cy="79" r="20" fill="#a8aaa2"/><circle cx="100" cy="79" r="7" fill="#6f6f68"/></svg>`;
if(type==="poster")return base+`<rect width="200" height="120" fill="#e7e2d6"/><rect x="58" y="12" width="84" height="96" fill="#f6f1e5" stroke="#888a80" stroke-width="2"/><circle cx="100" cy="51" r="21" fill="#c18896"/><path d="M77 91c11-30 34-30 46 0" fill="#87a08a"/><path d="M70 101h60" stroke="#7b7a71" stroke-width="2"/></svg>`;
return base+`<rect width="200" height="120" fill="#e5e8df"/><circle cx="100" cy="65" r="31" fill="#d1b1ad"/><circle cx="78" cy="39" r="13" fill="#d1b1ad"/><circle cx="122" cy="39" r="13" fill="#d1b1ad"/><circle cx="89" cy="61" r="3" fill="#55544e"/><circle cx="111" cy="61" r="3" fill="#55544e"/><path d="M94 73c4 4 8 4 12 0" fill="none" stroke="#8d6868" stroke-width="2"/></svg>`;
}
function applyScore(map, direction=1){
  Object.entries(map||{}).forEach(([type,pts])=>{
    state.score[type]=(state.score[type]||0)+pts*direction;
  });
}
function answerMap(key,index){
  const o=data[key][index];
  return o[3] && typeof o[3]==="object" ? o[3] :
    (o[2] && typeof o[2]==="object" ? o[2] : {});
}
function renderOptions(id,key){
  const el=$(id);el.innerHTML="";
  data[key].forEach((o,i)=>{
    const d=document.createElement("button");
    d.className="option";
    d.innerHTML=`<span class="icon">${o[0]}</span><span class="copy"><b>${o[1]}</b>${typeof o[2]==="string"&&o[2]?`<small>${o[2]}</small>`:""}</span>`;
    d.addEventListener("click",()=>selectOne(el,key,i,d));
    el.appendChild(d);
  });
}
function selectOne(el,key,i,d){
  [...el.children].forEach(x=>x.classList.remove("selected"));
  d.classList.add("selected");
  const old=state.answers[key];
  if(old!==undefined) applyScore(answerMap(key,old),-1);
  applyScore(answerMap(key,i),1);
  state.answers[key]=i;
  $("n"+state.page).classList.add("enabled");
}
function renderTiles(id,key,multi=false){
  const el=$(id);el.innerHTML="";
  data[key].forEach((o,i)=>{
    const d=document.createElement("button");d.className="tile";
    const title=o[1];
    const sub=key==="music" ? `<small class="music-meta">${o[4]}</small>` :
      key==="drink" && o[2] ? `<small class="drink-cn">${o[2]}</small>` : "";
    d.innerHTML=`<div class="pic">${key==="room"?roomSvg(o[0]):key==="drink"?drinkSvg(o[0]):key==="music"?musicSvg(o[0]):svg(o[0])}</div><div class="label">${title}${sub}</div>`;
    d.addEventListener("click",()=>{
      if(multi){
        if(d.classList.contains("selected")){
          d.classList.remove("selected");
          state.room=state.room.filter(x=>x!==i);
          applyScore(answerMap(key,i),-1);
        }else if(state.room.length<3){
          d.classList.add("selected");
          state.room.push(i);
          applyScore(answerMap(key,i),1);
        }
        $("n3").textContent=`选择 ${state.room.length} / 3`;
        $("n3").classList.toggle("enabled",state.room.length===3);
      }else{
        [...el.children].forEach(x=>x.classList.remove("selected"));
        d.classList.add("selected");
        const old=state.answers[key];
        if(old!==undefined) applyScore(answerMap(key,old),-1);
        applyScore(answerMap(key,i),1);
        state.answers[key]=i;
        $("n"+state.page).classList.add("enabled");

      }
    });
    el.appendChild(d);
  });
}
function init(){renderOptions("wake","wake");renderTiles("view","view");renderTiles("room","room",true);renderOptions("rain","rain");renderTiles("drink","drink");renderTiles("music","music");renderOptions("friend","friend")}
function show(n){document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));$("s"+n).classList.add("active");state.page=n;window.scrollTo(0,0)}
function startGame(){show(1);playTrack("00bgm.mp3","SUNDAY ROOM")}

function go(delta){if(delta>0){if(state.page===3&&state.room.length<3)return;const k=["","wake","view","room","rain","drink","music","friend"][state.page];if(state.page!==3&&state.answers[k]===undefined)return}show(state.page+delta)}
function sceneFor(type){
const bg={green:"#dfe8dc",coffee:"#e4e0d5",midnight:"#d9d5df",wander:"#dce5e2",soft:"#eadfe0",open:"#dce8e6"}[type];
const accent={green:"#7f9a7a",coffee:"#b68c6c",midnight:"#806e87",city:"#718f94",soft:"#bd8e9b",open:"#78a5a5"}[type];
return `<svg class="illustration" viewBox="0 0 430 400" xmlns="http://www.w3.org/2000/svg"><rect width="430" height="400" fill="${bg}"/><rect x="48" y="48" width="334" height="190" rx="3" fill="#eef0e6" opacity=".7" stroke="#c6c9bd"/><path d="M64 225h302" stroke="#9b9e93" stroke-width="4"/><path d="M0 305Q215 255 430 305v95H0z" fill="#aab69f" opacity=".75"/><path d="M0 326Q215 280 430 326" fill="none" stroke="#d8ca77" stroke-width="9"/><path d="M0 365Q215 319 430 365" fill="none" stroke="#d8ca77" stroke-width="9"/><ellipse cx="215" cy="292" rx="126" ry="25" fill="#d8d2c2" opacity=".8"/><rect x="174" y="214" width="82" height="75" rx="9" fill="${accent}" opacity=".82"/><ellipse cx="215" cy="214" rx="42" ry="13" fill="#f2efe5" stroke="#8b8c80" stroke-width="3"/><path d="M204 214c-6-19 6-25 12-37 7 13 17 20 9 37" fill="#e1d58e" opacity=".9"/><path d="M113 260V197" stroke="#6f7f67" stroke-width="5"/><path d="M113 223c-27-10-31-32-14-38 17-5 28 10 19 23 23-16 42-4 39 13-3 17-27 21-44 2" fill="${accent}" opacity=".78"/><circle cx="100" cy="184" r="13" fill="${accent}"/><circle cx="147" cy="208" r="11" fill="${accent}"/></svg>`;
}
function finish(){
if(state.answers.friend===undefined)return;
const ranked=Object.entries(state.score).sort((a,b)=>b[1]-a[1]);
const type=ranked[0][0],p=profiles[type];
$("roomScene").innerHTML=sceneFor(type);$("resultTitle").textContent=p.title;$("resultName").textContent=p.name;
$("chips").innerHTML=p.tags.map(x=>`<span class="chip">${x}</span>`).join("");$("quote").textContent="“ "+p.quote+" ”";
const a=state.answers;const wake=data.wake[a.wake]?.[1]||"—",drink=data.drink[a.drink]?.[1]||"—",music=data.music[a.music]?.[1]||"—";
$("meta").innerHTML=`<div>◷<b>${wake}</b></div><div>☁<b>Rainy</b></div><div>♧<b>${drink}</b></div><div>♫<b>${music}</b></div>`;
show(8);burst();playTrack(typeToTrack[type],p.title)
}
function roundRect(ctx,x,y,w,h,r){
  r=Math.min(r,w/2,h/2);ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();
}
function wrapText(ctx,text,x,y,maxWidth,lineHeight,maxLines){
  const chars=Array.from(text||"");let line="",lines=[];
  for(const ch of chars){const test=line+ch;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=ch;if(lines.length===maxLines-1)break;}else line=test;}
  if(lines.length<maxLines)lines.push(line);
  if(lines.length>maxLines)lines=lines.slice(0,maxLines);
  lines.forEach((l,i)=>ctx.fillText(l,x,y+i*lineHeight));
  return lines.length;
}
function drawPosterQR(ctx,text,x,y,size){
  try{
    const qr=new window.SundayQRCode(-1,window.QRErrorCorrectLevel?window.QRErrorCorrectLevel.M:0);
    qr.addData(text);qr.make();
    const n=qr.getModuleCount(),quiet=4,cell=size/(n+quiet*2);
    ctx.fillStyle="#fff";ctx.fillRect(x,y,size,size);
    ctx.fillStyle="#2f312c";
    for(let r=0;r<n;r++)for(let c=0;c<n;c++)if(qr.isDark(r,c))ctx.fillRect(x+(c+quiet)*cell,y+(r+quiet)*cell,cell+0.5,cell+0.5);
    return true;
  }catch(e){return false}
}
async function drawPoster(){
  // 3:4 result poster. The poster is generated entirely at runtime with Canvas.
  // It mirrors the visible result screen: result illustration + type + Chinese name,
  // three tags with a small QR code placed in the empty space on their right,
  // quote, and the four test-result details.
  const canvas=document.createElement("canvas");
  canvas.width=900;
  canvas.height=1200;
  const ctx=canvas.getContext("2d");
  const W=canvas.width,H=canvas.height;
  const ink="#4d4b42", muted="#77756c", line="#d9d3c5", paper="#f7f3e9";

  ctx.fillStyle=paper;
  ctx.fillRect(0,0,W,H);

  // ---- Top result illustration / hero (same SVG artwork as the result page) ----
  const heroH=675;
  const heroBg=ctx.createLinearGradient(0,0,0,heroH);
  heroBg.addColorStop(0,"#dce6e1");
  heroBg.addColorStop(.72,"#dfe7df");
  heroBg.addColorStop(1,"#dfe4d9");
  ctx.fillStyle=heroBg;
  ctx.fillRect(0,0,W,heroH);

  // Draw the exact result-room SVG into the poster when the WebView supports SVG images.
  try{
    const svg=$('roomScene').innerHTML;
    const img=new Image();
    await new Promise((resolve,reject)=>{
      img.onload=resolve;
      img.onerror=reject;
      img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
    });
    ctx.drawImage(img,0,0,W,heroH);
  }catch(e){
    // Safe visual fallback if an iOS WebView blocks SVG data images.
    ctx.fillStyle="#dce6e1";ctx.fillRect(0,0,W,heroH);
    ctx.fillStyle="#eef0e6";ctx.strokeStyle="#c6c9bd";ctx.lineWidth=2;
    roundRect(ctx,100,82,700,315,6);ctx.fill();ctx.stroke();
    ctx.strokeStyle="#9b9e93";ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(130,375);ctx.lineTo(770,375);ctx.stroke();
    ctx.fillStyle="#aab69f";ctx.beginPath();ctx.moveTo(0,515);ctx.quadraticCurveTo(450,425,900,515);ctx.lineTo(900,675);ctx.lineTo(0,675);ctx.closePath();ctx.fill();
    ctx.strokeStyle="#d8ca77";ctx.lineWidth=14;ctx.beginPath();ctx.moveTo(0,555);ctx.quadraticCurveTo(450,475,900,555);ctx.stroke();
    ctx.beginPath();ctx.moveTo(0,610);ctx.quadraticCurveTo(450,530,900,610);ctx.stroke();
    ctx.fillStyle="#55564f";roundRect(ctx,365,355,170,150,20);ctx.fill();
    ctx.fillStyle="#f2efe5";ctx.strokeStyle="#8b8c80";ctx.lineWidth=6;ctx.beginPath();ctx.ellipse(450,355,88,27,0,0,Math.PI*2);ctx.fill();ctx.stroke();
    ctx.fillStyle="#e1d58e";ctx.beginPath();ctx.moveTo(430,355);ctx.bezierCurveTo(420,315,447,300,450,275);ctx.bezierCurveTo(475,315,478,330,462,355);ctx.closePath();ctx.fill();
  }

  // Soft overlay at the bottom of the hero, like the result page.
  const overlay=ctx.createLinearGradient(0,heroH-170,0,heroH);
  overlay.addColorStop(0,"rgba(238,233,220,0)");
  overlay.addColorStop(1,"rgba(238,233,220,.78)");
  ctx.fillStyle=overlay;ctx.fillRect(0,heroH-170,W,170);

  // Result title sits on the lower part of the illustration, matching the screen.
  ctx.fillStyle="#7d8178";
  ctx.font="16px -apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif";
  ctx.fillText("Y O U R   S U N D A Y   T Y P E",48,570);

  const title=$('resultTitle').textContent;
  ctx.fillStyle=ink;
  ctx.font="54px Georgia,'Times New Roman',serif";
  // Slightly shrink very long titles so every personality fits.
  while(ctx.measureText(title).width>805 && parseInt(ctx.font)>38){
    ctx.font=(parseInt(ctx.font)-2)+"px Georgia,'Times New Roman',serif";
  }
  ctx.fillText(title,48,625);

  ctx.fillStyle="#55564f";
  ctx.font="23px -apple-system,BlinkMacSystemFont,'Helvetica Neue','Noto Sans SC',Arial,sans-serif";
  ctx.fillText($('resultName').textContent,50,659);

  // ---- Result details area ----
  ctx.fillStyle=paper;ctx.fillRect(0,heroH,W,H-heroH);

  const chips=[...document.querySelectorAll("#chips .chip")].map(x=>x.textContent);
  // Three tags stay on one row. QR occupies the otherwise empty space to the right.
  let chipX=48,chipY=755;
  ctx.font="16px -apple-system,BlinkMacSystemFont,'Helvetica Neue','Noto Sans SC',Arial,sans-serif";
  for(const chip of chips){
    const w=ctx.measureText(chip).width+34;
    if(chipX+w>635) break;
    roundRect(ctx,chipX,chipY-27,w,38,19);
    ctx.fillStyle="#fbfaf6";ctx.fill();ctx.strokeStyle=line;ctx.lineWidth=1.5;ctx.stroke();
    ctx.fillStyle="#66685f";ctx.fillText(chip,chipX+17,chipY-3);
    chipX+=w+10;
  }

  // Small QR, directly in the blank area to the right of the three keywords.
  const qrSize=118;
  const qrX=725, qrY=700;
  roundRect(ctx,qrX-7,qrY-7,qrSize+14,qrSize+14,8);
  ctx.fillStyle="#fff";ctx.fill();ctx.strokeStyle="#d9d3c5";ctx.stroke();
  const qrTarget=window.SUNDAY_ROOM_SHARE_URL||location.href;
  drawPosterQR(ctx,qrTarget,qrX,qrY,qrSize);

  ctx.strokeStyle=line;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(48,805);ctx.lineTo(852,805);ctx.stroke();

  ctx.fillStyle=ink;
  ctx.font="25px Georgia,'Times New Roman',serif";
  wrapText(ctx,$('quote').textContent,48,850,804,42,2);

  ctx.strokeStyle=line;ctx.beginPath();ctx.moveTo(48,930);ctx.lineTo(852,930);ctx.stroke();

  // Four test-result values.
  const meta=[...$('meta').querySelectorAll('div')].map(x=>x.innerText.split('\n').filter(Boolean));
  const centers=[125,350,575,800];
  meta.forEach((parts,i)=>{
    const x=centers[i];
    ctx.textAlign="center";
    ctx.fillStyle="#969287";
    ctx.font="22px -apple-system,BlinkMacSystemFont,'Helvetica Neue','Noto Sans SC',Arial,sans-serif";
    ctx.fillText(parts[0]||"",x,970);
    ctx.fillStyle=ink;
    ctx.font="17px -apple-system,BlinkMacSystemFont,'Helvetica Neue','Noto Sans SC',Arial,sans-serif";
    ctx.fillText(parts[1]||"",x,1003);
  });
  ctx.textAlign="left";

  ctx.fillStyle="#969287";
  ctx.font="12px -apple-system,BlinkMacSystemFont,'Helvetica Neue','Noto Sans SC',Arial,sans-serif";
  ctx.fillText("A little game about the way you live.",48,1135);
  ctx.fillText("SUNDAY ROOM · BETTER SUNDAYS",48,1162);
  return canvas;
}
async function shareResult(){
  const canvas=await drawPoster();
  const dataUrl=canvas.toDataURL("image/png");
  try{
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,"image/png"));
    if(blob){
      const file=new File([blob],"sunday-room-result.png",{type:"image/png"});
      if(navigator.share && (!navigator.canShare || navigator.canShare({files:[file]}))){
        try{
          await navigator.share({
            title:"SUNDAY ROOM",
            text:`我的 Sunday Type 是 ${$("resultTitle").textContent} · ${$("resultName").textContent}`,
            url:window.SUNDAY_ROOM_SHARE_URL||location.href,
            files:[file]
          });
          toast("海报已生成");
          return;
        }catch(e){if(e&&e.name==="AbortError")return;}
      }
    }
  }catch(e){}
  const mini=window.xhs&&window.xhs.miniTool;
  if(mini){
    try{
      const temp=await mini.writeTempFile({data:dataUrl});
      await mini.saveImageToPhotosAlbum({filePath:temp.filePath});
      toast("海报已保存到相册，可直接分享");
      return;
    }catch(e){
      try{await mini.saveImageToPhotosAlbum({filePath:dataUrl});toast("海报已保存到相册，可直接分享");return;}catch(e2){}
    }
  }
  // Standard web fallback: share/copy the real page URL so the test can be opened directly.
  const shareUrl=window.SUNDAY_ROOM_SHARE_URL||location.href;
  const shareText=`SUNDAY ROOM · ${$("resultTitle").textContent} · ${$("resultName").textContent}`;
  if(navigator.share){
    try{await navigator.share({title:"SUNDAY ROOM",text:shareText,url:shareUrl});return;}catch(e){if(e&&e.name==="AbortError")return;}
  }
  try{await navigator.clipboard.writeText(shareUrl);toast("测试链接已复制");return;}catch(e){}
  toast("海报已生成，请长按或使用浏览器分享");
}
function burst(){const c=$("confetti");c.innerHTML="";for(let i=0;i<26;i++){const x=document.createElement("i");x.style.left=Math.random()*100+"%";x.style.top=(-5-Math.random()*15)+"%";x.style.background=["#b88491","#d8bf58","#718b78","#7ca3aa"][i%4];x.style.transform=`rotate(${Math.random()*120}deg)`;x.style.animationDelay=Math.random()*.25+"s";c.appendChild(x)}setTimeout(()=>c.innerHTML="",2200)}
function toast(message){const t=$("toast");if(message)t.textContent=message;t.classList.add("show");setTimeout(()=>{t.classList.remove("show");t.textContent="已复制分享文案"},1800)}
function restart(){state={page:0,score:{green:0,coffee:0,midnight:0,wander:0,soft:0,open:0},answers:{},room:[]};init();show(0)}
const typeToTrack={
  green:"01green.mp3",
  coffee:"02coffee.mp3",
  midnight:"03midnight.mp3",
  wander:"04wander.mp3",
  soft:"05soft.mp3",
  open:"06open.mp3"
};
let currentTrack="";
let currentTrackLabel="";
const gameAudio=$("gameAudio");

function playTrack(file,label=""){
  if(!file)return;
  currentTrack=file;
  currentTrackLabel=label;
  gameAudio.src=`audio/${file}`;
  gameAudio.loop=true;
  gameAudio.currentTime=0;
  gameAudio.load();
  const p=gameAudio.play();
  if(p&&p.catch)p.catch(()=>toast("点击右上角 ♫ 开启音乐"));
  $("musicBtn").classList.add("playing");
  $("musicBtn").setAttribute("aria-label",`正在播放 ${label||"背景音乐"}`);
}
function stopTrack(){
  gameAudio.pause();
  $("musicBtn").classList.remove("playing");
}
function restart(){
  stopTrack();
  state={page:0,score:{green:0,coffee:0,midnight:0,wander:0,soft:0,open:0},answers:{},room:[]};
  init();show(0);
}
$("musicBtn").addEventListener("click",()=>{
  if(gameAudio.paused){
    const p=gameAudio.play();
    if(p&&p.catch)p.catch(()=>toast("请先点击一次游戏页面"));
    $("musicBtn").classList.add("playing");
  }else{
    stopTrack();
  }
});
$("startBtn").addEventListener("click",startGame);
$("shareBtn").addEventListener("click",shareResult);
$("restartBtn").addEventListener("click",restart);
document.querySelectorAll('[data-action="back"]').forEach(b=>b.addEventListener("click",()=>go(-1)));
document.querySelectorAll('[data-action="next"]').forEach(b=>b.addEventListener("click",()=>go(1)));
$("n7").addEventListener("click",finish);
init();

// ---- Bilingual layer ----
const I18N={
  zh:{start:"进入你的周日下午",next:"下一步 →",choose3:"选择 3 个",seeResult:"看看你的 Sunday →",resultEyebrow:"YOUR SUNDAY TYPE",share:"保存 / 分享我的 Sunday",shareHint:"会生成一张带二维码的 Sunday 结果海报",restart:"再玩一次",screenshot:"截图这张卡片，也很好看。",q1title:"你几点醒？",q1sub:"今天是星期日。<br>你睡多久？",q2title:"你的窗外",q2sub:"拉开窗帘，<br>你会看到什么样的风景？",q3title:"房间里需要什么？",q3sub:"从下面选择 3 个，<br>放进你的房间吧。",q4title:"突然下雨了",q4sub:"Rainy Sunday.<br>你现在想做什么？",q5title:"下午三点",q5sub:"桌上出现了一个空杯子，<br>你想喝什么？",q6title:"Sunday soundtrack",q6sub:"凭第一感觉选，点击卡片即可播放。",q7title:"有人敲门",q7sub:"下午 5:20。<br>你的朋友突然来找你。",room3:"选择 3 个",rainy:"Rainy"},
  en:{start:"Enter Your Sunday Afternoon",next:"Next →",choose3:"Choose 3",seeResult:"See Your Sunday →",resultEyebrow:"YOUR SUNDAY TYPE",share:"Save / Share My Sunday",shareHint:"A Sunday result poster with a QR code will be generated",restart:"Play Again",screenshot:"A screenshot of this card looks good, too.",q1title:"What time did you wake up?",q1sub:"It’s Sunday.<br>How long did you sleep?",q2title:"Outside Your Window",q2sub:"Pull back the curtains.<br>What kind of view do you see?",q3title:"What does the room need?",q3sub:"Choose 3 things below,<br>and put them in your room.",q4title:"Suddenly, it starts raining",q4sub:"Rainy Sunday.<br>What do you want to do right now?",q5title:"Three in the Afternoon",q5sub:"An empty cup appears on the table.<br>What would you like to drink?",q6title:"Sunday soundtrack",q6sub:"Go with your first instinct. Tap a card to play.",q7title:"Someone knocks",q7sub:"5:20 PM.<br>Your friend suddenly drops by.",room3:"Choose 3",rainy:"Rainy"}
};
const dataEN={
 wake:[["☀","07:30","Naturally awake.",null],["◌","09:00","Just right.",null],["☁","10:30","Of course it’s Sunday. Sleep in.",null],["☾","12:00","Lunch is almost ready when you wake.",null]],
 view:[["tree","A sea of green",null],["city","City streets",null],["sea","The seaside",null],["street","A quiet little street",null]],
 room:[["plant","Plants",null],["book","Books",null],["candle","Scented candle",null],["speaker","A speaker",null],["poster","A poster",null],["bear","A plush toy",null]],
 rain:[["☕","Go to a nearby café",""],["▱","Stay in and read",""],["♫","Put on headphones and lie down",""],["☂","Go for a walk with an umbrella",""]],
 drink:[["latte","Latte",""],["earlgrey","Earl Grey",""],["matcha","Matcha",""],["americano","Iced Americano",""],["lemon","Lemon Tea",""]],
 music:[["acoustic","Acoustic",""],["citypop","City Pop",""],["rock","Rock",""],["jazz","Jazz",""]],
 friend:[["♧","Come in, I just made tea.",""],["☕","Let’s go sit somewhere nearby.",""],["☾","I feel like being alone today.",""],["→","Let’s go! Let’s play!",""]]
};
const profilesEN={
 green:{title:"GREEN SUNDAY",name:"Plant-Loving Soul",tags:["Natural","Slow","Warm"],quote:"I enjoy the quiet things."},
 coffee:{title:"COFFEE SUNDAY",name:"City Coffee Soul",tags:["Curious","Social","Refined"],quote:"There is always somewhere new to go."},
 midnight:{title:"MIDNIGHT SUNDAY",name:"Midnight Romantic",tags:["Emotional","Creative","Free"],quote:"My inner world is a beautiful place."},
 wander:{title:"WANDER SUNDAY",name:"Free-Spirited Wanderer",tags:["Independent","Playful","Spontaneous"],quote:"Let's see where the day takes me."},
 soft:{title:"SOFT SUNDAY",name:"Soft-Life Soul",tags:["Gentle","Cozy","Romantic"],quote:"Life should feel good, too."},
 open:{title:"OPEN SUNDAY",name:"Open-Breathing Soul",tags:["Open","Adventurous","Light"],quote:"I need a little more sky."}
};
let lang=localStorage.getItem("sunday-room-lang")||"zh";
function T(k){return I18N[lang][k]||I18N.zh[k]||k}
function activeData(key){return lang==="en"?dataEN[key]:data[key]}
function activeProfile(type){return lang==="en"?profilesEN[type]:profiles[type]}
function applyLanguage(){
  document.documentElement.lang=lang==="en"?"en":"zh-CN";
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=T(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-html]").forEach(el=>el.innerHTML=T(el.dataset.i18nHtml));
  $("langBtn").textContent=lang==="en"?"EN / 中":"中 / EN";
  // Re-render choices in the selected language while preserving scores/answers.
  init();
  // Restore visual selections.
  ["wake","view","room","rain","drink","music","friend"].forEach((key)=>{
    const el=$(key); if(!el)return;
    if(key==="room") state.room.forEach(i=>el.children[i]?.classList.add("selected"));
    else if(state.answers[key]!==undefined) el.children[state.answers[key]]?.classList.add("selected");
  });
  if(state.page===3){$("n3").textContent=lang==="en"?`Choose ${state.room.length} / 3`:`选择 ${state.room.length} / 3`}
  if(state.page>0 && state.page<8) updateNextState();
  if(state.page===8) renderResultLanguage();
}
function updateNextState(){
  for(let n=1;n<=7;n++){
    const btn=$("n"+n); if(!btn)continue;
    if(n===3) btn.classList.toggle("enabled",state.room.length===3);
    else {const k=["","wake","view","room","rain","drink","music","friend"][n];btn.classList.toggle("enabled",state.answers[k]!==undefined)}
  }
}
function renderResultLanguage(){
  const type=$("resultTitle").dataset.type; if(!type)return;
  const p=activeProfile(type);
  $("resultTitle").textContent=p.title;$("resultName").textContent=p.name;
  $("chips").innerHTML=p.tags.map(x=>`<span class="chip">${x}</span>`).join("");
  $("quote").textContent="“ "+p.quote+" ”";
  const a=state.answers;const d=activeData("drink"),m=activeData("music");
  const wake=(activeData("wake")[a.wake]||[])[1]||"—",drink=(d[a.drink]||[])[1]||"—",music=(m[a.music]||[])[1]||"—";
  $("meta").innerHTML=`<div>◷<b>${wake}</b></div><div>☁<b>${T("rainy")}</b></div><div>♧<b>${drink}</b></div><div>♫<b>${music}</b></div>`;
}
const oldInit=init;
init=function(){
  renderOptions("wake","wake");renderTiles("view","view");renderTiles("room","room",true);renderOptions("rain","rain");renderTiles("drink","drink");renderTiles("music","music");renderOptions("friend","friend");
  // Update the room button without changing its enabled state.
  if($("n3")) $("n3").textContent=state.room.length?`${lang==="en"?"Choose":"选择"} ${state.room.length} / 3`:T("choose3");
};
// Override the renderers' data source without changing scoring maps.
const baseRenderOptions=renderOptions;
renderOptions=function(id,key){
  const el=$(id);el.innerHTML="";activeData(key).forEach((o,i)=>{const d=document.createElement("button");d.className="option";d.innerHTML=`<span class="icon">${o[0]}</span><span class="copy"><b>${o[1]}</b>${o[2]?`<small>${o[2]}</small>`:""}</span>`;d.addEventListener("click",()=>selectOne(el,key,i,d));el.appendChild(d);});
};
const baseRenderTiles=renderTiles;
renderTiles=function(id,key,multi=false){
  const el=$(id);el.innerHTML="";activeData(key).forEach((o,i)=>{const d=document.createElement("button");d.className="tile";const title=o[1];let sub="";if(key==="music"){sub=`<small class="music-meta">${data.music[i][4]}</small>`}else if(key==="drink" && o[2])sub=`<small class="drink-cn">${o[2]}</small>`;d.innerHTML=`<div class="pic">${key==="room"?roomSvg(o[0]):key==="drink"?drinkSvg(o[0]):key==="music"?musicSvg(o[0]):svg(o[0])}</div><div class="label">${title}${sub}</div>`;d.addEventListener("click",()=>{if(multi){if(d.classList.contains("selected")){d.classList.remove("selected");state.room=state.room.filter(x=>x!==i);applyScore(answerMap(key,i),-1)}else if(state.room.length<3){d.classList.add("selected");state.room.push(i);applyScore(answerMap(key,i),1)}$("n3").textContent=`${lang==="en"?"Choose":"选择"} ${state.room.length} / 3`;$("n3").classList.toggle("enabled",state.room.length===3)}else{[...el.children].forEach(x=>x.classList.remove("selected"));d.classList.add("selected");const old=state.answers[key];if(old!==undefined)applyScore(answerMap(key,old),-1);applyScore(answerMap(key,i),1);state.answers[key]=i;$(`n${state.page}`).classList.add("enabled")}});el.appendChild(d)});
};
const oldFinish=finish;
finish=function(){
  if(state.answers.friend===undefined)return;
  const ranked=Object.entries(state.score).sort((a,b)=>b[1]-a[1]);const type=ranked[0][0],p=activeProfile(type);
  $("roomScene").innerHTML=sceneFor(type);$("resultTitle").dataset.type=type;$("resultTitle").textContent=p.title;$("resultName").textContent=p.name;$("chips").innerHTML=p.tags.map(x=>`<span class="chip">${x}</span>`).join("");$("quote").textContent="“ "+p.quote+" ”";
  const a=state.answers;const wake=(activeData("wake")[a.wake]||[])[1]||"—",drink=(activeData("drink")[a.drink]||[])[1]||"—",music=(activeData("music")[a.music]||[])[1]||"—";
  $("meta").innerHTML=`<div>◷<b>${wake}</b></div><div>☁<b>${T("rainy")}</b></div><div>♧<b>${drink}</b></div><div>♫<b>${music}</b></div>`;
  show(8);burst();playTrack(typeToTrack[type],p.title)
};
$("langBtn").addEventListener("click",()=>{lang=lang==="zh"?"en":"zh";localStorage.setItem("sunday-room-lang",lang);applyLanguage()});
// Keep share/restart buttons working; refresh language once after all overrides are installed.
applyLanguage();
