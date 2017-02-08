//-----------------------------------
// Related Links
//-----------------------------------
$(function(){
	$('#recipe-list').show();
	$('#catelemon').show();

	var url = document.URL.split('/');

	var $cat01 = url[4]; //大カテゴリ
	var $cat02 = url[5]; //中カテゴリ
	var $ps_code = url[6].replace(/.html.*/ig, ''); //商品コード
	var sp = '';

	if (url[3] === 'sp') {
		var $cat01 = url[5]; //大カテゴリ
		var $cat02 = url[6]; //中カテゴリ
		var $ps_code = url[7].replace(/.html.*/ig, ''); //商品コード
		var sp = '/sp';
	}
	var result = '/recipes/result.html?back_url='+ sp +'%2Frecipes%2Findex.html&product=';

	if (url[3] === 'sp') {
		var result = sp+result;
	}

	var $use = $('#recipe-list a');

	// レモンのレシピ一覧
	if ($cat01 === 'lemon' && $cat02 === 'pokkalemon') {
		$('#catelemon a').attr('href', result+'1101');
	} else {
		$('#catelemon').remove();
	}

	// この商品を使ったレシピ一覧

	if ($cat01 === 'soup' && $cat02 === 'jikkuri') {
		$use.attr('href', result+'1104');
//	} else if ($cat01 === 'soup' && $cat02 === 'gohan') {
//		$use.attr('href', result+'1113');
//	} else if ($cat01 === 'soup' && $cat02 === 'kantanbimi') {
//		$use.attr('href', result+'1111');
//	} else if ($cat01 === 'otherfoods' && $cat02 === 'kantanbimi') {
//		$use.attr('href', result+'1111');
//	} else if ($cat01 === 'otherfoods' && $cat02 === 'dessertbase') {
//		$use.attr('href', result+'1112');
	} else if ($cat01 === 'lemon' && $cat02 === 'other' && $ps_code === 'HJ77') {
		$use.attr('href', result+'1120');
	} else if ($cat01 === 'lemon' && $cat02 === 'other' && $ps_code === 'HL52') {
		$use.attr('href', result+'1118');
	} else if ($cat02 === 'seasoning' && $ps_code === 'GU72') {
		$use.attr('href', result+'1109');
	} else if ($cat02 === 'lemon100' && $ps_code === 'GD80') {
		$use.attr('href', result+'1108');
	} else if ($cat01 === 'mixerdrink' && $cat02 === 'plus') {
		$use.attr('href', result+'1103');
	} else if ($cat01 === 'prune') {
		$use.attr('href', result+'1105');
	} else if ($cat02 === 'dessertbase' && $ps_code === 'GU45') {
		$use.attr('href', result+'1115');
	} else if ($cat02 === 'dessertbase' && $ps_code === 'GU46') {
		$use.attr('href', result+'1115');
	} else if ($cat02 === 'dessertbase' && $ps_code === 'GU68') {
		$use.attr('href', result+'1116');
	} else if ($cat02 === 'pokkalemon' && $ps_code === 'HC24') {
		$use.attr('href', result+'1117');
	} else if ($cat02 === 'other' && $ps_code === 'HL52') {
		$use.attr('href', result+'1118');
	} else if ($cat01 === 'soup' && $cat02 === 'sozaiya') {
		$use.attr('href', result+'1119');
	} else if ($cat01 === 'lemon' && $cat02 === 'other' && $ps_code === 'HF59') {
		$use.attr('href', result+'1123');
	} else if ($cat01 === 'water' && $cat02 === 'tonicwater') {
		$use.attr('href', result+'1121');
	}else if ($cat01 === 'soymilk' && $cat02 === 'soyafarm_yogurt' && $ps_code === 'HJ96') {
		$use.attr('href', result+'1124');
	}else if ($cat01 === 'ribbon' && $cat02 === 'fruit' && $ps_code === 'GL30') {
		$use.attr('href', result+'1114');
	}else if ($cat01 === 'ribbon' && $cat02 === 'fruit' && $ps_code === 'GV13') {
		$use.attr('href', result+'1114');
	}else if ($cat01 === 'ribbon' && $cat02 === 'soda' && $ps_code === 'HE61') {
		$use.attr('href', result+'1114');
	}else if ($cat01 === 'ribbon' && $cat02 === 'soda' && $ps_code === 'HE62') {
		$use.attr('href', result+'1114');
	}else if ($cat01 === 'fruit' && $cat02 === 'sambazon' && $ps_code === 'HJ44') {
		$use.attr('href', result+'1122');
	}else if ($cat01 === 'mixerdrink' && $cat02 === 'peel' && $ps_code === 'HQ12') {
		$use.attr('href', result+'1125');
	}else if ($cat01 === 'mixerdrink' && $cat02 === 'peel' && $ps_code === 'HQ13') {
		$use.attr('href', result+'1125');
	}else {
		$use.parent().remove();
	}

});
//-----------------------------------