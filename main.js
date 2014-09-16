$(function() {

    $('#search').on('click', function() {
        var query = $('#query').val();

        /*if (query == "弱いひよこ") {
			$('#result').html('<img src="hiyoko_chibi.png">');
		} else if (query == "ひよこのボス") {
			$('#result').html('<img src="hiyoko_boss.png">');
		} else if (query == "いぬ") {
			$('#result').html('<img src="dog.png">');
		} else if (query == "ねこ") {
			$('#result').html('<img src="cat.png">');*/

        /* インデントが一つズレてるよ */

        var queryArray = ['弱いひよこ', 'ひよこのボス', 'いぬ', 'ねこ', '組長']; // セミコロンが抜けてるよ
        var resultArray = ['hiyoko_chibi', 'hiyoko_boss', 'dog', 'cat', 'boss']; // セミコロンが抜けてるよ

        for (var i = 0; i < queryArray.length; i++) {
            if (query == queryArray[i]) {
                $('#result').html('<img src="' + resultArray[i] + '.png">'); // ＋の前後にはスペースを開けよう, あとインデントがズレてるよ！
            }
        }
    });
});