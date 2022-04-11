"use strict";
document.write(
"<!--[if lte IE 9]>"
+ "<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.3/jquery.xdomainrequest.min.js'></script>"
+ "<script type='text/javascript'>alert('브라우저를 최신 버전으로 업그레이드하세요.'); window.open('http://outdatedbrowser.com/ko','_blank');</script>"
+ "<![endif]-->"
);

$(function(){
    /*---------------------------------------------------------------*/	
    //variable
    let video = document.getElementById("MyVideo");
    let path = (location.href.substr(location.href.lastIndexOf("/") + 1)).split(".")[0]; 	//path
    let split = (location.href.substr(location.href.lastIndexOf("/") + 1)).split("&idx")[1]; //split
    let detailPath = ((location.href.substr(location.href.lastIndexOf("=") + 1)).slice(0, 2) - 1 + 1) - 1; //detail Path

// header
// top 버튼
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    $("#top-btn").fadeIn(1500);
	return false;
  } else {
    $("#top-btn").fadeOut(1500);
	return false;
  }
}

$("#top-btn").on("click", function() {
	$("html,body").animate({scrollTop:0}, 1000, "swing");
	return false;
});
// body
switch(path) {
    case '' :

    // index
    case 'index' :
		for(var i = 0; i < 2; i++) {
			$(".img1 .slide_contents").append(
				'<div class="slide_img"><div style="background:url(' + url + '/main/' + (i + 1) + '.jpg) no-repeat 50% 50%"></div>'
			);

			$(".img2 .slide_contents").append(
				'<div class="slide_img"><div style="background:url(' + url + '/main/' + (i + 3) + '.jpg) no-repeat 50% 50%"></div>'
			);
 
			$(".img3 .slide_contents").append(
				'<div class="slide_img"><div style="background:url(' + url + '/main/' + (i + 5) + '.jpg) no-repeat 50% 50%"></div>'
			);

			$(".img4 .slide_contents").append(
				'<div class="slide_img"><div style="background:url(' + url + '/main/' + (i + 7) + '.jpg) no-repeat 50% 50%"></div>'
			);

			$(".slideImg .slide_btn").append(
				'<div class="slide_btn_bullet"></div>'
			);
		}

		// accommodation
		for(var i = 0; i < img[2].length; i++) {
			$("#index .idx_acc .swiper-image").append(
				'<div class="swiper-slide">' + 
					'<div style="background:url(' + url + '/room/' + (i + 1) + '/1.jpg) no-repeat 50% 50%"></div>' + 	
				'</div>'
			);
		} Swipers(".idx_acc", "auto", true, 100, false);


		// ability 
		$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ account +'/9',
		function(data){ 
			var specialList = new Array();
			for (var i = 0; i < data.result.length; i++) {
				for (var j = 0; j < data.result.length; j++) {
					if (Number(data.result[j]["ORDER_NUM"]) - 1 === i) specialList.push(data.result[j]);
				}
			}

			for(var i = 0; i < img[3].length; i++) {
				$("#index .idx_special .spec_swiper .swiper-image").append(
					'<div class="swiper-slide">' + 
						'<a href="special.html?num=' + numbering(i) + '">' +
							'<div style="background:url(' + url + '/room/' + (i + 1) + '/1.jpg) no-repeat 45% 50%"></div>' + 	
							'<h5 class="special_title"><strong>' + specialList[i]["TITLE_EN"]  +' </strong><span>' + specialList[i]["CONTENT"]  + '</span></h5>' +
						'</a>' +
					'</div>'
				);
			} Swipers2(".idx_special", "auto", true, 100, false);

		});
		break;

	case 'about' :
		for(var i = 0; i < img[2].length; i++) {
			$("#about .abt_visual .swiper-image").append(
				'<div class="swiper-slide">' + 
					'<div style="background:url(' + url + '/room/' + (i + 1) + '/1.jpg) no-repeat 50% 50%; background-size:cover;"></div>' + 	
				'</div>'
			);
		} Swipers(".abt_visual", "auto", true, 0, false);

		$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ account +'/4',
			function(data){
				const USER_TEL1 = data.result.USER_TEL1;				//전화번호 1
				const USER_TEL2 = data.result.USER_TEL2;				//전화번호 2
				const NEW_USER_ADDR = data.result.NEW_USER_ADDR;		//도로명주소
				const USER_ADDR = data.result.USER_ADDR;				//지번주소

				$(".abt_address").append(
					'<h3><strong>LOCATION</strong><span><b>Address.</b>' + NEW_USER_ADDR  + '</span><span><b>Tel.</b>' + USER_TEL1 + '</span></h3>'
				);
			});
		break;

	case 'rooms' :
		$("body").addClass("rooms_" + numbering(detailPath));

		$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ account +'/8',
		function(data){
			// 객실명 => 타입명으로 변경
            var arr1 = [];
			$.each(data.result,function(key,val){
				var sorts = val["SORT_NO"] - 1;
				arr1.push(data.result[sorts]["TYPE_NAME"]);
			});
			// 중복값체크
			var arr2 = arr1.reduce(function(a,b){
				if(a.indexOf(b) < 0) a.push(b);
				return a;
			},[]);
			// 일치하는 인덱스값 반환
			var arr3 = new Array();
			for(var n = 0; n < arr1.length; n++){
				for(var c = 0; c < arr2.length; c++){
					if(arr1[n] == arr2[c]) arr3.push(arr1.indexOf(arr2[c]));
				}
			}
			//중복값 체크
			var arr4 = arr3.reduce(function(a,b){
				if(a.indexOf(b) < 0) a.push(b);
				return a;
			},[]);

			var TYPE_NAME = data.result[arr4[detailPath]]["TYPE_NAME"];				//객실타입명(EN)

			var ROOM_TYPE = data.result[arr4[detailPath]]["ROOM_TYPE"];				//객실구조
			var ROOM_EXTN = data.result[arr4[detailPath]]["ROOM_EXTN"] ;			//객실크기
			var ADLT_BASE_PERS = data.result[arr4[detailPath]]["ADLT_BASE_PERS"];	//객실인원(기준)
			var ADLT_MAX_PERS = data.result[arr4[detailPath]]["ADLT_MAX_PERS"];		//객실인원(최대)
			var ETC_DETL = data.result[arr4[detailPath]]["ETC_DETL"];				//객실상세
			var INTERIOR = data.result[arr4[detailPath]]["INTERIOR"].split(',');	//객실비품

			$(".rooms_info").append(
				'<h3>' + data.result[arr4[detailPath]]["TYPE_NAME"] + '</h3>' +
				'<ul>' +
					'<li><span class="tl">Roomtype</span><span class="tx">'+ data.result[arr4[detailPath]]["TYPE_NAME"] +'</span></li>' +
					'<li><span class="tl">Criteria</span><span class="tx">기준 '+ data.result[arr4[detailPath]]["TYPE_NAME"] +'명 ~ 최대 '+ data.result[arr4[detailPath]]["TYPE_NAME"] +'명</span></li>' +
					'<li><span class="tl">Overstaffed</span><span class="tx">기준인원 초과시 추가요금 발생</span></li>' +
					'<li><span class="tl">Time</span><span class="tx checkInOut">체크인 15:00 / 체크아웃 11:00</span></li>' +
					'<li><span class="tl">Supplies</span><ul class="eq"></ul></li>' +
					// '<li class="etc"><span class="tl">특이사항</span><span class="tx">'+ ETC_DETL +'</span></li>' +
				'</ul>'	+
				'<a href="reserve.html?reserve=rv" class="rsv_btn">실시간 예약하기</a>'
			);

			
		});

		// commmit test 중
		for(var i = 0; i < img[2].length; i++) {
			$("#rooms .rooms_visual .swiper-image").append(
				'<div class="swiper-slide">' + 
					'<div style="background:url(' + url + '/room/' + (i + 1) + '/1.jpg) no-repeat 50% 50%; background-size:cover;"></div>' + 	
				'</div>'
			);
		} Swipers(".rooms_visual", "auto", true, 0, false);

		// rooms video img

		// rooms video img




		// accommodation menu
		for(var i = 0; i < img[2].length; i++) {
			$("#rooms .rooms_menu_swiper .swiper-image").append(
				'<div class="swiper-slide">' + 
					'<div style="background:url(' + url + '/room/' + (i + 1) + '/1.jpg) no-repeat 50% 50%"></div>' + 	
				'</div>'
			);
		} Swipers2(".rooms_menu_swiper", "auto", true, 100, false);

		
		break;


	case 'special' :
        $("body").addClass("special_" + numbering(detailPath));

		
		break;

	case 'notice':
		// notice snb button
		$(".contents .snb li a").on("click",function(){ 
			var nb = $(this).parent("li").index();
			$(".contents .snb > li").removeClass("active");
			$(".contents .snb > li").eq(nb).addClass("active");
		
			if(nb == 0){
				$("#Banner .ttls b").text("NOTICE");
				$("#Banner .ttls strong").text("NOTICE");

				$(".frame h3 strong").text("공지사항");
				$(".frame h3 span").text("공지사항과 다양한 소식을 확인해보세요.");
				$(".frame iframe").attr("src","/board/bbs/board.php?bo_table=notice");
			}else if(nb == 1){
				$("#Banner .ttls b").text("Q&A");
				$("#Banner .ttls strong").text("Q&A");
			
				$(".frame h3 strong").text("문의사항");
				$(".frame h3 span").text("해그라미 펜션&캠핑에 무엇이든 물어보세요.");
				$(".frame iframe").attr("src","/board/bbs/board.php?bo_table=qa");
			} return false;
		});
		break;
		
	case 'reserve' :
		// reserve button
		$(".contents .snb li a").on("click",function(){ 
			var nb = $(this).parent("li").index();
			$(".contents .snb > li").removeClass("active");
			$(".contents .snb > li").eq(nb).addClass("active");

			if(nb == 0){
				$("#Banner .ttls b").text("RESERVATION");
				$("#Banner .ttls strong").text("RESERVATION");
				$(".frame").hide(); $(".frame_01").show();
			}else if(nb == 1){
				$("#Banner .ttls b").text("GUIDE");
				$("#Banner .ttls strong").text("GUIDE");
				$(".frame").hide(); $(".frame_02").show();
			} return false;
		}); reserInfo(account);
		break;
    default : location.href = "index.html";
    break;
}

