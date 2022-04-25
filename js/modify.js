//오른쪽 클릭 방지
$(document).bind("contextmenu",function(e){return false;});
$(document).bind("ondragstart",function(e){return false;});
$(document).bind("onselectstart",function(e){return false;}); 

const isMobile = () => { 
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
  };
  

/* 실시간예약 - 계정정보 */
let account = "hohoyongdam";

const url =  isMobile() && window.innerWidth <=768 ? 'http://gonylab8.speedgabia.com/hohoyongdam/m/' : 'http://gonylab8.speedgabia.com/hohoyongdam/';


let img = [
	//index
	[16],
	//exterior 
	[3],
	//room
	[12, 13, 13, 12, 13, 12],
	//special
	[6,5,5,3],

]

let rooms_txt = [
	['가장 큰 객실인 고무나무는 거실과 풀이 완벽하게 분리되어 있으며\n' +
	'두 곳 모두 한 쪽 면을 가득 채운 통창을 통해 영흥의 바다를 마음껏\n' +
	'조망할 수 있습니다.\n\n' +
	'독립된 풀장은 3m x 9m의 대형 풀과 충분한 휴식이 가능한\n' +
	'넓은 풀사이드 공간이 준비되어 있습니다.'],

	['가장 큰 객실인 몬스테라는 거실과 풀이 완벽하게 분리되어 있으며\n' +
	'두 곳 모두 한 쪽 면을 가득 채운 통창을 통해 영흥의 바다를 마음껏\n' +
	'조망할 수 있습니다.\n\n' +
	'독립된 풀장은 3m x 9m의 대형 풀과 충분한 휴식이 가능한\n' +
	'넓은 풀사이드 공간이 준비되어 있습니다.'],

	['가장 큰 객실인 잔디정원은 거실과 풀이 완벽하게 분리되어 있으며\n' +
	'두 곳 모두 한 쪽 면을 가득 채운 통창을 통해 영흥의 바다를 마음껏\n' +
	'조망할 수 있습니다.\n\n' +
	'독립된 풀장은 3m x 9m의 대형 풀과 충분한 휴식이 가능한\n' +
	'넓은 풀사이드 공간이 준비되어 있습니다.'],

	['가장 큰 객실인 아레카는 거실과 풀이 완벽하게 분리되어 있으며\n' +
	'두 곳 모두 한 쪽 면을 가득 채운 통창을 통해 영흥의 바다를 마음껏\n' +
	'조망할 수 있습니다.\n\n' +
	'독립된 풀장은 3m x 9m의 대형 풀과 충분한 휴식이 가능한\n' +
	'넓은 풀사이드 공간이 준비되어 있습니다.\n'],
	
	['가장 큰 객실인 잔디정원은 거실과 풀이 완벽하게 분리되어 있으며\n' +
	'두 곳 모두 한 쪽 면을 가득 채운 통창을 통해 영흥의 바다를 마음껏\n' +
	'조망할 수 있습니다.\n\n' +
	'독립된 풀장은 3m x 9m의 대형 풀과 충분한 휴식이 가능한\n' +
	'넓은 풀사이드 공간이 준비되어 있습니다.'],

	['가장 큰 객실인 루프탑은 거실과 풀이 완벽하게 분리되어 있으며\n' +
	'두 곳 모두 한 쪽 면을 가득 채운 통창을 통해 영흥의 바다를 마음껏\n' +
	'조망할 수 있습니다.\n\n' +
	'독립된 풀장은 3m x 9m의 대형 풀과 충분한 휴식이 가능한\n' +
	'넓은 풀사이드 공간이 준비되어 있습니다.'],

]

/* ------------------------------------------------------------------------------- */
/* Moblie */
let	instagram =	"http://www.instagram.com/halfmoonbay.official";			
let	facebook =	"#";
let	blog =		"#";																


054-734-5115