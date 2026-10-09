function calculateBudget({hotel=420,ticket=450,shopping=0,rate=.9,night=65,reserve=.1}={}) {
  if (![hotel,ticket,shopping,rate,night,reserve].every(Number.isFinite) || hotel<0 || ticket<0 || shopping<0 || rate<=0 || ![65,70].includes(night) || ![0,.1,.15].includes(reserve)) throw new Error('請輸入有效且非負的金額；匯率須大於0。');
  const hkd=night*2, rmb=hotel*3+ticket*2+1240+455+116+shopping;
  const base=rmb+hkd*rate, buffer=base*reserve;
  return {rmb,hkd,base,buffer,total:base+buffer,perPerson:(base+buffer)/2,daily:[hotel+40+45,hotel+440+230+ticket*2,hotel+480+110,280+70+116]};
}
if (typeof document==='undefined') {
  const assert=require('node:assert/strict');
  const b=calculateBudget();
  assert.equal(b.rmb,3971); assert.equal(b.daily[1],1990); assert.equal(b.daily[2],1010); assert.equal(b.hkd,130); assert.equal(b.base,4088);
  assert.equal(Math.round(b.total),4497); assert.equal(b.daily.reduce((a,v)=>a+v,0),3971);
  assert.equal(calculateBudget({night:70}).hkd,140);
  assert.equal(calculateBudget({shopping:400}).rmb,4371);
  assert.equal(calculateBudget({hotel:0,ticket:0,reserve:0}).total,1928);
  assert.throws(()=>calculateBudget({hotel:-1})); assert.throws(()=>calculateBudget({rate:0}));
  console.log('預算驗證通過：雙幣、每日加總、夜間票、購物與輸入邊界。');
} else {
const $=id=>document.getElementById(id);
const money=n=>'¥'+Math.round(n).toLocaleString('zh-HK');
const map=place=>'https://uri.amap.com/search?keyword='+encodeURIComponent(place)+'&city='+encodeURIComponent(place.includes('香港')?'香港':'珠海')+'&view=map';
const link=place=>'<a class="maplink" href="'+map(place)+'" target="_blank" rel="noopener">地圖搜尋 <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg></a>';
const days=[
 {name:'16 日・夜渡大橋',sub:'今晚只有一個任務：平安抵達，洗澡睡覺。',route:'香港口岸 → 金巴港珠線 → 珠海公路口岸 → 拱北全季',note:'去程23:00出發仍屬日間票時段；若實際適用夜間票，兩人多預留HK$10。晚到房間一定要保留16日晚，不是訂17日下午入住。',slots:[
 ['上午','旅程未開始','不安排珠海景點。先完成工作及收拾行李。','無旅程交通','¥0',''],
 ['下午','出發前吃晚餐，檢查證件','建議在香港先用餐；前往香港口岸的香港市內交通與晚餐不包含在本文預算。按你所在位置自行倒推接駁，留足離境時間。','香港市內接駁另計','不計入本攻略',''],
 ['晚上','23:00 香港口岸 → 約00:30–01:15酒店','23:00開始辦香港離境，乘往珠海的金巴；珠海入境後再叫車。車上好好休息，到店若餓可買便利店簡餐，預留兩人¥40；不再去夜市。若23:00已登車，通常可更早到店。','金巴40–50分鐘；整段約90–135分鐘；口岸至酒店叫車15–25分鐘','金巴兩人HK$130–140＋叫車¥35–55＋宵夜¥40','港珠澳大桥珠海公路口岸']
 ]},
 {name:'18 日・城市與海',sub:'晚起、看一點歷史，再沿海往南。',route:'拱北酒店 → 珠海博物館 → 日月貝／海韻城 → 城市陽台 → 吉大晚餐 → 酒店',note:'珠海博物館需預約；免費，週二至日09:00–17:00，16:30停止入館。日月貝只看劇院外觀，不含入場或演出票。海岸散步累了，日月貝與城市陽台二選一。',slots:[
 ['上午','10:30早餐，12:00博物館','睡到自然醒，附近粥粉早餐兩人約¥80。11:15左右叫車往珠海博物館（海虹路88號），預約12:00附近時段，參觀60–75分鐘，了解珠海城市與海洋文化。不要因為晚起把參觀壓成打卡。','酒店→博物館網約車約30–40分鐘，¥35–50／車','早餐¥80；博物館免費','珠海博物馆 海虹路88号'],
 ['下午','13:30午餐，日月貝與海邊咖啡','博物館→海韻城，普通餐館午餐兩人約¥140。14:15–15:00看日月貝外觀、散步30–45分鐘；15:15左右叫車南下城市陽台。15:45坐下喝咖啡或糖水，兩人約¥80，休息45–60分鐘，再在附近海邊走20–30分鐘。','博物館→海韻城10–15分鐘¥15–25；日月貝→城市陽台15–25分鐘¥20–35','午餐¥140＋咖啡甜品¥80；公共外圍按免費估','珠海日月贝 海韵城'],
 ['晚上','18:00吉大粵菜，20:00前後回酒店','海邊收尾後在吉大選家常粵菜，兩人抓¥180，點兩菜一湯或清蒸魚配蔬菜。長隆翌日放慢步調，晚餐後回酒店休息；不加北山、唐家或夜市。','附近步行10–20分鐘；吉大→酒店叫車15–25分鐘¥20–30','晚餐¥180；當日叫車總額預留¥110','珠海吉大']
 ],rain:[
 ['上午','睡飽早餐，照常參觀博物館','保留10:30早餐及12:00博物館。下雨時提早10–15分鐘叫車；預約不上或臨時閉館，就取消文化行程，直接改吉大室內商場與午餐，切勿白跑。','酒店→博物館30–45分鐘¥35–55／車','早餐¥80；博物館免費','珠海博物馆 海虹路88号'],
 ['下午','室內午餐與吉大商場，留長一點休息','跳過日月貝與城市陽台，博物館後南下吉大商圈，選室內餐館午餐約¥140、咖啡糖水¥80；商場店鋪時段待當日確認。雨大就午餐後回酒店午睡，不用把下午填滿。','博物館→吉大約25–35分鐘¥30–45；室內步行','午餐¥140＋咖啡¥80；購物另計','珠海吉大 免税商场'],
 ['晚上','吉大晚餐或酒店附近吃飯','仍以家常粵菜兩人¥180為預留；若已回酒店則就近用餐。暴雨不安排海邊，雷雨時也不在有遮蔭的戶外長留。','吉大→酒店20–30分鐘¥20–35；就近用餐可步行','晚餐¥180；叫車加價可動用備用金','全季酒店 珠海拱北口岸粤海东路店']
 ]},
 {name:'17 日・長隆海洋王國',sub:'17日固定入園。睡夠再出發，鯨鯊與企鵝是主角。',route:'酒店 → 橫琴長隆入口 → 鯨鯊館 → 極地區 → 海象區 → 橫琴海／出口 → 酒店',note:'規劃暫用10:00開園；官網10月9日列10:00–20:00，不能當作10月17日時間表。16日出發前再查17日開閉園、表演與維修公告。兩名成人門票按¥450／人預留；實際日期價格和回鄉證人工驗票流程待訂票頁／客服確認。',slots:[
 ['上午','09:00早餐，09:45叫車，約11:00入園','凌晨抵達後先睡約7–8小時，09:00在酒店附近早餐，兩人¥60；09:45出發，約10:40–11:00到長隆，再留15–30分鐘安檢驗票，約11:00–11:30入園。先往鯨鯊館，觀賞抓45–60分鐘。若昨夜過關延誤就再晚出門，刪機動遊戲與第二場表演；17日固定入園，不換到18日。','酒店→長隆55–75分鐘，塞車可85分鐘以上，¥90–130／車；入園後步行約15–25分鐘至鯨鯊館','早餐¥60；門票兩人預留¥900','横琴长隆海洋王国'],
 ['下午','12:15午餐，企鵝館與一場表演','極地區橫琴灣畔餐廳午餐抓¥180。13:00後逛企鵝館及極地區；表演只選一場，依當天場次就近決定，預留20–30分鐘候場。15:00坐下休息30–45分鐘，再往海象區。熱門遊戲排隊超45分鐘就略過。','園內步行，館與館約10–20分鐘；路線按園區圖與當天開放情況調整','午餐¥180＋飲水／小食預留¥40','横琴长隆海洋王国 企鹅馆'],
 ['晚上','17:00晚餐，煙花可選，散場回酒店','海象餐廳晚餐兩人約¥160。想看煙花就按當日官方時間到指定觀賞區，預留30–45分鐘候場；不預設一定演出。體力不足可18:00–19:00提前離園。看完後留30–45分鐘步行與候車，再回拱北；今晚不另加宵夜行程。','長隆→酒店60–85分鐘或以上；散場叫車¥100–150，全天往返預留¥230','晚餐¥160；煙花一般含門票但可能取消','横琴长隆海洋王国 网约车上客点']
 ],rain:[
 ['上午','先看官方公告，再決定出門','小雨且園區正常營運，仍按09:45叫車，入園先去鯨鯊館，轉場穿雨衣。若官方因颱風或暴雨停運，不前往；改酒店休息與拱北室內用餐，票務按官方退改規則。','營運時酒店→長隆60–85分鐘或以上，¥100–150／車','正常開園仍預留門票¥900；停運不能假設自動退款','横琴长隆海洋王国'],
 ['下午','鯨鯊館、企鵝館與室內休息','不為過山車冒雨排隊；只在官方正常開放前提下參觀室內館，館間仍要經戶外。午餐灣畔或鄰近開放餐廳約¥180，保留飲水¥40；雷電時遵從現場指引，劇場是否開放需看公告。','館間步行10–20分鐘；雨天加15–20分鐘緩衝','午餐¥180＋飲水¥40；戶外設施可能暫停','横琴长隆海洋王国 鲸鲨馆'],
 ['晚上','不等煙花，提早安全回酒店','17:00晚餐約¥160後視雨勢離園，別將煙花當成必看。若園區全天關閉，可改拱北室內餐飲與商場；17日是固定日期，不改18日或返港日補長隆；若官方全日停園，此必去項目將無法完成。遇強風、積水或停運，按官方安全安排調整整趟旅程。','約車回酒店60–90分鐘以上；加價動用備用金','晚餐¥160；景區關閉時實際支出依退改及替代活動重算','全季酒店 珠海拱北口岸粤海东路店']
 ]},
 {name:'19 日・早茶返港',sub:'用一餐早茶收尾，把最後的時間留給過關。',route:'酒店 → 金悅軒珠海總店 → 酒店附近購物／午餐 → 酒店取行李 → 珠海公路口岸 → 香港口岸',note:'硬性底線是18:00回到香港口岸，本方案以16:30–17:00完成香港入境為目標。14:30離開酒店、約15:00到珠海口岸；遇客流或雨天提早。19日週一不排通常閉館的珠海博物館。',slots:[
 ['上午','09:30早茶，11:30前退房寄存','先確認金悅軒珠海總店當日供早茶，兩人預留¥160，慢吃60–90分鐘；早餐較貴時點少一些，或以¥60–90粥粉店替代。回酒店11:30前收拾退房，寄存行李。','酒店→金悅軒約5–10分鐘¥10–15，往返或步行按體力選','早茶¥160；寄存是否免費需酒店確認','金悦轩海鲜酒家 珠海总店 情侣南路265号'],
 ['下午','12:00附近購物午餐，14:30出發返港','在酒店附近蓮花路一帶買手信，不跨區；12:30簡單午餐兩人¥100，飲品¥20。14:00回酒店拿行李、叫車；14:30出發往「港珠澳大橋珠海公路口岸」。約15:00到口岸，辦出境、搭金巴、辦香港入境，目標16:30–17:00完成。','酒店→珠海公路口岸15–25分鐘¥35–50；過關候車＋過橋＋HK入境抓90–120分鐘','午餐¥100＋飲品¥20；當日叫車共¥70；金巴兩人¥116','港珠澳大桥珠海公路口岸'],
 ['晚上','18:00前已回香港口岸','到此完成本攻略。往香港市區的接駁另計；如果你18:00其實還要到其他香港地點，需把這段接駁時間再往前扣除。','香港口岸後交通另計','不計入本攻略','港珠澳大桥香港口岸']
 ],rain:[
 ['上午','早茶後退房，行李寄存','早茶或酒店附近餐館室內用餐；雨天不在海邊散步。11:30前完成退房寄存，提早核對金巴營運公告。','短程叫車5–15分鐘，¥10–20／車','早茶預留¥160；酒店寄存先確認','金悦轩海鲜酒家 珠海总店'],
 ['下午','刪掉購物，13:30–14:00提早返港','在酒店附近簡單午餐，兩人¥100＋飲品¥20。下雨或口岸客流偏多就13:30–14:00離開酒店，不等14:30。若大橋因惡劣天氣停運，安全優先並依官方指引，18:00不能視為有保證。','酒店→珠海口岸20–35分鐘；過關、候車與過橋至少預留2小時','叫車加價由備用金支付；金巴¥116／兩人','港珠澳大桥珠海公路口岸'],
 ['晚上','確認已完成香港入境','正常情況下18:00前已在香港口岸；天文惡劣天氣或停運須提前改動返港日，不能靠末刻換路線追時間。','香港境內接駁另計','不計入本攻略','港珠澳大桥香港口岸']
 ]}
];
[days[1],days[2]]=[days[2],days[1]];
let selectedDay=1;
function renderDay(i,rain=false){
 const d=days[i],slots=rain&&d.rain?d.rain:d.slots;
 const b=readBudget(); const cost=b?money(b.daily[i])+(i===0?'＋HK$'+b.hkd:''):'待輸入有效預算';
 return '<div class="day-banner"><div><h3>'+d.name+'</h3><p>'+d.sub+'</p></div><div class="day-cost"><span>兩人當日估算</span><strong>'+cost+'</strong><span>'+ (i===3?'退房日不含住宿':'含當晚住宿') +'；不含購物／備用金</span></div></div><p class="route">'+(rain&&d.rain?'雨天：按以下替代安排走；原晴天路線為 ':'順路走：')+d.route+'</p>'+slots.map(s=>'<article class="time-row"><div class="time-label"><b>'+s[0]+'</b><span>悠閒安排</span></div><div class="time-content"><h4>'+s[1]+'</h4><p>'+s[2]+'</p><div class="practical"><span>交通｜'+s[3]+'</span><span>費用｜'+s[4]+'</span>'+(s[5]?link(s[5]):'')+'</div></div></article>').join('')+'<p class="day-warning">'+d.note+(rain?'<br><strong>雨天成本提示：</strong>本頁日額仍是原方案基準；加價由備用金支付。景區停運／退票與購物改動須按實際重算。':'')+'</p>';
}
function showDay(){ $('day-panel').innerHTML=renderDay(selectedDay,$('rain').checked);document.querySelectorAll('[data-day]').forEach(btn=>btn.setAttribute('aria-pressed',String(+btn.dataset.day===selectedDay))); }
function readInputs(){return Object.fromEntries(['hotel','ticket','shopping','rate','night','reserve'].map(k=>[k,Number($(k).value)]));}
function readBudget(){if(!$('budget-form').checkValidity())return null;try{return calculateBudget(readInputs());}catch{return null;}}
function updateBudget(){
 const valid=$('budget-form').checkValidity();const b=valid?readBudget():null;
 if(!b){$('budget-error').textContent='請填寫範圍內的有效數值，匯率須大於0。';$('total').textContent='請檢查輸入';$('per-person').textContent='';$('currency-split').textContent='';$('reserve-line').textContent='';$('hero-total').textContent='待計算';$('cost-body').innerHTML='';$('daily-body').innerHTML='';showDay();return;}
 $('budget-error').textContent='';const v=readInputs();$('total').textContent=money(b.total);$('per-person').textContent='每人約 '+money(b.perPerson);$('hero-total').textContent='約 '+money(b.total);
 $('currency-split').textContent='原幣支出：RMB '+b.rmb.toLocaleString('zh-HK')+'＋HK$'+b.hkd+'；換算小計 '+money(b.base)+'。';
 $('reserve-line').textContent='另留 '+(v.reserve*100)+'% 備用金 '+money(b.buffer)+'；匯率假設1 HKD = '+v.rate.toFixed(2)+' RMB，非即時匯價。';
 const rows=[['住宿',v.hotel*3,'一間房 × 3 晚'],['餐飲與飲品',1240,'兩人；早餐另計，未假設含房價'],['市內網約車',455,'每段一車，兩人分攤'],['長隆門票',v.ticket*2,'成人 × 2，指定日價待核'],['回程金巴',116,'¥58 × 2'],['購物',v.shopping,'自主設定，預設不購物']];
 $('cost-body').innerHTML=rows.map(r=>'<tr><th>'+r[0]+'</th><td>'+money(r[1]/2)+'</td><td>'+money(r[1])+'</td><td>'+r[2]+'</td></tr>').join('')+'<tr><th>去程金巴</th><td>HK$'+v.night+'</td><td>HK$'+b.hkd+'</td><td>日／夜票按實際適用時段</td></tr><tr><th>換算小計</th><td>'+money(b.base/2)+'</td><td>'+money(b.base)+'</td><td>以上HKD按設定匯率折算一次</td></tr><tr><th>備用金</th><td>'+money(b.buffer/2)+'</td><td>'+money(b.buffer)+'</td><td>小計 × '+v.reserve*100+'%</td></tr>';
 const breakdown=[money(v.hotel)+'／40／45／0',money(v.hotel)+'／440／230／'+v.ticket*2,money(v.hotel)+'／480／110／0','0／280／70／0＋回程116'];
 $('daily-body').innerHTML=b.daily.map((n,i)=>'<tr><th>10/'+(16+i)+'</th><td>'+breakdown[i]+'（RMB）</td><td>'+money(n)+(i===0?'＋HK$'+b.hkd:'')+'</td><td>'+money(n/2)+(i===0?'＋HK$'+v.night:'')+'</td></tr>').join('')+'<tr><th>全程（不含備用金）</th><td>上列每日加總＋購物'+money(v.shopping)+'</td><td>'+money(b.rmb)+'＋HK$'+b.hkd+'</td><td>'+money(b.rmb/2)+'＋HK$'+v.night+'</td></tr>';
 showDay();
}
const tasks=[
 ['預訂16日至19日三晚同一間全季','確認一間大床房、總價、早餐及取消政策；名稱須包含粵海東路店。'],
 ['通知酒店17日凌晨晚到並保留16日晚房間','取得店方確認，並問回鄉證入住、19日寄存行李與退房時限。'],
 ['檢查兩人香港永久性居民身份證及回鄉證','攜帶原件；確認回鄉證有效。不要把證件號碼存進公開網頁。'],
 ['預訂17日海洋王國兩名成人門票','使用回鄉證資料，核對指定日票價、退改、取票／人工驗票；勿誤買飛船樂園。'],
 ['預約18日珠海博物館時段','官網／公眾號；港澳證件預約若不成功，致電0756-3341233確認。'],
 ['出發前一天查長隆17日營運時間與表演','本攻略不把10月9日時間表套到17日；下載園區地圖及確認維修項目。'],
 ['致電金悅軒確認19日早茶','0756-8133133；問時段、最低消費、茶位費與留位。'],
 ['出發前48小時及當天查天氣與金巴公告','留意颱風、暴雨及停運。19日按天氣提早返港，勿只依一般班次。'],
 ['準備手機數據、叫車與支付','確認內地數據、可接電話、滴滴／高德、微信／支付寶及少量現金；金巴支付方式另查。'],
 ['帶輕便雨衣、遮陽用品、步行鞋及充電寶','長隆適量飲水可帶；依官方規定，除嬰兒食品及適量飲水外不帶其他食物飲品。'],
 ['把酒店地址與返港時間存到手機','19日14:00回酒店，14:30出發，15:00左右到珠海口岸；雨天提前。'],
 ['購物設上限，累了刪站','先刪城市陽台／日月貝其中一個、長隆熱門遊戲、19日購物。']
];
let saved=[];let storageOK=true;
try{const parsed=JSON.parse(localStorage.getItem('zhuhai-20261017-checks')||'[]');saved=Array.isArray(parsed)?parsed.filter(n=>Number.isInteger(n)&&n>=0&&n<tasks.length):[];}catch{storageOK=false;}
$('checks').innerHTML=tasks.map((t,i)=>'<label class="check-item"><input type="checkbox" data-check="'+i+'" '+(saved.includes(i)?'checked':'')+'><span>'+t[0]+'<small>'+t[1]+'</small></span></label>').join('');
function saveChecks(){const checked=[...document.querySelectorAll('[data-check]:checked')].map(e=>+e.dataset.check);$('check-count').textContent=checked.length+'／'+tasks.length+' 項完成';try{localStorage.setItem('zhuhai-20261017-checks',JSON.stringify(checked));}catch{storageOK=false;}$('storage-message').textContent=storageOK?'勾選會保留在此裝置的目前瀏覽器。':'此瀏覽器無法保存資料；勾選只在目前頁面有效。';}
$('checks').addEventListener('change',saveChecks);$('clear-checks').addEventListener('click',()=>{document.querySelectorAll('[data-check]').forEach(e=>e.checked=false);saveChecks();});saveChecks();
document.querySelectorAll('[data-day]').forEach(btn=>btn.addEventListener('click',()=>{selectedDay=+btn.dataset.day;showDay();}));$('rain').addEventListener('change',showDay);
$('budget-form').addEventListener('input',updateBudget);$('budget-form').addEventListener('change',updateBudget);$('budget-form').addEventListener('submit',e=>e.preventDefault());$('budget-form').addEventListener('reset',()=>setTimeout(updateBudget,0));
document.querySelectorAll('[data-place]').forEach(a=>{a.href=map(a.dataset.place);a.target='_blank';a.rel='noopener';});
let toastTimer;function toast(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2600);}
document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(btn.dataset.copy);toast('酒店地址已複製');}catch{toast('此瀏覽器無法複製，請長按上方地址選取。');}}));
const printDays=document.createElement('div');printDays.className='print-days';$('days').appendChild(printDays);
window.addEventListener('beforeprint',()=>{printDays.innerHTML=days.map((_,i)=>renderDay(i,$('rain').checked)).join('');document.querySelectorAll('details').forEach(d=>{d.dataset.wasOpen=d.open?'1':'0';d.open=true;});});window.addEventListener('afterprint',()=>{document.querySelectorAll('details').forEach(d=>d.open=d.dataset.wasOpen==='1');});$('print').addEventListener('click',()=>window.print());
updateBudget();


