'use strict';
/* ================= strings ================= */
const STR = {
en:{
  hello:'Hello', today:'Today', meds:'Medicines', trends:'Trends', me:'Me & sharing',
  howNow:'How are you now?', changed:'This started', now:'Now', ago30:'30 min ago', ago60:'1 hour ago',
  s_sleep:'Asleep', s_off:'OFF', s_on:'ON', s_onm:'ON with extra movements', s_ont:'ON with troublesome movements',
  d_sleep:'In bed asleep', d_off:'Slow, stiff or hard to move', d_on:'Moving well', d_onm:'Extra movements that don’t bother me', d_ont:'Extra movements that bother me',
  since:'since', tags:'Anything else with this OFF?', t_pain:'Painful', t_tremor:'Tremor', t_freeze:'Freezing',
  saved:'Saved', doses:'Today’s doses', taken:'Taken', skip:'Skip', skipped:'Skipped', due:'Due now', upcoming:'Coming up', missed:'Not marked',
  noMeds:'No medicine table yet. Import the one from your clinic under Medicines.',
  myDay:'My day so far', fill:'Fill in my day', fillY:'Fill in yesterday', yesterday:'Yesterday',
  hard:'Having a hard day?', hardSub:'Turn on detailed recording for today. You’ll get short check-ins around your doses.', hardOn:'Record today in detail', hardOff:'Stop detailed recording',
  modeVisit:'Diary day {n} of 2', modeHard:'Detailed day', modeVisitSoon:'Clinic visit {d}',
  ci_dose:'Dose check-in · {t} dose', ci_peak:'About 1 hour after your {t} dose', ci_pre:'Before your {t} dose',
  ciAsk:'Tap how you feel right now.',
  paintTitle:'Fill in my day', paintSub:'Pick a colour, then drag your finger over the boxes (half an hour each). Drag near the top or bottom edge of the screen to scroll. Switch to Scroll to move the page freely; tap a box to colour it.', pmPaint:'Paint', pmScroll:'Scroll',
  erase:'Clear', am:'Night & morning', pm:'Afternoon & evening', done:'Done', dayOf:'Day',
  medTitle:'My medicines', fromClinic:'Table from your clinic', issued:'Issued', importT:'Import table', importSub:'Choose the file your clinic exported from the Movement Dashboard, or paste its contents.',
  chooseFile:'Choose file', paste:'Or paste here', doImport:'Import', badFile:'This is not a medication table from the Movement Dashboard.',
  imported:'Medicine table imported', setTime:'Set time', timeFor:'Time for column', schedule:'When to take', reminders:'Reminders',
  remDose:'Remind me to take my doses', remCheck:'Check-ins on diary days', remNote:'Reminders show inside Masar while it is open. They do not appear when Masar is closed.',
  photo:'Add photo', photoTip:'Tap the pill to add a photo of your own tablet.', generic:'Generic',
  trTitle:'Trends', days7:'7 days', days14:'14 days', days30:'30 days',
  avgOff:'OFF per day', avgOnt:'Troublesome movements per day', avgOn:'Good ON time per day', recorded:'Days recorded', hrs:'h', of:'of',
  timeline:'Daily timeline', recall:'Lighter = filled in later', doseMark:'Dose taken',
  cycle:'Around each dose', cycleSub:'Share of awake time in each state, by time since the last dose.', minAfter:'min after dose',
  patterns:'Patterns to discuss with your doctor', notEnough:'Not enough entries yet. Two diary days around your doses are usually enough to see a pattern.',
  p_wear:'OFF becomes common about {h} after a dose. This may be wearing-off.',
  p_peak:'Extra movements are most frequent {a}–{b} min after a dose, the pattern usually seen with peak-dose dyskinesia.',
  p_dip:'Extra movements appear both soon after a dose and as it wears off, a pattern that can fit diphasic dyskinesia.',
  p_pain:'{n} OFF periods were marked painful.',
  p_live:'{p}% of recorded time was entered at the moment; the rest was filled in later.',
  nodata:'No entries in this period.',
  meTitle:'Me & sharing', myId:'My diary ID', idSub:'Give this number to your clinic. It is the only identity in what you share; your name stays on this phone.',
  copy:'Copy', copied:'Copied',
  visit:'Next clinic visit', visitSub:'The app asks for a fuller diary on the 2 days before. About once a month it also asks whether your appointment is near.',
  share:'Share with my clinic', shareSub:'Both files hold the same diary and carry only your diary ID. Send the clinic file; your doctor imports it into the clinic dashboard. The spreadsheet opens in Excel if you or a researcher want to look at the numbers.', shareJson:'Save clinic file', shareCsv:'Save spreadsheet (Excel)',
  backup:'Backup', backupSub:'Save a backup file now and then and keep it somewhere safe. You can restore it on this or a new phone.', saveBackup:'Save backup', restore:'Restore backup', restored:'Backup restored',
  settings:'Settings', name:'What should we call you?', lang:'Language', del:'Delete all my data', delSure:'This removes your diary, medicines and photos from this device. It cannot be undone.', delYes:'Yes, delete everything', cancel:'Cancel',
  demoBar:'You are looking at example data.', demoStart:'Start my own diary',
  appName:'Masar',
  welcome:'Welcome to Masar', welcomeSub:'A simple diary of your good and bad times through the day. Your clinic sees the pattern, not your name.',
  example:'See an example first',
  instTitle:'Add Masar to your home screen', instSub:'Masar keeps your diary safely on this phone. Add it to your home screen first, then open it from there. This keeps your diary from being cleared by the phone.',
  instIos1:'Tap the Share button {i} at the bottom of Safari.', instIos2:'Scroll down and tap “Add to Home Screen”.', instIos3:'Tap “Add”, then open Masar from your home screen.',
  instIosNotSafari:'On iPhone, open this page in Safari to add it to your home screen.',
  instAnd1:'Tap the menu {i} at the top right of Chrome.', instAnd2:'Tap “Install app” or “Add to Home screen”.', instAnd3:'Open Masar from your home screen.',
  instBtn:'Install Masar', instAnyway:'Continue in the browser for now', instWarnIos:'If you continue here, what you record will not move to the home-screen app later.',
  instBanner:'Install Masar on your home screen so the phone keeps your diary safe.', instHow:'How',
  dataT:'Your data on this phone', dataLocal:'Kept only on this phone. Nothing is sent anywhere unless you send a file yourself.',
  dataEnc:'Encrypted on this phone', dataEncNo:'Encryption not available in this browser',
  dataKeep:'Protected from automatic clearing', dataKeepNo:'Not yet protected. Open Masar from the home screen.',
  lastBk:'Last backup', never:'Never',
  bkDueT:'Time to save a backup', bkDueSub:'Your diary lives only on this phone. A backup file lets you get it back if the phone is lost or replaced. Keep it somewhere safe, for example in your own email or cloud storage.', later:'Later',
  updT:'A new version of Masar is ready.', updBtn:'Update now', version:'Version',
  start:'Start', fileSaved:'File ready', saveFail:'The file could not be saved.',
  minutes:'min', at:'at',
  stillNote:'Recorded until about {t}. If you still feel the same then, tap it again.',
  lateQ:'When did you take it?', atSched:'At {t}', justNow:'Just now',
  avgNote:'Averages use full days only (at least 18 hours filled in).', fullDays:'Full days recorded',
  storeFail:'Masar could not save to this phone. Entries may be lost when you close it. Save a backup under Me & sharing.',
  restoreSure:'Restoring replaces everything now on this device with the backup. This cannot be undone.', restoreYes:'Yes, restore backup',
  hardQ:'What counts as a difficult day?',
  hardDef:'A day that feels worse or different from your usual. For example: more OFF time, your medicine wearing off early, extra movements that bother you, pain, freezing or a fall. Detailed recording gives your doctor the full picture of that day.',
  nudgeQ:'Is your next appointment soon?', nudgeSub:'Record your symptoms for the two days before your clinic visit.', nudgeYes:'Yes, start recording', nudgeLater:'Remind me later',
  nudgeWhen:'When is your appointment?', nudgeWhenSub:'Type the date if you know it. You can also add it later under Me & sharing.', nudgeStart:'Start recording',
  recStarted:'Recording for today and tomorrow', later3:'We will ask again in 3 days',
  dDay:'Day', dMonth:'Month', dYear:'Year', dateBad:'Type a real date that has not passed, for example 15 / 11 / 2026.',
  visitType:'Type the date', visitSave:'Save date', visitClear:'Remove date', visitSet:'Appointment: {d}',
  g_lgDiary:'Diary days', g_lgClinic:'Clinic visit',
  g_nudge:'About once a month the app asks: “Is your next appointment soon?” Choose “Yes, start recording” to begin two days of detailed recording, or “Remind me later”.',
  howTo:'How to use', back:'Back',
  g_title:'How to use your diary', g_intro:'The diary shows your doctor when your medicine works well and when it does not. A few taps a day is enough.',
  g_day:'Your day in three steps',
  g_s1:'When you notice a change, tap how you feel now. If it started a little earlier, choose “30 min ago” or “1 hour ago” first.',
  g_s2:'When you take a dose, tap Taken next to it.',
  g_s3:'In the evening, tap “Fill in my day”, pick a colour and drag your finger over the half-hours that are still empty.',
  g_states:'What each choice means',
  g_sleep:'You are in bed asleep, at night or during a nap.',
  g_off:'Your medicine is not working well. You may feel slow, stiff, shaky or find it hard to start walking. This often happens before your next dose is due.',
  g_on:'Your medicine is working. You move as well as you usually can on a good day.',
  g_onm:'Your medicine is working, but you have extra movements you cannot control: wriggling, twisting or swaying. They do not get in the way.',
  g_ont:'The same extra movements, but they bother you: they make eating, walking or other tasks harder, or tire or embarrass you.',
  g_tip:'Tremor (shaking) is not an extra movement. If you are OFF and shaking, choose OFF and tap Tremor.',
  g_tagsH:'Extra details for OFF', g_tags:'After choosing OFF you can add: Painful (cramps or pain), Tremor (shaking), Freezing (feet feel stuck).',
  g_when:'When to fill in the diary',
  g_visit:'Two days before your clinic visit. Enter the visit date under Me & sharing. The app then asks short questions around your doses on those two days.',
  g_hard:'On a difficult day. Tap “Record today in detail” on the Today page to get short questions around your doses for that day.',
  g_any:'Any other day is optional. Tap whenever you like.',
  g_medsH:'Medicines', g_meds:'Your clinic gives you a file with your medicine table. Open Medicines and choose that file. Your doses then appear by time of day. Tap the pill picture to take a photo of your own tablet.',
  g_trH:'Trends', g_tr:'See your good and bad times day by day, and how you feel at each time after a dose. Show this page to your doctor at your visit.',
  g_shH:'Sharing with your clinic', g_sh:'Your clinic sees only your diary number, never your name. Under Me & sharing, tap “Save clinic file” and send it to your clinic.',
  g_bk:'Your diary is kept on this phone only. Save a backup now and then.'
},
ar:{
  hello:'مرحباً', today:'اليوم', meds:'أدويتي', trends:'المتابعة', me:'أنا والمشاركة',
  howNow:'كيف حالك الآن؟', changed:'بدأت هذه الحالة', now:'الآن', ago30:'قبل ٣٠ دقيقة', ago60:'قبل ساعة',
  s_sleep:'نائم', s_off:'أوف OFF', s_on:'أون ON', s_onm:'أون مع حركات تلوّي لا إرادية', s_ont:'أون مع حركات تلوّي لا إرادية مزعجة',
  d_sleep:'في السرير نائم', d_off:'الدواء لا يعمل وأنا بطيء أو متيبّس', d_on:'الدواء يعمل وأتحرك جيداً', d_onm:'الدواء يعمل، والحركات لا تزعجني', d_ont:'الدواء يعمل، لكن الحركات تزعجني',
  since:'منذ', tags:'هل يصاحب حالة الأوف شيء آخر؟', t_pain:'ألم', t_tremor:'رعاش', t_freeze:'تجمّد في المشي',
  saved:'تم الحفظ', doses:'جرعات اليوم', taken:'أخذتها', skip:'تخطّي', skipped:'تم التخطي', due:'حان وقتها', upcoming:'قادمة', missed:'لم تُسجَّل',
  noMeds:'لا يوجد جدول أدوية بعد. استورد الجدول من عيادتك في صفحة أدويتي.',
  myDay:'يومي حتى الآن', fill:'اكمل بقية بيانات اليوم', fillY:'اكمل بيانات أمس', yesterday:'أمس',
  hard:'هل يومك صعب؟', hardSub:'فعّل التسجيل المفصّل لليوم، وستصلك أسئلة قصيرة حول مواعيد جرعاتك.', hardOn:'سجّل اليوم بالتفصيل', hardOff:'أوقف التسجيل المفصّل',
  modeVisit:'يوم المذكرة {n} من ٢', modeHard:'يوم مفصّل', modeVisitSoon:'موعد العيادة {d}',
  ci_dose:'سؤال الجرعة · جرعة {t}', ci_peak:'بعد جرعة {t} بساعة تقريباً', ci_pre:'قبل جرعة {t}',
  ciAsk:'اضغط على ما تشعر به الآن.',
  paintTitle:'اكمل بقية بيانات اليوم', paintSub:'اختر لوناً ثم اسحب إصبعك على المربعات (كل مربع نصف ساعة). اسحب قرب الحافة العلوية أو السفلية للتمرير. بدّل إلى «تمرير» لتحريك الصفحة بحرية، واضغط على المربع لتلوينه.', pmPaint:'تلوين', pmScroll:'تمرير',
  erase:'مسح', am:'الليل والصباح', pm:'الظهر والمساء', done:'تم', dayOf:'اليوم',
  medTitle:'أدويتي', fromClinic:'الجدول من عيادتك', issued:'تاريخ الإصدار', importT:'استيراد الجدول', importSub:'اختر الملف الذي صدّرته عيادتك من لوحة الحركة، أو الصق محتواه.',
  chooseFile:'اختر ملفاً', paste:'أو الصق هنا', doImport:'استيراد', badFile:'هذا ليس جدول أدوية من لوحة الحركة.',
  imported:'تم استيراد جدول الأدوية', setTime:'حدد الوقت', timeFor:'وقت العمود', schedule:'متى آخذها', reminders:'التذكيرات',
  remDose:'ذكّرني بمواعيد الجرعات', remCheck:'أسئلة أيام المذكرة', remNote:'تظهر التذكيرات داخل مسار وهو مفتوح، ولا تظهر عندما يكون مغلقاً.',
  photo:'أضف صورة', photoTip:'اضغط على الحبة لإضافة صورة لحبتك.', generic:'الاسم العلمي',
  trTitle:'المتابعة', days7:'٧ أيام', days14:'١٤ يوماً', days30:'٣٠ يوماً',
  avgOff:'وقت الأوف يومياً', avgOnt:'حركات تلوّي مزعجة يومياً', avgOn:'وقت الأون الجيد يومياً', recorded:'أيام مسجّلة', hrs:'س', of:'من',
  timeline:'الخط الزمني اليومي', recall:'اللون الأفتح = سُجّل لاحقاً', doseMark:'جرعة مأخوذة',
  cycle:'حول كل جرعة', cycleSub:'نسبة وقت اليقظة في كل حالة حسب الوقت منذ آخر جرعة.', minAfter:'دقيقة بعد الجرعة',
  patterns:'أنماط للنقاش مع طبيبك', notEnough:'لا توجد بيانات كافية بعد. يومان من المذكرة حول الجرعات يكفيان عادةً لظهور النمط.',
  p_wear:'يصبح الأوف شائعاً بعد حوالي {h} من الجرعة. قد يكون هذا انتهاء مفعول الجرعة.',
  p_peak:'تكثر حركات التلوّي اللاإرادية بعد {a}–{b} دقيقة من الجرعة، وهو النمط المعتاد لحركات ذروة الجرعة.',
  p_dip:'تظهر حركات التلوّي اللاإرادية بعد الجرعة بقليل وعند انتهاء مفعولها، وقد يتوافق ذلك مع الحركات ثنائية الطور.',
  p_pain:'{n} من فترات الأوف كانت مؤلمة.',
  p_live:'{p}٪ من الوقت المسجل أُدخل في حينه، والباقي أُكمل لاحقاً.',
  nodata:'لا توجد تسجيلات في هذه الفترة.',
  meTitle:'أنا والمشاركة', myId:'رقم مذكرتي', idSub:'أعطِ هذا الرقم لعيادتك. هو الهوية الوحيدة فيما تشاركه، واسمك يبقى على هذا الجوال.',
  copy:'نسخ', copied:'تم النسخ',
  visit:'موعد العيادة القادم', visitSub:'يطلب التطبيق مذكرة أكمل في اليومين السابقين للموعد، ويسألك مرة كل شهر تقريباً إن كان موعدك قريباً.',
  share:'المشاركة مع العيادة', shareSub:'الملفان يحتويان على المذكرة نفسها ويحملان رقم مذكرتك فقط. أرسل ملف العيادة، فطبيبك يستورده في لوحة العيادة. جدول البيانات يفتح في Excel إذا أردت أنت أو باحث الاطلاع على الأرقام.', shareJson:'احفظ ملف العيادة', shareCsv:'احفظ جدول بيانات (Excel)',
  backup:'النسخ الاحتياطي', backupSub:'احفظ ملف نسخة احتياطية من حين لآخر في مكان آمن، ويمكنك استعادته على هذا الجوال أو جوال جديد.', saveBackup:'احفظ نسخة', restore:'استعادة نسخة', restored:'تمت الاستعادة',
  settings:'الإعدادات', name:'بماذا نناديك؟', lang:'اللغة', del:'احذف كل بياناتي', delSure:'سيؤدي هذا إلى حذف مذكرتك وأدويتك وصورك من هذا الجهاز ولا يمكن التراجع.', delYes:'نعم، احذف الكل', cancel:'إلغاء',
  demoBar:'أنت تشاهد بيانات تجريبية.', demoStart:'ابدأ مذكرتي',
  appName:'مسار',
  welcome:'أهلاً بك في مسار', welcomeSub:'مذكرة بسيطة لأوقاتك الجيدة والصعبة خلال اليوم. ترى عيادتك النمط وليس اسمك.',
  example:'شاهد مثالاً أولاً',
  instTitle:'أضف مسار إلى الشاشة الرئيسية', instSub:'يحفظ مسار مذكرتك على هذا الجوال بأمان. أضفه إلى الشاشة الرئيسية أولاً، ثم افتحه من هناك، حتى لا يحذف الجوال مذكرتك تلقائياً.',
  instIos1:'اضغط زر المشاركة {i} أسفل متصفح سفاري.', instIos2:'مرّر للأسفل واضغط «إضافة إلى الشاشة الرئيسية».', instIos3:'اضغط «إضافة»، ثم افتح مسار من الشاشة الرئيسية.',
  instIosNotSafari:'في الآيفون، افتح هذه الصفحة في سفاري لإضافتها إلى الشاشة الرئيسية.',
  instAnd1:'اضغط القائمة {i} أعلى متصفح كروم.', instAnd2:'اضغط «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».', instAnd3:'افتح مسار من الشاشة الرئيسية.',
  instBtn:'ثبّت مسار', instAnyway:'تابع في المتصفح الآن', instWarnIos:'إذا تابعت هنا، فلن تنتقل تسجيلاتك إلى التطبيق على الشاشة الرئيسية لاحقاً.',
  instBanner:'ثبّت مسار على الشاشة الرئيسية ليحفظ الجوال مذكرتك بأمان.', instHow:'الطريقة',
  dataT:'بياناتك على هذا الجوال', dataLocal:'محفوظة على هذا الجوال فقط، ولا يُرسل شيء إلا إذا أرسلت ملفاً بنفسك.',
  dataEnc:'مشفّرة على هذا الجوال', dataEncNo:'التشفير غير متاح في هذا المتصفح',
  dataKeep:'محمية من الحذف التلقائي', dataKeepNo:'غير محمية بعد. افتح مسار من الشاشة الرئيسية.',
  lastBk:'آخر نسخة احتياطية', never:'لم تُحفظ بعد',
  bkDueT:'حان وقت حفظ نسخة احتياطية', bkDueSub:'مذكرتك موجودة على هذا الجوال فقط. ملف النسخة الاحتياطية يعيدها لك إذا ضاع الجوال أو استبدلته. احفظه في مكان آمن، مثل بريدك أو تخزينك السحابي.', later:'لاحقاً',
  updT:'نسخة جديدة من مسار جاهزة.', updBtn:'حدّث الآن', version:'الإصدار',
  start:'ابدأ', fileSaved:'الملف جاهز', saveFail:'تعذّر حفظ الملف هنا.',
  minutes:'دقيقة', at:'الساعة',
  stillNote:'مسجّل حتى الساعة {t} تقريباً. إذا بقيت على الحالة نفسها حينها، اضغط عليها مرة أخرى.',
  lateQ:'متى أخذتها؟', atSched:'الساعة {t}', justNow:'الآن',
  avgNote:'المتوسطات محسوبة من الأيام الكاملة فقط (١٨ ساعة مسجّلة على الأقل).', fullDays:'أيام كاملة مسجّلة',
  storeFail:'تعذّر على مسار الحفظ على هذا الجوال، وقد تضيع التسجيلات عند الإغلاق. احفظ نسخة احتياطية من «أنا والمشاركة».',
  restoreSure:'الاستعادة تستبدل كل ما على هذا الجهاز بالنسخة الاحتياطية، ولا يمكن التراجع.', restoreYes:'نعم، استعد النسخة',
  hardQ:'ما هو اليوم الصعب؟',
  hardDef:'يوم تشعر فيه بحال أسوأ أو مختلفة عن المعتاد، مثل: وقت أوف أطول، أو انتهاء مفعول الدواء مبكراً، أو حركات تلوّي لا إرادية تزعجك، أو ألم، أو تجمّد في المشي، أو سقوط. التسجيل المفصّل يعطي طبيبك صورة كاملة عن ذلك اليوم.',
  nudgeQ:'هل موعدك القادم قريب؟', nudgeSub:'سجّل أعراضك في اليومين السابقين لموعد العيادة.', nudgeYes:'نعم، ابدأ التسجيل', nudgeLater:'ذكّرني لاحقاً',
  nudgeWhen:'متى موعدك؟', nudgeWhenSub:'اكتب التاريخ إن كنت تعرفه. ويمكنك إضافته لاحقاً في «أنا والمشاركة».', nudgeStart:'ابدأ التسجيل',
  recStarted:'التسجيل لليوم وغداً', later3:'سنسألك مرة أخرى بعد ٣ أيام',
  dDay:'اليوم', dMonth:'الشهر', dYear:'السنة', dateBad:'اكتب تاريخاً صحيحاً لم يمضِ، مثل 15 / 11 / 2026.',
  visitType:'اكتب التاريخ', visitSave:'احفظ التاريخ', visitClear:'احذف التاريخ', visitSet:'الموعد: {d}',
  g_lgDiary:'أيام المذكرة', g_lgClinic:'موعد العيادة',
  g_nudge:'مرة كل شهر تقريباً يسألك التطبيق: «هل موعدك القادم قريب؟». اختر «نعم، ابدأ التسجيل» لبدء يومين من التسجيل المفصّل، أو «ذكّرني لاحقاً».',
  howTo:'طريقة الاستخدام', back:'رجوع',
  g_title:'طريقة استخدام مذكرتك', g_intro:'توضح المذكرة لطبيبك متى يعمل الدواء جيداً ومتى لا يعمل. بضع ضغطات في اليوم تكفي.',
  g_day:'يومك في ثلاث خطوات',
  g_s1:'عندما تلاحظ تغيّراً، اضغط على ما تشعر به الآن. إذا بدأ قبل قليل، اختر «قبل ٣٠ دقيقة» أو «قبل ساعة» أولاً.',
  g_s2:'عندما تأخذ جرعة، اضغط «أخذتها» بجانبها.',
  g_s3:'في المساء اضغط «اكمل بقية بيانات اليوم»، واختر لوناً، ثم اسحب إصبعك على أنصاف الساعات الفارغة.',
  g_states:'معنى كل اختيار',
  g_sleep:'أنت في السرير نائم، ليلاً أو في قيلولة.',
  g_off:'الدواء لا يعمل جيداً. قد تشعر بالبطء أو التيبس أو الرعاش أو صعوبة بدء المشي. يحدث هذا غالباً قبل موعد الجرعة التالية.',
  g_on:'الدواء يعمل. تتحرك كما تتحرك عادةً في يوم جيد.',
  g_onm:'الدواء يعمل لكن لديك حركات تلوّي لا إرادية، مثل الالتواء أو التمايل، ولا تعيقك.',
  g_ont:'حركات التلوّي اللاإرادية نفسها لكنها تزعجك: تصعّب الأكل أو المشي أو الأعمال الأخرى، أو تتعبك أو تحرجك.',
  g_tip:'الرعاش (الرجفة) ليس من حركات التلوّي اللاإرادية. إذا كنت في حالة أوف مع رجفة، اختر «أوف» ثم اضغط «رعاش».',
  g_tagsH:'تفاصيل إضافية لحالة الأوف', g_tags:'بعد اختيار «أوف» يمكنك إضافة: ألم (تقلّص أو ألم)، رعاش (رجفة)، تجمّد في المشي (القدمان كأنهما ملتصقتان بالأرض).',
  g_when:'متى تملأ المذكرة',
  g_visit:'في اليومين السابقين لموعد العيادة. أدخل تاريخ الموعد في صفحة «أنا والمشاركة»، وسيطرح التطبيق أسئلة قصيرة حول جرعاتك في هذين اليومين.',
  g_hard:'في اليوم الصعب. اضغط «سجّل اليوم بالتفصيل» في صفحة اليوم لتصلك أسئلة قصيرة حول جرعاتك في ذلك اليوم.',
  g_any:'الأيام الأخرى اختيارية. سجّل متى شئت.',
  g_medsH:'أدويتي', g_meds:'تعطيك العيادة ملفاً فيه جدول أدويتك. افتح «أدويتي» واختر الملف، فتظهر جرعاتك حسب أوقات اليوم. اضغط على صورة الحبة لتصوير حبتك.',
  g_trH:'المتابعة', g_tr:'شاهد أوقاتك الجيدة والصعبة يوماً بيوم، وكيف تشعر في كل وقت بعد الجرعة. اعرض هذه الصفحة على طبيبك في الموعد.',
  g_shH:'المشاركة مع العيادة', g_sh:'ترى العيادة رقم مذكرتك فقط وليس اسمك. في «أنا والمشاركة» اضغط «احفظ ملف العيادة» وأرسله إلى عيادتك.',
  g_bk:'مذكرتك محفوظة على هذا الجوال فقط. احفظ نسخة احتياطية من حين لآخر.'
}};
const STATES = ['sleep','off','on','onm','ont'];
const TAGS = ['pain','tremor','freeze'];
const DAY = 864e5, SLOT = 18e5, MIN = 6e4;

