function calculateBudget({hotel=420,ticket=450,shopping=0,rate=.9,night=65,reserve=.1}={}) {
  if (![hotel,ticket,shopping,rate,night,reserve].every(Number.isFinite) || hotel<0 || ticket<0 || shopping<0 || rate<=0 || ![65,70].includes(night) || ![0,.1,.15].includes(reserve)) throw new Error('請輸入有效且非負的金額；匯率須大於0。');
  const hkd=night*2, rmb=hotel*3+ticket*2+1240+410+116+shopping;
  const base=rmb+hkd*rate, buffer=base*reserve;
  return {rmb,hkd,base,buffer,total:base+buffer,perPerson:(base+buffer)/2,daily:[hotel+40+55,hotel+440+140+ticket*2,hotel+480+160,280+55+116]};
}
if (typeof document==='undefined') {
  const assert=require('node:assert/strict');
  const b=calculateBudget();
  assert.equal(b.rmb,3926); assert.equal(b.daily[1],1900); assert.equal(b.daily[2],1060); assert.equal(b.hkd,130); assert.equal(b.base,4043);
  assert.equal(Math.round(b.total),4447); assert.equal(b.daily.reduce((a,v)=>a+v,0),3926);
  assert.equal(calculateBudget({night:70}).hkd,140);
  assert.equal(calculateBudget({shopping:400}).rmb,4326);
  assert.equal(calculateBudget({hotel:0,ticket:0,reserve:0}).total,1883);
  assert.throws(()=>calculateBudget({hotel:-1})); assert.throws(()=>calculateBudget({rate:0}));
  console.log('預算驗證通過：雙幣、每日加總、夜間票、購物與輸入邊界。');
} else {
const $=id=>document.getElementById(id);
const money=n=>'¥'+Math.round(n).toLocaleString('zh-HK');
const map=place=>'https://uri.amap.com/search?keyword='+encodeURIComponent(place)+'&city='+encodeURIComponent(place.includes('香港')?'香港':'珠海')+'&view=map';
const link=place=>'<a class="maplink" href="'+map(place)+'" target="_blank" rel="noopener">地圖搜尋 <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg></a>';
const days=[
 {
  "name": "16 日・夜渡大橋",
  "sub": "今晚只有一個任務：平安抵達，洗澡睡覺。",
  "route": "香港口岸 → 金巴港珠線 → 珠海公路口岸 → 十字門桔子酒店",
  "note": "去程23:00仍屬日間票時段；若實際適用夜間票，兩人多預留HK$10。訂16日晚房、19日退房，並確認17日凌晨晚到仍保留房間。",
  "slots": [
   [
    "上午",
    "旅程未開始",
    "不安排珠海景點；先完成工作及收拾行李。",
    "無旅程交通",
    "¥0",
    ""
   ],
   [
    "下午",
    "出發前吃晚餐，檢查證件",
    "在香港先吃飯；香港市內接駁及晚餐另計，按所在位置倒推前往香港口岸的時間。",
    "香港市內接駁另計",
    "不計入本攻略",
    ""
   ],
   [
    "晚上",
    "23:00香港口岸 → 約00:40–01:30酒店",
    "辦香港離境、乘港珠線金巴、珠海入境後按App指定上客區叫車。到店若餓可買便利店簡餐，兩人預留¥40；不再去夜市。若23:00已登車，通常可更早到店。",
    "金巴40–50分鐘；整段約100–150分鐘；珠海口岸→酒店20–35分鐘",
    "金巴兩人HK$130–140＋叫車¥40–70／車＋宵夜¥40",
    "港珠澳大桥珠海公路口岸"
   ]
  ]
 },
 {
  "name": "17 日・海洋王國與煙花",
  "sub": "17日固定海洋王國一日遊，用煙花收尾。",
  "route": "十字門酒店 → 長隆入口 → 鯨鯊館 → 極地區 → 海象區 → 橫琴海煙花 → 酒店",
  "note": "只買海洋王國成人一日票，不加飛船樂園或《長隆秀》。10月10日官方訂票頁選17日顯示標準票¥450／人；優惠及退改按付款頁。官方10月整月開放資訊列10:00–20:00，17日設施及煙花場次仍須出發前核對，可能調整或取消。",
  "slots": [
   [
    "上午",
    "09:00早餐，09:45叫車，約10:30–11:00入園",
    "凌晨抵達後先睡約7–8小時，酒店附近早餐兩人¥60；09:45出發，留15–30分鐘安檢驗票。入園後先看鯨鯊館45–60分鐘。若昨晚過關延誤就晚一點出門，刪機動遊戲，保留17日入園。",
    "酒店→長隆25–35分鐘，¥40–60／車；週六另留15–30分鐘交通緩衝；入口→鯨鯊館步行約15–25分鐘",
    "早餐¥60；成人門票兩人按¥900計",
    "横琴长隆海洋王国"
   ],
   [
    "下午",
    "12:15午餐，企鵝館與一場表演",
    "灣畔餐廳午餐兩人¥180；13:00後逛企鵝館及極地區，只挑一場常規表演，留20–30分鐘候場。15:00坐下休息30–45分鐘，再往海象區。熱門遊戲排隊超45分鐘便略過，把體力留給晚上。",
    "園內步行，館與館約10–20分鐘；以當日園區圖及開放情況調整",
    "午餐¥180＋飲水／小食¥40",
    "横琴长隆海洋王国 企鹅馆"
   ],
   [
    "晚上",
    "17:00晚餐，煙花收尾後回酒店",
    "海象餐廳晚餐兩人¥160；按當日官方煙花時間提前30–45分鐘到指定觀賞區，普通觀賞不用加購門票。看完留30–45分鐘步行至指定上客點及候車，再回十字門酒店；不加宵夜行程。若煙花取消就提早離園，不轉場追其他演出。",
    "長隆→酒店約30–50分鐘；散場塞車可更久。回程¥60–90／車，全天往返預留¥140",
    "晚餐¥160；煙花含於一般入園體驗；快趣達等另計",
    "横琴长隆海洋王国 网约车上客点"
   ]
  ],
  "rain": [
   [
    "上午",
    "先看官方公告，再決定出門",
    "小雨且正常開園，仍09:45叫車，入園先去鯨鯊館，轉場穿雨衣。若官方因颱風暴雨停園，就不前往，改酒店休息與十字門室內餐飲；按購票條款辦退改。",
    "正常營運時酒店→長隆約35–50分鐘，¥50–80／車",
    "開園仍按門票¥900預留；停園不能假設自動退款",
    "横琴长隆海洋王国"
   ],
   [
    "下午",
    "鯨鯊館、企鵝館與室內休息",
    "不為過山車冒雨排隊。只在官方正常開放前提下參觀室內館，館間仍經戶外；午餐¥180、小食飲水¥40。雷電時服從現場指引，劇場是否開放看公告。",
    "館間步行10–20分鐘，雨天再留15–20分鐘緩衝",
    "午餐¥180＋飲水¥40",
    "横琴长隆海洋王国 鲸鲨馆"
   ],
   [
    "晚上",
    "煙花視官方公告，取消便提早回酒店",
    "17:00晚餐約¥160，官方如確認煙花照常上演才等待；取消則提早離園。若17日全日停園，改十字門室內用餐及商場，代表本次無法完成必去長隆，不移到18日或返港日。",
    "回酒店約40–60分鐘或以上；約車加價可動用備用金",
    "晚餐¥160；停園／退票與替代活動按實際重算",
    "桔子酒店 珠海国际会展中心十字门华发商都店 会展五路521号"
   ]
  ]
 },
 {
  "name": "18 日・城市與海",
  "sub": "晚起、看一點歷史，再沿海往南回酒店。",
  "route": "十字門酒店 → 珠海博物館 → 日月貝／海韻城 → 城市陽台 → 吉大晚餐 → 十字門酒店",
  "note": "博物館免費、需預約；週二至日09:00–17:00，16:30停止入館。日月貝只看外觀，不含演出票。海岸兩站累了二選一；酒店離北側景點較遠，保留轉場時間。",
  "slots": [
   [
    "上午",
    "10:30早餐，12:00博物館",
    "附近粥粉早餐兩人¥80；10:55左右叫車，預約12:00附近時段。參觀博物館60–75分鐘，了解珠海與海洋文化。酒店早餐目前列07:00–10:00，睡到10:30便在附近吃，不假設酒店會延長供應。",
    "酒店→博物館約45–60分鐘，¥55–80／車，另留入館緩衝",
    "早餐¥80；博物館免費",
    "珠海博物馆 海虹路88号"
   ],
   [
    "下午",
    "13:30午餐，日月貝與海邊咖啡",
    "博物館後往海韻城，午餐兩人¥140；14:15–15:00看日月貝外觀與散步。15:15左右南下城市陽台，15:45咖啡糖水¥80，坐45–60分鐘，再在海邊短走；累了刪其中一站。",
    "博物館→海韻城10–15分鐘¥15–25；日月貝→城市陽台15–25分鐘¥20–35",
    "午餐¥140＋咖啡甜品¥80；公共外圍按免費估",
    "珠海日月贝 海韵城"
   ],
   [
    "晚上",
    "18:00吉大粵菜，20:00前後回酒店",
    "兩人家常粵菜抓¥180，兩菜一湯即可；長隆翌日放慢步調，晚餐後回十字門休息。若想吃金悅軒，可在今天南下時作替代選擇，先確認價單，超出餐飲預留須另加。",
    "附近步行10–20分鐘；吉大→酒店約30–45分鐘¥40–60／車",
    "晚餐¥180；當日網約車預留¥160",
    "珠海吉大"
   ]
  ],
  "rain": [
   [
    "上午",
    "睡飽早餐，照常參觀博物館",
    "保留10:30早餐及12:00預約；下雨提早叫車。預約不上或臨時閉館，直接改十字門室內商場與午餐，避免白跑。",
    "酒店→博物館約50–70分鐘¥60–90／車",
    "早餐¥80；博物館免費",
    "珠海博物馆 海虹路88号"
   ],
   [
    "下午",
    "室內午餐與吉大商場，留長一點休息",
    "跳過日月貝與城市陽台；參觀後南下吉大室內午餐¥140、咖啡糖水¥80。雨大便回酒店午睡；若上午未去博物館，可整天留十字門，商場時段需確認。",
    "博物館→吉大25–35分鐘¥30–45；室內步行",
    "午餐¥140＋咖啡¥80；購物另計",
    "珠海吉大 免税商场"
   ],
   [
    "晚上",
    "吉大晚餐或酒店附近吃飯",
    "仍按家常粵菜¥180預留，已回酒店便就近用餐。暴雨不安排海邊，也不在有遮蔭的戶外長留。",
    "吉大→酒店約35–50分鐘¥45–70；十字門就近用餐可步行",
    "晚餐¥180；叫車加價動用備用金",
    "桔子酒店 珠海国际会展中心十字门华发商都店 会展五路521号"
   ]
  ]
 },
 {
  "name": "19 日・早茶返港",
  "sub": "只在十字門附近活動，最後時間留給過關。",
  "route": "酒店附近粵式早茶／粥粉 → 退房寄存 → 十字門華發商都午餐採買 → 酒店取行李 → 珠海口岸 → 香港口岸",
  "note": "18:00前完成香港口岸入境；保留較充裕的14:30酒店出發，約15:00–15:15到珠海口岸，目標16:30–17:15完成香港入境。19日不再跨區去拱北吃早茶或蓮花路採買。",
  "slots": [
   [
    "上午",
    "09:30附近早茶，11:30前退房寄存",
    "在十字門／灣仔附近選確認供應早餐的粵式餐館，兩人早茶預留¥160、慢吃60–90分鐘；附近沒有合適早茶就改¥60–90粥粉。未鎖定分店，出發前確認營業時間；回酒店11:30前退房寄存。",
    "附近步行；不為早餐往返拱北",
    "早茶¥160；酒店頁列免費寄存，仍向店方確認",
    "珠海 十字门华发商都 银湾路268号"
   ],
   [
    "下午",
    "12:00十字門購物午餐，14:30返港",
    "十字門華發商都附近買手信，12:30簡單午餐¥100、飲品¥20。14:00回酒店取行李及叫車，14:30往港珠澳大橋珠海公路口岸，約15:00–15:15抵達；辦出境、搭金巴及香港入境，目標16:30–17:15完成。",
    "酒店→珠海口岸約20–35分鐘，¥40–70／車；過關候車＋過橋＋香港入境抓90–120分鐘",
    "午餐¥100＋飲品¥20；當日叫車預留¥55；金巴兩人¥116",
    "港珠澳大桥珠海公路口岸"
   ],
   [
    "晚上",
    "18:00前已回香港口岸",
    "到此完成本攻略；香港市內接駁另計。18:00若還需到香港其他地點，要再把接駁時間往前扣。",
    "香港口岸後交通另計",
    "不計入本攻略",
    "港珠澳大桥香港口岸"
   ]
  ],
  "rain": [
   [
    "上午",
    "附近早餐後退房，行李寄存",
    "只選酒店附近室內餐館；11:30前退房寄存，提前核對金巴營運公告。",
    "附近步行；雨大就近用餐",
    "早茶預留¥160；寄存先確認",
    "珠海 十字门华发商都 银湾路268号"
   ],
   [
    "下午",
    "刪購物，13:30–14:00提早返港",
    "簡單午餐¥100、飲品¥20。下雨或客流偏多就13:30–14:00離開酒店，不等14:30；大橋若因惡劣天氣停運，按官方指引提前調整返港安排，18:00不能視為保證。",
    "酒店→珠海口岸約30–45分鐘；過關候車與過橋另留至少2小時",
    "叫車加價動用備用金；金巴¥116／兩人",
    "港珠澳大桥珠海公路口岸"
   ],
   [
    "晚上",
    "確認已完成香港入境",
    "正常情況下18:00前已在香港口岸；天文惡劣天氣或停運須提前調整返港安排，不靠末刻換路線追時間。",
    "香港境內接駁另計",
    "不計入本攻略",
    "港珠澳大桥香港口岸"
   ]
  ]
 }
];
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
 const rows=[['住宿',v.hotel*3,'一間房 × 3 晚'],['餐飲與飲品',1240,'兩人；早餐另計，未假設含房價'],['市內網約車',410,'每段一車，兩人分攤'],['長隆門票',v.ticket*2,'成人 × 2；官方17日標準票¥450，優惠按結算價'],['回程金巴',116,'¥58 × 2'],['購物',v.shopping,'自主設定，預設不購物']];
 $('cost-body').innerHTML=rows.map(r=>'<tr><th>'+r[0]+'</th><td>'+money(r[1]/2)+'</td><td>'+money(r[1])+'</td><td>'+r[2]+'</td></tr>').join('')+'<tr><th>去程金巴</th><td>HK$'+v.night+'</td><td>HK$'+b.hkd+'</td><td>日／夜票按實際適用時段</td></tr><tr><th>換算小計</th><td>'+money(b.base/2)+'</td><td>'+money(b.base)+'</td><td>以上HKD按設定匯率折算一次</td></tr><tr><th>備用金</th><td>'+money(b.buffer/2)+'</td><td>'+money(b.buffer)+'</td><td>小計 × '+v.reserve*100+'%</td></tr>';
 const breakdown=[money(v.hotel)+'／40／55／0',money(v.hotel)+'／440／140／'+v.ticket*2,money(v.hotel)+'／480／160／0','0／280／55／0＋回程116'];
 $('daily-body').innerHTML=b.daily.map((n,i)=>'<tr><th>10/'+(16+i)+'</th><td>'+breakdown[i]+'（RMB）</td><td>'+money(n)+(i===0?'＋HK$'+b.hkd:'')+'</td><td>'+money(n/2)+(i===0?'＋HK$'+v.night:'')+'</td></tr>').join('')+'<tr><th>全程（不含備用金）</th><td>上列每日加總＋購物'+money(v.shopping)+'</td><td>'+money(b.rmb)+'＋HK$'+b.hkd+'</td><td>'+money(b.rmb/2)+'＋HK$'+v.night+'</td></tr>';
 showDay();
}
const tasks=[
 ['預訂16日至19日三晚十字門桔子酒店','確認一間大床房、總價、早餐及取消政策；名稱須包含國際會展中心十字門華發商都店，地址會展五路521號。'],
 ['通知酒店17日凌晨晚到並保留16日晚房間','取得店方確認，並問回鄉證入住、19日寄存行李與退房時限。'],
 ['檢查兩人香港永久性居民身份證及回鄉證','攜帶原件；確認回鄉證有效。不要把證件號碼存進公開網頁。'],
 ['預訂17日海洋王國兩名成人門票','使用回鄉證資料，核對指定日票價、退改、取票／人工驗票；勿誤買飛船樂園。'],
 ['預約18日珠海博物館時段','官網／公眾號；港澳證件預約若不成功，致電0756-3341233確認。'],
 ['出發前一天查長隆17日營運時間與表演','確認17日煙花時間、取消公告、維修項目及散場上客點；不加飛船樂園或長隆秀。'],
 ['確認19日十字門附近早餐供應','問附近餐館早茶時段、價單及茶位費；沒有合適供應就改粥粉，不跨區往返拱北。'],
 ['出發前48小時及當天查天氣與金巴公告','留意颱風、暴雨及停運。19日按天氣提早返港，勿只依一般班次。'],
 ['準備手機數據、叫車與支付','確認內地數據、可接電話、滴滴／高德、微信／支付寶及少量現金；金巴支付方式另查。'],
 ['帶輕便雨衣、遮陽用品、步行鞋及充電寶','長隆適量飲水可帶；依官方規定，除嬰兒食品及適量飲水外不帶其他食物飲品。'],
 ['把酒店地址與返港時間存到手機','19日14:00回酒店，14:30出發，15:00–15:15到珠海口岸；雨天提前。'],
 ['購物設上限，累了刪站','先刪城市陽台／日月貝其中一個、長隆熱門遊戲、19日購物。']
];
let saved=[];let storageOK=true;
try{const parsed=JSON.parse(localStorage.getItem('zhuhai-20261010-orange-checks')||'[]');saved=Array.isArray(parsed)?parsed.filter(n=>Number.isInteger(n)&&n>=0&&n<tasks.length):[];}catch{storageOK=false;}
$('checks').innerHTML=tasks.map((t,i)=>'<label class="check-item"><input type="checkbox" data-check="'+i+'" '+(saved.includes(i)?'checked':'')+'><span>'+t[0]+'<small>'+t[1]+'</small></span></label>').join('');
function saveChecks(){const checked=[...document.querySelectorAll('[data-check]:checked')].map(e=>+e.dataset.check);$('check-count').textContent=checked.length+'／'+tasks.length+' 項完成';try{localStorage.setItem('zhuhai-20261010-orange-checks',JSON.stringify(checked));}catch{storageOK=false;}$('storage-message').textContent=storageOK?'勾選會保留在此裝置的目前瀏覽器。':'此瀏覽器無法保存資料；勾選只在目前頁面有效。';}
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
