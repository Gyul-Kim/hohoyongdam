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
$("header .header_sub div").hover(function(){
	var ght = $(".header_sub div ul li").height() + 1;
	$(this).addClass("active");
	$(this).find("ul li").each(function(e){
		$(this).parent("ul").css({
			"transition":" 0.3s ease-in-out",
			"height":ght * (e + 1),
			"opacity":"1","z-index":"1",
			"transition":"0.5s"
		});	
	});
},function(){
	$(this).removeClass("active");
	$("header .header_sub ul").css({
		"height":0,
		"opacity":"0",
		"z-index":"0",
		"transition":"0.5s"
	});
});



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
			// $(".img1 .slide_contents").append(
			// 	'<div class="slide_img" style="background:url(' + url + '/main/' + (i + 1) + '.jpg) no-repeat 50% 50%"></div>'
			// );

			// $(".img2 .slide_contents").append(
			// 	'<div class="slide_img" style="background:url(' + url + '/main/' + (i + 3) + '.jpg) no-repeat 50% 50%"></div>'
			// );
 
			// $(".img3 .slide_contents").append(
			// 	'<div class="slide_img" style="background:url(' + url + '/main/' + (i + 5) + '.jpg) no-repeat 50% 50%"></div>'
			// );

			// $(".img4 .slide_contents").append(
			// 	'<div class="slide_img" style="background:url(' + url + '/main/' + (i + 7) + '.jpg) no-repeat 50% 50%"></div>'
			// );

			// $(".slideImg .slide_btn").append(
			// 	'<div class="slide_btn_bullet"><div class="slide_btn_bullet2"></div></div>'
			// );
			$("#index .idx_main").append(
				'<div class="idx_hero_img">'
					`<div class="Swiper special${i + 1} lt" id="special0${i + 1}">` +
						'<div class="swiper-view">' +
							'<div class="swiper-container swiper">' +
								'<div class="swiper-wrapper swiper-image"></div>' +
								'<div class="swiper-button-btns">' +
									'<div class="swiper-button-prev swiper-btn"><i class="xi-angle-left"></i></div>' +
									'<div class="swiper-button-line"><i>｜</i></div>' +
									'<div class="swiper-button-next swiper-btn"><i class="xi-angle-right"></i></div>' +
									'<div class="swiper-pagination second"></div>' +
								'</div>' +
							'</div>' +
							`<div class="txt"><span>${specialObj[i]["TITLE_EN"]}</span><strong>${specialObj[i]["TITLE_KR"]}</strong><p>${specialObj[i]["CONTENT"]}</p></div>`+
						'</div>' +
					'</div>' +
				'</div>'
			);
			

			for(let j = 0; j < img[3][i]; j++) {
				$("#special .Swiper").eq(i).find(".swiper-image").append(
					'<div class="swiper-slide">' +
						`<div style="background-image:url(${url}/room/${i+1}/${j+1}.jpg)"></div>` +
					'</div>'
				);
			} Swipers(`#special .special${i + 1}`, "auto", true, 0, true);
					
		}

		$(function() {
			var imgList = $('.idx_main .idx_hero_img .idx_img_group .img1 .slide_img');		
			var itemList = $('.idx_main .idx_hero_img .idx_img_group .img1 .slide_btn .slide_btn_bullet');
			var next = 1;
			$(".img1 .slide_btn").find('.slide_btn_bullet').css('width', '0',);
			$(".img1 .slide_btn").eq(0).find('.slide_btn_bullet2').css('width', '20px');
			setInterval(imageChange, 1000);	
		
			function imageChange() {
				$(imgList).css({'transform':'scaleX(0)','transform-origin':'initial'});
				$(imgList.get(next)).css({'transform':'scaleX(1)', 'transform-origin':'left 50%'});
						
				$(itemList).find('.slide_btn_bullet2').css('width', '0');
				$(itemList.get(next)).find('.slide_btn_bullet2').css('width', '20px');
		
				next++;
				if(next == 2) {
					next = 0;
				}
			}
		});

		// $(function() {
		// 	var imgList = $('.idx_main .idx_hero_img .idx_img_group .img2 .slide_img');		
		// 	var itemList = $('.idx_main .idx_hero_img .idx_img_group .img2 .slide_btn .slide_btn_bullet');
		// 	var next = 1;
		// 	$(".img1 .slide_btn").find('.slide_btn_bullet').css('width', '0',);
		// 	$(".img1 .slide_btn").eq(0).find('.slide_btn_bullet2').css('width', '20px');
		// 	setInterval(imageChange, 1000);	
		
		// 	function imageChange() {
		// 		$(imgList).css({'transform':'scaleX(0)','transition-delay':'0.5s','opacity':'0'});
		// 		$(imgList.get(next)).css({'transform':'scaleY(1)','transition-delay':'0.5s','opacity':'1'});
						
		// 		$(itemList).find('.slide_btn_bullet2').css('width', '0');
		// 		$(itemList.get(next)).find('.slide_btn_bullet2').css('width', '20px');
		
		// 		next++;
		// 		if(next == 2) {
		// 			next = 0;
		// 		}
		// 	}
		// });

		// $(function() {
		// 	var imgList = $('.idx_main .idx_hero_img .idx_img_group .img3 .slide_img');		
		// 	var itemList = $('.idx_main .idx_hero_img .idx_img_group .img3 .slide_btn .slide_btn_bullet');
		// 	var next = 1;
		// 	$(".img1 .slide_btn").find('.slide_btn_bullet').css('width', '0',);
		// 	$(".img1 .slide_btn").eq(0).find('.slide_btn_bullet2').css('width', '20px');
		// 	setInterval(imageChange, 1000);	
		
		// 	function imageChange() {
		// 		$(imgList).css({'transform':'scaleX(0)','transition':'0.5s','opacity':'0'});
		// 		$(imgList.get(next)).css({'transform':'scaleY(1)','transition':'0.5s','opacity':'1'});
						
		// 		$(itemList).find('.slide_btn_bullet2').css('width', '0');
		// 		$(itemList.get(next)).find('.slide_btn_bullet2').css('width', '20px');
		
		// 		next++;
		// 		if(next == 2) {
		// 			next = 0;
		// 		}
		// 	}
		// });

		// $(function() {
		// 	var imgList = $('.idx_main .idx_hero_img .idx_img_group .img4 .slide_img');		
		// 	var itemList = $('.idx_main .idx_hero_img .idx_img_group .img4 .slide_btn .slide_btn_bullet');
		// 	var next = 1;
		// 	$(".img1 .slide_btn").find('.slide_btn_bullet').css('width', '0',);
		// 	$(".img1 .slide_btn").eq(0).find('.slide_btn_bullet2').css('width', '20px');
		// 	setInterval(imageChange, 1000);	
		
		// 	function imageChange() {
		// 		$(imgList).css({'transform':'scaleX(0)','transition':'0.5s','opacity':'0'});
		// 		$(imgList.get(next)).css({'transform':'scaleY(1)','transition':'0.5s','opacity':'1'});
						
		// 		$(itemList).find('.slide_btn_bullet2').css('width', '0');
		// 		$(itemList.get(next)).find('.slide_btn_bullet2').css('width', '20px');
		
		// 		next++;
		// 		if(next == 2) {
		// 			next = 0;
		// 		}
		// 	}
		// });

		// accommodation
		$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ account +'/8', 
			function(data){
				for(var i = 0; i < data.result.length; i++) {
					$("#index .idx_acc .swiper-image").append(
						'<div class="swiper-slide">' + 
							'<div style="background:url(' + url + '/room/' + (i + 1) + '/1.jpg) no-repeat 50% 50%; background-size:cover;"></div>' + 	
						'</div>'
					);

					$(".idx_rooms_img .title .txt").append(
						'<div class="intro' + (i + 1) +'">' +
						'<p>' + rooms_txt[i][0].replace(/\n/g, "<br />") + '</p>' +
						'<a href="rooms.html?num=' + (i + 1) +'">Detail View</a></div>'
					);

					$("#index .idx_rooms_preview .swiper-image").append(
						'<div class="swiper-slide">' + 
							'<div style="background:url(' + url + '/room/' + (i + 1) + '/2.jpg) no-repeat 50% 50%; background-size:cover;"></div>' + 	
						'</div>'
					);
				} Swipers(".idx_rooms", "auto", true, 100, false);
		});

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
						'<a href="special.html">' +
							'<div style="background:url(' + url + '/room/' + (i + 1) + '/1.jpg) no-repeat 50% 50%; background-size:cover;"></div>' + 	
							'<h5 class="special_title"><strong>' + specialList[i]["TITLE_EN"]  +' </strong><span>' + specialList[i]["CONTENT"]  + '</span></h5>' +
						'</a>' +
					'</div>'
				);
			} Swipers2(".idx_special", "auto", false, 100, false);
		});
		break;

	case 'about' :
		videoControl(video);
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
		videoControl(video);
		$("body").addClass("rooms_" + numbering(detailPath));

		$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ account +'/8',
		function(data){
			// 객실명 => 타입명으로 변경
            var arr1 = [];
			$.each(data.result,function(key,val){
				var sorts = val["SORT_NO"] - 1;
				arr1.push(data.result[sorts]["TYPE_NM"]);
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

			$(".rooms_visual .rooms_visual_title").append('<h3>' + data.result[arr4[detailPath]]["TYPE_NAME"] + '</h3>');

			$(".rooms_info").append(
				'<h3>' + data.result[arr4[detailPath]]["TYPE_NM"] + '</h3>' +
				'<ul>' +
					'<h3>Information</h3>' +
					'<li><span class="tl">ㆍ객실타입</span><span class="tx">'+ data.result[arr4[detailPath]]["TYPE_NAME"] +'</span></li>' +
					'<li><span class="tl">ㆍ객실구조</span><span class="tx">'+ data.result[arr4[detailPath]]["ROOM_TYPE"] +'</span></li>' +
					'<li><span class="tl">ㆍ인원</span><span class="tx">기준 '+ data.result[arr4[detailPath]]["ADLT_BASE_PERS"] +'명 ~ 최대 '+ data.result[arr4[detailPath]]["ADLT_MAX_PERS"] +'명</span></li>' +
					'<li><span class="tl">ㆍ초과금액</span><span class="tx">기준인원 초과시 추가요금 발생</span></li>' +
					'<li><span class="tl">ㆍ입실/퇴실</span><span class="tx checkInOut">체크인 15:00 / 체크아웃 11:00</span></li>' +
					
					// '<li class="etc"><span class="tl">특이사항</span><span class="tx">'+ ETC_DETL +'</span></li>' +
				'</ul>' + 
				'<ul><h3>Amenity</h3><li>' +
					'<ul class="eq">' +
					'<li>ㆍFUll HD TV</li>' +
					'<li>ㆍ카누 커피</li>' +
					'<li>ㆍ커피포트</li>' +
					'<li>ㆍ와인잔</li>' +
				'</ul></li></ul>' +
				'<ul>' +
					'<h3>확인사항</h3>' +
					'<li>ㆍ모든 객실은 금연이며 화재의 위험이 있는 양초류의 사용은 불가합니다.</li>' +
					'<li>ㆍ객실 구조 및 인테리어는 객실 위치에 따라 이미지와 다를 수 있습니다.</li>' +
					'<li>ㆍ풀빌라내 반려동물 동반 입장은 불가합니다.</li>' +
					'<li>ㆍ모든 요금에 세금 10% 및 봉사료 10% (합계 20%)가 부과됩니다</li>' +
				'</ul>' 
				
			);

			// equipment
			// for(var e = 0; e < INTERIOR.length; e++) $(".eq").append('<li>' + INTERIOR[e] + ',</li>');	
			// var last = $(".eq li").eq(INTERIOR.length - 1).text().replace(/,/g, '');
			// $(".eq li").eq(INTERIOR.length - 1).text(last);
		});

		for(var i = 0; i < img[2].length; i++) {
			$("#rooms .rooms_visual .swiper-image").append(
				'<div class="swiper-slide">' + 
					'<div style="background:url(' + url + '/room/' + (i + 1) + '/1.jpg) no-repeat 50% 50%; background-size:cover;"></div>' + 	
				'</div>'
			);
		} Swipers(".rooms_visual", "auto", true, 0, false);

		// accommodation menu
		$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ account +'/8', 
			function(data){
				for(var i = 0; i < data.result.length; i++) {
					$("#rooms .rooms_menu_swiper .swiper-image").append(
						'<div class="swiper-slide">' + 
							'<div style="background:url(' + url + '/room/' + (i + 1) + '/1.jpg) no-repeat 50% 50%; background-size:cover;"></div>' + 	
						'</div>'
					);

					// $(".idx_rooms_img .title").append(
					// 	'<p><span>' + data.result[i]["ROOM_TYPE"]  + '</span></p>' +
					// 	'<a href="rooms.html?num=' + (i + 1) +'">Detail View</a>'
					// );

					$("#rooms .rooms_menu_preview .swiper-image").append(
						'<div class="swiper-slide">' + 
							'<div style="background:url(' + url + '/room/' + (i + 1) + '/2.jpg) no-repeat 50% 50%; background-size:cover;"></div>' + 	
						'</div>'
					);
				} Swipers3(".rooms_menu_img", "auto", true, 100, false);
			});

		break;


	case 'special' :
		videoControl(video);
		$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/'+ account +'/9', 
		function(data){
			const specialObj = new Array();
			for (let i = 0; i < data.result.length; i++) {
				for (var j = 0; j < data.result.length; j++) {
					if (Number(data.result[j]["ORDER_NUM"]) - 1 === i) {
						specialObj.push(data.result[j]);
					}
				}
			}
				
			for(let i = 0; i < specialObj.length; i++) {
				if(i%2 == 0) {
					$("#special .contents").append(
						`<div class="Swiper special${i + 1} lt" id="special0${i + 1}">` +
							'<div class="swiper-view">' +
								'<div class="swiper-container swiper">' +
									'<div class="swiper-wrapper swiper-image"></div>' +
									'<div class="swiper-button-btns">' +
										'<div class="swiper-button-prev swiper-btn"><i class="xi-angle-left"></i></div>' +
										'<div class="swiper-button-line"><i>｜</i></div>' +
										'<div class="swiper-button-next swiper-btn"><i class="xi-angle-right"></i></div>' +
										'<div class="swiper-pagination second"></div>' +
									'</div>' +
								'</div>' +
								`<div class="txt"><span>${specialObj[i]["TITLE_EN"]}</span><strong>${specialObj[i]["TITLE_KR"]}</strong><p>${specialObj[i]["CONTENT"]}</p></div>`+
							'</div>' +
						'</div>'
					);
				} else {
					$("#special .contents").append(
						`<div class="Swiper special${i + 1} rt" id="special0${i + 1}">` +
							'<div class="swiper-view">' +
								'<div class="swiper-container swiper">' +
									'<div class="swiper-wrapper swiper-image"></div>' +
									'<div class="swiper-button-btns">' +
										'<div class="swiper-button-prev swiper-btn"><i class="xi-angle-left"></i></div>' +
										'<div class="swiper-button-line"><i>｜</i></div>' +
										'<div class="swiper-button-next swiper-btn"><i class="xi-angle-right"></i></div>' +
										'<div class="swiper-pagination second"></div>' +
									'</div>' +
								'</div>' +
								`<div class="txt"><span>${specialObj[i]["TITLE_EN"]}</span><strong>${specialObj[i]["TITLE_KR"]}</strong><p>${specialObj[i]["CONTENT"]}</p></div>`+
							'</div>' +
						'</div>'
					);
				}
				for(let j = 0; j < img[3][i]; j++) {
					$("#special .Swiper").eq(i).find(".swiper-image").append(
						'<div class="swiper-slide">' +
							`<div style="background-image:url(${url}/room/${i+1}/${j+1}.jpg)"></div>` +
						'</div>'
					);
				} Swipers(`#special .special${i + 1}`, "auto", true, 0, true);
			}

			const currentUrl2 = new URL(window.location.href);
				if( currentUrl2.hash.length ) {
				$('body, html').animate({
				scrollTop:$(currentUrl2.hash).offset().top
				},300);
			}
		});			
		break;

	case 'community':
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
				$(".frame h3 span").text("호호용담에 무엇이든 물어보세요.");
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
				'<div class="ft_top">' +
					'<div class="footerWrap">' +
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
				'</div>' +
				'<div class="ft_bottom">' +
					'<div class="footerWrap">' +
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
// function Swipers(value, view, center, Between, boolean){
// 	var swiper = new Swiper(value + ' .swiper', {
// 		paginationClickable: true,
// 		nextButton: '.swiper-button-next',
// 		prevButton: '.swiper-button-prev',
// 		pagination: '.swiper-pagination',
// 		slidesPerView: view,
// 		centeredSlides: center,
// 		spaceBetween: Between,
// 		loop: boolean
// 	});
// }