/* ================= storage ================= */
/* Storage: one encrypted record in IndexedDB on this phone.
   - AES-GCM 256 key generated on the phone, non-extractable, kept in the same database.
   - Every change is written in a single transaction (all or nothing), debounced, and flushed when the app goes to the background.
   - navigator.storage.persist() asks the phone not to clear the data automatically. */
const APP_VERSION = '1.0.0';
const DB_NAME = 'masar', STORE = 'kv';
let S = null, memOnly = false, db = null, cKey = null, encOK = false, saveT = 0;
const store = { persisted:false, canPersist:!!(navigator.storage && navigator.storage.persist) };
function idbOpen(){ return new Promise((res, rej) => { const r = indexedDB.open(DB_NAME, 1); r.onupgradeneeded = () => r.result.createObjectStore(STORE); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); r.onblocked = () => rej(new Error('blocked')); }); }
function idbReq(mode, fn){ return new Promise((res, rej) => { const tx = db.transaction(STORE, mode), os = tx.objectStore(STORE); let out; const q = fn(os); if (q) q.onsuccess = () => { out = q.result; }; tx.oncomplete = () => res(out); tx.onerror = () => rej(tx.error); tx.onabort = () => rej(tx.error); }); }
const idbGet = k => idbReq('readonly', os => os.get(k));
const idbPut = (k, v) => idbReq('readwrite', os => os.put(v, k));
const idbDel = k => idbReq('readwrite', os => os.delete(k));
async function initKey(){
  try {
    if (!(window.crypto && crypto.subtle)) return;
    let k = await idbGet('key');
    if (!k) { k = await crypto.subtle.generateKey({ name:'AES-GCM', length:256 }, false, ['encrypt','decrypt']); await idbPut('key', k); }
    cKey = k; encOK = true;
  } catch (e) { cKey = null; encOK = false; }
}
async function seal(obj){
  const raw = new TextEncoder().encode(JSON.stringify(obj));
  if (!encOK) return { v:1, enc:false, data:raw };
  const iv = crypto.getRandomValues(new Uint8Array(12));
  return { v:1, enc:true, iv, data:new Uint8Array(await crypto.subtle.encrypt({ name:'AES-GCM', iv }, cKey, raw)) };
}
async function unseal(rec){
  const raw = rec.enc ? await crypto.subtle.decrypt({ name:'AES-GCM', iv:rec.iv }, cKey, rec.data) : rec.data;
  return JSON.parse(new TextDecoder().decode(raw));
}
async function load(){
  try { db = await idbOpen(); } catch (e) { memOnly = true; return null; }
  await initKey();
  try { const rec = await idbGet('state'); return rec ? await unseal(rec) : null; } catch (e) { memOnly = true; return null; }
}
async function flush(){
  clearTimeout(saveT); saveT = 0;
  if (!S || S.demo || !db) return;
  try { await idbPut('state', await seal(S)); if (memOnly) { memOnly = false; render(); } }
  catch (e) { if (!memOnly) { memOnly = true; render(); } }
}
function save(){ if (!S || S.demo) return; clearTimeout(saveT); saveT = setTimeout(flush, 250); }
async function wipe(){ clearTimeout(saveT); try { if (db) { await idbDel('state'); await idbDel('key'); } } catch (e) {} await initKey(); }
async function protect(){
  if (!store.canPersist) return;
  try { store.persisted = await navigator.storage.persisted(); if (!store.persisted) store.persisted = await navigator.storage.persist(); } catch (e) {}
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && saveT) flush(); });
addEventListener('pagehide', () => { if (saveT) flush(); });

