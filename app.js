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
  modeVisit:'Diary day {n} of 3', modeHard:'Detailed day', modeVisitSoon:'Clinic visit {d}',
  ci_dose:'Dose check-in · {t} dose', ci_peak:'About 1 hour after your {t} dose', ci_pre:'Before your {t} dose',
  ciAsk:'Tap how you feel right now.',
  paintTitle:'Fill in my day', paintSub:'Pick a colour, then drag your finger over the boxes (half an hour each). Drag near the top or bottom edge of the screen to scroll. Switch to Scroll to move the page freely; tap a box to colour it.', pmPaint:'Paint', pmScroll:'Scroll',
  erase:'Clear', am:'Night & morning', pm:'Afternoon & evening', done:'Done', dayOf:'Day',
  medTitle:'My medicines', fromClinic:'Table from your clinic', issued:'Issued', importT:'Import table', importSub:'Choose the file your clinic exported from the Movement Dashboard, or paste its contents.',
  chooseFile:'Choose file', paste:'Or paste here', doImport:'Import', badFile:'This is not a medication table from the Movement Dashboard.',
  imported:'Medicine table imported', setTime:'Set time', timeFor:'Time for column', schedule:'When to take', reminders:'Reminders',
  remDose:'Remind me to take my doses', remCheck:'Check-ins on diary days', remNote:'With phone notifications on, reminders arrive even when Masar is closed.',
  qrShow:'Show code for the clinic', qrShowSub:'Your doctor scans it at the visit. It holds the last 14 days of your diary and your diary number, nothing else.', qrHide:'Close', qrEmpty:'Nothing recorded yet.',
  scanT:'Scan the clinic code', scanSub:'At your visit the clinic shows a code with your medicine table. Point the camera at it, or take a photo of it.', scanCam:'Use camera', scanPhoto:'Take a photo of the code', scanStop:'Stop',
  scanNone:'No code found. Hold the phone steady, close enough that the code fills most of the picture.', scanWrong:'This is not a medicine code from the clinic.', scanNoCam:'The camera is not available here. Use “Take a photo of the code” instead.',
  scanOther:'This code was made for diary {a}, but the diary on this phone is {b}. Import it anyway?', scanYes:'Import anyway', scanOk:'Diary number checked',
  pushT:'Phone notifications', pushOn:'Notifications are on for this phone.', pushOffS:'Turn on notifications to get reminders even when Masar is closed.',
  pushInstall:'Add Masar to your Home Screen first. iPhone only sends notifications to apps opened from the Home Screen.', pushDenied:'Notifications are blocked for Masar. Allow them in the phone’s Settings › Notifications › Masar, then come back.',
  pushUnsupported:'This phone or browser cannot receive notifications from Masar.', pushNoSrv:'The reminder service is not set up yet.', pushBtn:'Turn on notifications', pushTest:'Send a test', pushStop:'Turn off',
  pushSent:'Test sent. It should arrive within a few seconds.', pushFail:'Could not reach the reminder service. Check your internet connection and try again.', pushReady:'Notifications turned on',
  pushPrivacy:'Only your dose and check-in times and an anonymous phone address go to Masar’s reminder service. Your name, medicines and diary stay on this phone.',
  pushPreview:'Preview: in the installed Masar app this asks the phone for permission and turns on notifications.', pushPreviewTest:'Preview: in the installed Masar app a test notification arrives now.',
  pushPreviewNote:'This preview cannot send notifications. They work in the installed Masar app.',
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
  visit:'Next clinic visit', visitSub:'The app asks for a fuller diary on the 3 days before. About once a month it also asks whether your appointment is near.',
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
  nudgeQ:'Is your next appointment soon?', nudgeSub:'Record your symptoms for the 3 days before your clinic visit.', nudgeYes:'Yes, start recording', nudgeLater:'Remind me later',
  nudgeWhen:'When is your appointment?', nudgeWhenSub:'Type the date if you know it. You can also add it later under Me & sharing.', nudgeStart:'Start recording',
  recStarted:'Recording for the next 3 days', later3:'We will ask again in 3 days',
  dDay:'Day', dMonth:'Month', dYear:'Year', dateBad:'Type a real date that has not passed, for example 15 / 11 / 2026.',
  visitType:'Type the date', visitSave:'Save date', visitClear:'Remove date', visitSet:'Appointment: {d}',
  g_lgDiary:'Diary days', g_lgClinic:'Clinic visit',
  g_nudge:'About once a month the app asks: “Is your next appointment soon?” Choose “Yes, start recording” and type the date: the 3 days before it become your diary days. If you don’t know the date, recording starts today for 3 days. Or choose “Remind me later”.',
  howTo:'How to use', back:'Back', undo:'Undo', undone:'Undone', apptAuto:'Recording starts by itself 3 days before your visit. You can also start now.', apptRec:'Record how you feel through the day.', apptToday:'Your appointment is today.', sepObserve:'Observe your state', sepMeds:'Document your meds', sepDay:'Complete your day', g_lead:'The diary shows your doctor when your medicine works well and when it does not.', g_cue:'Scroll down to begin', g_end:'A few taps a day is enough.', g_go:'Go to Today', g_hardT:'Difficult day', nextDose:'Next dose', inX:'in {x}', allDone:'All of today’s doses are marked.', fullTable:'Full table from your clinic', updateT:'Update the table from your clinic', medsN:'{n} medicines · {d} dose times', mn:'min', changeDate:'Change date', today2:'Today', tomorrow:'Tomorrow', inDays:'In {n} days', shareT:'Clinic file', shareX:'Spreadsheet', sendClinic:'Send to your clinic', forYou:'For you or research',
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
  g_visit:'The 3 days before your clinic visit. Enter the visit date under Me & sharing. The app then asks short questions around your doses on those 3 days.',
  g_hard:'On a difficult day. Tap “Record today in detail” on the Today page to get short questions around your doses for that day.',
  g_any:'Any other day is optional. Tap whenever you like.',
  g_medsH:'Medicines', g_meds:'Your clinic gives you a file with your medicine table. Open Medicines and choose that file. Your doses then appear by time of day. Tap the pill picture to take a photo of your own tablet.',
  g_trH:'Trends', g_tr:'See your good and bad times day by day, and how you feel at each time after a dose. Show this page to your doctor at your visit.',
  g_shH:'Sharing with your clinic', g_sh:'Your clinic sees only your diary number, never your name. Under Me & sharing, tap “Save clinic file” and send it to your clinic.',
  g_bk:'Your diary is kept on this phone only. Save a backup now and then.'
},
ar:{
  hello:'مرحباً', today:'اليوم', meds:'أدويتي', trends:'المتابعة', me:'أنا والمشاركة',
  howNow:'كيف حالك الآن؟', changed:'بدأت هذه الحالة', now:'الآن', ago30:'قبل 30 دقيقة', ago60:'قبل ساعة',
  s_sleep:'نائم', s_off:'أوف OFF', s_on:'أون ON', s_onm:'أون مع حركات تلوّي لا إرادية', s_ont:'أون مع حركات تلوّي لا إرادية مزعجة',
  d_sleep:'في السرير نائم', d_off:'الدواء لا يعمل وأنا بطيء أو متيبّس', d_on:'الدواء يعمل وأتحرك جيداً', d_onm:'الدواء يعمل، والحركات لا تزعجني', d_ont:'الدواء يعمل، لكن الحركات تزعجني',
  since:'منذ', tags:'هل يصاحب حالة الأوف شيء آخر؟', t_pain:'ألم', t_tremor:'رعاش', t_freeze:'تجمّد في المشي',
  saved:'تم الحفظ', doses:'جرعات اليوم', taken:'أخذتها', skip:'تخطّي', skipped:'تم التخطي', due:'حان وقتها', upcoming:'قادمة', missed:'لم تُسجَّل',
  noMeds:'لا يوجد جدول أدوية بعد. استورد الجدول من عيادتك في صفحة أدويتي.',
  myDay:'يومي حتى الآن', fill:'اكمل بقية بيانات اليوم', fillY:'اكمل بيانات أمس', yesterday:'أمس',
  hard:'هل يومك صعب؟', hardSub:'فعّل التسجيل المفصّل لليوم، وستصلك أسئلة قصيرة حول مواعيد جرعاتك.', hardOn:'سجّل اليوم بالتفصيل', hardOff:'أوقف التسجيل المفصّل',
  modeVisit:'يوم المذكرة {n} من 3', modeHard:'يوم مفصّل', modeVisitSoon:'موعد العيادة {d}',
  ci_dose:'سؤال الجرعة · جرعة {t}', ci_peak:'بعد جرعة {t} بساعة تقريباً', ci_pre:'قبل جرعة {t}',
  ciAsk:'اضغط على ما تشعر به الآن.',
  paintTitle:'اكمل بقية بيانات اليوم', paintSub:'اختر لوناً ثم اسحب إصبعك على المربعات (كل مربع نصف ساعة). اسحب قرب الحافة العلوية أو السفلية للتمرير. بدّل إلى «تمرير» لتحريك الصفحة بحرية، واضغط على المربع لتلوينه.', pmPaint:'تلوين', pmScroll:'تمرير',
  erase:'مسح', am:'الليل والصباح', pm:'الظهر والمساء', done:'تم', dayOf:'اليوم',
  medTitle:'أدويتي', fromClinic:'الجدول من عيادتك', issued:'تاريخ الإصدار', importT:'استيراد الجدول', importSub:'اختر الملف الذي صدّرته عيادتك من لوحة الحركة، أو الصق محتواه.',
  chooseFile:'اختر ملفاً', paste:'أو الصق هنا', doImport:'استيراد', badFile:'هذا ليس جدول أدوية من لوحة الحركة.',
  imported:'تم استيراد جدول الأدوية', setTime:'حدد الوقت', timeFor:'وقت العمود', schedule:'متى آخذها', reminders:'التذكيرات',
  remDose:'ذكّرني بمواعيد الجرعات', remCheck:'أسئلة أيام المذكرة', remNote:'عند تفعيل إشعارات الجوال تصلك التذكيرات حتى عندما يكون مسار مغلقاً.',
  qrShow:'اعرض الرمز للعيادة', qrShowSub:'يمسحه طبيبك في الزيارة. يحتوي على آخر 14 يوماً من مذكرتك ورقم مذكرتك فقط.', qrHide:'إغلاق', qrEmpty:'لا توجد تسجيلات بعد.',
  scanT:'امسح رمز العيادة', scanSub:'في زيارتك تعرض العيادة رمزاً فيه جدول أدويتك. وجّه الكاميرا إليه أو صوّره.', scanCam:'استخدم الكاميرا', scanPhoto:'صوّر الرمز', scanStop:'إيقاف',
  scanNone:'لم يُعثر على رمز. ثبّت الجوال واقترب حتى يملأ الرمز معظم الصورة.', scanWrong:'هذا ليس رمز أدوية من العيادة.', scanNoCam:'الكاميرا غير متاحة هنا. استخدم «صوّر الرمز» بدلاً منها.',
  scanOther:'صُنع هذا الرمز للمذكرة {a}، لكن المذكرة على هذا الجوال هي {b}. هل تريد استيراده على أي حال؟', scanYes:'استورد على أي حال', scanOk:'تم التحقق من رقم المذكرة',
  pushT:'إشعارات الجوال', pushOn:'الإشعارات مفعّلة على هذا الجوال.', pushOffS:'فعّل الإشعارات لتصلك التذكيرات حتى عندما يكون مسار مغلقاً.',
  pushInstall:'أضف مسار إلى الشاشة الرئيسية أولاً. لا يرسل الآيفون الإشعارات إلا للتطبيقات المفتوحة من الشاشة الرئيسية.', pushDenied:'الإشعارات محظورة لمسار. اسمح بها من الإعدادات › الإشعارات › مسار، ثم عد إلى هنا.',
  pushUnsupported:'لا يستطيع هذا الجوال أو المتصفح استقبال إشعارات مسار.', pushNoSrv:'خدمة التذكير لم تُجهَّز بعد.', pushBtn:'فعّل الإشعارات', pushTest:'إشعار تجريبي', pushStop:'إيقاف',
  pushSent:'تم إرسال الإشعار التجريبي. يفترض أن يصل خلال ثوانٍ.', pushFail:'تعذّر الوصول إلى خدمة التذكير. تأكد من اتصالك بالإنترنت وحاول مرة أخرى.', pushReady:'تم تفعيل الإشعارات',
  pushPrivacy:'لا يُرسَل إلى خدمة التذكير في مسار إلا أوقات الجرعات والأسئلة وعنوان مجهول للجوال. يبقى اسمك وأدويتك ومذكرتك على هذا الجوال.',
  pushPreview:'معاينة: في تطبيق مسار المثبّت يطلب هذا الزر إذن الجوال ويفعّل الإشعارات.', pushPreviewTest:'معاينة: في تطبيق مسار المثبّت يصل الآن إشعار تجريبي.',
  pushPreviewNote:'لا تستطيع هذه المعاينة إرسال إشعارات. تعمل الإشعارات في تطبيق مسار المثبّت.',
  photo:'أضف صورة', photoTip:'اضغط على الحبة لإضافة صورة لحبتك.', generic:'الاسم العلمي',
  trTitle:'المتابعة', days7:'7 أيام', days14:'14 يوماً', days30:'30 يوماً',
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
  visit:'موعد العيادة القادم', visitSub:'يطلب التطبيق مذكرة أكمل في الأيام الثلاثة السابقة للموعد، ويسألك مرة كل شهر تقريباً إن كان موعدك قريباً.',
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
  avgNote:'المتوسطات محسوبة من الأيام الكاملة فقط (18 ساعة مسجّلة على الأقل).', fullDays:'أيام كاملة مسجّلة',
  storeFail:'تعذّر على مسار الحفظ على هذا الجوال، وقد تضيع التسجيلات عند الإغلاق. احفظ نسخة احتياطية من «أنا والمشاركة».',
  restoreSure:'الاستعادة تستبدل كل ما على هذا الجهاز بالنسخة الاحتياطية، ولا يمكن التراجع.', restoreYes:'نعم، استعد النسخة',
  hardQ:'ما هو اليوم الصعب؟',
  hardDef:'يوم تشعر فيه بحال أسوأ أو مختلفة عن المعتاد، مثل: وقت أوف أطول، أو انتهاء مفعول الدواء مبكراً، أو حركات تلوّي لا إرادية تزعجك، أو ألم، أو تجمّد في المشي، أو سقوط. التسجيل المفصّل يعطي طبيبك صورة كاملة عن ذلك اليوم.',
  nudgeQ:'هل موعدك القادم قريب؟', nudgeSub:'سجّل أعراضك في الأيام الثلاثة السابقة لموعد العيادة.', nudgeYes:'نعم، ابدأ التسجيل', nudgeLater:'ذكّرني لاحقاً',
  nudgeWhen:'متى موعدك؟', nudgeWhenSub:'اكتب التاريخ إن كنت تعرفه. ويمكنك إضافته لاحقاً في «أنا والمشاركة».', nudgeStart:'ابدأ التسجيل',
  recStarted:'التسجيل للأيام الثلاثة القادمة', later3:'سنسألك مرة أخرى بعد 3 أيام',
  dDay:'اليوم', dMonth:'الشهر', dYear:'السنة', dateBad:'اكتب تاريخاً صحيحاً لم يمضِ، مثل 15 / 11 / 2026.',
  visitType:'اكتب التاريخ', visitSave:'احفظ التاريخ', visitClear:'احذف التاريخ', visitSet:'الموعد: {d}',
  g_lgDiary:'أيام المذكرة', g_lgClinic:'موعد العيادة',
  g_nudge:'مرة كل شهر تقريباً يسألك التطبيق: «هل موعدك القادم قريب؟». اختر «نعم، ابدأ التسجيل» واكتب التاريخ، فتصبح الأيام الثلاثة السابقة له أيام مذكرتك. إذا لم تعرف التاريخ، يبدأ التسجيل اليوم لمدة ثلاثة أيام. أو اختر «ذكّرني لاحقاً».',
  howTo:'طريقة الاستخدام', back:'رجوع', undo:'تراجع', undone:'تم التراجع', apptAuto:'يبدأ التسجيل تلقائياً قبل موعدك بثلاثة أيام، ويمكنك البدء الآن.', apptRec:'سجّل حالتك خلال اليوم.', apptToday:'موعدك اليوم.', sepObserve:'لاحظ حالتك', sepMeds:'سجّل أدويتك', sepDay:'أكمل يومك', g_lead:'توضح المذكرة لطبيبك متى يعمل الدواء جيداً ومتى لا يعمل.', g_cue:'مرّر للأسفل للبدء', g_end:'بضع ضغطات في اليوم تكفي.', g_go:'انتقل إلى صفحة اليوم', g_hardT:'اليوم الصعب', nextDose:'الجرعة القادمة', inX:'بعد {x}', allDone:'سجّلت كل جرعات اليوم.', fullTable:'الجدول الكامل من عيادتك', updateT:'تحديث الجدول من العيادة', medsN:'عدد الأدوية: {n} · أوقات الجرعات: {d}', mn:'د', changeDate:'تغيير التاريخ', today2:'اليوم', tomorrow:'غداً', inDays:'بعد {n}', shareT:'ملف العيادة', shareX:'جدول بيانات', sendClinic:'أرسله إلى عيادتك', forYou:'لك أو للباحثين',
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
  g_visit:'في الأيام الثلاثة السابقة لموعد العيادة. أدخل تاريخ الموعد في صفحة «أنا والمشاركة»، وسيطرح التطبيق أسئلة قصيرة حول جرعاتك في هذه الأيام.',
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
const APP_VERSION = '1.0.1';
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
async function wipe(){ clearTimeout(saveT); try { if (db) { await idbDel('state'); await idbDel('key'); await idbDel('notif'); } } catch (e) {} await initKey(); }
async function protect(){
  if (!store.canPersist) return;
  try { store.persisted = await navigator.storage.persisted(); if (!store.persisted) store.persisted = await navigator.storage.persist(); } catch (e) {}
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && saveT) flush(); });
addEventListener('pagehide', () => { if (saveT) flush(); });