//function - swipers
function Swipers3(value, view, center, Between, boolean){
	var swiper = new Swiper(value + ' .swiper3', {
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
		slidesPerView: 3.5,
		centeredSlides: center,
		spaceBetween: Between,
		loop: boolean
	});
}

function Swipers(value, view, center, Between, boolean){
	let swiper = new Swiper(value + ' .swiper', {
		paginationClickable: true,
		nextButton: value + ' .swiper-button-next',
		prevButton: value + ' .swiper-button-prev',
		pagination: value + ' .swiper-pagination',
		slidesPerView: view,
		centeredSlides: center,
		spaceBetween: Between,
		loop: boolean,
		onSlideChangeStart: function (swiper) {
			// let curr = swiper.activeIndex + 1;
			let curr = swiper.activeIndex + 1;
			
			$('#index .idx_rooms .title .txt > div').css({'opacity': '0', 'visibility': 'hidden'});
			$('#index .idx_rooms .title .txt > div:nth-child(' + curr + ')').css({'opacity': '1', 'visibility': 'visible'});

			// $('#index .specials .text>div').css({'opacity': '0', 'visibility': 'hidden', 'transform': 'translateY(0)'});
			// $('#index .specials .text>div:nth-child(' + curr + ')').css({'opacity': '1', 'visibility': 'visible', 'transform': 'translateY(-10px)'});

		},
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