/* install state */
const isStandalone = () => (matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const isIOSSafari = () => isIOS() && !/crios|fxios|edgios|opios/i.test(navigator.userAgent);
let deferredInstall = null;
addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredInstall = e; if (!S || ui.tab === 'me' || ui.tab === 'today') render(); });
addEventListener('appinstalled', () => { deferredInstall = null; render(); });
let S0lang = 'en';
const L = () => (S && S.profile && S.profile.lang) || S0lang;
function t(k, vars){ let s = (STR[L()] || STR.en)[k]; if (s == null) s = STR.en[k] || k; if (vars) for (const v in vars) s = s.split('{' + v + '}').join(vars[v]); return s; }
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $ = s => document.querySelector(s);

/* ================= time helpers ================= */
const pad = n => String(n).padStart(2, '0');
const dStr = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
const dayStart = ds => { const [y, m, d] = ds.split('-').map(Number); return new Date(y, m - 1, d).getTime(); };
const addDays = (ds, n) => { const [y, m, d] = ds.split('-').map(Number); return dStr(new Date(y, m - 1, d + n)); };
const todayS = () => dStr(new Date());
function fmtTime(mins){
  mins = ((Math.round(mins) % 1440) + 1440) % 1440;
  let h = Math.floor(mins / 60), m = mins % 60, ap = h < 12 ? (L() === 'ar' ? 'ص' : 'AM') : (L() === 'ar' ? 'م' : 'PM');
  h = h % 12 || 12;
  return h + (m ? ':' + pad(m) : '') + ' ' + ap;
}
const fmtTs = ts => { const d = new Date(ts); return fmtTime(d.getHours() * 60 + d.getMinutes()); };
function fmtDate(ds, opt){ try { return new Date(dayStart(ds)).toLocaleDateString(L() === 'ar' ? 'ar-SA-u-nu-latn-ca-gregory' : 'en-GB', opt || { weekday:'short', day:'numeric', month:'short' }); } catch (e) { return ds; } }
function parseHead(h){
  if (!h) return null;
  let s = String(h).trim().toLowerCase().replace(/[٠-٩]/g, c => '٠١٢٣٤٥٦٧٨٩'.indexOf(c));
  const m = s.match(/(\d{1,2})(?:[:.](\d{2}))?\s*(am|pm|a\.m\.|p\.m\.|ص|م|صباحا|صباحاً|مساء|مساءً)?/);
  if (!m) return null;
  let hr = +m[1], mi = m[2] ? +m[2] : 0; const ap = m[3] || '';
  if (hr > 23 || mi > 59) return null;
  if (/^(pm|p\.m\.|م|مساء)/.test(ap) && hr < 12) hr += 12;
  if (/^(am|a\.m\.|ص)/.test(ap) && hr === 12) hr = 0;
  return hr * 60 + mi;
}

/* ================= model ================= */
function rid10(){
  const a = new Uint8Array(10);
  try { crypto.getRandomValues(a); } catch (e) { for (let i = 0; i < 10; i++) a[i] = Math.floor(Math.random() * 256); }
  let s = String(1 + a[0] % 9); for (let i = 1; i < 10; i++) s += a[i] % 10;
  return s;
}
function fresh(lang){ return { v:1, demo:false, profile:{ name:'', lang:lang || 'en', id:rid10(), created:todayS() }, meds:null, photos:{}, settings:{ remDose:true, remCheck:true, visit:'', hard:{}, rec:null, nudge:{ next:addDays(todayS(), 30) } }, events:[], paint:{} }; }
const sortEv = () => S.events.sort((a, b) => a.ts - b.ts);
function addEvent(e){ S.events.push(e); sortEv(); save(); }

/* dose schedule from imported table */
function doseSlots(){
  const m = S.meds; if (!m || !Array.isArray(m.columns)) return [];
  const out = [];
  m.columns.forEach((h, j) => {
    const time = (m.times && m.times[j] != null) ? m.times[j] : parseHead(h);
    const items = (m.meds || []).map(x => ({ name:x.name, generic:x.generic, amt:(x.cells || [])[j] || '' })).filter(x => x.amt);
    if (items.length) out.push({ col:j, head:h, time:time, items:items });
  });
  return out.sort((a, b) => (a.time == null ? 9999 : a.time) - (b.time == null ? 9999 : b.time));
}

/* half-hour slots for a day: live taps carry forward (3 h, sleep 10 h); painted cells override */
const carryOf = s => s === 'sleep' ? 10 * 60 * MIN : 3 * 60 * MIN;
function deriveDay(ds){
  const base = dayStart(ds), slots = new Array(48).fill(null), src = new Array(48).fill(null), tags = new Array(48).fill(null);
  const ev = S.events.filter(e => e.k === 's' && e.ts < base + DAY && e.ts > base - 11 * 3600e3);
  let p = -1;
  for (let i = 0; i < 48; i++) {
    const st = base + i * SLOT, en = st + SLOT;
    while (p + 1 < ev.length && ev[p + 1].ts < en) p++;
    const e = ev[p];
    if (e && st - e.ts < carryOf(e.s)) { slots[i] = e.s; src[i] = 'live'; tags[i] = e.tags && e.tags.length ? e.tags : null; }
  }
  const pt = S.paint[ds] || {};
  Object.keys(pt).forEach(k => { const i = +k; if (pt[k] === 'x') { slots[i] = null; src[i] = null; tags[i] = null; } else { slots[i] = pt[k]; src[i] = 'recall'; } });
  /* slots after now stay empty for today */
  const now = Date.now(); for (let i = 0; i < 48; i++) if (base + i * SLOT > now) { slots[i] = null; src[i] = null; }
  return { slots, src, tags };
}
function dosesOn(ds){ const b = dayStart(ds); return S.events.filter(e => e.k === 'dose' && e.ts >= b && e.ts < b + DAY); }
/* a dose tap belongs to a schedule slot by its heading and time; older taps only stored the column number */
const sameSlot = (e, d) => e.head != null ? (e.head === d.head && (e.at == null || d.time == null || e.at === d.time)) : e.col === d.col;
const colHead = e => e.head != null ? e.head : (S.meds && S.meds.columns ? S.meds.columns[e.col] : null);
function currentState(){
  const now = Date.now();
  for (let i = S.events.length - 1; i >= 0; i--) { const e = S.events[i]; if (e.k !== 's') continue; return (now - e.ts < carryOf(e.s)) ? e : null; }
  return null;
}

