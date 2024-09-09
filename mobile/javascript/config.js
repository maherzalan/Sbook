	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#3B3B3B";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.gif";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.HomeURL="%first page%";bookConfig.appLogoOpenWindow="Blank";bookConfig.toolbarColor="#3B3B3B";bookConfig.iconColor="#ffffff";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.FlipSound="Enable";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.ShareButtonVisible="Hide";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ZoomButtonVisible="No";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.PrintButtonVisible="No";bookConfig.BackgroundSoundButtonVisible="Enable";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="No";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.minZoomWidth="403";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.bgBeginColor="#FF8040";bookConfig.bgEndColor="#FFE2D5";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.showDoublePage="Yes";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=10;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2327;;bookConfig.securityType="1";bookConfig.bookTitle="tmp";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/search_config.js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [{ language : "Arabic",btnFirstPage:"الأول",btnNextPage:"الصفحة التالية",btnLastPage:"الأخير",btnPrePage:"الصفحة السابقة",btnDownload:"تحميل",btnPrint:"طباعة",btnSearch:"بحث",btnClearSearch:"مسح",frmSearchPrompt:"Clear",btnBookMark:"جدول المحتويات",btnHelp:"مساعدة",btnHome:"الرئيسية",btnFullScreen:"تمكين الشاشة الكاملة",btnDisableFullScreen:"تعطيل الشاشة الكاملة",btnSoundOn:"تشغيل الصوت",btnSoundOff:"إيقاف الصوت",btnShareEmail:"مشاركة",btnSocialShare:"المشاركة على شبكات التواصل الاجتماعي",btnZoomIn:"تقريب",btnZoomOut:"تبعيد",btnDragToMove:"تحرك عن طريق سحب الفأرة",btnAutoFlip:"تقليب تلقائي",btnStopAutoFlip:"إيقاف التقليب التلقائي",btnGoToHome:"العودة للرئيسية",frmHelpCaption:"مساعدة",frmHelpTip1:"انقر مرتين للتقريب أو للتبعيد",frmHelpTip2:"اسحب زاوية الصفحة للعرض",frmPrintCaption:"طباعة",frmPrintBtnCaption:"طباعة",frmPrintPrintAll:"طباعة جميع الصفحات",frmPrintPrintCurrentPage:"طباعة الصفحة الحالية",frmPrintPrintRange:"حدود الطباعة",frmPrintExampleCaption:"مثال: 2،5،8-26",frmPrintPreparePage:"إعداد الصفحة:",frmPrintPrintFailed:"فشل الطباعة:",pnlSearchInputInvalid:"(أقل طول للطلب 3 رموز)",loginCaption:"تسجيل الدخول",loginInvalidPassword:"كلمة السر غير صحيحة!",loginPasswordLabel:"كلمة السر:",loginBtnLogin:"تسجيل الدخول",loginBtnCancel:"إالغاء",btnThumb:"الصور المصغرة",lblPages:"الصفحات:",lblPagesFound:"الصفحات:",lblPageIndex:"الصفحة",btnAbout:"حول",frnAboutCaption:"حول والاتصال",btnSinglePage:"صفحة واحدة",btnDoublePage:"صفحة مزدوجة",btnSwicthLanguage:"تبديل اللغة",tipChangeLanguage:"برجاء اختيار لغة بالأسفل ...",btnMoreOptionsLeft:"خيارات أخرى",btnMoreOptionsRight:"خيارات أخرى",btnFit:"ملائمة النافذة",smallModeCaption:"انقر للعرض في الشاشه الكاملة",btnAddAnnotation:"إضافة تعليقات توضيحية",btnAnnotation:"تعليقات توضيحية",FlipPageEditor_SaveAndExit:"حفظ وخروج",FlipPageEditor_Exit:"خروج",DrawToolWindow_Redo:"إعادة",DrawToolWindow_Undo:"تراجع",DrawToolWindow_Clear:"مسح",DrawToolWindow_Brush:"فرشاة",DrawToolWindow_Width:"العرض",DrawToolWindow_Alpha:"ألفا",DrawToolWindow_Color:"اللون",DrawToolWindow_Eraser:"ممحاة",DrawToolWindow_Rectangular:"مستطيل الشكل",DrawToolWindow_Ellipse:"بيضاوي الشكل",TStuff_BorderWidth:"عرض الحدود",TStuff_BorderAlph:"ألفا الحدود",TStuff_BorderColor:"لون الحدود",DrawToolWindow_TextNote:"ملاحظة نصية",AnnotMark:"إشارة مرجعية",lastpagebtnHelp:"الصفحة الأخيرة",firstpagebtnHelp:"الصفحة الأولى",homebtnHelp:"العودة للصفحة الرئيسية",aboubtnHelp:"حول",screenbtnHelp:"فتح هذا التطبيق في وضع الشاشه الكاملة",helpbtnHelp:"أظهر المساعدة",searchbtnHelp:"البحث من الصفحات",pagesbtnHelp:"ألق نظرة على الصورة المصغرة لهذا الكتيب",bookmarkbtnHelp:"فتح الإشارة المرجعية",AnnotmarkbtnHelp:"فتح جدول المحتويات",printbtnHelp:"طباعة المجلد",soundbtnHelp:"تشغيل أو إيقاف الصوت",sharebtnHelp:"أرسل بريد اليكتروني إلى",socialSharebtnHelp:"المشاركة على شبكات التواصل الاجتماعي",zoominbtnHelp:"تقريب",downloadbtnHelp:"تحميل الكتيب",pagemodlebtnHelp:"تبديل وضع الصفحة الواحدة والصفحة المزدوجة",languagebtnHelp:"تبديل اللغة",annotationbtnHelp:"إضافة تعليق توضيحي",addbookmarkbtnHelp:"إضافة إشارة مرجعية",removebookmarkbtnHelp:"حذف تعليق توضيحي",updatebookmarkbtnHelp:"تحديث إشارة مرجعية",btnShoppingCart:"سلة التسوق",Help_ShoppingCartbtn:"سلة التسوق",Help_btnNextPage:"الصفحة التالية",Help_btnPrePage:"الصفحة السابقة",Help_btnAutoFlip:"تقليب تلقائي",Help_StopAutoFlip:"ايقاف التقليب التلقائي",btnaddbookmark:"إضافة",btndeletebookmark:"حذف",btnupdatebookmark:"تحديث",frmyourbookmarks:"إشاراتك المرجعية",frmitems:"عناصر",DownloadFullPublication:"النشر الكامل",DownloadCurrentPage:"الصفحة الحالية",DownloadAttachedFiles:"الملفات المرفقة",lblLink:"رابط",btnCopy:"زر النسخ",infCopyToClipboard:"Your browser does not support clipboard. ",restorePage:"هل ترغب في استعادة الوضع السابق",tmpl_Backgoundsoundon:"تشغيل صوت الخلفية",tmpl_Backgoundsoundoff:"إيقاف صوت الخلفية",tmpl_Flipsoundon:"تشغيل صوت التقليب",tmpl_Flipsoundoff:"إيقاف صوت التقليب",Help_PageIndex:"رقم الصفحة الحالية",tmpl_PrintPageRanges:"نطاقات الصفحة",tmpl_PrintPreview:"معاينة",btnSelection:"تحديد نص",loginNameLabel:"الإسم:",btnGotoPage:"اذهب",btnSettings:"الإعدادات",soundSettingTitle:"إعدادات الصوت",closeFlipSound:"إغلاق صوت التقليب",closeBackgroundSound:"إغلاق صوت الخلفية",frmShareCaption:"مشاركة",frmShareLinkLabel:"الرابط:",frmShareBtnCopy:"نسخ",frmShareItemsGroupCaption:"المشاركة على شبكات التواصل الاجتماعي",TAnnoActionPropertyStuff_GotoPage:"إذهب إلى صفحة",btnPageBack:"العودة",btnPageForward:"التقدم",SelectTextCopy:"نسخ النص",selectCopyButton:"نسخ",TStuffCart_TypeCart:"سلة التسوق",TStuffCart_DetailedQuantity:"الكمية",TStuffCart_DetailedPrice:"السعر",ShappingCart_Close:"إغلاق",ShappingCart_CheckOut:"إنهاء عملية الشراء",ShappingCart_Item:"العنصر",ShappingCart_Total:"الإجمالي",ShappingCart_AddCart:"أضف لسلة التسوق",ShappingCart_InStock:"مخزون متاح",TStuffCart_DetailedCost:"تكلفة الشحن",TStuffCart_DetailedTime:"موعد التسليم",TStuffCart_DetailedDay:"يوم (أيام)",ShappingCart_NotStock:"مخزون غير كاف",btnCrop:"قص",btnDragButton:"سحب",btnFlipBook:"تقليب الكتاب",btnSlideMode:"وضع الشرائح",btnSinglePageMode:"وضع الصفحة الواحدة",btnVertical:"الوضع الرأسي",btnHotizontal:"الوضع الأفقي",btnClose:"إغلاق",btnDoublePage:"صفحة مزدوجة",btnBookStatus:"عرض الكتاب",checkBoxInsert:"إدراج الصفحة الحالية",lblLast:"هذه هي الصفحة الأخيرة.",lblFirst:"هذه هي الصفحة الأولى.",lblFullscreen:"انقر للعرض في الشاشه الكاملة",lblName:"الإسم",lblPassword:"كلمة السر",lblLogin:"تسجيل الدخول",lblCancel:"إلغاء",lblNoName:"لا يمكن أن يكون اسم المستخدم فارغاً.",lblNoPassword:"كلمة السر لا يمكن أن تكون فارغة.",lblNoCorrectLogin:"الرجاء إدخال اسم المستخدم وكلمة السر الصحيحين.",btnVideo:"معرض الفيديو",btnSlideShow:"عرض الشرائح",pnlSearchInputInvalid:"(أقل طول للطلب 3 رموز)",btnDragToMove:"تحرك عن طريق سحب الفأرة",btnPositionToMove:"تحرك عن طريق موضع الفأرة",lblHelp1:"اسحب زاوية الصفحة للعرض",lblHelp2:"انقر مرتين للتقريب أو للتبعيد",lblCopy:"نسخ",lblAddToPage:"أضف للصفحة",lblPage:"صفحة",lblTitle:"العنوان",lblEdit:"تعديل",lblDelete:"حذف",lblRemoveAll:"حذف الكل",tltCursor:"المؤشر",tltAddHighlight:"إضافة تحديد",tltAddTexts:"إضافة نصوص",tltAddShapes:"إضافة أشكال",tltAddNotes:"إضافة ملاحظات",tltAddImageFile:"إضافة ملف صورة",tltAddSignature:"إضافة توقيع",tltAddLine:"إضافة خط",tltAddArrow:"إضافة سهم",tltAddRect:"إضافة مستطيل",tltAddEllipse:"إضافة شكل بيضاوي",lblDoubleClickToZoomIn:"انقر مرتين للتقريب.",frmShareCaption:"مشاركة",frmShareLabel:"مشاركة",frmShareInfo:"يمكنك مشاركة هذا المنشور على شبكات التواصل الاجتماعي بسهولة. فقط انقر على الزر الملائم بالأسفل.",frminsertLabel:"إدراج إلى الموقع",frminsertInfo:"استخدام الرمز أدناه لتضمين هذا المنشور على موقعك الإلكتروني.",btnQRCode:"انقر لمسح رمز الاستجابة السريعة",btnRotateLeft:"دوران لليسار",lblSelectMode:"Select view mode please."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.612963","y":"0.898428","width":"0.051481","height":"-0.010767"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://pcdc.edu.ps"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.335963","y":"0.856131","width":"0.065968","height":"-0.010767"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://moehe.gov.ps"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.255038","y":"0.856131","width":"0.064667","height":"-0.010767"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://mohe.pna.ps"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.204597","y":"0.856131","width":"0.034177","height":"-0.010767"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://mohe.ps"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.512910","y":"0.898428","width":"0.083510","height":"-0.010767"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:pcdc.mohe@gmail.com"}}],[],[],[],[],[],[],[],[]]};
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
