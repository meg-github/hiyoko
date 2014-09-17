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

        var queryObj = {'弱いひよこ': 'hiyoko_chibi', 
        				'ひよこのボス': 'hiyoko_boss', 
        				'いぬ': 'dog',
        				'ねこ': 'cat',
        				'組長': 'boss'
        				}; // セミコロンが抜けてるよ

        for (var key in queryObj) {
        	var data = queryObj[key] 
            if (query == key) {
                $('#result').html('<img src="' + data + '.png">'); // ＋の前後にはスペースを開けよう, あとインデントがズレてるよ！
            }
        }
    });
});