/* modes */
function mode(){
  const td = todayS(), v = S.settings.visit, r = S.settings.rec;
  if (v) { const d1 = addDays(v, -2), d2 = addDays(v, -1); if (td === d1) return { k:'visit', n:1 }; if (td === d2) return { k:'visit', n:2 }; }
  if (r && r.start) { if (td === r.start) return { k:'visit', n:1 }; if (td === addDays(r.start, 1)) return { k:'visit', n:2 }; }
  if (S.settings.hard[td]) return { k:'hard' };
  if (v && v > td) return { k:'soon', d:v };
  return { k:'normal' };
}
function migrate(){
  if (S && S.demo && S.demoV !== 2) S = demoData();
  const st = S.settings = S.settings || {}; st.hard = st.hard || {};
  if (!st.nudge) st.nudge = { next: addDays((S.profile && S.profile.created) || todayS(), 30) };
}
function nudgeDue(){
  const st = S.settings; if (mode().k === 'visit') return false;
  if (st.visit && st.visit >= todayS()) return false;
  return todayS() >= ((st.nudge && st.nudge.next) || '9999');
}
const digits = x => String(x == null ? '' : x).replace(/[٠-٩]/g, c => '٠١٢٣٤٥٦٧٨٩'.indexOf(c)).replace(/\D/g, '');
function dateBoxes(id){
  return '<div class="dbox" dir="ltr"><input class="inp" id="' + id + '_d" inputmode="numeric" maxlength="2" placeholder="DD" aria-label="' + esc(t('dDay')) + '" autocomplete="off"><span>/</span>' +
    '<input class="inp" id="' + id + '_m" inputmode="numeric" maxlength="2" placeholder="MM" aria-label="' + esc(t('dMonth')) + '" autocomplete="off"><span>/</span>' +
    '<input class="inp y" id="' + id + '_y" inputmode="numeric" maxlength="4" placeholder="YYYY" aria-label="' + esc(t('dYear')) + '" autocomplete="off"></div>';
}
/* '' = nothing typed, null = not a valid future date, otherwise YYYY-MM-DD */
function readDate(id){
  const g = k => digits((document.querySelector('#' + id + '_' + k) || {}).value);
  if (!g('d') && !g('m') && !g('y')) return '';
  const d = +g('d'), m = +g('m'), y = +g('y');
  if (!d || !m || g('y').length !== 4) return null;
  const dt = new Date(y, m - 1, d);
  if (dt.getFullYear() !== y || dt.getMonth() !== m - 1 || dt.getDate() !== d) return null;
  const ds = y + '-' + pad(m) + '-' + pad(d);
  return (ds < todayS() || ds > addDays(todayS(), 730)) ? null : ds;
}
function showErr(id, msg){ const el = document.querySelector('#' + id); if (el) { el.textContent = msg || ''; el.hidden = !msg; } }
function backupDue(){
  if (!S || S.demo || !S.events.length) return false;
  const st = S.settings, td = todayS();
  if (st.bkSnooze && st.bkSnooze > td) return false;
  if (!st.lastBackup) return (S.profile.created || td) <= addDays(td, -7);
  return st.lastBackup <= addDays(td, -14);
}
const diaryDay = () => { const m = mode(); return m.k === 'visit' || m.k === 'hard'; };

/* dose-anchored check-ins: at dose, ~60 min after, 30 min before next */
function checkins(){
  const ds = doseSlots().filter(d => d.time != null), out = [];
  ds.forEach((d, i) => {
    out.push({ at:d.time, kind:'dose', t:d.time });
    out.push({ at:d.time + 60, kind:'peak', t:d.time });
    const nx = ds[i + 1]; if (nx && nx.time - d.time >= 120) out.push({ at:nx.time - 30, kind:'pre', t:nx.time });
  });
  return out.sort((a, b) => a.at - b.at);
}
function dueCheckin(){
  if (!S.settings.remCheck || !diaryDay()) return null;
  const b = dayStart(todayS()), nowM = (Date.now() - b) / MIN;
  const evs = S.events.filter(e => e.k === 's' && e.ts >= b);
  let due = null;
  checkins().forEach(c => {
    if (nowM < c.at - 5 || nowM > c.at + 60) return;
    const answered = evs.some(e => { const m = (e.ts - b) / MIN; return m >= c.at - 15 && m <= c.at + 60; });
    if (!answered) due = c;
  });
  return due;
}

/* ================= analysis ================= */
function rangeDays(n){ const td = todayS(), a = []; for (let i = n - 1; i >= 0; i--) a.push(addDays(td, -i)); return a; }
function analyse(n){
  const days = rangeDays(n).map(ds => Object.assign({ ds }, deriveDay(ds), { doses:dosesOn(ds) }));
  let rec = 0, live = 0, cnt = { sleep:0, off:0, on:0, onm:0, ont:0 }, nDays = 0, pain = 0;
  const bins = Array.from({ length:9 }, () => ({ n:0, off:0, on:0, onm:0, ont:0 }));
  const allDoses = S.events.filter(e => e.k === 'dose').map(e => e.ts);
  days.forEach(d => {
    const full = d.slots.filter(Boolean).length >= 36;   /* 18 h of 24 filled in */
    if (full) nDays++;
    const base = dayStart(d.ds);
    d.slots.forEach((s, i) => {
      if (!s) return; rec++; if (d.src[i] === 'live') live++; if (full) cnt[s]++;
      if (s === 'sleep') return;
      const mid = base + i * SLOT + SLOT / 2;
      let last = null; for (let k = allDoses.length - 1; k >= 0; k--) if (allDoses[k] <= mid) { last = allDoses[k]; break; }
      if (last == null || mid - last > 8 * 3600e3) return;
      const b = Math.min(8, Math.floor((mid - last) / SLOT)); bins[b].n++; bins[b][s]++;
    });
    let prev = null; d.slots.forEach((s, i) => { if (s === 'off' && prev !== 'off' && d.tags[i] && d.tags[i].indexOf('pain') >= 0) pain++; prev = s; });
  });
  const perDay = k => nDays ? cnt[k] / 2 / nDays : 0;
  return { days, nDays, rec, live, cnt, bins, pain, avg:{ off:perDay('off'), ont:perDay('ont'), on:perDay('on') } };
}
function hoursText(m){
  const h = Math.floor(m / 60), half = m % 60 >= 30;
  if (L() !== 'ar') return h + (half ? '½' : '') + ' h';
  const base = h === 1 ? 'ساعة' : h === 2 ? 'ساعتين' : h + ' ساعات';
  return half ? base + ' ونصف' : base;
}
function patternNotes(A){
  const notes = [], B = A.bins, ok = b => b.n >= 6, pc = (b, k) => b[k] / b.n;
  if (B.filter(ok).length < 4) return null;
  const early = [1, 2, 3].filter(i => ok(B[i])).map(i => pc(B[i], 'off')), earlyMax = early.length ? Math.max.apply(null, early) : 1;
  let wi = -1; for (let i = 4; i < 9; i++) if (ok(B[i]) && pc(B[i], 'off') >= 0.35 && pc(B[i], 'off') >= earlyMax + 0.2) { wi = i; break; }
  if (wi >= 0) notes.push(t('p_wear', { h: hoursText(wi * 30) }));
  const dy = B.map(b => ok(b) ? (b.onm + b.ont) / b.n : -1);
  let pk = 0; dy.forEach((v, i) => { if (v > dy[pk]) pk = i; });
  if (dy[pk] >= 0.15) {
    const mid = Math.max(dy[2] < 0 ? 0 : dy[2], dy[3] < 0 ? 0 : dy[3]);
    if (pk >= 1 && pk <= 4) notes.push(t('p_peak', { a: pk * 30, b: pk * 30 + 30 }));
    else if (dy[0] >= 0.15 && dy.slice(5).some(v => v >= 0.15) && mid < 0.1) notes.push(t('p_dip'));
  }
  if (A.pain) notes.push(t('p_pain', { n:A.pain }));
  if (A.rec) notes.push(t('p_live', { p: Math.round(100 * A.live / A.rec) }));
  return notes;
}

/* ================= demo data (clearly marked) ================= */
function demoData(){
  const D = fresh('en'); D.demo = true; D.profile.name = 'Huda'; D.profile.id = '4821773059';
  D.meds = { format:'movement-meds', version:1, issued:addDays(todayS(), -20), source:'Movement Dashboard (example)',
    columns:['7 AM','11 AM','3 PM','7 PM','Bedtime'],
    meds:[ { name:'Sinemet 25/250', generic:'Carbidopa-Levodopa', cells:['1','1','1','1',''] },
           { name:'Pramipexole ER 0.75 mg', generic:'Pramipexole', cells:['1','','','',''] },
           { name:'Azilect 1 mg', generic:'Rasagiline', cells:['1','','','',''] },
           { name:'Amantadine 100 mg', generic:'Amantadine', cells:['1','','1','',''] },
           { name:'Sinemet CR 25/100', generic:'Carbidopa-Levodopa CR', cells:['','','','','1'] } ] };
  D.meds.times = [null, null, null, null, 22 * 60];
  D.settings.visit = ''; D.settings.hard[todayS()] = true; D.settings.nudge = { next: todayS() }; D.demoV = 2;
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const doseT = [420, 660, 900, 1140];
  for (let back = 13; back >= 0; back--) {
    const ds = addDays(todayS(), -back), base = dayStart(ds);
    if (back === 9 || back === 5) continue;               /* days with no entries */
    const truth = new Array(48).fill('on');
    for (let i = 0; i < 13; i++) truth[i] = 'sleep'; truth[46] = truth[47] = 'sleep';
    const taken = doseT.map(x => x + Math.round(rnd() * 20 - 5));
    taken.forEach((dt, j) => {
      const s0 = Math.floor(dt / 30), next = (taken[j + 1] || 1320);
      if (j === 0) { truth[s0] = 'off'; truth[s0 + 1] = 'off'; }
      if (rnd() < 0.7) { const a = s0 + 2, b = s0 + 3; truth[a] = rnd() < 0.45 ? 'ont' : 'onm'; truth[b] = rnd() < 0.3 ? 'ont' : 'onm'; }
      const wo = Math.floor((dt + 165 + rnd() * 40) / 30);
      for (let k = wo; k < Math.floor(next / 30); k++) truth[k] = 'off';
    });
    for (let k = 44; k < 46; k++) truth[k] = 'off';
    taken.forEach((dt, j) => { if (base + dt * MIN <= Date.now()) D.events.push({ ts: base + dt * MIN, k:'dose', col:j, head:D.meds.columns[j], at:null }); });
    const isLive = back <= 2 || back % 3 !== 0, nowSlot = back === 0 ? Math.floor((Date.now() - base) / SLOT) : 48;
    let prev = null;
    for (let i = 0; i < 48; i++) {
      if (i > nowSlot) break;
      const s = truth[i];
      if (isLive) {
        if (s !== prev) { const tg = s === 'off' && i < 16 && rnd() < 0.5 ? ['pain'] : (s === 'off' && rnd() < 0.25 ? ['tremor'] : []); D.events.push({ ts: base + i * SLOT + Math.round(rnd() * 20) * MIN, k:'s', s, tags:tg, src:'live' }); }
      } else { (D.paint[ds] = D.paint[ds] || {})[i] = s; }
      prev = s;
    }
    if (isLive && back > 0 && back % 4 === 1) { const p = D.paint[ds] = D.paint[ds] || {}; for (let i = 30; i < 36; i++) p[i] = truth[i]; }
  }
  D.events.sort((a, b) => a.ts - b.ts);
  return D;
}

/* ================= files ================= */
async function saveFile(name, data, type){
  const blob = new Blob([data], { type: type || 'application/json' });
  try {
    const file = new File([blob], name, { type: blob.type });
    if (navigator.canShare && navigator.canShare({ files:[file] })) { await navigator.share({ files:[file], title:name }); toast(t('fileSaved')); return true; }
  } catch (e) { if (e && e.name === 'AbortError') return false; }
  try {
    const url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000); toast(t('fileSaved')); return true;
  } catch (e) { toast(t('saveFail')); return false; }
}
function firstDay(){
  let f = todayS();
  S.events.forEach(e => { const ds = dStr(new Date(e.ts)); if (ds < f) f = ds; });
  Object.keys(S.paint || {}).forEach(ds => { if (ds < f) f = ds; });
  return f;
}
function clinicExport(){
  const n = Math.min(3650, Math.round((dayStart(todayS()) - dayStart(firstDay())) / DAY) + 1);
  const A = analyse(n);
  return { format:'movement-diary', version:1, app:'Masar ' + APP_VERSION, id:S.profile.id, exported:new Date().toISOString(), resolution_min:30,
    states:{ sleep:'Asleep', off:'OFF', on:'ON without dyskinesia', onm:'ON with non-troublesome dyskinesia', ont:'ON with troublesome dyskinesia' },
    medication_table: S.meds ? { issued:S.meds.issued, columns:S.meds.columns, times:doseSlots().map(d => ({ column:d.head, time:d.time == null ? null : fmt24(d.time) })), meds:S.meds.meds } : null,
    days: A.days.filter(d => d.slots.some(Boolean) || d.doses.length).map(d => ({ date:d.ds, slots:d.slots, source:d.src, tags:d.tags,
      doses_taken:d.doses.map(e => { const dt = new Date(e.ts); return { time: pad(dt.getHours()) + ':' + pad(dt.getMinutes()), column: colHead(e) }; }) })) };
}
const fmt24 = m => pad(Math.floor(m / 60)) + ':' + pad(m % 60);
function clinicCSV(){
  const x = clinicExport(), rows = [['diary_id','date','time','record','value','source','tags']];
  x.days.forEach(d => {
    d.slots.forEach((s, i) => { if (s) rows.push([x.id, d.date, fmt24(i * 30), 'state', s, d.source[i], (d.tags[i] || []).join(' ')]); });
    d.doses_taken.forEach(e => rows.push([x.id, d.date, e.time, 'dose_taken', e.column || '', 'live', '']));
  });
  return rows.map(r => r.map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',')).join('\r\n');
}

/* ================= UI state ================= */
const ui = { update:false, skipInstall:false, askTake:null, pendingRestore:null, pmode:'paint', nudgeStep:'', tab:'today', when:0, paintDay:null, brush:'off', range:14, importErr:'', confirmDel:false, readA:'', readB:'' };
let toastT;
function toast(m){ const el = $('#toast'); el.textContent = m; el.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => el.hidden = true, 2400); }
function setLang(){ document.documentElement.lang = L(); document.documentElement.dir = L() === 'ar' ? 'rtl' : 'ltr'; }

