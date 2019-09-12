var move = 1;
var play = true;

$('table tr td').click(function(){
	if($(this).text()=="" && play){
		// console.log($(this).parent())
		if( (move%2)== 1){
			$(this).append("x");
			$(this).css('color', '#61892f');
		} else{
			$(this).append('0');
			$(this).css('color', '#e85a4f');
		}
		move++;
		if (findwinner() != -1 && findwinner() != "") {
			if(findwinner() =="x") {
				$('body').append('<div class="winner"><span>winner</span>x</div>')
				$('body').append('<button onclick = "location.reload()">Play Again</button>');
				$('winner').css('background-color', '#61892f');
				$('button').css('color', '#61892f');

			} else {
				$('body').append('<div class="winner"><span>winner</span>o</div>')
				$('body').append('<button onclick = "location.reload()">Play Again</button>');
				$('winner').css('background-color', '#e85a4f');
				$('button').css('color', '#e85a4f');
				$('button').width('100;')
			}
			play = false;
		}
	}
})

function findwinner(){
	sp1 = $('table tr:nth-child(1) td:nth-child(1)').text();
	sp2 = $('table tr:nth-child(1) td:nth-child(2)').text();
	sp3 = $('table tr:nth-child(1) td:nth-child(3)').text();
	sp4 = $('table tr:nth-child(2) td:nth-child(1)').text();
	sp5 = $('table tr:nth-child(2) td:nth-child(2)').text();
	sp6 = $('table tr:nth-child(2) td:nth-child(3)').text();
	sp7 = $('table tr:nth-child(3) td:nth-child(1)').text();
	sp8 = $('table tr:nth-child(3) td:nth-child(2)').text();
	sp9 = $('table tr:nth-child(3) td:nth-child(3)').text();
	//check rows
	if((sp1 == sp2) && (sp2 == sp3)) {
		return sp3;
	} else if((sp4 == sp5) && (sp5 == sp6)) {
		return sp6;
	} else if((sp7 == sp8) && (sp8 == sp9)) {
		return sp9;
	// }
	//check columns
	else if ((sp1 == sp4) && (sp4 == sp7)) {
		return sp7;
	} else if ((sp2 == sp5) && (sp5 == sp8)) {
		return sp8;
	} else if ((sp3 == sp6) && (sp6 == sp9)) {
		return sp9;
	}
	// check diagonals
	else if ((sp1 == sp5) && (sp5 == sp9)) {
		return sp9;
	} else if ((sp3 == sp5) && (sp5 == sp7)) {
		return sp7;
	} else{
	//no winner
	return -1;
}
}