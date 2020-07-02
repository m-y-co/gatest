(this.jQuery) && (function ($) {

	'use strict';
	var csvArray = [[]];

	// DOMContentLoaded
	$(function() {
		
		$("#js_btn_getlink").click(function(){
			var test = [];
			test = getTextarea();
//			console.log(test);
				$("#js_result").show();
				var output = '<table class="winnersTable">'
				output += getWinTableData(test);
				output += '</table>';
//			console.log(output);
				$("#js_winnersTable").html(output);
		});
		//テキストエリアを取得して配列に格納
		function getTextarea(){
			var temp = $("#js_textarea").val();
			var arr = [];
			arr = temp.split("\n");
			for (var i=0; i<arr.length; i++){
				arr[i] = arr[i].replace(/\s+/g, "");
//				console.log(arr[i]);
			}
			return arr;
		}

	//　リンク書き出し======================
		function getWinTableData(cArray){
			var output = "";
			for(var i = 0; i<cArray.length; i++){
				output += '<tr id="js_winner' + i + '">';
				output += '<td class="td_address"><a href="https://www.google.co.jp/search?q=' + cArray[i] +'" target="_blank">' + cArray[i] + '</a></td>';
				output += '<td class="td_check"><input type="checkbox" class="i_address" value="OK">OK';
				output += '<input type="checkbox" class="i_address" value="NG">不備あり</td>';
				output += '</tr>';
			}
			return output;
		}

		
		
		function getIndex(arr, val){
//			console.log("getIndex start");
			for (var i=0; i<arr.length; i++){
//				console.log("arr[" + i + "] = " + arr[i]);
				if (arr[i] == val){
//					console.log(arr[i] + " === " + val);
					return i;
				} else {
//					console.log(arr[i] + " not " + val);
				}
			}
			return -1;
		}

	//　抽選（0:未当選 1:当選 2:不備 3:当選確定）================
		function lottery(cArray,winNum){
			var count = 0;
			for(var i = 0; i<cArray.length; i++){
				if (cArray[i][0] == 3) count++;
			}
			while(count < winNum){
				var rand = Math.floor(Math.random() * cArray.length);
				if (cArray[rand][0] == 0){
					cArray[rand][0] = 1;
					count++;
				}
			}
			return cArray;
		}

	//　当選者のデータ書き出し======================
//		function getWinTableData(cArray){
//			var output = "";
//			for(var i = 0; i<cArray.length; i++){
//				if (cArray[i][0] == 1){
//					var addressAll = cArray[i][2] + cArray[i][3] + cArray[i][4];
//					output += '<tr id="js_winner' + i + '">';
//					output += '<td class="td_id">' + cArray[i][1] + '</td>';
//					output += '<td class="td_address"><a href="https://www.google.co.jp/search?q=' + addressAll +'" target="_blank">' + addressAll + '</a></td>';
//					output += '<td class="td_check"><input type="checkbox" class="i_address" value="OK">OK';
//					output += '<input type="checkbox" class="i_address" value="NG">不備あり</td>';
//					output += '</tr>';
//				}
//			}
//			for(var i = 0; i<cArray.length; i++){
//				if (cArray[i][0] == 3){
//					var addressAll = cArray[i][2] + cArray[i][3] + cArray[i][4];
//					output += '<tr class="winConfirm" id="js_winner' + i + '">';
//					output += '<td class="td_id">' + cArray[i][1] + '</td>';
//					output += '<td class="td_address"><a href="https://www.google.co.jp/search?q=' + addressAll +'" target="_blank">' + addressAll + '</a></td>';
//					output += '<td class="td_check"><input type="checkbox" class="i_address" value="OK" checked>OK';
//					output += '<input type="checkbox" class="i_address" value="NG">不備あり</td>';
//					output += '</tr>';
//				}
//			}
//			return output;
//		}
		//　再抽選ボタン======================
		$('#js_btn_check').click(function () {
			var winNum = parseInt($('#js_winNum').val());
			if (!winNum){
				alert("当選人数を入力してください");
			} else {
				csvArray = updateArray(csvArray);
				if (getWinCount(csvArray) < winNum){
					csvArray = lottery(csvArray, winNum);
					var output = '<table class="winnersTable">'
					output += getWinTableData(csvArray);
					output += '</table>';
					$("#js_winnersTable").html(output);
				} else {
					// 当選者全員確定済… データのダウンロード
					$(".download").css("display","block");
					var optionText = $('#js_time').val() + getCPcategory();
					var expidText = createExpidData(csvArray, optionText);
					var expidText2 = createExpidData2(csvArray, "住所不明瞭　抽選対象外");
					var backupCSV = createBackupCSV(csvArray);
					setBlobUrl("download1", expidText, "2_expid.csv");
					setBlobUrl("download2", expidText2, "不備者リスト.csv");
					setBlobUrl("download3", backupCSV, "1_メンバー_再抽選用backup.csv");
				}
			}
		});
		// チェックボックスの状況を作業用Arrayに反映
		function updateArray(cArray){
			for(var i = 0; i<cArray.length; i++){
				var check = $("#js_winner" + i + " .i_address:checked").val();
				if(check == "OK"){
					cArray[i][0] = 3;
				} else if (check == "NG"){
					cArray[i][0] = 2;
				}
			}
			return cArray;
		}
		// 当選確定者のカウント
		function getWinCount(cArray){
			var count = 0;
			for(var i = 0; i<cArray.length; i++){
				if (cArray[i][0] == 3) count++;
			}
			return count;
		}
		// 当選者リスト（expid.txt）の作成
		function createExpidData(cArray, option){
			var output = ""
			var category = $('input[name=i_category]:checked').val();
			if (category == "open"){
				output += '"顧客ID","追加項目1"\n';
				for(var i = 0; i<cArray.length; i++){
					if (cArray[i][0] == 3){
						output += '"' + cArray[i][1] + '","' + option + '"\n';
					}
				}
			} else {
				output += '"顧客ID","追加項目1","追加項目2"\n';
				for(var i = 0; i<cArray.length; i++){
					if (cArray[i][0] == 3){
						output += '"' + cArray[i][1] + '","' + option + '","' + option + '"\n';
					}
				}
			}
			return output;
		}
		// 不備者リストの作成
		function createExpidData2(cArray, option){
			var output = ""
				output += '"顧客ID","追加項目1"\n';
				for(var i = 0; i<cArray.length; i++){
//						console.log("cArray[i][0] = " + cArray[i][0]);
					if (cArray[i][0] == 2){
						output += '"' + cArray[i][1] + '","' + option + '"\n';
					}
				}
			return output;
		}

		// 再抽選用CSVの作成
		function createBackupCSV(cArray){
			var output = 'チェック,顧客ID,都道府県,ご住所1,ご住所2（マンション名等）\n';
			for(var i = 0; i<cArray.length; i++){
				output += cArray[i][0] + ',' + cArray[i][1] + ',' + cArray[i][2] + ',' + cArray[i][3] + ',' + cArray[i][4] + '\n';
			}
			return output;
		}
		// ダウンロードファイルの作成
		function setBlobUrl(id, content, filename) {
			// 指定されたデータを保持するBlobを作成する。
			var blob = new Blob([ content ], { "type" : "application/x-msdownload" });
			// Aタグのhref属性にBlobオブジェクトを設定し、リンクを生成
			window.URL = window.URL || window.webkitURL;
			$("#" + id).attr("href", window.URL.createObjectURL(blob));
			$("#" + id).attr("download", filename);
		}
		// チェックボタンの挙動======================
		$('body').on('change', '.i_address', function(){
			if ($(this).is(':checked')){
				if($(this).val() == "OK"){
					$(this).parents('tr').addClass('winConfirm');
					$(this).siblings().prop('checked', false);
				} else {
					$(this).parents('tr').addClass('addressError');
					$(this).siblings().prop('checked', false);
				}
			}
		});
		// CP実施年月の取得
		function getCPtime(){
			var dateObj = new Date();
			var now_year = dateObj.getFullYear();
			var now_month = dateObj.getMonth();
			if (now_month == 0){
				now_year -= 1;
				now_month = "12";
			} else if (now_month<10) {
				now_month = '0' + now_month;
			} else {
				now_month = now_month + '';
			}
			return now_year + now_month;
		}
		// CP種類の取得
		function getCPcategory(){
			var category = $('input[name=i_category]:checked').val();
			if (category == 'soup'){
				return '_スープ今月のプレゼント';
			} else if (category == 'kitchen'){
				return '_キッチングッズCP';
			} else if (category == 'drink'){
				return '_ドリンク1ケースCP';
			} else {
				return '_' + $('#js_openCP').val();
			}
		}
	});
})(this.jQuery);