const ICON = {
  today:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
  meds:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="8.5" width="17" height="7" rx="3.5" transform="rotate(-35 12 12)"/><path d="M9.2 7.9l5.6 8.2" transform="rotate(0)"/></svg>',
  trends:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16" stroke-dasharray="3 2"/></svg>',
  me:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 19.5c1.2-3.3 3.9-5 7-5s5.8 1.7 7 5" stroke-linecap="round"/></svg>'
};
const pillSVG = '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="5" y="11" width="22" height="10" rx="5" fill="var(--surface)" stroke="var(--muted)" stroke-width="1.5"/><path d="M16 11v10" stroke="var(--muted)" stroke-width="1.5"/></svg>';

/* ================= render ================= */
function render(){
  setLang();
  const app = $('#app');
  if (!S) { app.innerHTML = (ui.skipInstall || isStandalone()) ? welcomeHTML() : installHTML(true); $('#nav').hidden = true; return; }
  if (ui.tab === 'install') { app.innerHTML = installHTML(false); $('#nav').hidden = true; return; }
  $('#nav').hidden = ui.tab === 'paint';
  $('#navin').innerHTML = ['today','meds','trends','me'].map(k => '<button type="button" data-tab="' + k + '"' + (ui.tab === k ? ' aria-current="page"' : '') + '>' + ICON[k] + '<span>' + t(k) + '</span></button>').join('');
  let h = '';
  if (ui.update) h += '<div class="demo"><span>' + t('updT') + '</span><button class="btn sm pri" type="button" data-act="update">' + t('updBtn') + '</button></div>';
  if (!isStandalone() && !S.demo && ui.tab !== 'paint' && ui.tab !== 'install') h += '<div class="demo"><span>' + t('instBanner') + '</span><button class="btn sm pri" type="button" data-tab="install">' + t('instHow') + '</button></div>';
  if (memOnly && !S.demo) h += '<div class="demo" role="alert" style="background:color-mix(in srgb,var(--danger) 14%,var(--surface));color:var(--ink)"><span>' + t('storeFail') + '</span></div>';
  if (S.demo && ui.tab !== 'paint') h += '<div class="demo"><span>' + t('demoBar') + '</span><button class="btn sm pri" type="button" data-act="startown">' + t('demoStart') + '</button></div>';
  h += ui.tab === 'today' ? todayHTML() : ui.tab === 'paint' ? paintHTML() : ui.tab === 'meds' ? medsHTML() : ui.tab === 'trends' ? trendsHTML() : ui.tab === 'guide' ? guideHTML() : meHTML();
  app.innerHTML = h;
  if (ui.tab === 'trends') wireCharts();
  if (ui.tab === 'today') lastSig = todaySig();
}
const SHARE_I = '<svg class="ii" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-label="Share"><path d="M12 15V3.5M8 7l4-4 4 4"/><path d="M8 10H6.5A1.5 1.5 0 0 0 5 11.5v8A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5H16"/></svg>';
const MENU_I = '<svg class="ii" viewBox="0 0 24 24" fill="currentColor" aria-label="Menu"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg>';
function langSeg(attr){ return '<div class="seg" role="group"><button type="button" data-' + attr + '="en" aria-pressed="' + (L() === 'en') + '">English</button><button type="button" data-' + attr + '="ar" aria-pressed="' + (L() === 'ar') + '">العربية</button></div>'; }
function installHTML(gate){
  const ios = isIOS(), steps = ios ? (isIOSSafari() ? [t('instIos1', { i:SHARE_I }), t('instIos2'), t('instIos3')] : [t('instIosNotSafari')]) : [t('instAnd1', { i:MENU_I }), t('instAnd2'), t('instAnd3')];
  let h = '<div class="sec" style="padding-top:28px">' + (gate ? '<div class="spread"><img src="icons/icon-192.png" alt="" width="56" height="56" style="border-radius:14px">' + langSeg('wlang') + '</div>' : '<button class="btn ghost" type="button" data-tab="me" style="padding-inline:0;align-self:flex-start">' + (L() === 'ar' ? '→ ' : '← ') + t('back') + '</button>') +
    '<h1>' + t('instTitle') + '</h1><p class="muted" style="margin:0">' + t('instSub') + '</p>';
  if (deferredInstall) h += '<button class="btn pri" type="button" data-act="install">' + t('instBtn') + '</button>';
  h += '<div class="card gsec">' + steps.map((s, i) => '<div class="gstep"><span class="n">' + (i + 1) + '</span><p>' + s + '</p></div>').join('') + '</div>';
  if (gate) h += '<button class="btn ghost" type="button" data-act="skipinstall" style="align-self:flex-start">' + t('instAnyway') + '</button>' + (ios ? '<p class="muted small" style="margin:0">' + t('instWarnIos') + '</p>' : '');
  return h + '</div>';
}
function welcomeHTML(){
  return '<div class="sec" style="padding-top:32px"><img src="icons/icon-192.png" alt="" width="64" height="64" style="border-radius:16px"><h1>' + t('welcome') + '</h1><p class="muted" style="margin:0">' + t('welcomeSub') + '</p>' +
    '<div class="card sec" style="margin-top:8px"><label class="field"><span>' + t('name') + '</span><input class="inp" id="w_name" maxlength="30" autocomplete="off"></label>' +
    '<div class="field"><span>' + t('lang') + '</span><div class="seg" role="group"><button type="button" data-wlang="en" aria-pressed="' + (L() === 'en') + '">English</button><button type="button" data-wlang="ar" aria-pressed="' + (L() === 'ar') + '">العربية</button></div></div>' +
    '<button class="btn pri" type="button" data-act="begin">' + t('start') + '</button></div>' +
    '<button class="btn ghost" type="button" data-act="example" style="align-self:flex-start">' + t('example') + '</button></div>';
}
function nudgeHTML(){
  if (ui.nudgeStep === 'date') {
    return '<section class="card sec" style="margin-top:6px"><h2>' + t('nudgeWhen') + '</h2><p class="muted small" style="margin:0">' + t('nudgeWhenSub') + '</p>' + dateBoxes('nv') +
      '<div id="nv_err" class="err" hidden></div><div class="row"><button class="btn pri" type="button" data-act="nudgestart">' + t('nudgeStart') + '</button><button class="btn ghost" type="button" data-act="nudgelater">' + t('nudgeLater') + '</button></div></section>';
  }
  if (!nudgeDue()) return '';
  return '<section class="card sec" style="margin-top:6px;border-color:var(--accent)"><h2>' + t('nudgeQ') + '</h2><p style="margin:0">' + t('nudgeSub') + '</p><div class="row"><button class="btn pri" type="button" data-act="nudgeyes">' + t('nudgeYes') + '</button><button class="btn" type="button" data-act="nudgelater">' + t('nudgeLater') + '</button></div></section>';
}
function stateBtn(s, cur){
  const on = cur && cur.s === s;
  return '<button class="sbtn" type="button" data-state="' + s + '" style="--c:var(--s-' + s + ')" aria-pressed="' + !!on + '"><i class="sw"></i><span class="sl"><b>' + t('s_' + s) + '</b><span>' + t('d_' + s) + '</span></span>' +
    (on ? '<span class="tick">' + t('since') + ' ' + fmtTs(cur.ts) + '</span>' : '') + '</button>';
}
function stripHTML(d, doses){
  return '<div dir="ltr"><div class="strip" role="img" aria-label="' + esc(t('myDay')) + '">' + d.slots.map((s, i) => '<i' + (s ? ' style="background:var(--s-' + s + ')"' : '') + (d.src[i] === 'recall' ? ' class="r"' : '') + '></i>').join('') + '</div>' +
    '<div class="axis num">' + (L() === 'ar' ? ['12 ص','6 ص','12 م','6 م','12 ص'] : ['12 AM','6','12 PM','6','12 AM']).map(x => '<span>' + x + '</span>').join('') + '</div></div>';
}
function legendHTML(){ return '<div class="legend">' + STATES.map(s => '<span><i style="--c:var(--s-' + s + ')"></i>' + t('s_' + s) + '</span>').join('') + '</div>'; }
function todayHTML(){
  const m = mode(), cur = currentState(), td = todayS();
  let chip = m.k === 'visit' ? '<span class="chip hot">' + t('modeVisit', { n:m.n }) + '</span>' : m.k === 'hard' ? '<span class="chip hot">' + t('modeHard') + '</span>' : m.k === 'soon' ? '<span class="chip">' + t('modeVisitSoon', { d:fmtDate(m.d, { day:'numeric', month:'short' }) }) + '</span>' : '';
  let h = '<header class="top"><div><div class="muted small">' + esc(fmtDate(td, { weekday:'long', day:'numeric', month:'long' })) + '</div><h1>' + t('hello') + (S.profile.name ? ', ' + esc(S.profile.name) : '') + '</h1></div><div class="row" style="flex-direction:column;align-items:flex-end;gap:6px">' + chip + '<button class="btn sm helpbtn" type="button" data-tab="guide"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 1 1 3.4 2.3c-.6.3-1 .8-1 1.5v.4"/><circle cx="12" cy="16.8" r=".6" fill="currentColor"/></svg>' + t('howTo') + '</button></div></header>';
  const ci = dueCheckin();
  h += nudgeHTML();
  if (backupDue()) h += '<section class="card sec" style="margin-top:6px;border-color:var(--accent)"><h2>' + t('bkDueT') + '</h2><p class="muted small" style="margin:0">' + t('bkDueSub') + '</p><div class="row"><button class="btn pri" type="button" data-act="backup">' + t('saveBackup') + '</button><button class="btn" type="button" data-act="bklater">' + t('later') + '</button></div></section>';
  h += '<section class="card sec" style="margin-top:6px" aria-labelledby="hn"><h2 id="hn">' + t('howNow') + '</h2>';
  if (ci) h += '<div class="prompt"><span><b>' + t('ci_' + ci.kind, { t:fmtTime(ci.t) }) + '</b><br>' + t('ciAsk') + '</span></div>';
  h += '<div class="when"><span class="lbl">' + t('changed') + ':</span>' + [0, 30, 60].map(v => '<button type="button" class="tog" data-when="' + v + '" aria-pressed="' + (ui.when === v) + '">' + t(v === 0 ? 'now' : 'ago' + v) + '</button>').join('') + '</div>';
  h += '<div class="states">' + STATES.map(s => stateBtn(s, cur)).join('') + '</div>';
  if (cur) h += '<p class="muted small" style="margin:0">' + t('stillNote', { t:fmtTs(cur.ts + carryOf(cur.s)) }) + '</p>';
  if (cur && cur.s === 'off') h += '<div class="when"><span class="lbl">' + t('tags') + '</span>' + TAGS.map(g => '<button type="button" class="tog" data-tag="' + g + '" aria-pressed="' + ((cur.tags || []).indexOf(g) >= 0) + '">' + t('t_' + g) + '</button>').join('') + '</div>';
  h += '</section>';
  /* doses */
  const ds = doseSlots(), b = dayStart(td), nowM = (Date.now() - b) / MIN, taken = dosesOn(td), skips = S.events.filter(e => e.k === 'skip' && e.ts >= b && e.ts < b + DAY);
  h += '<section class="card sec"><div class="spread"><h2>' + t('doses') + '</h2></div>';
  if (!ds.length) h += '<p class="muted" style="margin:0">' + t('noMeds') + '</p>';
  else {
    h += '<ul class="doses">' + ds.map(d => {
      const tk = taken.find(e => sameSlot(e, d)), sk = skips.find(e => sameSlot(e, d));
      const isDue = !tk && !sk && d.time != null && nowM >= d.time - 20 && nowM <= d.time + 120 && S.settings.remDose;
      const past = d.time != null && nowM > d.time + 120;
      const ask = !tk && !sk && ui.askTake === d.col;
      const st = tk ? '<span class="st ok">✓ ' + t('taken') + ' ' + fmtTs(tk.ts) + '</span>' : sk ? '<span class="st muted">' + t('skipped') + '</span>' :
        ask ? '<span class="acts" style="grid-column:1/-1;flex-wrap:wrap;align-items:center"><span class="small" style="margin-inline-end:4px">' + t('lateQ') + '</span><button class="btn sm pri" type="button" data-take="' + d.col + '" data-when2="sched">' + t('atSched', { t:fmtTime(d.time) }) + '</button><button class="btn sm" type="button" data-take="' + d.col + '" data-when2="now">' + t('justNow') + '</button></span>' :
        '<span class="acts"><button class="btn sm' + (isDue ? ' pri' : '') + '" type="button" data-take="' + d.col + '">' + t('taken') + '</button>' + (isDue || past ? '<button class="btn sm ghost" type="button" data-skip="' + d.col + '">' + t('skip') + '</button>' : '') + '</span>';
      return '<li class="dose' + (isDue ? ' due' : '') + '"><span class="t num">' + (d.time != null ? fmtTime(d.time) : esc(d.head)) + '</span><span class="what">' +
        (isDue ? '<b style="color:var(--accent)">' + t('due') + '</b> · ' : (!tk && !sk && past ? t('missed') + ' · ' : '')) + d.items.map(x => esc(x.name) + ' × ' + esc(x.amt)).join(', ') + '</span>' + st + '</li>';
    }).join('') + '</ul>';
  }
  h += '</section>';
  /* day strip */
  h += '<section class="card sec"><div class="spread"><h2>' + t('myDay') + '</h2><button class="btn sm" type="button" data-paint="' + td + '">' + t('fill') + '</button></div>' + stripHTML(deriveDay(td)) + legendHTML() +
    '<button class="btn ghost" type="button" data-paint="' + addDays(td, -1) + '" style="align-self:flex-start">' + t('fillY') + '</button></section>';
  /* hard day */
  if (m.k !== 'visit') h += '<section class="card sec"><h2>' + t('hard') + '</h2><p class="muted small" style="margin:0">' + t('hardSub') + '</p><details class="what"><summary>' + t('hardQ') + '</summary><p>' + t('hardDef') + '</p></details><button class="btn' + (m.k === 'hard' ? '' : ' pri') + '" type="button" data-act="hard">' + t(m.k === 'hard' ? 'hardOff' : 'hardOn') + '</button></section>';
  return h;
}
function paintHTML(){
  const ds = ui.paintDay, d = deriveDay(ds), base = dayStart(ds), nowSlot = Math.floor((Date.now() - base) / SLOT);
  let h = '<header class="top"><div><div class="muted small">' + esc(fmtDate(ds, { weekday:'long', day:'numeric', month:'long' })) + '</div><h1>' + t('paintTitle') + '</h1></div><button class="btn pri" type="button" data-act="paintdone">' + t('done') + '</button></header>' +
    '<p class="muted small" style="margin:0 0 4px">' + t('paintSub') + '</p>';
  h += '<div class="palette" role="group">' + STATES.map(k => '<button type="button" class="pchip" data-brush="' + k + '" style="--c:var(--s-' + k + ')" aria-pressed="' + (ui.brush === k) + '"><i></i>' + t('s_' + k) + '</button>').join('') +
    '<button type="button" class="pchip erase" data-brush="x" aria-pressed="' + (ui.brush === 'x') + '"><i></i>' + t('erase') + '</button>' +
    '<span class="seg" role="group" style="margin-inline-start:auto"><button type="button" data-pmode="paint" aria-pressed="' + (ui.pmode === 'paint') + '">' + t('pmPaint') + '</button><button type="button" data-pmode="scroll" aria-pressed="' + (ui.pmode === 'scroll') + '">' + t('pmScroll') + '</button></span></div>';
  const col = (from, title) => {
    let c = '<div class="pcol"><div class="muted small" style="margin-bottom:2px">' + title + '</div>';
    for (let hr = from; hr < from + 12; hr++) {
      c += '<div class="prow"><span class="h num">' + fmtTime(hr * 60) + '</span>' + [hr * 2, hr * 2 + 1].map(i => {
        const fut = i > nowSlot, k = d.slots[i];
        return '<button type="button" class="cell' + (d.src[i] === 'recall' ? ' r' : '') + '" data-cell="' + i + '"' + (fut ? ' disabled style="opacity:.35"' : '') + (k ? ' style="background-color:var(--s-' + k + ')"' : '') + ' aria-label="' + fmtTime(i * 30) + (k ? ' ' + esc(t('s_' + k)) : '') + '"></button>';
      }).join('') + '</div>';
    }
    return c + '</div>';
  };
  h += '<div class="pgrid" id="pgrid" data-pm="' + ui.pmode + '" dir="ltr">' + col(0, t('am')) + col(12, t('pm')) + '</div>';
  return h;
}
function medsHTML(){
  let h = '<header class="top"><h1>' + t('medTitle') + '</h1></header>';
  const m = S.meds;
  if (m) {
    const ds = doseSlots();
    h += '<section class="card sec"><div class="spread"><h2>' + t('schedule') + '</h2><span class="muted small">' + t('issued') + ' ' + esc(fmtDate(m.issued, { day:'numeric', month:'short', year:'numeric' })) + '</span></div>' +
      '<p class="muted small" style="margin:0">' + t('photoTip') + '</p>';
    h += ds.map(d => '<div class="dgroup"><div class="dhead"><b class="num">' + (d.time != null ? fmtTime(d.time) : esc(d.head)) + '</b>' + (d.time != null && parseHead(d.head) == null ? '<span class="muted small">' + esc(d.head) + '</span>' : '') +
      (d.time == null ? '<label class="row small" style="margin-inline-start:auto"><span class="muted">' + t('setTime') + '</span><input type="time" class="inp" style="width:auto;min-height:36px;padding:4px 8px" data-coltime="' + d.col + '"></label>' : '') + '</div>' +
      d.items.map(x => '<div class="med"><button type="button" class="pill" data-photo="' + esc(x.name) + '" aria-label="' + esc(t('photo') + ': ' + x.name) + '">' + (S.photos[x.name] ? '<img alt="" src="' + S.photos[x.name] + '">' : pillSVG) + '</button><div style="min-width:0"><div class="nm">' + esc(x.name) + '</div>' + (x.generic ? '<div class="gn">' + esc(x.generic) + '</div>' : '') + '</div><span class="amt num">× ' + esc(x.amt) + '</span></div>').join('') + '</div>').join('');
    h += '<input type="file" accept="image/*" id="photoin" hidden></section>';
    h += '<section class="card sec"><h2>' + t('fromClinic') + '</h2><div class="tscroll" dir="ltr"><table class="num"><thead><tr><th>#</th><th>' + t('meds') + '</th><th>' + t('generic') + '</th>' + m.columns.map(c => '<th>' + esc(c) + '</th>').join('') + '</tr></thead><tbody>' +
      m.meds.map((x, i) => '<tr><td>' + (i + 1) + '</td><td>' + esc(x.name) + '</td><td>' + esc(x.generic) + '</td>' + m.columns.map((c, j) => '<td>' + esc((x.cells || [])[j] || '') + '</td>').join('') + '</tr>').join('') + '</tbody></table></div></section>';
    h += '<section class="card sec"><h2>' + t('reminders') + '</h2><div>' +
      '<label class="switch"><span>' + t('remDose') + '</span><input type="checkbox" id="remDose"' + (S.settings.remDose ? ' checked' : '') + '></label>' +
      '<label class="switch"><span>' + t('remCheck') + '</span><input type="checkbox" id="remCheck"' + (S.settings.remCheck ? ' checked' : '') + '></label></div><p class="muted small" style="margin:0">' + t('remNote') + '</p></section>';
  }
  h += '<section class="card sec"><h2>' + t('importT') + '</h2><p class="muted small" style="margin:0">' + t('importSub') + '</p>' +
    '<div class="row"><label class="btn" style="display:inline-flex;align-items:center">' + t('chooseFile') + '<input type="file" accept=".json,application/json" id="medfile" hidden></label></div>' +
    '<label class="field"><span>' + t('paste') + '</span><textarea class="inp" id="medpaste" dir="ltr" spellcheck="false"></textarea></label>' +
    (ui.importErr ? '<div class="err">' + esc(ui.importErr) + '</div>' : '') + '<button class="btn pri" type="button" data-act="importpaste" style="align-self:flex-start">' + t('doImport') + '</button></section>';
  return h;
}
let A = null;
function trendsHTML(){
  A = analyse(ui.range);
  let h = '<header class="top"><h1>' + t('trTitle') + '</h1><div class="seg" role="group">' + [7, 14, 30].map(n => '<button type="button" data-range="' + n + '" aria-pressed="' + (ui.range === n) + '">' + t('days' + n) + '</button>').join('') + '</div></header>';
  if (!A.rec) return h + '<div class="card"><p class="muted" style="margin:0">' + t('nodata') + '</p></div>';
  const tile = (k, v, c) => '<div class="tile"><div class="k"><i style="--c:var(--s-' + c + ')"></i>' + t(k) + '</div><div class="v num">' + v.toFixed(1) + '<small>' + t('hrs') + '</small></div></div>';
  h += '<div class="tiles">' + tile('avgOff', A.avg.off, 'off') + tile('avgOnt', A.avg.ont, 'ont') + tile('avgOn', A.avg.on, 'on') +
    '<div class="tile"><div class="k">' + t('fullDays') + '</div><div class="v num">' + A.nDays + '<small>' + t('of') + ' ' + ui.range + '</small></div></div></div><p class="muted small" style="margin:6px 0 0">' + t('avgNote') + '</p>';
  h += '<section class="card sec"><h2>' + t('timeline') + '</h2>' + legendHTML() + '<div class="legend"><span>' + t('recall') + '</span><span><svg width="10" height="12" aria-hidden="true"><path d="M5 0v12" stroke="var(--ink)" stroke-width="2"/></svg>' + t('doseMark') + '</span></div><div dir="ltr">' + timelineSVG(A) + '</div><div class="readout" id="ro1" aria-live="polite"></div></section>';
  h += '<section class="card sec"><h2>' + t('cycle') + '</h2><p class="muted small" style="margin:0">' + t('cycleSub') + '</p>' +
    '<div class="legend">' + ['off','on','onm','ont'].map(s => '<span><i style="--c:var(--s-' + s + ')"></i>' + t('s_' + s) + '</span>').join('') + '</div><div dir="ltr">' + cycleSVG(A) + '</div><div class="readout" id="ro2" aria-live="polite"></div></section>';
  const notes = patternNotes(A);
  h += '<section class="card sec"><h2>' + t('patterns') + '</h2>' + (notes && notes.length ? '<ul class="notes">' + notes.map(n => '<li>' + esc(n) + '</li>').join('') + '</ul>' : '<p class="muted" style="margin:0">' + t('notEnough') + '</p>') + '</section>';
  return h;
}
function timelineSVG(A){
  const W = 360, lw = 54, rowH = 16, gap = 4, top = 4, n = A.days.length, H = top + n * (rowH + gap) + 18, cw = (W - lw) / 48;
  let s = '<svg class="chart" id="tl" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(t('timeline')) + '">';
  A.days.slice().reverse().forEach((d, r) => {
    const y = top + r * (rowH + gap);
    s += '<text x="0" y="' + (y + rowH - 4) + '" font-size="9.5">' + esc(fmtDate(d.ds, { day:'numeric', month:'short' })) + '</text>';
    s += '<rect x="' + lw + '" y="' + y + '" width="' + (W - lw) + '" height="' + rowH + '" rx="3" fill="var(--empty)"/>';
    d.slots.forEach((st, i) => { if (st) s += '<rect x="' + (lw + i * cw + 0.3).toFixed(2) + '" y="' + y + '" width="' + (cw - 0.6).toFixed(2) + '" height="' + rowH + '" fill="var(--s-' + st + ')"' + (d.src[i] === 'recall' ? ' fill-opacity=".5"' : '') + '/>'; });
    d.doses.forEach(e => { const m = (e.ts - dayStart(d.ds)) / MIN, x = lw + m / 30 * cw; s += '<rect x="' + (x - 1).toFixed(1) + '" y="' + (y - 2) + '" width="2" height="' + (rowH + 4) + '" rx="1" fill="var(--ink)"/>'; });
    s += '<rect class="hit" data-day="' + d.ds + '" x="' + lw + '" y="' + y + '" width="' + (W - lw) + '" height="' + rowH + '" fill="transparent"/>';
  });
  [0, 6, 12, 18, 24].forEach(hh => { const x = lw + hh * 2 * cw; s += '<text x="' + x + '" y="' + (H - 4) + '" font-size="9" text-anchor="' + (hh === 0 ? 'start' : hh === 24 ? 'end' : 'middle') + '">' + (L() === 'ar' ? (hh === 0 || hh === 24 ? '12ص' : hh === 12 ? '12م' : hh === 6 ? '6ص' : '6م') : (hh === 0 || hh === 24 ? '12a' : hh === 12 ? '12p' : hh === 6 ? '6a' : '6p')) + '</text>'; });
  return s + '</svg>';
}
function cycleSVG(A){
  const W = 360, H = 200, l = 34, r = 6, top = 8, bot = 34, ph = H - top - bot, nb = 9, gw = (W - l - r) / nb, ks = ['off','on','onm','ont'], bw = (gw - 8) / 4;
  let s = '<svg class="chart" id="cy" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(t('cycle')) + '">';
  [0, 25, 50, 75, 100].forEach(p => { const y = top + ph - p / 100 * ph; s += '<line x1="' + l + '" x2="' + (W - r) + '" y1="' + y + '" y2="' + y + '" stroke="var(--line)" stroke-width="1"/><text x="' + (l - 4) + '" y="' + (y + 3) + '" font-size="9" text-anchor="end">' + p + '%</text>'; });
  A.bins.forEach((b, i) => {
    const gx = l + i * gw + 4;
    ks.forEach((k, j) => {
      if (!b.n) return; const v = b[k] / b.n, hh = Math.max(v * ph, v > 0 ? 1.5 : 0);
      s += '<rect x="' + (gx + j * bw + 0.5).toFixed(1) + '" y="' + (top + ph - hh).toFixed(1) + '" width="' + (bw - 1).toFixed(1) + '" height="' + hh.toFixed(1) + '" rx="1.5" fill="var(--s-' + k + ')"/>';
    });
    s += '<rect class="hit" data-bin="' + i + '" x="' + (l + i * gw) + '" y="' + top + '" width="' + gw + '" height="' + ph + '" fill="transparent"/>';
    s += '<text x="' + (l + i * gw + gw / 2) + '" y="' + (top + ph + 13) + '" font-size="9" text-anchor="middle">' + (i === 8 ? '240+' : i * 30) + '</text>';
  });
  s += '<text x="' + (l + (W - l - r) / 2) + '" y="' + (H - 4) + '" font-size="9.5" text-anchor="middle">' + esc(t('minAfter')) + '</text>';
  return s + '</svg>';
}
function wireCharts(){
  const tl = $('#tl'), cy = $('#cy');
  if (tl) ['pointermove','pointerdown'].forEach(n => tl.addEventListener(n, e => {
    const hit = e.target.closest('[data-day]'); if (!hit) return;
    const box = hit.getBoundingClientRect(), i = Math.max(0, Math.min(47, Math.floor((e.clientX - box.left) / box.width * 48)));
    const d = A.days.find(x => x.ds === hit.dataset.day), st = d.slots[i];
    $('#ro1').textContent = fmtDate(d.ds) + ' · ' + fmtTime(i * 30) + ' · ' + (st ? t('s_' + st) + (d.src[i] === 'recall' ? ' (' + t('recall').split('=')[1].trim() + ')' : '') : '—');
  }));
  if (cy) ['pointermove','pointerdown'].forEach(n => cy.addEventListener(n, e => {
    const hit = e.target.closest('[data-bin]'); if (!hit) return;
    const i = +hit.dataset.bin, b = A.bins[i], lab = i === 8 ? '240+' : (i * 30) + '–' + (i * 30 + 30);
    $('#ro2').textContent = lab + ' ' + t('minutes') + ': ' + (b.n ? ['off','on','onm','ont'].map(k => t('s_' + k) + ' ' + Math.round(100 * b[k] / b.n) + '%').join(' · ') : '—');
  }));
}
/* ---------- how-to-use guide with small schematic illustrations ---------- */
const FINGER = '<svg class="fing" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11"/><path d="M12 10.5V9a1.5 1.5 0 0 1 3 0v2"/><path d="M15 11a1.5 1.5 0 0 1 3 0v3.5c0 3-2 5.5-5 5.5h-1.5c-2 0-3.3-1-4.3-2.5L5 14.2a1.4 1.4 0 0 1 2.2-1.7L9 14"/></svg>';
function illStates(){
  return '<div class="mock" role="img" aria-label="' + esc(t('howNow')) + '">' + STATES.map(k => '<div class="mrow' + (k === 'off' ? ' on' : '') + '" style="--c:var(--s-' + k + ')"><i></i><span class="grow">' + t('s_' + k) + '</span>' + (k === 'off' ? FINGER : '') + '</div>').join('') + '</div>';
}
function illDose(){
  return '<div class="mock" role="img" aria-label="' + esc(t('doses')) + '">' +
    '<div class="mrow"><span class="t num">' + fmtTime(420) + '</span><span class="grow">Sinemet × 1</span><span class="ok">✓ ' + t('taken') + '</span></div>' +
    '<div class="mrow on" style="--c:var(--accent)"><span class="t num" style="color:var(--accent)">' + fmtTime(660) + '</span><span class="grow">Sinemet × 1</span><span class="mbtn">' + t('taken') + '</span>' + FINGER + '</div></div>';
}
function illPaint(){
  const seq = 'sssssssssssssffooooo........ooommoofff'.padEnd(48, '.'), map = { s:'sleep', f:'off', o:'on', m:'onm' };
  return '<div class="mock" role="img" aria-label="' + esc(t('fill')) + '"><div dir="ltr"><div class="strip" style="height:22px">' + seq.split('').map(c => '<i' + (map[c] ? ' style="background:var(--s-' + map[c] + ')"' : '') + '></i>').join('') + '</div></div>' +
    '<div class="mchips"><span class="pchip" style="--c:var(--s-on)"><i></i>' + t('s_on') + '</span><span class="pchip sel" style="--c:var(--s-off)"><i></i>' + t('s_off') + '</span>' + FINGER + '</div></div>';
}
function illCalendar(){
  const td = todayS(); let c = '<div class="mock"><div class="cal" dir="ltr">';
  for (let i = 0; i < 7; i++) { const ds = addDays(td, i - 3); c += '<div class="cd' + (i === 3 || i === 4 ? ' dd' : i === 5 ? ' vv' : '') + '"><span class="num">' + new Date(dayStart(ds)).getDate() + '</span></div>'; }
  return c + '</div><div class="legend"><span><i style="--c:var(--accent)"></i>' + t('g_lgDiary') + '</span><span><i style="--c:transparent;border:2px solid var(--accent)"></i>' + t('g_lgClinic') + '</span></div></div>';
}
function illShare(){
  return '<div class="mock flow" dir="ltr" role="img" aria-label="' + esc(t('share')) + '"><span class="ib"><svg viewBox="0 0 24 24" fill="none" stroke="var(--muted)" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 19.5c1.2-3.3 3.9-5 7-5s5.8 1.7 7 5"/></svg></span><span class="arr">→</span><span class="idc num">482 177 3059</span><span class="arr">→</span>' +
    '<span class="ib"><svg viewBox="0 0 24 24" fill="none" stroke="var(--s-ont)" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span></div>';
}
function guideHTML(){
  let h = '<header class="top"><div><button class="btn ghost" type="button" data-tab="today" style="padding-inline:0">' + (L() === 'ar' ? '→ ' : '← ') + t('back') + '</button><h1>' + t('g_title') + '</h1></div></header>';
  h += '<p class="muted" style="margin:0">' + t('g_intro') + '</p>';
  h += '<section class="card gsec" style="margin-top:14px"><h2>' + t('g_day') + '</h2>' +
    '<div class="gstep"><span class="n">1</span><p>' + t('g_s1') + '</p></div>' + illStates() +
    '<div class="gstep"><span class="n">2</span><p>' + t('g_s2') + '</p></div>' + illDose() +
    '<div class="gstep"><span class="n">3</span><p>' + t('g_s3') + '</p></div>' + illPaint() + '</section>';
  h += '<section class="card gsec" style="margin-top:14px"><h2>' + t('g_states') + '</h2><div>' +
    STATES.map(k => '<div class="sdef"><i style="--c:var(--s-' + k + ')"></i><div><b>' + t('s_' + k) + '</b><p>' + t('g_' + k) + '</p></div></div>').join('') +
    '</div><div class="tipbox">' + t('g_tip') + '</div><h3 style="margin-top:6px">' + t('g_tagsH') + '</h3><p class="muted" style="margin:0">' + t('g_tags') + '</p></section>';
  h += '<section class="card gsec" style="margin-top:14px"><h2>' + t('g_when') + '</h2>' + illCalendar() +
    '<ul class="notes"><li>' + t('g_visit') + '</li><li>' + t('g_hard') + '<br><span class="muted">' + t('hardDef') + '</span></li><li>' + t('g_nudge') + '</li><li>' + t('g_any') + '</li></ul></section>';
  h += '<section class="card gsec" style="margin-top:14px"><h2>' + t('g_medsH') + '</h2><p style="margin:0">' + t('g_meds') + '</p></section>';
  h += '<section class="card gsec" style="margin-top:14px"><h2>' + t('g_trH') + '</h2><p style="margin:0">' + t('g_tr') + '</p></section>';
  h += '<section class="card gsec" style="margin-top:14px"><h2>' + t('g_shH') + '</h2>' + illShare() + '<p style="margin:0">' + t('g_sh') + '</p><p class="muted small" style="margin:0">' + t('g_bk') + '</p></section>';
  return h;
}
function meHTML(){
  const p = S.profile;
  let h = '<header class="top"><h1>' + t('meTitle') + '</h1></header>';
  h += '<section class="card sec"><h2>' + t('myId') + '</h2><div class="spread"><span class="bigid num" dir="ltr">' + p.id.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3') + '</span><button class="btn sm" type="button" data-act="copyid">' + t('copy') + '</button></div><p class="muted small" style="margin:0">' + t('idSub') + '</p></section>';
  const vs = S.settings.visit;
  h += '<section class="card sec"><h2>' + t('visit') + '</h2>' + (vs ? '<span class="chip hot" style="align-self:flex-start">' + t('visitSet', { d: fmtDate(vs, { weekday:'long', day:'numeric', month:'long', year:'numeric' }) }) + '</span>' : '') +
    '<div class="field"><span>' + t('visitType') + '</span>' + dateBoxes('mv') + '</div><div id="mv_err" class="err" hidden></div>' +
    '<div class="row"><button class="btn pri" type="button" data-act="savevisit">' + t('visitSave') + '</button>' + (vs ? '<button class="btn" type="button" data-act="clearvisit">' + t('visitClear') + '</button>' : '') + '</div>' +
    '<p class="muted small" style="margin:0">' + t('visitSub') + '</p></section>';
  h += '<section class="card sec"><h2>' + t('share') + '</h2><p class="muted small" style="margin:0">' + t('shareSub') + '</p><div class="row"><button class="btn pri" type="button" data-act="sharejson">' + t('shareJson') + '</button><button class="btn" type="button" data-act="sharecsv">' + t('shareCsv') + '</button></div></section>';
  const ok = '<span class="ok" aria-hidden="true">✓</span>', no = '<span style="color:var(--s-off);font-weight:600" aria-hidden="true">!</span>';
  h += '<section class="card sec"><h2>' + t('dataT') + '</h2><ul class="dlist">' +
    '<li>' + ok + '<span>' + t('dataLocal') + '</span></li>' +
    '<li>' + (encOK ? ok + '<span>' + t('dataEnc') : no + '<span>' + t('dataEncNo')) + '</span></li>' +
    '<li>' + (store.persisted ? ok + '<span>' + t('dataKeep') : no + '<span>' + t('dataKeepNo') + (isStandalone() ? '' : ' <button class="btn ghost sm" type="button" data-tab="install" style="min-height:0;padding:0">' + t('instHow') + '</button>')) + '</span></li>' +
    '<li>' + (S.settings.lastBackup ? ok : no) + '<span>' + t('lastBk') + ': ' + (S.settings.lastBackup ? esc(fmtDate(S.settings.lastBackup, { day:'numeric', month:'long', year:'numeric' })) : t('never')) + '</span></li></ul></section>';
  h += '<section class="card sec"><h2>' + t('backup') + '</h2><p class="muted small" style="margin:0">' + t('backupSub') + '</p><div class="row"><button class="btn" type="button" data-act="backup">' + t('saveBackup') + '</button><label class="btn" style="display:inline-flex;align-items:center">' + t('restore') + '<input type="file" accept=".json,application/json" id="restorein" hidden></label></div>' +
    (ui.pendingRestore ? '<div class="confirm"><span>' + t('restoreSure') + '</span><div class="row"><button class="btn danger" type="button" data-act="restoreyes">' + t('restoreYes') + '</button><button class="btn" type="button" data-act="restoreno">' + t('cancel') + '</button></div></div>' : '') + '</section>';
  h += '<section class="card sec"><h2>' + t('settings') + '</h2><label class="field"><span>' + t('name') + '</span><input class="inp" id="nm" maxlength="30" value="' + esc(p.name) + '" autocomplete="off"></label>' +
    '<div class="field"><span>' + t('lang') + '</span><div class="seg" role="group"><button type="button" data-lang="en" aria-pressed="' + (L() === 'en') + '">English</button><button type="button" data-lang="ar" aria-pressed="' + (L() === 'ar') + '">العربية</button></div></div>' +
    (ui.confirmDel ? '<div class="confirm"><span>' + t('delSure') + '</span><div class="row"><button class="btn danger" type="button" data-act="delyes">' + t('delYes') + '</button><button class="btn" type="button" data-act="delno">' + t('cancel') + '</button></div></div>'
      : '<button class="btn danger" type="button" data-act="del" style="align-self:flex-start">' + t('del') + '</button>') + '</section>';
  h += '<p class="muted small" style="text-align:center;margin:18px 0 0">' + t('appName') + ' · ' + t('version') + ' ' + APP_VERSION + '</p>';
  return h;
}