const menu=document.getElementById('menu-toggle');
menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));document.querySelector('header').classList.toggle('is-open',!expanded);});
document.querySelectorAll('header nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('header').classList.remove('is-open');menu.setAttribute('aria-expanded','false');}));
let galleryIndex=0;
const galleryData=[['assets/ocean-gallery.jpg','深藍之中，遇見鯨鯊','17 OCT · 海洋王國','1'],['assets/coast-gallery.jpg','海風裡，慢慢走回城市','18 OCT · 珠海海岸','2']];
function galleryStep(){galleryIndex=1-galleryIndex;const x=galleryData[galleryIndex];document.getElementById('gallery-main').src=x[0];document.getElementById('gallery-main').alt=x[1]+'，AI主題影像';document.getElementById('gallery-title').textContent=x[1];document.getElementById('gallery-date').textContent=x[2];document.getElementById('gallery-link').dataset.galleryDay=x[3];document.getElementById('gallery-count').textContent='0'+(galleryIndex+1)+' / 02';}
document.querySelectorAll('[data-gallery-step]').forEach(b=>b.addEventListener('click',galleryStep));
document.querySelectorAll('[data-gallery-day]').forEach(a=>a.addEventListener('click',e=>{selectedDay=Number(e.currentTarget.dataset.galleryDay);showDay();}));

}
