(function(){var win=window,doc=document,nav=navigator,ua=nav.userAgent,scr=win.screen,loc=win.location.href;var prtl=loc.indexOf("https")>-1?"https://":"http://",domain="beacon.sina.com.cn";var a_gif=prtl+domain+"/a.gif?",g_gif=prtl+domain+"/g.gif?",d_gif=prtl+domain+"/d.gif?",e_gif=prtl+domain+"/e.gif?";var sudaRef=doc.referrer.toLowerCase();var cookie_SINAGLOBAL="SINAGLOBAL",cookie_For_Flash="FSINAGLOBAL",cookie_Apache="Apache",cookie_ULV="ULV",cookie_SUP="SUP",cookie_UOR="UOR",cookie__s_acc="_s_acc",cookie__s_tentry="_s_tentry";var count=0;var inFrame=false,isMetaFresh=false;var loginUserInfo="";var commonType=16777215,performance=0,filter,interval=0;var sudaPageid="",sudaExt1="",sudaExt2="";var sudaInfo=[],acTrackInfo=[],uaTrackInfo=[];var sudaGlobalCount=0;var fsudaGlobalCount=0;var storage=(function(){var objDS=window.localStorage,store,STORE_NAME;if(objDS){return{get:function(key){return unescape(objDS.getItem(key))},set:function(key,value){objDS.setItem(key,escape(value))}}}else{if(window.ActiveXObject){store=document.documentElement;STORE_NAME="localstorage";try{store.addBehavior("#default#userdata");store.save("localstorage")}catch(e){}return{set:function(key,value){try{store.setAttribute(key,value);store.save(STORE_NAME)}catch(e){}},get:function(key){try{store.load(STORE_NAME);return store.getAttribute(key)}catch(e){}}}}else{return{get:getCookie,set:setCookie}}}})();var flashData={flashObj:null,id:"sudaDataFrame",status:"loading",$:function(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval("document.all."+objName)}},clear:function(){this.flashObj.write("")},read:function(name){if(this.status!="ok"){return""}var nameRule=/[=,;]+/i;if(nameRule.test(name)){return""}var dataScring=this.flashObj.read();if(dataScring==null){dataScring=""}var reg=new RegExp("(?:^|;)"+name+"=(.*?),expires=([^;]*)","i");var value=dataScring.match(reg);if(value==null){value=""}else{if(value.length>=3){var now=new Date();var dd=now.getTime();if(new Number(value[2])>dd){value=value[1];value=value.replace(/\[\$\=\]/g,"=");value=value.replace(/\[\$\;\]/g,";");value=value.replace(/\[\$\,\]/g,",")}else{value=""}}else{value=""}}return value},write:function(name,value,hours){if(this.status!="ok"){return}var nameRule=/[=,;]+/i;if(nameRule.test(name)){return}value=value.toString();value=value.replace(/\\/g,"\\\\");value=value.replace(/\&/g,"&amp;");value=value.replace(/\=/g,"[$$=]");value=value.replace(/\;/g,"[$$;]");value=value.replace(/\,/g,"[$$,]");if(typeof(hours)!="number"){hours=24*30*3}var now=new Date();var expire=new Date(now.getTime()+hours*3600000);expire=",expires="+expire.getTime();var list=this.flashObj.read();if(list==null){list=""}list=list.split(/;(?!\])/i);var newList=[],update=false;var data;for(var i=0;i<list.length;i++){data=list[i].match(/(.*?)\=(.*?),expires=(\d*)/i);if(data==null){continue}if(data.length<4){continue}if(data[1]==name){if(value!=""){newList.push(name+"="+value+expire)}update=true}else{if(new Date(new Number(data[3]))>now&&data[2]!=""){newList.push(list[i])}}}if(!update){newList.push(name+"="+value+expire)}var newStr="";for(var i=0;i<newList.length;i++){if(newStr!=""){newStr+=";"}newStr+=newList[i]}this.flashObj.write(newStr)},load:function(){try{this.flashObj=this.$(this.id).contentWindow.flashData.flashObj;this.status="ok"}catch(e){}if(this.onload){this.onload()}}};var local_unique="";var loaded=false;function createFlashIFrame(){var iframe=document.createElement("iframe");iframe.src="http://beacon.sina.com.cn/data.html";iframe.id="sudaDataFrame";iframe.style.height="0px";iframe.style.width="1px";iframe.style.overflow="hidden";iframe.frameborder="0";iframe.scrolling="no";document.getElementsByTagName("head")[0].appendChild(iframe)}function getMeta(metaName,pidx){var pMeta=doc.getElementsByName(metaName);var idx=(pidx>0)?pidx:0;return(pMeta.length>idx)?pMeta[idx].content:""}function getSudaMeta(){var pMeta=doc.getElementsByName("sudameta");var meta=[];for(var idx=0;idx<pMeta.length;idx++){var content=pMeta[idx].content;if(content){meta.push(content)}}return meta}function stringSplice(src,k,e,sp){if(src==""){return""}sp=(sp=="")?"=":sp;k+=sp;var ps=src.indexOf(k);if(ps<0){return""}ps+=k.length;var pe=src.indexOf(e,ps);if(pe<ps){pe=src.length}return src.substring(ps,pe)}function getCookie(ckName){if(undefined==ckName||""==ckName){return""}return stringSplice(doc.cookie,ckName,";","")}function setCookie(ckName,ckValue,ckDays,ckDomain){if(ckValue!=null){if((undefined==ckDomain)||(null==ckDomain)){ckDomain="sina.com.cn"}if((undefined==ckDays)||(null==ckDays)||(""==ckDays)){doc.cookie=ckName+"="+ckValue+";domain="+ckDomain+";path=/"}else{var now=new Date();var time=now.getTime();time=time+86400000*ckDays;now.setTime(time);time=now.getTime();doc.cookie=ckName+"="+ckValue+";domain="+ckDomain+";expires="+now.toUTCString()+";path=/"}}}function addEvent(sNode,sEventType,oFunc){var oElement=sNode;if(oElement==null){return false}sEventType=sEventType||"click";if((typeof oFunc).toLowerCase()!="function"){return}if(oElement.attachEvent){oElement.attachEvent("on"+sEventType,oFunc)}else{if(oElement.addEventListener){oElement.addEventListener(sEventType,oFunc,false)}else{oElement["on"+sEventType]=oFunc}}return true}function getEvent(){if(window.event!=null){return window.event}else{if(window.event){return window.event}var o=arguments.callee.caller;var e;var n=0;while(o!=null&&n<40){e=o.arguments[0];if(e&&(e.constructor==Event||e.constructor==MouseEvent||e.constructor==KeyboardEvent)){return e}n++;o=o.caller}return e}}function fixEvent(e){e=e||getEvent();if(!e.target){e.target=e.srcElement;e.pageX=e.x;e.pageY=e.y}if(typeof e.layerX=="undefined"){e.layerX=e.offsetX}if(typeof e.layerY=="undefined"){e.layerY=e.offsetY}return e}function trim(str){if(typeof str!=="string"){throw"trim need a string as parameter"}var len=str.length;var s=0;var reg=/(\u3000|\s|\t|\u00A0)/;while(s<len){if(!reg.test(str.charAt(s))){break}s+=1}while(len>s){if(!reg.test(str.charAt(len-1))){break}len-=1}return str.slice(s,len)}function isArray(o){return Object.prototype.toString.call(o)==="[object Array]"}function queryToJson(QS,isDecode){var _Qlist=trim(QS).split("&");var _json={};var _fData=function(data){if(isDecode){return decodeURIComponent(data)}else{return data}};for(var i=0,len=_Qlist.length;i<len;i++){if(_Qlist[i]){var _hsh=_Qlist[i].split("=");var _key=_hsh[0];var _value=_hsh[1];if(_hsh.length<2){_value=_key;_key="$nullName"}if(!_json[_key]){_json[_key]=_fData(_value)}else{if(isArray(_json[_key])!=true){_json[_key]=[_json[_key]]}_json[_key].push(_fData(_value))}}}return _json}function foreach(arr,func){for(var i=0,len=arr.length;i<len;i++){func(arr[i],i)}}function getHost(sUrl){var r=new RegExp("^http(?:s)?://([^/]+)","im");if(sUrl.match(r)){return sUrl.match(r)[1].toString()}else{return""}}function ssoDecode(inputString){if("v01"!=inputString.substring(0,3)){return inputString}var input=inputString.substring(3);var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i;var keys=[];for(i=0;i<=64;i++){keys[i+128]=i}i=0;while(i<input.length){enc1=keys[parseInt(input.substr(i,2),16)];i+=2;enc2=keys[parseInt(input.substr(i,2),16)];i+=2;enc3=keys[parseInt(input.substr(i,2),16)];i+=2;enc4=keys[parseInt(input.substr(i,2),16)];i+=2;chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=undefined&&enc3!=64){output=output+String.fromCharCode(chr2)}if(enc4!=undefined&&enc4!=64){output=output+String.fromCharCode(chr3)}}return output}var CI={screenSize:function(){return(commonType&8388608==8388608)?scr.width+"x"+scr.height:""},colorDepth:function(){return(commonType&4194304==4194304)?scr.colorDepth:""},appCode:function(){return(commonType&2097152==2097152)?nav.appCodeName:""},appName:function(){return(commonType&1048576==1048576)?((nav.appName.indexOf("Microsoft Internet Explorer")>-1)?"MSIE":nav.appName):""},cpu:function(){return(commonType&524288==524288)?(nav.cpuClass||nav.oscpu):""},platform:function(){return(commonType&262144==262144)?(nav.platform):""},jsVer:function(){if(commonType&131072!=131072){return""}var p,appsign,appver,jsver=1,isN6=0,navigatorAppName=(nav.appName.indexOf("Microsoft Internet Explorer")>-1)?"MSIE":nav.appName,navigatorAppVersion=nav.appVersion;if("MSIE"==navigatorAppName){appsign="MSIE";p=navigatorAppVersion.indexOf(appsign);if(p>=0){appver=window.parseInt(navigatorAppVersion.substring(p+5));if(3<=appver){jsver=1.1;if(4<=appver){jsver=1.3}}}}else{if(("Netscape"==navigatorAppName)||("Opera"==navigatorAppName)||("Mozilla"==navigatorAppName)){jsver=1.3;appsign="Netscape6";p=navigatorAppVersion.indexOf(appsign);if(p>=0){jsver=1.5}}}return jsver},network:function(){if(commonType&65536!=65536){return""}var ct="";ct=(nav.connection&&nav.connection.type)?nav.connection.type:ct;try{doc.body.addBehavior("#default#clientCaps");ct=doc.body.connectionType}catch(e){ct="unkown"}return ct},language:function(){return(commonType&32768==32768)?(nav.systemLanguage||nav.language):""},timezone:function(){return(commonType&16384==16384)?(new Date().getTimezoneOffset()/60):""},flashVer:function(){if(commonType&8192!=8192){return""}var pl=nav.plugins,flash,item,desc;if(pl&&pl.length){for(var key in pl){item=pl[key];if(item.description==null){continue}if(flash!=null){break}desc=item.description.toLowerCase();if(desc.indexOf("flash")!=-1){flash=item.version?parseInt(item.version):desc.match(/\d+/);continue}}}else{if(window.ActiveXObject){for(var i=10;i>=2;i--){try{var object=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);if(object){flash=i;break}}catch(e){}}}else{if(ua.indexOf("webtv/2.5")!=-1){flash=3}else{if(ua.indexOf("webtv")!=-1){flash=2}}}}return flash},javaEnabled:function(){if(commonType&4096!=4096){return""}var pl=nav.plugins,java=nav.javaEnabled(),item,desc;if(java==true){return 1}if(pl&&pl.length){for(var key in pl){item=pl[key];if(item.description==null){continue}if(java!=null){break}desc=item.description.toLowerCase();if(desc.indexOf("java plug-in")!=-1){java=parseInt(item.version);continue}}}else{if(window.ActiveXObject){java=(new ActiveXObject("JavaWebStart.IsInstalled")!=null)}}return java?1:0}};var PI={pageId:function(pageid){var pid=pageid||sudaPageid,defaultPageID="-9999-0-0-1";if((undefined==pid)||(""==pid)){try{var metaTxt=getMeta("publishid");if(""!=metaTxt){var pbidList=metaTxt.split(",");if(pbidList.length>0){if(pbidList.length>=3){defaultPageID="-9999-0-"+pbidList[1]+"-"+pbidList[2]}pid=pbidList[0]}}else{pid="0"}}catch(e){pid="0"}pid=pid+defaultPageID}return pid},sessionCount:function(){var count=getCookie("_s_upa");if(count==""){count=0}return count},excuteCount:function(){return SUDA.sudaCount},referrer:function(){if(commonType&2048!=2048){return""}var re=/^[^\?&#]*.swf([\?#])?/;if((sudaRef=="")||(sudaRef.match(re))){var ref=stringSplice(loc,"ref","&","");if(ref!=""){return escape(ref)}}return escape(sudaRef)},isHomepage:function(){if(commonType&1024!=1024){return""}var isHome="";try{doc.body.addBehavior("#default#homePage");isHome=doc.body.isHomePage(loc)?"Y":"N"}catch(e){isHome="unkown"}return isHome},PGLS:function(){return(commonType&512==512)?getMeta("stencil"):""},ZT:function(){if(commonType&256!=256){return""}var zt=getMeta("subjectid");zt.replace(",",".");zt.replace(";",",");return escape(zt)},mediaType:function(){return(commonType&128==128)?getMeta("mediaid"):""},domCount:function(){return(commonType&64==64)?doc.getElementsByTagName("*").length:""},iframeCount:function(){return(commonType&32==32)?doc.getElementsByTagName("iframe").length:""}};var UI={visitorId:function(gid){if(!gid){var gid=getCookie(cookie_SINAGLOBAL);return gid}else{setCookie(cookie_SINAGLOBAL,gid,3650)}},fvisitorId:function(fid){if(!fid){var fid=getCookie(cookie_For_Flash);return fid}else{setCookie(cookie_For_Flash,fid,3650)}},sessionId:function(){var sid=getCookie(cookie_Apache);if(""==sid){var now=new Date();sid=Math.random()*10000000000000+"."+now.getTime();setCookie(cookie_Apache,sid)}return sid},flashCookie:function(gid){if(gid){flashData.write("local_unique",gid,24*360)}else{return local_unique}},lastVisit:function(){var sid=getCookie(cookie_Apache);var lvi=getCookie(cookie_ULV);var lva=lvi.split(":");var lvr="",lvn;if(lva.length>=6){if(sid!=lva[4]){lvn=new Date();var lvd=new Date(window.parseInt(lva[0]));lva[1]=window.parseInt(lva[1])+1;if(lvn.getMonth()!=lvd.getMonth()){lva[2]=1}else{lva[2]=window.parseInt(lva[2])+1}if(((lvn.getTime()-lvd.getTime())/86400000)>=7){lva[3]=1}else{if(lvn.getDay()<lvd.getDay()){lva[3]=1}else{lva[3]=window.parseInt(lva[3])+1}}lvr=lva[0]+":"+lva[1]+":"+lva[2]+":"+lva[3];lva[5]=lva[0];lva[0]=lvn.getTime();setCookie(cookie_ULV,lva[0]+":"+lva[1]+":"+lva[2]+":"+lva[3]+":"+sid+":"+lva[5],360)}else{lvr=lva[5]+":"+lva[1]+":"+lva[2]+":"+lva[3]}}else{lvn=new Date();lvr=":1:1:1";setCookie(cookie_ULV,lvn.getTime()+lvr+":"+sid+":",360)}return lvr},userNick:function(){if(loginUserInfo!=""){return loginUserInfo}var sup=unescape(getCookie(cookie_SUP));if(sup!=""){var ag=stringSplice(sup,"ag","&","");var user=stringSplice(sup,"user","&","");var uid=stringSplice(sup,"uid","&","");var sex=stringSplice(sup,"sex","&","");var bday=stringSplice(sup,"dob","&","");loginUserInfo=ag+":"+user+":"+uid+":"+sex+":"+bday;return loginUserInfo}else{return""}},userOrigin:function(){if(commonType&4!=4){return""}var uoc=getCookie(cookie_UOR);var upa=uoc.split(":");if(upa.length>=2){return upa[0]}else{return""}},advCount:function(){return(commonType&2==2)?getCookie(cookie__s_acc):""},setUOR:function(){var uoc=getCookie(cookie_UOR),uor="",uol="",up_t="",up="",currLoc=loc.toLowerCase(),ref=doc.referrer.toLowerCase();var re=/[&|?]c=spr(_[A-Za-z0-9]{1,}){3,}/;var ct=new Date();if(currLoc.match(re)){up_t=currLoc.match(re)[0]}else{if(ref.match(re)){up_t=ref.match(re)[0]}}if(up_t!=""){up_t=up_t.substr(3)+":"+ct.getTime()}if(uoc==""){if(getCookie(cookie_ULV)==""){uor=getHost(ref);uol=getHost(currLoc)}setCookie(cookie_UOR,uor+","+uol+","+up_t,365)}else{var ucg=0,uoa=uoc.split(",");if(uoa.length>=1){uor=uoa[0]}if(uoa.length>=2){uol=uoa[1]}if(uoa.length>=3){up=uoa[2]}if(up_t!=""){ucg=1}else{var upa=up.split(":");if(upa.length>=2){var upd=new Date(window.parseInt(upa[1]));if(upd.getTime()<(ct.getTime()-86400000*30)){ucg=1}}}if(ucg){setCookie(cookie_UOR,uor+","+uol+","+up_t,365)}}},setAEC:function(eid){if(""==eid){return}var acc=getCookie(cookie__s_acc);if(acc.indexOf(eid+",")<0){acc=acc+eid+","}setCookie(cookie__s_acc,acc,7)},ssoInfo:function(){var info=unescape(ssoDecode(getCookie("sso_info")));if(info!=""){var uid=stringSplice(info,"uid","&","");return uid}else{return""}}};var D={CI:function(){var data=["sz:"+CI.screenSize(),"dp:"+CI.colorDepth(),"ac:"+CI.appCode(),"an:"+CI.appName(),"cpu:"+CI.cpu(),"pf:"+CI.platform(),"jv:"+CI.jsVer(),"ct:"+CI.network(),"lg:"+CI.language(),"tz:"+CI.timezone(),"fv:"+CI.flashVer(),"ja:"+CI.javaEnabled()];return"CI="+data.join("|")},PI:function(pid){var data=["pid:"+PI.pageId(pid),"st:"+PI.sessionCount(),"et:"+PI.excuteCount(),"ref:"+PI.referrer(),"hp:"+PI.isHomepage(),"PGLS:"+PI.PGLS(),"ZT:"+PI.ZT(),"MT:"+PI.mediaType(),"keys:","dom:"+PI.domCount(),"ifr:"+PI.iframeCount()];return"PI="+data.join("|")},UI:function(){var data=["vid:"+UI.visitorId(),"sid:"+UI.sessionId(),"lv:"+UI.lastVisit(),"un:"+UI.userNick(),"uo:"+UI.userOrigin(),"ae:"+UI.advCount(),"lu:"+UI.fvisitorId(),"si:"+UI.ssoInfo()];return"UI="+data.join("|")},EX:function(extInfo1,extInfo2){if(commonType&1!=1){return""}extInfo1=(null!=extInfo1)?extInfo1||"":sudaExt1;extInfo2=(null!=extInfo2)?extInfo2||"":sudaExt2;return"EX=ex1:"+extInfo1+"|ex2:"+extInfo2},MT:function(){return"MT="+getSudaMeta().join("|")},V:function(){return"V=2.1.3"},R:function(){return"gUid_"+new Date().getTime()}};function setEntry(){var e="-",ref=doc.referrer.toLowerCase(),currLoc=loc.toLowerCase();if(""==getCookie(cookie__s_tentry)){if(""!=ref){e=getHost(ref)}setCookie(cookie__s_tentry,e,"","weibo.com")}var vlogin=/weibo.com\/reg.php/;if(currLoc.match(vlogin)){var sharehost=stringSplice(unescape(currLoc),"sharehost","&","");var appkey=stringSplice(unescape(currLoc),"appkey","&","");if(""!=sharehost){setCookie(cookie__s_tentry,sharehost,"","weibo.com")}setCookie("appkey",appkey,"","weibo.com")}}function sendFinalRequest(url){createRequest(url)}function createRequest(url){var img=new Image();SUDA.img=img;img.src=url}function gatherCommon(pid,ext1,ext2){SUDA.sudaCount++;var url=a_gif+[D.V(),D.CI(),D.PI(pid),D.UI(),D.MT(),D.EX(ext1,ext2),D.R()].join("&");createRequest(url)}function gatherCommon2(pid,ext1,ext2){if(inFrame||isMetaFresh){return}if(SUDA.sudaCount!=0){return}gatherCommon(pid,ext1,ext2)}function acTrack(eid,p){if((""==eid)||(undefined==eid)){return}UI.setAEC(eid);if(0==p){return}var s="AcTrack||"+getCookie(cookie_SINAGLOBAL)+"||"+getCookie(cookie_Apache)+"||"+UI.userNick()+"||"+eid+"||";var url=e_gif+s+"&gUid_"+new Date().getTime();sendFinalRequest(url)}function uaTrack(acode,aext,href){if(!href){href=""}else{href=escape(href)}var s="UATrack||"+getCookie(cookie_SINAGLOBAL)+"||"+getCookie(cookie_Apache)+"||"+UI.userNick()+"||"+acode+"||"+aext+"||"+PI.referrer()+"||"+href+"||";var url=e_gif+s+"&gUid_"+new Date().getTime();sendFinalRequest(url)}function trackAgent(e){var evt=fixEvent(e);var el=evt.target;var sudaAcTrack="",sudaUaTrack="",href="";var trackData;if(el!=null&&el.getAttribute&&(!el.getAttribute("suda-uatrack")&&!el.getAttribute("suda-actrack")&&!el.getAttribute("suda-data"))){while(el!=null&&el.getAttribute&&(!!el.getAttribute("suda-uatrack")||!!el.getAttribute("suda-actrack")||!!el.getAttribute("suda-data"))==false){if(el==doc.body){return}el=el.parentNode}}if(el==null||el.getAttribute==null){return}sudaAcTrack=el.getAttribute("suda-actrack")||"";sudaUaTrack=el.getAttribute("suda-uatrack")||el.getAttribute("suda-data")||"";sudaUrls=el.getAttribute("suda-urls")||"";if(sudaUaTrack){trackData=queryToJson(sudaUaTrack);if(el.tagName.toLowerCase()=="a"){href=el.href}trackData.key&&SUDA.uaTrack&&SUDA.uaTrack(trackData.key,trackData.value||trackData.key,href)}if(sudaAcTrack){trackData=queryToJson(sudaAcTrack);trackData.key&&SUDA.acTrack&&SUDA.acTrack(trackData.key,trackData.value||trackData.key)}}inFrame=(function(minH,minW){if(win.top==win){return false}else{try{if(doc.body.clientHeight==0){return false}return((doc.body.clientHeight>=minH)&&(doc.body.clientWidth>=minW))?false:true}catch(e){return true}}})(320,240);isMetaFresh=(function(){return false})();UI.setUOR();var sid=UI.sessionId();if(!UI.visitorId()){UI.visitorId(sid)}window.SUDA=window.SUDA||[];SUDA.sudaCount=SUDA.sudaCount||0;SUDA.log=function(){gatherCommon.apply(null,arguments)};SUDA.acTrack=function(){acTrack.apply(null,arguments)};SUDA.uaTrack=function(){uaTrack.apply(null,arguments)};addEvent(doc.body,"click",trackAgent);window.GB_SUDA=SUDA;GB_SUDA._S_pSt=function(){};GB_SUDA._S_acTrack=function(){acTrack.apply(null,arguments)};GB_SUDA._S_uaTrack=function(){uaTrack.apply(null,arguments)};window._S_pSt=function(){};window._S_acTrack=function(){acTrack.apply(null,arguments)};window._S_uaTrack=function(){uaTrack.apply(null,arguments)};window._S_PID_="";gatherCommon2()})();