/* ================= actions ================= */
function importMeds(txt){
  let d; try { d = JSON.parse(txt); } catch (e) { d = null; }
  if (!d || d.format !== 'movement-meds' || !Array.isArray(d.columns) || !Array.isArray(d.meds)) { ui.importErr = t('badFile'); render(); return; }
  S.meds = { format:d.format, version:d.version, issued:d.issued || todayS(), source:d.source || '', columns:d.columns.map(String), meds:d.meds.map(x => ({ name:String(x.name || ''), generic:String(x.generic || ''), cells:(x.cells || []).map(String) })), times:d.columns.map(() => null) };
  ui.importErr = ''; save(); toast(t('imported')); render();
}
function resizeImage(file){
  return new Promise((res, rej) => {
    const r = new FileReader(); r.onerror = rej;
    r.onload = () => { const img = new Image(); img.onerror = rej; img.onload = () => {
      const s = 200, c = document.createElement('canvas'); c.width = c.height = s; const g = c.getContext('2d'), m = Math.min(img.width, img.height);
      g.drawImage(img, (img.width - m) / 2, (img.height - m) / 2, m, m, 0, 0, s, s); res(c.toDataURL('image/jpeg', 0.8)); }; img.src = r.result; };
    r.readAsDataURL(file);
  });
}
let photoFor = null, painting = false;
function paintCell(el){
  if (!el || el.disabled) return;
  const i = +el.dataset.cell, ds = ui.paintDay, p = S.paint[ds] = S.paint[ds] || {};
  if (ui.brush === 'x') { p[i] = 'x'; el.style.backgroundColor = ''; el.classList.remove('r'); }
  else { p[i] = ui.brush; el.style.backgroundColor = 'var(--s-' + ui.brush + ')'; el.classList.add('r'); }
}