//footer
$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ account +'/4',	//User Info
	function(data){
		const USER_TEL1 = data.result.USER_TEL1;				//전화번호 1
		const USER_TEL2 = data.result.USER_TEL2;				//전화번호 2
		const NEW_USER_ADDR = data.result.NEW_USER_ADDR;		//도로명주소
		const USER_ADDR = data.result.USER_ADDR;				//지번주소
		const BUSI_NM = data.result.BUSI_NM;					//상호명
		const USER_ACCO = data.result.USER_ACCO;				//계좌번호
		const COMM_SALE_NO = data.result.COMM_SALE_NO;			//통신판매업번호
		const BUSI_NO = data.result.BUSI_NO;			//사업자번호
		const BUSI_PRE_NM = data.result.BUSI_PRE_NM;			// 대표자

		$("footer").append(
			'<div class="footerWrap">' +
				'<div class="ft_top">' +
					'<div class="ft_txt">HOHO YONGDAM</div>' +
					'<ul class="ft_menu">' +
						'<li><a href="about.html">HOHO YONGDAM</a></li>' +
						'<li><a href="rooms.html?num=01">ACCOMMODATION</a></li>' +
						'<li><a href="special.html?numb=01">ABILITY</a></li>' +
						'<li><a href="reserve.html?reserve=rv">RESERVATION</a></li>' +
					'</ul>' +
					'<div class="ft_sns">' +
						'<div class="sns_01"><a href="https://www.instagram.com/haegeurami_/" target="_blank"><img src="images/sns_01.png" alt="인스타그램" width="30" height="auto"></a></div>' +
						'<div class="sns_02"><a href="#"><img src="images/sns_02.png" alt="블로그" width="30" height="auto"></a></div>' +
						'<div class="sns_02"><a href="#"><img src="images/sns_03.png" alt="페이스북" width="30" height="auto"></a></div>' +
					'</div>' +
				'</div>' +
				'<div class="ft_bottom">' +
					'<div class="ft_logo"><a href="index.html"><img src="images/ft_logo.png" width="100%" height="auto"></a></div>' +
					'<div class="ft_info">' +
						'<ul class="ft_info_menu">' +
							'<li><b>상호명 : </b>&nbsp;' + BUSI_NM + '</li>' +
							'<li><b>Tel : </b>&nbsp;' + USER_TEL1 + '</li>' +
							'<li><b>사업자 등록번호 : </b>&nbsp;' + BUSI_NO + '</li>' +
						'</ul>' +
						'<ul class="ft_info_menu">' +
							'<li><b>대표자 : </b>&nbsp;' + BUSI_PRE_NM + '</li>' +
							'<li><b>Address : </b>&nbsp;' + USER_ADDR + '</li>' +
							'<li><b>통신판매업 신고번호 : </b>&nbsp;' + COMM_SALE_NO + '</li>' +
						'</ul>' +
					'</div>' +
				'</div>' +
				'<em class="copyright">홈페이지 제작 ㅣ GONYLAB</em>' +
			'</div>'
		);

		//sns - href
		$(".sns_01").attr("href",instagram); 
		$(".sns_02").attr("href",facebook); 
		$(".sns_03").attr("href",blog);
		

		if(instagram == "#"){$(".sns_01").on('click',function(){alert('준비중입니다.');return false;});}
		if(facebook == "#"){$(".sns_02").on('click',function(){alert('준비중입니다.');return false;});}
		if(blog == "#"){$(".sns_03").on('click',function(){alert('준비중입니다.');return false;});}
		
	});
});

