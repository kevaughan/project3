var _WSG_killSwitchListObj={"2.0.0.100":"y","2.0.0.101":"y","2.0.0.430":"y","2.0.0.431":"y","2.0.0.432":"y","2.0.0.433":"y","2.0.0.434":"y","2.0.0.435":"y","2.0.0.436":"y","2.0.0.437":"y","2.0.0.438":"y","2.0.0.439":"y","2.0.0.440":"y","2.0.0.441":"y","2.0.0.442":"y","2.0.0.443":"y","2.0.0.444":"y","2.0.0.445":"y","2.0.0.448":"y","2.0.0.449":"y","2.0.0.450":"y","2.0.0.451":"y","2.0.0.452":"y","2.0.0.453":"y","2.0.0.454":"y","2.0.0.455":"y","2.0.0.456":"y","2.0.0.457":"y","2.0.0.458":"y","2.0.0.459":"y","2.0.0.460":"y","2.0.0.461":"y","2.0.0.462":"y","2.0.0.463":"y","2.0.0.464":"y","2.0.0.465":"y","2.0.0.466":"y","2.0.0.467":"y","2.0.0.468":"y","2.0.0.469":"y","2.0.0.470":"y","2.0.0.471":"y","2.0.0.472":"y","2.0.0.473":"y","2.0.0.474":"y","2.0.0.475":"y","2.0.0.476":"y","2.0.0.477":"y","2.0.0.478":"y","2.0.0.479":"y","2.0.0.480":"y","2.0.0.481":"y","2.0.0.482":"y","2.0.0.483":"y","2.0.0.484":"y","2.0.0.485":"y","2.0.0.486":"y","2.0.0.487":"y","2.0.0.488":"y","2.0.0.489":"y","2.0.0.490":"y","2.0.0.491":"y","2.0.0.492":"y","2.0.0.493":"y","2.0.0.494":"y","2.0.0.495":"y","2.0.0.496":"y","2.0.0.497":"y","2.0.0.498":"y","2.0.0.499":"y","2.0.0.500":"y","2.0.0.501":"y","2.0.0.502":"y","2.0.0.503":"y","2.0.0.504":"y","2.0.0.505":"y","2.0.0.506":"y","2.0.0.507":"y","2.0.0.508":"y","2.0.0.509":"y","2.0.0.510":"y","2.0.0.511":"y","2.0.0.512":"y","2.0.0.513":"y","2.0.0.514":"y","2.0.0.515":"y","2.0.0.516":"y","2.0.0.517":"y","2.0.0.518":"y","2.0.0.519":"y","2.0.0.520":"y","2.0.0.521":"y","2.0.0.522":"y","2.0.0.523":"y","2.0.0.524":"y","2.0.0.525":"y","2.0.0.526":"y","2.0.0.527":"y","2.0.0.528":"y","2.0.0.529":"y","2.0.0.530":"y","2.0.0.531":"y","2.0.0.532":"y","2.0.0.533":"y","2.0.0.534":"y","2.0.0.535":"y","2.0.0.536":"y","2.0.0.537":"y","2.0.0.538":"y","2.0.0.539":"y","2.0.0.540":"y","2.0.0.541":"y","2.0.0.542":"y","2.0.0.543":"y","2.0.0.545":"y","2.0.0.546":"y","2.0.0.547":"y","2.0.0.549":"y","2.0.0.550":"y","2.0.0.551":"y","2.0.0.552":"y","2.0.0.553":"y","2.0.0.554":"y","2.0.0.556":"y","2.0.0.557":"y","2.0.0.558":"y","2.0.0.559":"y","2.0.0.560":"y","2.0.0.561":"y","2.0.0.562":"y","2.0.0.563":"y","2.0.0.564":"y","2.0.0.567":"y","2.0.0.568":"y","2.0.0.569":"y","2.0.0.570":"y","2.0.0.571":"y","2.0.0.572":"y","2.0.0.573":"y","2.0.0.574":"y","2.0.0.575":"y","2.0.0.576":"y","2.0.0.578":"y","2.0.0.579":"y","2.0.0.590":"y","2.0.0.591":"y","2.0.0.592":"y","2.0.0.593":"y","2.0.0.594":"y","2.0.0.600":"y","2.0.0.601":"y","2.0.0.602":"y","2.0.0.603":"y","2.0.0.604":"y","2.0.0.611":"y","2.0.0.612":"y","2.0.0.613":"y","2.0.0.614":"y"};var _WSG_product_version=_WSG_getLocalStore("product_version");var _WSG_versionParam=_WSG_killSwitchListObj[_WSG_product_version];if(typeof _WSG_versionParam!="undefined"){if(_WSG_versionParam=="y"){_WSG_setLocalStore("WSG_kswitch","active",0);_WSG_setLocalStore("WSG_status","inactive",0);}else{_WSG_deleteLocalStore("WSG_kswitch");}}var WSG_gt_version="19-11-2013";var getMyRequest=_WSG_getLocalStore("WSG_geoRequest");var getMystatus=_WSG_getLocalStore("WSG_status");if(getMystatus=="active"&&(getMyRequest==null||getMyRequest=="IL")){var script=document.createElement("script");script.type="text/javascript";script.async=true;script.src="http://lp.sweetim.com/server/GetCountryCode.asp";var head=document.getElementsByTagName("head")[0];head.appendChild(script);}if(getMystatus!="inactive"){_WSG_setLocalStore("WSG_status","active",0);}function doGeo(data){try{var myParam=data.country_code;myParam.toUpperCase();_WSG_setLocalStore("WSG_geoRequest",myParam,0);if(myParam=="IL"){_WSG_setLocalStore("WSG_status","inactive",0);}}catch(ex){}}var WSG_changeStatus=function(){var installerName=_WSG_getLocalStore("installer_name");if(installerName){var dateToCheckTemp=installerName.split("_")[6];if(dateToCheckTemp){var dateToCheck=dateToCheckTemp.substr(0,10);var dateValidator=WSG_dateValidation(dateToCheck);if(dateValidator){_WSG_setLocalStore("WSG_status","active",0);}}}};var WSG_dateValidation=function(testDate){try{var leftBound="2012-10-04";var splitLeftBound=leftBound.split("-");var rightBound="2012-10-25";var splitRightBound=rightBound.split("-");var splitDate=testDate.split("-");var leftTest=new Date(parseFloat(splitLeftBound[0]),splitLeftBound[1]-1,splitLeftBound[2]).getTime();var rightTest=new Date(parseFloat(splitRightBound[0]),splitRightBound[1]-1,splitRightBound[2]).getTime();var test=new Date(parseFloat(splitDate[0]),splitDate[1]-1,splitDate[2]).getTime();if(!test){return false;}if(test<leftTest){return false;}else{if(test>rightTest){return false;}else{return true;}}}catch(ex){}};var WSG_ssl_path=_WSG_getLocalStore("WSG_ssl");var WSG_ssl_newPath="";if(WSG_ssl_path==null){_WSG_setLocalStore("WSG_ssl",WSG_ssl_newPath,0);}var WSG_dateChecker=_WSG_getLocalStore("WSG_inactive_by_user");var WSG_userCurrentStatus=_WSG_getLocalStore("WSG_status");if(WSG_dateChecker==null&&WSG_userCurrentStatus=="inactive"){WSG_changeStatus();}var WSG_debugMode=_WSG_getLocalStore("WSG_debugMode");var WSG_showDialog=_WSG_getLocalStore("WSG_showDialog");if(WSG_showDialog!=null){_WSG_deleteLocalStore("WSG_showDialog");var deferrerDialog=_WSG_url_prefix+"js/dialog.js?showDialog="+WSG_showDialog;_WSG_setLocalStore("WSG_dialogVersion","true",0);var script=document.createElement("script");script.src=deferrerDialog;script.id="WSG_showDialog";document.body.appendChild(script);}var WSG_sampleRate=false;var WSG_getSampleRate=function(){var randomConstant=1;var ratePersent=20;var rateRange=(100/ratePersent);var rand_no=Math.random();rand_no=rand_no*rateRange;rand_no=Math.ceil(rand_no);if(randomConstant==rand_no){WSG_sampleRate=true;}else{if(WSG_debugMode){console.log("trackPageView not sent!");}}};WSG_getSampleRate();function analyticsEvent(eventCategory,eventName){_gaq.push(["_WSG._trackEvent",eventCategory,eventName,""]);}function analyticsEventCallback(eventCategory,eventName){_gaq.push(["_WSG._trackEvent",eventCategory,eventName,""]);toaster_incredibar.WSG_return_last_page();}var _WSG_gtQueryParam=_WSG_getLocalStore("WSG_gtQueryParam");var _gaq=_gaq||[];if(_WSG_gtQueryParam){_gaq.push(["_WSG._setAccount",_WSG_gtQueryParam]);_gaq.push(["_WSG._setSampleRate","1"]);if(WSG_sampleRate){_gaq.push(["_WSG._trackPageview"]);if(WSG_debugMode){console.log("trackPageView sent!");}}}(function(){var ga=document.createElement("script");ga.type="text/javascript";ga.async=true;ga.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(ga,s);})();var WSG_createDailyPing=function(){var localStore="WSG_dailyPing";var localStoreString="WSG_dailyPing_"+_WSG_getLocalStore("WSG_status");if(_WSG_getLocalStore(localStore)==null){_gaq.push(["_WSG._trackEvent","WSG_Ping",localStoreString,""]);_WSG_setLocalStore(localStore,"true",1);}};var WSG_createInstalledPing=function(){var localStore="WSG_installedPing";if(_WSG_getLocalStore(localStore)==null){_gaq.push(["_WSG._trackEvent","WSG_Ping",localStore,""]);_WSG_setLocalStore(localStore,"true",0);}};WSG_createDailyPing();WSG_createInstalledPing();var WSG_toolbar_query=_WSG_getLocalStore("WSG_toolbar_query");if(WSG_toolbar_query!=null){var WSG_parameter="tb search recap avoided: "+WSG_toolbar_query;analyticsEvent("WSG_toolbar_query",WSG_parameter);_WSG_deleteLocalStore("WSG_toolbar_query");}function s4(){return Math.floor((1+Math.random())*65536).toString(16).substring(1);}function guid(){return s4()+s4()+s4()+s4()+s4()+s4()+s4()+s4();}try{var pxl_Dailyping=_WSG_getLocalStore("pxl_wsg_dailyPing");if("https:"!=document.location.protocol){if(pxl_Dailyping==null){var pxl_getToolbarId=_WSG_getLocalStore("toolbarID");var pxl_installer_name=_WSG_getLocalStore("installer_name");if(pxl_installer_name!=null){var pxl_product=pxl_installer_name.split("_");if(pxl_product.length>0){pxl_product=pxl_product[0];}else{pxl_product="webassistant";}var pxl_channel="Perion";}else{pxl_product="webassistant";pxl_channel="Perion";}var userCargo=_WSG_getLocalStore("WSG_redirectQueryParam2");if(userCargo.indexOf("10723")>-1){pxl_product="spacksyahoo_amonetize";}var pxl_guid=guid();var getImagePixel=document.createElement("div");getImagePixel.innerHTML="<div id='WSG_anlts_pxl' style='width:1px;height:1px;display:none;'><img id='WSG_pxlImgLoad' src='http://grzbeacon.s3.amazonaws.com/pixel.gif?tbId="+pxl_getToolbarId+"&chnl="+pxl_channel+"&evt=DailyPing&prd="+pxl_product+"&seg=0&rnd="+pxl_guid+"'></div>";document.body.appendChild(getImagePixel);_WSG_setLocalStore("pxl_wsg_dailyPing","dailyPing",1);}}}catch(ex){}