document.addEventListener('click', async e => {
  const b = e.target.closest('button'); if (!b) return;
  const d = b.dataset;
  if (d.wlang) { S0lang = d.wlang; render(); return; }
  if (d.act === 'skipinstall') { ui.skipInstall = true; render(); return; }
  if (d.act === 'install') { if (deferredInstall) { deferredInstall.prompt(); try { await deferredInstall.userChoice; } catch (x) {} deferredInstall = null; render(); } return; }
  if (d.act === 'update') { if (swWaiting) swWaiting.postMessage('skipWaiting'); return; }
  if (d.act === 'begin') { const nm = ($('#w_name') || {}).value || ''; S = fresh(S0lang); S.profile.name = nm.trim(); migrate(); await flush(); protect().then(() => { if (ui.tab === 'me') render(); }); ui.tab = 'today'; render(); return; }
  if (d.act === 'example') { S = demoData(); migrate(); ui.tab = 'today'; render(); return; }
  if (!S) return;
  if (d.tab) { ui.tab = d.tab; ui.confirmDel = false; ui.pendingRestore = null; ui.askTake = null; render(); scrollTo(0, 0); return; }
  if (d.when != null) { ui.when = +d.when; render(); return; }
  if (d.state) {
    addEvent({ ts: Date.now() - ui.when * MIN, k:'s', s:d.state, tags:[], src:'live' }); ui.when = 0; toast(t('saved') + ' · ' + t('s_' + d.state)); render(); return;
  }
  if (d.tag) { const c = currentState(); if (!c) return; c.tags = c.tags || []; const k = c.tags.indexOf(d.tag); k >= 0 ? c.tags.splice(k, 1) : c.tags.push(d.tag); save(); render(); return; }
  if (d.take != null) {
    const slot = doseSlots().find(x => x.col === +d.take); if (!slot) return;
    const b0 = dayStart(todayS()), nowM = (Date.now() - b0) / MIN;
    if (slot.time != null && nowM - slot.time > 30 && ui.askTake !== slot.col) { ui.askTake = slot.col; render(); return; }
    const ts = d.when2 === 'sched' ? b0 + slot.time * MIN : Date.now();
    ui.askTake = null; addEvent({ ts, k:'dose', col:slot.col, head:slot.head, at:slot.time }); toast(t('saved')); render(); return;
  }
  if (d.skip != null) { const slot = doseSlots().find(x => x.col === +d.skip); if (!slot) return; ui.askTake = null; addEvent({ ts: Date.now(), k:'skip', col:slot.col, head:slot.head, at:slot.time }); render(); return; }
  if (d.pmode) { ui.pmode = d.pmode; const g = document.querySelector('#pgrid'); if (g) g.dataset.pm = d.pmode; document.querySelectorAll('[data-pmode]').forEach(x => x.setAttribute('aria-pressed', x.dataset.pmode === d.pmode)); return; }
  if (d.cell != null) { paintCell(b); save(); return; }
  if (d.paint) { ui.paintDay = d.paint; ui.tab = 'paint'; render(); scrollTo(0, 0); return; }
  if (d.brush) { ui.brush = d.brush; document.querySelectorAll('[data-brush]').forEach(x => x.setAttribute('aria-pressed', x.dataset.brush === d.brush)); return; }
  if (d.range) { ui.range = +d.range; render(); return; }
  if (d.photo) { photoFor = d.photo; $('#photoin').click(); return; }
  if (d.lang) { S.profile.lang = d.lang; save(); render(); return; }
  switch (d.act) {
    case 'nudgeyes': ui.nudgeStep = 'date'; render(); break;
    case 'nudgelater': S.settings.nudge = { next: addDays(todayS(), 3) }; ui.nudgeStep = ''; save(); toast(t('later3')); render(); break;
    case 'nudgestart': { const v = readDate('nv'); if (v === null) { showErr('nv_err', t('dateBad')); break; } if (v) S.settings.visit = v; S.settings.rec = { start: todayS() }; S.settings.nudge = { next: addDays(todayS(), 30) }; ui.nudgeStep = ''; save(); toast(t('recStarted')); render(); scrollTo(0, 0); break; }
    case 'savevisit': { const v = readDate('mv'); if (!v) { showErr('mv_err', t('dateBad')); break; } S.settings.visit = v; save(); toast(t('saved')); render(); break; }
    case 'clearvisit': S.settings.visit = ''; save(); render(); break;
    case 'paintdone': save(); ui.tab = 'today'; render(); scrollTo(0, 0); break;
    case 'hard': { const td = todayS(); if (S.settings.hard[td]) delete S.settings.hard[td]; else S.settings.hard[td] = true; save(); render(); break; }
    case 'importpaste': importMeds(($('#medpaste') || {}).value || ''); break;
    case 'copyid': try { await navigator.clipboard.writeText(S.profile.id); toast(t('copied')); } catch (x) { const r = document.createRange(), el = document.querySelector('.bigid'); r.selectNodeContents(el); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); } break;
    case 'sharejson': saveFile('masar-diary-' + S.profile.id + '-' + todayS() + '.json', JSON.stringify(clinicExport(), null, 1), 'application/json'); break;
    case 'sharecsv': saveFile('masar-diary-' + S.profile.id + '-' + todayS() + '.csv', '\ufeff' + clinicCSV(), 'text/csv'); break;
    case 'backup': if (S.demo) break; if (await saveFile('masar-backup-' + todayS() + '.json', JSON.stringify(Object.assign({ format:'movement-diary-backup', app:'Masar ' + APP_VERSION }, S, { settings:Object.assign({}, S.settings, { lastBackup:todayS() }) })), 'application/json')) { S.settings.lastBackup = todayS(); S.settings.bkSnooze = ''; save(); render(); } break;
    case 'bklater': S.settings.bkSnooze = addDays(todayS(), 7); save(); render(); break;
    case 'restoreyes': if (ui.pendingRestore) { S = ui.pendingRestore; ui.pendingRestore = null; migrate(); save(); toast(t('restored')); render(); } break;
    case 'restoreno': ui.pendingRestore = null; render(); break;
    case 'del': ui.confirmDel = true; render(); break;
    case 'delno': ui.confirmDel = false; render(); break;
    case 'delyes': S0lang = L(); S = null; await wipe(); ui.confirmDel = false; ui.tab = 'today'; render(); break;
    case 'startown': S0lang = L(); S = null; ui.tab = 'today'; render(); break;
  }
});
document.addEventListener('change', async e => {
  const el = e.target; if (!S) return;
  if (el.id === 'medfile' && el.files[0]) { importMeds(await el.files[0].text()); }
  if (el.id === 'photoin' && el.files[0] && photoFor) { try { S.photos[photoFor] = await resizeImage(el.files[0]); save(); render(); } catch (x) {} }
  if (el.id === 'restorein' && el.files[0]) { try { if (S.demo) throw 0; const d = JSON.parse(await el.files[0].text()); if (d.format !== 'movement-diary-backup' || !d.profile) throw 0; delete d.format; ui.pendingRestore = d; render(); } catch (x) { toast(t('badFile')); } }
  if (el.id === 'remDose' || el.id === 'remCheck') { S.settings[el.id] = el.checked; save(); }
  if (el.dataset.coltime != null && el.value) { const [h, m] = el.value.split(':').map(Number); S.meds.times[+el.dataset.coltime] = h * 60 + m; save(); render(); }
});
document.addEventListener('input', e => { if (S && e.target.id === 'nm') { S.profile.name = e.target.value.trim(); save(); } });
let lastX = 0, lastY = 0, scrollRAF = 0;
function paintAt(x, y){ const el = document.elementFromPoint(x, y), c = el && el.closest && el.closest('#pgrid .cell'); if (c) paintCell(c); }
function edgeScroll(){
  scrollRAF = 0; if (!painting) return;
  const h = innerHeight, bot = h - 110, pal = document.querySelector('.palette'), top = pal ? pal.getBoundingClientRect().bottom + 36 : 150; let dy = 0;
  if (lastY > bot) dy = Math.min(22, (lastY - bot) / 4 + 3); else if (lastY < top && lastY > 0) dy = -Math.min(22, (top - lastY) / 4 + 3);
  if (dy) { scrollBy(0, dy); paintAt(lastX, lastY); }
  scrollRAF = requestAnimationFrame(edgeScroll);
}
document.addEventListener('pointerdown', e => {
  const c = e.target.closest('#pgrid .cell'); if (!c || ui.pmode !== 'paint') return;
  painting = true; lastX = e.clientX; lastY = e.clientY; paintCell(c); e.preventDefault();
  if (!scrollRAF) scrollRAF = requestAnimationFrame(edgeScroll);
});
document.addEventListener('pointermove', e => { if (!painting) return; lastX = e.clientX; lastY = e.clientY; paintAt(lastX, lastY); });
['pointerup','pointercancel'].forEach(n => document.addEventListener(n, () => { if (painting) { painting = false; save(); } }));
document.addEventListener('input', e => {
  const id = e.target && e.target.id; if (!id || !e.target.closest || !e.target.closest('.dbox')) return;
  if (/_d$/.test(id) && digits(e.target.value).length >= 2) document.querySelector('#' + id.slice(0, -1) + 'm').focus();
  else if (/_m$/.test(id) && digits(e.target.value).length >= 2) document.querySelector('#' + id.slice(0, -1) + 'y').focus();
});