//function - numbering
function numbering(n) { // 이미지 넘버링 10 보다 작을때
	var num = ''; var n = n + 1; var n = n.toString();
	if (n.length < 2){for (var i = 0; i < 2 - n.length; i++){num += '0';}}
	return num + n;
}

//function - swipers
function Swipers(value, view, center, Between, boolean){
	var swiper = new Swiper(value + ' .swiper', {
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',
		slidesPerView: view,
		centeredSlides: center,
		spaceBetween: Between,
		loop: boolean
	});
}

function Swipers2(value, view, center, Between, boolean){
	var swiper = new Swiper(value + ' .swiper2', {
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',
		slidesPerView: view,
		centeredSlides: center,
		spaceBetween: Between,
		loop: boolean
	});
}

//function - video
function videoControl(control){
	videoScale(control);
	$(window).on("resize",function(){ 
		videoScale(control); 
	});
	$(window).on("scroll",function(){
		var thisTop = $(this).scrollTop();
		var stopTop = $("section > div:first-child").height() - 100;
		var player = new Vimeo.Player(control);
		if(thisTop > stopTop) player.pause();
		else player.play();
	});
}

//function - video
function videoControl2(control){
	$(window).on("scroll",function(){
		var thisTop = $(this).scrollTop();
		var stopTop = $("#index .vid").offset().top;
		var player = new Vimeo.Player(control);
		if(thisTop > stopTop) player.play();
		else player.pause();
	});
}


//function - videocontrol
function videoScale(control){
	if($(window).width() < 1000){
		control.style.width = (Math.round($(window).height() / 9 * 16) + 30) + "px";
		control.style.height = (Math.round($(window).width() / 16 * 9) + 30) + "px";	
	}else{
		control.style.width = Math.round($(window).height() / 9 * 16) + "px";
		control.style.height = Math.round($(window).width() / 16 * 9) + "px";
	}
}	