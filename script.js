var alphavite = {
	"А":"4",
	"Б":"6",
	"В":"8",
	"Г":"r",
	"Д":"D",
	"Е":"€",
	"Ё":"E",
	"З":"3",
	"Ж":">|<",
	"И":"N",
	"K":"|<",
	"Л":"/\\",
	"С":"(",
	"P":"|o",
	"У":"Y",
}
function dermoClear () {
	document.getElementById('govno').innerHTML = ""
};

function pedik () {
	document.write('<h1 style="font-size:300px;color:red">фу педик</h1>')
};

	function testResults (form) {
    var TestVar = form.inputbox.value.toUpperCase() ;

  for (var i = 0; i < TestVar.length; i++) {
    if (alphavite[TestVar[i]]) {
      TestVar = TestVar.replace(TestVar[i], alphavite[TestVar[i]]);
    }
  }





    document.getElementById('govno').innerHTML = TestVar + "<br>"+ document.getElementById('govno').innerHTML;
    console.log(TestVar);
}