/* install state */
const isIOSSafari = () => isIOS() && !/crios|fxios|edgios|opios/i.test(navigator.userAgent);
let deferredInstall = null;
addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredInstall = e; if (!S || ui.tab === 'me' || ui.tab === 'today') render(); });
addEventListener('appinstalled', () => { deferredInstall = null; render(); });
let S0lang = 'ar';
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
  if (v) for (let i = 1; i <= 3; i++) if (td === addDays(v, i - 4)) return { k:'visit', n:i };
  if (r && r.start) for (let i = 1; i <= 3; i++) if (td === addDays(r.start, i - 1)) return { k:'visit', n:i };
  if (S.settings.hard[td]) return { k:'hard' };
  if (v && v > td) return { k:'soon', d:v };
  return { k:'normal' };
}
function migrate(){
  if (S && S.demo && S.demoV !== 2) S = demoData();
  if (!Array.isArray(S.events)) S.events = []; if (!S.paint || typeof S.paint !== 'object') S.paint = {}; if (!S.photos || typeof S.photos !== 'object') S.photos = {};
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

/* ================= phone notifications (Web Push) =================
   iPhone home-screen apps cannot schedule their own alerts, so Masar's reminder service (Cloudflare Worker)
   sends an empty push at each dose / check-in time. The service gets only: a random install ID, the phone's
   push address, its time zone and the times. The installed app's sw.js writes the notification text from the
   'notif' record kept on the phone. In this preview (no service worker) the buttons only show the flow. */
const PUSH_URL = (typeof MASAR_PUSH_URL === 'string' ? MASAR_PUSH_URL : '').trim();   /* set in config.js */
const VAPID_PUBLIC = 'BEz7oa4IHzImCTh1yy4MsIOqaMOk_Qt4CAeO8BLVqvGgEaEIFpmicx77Ik_Pd3xGyxlMRpm6Ub86jpGX7bZGzoc';
const IS_APP = !!document.querySelector('link[rel="manifest"]');
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const isStandalone = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
const pushCapable = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
const pushOnFlag = () => !!(S.settings.push && S.settings.push.on);
function pushState(){
  if (!IS_APP) return pushOnFlag() ? 'on' : 'off';
  if (!PUSH_URL) return 'nosrv';
  if (!pushCapable()) return isIOS() && !isStandalone() ? 'install' : 'unsupported';
  if (Notification.permission === 'denied') return 'denied';
  return pushOnFlag() && Notification.permission === 'granted' ? 'on' : 'off';
}
const b64uBytes = s => { const b = atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4)); return Uint8Array.from(b, c => c.charCodeAt(0)); };
const rndHex = n => Array.from(crypto.getRandomValues(new Uint8Array(n)), x => x.toString(16).padStart(2, '0')).join('');
function diaryDayOn(ds){
  const v = S.settings.visit, r = S.settings.rec;
  if (v && ds >= addDays(v, -3) && ds < v) return true;
  if (r && r.start && ds >= r.start && ds <= addDays(r.start, 2)) return true;
  return !!(S.settings.hard || {})[ds];
}
function pushPlan(){
  const ds = doseSlots().filter(d => d.time != null);
  const daily = S.settings.remDose ? [...new Set(ds.map(d => d.time))] : [];
  const once = [], checks = [];
  if (S.settings.remCheck) for (let i = 0; i < 3; i++) {
    const day = addDays(todayS(), i); if (!diaryDayOn(day)) continue;
    checkins().forEach(c => { const ms = dayStart(day) + c.at * MIN; checks.push(ms); if (c.kind === 'dose' && daily.indexOf(c.at) >= 0) return; if (ms > Date.now() + 60e3) once.push(ms); });
  }
  const notif = { lang: L(), doses: ds.map(d => ({ t: d.time, label: fmtTime(d.time), txt: d.items.map(x => x.name + ' × ' + x.amt).join(L() === 'ar' ? '، ' : ', ') })), checks };
  return { daily, once, notif };
}
const notifSave = async o => { try { if (typeof idbPut === 'function' && db) await (o ? idbPut('notif', o) : idbDel('notif')); } catch (e) {} };
async function pushPost(path, body){
  const r = await fetch(PUSH_URL.replace(/\/+$/, '') + path, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
  if (!r.ok && r.status !== 410) throw new Error('http ' + r.status);
  return r.json().catch(() => ({}));
}
async function pushEnable(){
  if (!IS_APP) { S.settings.push = { on: true, id: (S.settings.push && S.settings.push.id) || rndHex(16), preview: true }; save(); toast(t('pushPreview')); render(); return; }
  const st = pushState();
  if (st !== 'off') { render(); return; }
  let perm = Notification.permission;
  if (perm !== 'granted') perm = await Notification.requestPermission();   /* must run straight from the tap */
  if (perm !== 'granted') { render(); return; }
  try {
    const reg = await navigator.serviceWorker.ready;
    let sub = await reg.pushManager.getSubscription();
    if (!sub) sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64uBytes(VAPID_PUBLIC) });
    S.settings.push = { on: true, id: (S.settings.push && S.settings.push.id) || rndHex(16), synced: '' };
    await pushSync(sub); toast(t('pushReady'));
  } catch (e) { S.settings.push = Object.assign({}, S.settings.push, { on: false }); toast(t('pushFail')); }
  save(); render();
}
async function pushSync(sub){
  if (!S || !pushOnFlag() || !IS_APP || !PUSH_URL) return;
  const plan = pushPlan();
  await notifSave(plan.notif);
  if (!sub) { const reg = await navigator.serviceWorker.ready; sub = await reg.pushManager.getSubscription(); }
  if (!sub) { S.settings.push.on = false; save(); return; }
  await pushPost('/sync', { id: S.settings.push.id, endpoint: sub.endpoint, tz: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC', daily: plan.daily, once: plan.once });
  S.settings.push.synced = todayS(); save();
}
let pushT = 0;
function pushSyncSoon(){ if (!S || !pushOnFlag()) return; clearTimeout(pushT); pushT = setTimeout(() => pushSync().catch(() => {}), 800); }
async function pushDisable(quiet){
  const p = S && S.settings.push; if (!p) return;
  if (IS_APP) {
    try { if (PUSH_URL && p.id) await pushPost('/remove', { id: p.id }); } catch (e) {}
    try { const reg = await navigator.serviceWorker.ready, sub = await reg.pushManager.getSubscription(); if (sub) await sub.unsubscribe(); } catch (e) {}
    await notifSave(null);
  }
  if (S) { S.settings.push = Object.assign({}, p, { on: false }); save(); }
  if (!quiet) render();
}
async function pushTest(){
  if (!IS_APP) { toast(t('pushPreviewTest')); return; }
  try { await pushSync(); const r = await pushPost('/test', { id: S.settings.push.id }); toast(r && r.ok ? t('pushSent') : t('pushFail')); }
  catch (e) { toast(t('pushFail')); }
}
const BELL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/></svg>';
function pushBoxHTML(){
  const st = pushState(), on = st === 'on', warn = st === 'denied' || st === 'install' || st === 'unsupported' || st === 'nosrv';
  const msg = { on: t('pushOn'), off: t('pushOffS'), install: t('pushInstall'), denied: t('pushDenied'), unsupported: t('pushUnsupported'), nosrv: t('pushNoSrv') }[st];
  return '<div class="pushbox"><div class="pstat' + (on ? ' on' : warn ? ' warn' : '') + '"><span class="bell">' + BELL + '</span><div><b>' + t('pushT') + '</b><span>' + (on ? '✓ ' : '') + msg + '</span></div></div>' +
    '<div class="row">' + (on ? '<button class="btn pri" type="button" data-act="pushtest">' + t('pushTest') + '</button><button class="btn" type="button" data-act="pushoff">' + t('pushStop') + '</button>'
      : st === 'off' ? '<button class="btn pri" type="button" data-act="pushon">' + t('pushBtn') + '</button>' : '') + '</div>' +
    '<p class="muted small" style="margin:0">' + t('pushPrivacy') + (IS_APP ? '' : '<br>' + t('pushPreviewNote')) + '</p></div>';
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
  return { days, nDays, rec, live, cnt, bins, pain, avg:{ off:perDay('off'), ont:perDay('ont'), on:perDay('on') + perDay('onm') } };
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
  const D = fresh('ar'); D.demo = true; D.profile.name = 'Huda'; D.profile.id = '4821773059';
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

const LOGO = 'data:image/png;base64,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';
const sepr = (c, k) => '<div class="sepr" role="presentation" style="--c:' + c + '"><i></i><span>' + t(k) + '</span><b></b></div>';
/* ================= render ================= */
function render(){
  setLang(); unwireGuide();
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
  if (ui.tab === 'guide') wireGuide();
  if (ui.tab === 'today') lastSig = todaySig();
}
const SHARE_I = '<svg class="ii" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-label="Share"><path d="M12 15V3.5M8 7l4-4 4 4"/><path d="M8 10H6.5A1.5 1.5 0 0 0 5 11.5v8A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5H16"/></svg>';
const MENU_I = '<svg class="ii" viewBox="0 0 24 24" fill="currentColor" aria-label="Menu"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg>';
function langSeg(attr){ return '<div class="seg" role="group"><button type="button" data-' + attr + '="en" aria-pressed="' + (L() === 'en') + '">English</button><button type="button" data-' + attr + '="ar" aria-pressed="' + (L() === 'ar') + '">العربية</button></div>'; }
function installHTML(gate){
  const ios = isIOS(), steps = ios ? (isIOSSafari() ? [t('instIos1', { i:SHARE_I }), t('instIos2'), t('instIos3')] : [t('instIosNotSafari')]) : [t('instAnd1', { i:MENU_I }), t('instAnd2'), t('instAnd3')];
  let h = '<div class="sec" style="padding-top:28px">' + (gate ? '<div class="spread"><img src="' + LOGO + '" alt="" width="56" height="56" style="border-radius:14px">' + langSeg('wlang') + '</div>' : '<button class="btn ghost" type="button" data-tab="me" style="padding-inline:0;align-self:flex-start">' + (L() === 'ar' ? '→ ' : '← ') + t('back') + '</button>') +
    '<h1>' + t('instTitle') + '</h1><p class="muted" style="margin:0">' + t('instSub') + '</p>';
  if (deferredInstall) h += '<button class="btn pri" type="button" data-act="install">' + t('instBtn') + '</button>';
  h += '<div class="card gsec">' + steps.map((s, i) => '<div class="gstep"><span class="n">' + (i + 1) + '</span><p>' + s + '</p></div>').join('') + '</div>';
  if (gate) h += '<button class="btn ghost" type="button" data-act="skipinstall" style="align-self:flex-start">' + t('instAnyway') + '</button>' + (ios ? '<p class="muted small" style="margin:0">' + t('instWarnIos') + '</p>' : '');
  return h + '</div>';
}
function welcomeHTML(){
  return '<div class="sec" style="padding-top:32px"><div class="welcome-logo"><img src="' + LOGO + '" alt=""><div><div style="font-family:var(--f-display);font-size:2.2rem;font-weight:600;line-height:1.1">مسار</div><div class="wordmark" dir="ltr" style="font-size:1.5rem">masar</div></div></div><h1 style="margin-top:12px">' + t('welcome') + '</h1><p class="muted" style="margin:0">' + t('welcomeSub') + '</p>' +
    '<div class="card sec" style="margin-top:8px"><label class="field"><span>' + t('name') + '</span><input class="inp" id="w_name" maxlength="30" autocomplete="off"></label>' +
    '<div class="field"><span>' + t('lang') + '</span><div class="seg" role="group"><button type="button" data-wlang="en" aria-pressed="' + (L() === 'en') + '">English</button><button type="button" data-wlang="ar" aria-pressed="' + (L() === 'ar') + '">العربية</button></div></div>' +
    '<button class="btn pri" type="button" data-act="begin">' + t('start') + '</button></div>' +
    '<button class="btn ghost" type="button" data-act="example" style="align-self:flex-start">' + t('example') + '</button></div>';
}
function apptHTML(){
  const v = S.settings.visit, td = todayS(); if (!v || v < td) return '';
  const n = Math.round((dayStart(v) - dayStart(td)) / DAY), m = mode(), rec = m.k === 'visit';
  return '<section class="card sec tab" style="--c:#6f86b0;margin-top:6px"><div class="vshow"><div class="vday"><b class="num">' + new Date(dayStart(v)).getDate() + '</b><span>' + esc(fmtDate(v, { month:'short' })) + '</span></div><div><div class="muted small">' + t('visit') + '</div><div class="wd">' + (n === 0 ? t('apptToday') : daysTo(n)) + '</div></div></div>' +
    (rec ? '<p class="ok" style="margin:0">' + t('modeVisit', { n: m.n }) + ' · ' + t('apptRec') + '</p>'
      : '') + '</section>';
}
function nudgeHTML(){
  if (ui.nudgeStep === 'date') {
    return '<section class="card sec" style="margin-top:6px"><h2>' + t('nudgeWhen') + '</h2><p class="muted small" style="margin:0">' + t('nudgeWhenSub') + '</p>' + dateBoxes('nv') +
      '<div id="nv_err" class="err" hidden></div><div class="row"><button class="btn pri" type="button" data-act="nudgestart">' + t('nudgeStart') + '</button><button class="btn ghost" type="button" data-act="nudgelater">' + t('nudgeLater') + '</button></div></section>';
  }
  if (!nudgeDue()) return '';
  return '<section class="card sec" style="margin-top:6px;border-color:#3a3b42"><h2>' + t('nudgeQ') + '</h2><p style="margin:0">' + t('nudgeSub') + '</p><div class="row"><button class="btn pri" type="button" data-act="nudgeyes">' + t('nudgeYes') + '</button><button class="btn" type="button" data-act="nudgelater">' + t('nudgeLater') + '</button></div></section>';
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
  let chip = m.k === 'visit' ? '<span class="chip hot">' + t('modeVisit', { n:m.n }) + '</span>' : m.k === 'hard' ? '<span class="chip hot">' + t('modeHard') + '</span>' : '';
  let h = '<header class="top"><div class="brand"><img src="' + LOGO + '" alt=""><div><h1>' + t('hello') + (S.profile.name ? ', ' + esc(S.profile.name) : '') + '</h1><div class="muted small">' + esc(fmtDate(td, { weekday:'long', day:'numeric', month:'long' })) + '</div></div></div><div class="row" style="flex-direction:column;align-items:flex-end;gap:6px">' + chip + '<button class="btn sm helpbtn" type="button" data-tab="guide"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 1 1 3.4 2.3c-.6.3-1 .8-1 1.5v.4"/><circle cx="12" cy="16.8" r=".6" fill="currentColor"/></svg>' + t('howTo') + '</button></div></header>';
  const ci = dueCheckin();
  h += apptHTML();
  h += nudgeHTML();
  if (backupDue()) h += '<section class="card sec" style="margin-top:6px;border-color:var(--accent)"><h2>' + t('bkDueT') + '</h2><p class="muted small" style="margin:0">' + t('bkDueSub') + '</p><div class="row"><button class="btn pri" type="button" data-act="backup">' + t('saveBackup') + '</button><button class="btn" type="button" data-act="bklater">' + t('later') + '</button></div></section>';
  h += sepr('#3fe08e', 'sepObserve') + '<section class="card sec tab" style="--c:#3fe08e" aria-labelledby="hn"><h2 id="hn">' + t('howNow') + '</h2>';
  if (ci) h += '<div class="prompt"><span><b>' + t('ci_' + ci.kind, { t:fmtTime(ci.t) }) + '</b><br>' + t('ciAsk') + '</span></div>';
  h += '<div class="when"><span class="lbl">' + t('changed') + ':</span>' + [0, 30, 60].map(v => '<button type="button" class="tog" data-when="' + v + '" aria-pressed="' + (ui.when === v) + '">' + t(v === 0 ? 'now' : 'ago' + v) + '</button>').join('') + '</div>';
  h += '<div class="states">' + STATES.map(s => stateBtn(s, cur)).join('') + '</div>';
  if (cur) h += '<p class="muted small" style="margin:0">' + t('stillNote', { t:fmtTs(cur.ts + carryOf(cur.s)) }) + '</p>';
  if (cur && cur.s === 'off') h += '<div class="when"><span class="lbl">' + t('tags') + '</span>' + TAGS.map(g => '<button type="button" class="tog" data-tag="' + g + '" aria-pressed="' + ((cur.tags || []).indexOf(g) >= 0) + '">' + t('t_' + g) + '</button>').join('') + '</div>';
  h += '</section>';
  /* doses */
  const ds = doseSlots(), b = dayStart(td), nowM = (Date.now() - b) / MIN, taken = dosesOn(td), skips = S.events.filter(e => e.k === 'skip' && e.ts >= b && e.ts < b + DAY);
  h += sepr('#f6e04b', 'sepMeds') + '<section class="card sec tab" style="--c:#f6e04b"><div class="spread"><h2>' + t('doses') + '</h2></div>';
  if (!ds.length) h += '<p class="muted" style="margin:0">' + t('noMeds') + '</p>';
  else {
    h += '<ul class="doses">' + ds.map(d => {
      const tk = taken.find(e => sameSlot(e, d)), sk = skips.find(e => sameSlot(e, d));
      const isDue = !tk && !sk && d.time != null && nowM >= d.time - 20 && nowM <= d.time + 120 && S.settings.remDose;
      const past = d.time != null && nowM > d.time + 120;
      const ask = !tk && !sk && ui.askTake === d.col;
      const undo = '<button class="btn sm ghost" type="button" data-undo="' + d.col + '">' + t('undo') + '</button>';
      const st = tk ? '<span class="acts done" style="align-items:center"><span class="st ok">✓ ' + t('taken') + ' ' + fmtTs(tk.ts) + '</span>' + undo + '</span>' : sk ? '<span class="acts done" style="align-items:center"><span class="st muted">' + t('skipped') + '</span>' + undo + '</span>' :
        ask ? '<span class="acts" style="grid-column:1/-1;flex-wrap:wrap;align-items:center"><span class="small" style="margin-inline-end:4px">' + t('lateQ') + '</span><button class="btn sm pri" type="button" data-take="' + d.col + '" data-when2="sched">' + t('atSched', { t:fmtTime(d.time) }) + '</button><button class="btn sm" type="button" data-take="' + d.col + '" data-when2="now">' + t('justNow') + '</button></span>' :
        '<span class="acts"><button class="btn sm' + (isDue ? ' pri' : '') + '" type="button" data-take="' + d.col + '">' + t('taken') + '</button>' + (isDue || past ? '<button class="btn sm ghost" type="button" data-skip="' + d.col + '">' + t('skip') + '</button>' : '') + '</span>';
      return '<li class="dose' + (isDue ? ' due' : '') + '"><span class="t num">' + (d.time != null ? fmtTime(d.time) : esc(d.head)) + '</span><span class="what">' +
        (isDue ? '<b style="color:var(--accent)">' + t('due') + '</b> · ' : (!tk && !sk && past ? t('missed') + ' · ' : '')) + d.items.map(x => esc(x.name) + ' × ' + esc(x.amt)).join(', ') + '</span>' + st + '</li>';
    }).join('') + '</ul>';
  }
  h += '</section>';
  /* day strip */
  h += sepr('#ef4a2e', 'sepDay') + '<section class="card sec tab" style="--c:#ef4a2e"><div class="spread"><h2>' + t('myDay') + '</h2><button class="btn sm" type="button" data-paint="' + td + '">' + t('fill') + '</button></div>' + stripHTML(deriveDay(td)) + legendHTML() +
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
const DECO = '<svg class="deco" viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="dg" gradientUnits="userSpaceOnUse" x1="12" y1="0" x2="88" y2="0"><stop offset="0" stop-color="#3fe08e"/><stop offset=".5" stop-color="#f6e04b"/><stop offset="1" stop-color="#ef4a2e"/></linearGradient><linearGradient id="df" gradientUnits="userSpaceOnUse" x1="0" y1="40" x2="0" y2="80"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#000"/></linearGradient><mask id="dm"><rect width="100" height="100" fill="url(#df)"/></mask></defs><path d="M14.3 71 A38 38 0 1 1 85.7 71" fill="none" stroke="url(#dg)" stroke-width="5" stroke-linecap="round" mask="url(#dm)"/></svg>';
const durTxt = m => { m = Math.max(0, Math.round(m)); const hh = Math.floor(m / 60), mm = m % 60; return (hh ? hh + ' ' + t('hrs') + (mm ? ' ' : '') : '') + (mm || !hh ? mm + ' ' + t('mn') : ''); };
function medsHTML(){
  const m = S.meds;
  let h = '<header class="phead"><h1>' + t('medTitle') + '</h1>' + (m ? '<p>' + t('issued') + ' ' + esc(fmtDate(m.issued, { day:'numeric', month:'short', year:'numeric' })) + '</p>' : '') + '</header>';
  if (m) {
    const ds = doseSlots(), td = todayS(), b = dayStart(td), nowM = (Date.now() - b) / MIN, taken = dosesOn(td), skips = S.events.filter(e => e.k === 'skip' && e.ts >= b && e.ts < b + DAY);
    const done = d => taken.some(e => sameSlot(e, d)) || skips.some(e => sameSlot(e, d));
    const nx = ds.find(d => d.time != null && !done(d) && nowM <= d.time + 120);
    h += '<section class="nextc"><span class="lab">' + t('nextDose') + '</span>';
    if (nx) {
      const diff = nx.time - nowM;
      h += '<span class="big num">' + fmtTime(nx.time) + '</span><span class="cdn' + (diff <= 0 ? ' due' : '') + '">' + (diff <= 0 ? t('due') : t('inX', { x: durTxt(diff) })) + '</span>' +
        '<ul>' + nx.items.map(x => '<li>' + esc(x.name) + ' × ' + esc(x.amt) + '</li>').join('') + '</ul>';
    } else h += '<span style="font-size:1.15rem">' + t('allDone') + '</span>';
    h += '</section>';
    h += sepr('#f6e04b', 'schedule') + '<div class="sec"><p class="hint">' + t('medsN', { n: (m.meds || []).length, d: ds.length }) + ' · ' + t('photoTip') + '</p><div class="tl tabs" style="--c:#f6e04b">' +
      ds.map(d => '<div class="tlg' + (done(d) ? ' done' : d === nx ? ' next' : '') + '"><div class="tt"><b class="num">' + (d.time != null ? fmtTime(d.time) : '—') + '</b><i></i></div><div class="tlc">' +
        (d.time != null && parseHead(d.head) == null ? '<div class="sub">' + esc(d.head) + '</div>' : '') +
        (d.time == null ? '<label class="tset"><span>' + esc(d.head) + ' · ' + t('setTime') + '</span><input type="time" class="inp" data-coltime="' + d.col + '"></label>' : '') +
        d.items.map(x => '<div class="med"><button type="button" class="pill" data-photo="' + esc(x.name) + '" aria-label="' + esc(t('photo') + ': ' + x.name) + '">' + (S.photos[x.name] ? '<img alt="" src="' + S.photos[x.name] + '">' : pillSVG) + '</button><div style="min-width:0"><div class="nm">' + esc(x.name) + '</div>' + (x.generic ? '<div class="gn">' + esc(x.generic) + '</div>' : '') + '</div><span class="amt num">× ' + esc(x.amt) + '</span></div>').join('') +
        '</div></div>').join('') + '</div><input type="file" accept="image/*" id="photoin" hidden></div>';
    h += sepr('#3fe08e', 'reminders') + '<section class="card sec tab" style="--c:#3fe08e"><div>' +
      '<label class="switch"><span>' + t('remDose') + '</span><input type="checkbox" id="remDose"' + (S.settings.remDose ? ' checked' : '') + '></label>' +
      '<label class="switch"><span>' + t('remCheck') + '</span><input type="checkbox" id="remCheck"' + (S.settings.remCheck ? ' checked' : '') + '></label></div>' + pushBoxHTML() + '</section>';
    h += sepr('#ef4a2e', 'fromClinic') + '<div class="sec tabs" style="--c:#ef4a2e"><details class="more"><summary>' + t('fullTable') + '</summary><div class="in"><div class="tscroll" dir="ltr" style="margin:0"><table class="num"><thead><tr><th>#</th><th>' + t('meds') + '</th><th>' + t('generic') + '</th>' + m.columns.map(c => '<th>' + esc(c) + '</th>').join('') + '</tr></thead><tbody>' +
      m.meds.map((x, i) => '<tr><td>' + (i + 1) + '</td><td>' + esc(x.name) + '</td><td>' + esc(x.generic) + '</td>' + m.columns.map((c, j) => '<td>' + esc((x.cells || [])[j] || '') + '</td>').join('') + '</tr>').join('') + '</tbody></table></div></div></details>';
  } else h += '<div class="sec">';
  h += '<details class="more"' + (m && !ui.importErr && !ui.scanMsg && !ui.scanOther ? '' : ' open') + '><summary>' + t(m ? 'updateT' : 'importT') + '</summary><div class="in">' + scanHTML() + '<p class="muted small" style="margin:0">' + t('importSub') + '</p>' +
    '<div class="row"><label class="btn" style="display:inline-flex;align-items:center">' + t('chooseFile') + '<input type="file" accept=".json,application/json" id="medfile" hidden></label></div>' +
    '<label class="field"><span>' + t('paste') + '</span><textarea class="inp" id="medpaste" dir="ltr" spellcheck="false"></textarea></label>' +
    (ui.importErr ? '<div class="err">' + esc(ui.importErr) + '</div>' : '') + '<button class="btn pri" type="button" data-act="importpaste" style="align-self:flex-start">' + t('doImport') + '</button></div></details></div>';
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
function gStates(){
  return '<div class="mock stg" role="img" aria-label="' + esc(t('howNow')) + '">' + STATES.map((k, i) => '<div class="mrow' + (k === 'off' ? ' on tapme' : '') + '" style="--c:var(--s-' + k + ');--i:' + i + '"><i></i><span class="grow">' + t('s_' + k) + '</span>' + (k === 'off' ? FINGER : '') + '</div>').join('') + '</div>';
}
function gDose(){
  return '<div class="mock stg" role="img" aria-label="' + esc(t('doses')) + '">' +
    '<div class="mrow" style="--i:0"><span class="t num">' + fmtTime(420) + '</span><span class="grow">Sinemet × 1</span><span class="ok">✓ ' + t('taken') + '</span></div>' +
    '<div class="mrow on tapme" style="--c:var(--accent);--i:1"><span class="t num">' + fmtTime(660) + '</span><span class="grow">Sinemet × 1</span><span class="mbtn">' + t('taken') + '</span>' + FINGER + '</div></div>';
}
function gPaint(){
  const seq = 'sssssssssssssffooooo........ooommoofff'.padEnd(48, '.'), map = { s:'sleep', f:'off', o:'on', m:'onm' };
  let n = 0;
  return '<div class="mock" role="img" aria-label="' + esc(t('fill')) + '"><div dir="ltr"><div class="strip gfill" style="height:30px">' + seq.split('').map(c => map[c] ? '<i style="background:var(--s-' + map[c] + ');--i:' + (n++) + '"></i>' : '<i></i>').join('') + '</div></div>' +
    '<div class="mchips stg"><span class="pchip" style="--c:var(--s-on);--i:0"><i></i>' + t('s_on') + '</span><span class="pchip sel" style="--c:var(--s-off);--i:1"><i></i>' + t('s_off') + '</span><span style="--i:2;display:inline-flex">' + FINGER + '</span></div></div>';
}
function gCal(){
  const td = todayS(); let c = '<div class="mock"><div class="cal stg" dir="ltr">';
  for (let i = 0; i < 7; i++) { const ds = addDays(td, i - 3); c += '<div class="cd' + (i >= 2 && i <= 4 ? ' dd' : i === 5 ? ' vv' : '') + '" style="--i:' + i + '"><span class="num">' + new Date(dayStart(ds)).getDate() + '</span></div>'; }
  return c + '</div><div class="legend"><span><i style="--c:var(--accent)"></i>' + t('g_lgDiary') + '</span><span><i style="--c:transparent;border:2px solid var(--accent)"></i>' + t('g_lgClinic') + '</span></div></div>';
}
function gShare(){
  return '<div class="mock flow stg" dir="ltr" role="img" aria-label="' + esc(t('share')) + '"><span class="ib" style="--i:0"><svg viewBox="0 0 24 24" fill="none" stroke="var(--muted)" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 19.5c1.2-3.3 3.9-5 7-5s5.8 1.7 7 5"/></svg></span><span class="arr" style="--i:1">→</span><span class="idc num" style="--i:2">482 177 3059</span><span class="arr" style="--i:3">→</span>' +
    '<span class="ib" style="--i:4"><svg viewBox="0 0 24 24" fill="none" stroke="var(--s-off)" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span></div>';
}
function guideHTML(){
  const ar = L() === 'ar', N = n => ar ? '٠١٢٣'[n] : '0' + n;
  const d = ms => ' style="--d:' + ms + 'ms"';
  const eb = (c, txt) => '<div class="geyebrow rv" style="--c:' + c + '"><i></i><span>' + txt + '</span><b></b></div>';
  const step = (c, n, title, lead, ill, more) => '<section class="gch" style="--c:' + c + '">' + eb(c, t('g_day')) +
    '<div class="gnum rv" aria-hidden="true">' + N(n) + '</div><h2 class="gtitle rv"' + d(80) + '>' + t(title) + '</h2><p class="glead rv"' + d(160) + '>' + t(lead) + '</p>' + ill + (more || '') + '</section>';
  let h = '<div class="gprog" aria-hidden="true"><i id="gprog"></i></div>';
  h += '<div class="gtop"><button class="btn ghost" type="button" data-tab="today" style="padding-inline:0">' + (ar ? '→ ' : '← ') + t('back') + '</button><span class="wordmark" dir="ltr">masar</span></div>';
  h += '<section class="ghero"><img class="rv" src="' + LOGO + '" alt=""><h1 class="gbig rv"' + d(120) + '>' + t('g_title') + '</h1><p class="glead rv"' + d(260) + '>' + t('g_lead') + '</p>' +
    '<div class="gcue rv"' + d(700) + '><span>' + t('g_cue') + '</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg></div></section>';
  h += step('#3fe08e', 1, 'sepObserve', 'g_s1', gStates());
  h += '<section class="gch"><h3 class="gmid rv">' + t('g_states') + '</h3>' +
    STATES.map((k, i) => '<div class="gstate rv" style="--c:var(--s-' + k + ');--d:' + (i * 60) + 'ms"><i></i><b>' + t('s_' + k) + '</b><p>' + t('g_' + k) + '</p></div>').join('') +
    '<div class="gcard rv">' + t('g_tip') + '</div><h4 class="gsmall rv">' + t('g_tagsH') + '</h4><p class="gbody rv">' + t('g_tags') + '</p>' + '<div class="gstate hard rv"><i></i><b>' + t('g_hardT') + '</b><p>' + t('hardDef') + '</p><p>' + t('g_hard') + '</p></div></section>';
  h += step('#f6e04b', 2, 'sepMeds', 'g_s2', gDose(), '<p class="gbody rv">' + t('g_meds') + '</p>');
  h += step('#ef4a2e', 3, 'sepDay', 'g_s3', gPaint());
  h += '<section class="gch"><h2 class="gtitle rv">' + t('g_when') + '</h2><div class="rv">' + gCal() + '</div>' +
    [[t('g_visit'), ''], [t('g_hard'), ''], [t('g_nudge'), ''], [t('g_any'), '']].map((x, i) => '<div class="gbeat rv"><span class="k num">' + (ar ? '٠١٢٣٤'[i + 1] : i + 1) + '</span><p>' + x[0] + (x[1] ? '<small>' + x[1] + '</small>' : '') + '</p></div>').join('') + '</section>';
  h += '<section class="gch"><h2 class="gmid rv">' + t('g_trH') + '</h2><p class="glead rv"' + d(100) + '>' + t('g_tr') + '</p></section>';
  h += '<section class="gch"><h2 class="gmid rv">' + t('g_shH') + '</h2><div class="rv">' + gShare() + '</div><p class="glead rv">' + t('g_sh') + '</p><p class="gbody rv">' + t('g_bk') + '</p></section>';
  h += '<section class="gend"><img class="rv" src="' + LOGO + '" alt=""><p class="gbig rv"' + d(120) + '>' + t('g_end') + '</p><button class="btn pri rv" type="button" data-tab="today"' + d(260) + '>' + t('g_go') + '</button></section>';
  return h;
}
let gObs = null, gScroll = null;
function unwireGuide(){ if (gObs) { gObs.disconnect(); gObs = null; } if (gScroll) { removeEventListener('scroll', gScroll); gScroll = null; } }
function wireGuide(){
  const els = document.querySelectorAll('#app .rv, #app .stg, #app .gfill');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  gObs = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); gObs.unobserve(en.target); } }), { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  els.forEach(e => gObs.observe(e));
  const bar = $('#gprog'); if (bar) bar.style.transformOrigin = L() === 'ar' ? 'right' : 'left';
  gScroll = () => { const b = $('#gprog'); if (!b) return; const max = document.documentElement.scrollHeight - innerHeight; b.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0) + ')'; };
  addEventListener('scroll', gScroll, { passive: true }); gScroll();
}
const IC = {
  qr:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><path d="M14 14h2v2h-2zM18 14h2M14 18v2M17 17h3v3"/></svg>',
  copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8.5" y="8.5" width="11" height="11" rx="3"/><path d="M15.5 8.5V7a2.5 2.5 0 0 0-2.5-2.5H7A2.5 2.5 0 0 0 4.5 7v6A2.5 2.5 0 0 0 7 15.5h1.5"/></svg>',
  file:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3.5H7.5A2 2 0 0 0 5.5 5.5v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V8z"/><path d="M14 3.5V8h4.5M9 13l2.2 2.2L15.5 11"/></svg>',
  grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="4" y="4.5" width="16" height="15" rx="2.5"/><path d="M4 9.5h16M4 14.5h16M10 4.5v15"/></svg>',
  save:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14"/></svg>',
  restore:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3M4.5 4.5v4h4"/></svg>'
};
const daysTo = n => n <= 0 ? t('today2') : n === 1 ? t('tomorrow') : L() === 'ar' ? t('inDays', { n: n === 2 ? 'يومين' : n <= 10 ? n + ' أيام' : n + ' يوماً' }) : t('inDays', { n });
function meHTML(){
  const p = S.profile, vs = S.settings.visit;
  let h = '<header class="phead"><h1>' + t('meTitle') + '</h1></header>';
  h += '<section class="idcard"><span class="lab">' + t('myId') + '</span><div class="row2"><span class="bigid num" dir="ltr">' + p.id.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3') + '</span><button class="icbtn" type="button" data-act="copyid" aria-label="' + esc(t('copy')) + '">' + IC.copy + '</button></div><p>' + t('idSub') + '</p></section>';
  h += sepr('#3fe08e', 'visit') + '<section class="vcard sec tab" style="--c:#3fe08e">';
  const boxes = '<div class="field"><span>' + t('visitType') + '</span>' + dateBoxes('mv') + '</div><div id="mv_err" class="err" hidden></div><div class="row"><button class="btn pri" type="button" data-act="savevisit">' + t('visitSave') + '</button>' + (vs ? '<button class="btn" type="button" data-act="clearvisit">' + t('visitClear') + '</button>' : '') + '</div>';
  if (vs) {
    const n = Math.round((dayStart(vs) - dayStart(todayS())) / DAY);
    h += '<div class="vshow"><div class="vday"><b class="num">' + new Date(dayStart(vs)).getDate() + '</b><span>' + esc(fmtDate(vs, { month:'short' })) + '</span></div><div><div class="wd">' + esc(fmtDate(vs, { weekday:'long' }) + ' · ' + vs.slice(0, 4)) + '</div><span class="cdn">' + daysTo(n) + '</span></div></div>' +
      '<details class="more" style="background:var(--surface-2);border-color:transparent"><summary>' + t('changeDate') + '</summary><div class="in">' + boxes + '</div></details>';
  } else h += boxes;
  h += '<p class="hint" style="padding:0">' + t('visitSub') + '</p></section>';
  h += sepr('#f6e04b', 'share') + '<div class="sec tabs" style="--c:#f6e04b"><div class="acts2"><button class="atile pri" type="button" data-act="sharejson">' + IC.file + '<span>' + t('shareT') + '<small>' + t('sendClinic') + '</small></span></button><button class="atile" type="button" data-act="sharecsv">' + IC.grid + '<span>' + t('shareX') + '<small>Excel · ' + t('forYou') + '</small></span></button><button class="atile wide" type="button" data-act="qrshow" aria-expanded="' + !!ui.showQR + '">' + IC.qr + '<span>' + t(ui.showQR ? 'qrHide' : 'qrShow') + '</span></button></div>' + (ui.showQR ? diaryQRHTML() : '') + '<p class="hint">' + t('shareSub') + '</p></div>';
  const ok = '<span class="ok" aria-hidden="true">✓</span>', no = '<span style="color:var(--s-off);font-weight:600" aria-hidden="true">!</span>';
  h += '<section class="card sec" style="margin-top:14px"><h2>' + t('dataT') + '</h2><ul class="dlist">' +
    '<li>' + ok + '<span>' + t('dataLocal') + '</span></li>' +
    '<li>' + (encOK ? ok + '<span>' + t('dataEnc') : no + '<span>' + t('dataEncNo')) + '</span></li>' +
    '<li>' + (store.persisted ? ok + '<span>' + t('dataKeep') : no + '<span>' + t('dataKeepNo') + (isStandalone() ? '' : ' <button class="btn ghost sm" type="button" data-tab="install" style="min-height:0;padding:0">' + t('instHow') + '</button>')) + '</span></li>' +
    '<li>' + (S.settings.lastBackup ? ok : no) + '<span>' + t('lastBk') + ': ' + (S.settings.lastBackup ? esc(fmtDate(S.settings.lastBackup, { day:'numeric', month:'long', year:'numeric' })) : t('never')) + '</span></li></ul></section>';
  h += sepr('#ef4a2e', 'backup') + '<div class="sec tabs" style="--c:#ef4a2e"><div class="acts2"><button class="atile" type="button" data-act="backup">' + IC.save + '<span>' + t('saveBackup') + '</span></button><label class="atile">' + IC.restore + '<span>' + t('restore') + '</span><input type="file" accept=".json,application/json" id="restorein" hidden></label></div><p class="hint">' + t('backupSub') + '</p>' +
    (ui.pendingRestore ? '<div class="confirm"><span>' + t('restoreSure') + '</span><div class="row"><button class="btn danger" type="button" data-act="restoreyes">' + t('restoreYes') + '</button><button class="btn" type="button" data-act="restoreno">' + t('cancel') + '</button></div></div>' : '') + '</div>';
  h += sepr('#6f86b0', 'settings') + '<section class="slist sec tab" style="--c:#6f86b0"><label class="srow"><span>' + t('name') + '</span><input class="inp" id="nm" maxlength="30" value="' + esc(p.name) + '" autocomplete="off"></label>' +
    '<div class="srow"><span>' + t('lang') + '</span><div class="seg" role="group" style="align-self:flex-start"><button type="button" data-lang="en" aria-pressed="' + (L() === 'en') + '">English</button><button type="button" data-lang="ar" aria-pressed="' + (L() === 'ar') + '">العربية</button></div></div>' +
    '<div class="srow">' + (ui.confirmDel ? '<div class="confirm"><span>' + t('delSure') + '</span><div class="row"><button class="btn danger" type="button" data-act="delyes">' + t('delYes') + '</button><button class="btn" type="button" data-act="delno">' + t('cancel') + '</button></div></div>'
      : '<button class="delrow" type="button" data-act="del">' + t('del') + '</button>') + '</div></section>';
  h += '<p class="muted small" style="text-align:center;margin:18px 0 0">' + t('appName') + ' · ' + t('version') + ' ' + APP_VERSION + '</p>';
  return h;
}

/* ================= actions ================= */

/* ---------- QR hand-off with the clinic (Movement Dashboard) ---------- */
function diaryQRHTML(){
  let days = [];
  try { days = MasarLink.fromExport(clinicExport()).days.filter(d => d.s.replace(/\./g, '').length || d.d.length).slice(-14); } catch (e) { days = []; }
  if (!days.length) return '<div class="qrbox"><p>' + t('qrEmpty') + '</p></div>';
  let svg = ''; try { svg = MasarLink.qrSVG(MasarLink.encDiary(S.profile.id, days), t('qrShow')); } catch (e) { return '<div class="qrbox"><p>' + t('saveFail') + '</p></div>'; }
  return '<div class="qrbox"><div class="qr">' + svg + '</div><span class="did num" dir="ltr">' + S.profile.id.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3') + '</span><p>' + t('qrShowSub') + '</p></div>';
}
function scanHTML(){
  return '<div class="scanbox"><b>' + t('scanT') + '</b><p class="muted small" style="margin:0">' + t('scanSub') + '</p>' +
    '<div class="row"><button class="btn pri" type="button" data-act="scancam">' + t('scanCam') + '</button><label class="btn" style="display:inline-flex;align-items:center">' + t('scanPhoto') + '<input type="file" accept="image/*" capture="environment" id="scanphoto" hidden></label></div>' +
    '<div id="scanlive" hidden><video id="scanvideo" playsinline muted></video><button class="btn sm" type="button" data-act="scanstop">' + t('scanStop') + '</button></div>' +
    (ui.scanOther ? '<div class="confirm"><span>' + esc(t('scanOther', { a: '\u2066' + ui.scanOther.did.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3') + '\u2069', b: '\u2066' + S.profile.id.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3') + '\u2069' })) + '</span><div class="row"><button class="btn pri" type="button" data-act="scanyes">' + t('scanYes') + '</button><button class="btn" type="button" data-act="scanno">' + t('cancel') + '</button></div></div>' : '') +
    (ui.scanMsg ? '<p class="err" style="margin:0">' + esc(ui.scanMsg) + '</p>' : '') + '</div>';
}
let scanAbort = null;
function scanStop(){ if (scanAbort) { scanAbort.abort(); scanAbort = null; } const w = $('#scanlive'); if (w) w.hidden = true; }
function scanGot(b){
  scanStop(); ui.scanMsg = ''; ui.scanOther = null;
  if (!b) { ui.scanMsg = t('scanNone'); render(); return; }
  if (MasarLink.kind(b) !== 'meds') { ui.scanMsg = t('scanWrong'); render(); return; }
  let r; try { r = MasarLink.decMeds(b); } catch (e) { ui.scanMsg = t('scanWrong'); render(); return; }
  if (r.did && r.did !== S.profile.id) { ui.scanOther = r; render(); return; }
  importMeds(JSON.stringify(r.table)); if (r.did) toast(t('imported') + ' · ' + t('scanOk'));
}
async function scanCamera(){
  scanStop(); ui.scanMsg = ''; const w = $('#scanlive'); if (!w) return; w.hidden = false;
  scanAbort = new AbortController();
  try { const b = await MasarLink.scanCamera($('#scanvideo'), scanAbort.signal); if (b) scanGot(b); }
  catch (e) { scanStop(); ui.scanMsg = t('scanNoCam'); render(); }
}
function importMeds(txt){
  let d; try { d = JSON.parse(txt); } catch (e) { d = null; }
  if (!d || d.format !== 'movement-meds' || !Array.isArray(d.columns) || !Array.isArray(d.meds)) { ui.importErr = t('badFile'); render(); return; }
  S.meds = { format:d.format, version:d.version, issued:d.issued || todayS(), source:d.source || '', columns:d.columns.map(String), meds:d.meds.map(x => ({ name:String(x.name || ''), generic:String(x.generic || ''), cells:(x.cells || []).map(String) })), times:d.columns.map(c => { const o = S.meds && S.meds.columns ? S.meds.columns.indexOf(String(c)) : -1; return o >= 0 && S.meds.times ? (S.meds.times[o] == null ? null : S.meds.times[o]) : null; }) };
  ui.importErr = ''; save(); toast(t('imported')); render(); pushSyncSoon();
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
  if (d.tab) { scanStop(); ui.scanMsg = ''; ui.scanOther = null; ui.showQR = false; ui.tab = d.tab; ui.confirmDel = false; ui.pendingRestore = null; ui.askTake = null; render(); scrollTo(0, 0); return; }
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
  if (d.undo != null) { const slot = doseSlots().find(x => x.col === +d.undo); if (!slot) return; const b0 = dayStart(todayS()); S.events = S.events.filter(e => !((e.k === 'dose' || e.k === 'skip') && e.ts >= b0 && e.ts < b0 + DAY && sameSlot(e, slot))); ui.askTake = null; save(); toast(t('undone')); render(); return; }
  if (d.skip != null) { const slot = doseSlots().find(x => x.col === +d.skip); if (!slot) return; ui.askTake = null; addEvent({ ts: Date.now(), k:'skip', col:slot.col, head:slot.head, at:slot.time }); render(); return; }
  if (d.pmode) { ui.pmode = d.pmode; const g = document.querySelector('#pgrid'); if (g) g.dataset.pm = d.pmode; document.querySelectorAll('[data-pmode]').forEach(x => x.setAttribute('aria-pressed', x.dataset.pmode === d.pmode)); return; }
  if (d.cell != null) { paintCell(b); save(); return; }
  if (d.paint) { ui.paintDay = d.paint; ui.tab = 'paint'; render(); scrollTo(0, 0); return; }
  if (d.brush) { ui.brush = d.brush; document.querySelectorAll('[data-brush]').forEach(x => x.setAttribute('aria-pressed', x.dataset.brush === d.brush)); return; }
  if (d.range) { ui.range = +d.range; render(); return; }
  if (d.photo) { photoFor = d.photo; $('#photoin').click(); return; }
  if (d.lang) { S.profile.lang = d.lang; save(); render(); pushSyncSoon(); return; }
  switch (d.act) {
    case 'nudgeyes': ui.nudgeStep = 'date'; render(); break;
    case 'nudgelater': S.settings.nudge = { next: addDays(todayS(), 3) }; ui.nudgeStep = ''; save(); toast(t('later3')); render(); break;
    case 'recstart': S.settings.rec = { start: todayS() }; save(); toast(t('recStarted')); render(); pushSyncSoon(); break;
    case 'nudgestart': { const v = readDate('nv'); if (v === null) { showErr('nv_err', t('dateBad')); break; } if (v) S.settings.visit = v; else S.settings.rec = { start: todayS() }; S.settings.nudge = { next: addDays(todayS(), 30) }; ui.nudgeStep = ''; save(); toast(v ? t('visitSet', { d: fmtDate(v) }) : t('recStarted')); render(); scrollTo(0, 0); pushSyncSoon(); break; }
    case 'savevisit': { const v = readDate('mv'); if (!v) { showErr('mv_err', t('dateBad')); break; } S.settings.visit = v; save(); toast(t('saved')); render(); pushSyncSoon(); break; }
    case 'clearvisit': S.settings.visit = ''; save(); render(); pushSyncSoon(); break;
    case 'pushon': await pushEnable(); break;
    case 'qrshow': ui.showQR = !ui.showQR; render(); break;
    case 'scancam': await scanCamera(); break;
    case 'scanstop': scanStop(); break;
    case 'scanyes': if (ui.scanOther) { const r = ui.scanOther; ui.scanOther = null; importMeds(JSON.stringify(r.table)); } break;
    case 'scanno': ui.scanOther = null; render(); break;
    case 'pushoff': await pushDisable(); break;
    case 'pushtest': await pushTest(); break;
    case 'paintdone': save(); ui.tab = 'today'; render(); scrollTo(0, 0); break;
    case 'hard': { const td = todayS(); if (S.settings.hard[td]) delete S.settings.hard[td]; else S.settings.hard[td] = true; save(); render(); pushSyncSoon(); break; }
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
    case 'delyes': await pushDisable(true); S0lang = L(); S = null; await wipe(); ui.confirmDel = false; ui.tab = 'today'; render(); break;
    case 'startown': S0lang = L(); S = null; ui.tab = 'today'; render(); break;
  }
});
document.addEventListener('change', async e => {
  const el = e.target; if (!S) return;
  if (el.id === 'medfile' && el.files[0]) { const f = el.files[0]; el.value = ''; importMeds(await f.text()); }
  if (el.id === 'scanphoto' && el.files[0]) { const f = el.files[0]; el.value = ''; try { scanGot(await MasarLink.scanImage(f)); } catch (x) { ui.scanMsg = t('scanNone'); render(); } }
  if (el.id === 'photoin' && el.files[0] && photoFor) { try { S.photos[photoFor] = await resizeImage(el.files[0]); save(); render(); } catch (x) {} }
  if (el.id === 'restorein' && el.files[0]) { const f = el.files[0]; el.value = ''; try { if (S.demo) throw 0; const d = JSON.parse(await f.text()); if (d.format !== 'movement-diary-backup' || !d.profile || !/^\d{10}$/.test(String(d.profile.id || '')) || !Array.isArray(d.events)) throw 0; delete d.format; ui.pendingRestore = d; render(); } catch (x) { toast(t('badFile')); } }
  if (el.id === 'remDose' || el.id === 'remCheck') { S.settings[el.id] = el.checked; save(); pushSyncSoon(); }
  if (el.dataset.coltime != null && el.value) { const [h, m] = el.value.split(':').map(Number); S.meds.times[+el.dataset.coltime] = h * 60 + m; save(); render(); pushSyncSoon(); }
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
  let reloaded = false;
  navigator.serviceWorker.addEventListener('controllerchange', async () => { if (reloaded) return; reloaded = true; await flush(); location.reload(); });
}

/* ================= boot ================= */
(async () => {
  S = await load();
  if (S) { migrate(); if (isStandalone() || S.events.length) protect().then(() => { if (ui.tab === 'me') render(); }); }
  render();
  pushDaily();
})();
function pushDaily(){ if (S && !S.demo && pushOnFlag() && S.settings.push.synced !== todayS()) pushSyncSoon(); }
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') pushDaily(); });
