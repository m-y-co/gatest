(this.jQuery) && (function ($) {

	'use strict';
	var csvArray = [[]];

	// DOMContentLoaded
	$(function() {
		var isIE = checkIE();
		var winNum;
		checkFileAPI();
		$("#droppable").fileDrop({
			dragEnter: function(e) {},
			dragLeave: function(e) {},
			drop: function(files) {},
			dropEach: function(f, val) {
				var csvdata = val.toString();
				var tempArr = [];
				tempArr = csvdata.split("\n");
				$(".download").show();
				var csvtxt = getCSVarray(csvdata);
				setBlobUrl("download1", csvtxt, "list.csv");
			}
		});

		// ダウンロードファイルの作成
		function setBlobUrl(id, content, filename) {
			// 指定されたデータを保持するBlobを作成する。
			var blob = new Blob([ content ], { "type" : "application/x-msdownload" });
			// Aタグのhref属性にBlobオブジェクトを設定し、リンクを生成
			window.URL = window.URL || window.webkitURL;
			$("#" + id).attr("href", window.URL.createObjectURL(blob));
			$("#" + id).attr("download", filename);
		}


	//　動作環境のチェック=============================
		function checkFileAPI() {
			if (window.File && window.FileReader && window.FileList && window.Blob) {
			} else {
				alert('お使いのブラウザでは動作しません');
				$(".error").css("display","block");
			}
		}
		function checkIE(){
			var userAgent = window.navigator.userAgent.toLowerCase();
			if (userAgent.match(/(msie|MSIE)/) || userAgent.match(/(T|t)rident/)) {
				if (!window.navigator.msSaveBlob) {
					alert ("お使いのブラウザでは動作しません");
					$(".error").css("display","block");
				}
				return true;
			} else {
				return false;
			}
		}

	//　配列に指定の項目名が存在するかどうかのチェック=============================
		function getIndex(arr, val){
			for (var i=0; i<arr.length; i++){
				if (arr[i] == val){
					return i;
				} else {
				}
			}
			return -1;
		}

	//　ドロップしたCSVを作業用配列に格納=============================
		function getCSVarray(rawdata) {
			var recordArray = []; // 1行ずつ格納
			recordArray = rawdata.split("\n");
			var idArray = []; // タイトルidを格納
			var tagArray = []; // 各idのタグを繋げて格納
			// まずタイトルidだけidArrayに格納
			for(var i = 0; i<recordArray.length; i++){
				var tempArray = [];
				recordArray[i] = recordArray[i].replace(/^\s+|\s+$/g,'');
				tempArray = recordArray[i].split(",");
				if (tempArray[1] == ""){
					idArray.push(tempArray[0]);
				}
			}
//			console.log("idは合計" + idArray.length);
			// idごとに該当行を評価
			for(var j = 0; j<idArray.length; j++){
				var aryid = idArray[j] + ",";
				var arytxt = "";
				for(var k = 0; k<recordArray.length; k++){
					var include_id = recordArray[k].indexOf(idArray[j]);
					if (include_id != -1){
						var cuttxt = recordArray[k].replace(new RegExp(aryid,"g"),""); // 最初のid部分を削除
						if (cuttxt) {
							arytxt += cuttxt;
							arytxt += ",";
						}
					}
				}
				arytxt = arytxt.slice(0, -1);
				arytxt = idArray[j] + "," + arytxt;
				tagArray[j] = arytxt;
				console.log("tagArray[" + j + "] = " + tagArray[j]);
			}
			var output = "";
			for(var l = 0; l<tagArray.length; l++){
				output += tagArray[l];
				output += "\n";
			}
			return output;
		}
	});
})(this.jQuery);