/* refresh due prompts once a minute while open */
/* redraw only when something time-dependent on Today has changed */
function todaySig(){
  if (!S) return '';
  const b = dayStart(todayS()), nowM = (Date.now() - b) / MIN, c = currentState(), ci = dueCheckin();
  const doseSt = doseSlots().map(d => d.time == null ? 'x' : (nowM >= d.time - 20 && nowM <= d.time + 120 ? 'due' : nowM > d.time + 120 ? 'past' : 'up')).join(',');
  return [todayS(), Math.floor(nowM / 30), mode().k, ci ? ci.kind + ci.at : '', c ? c.ts : '', doseSt, nudgeDue()].join('|');
}
let lastSig = '';
setInterval(() => { if (!S || ui.tab !== 'today' || document.activeElement.matches('input,textarea')) return; const s = todaySig(); if (s !== lastSig) { lastSig = s; render(); } }, 60000);

/* ================= service worker (offline + updates) ================= */
let swWaiting = null;
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('sw.js').then(reg => {
    const show = w => { swWaiting = w; ui.update = true; if (S) render(); };
    if (reg.waiting && navigator.serviceWorker.controller) show(reg.waiting);
    reg.addEventListener('updatefound', () => { const w = reg.installing; if (w) w.addEventListener('statechange', () => { if (w.state === 'installed' && navigator.serviceWorker.controller) show(w); }); });
    setInterval(() => reg.update().catch(() => {}), 6 * 3600e3);
  }).catch(() => {});
  let reloaded = false; const hadController = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener('controllerchange', async () => { if (reloaded || !hadController) return; reloaded = true; await flush(); location.reload(); });
}

/* ================= boot ================= */
(async () => {
  S = await load();
  if (S) { migrate(); if (isStandalone() || S.events.length) protect().then(() => { if (ui.tab === 'me') render(); }); }
  render();
})();
