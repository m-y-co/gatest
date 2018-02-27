/**
 * Copyright MARS FLAG Corporation. All rights reserved.
 *
 * http://www.marsflag.com/
 */
function initJSONPSuggest(R,Y){var P,h=window,F=h.document,Q=(F&&F.getElementsByTagName),K=h.setInterval,q=h.clearInterval,Z=window.alert,g=navigator.userAgent;var M=R.interface_url||"suggest.x",m=R.tmpl_func||"MF_suggest_tmpl",B=R.handler_name||"parent.suggest_ctxt",A=R.callback||"load_suggest",f=R.selected_bgcolor||"#ddd",i=R.max||10,c=R.array_styles||[],D=R.input_jquery,d=R.suggest_frame||"suggest_frame",E=R.no_result_mess||"",L=R.array_queries,X=R.show_data_graph,r="suggest_area",V=R.to_upper,j=R.debug,I=R.rtl,n=R.ctk||"",b=R.ct||"";var W="GALFSRAM",H=h[W]||{},a;h[W]=H;Y=Y||h.jQuery;function l(AZ){if(a){return }try{AZ=AZ||h.event;if(AZ&&AZ.type=="readystatechange"&&this.readyState!="complete"){return }if(O){q(O)}a=true;S.onload=S.onreadystatechange=null;var t=S.contentWindow||h.frames[d];var AD=t.document;var w=AD.body;var AH=false;var u=c.join("")+(X?"":".suggest_data_graph {display:none}");if(C||N){w.innerHTML="";if(c){var AK=AD.createElement("style");AK.type="text/css";if(N&&AK.styleSheet){AK.styleSheet.cssText=u}else{AK.innerHTML=u}w.appendChild(AK)}var s=AD.createElement("div");s.id=r;w.appendChild(s);if(I){w.className+=" rtl"}}else{if(c){AD.write('<style type="text/css"><!-- '+u+"--></style>")}AD.write("<body"+(I?' class="rtl"':"")+'><div id="'+r+'"></div></body>');AD.close();var s=AD.getElementById(r)}if(w){w.scroll="no"}function AJ(){var Ad=D.css("font-size");var Af=D.css("font-family");var Ae=D.css("height");var Ag=AD.styleSheets&&AD.styleSheets[0];if(Ag.addRule){Ag.addRule("body *","font-size:"+Ad+" !important");Ag.addRule("body *","font-family:"+Af+" !important");Ag.addRule("#suggest_area td","height:"+Ae+" !important")}else{Ag.insertRule("body * {font-size:"+Ad+"}",Ag.cssRules.length);Ag.insertRule("body * {font-family:"+Af+"}",Ag.cssRules.length);Ag.insertRule("#suggest_area td {height:"+Ae+" !important}",Ag.cssRules.length)}}AJ();s.onselectstart=s.oncontextmenu=function(){return false};var AQ="suggest_data_";var AM=B.replace(/^[^.]*\.(.*)$/,"$1");var AN="parent."+W+"."+AM;if(!H[AM]){H[AM]={}}function AX(){e.css("visibility","visible")}function AE(){e.css("visibility","hidden")}function AY(Ad,Ae){if(!arguments.length){var Af=AD.getElementsByTagName("TABLE")[0];Ad=Af.offsetWidth;Ae=Af.offsetHeight;if(o){Ad+=3;Ae++}}S.style.width=Ad+"px";S.style.height=Ae+"px"}function AL(){return e.css("visibility")=="visible"}function AI(Ad){return AD.getElementById(Ad)}var Ac=h.onresize;h.onresize=function(){x();if(Ac){Ac()}};function x(){var Ad=D[0];var Ae=YAHOO.util.Dom.getXY(Ad);S.style.left=(Ae[0]-(N?2:0))+"px";S.style.top=(Ae[1]+Ad.offsetHeight-(N?2:0))+"px";S.style.width=Ad.offsetWidth+"px"}function AC(Ad){AH=false;if(!Ad||Ad.length==0){if(!E){return }AH=true}if(V){for(var Af=0;Af<Ad.length;Af++){Ad[Af].word=Ad[Af].word.toUpperCase()}}x();if(!D.val()){return }var Ae={prefix:AQ,handler:AN,data:Ad};if(AH){Ae.data=[{word:E,point:-1}]}try{h[m](Ae,s);setTimeout(AY,0);AA=Ad;AW=-1;AX()}catch(Ag){if(j){Z(U(Ag))}}}function AT(Ad){if(Ad.match(/^\s*$/)){return false}var Af=["q="+encodeURIComponent(Ad),"ie=utf8","max="+i,"callback=?"];if(b){Af=Af.concat("ct="+encodeURIComponent(b))}if(n){Af=Af.concat("ctk="+encodeURIComponent(n))}if(L){Af=Af.concat(L)}var Ae=M+"?"+Af.join("&");Y.getJSON(Ae,AC)}var AV=D.val();var AA=[];var AW=-1;function AS(Ad){if(Ad!=P){AU();AW=Ad}if(AA[AW]){var Ae=AI(AQ+AW);Ae.backgroundColorOrg=Ae.style.backgroundColor;Ae.style.backgroundColor=f}}H[AM]["focus"]=AS;function AU(){if(AA[AW]){var Ad=AI(AQ+AW);Ad.style.backgroundColor=Ad.backgroundColorOrg}}function Ab(){if(AW<0){AW=0}else{AU();AW++}if(AW>=AA.length){AW=-1;return }AS()}function AG(){if(AW<0){AW=AA.length-1}else{AU();AW--;if(AW==-1){return }}AS()}function Aa(){var Ad=AA[AW];if(Ad){if(D.val()!=Ad.word){D.val(Ad.word);AV=Ad.word;AT(Ad.word+" ");return 0}}return 1}var AP;H[AM]["suggest_mousedown"]=function(Ad){if(AH){return }AP=(new Date()).getTime()};H[AM]["suggest_click"]=function(Ad){if(AH){return false}if(Aa()){D[0].form.submit()}else{D[0].focus();return false}};var v={"9":1,"16":1,"17":1,"27":1,"18":1,"19":1,"20":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"40":1,"44":1,"45":1};var AO;function AR(Ae){var Ad=Ae.keyCode;AO=Ae.shiftKey;if(Ad==13&&AW!=-1){return 0}if(v[Ad]){return 0}return 1}function AF(){var Ad=D.val();if(AV==Ad){return }AV=Ad;if(Ad==""){AA=[];AE()}else{AT(Ad)}}var z;function AB(){if(!z){z=K(AF,100)}}function y(){if(!z){return }q(z);z=null}if(h.opera||(g.indexOf("Gecko")>=0&&g.indexOf("KHTML")==-1)){D.keypress(function(Ad){AR(Ad)&&AB()})}else{D.keyup(function(Ad){AR(Ad)&&AF()})}D.keydown(function(Ae){var Ad=Ae.keyCode;AO=Ae.shiftKey;switch(Ad){case 9:if(!AL()){return true}if(AO){AG()}else{Ab()}break;case 40:Ab();break;case 38:AG();break;case 27:AE();break;case 13:if(!Aa()){break}default:return }return false}).blur(function(Ae){var Ad=(new Date()).getTime();if(AP+100>Ad){return }y();AE()}).focus(function(Ad){if(AA.length==0&&!AH){return }AX()})}catch(AZ){if(j){Z(U(AZ))}}}function U(v){var t,u=[];for(t in v){u[u.length]=t+" :\t"+v[t]}return u.join("\n")}var O;var o=g.match(/AppleWebKit\/4\d\d/);var C=g.match(/Opera/);var N=g.match(/MSIE/);var p=g.match(/MSIE 6/);var J=g.match(/trident/i);J&&(N=true);var k=g.match(/(iPhone|iPad|iPod|Android|dream|CUPCAKE|blackberry|webOS|incognito|webmate)/);var T=p?"javascript:false;":"about:blank";if(typeof (D)=="string"){D=Y(D)}if(!D||!D[0]){return }D.attr("autocomplete","off");var e=Y("#"+d);var S=e.get(0);var G=false;if(e.length==0){S=F.createElement("IFRAME");e=Y(S);G=true}S.name=S.id=d;S.frameBorder=0;S.scrolling="no";e.css({position:"absolute",visibility:"hidden",zIndex:10000,top:"0px",height:"0px",width:D[0].offsetWidth+"px",border:"0px"});if(!G){e.css("display","block")}if(G){Y(F.body).append(S)}else{e.prependTo(Y(F.body))}if(!(C||N)){S.onload=S.onreadystatechange=l;S.src=T}if(o||C||N){O=K(l,100)}};