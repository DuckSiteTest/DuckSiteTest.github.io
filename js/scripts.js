 
window.addEventListener('load', function () {



	function makeNewPosition(){
		
		// Get viewport dimensions (remove the dimension of the div)
		var h = $(window).height() - 100;
		var w = $(window).width() - 50;
		
		var nh = Math.floor(Math.random() * h);
		var nw = Math.floor(Math.random() * w);
		
		return [nh,nw];    
		
	}
	function animateDiv(){

		// if($("#duckHunt2").hasClass("game-won")){

		// 	var newq = makeNewPosition();
		// 	$('.touchMeNot').animate({ top: newq[0], left: newq[1] }, function(){
		// 		setTimeout(()=>{
		// 			animateDiv();    
		// 		}, 750)
				    
		// 	});
			
		// }


		// if($("#duckHunt").hasClass("game-won")){

		// 	var newq = makeNewPosition();
		// 	$('.touchMeNot').animate({ top: newq[0], left: newq[1] }, function(){
		// 		setTimeout(()=>{
		// 			animateDiv();    
		// 		}, 750)
				    
		// 	});
			
		// }

		if($("#duckHunt").hasClass("game-start")){

			var newq = makeNewPosition();
			$('.touchMeNot').animate({ top: newq[0], left: newq[1] }, function(){
				setTimeout(()=>{
					animateDiv();    
				}, 500)
				    
			});
			
		}

		if($("#duckHunt2").hasClass("game-start")){

			var newq = makeNewPosition();
			$('.touchMeNot').animate({ top: newq[0], left: newq[1] }, function(){
				setTimeout(()=>{
					animateDiv();    
				}, 750)
				    
			});
			
		}
	
	};


	$('#duckHunt').on("click", function(){

		
		//game hasn't started
		if ($("#duckHunt").hasClass("game-start")) {
			//code here that each click spawns a div gunshot and sound 
			var audio = document.getElementById("audio");
			audio.play();
			
		
			
		} else {
			$("#evader").removeClass("flyAway");
			$("#duckHunt").addClass("game-start");
			$('#evader').css("display", 'block');
			animateDiv();
		}

	
	})


		$('#duckHunt2').on("click", function(){

		
		//game hasn't started
		if($("#duckHunt2").hasClass("game-start")){
		
		

			var audio = document.getElementById("audio");
			audio.play();
			
		}  else {
			
			$("#evader").removeClass("flyAway");
			$("#duckHunt2").addClass("game-start");
			$('#evader').css("display", 'block');
			animateDiv();
		}

	
	})

	$('#evader').on('click' , function(){

		var audio2 = document.getElementById("audio2");
		audio2.play();

		$("#evader").addClass("flyAway");
		//swap evader image, animate death 

		$("#duckHunt").removeClass("game-start");
		$("#duckHunt2").removeClass("game-start");
		
		//.... death 


	

		
	
		
	
	
	})




	



	if (document.body.classList.contains("homePage")) {

		
		let screenWidth = window.innerWidth;
		let bg = document.getElementById("bg");
		let moon = document.getElementById("moon");
		let mountain = document.getElementById("mountain");
		let pond = document.getElementById("pond");
		let title = document.getElementById("text");

		let sectionHeightPx = document.querySelector('section').clientHeight;
		let halfSectionHeight = sectionHeightPx *.5;
		if( screenWidth > 545 ) {
			$('#pond').css('transform' , `translate(0px , ${halfSectionHeight} )`);

			//hide images untill fully loaded 
			 mountain.style.opacity = 1;
			 pond.style.opacity = 1;
			// mountain.style.top = halfSectionHeight * 1.25 + 'px';
			mountain.style.top = 515+ 'px';
			pond.style.top = halfSectionHeight + 'px';
		}



		


		window.addEventListener('scroll', function () {
			let value = window.scrollY;


			// desktop paralax
			if( screenWidth > 545 ) {
				mountain.style.opacity = 1;
				pond.style.opacity = 1;
				let x = scrollY;
				let scrollPx = value + 'px';
				let halfscrollPx = value * .5 + 'px' ;
				let mtnValueY = -value * .8 + 'px';

				// bg.style.top = -value * .75 + 'px';
				$('#bg').css('transform' , `translate(0px , ${mtnValueY} )`);
				
				// $('#moon').css('transform' , `translate(${scrollPx}, ${halfscrollPx})`);
				
		
				title.style.top = value + 110 + 'px';

				if( x < 270) {
					value = window.scrollY ;
					let mountainY = -value  * 1.5 + 'px';
					let pondY = -value * 1.4 + 'px';
					// pond.style.top = -value * 1 +  300 + 'px';
					// mountain.style.top = -value * 1 + 385 + 'px';

					$('#pond').css('transform' , `translate(0px , ${pondY} )`);
					$('#mountain').css('transform' , `translate(0px, ${mountainY}  )`);
				}else if (x > 700){
					$('#bg').css('transform' , `translate(0px , 0px )`);
				} else {
					
				}
				
				// mobile paralax
			} else if (screenWidth <= 545 ) {
				
				x = scrollY;
				scrollPx = value + 'px';
				let bgScrollPx = -value * .15 + 'px';
			



				// bg.style.top = -value * .15 + 'px';


				$('#bg').css('transform' , `translate(0px, ${bgScrollPx})`);
				// moon.style.left = value * 1 - 199 + 'px';
				//  moon.style.top = value * 1 - 199 + 'px';
				//  $('#moon').css('transform' , `translate(${scrollPx}, ${scrollPx})`);
				



				// title.style.top = value + 110 + 'px';
				
			     $('#text').css('transform' , `translate(0px, ${scrollPx})`);
				
				
				
			
				
				
				if(x < 200) {
					 mountainY = -value   + 'px';
					 pondY = -value * .5 + 'px';

					$('#pond').css('transform' , `translate(0px , ${pondY} )`);
					$('#mountain').css('transform' , `translate(0px, ${mountainY}  )`);
					// pond.style.top = -value * .3 +  300 + 'px';
					// mountain.style.top = -value * .6 + 405 + 'px';
				}else if (x < 400){
					
				} else {
					
				}
				

				
				 
			}

			
		


		});

		
	









	} else if (document.body.classList.contains("UtilityPage")) {

		// In utility page the top two div elements have texts of varying length, leading to the containers looking mismatched. 
		// This code grabs the height attribute of the p container with more text and sets the adjacet p container, with less text, to that min-height so that the buttons are vertically aligned 
		let DuckwardsPContainer = $("#duckwards-p");
		let MetaversePContainer = $("#metaverse-p");


		let DreamPContainer = $("#dream-p");
		let ActivitiesPContainer = $("#activities-p");


		let MerchPContainer = $('#merch-p');
		let AirdropsPContainer = $('#airdrops-p');


		function getClientHeight(A, B) {
			let A1 = A[0];
			let B1 = B[0];
			setMinHeightP({
				A1: A1.clientHeight,
				B1: B1.clientHeight
			}, A1, B1);

		}

		function setMinHeightP(obj, A, B) {
			let AID = '#' + A.id;
			let BID = '#' + B.id;
			let AContainer = $(`${AID}`);
			let BContainer = $(`${BID}`);


			if (obj.A1 > obj.B1) {
				BContainer.css("min-height", obj.A1);
			} else if (obj.A1 < obj.B1) {
				AContainer.css("min-height", obj.B1);
			} else {
				//do nothing, they are the same height already
			}

		}


		getClientHeight(MetaversePContainer, DuckwardsPContainer);
		getClientHeight(DreamPContainer, ActivitiesPContainer);
		getClientHeight(MerchPContainer, AirdropsPContainer);


		//change if browser resized. 
		$(window).resize(function () {
			getClientHeight(MetaversePContainer, DuckwardsPContainer);
			getClientHeight(DreamPContainer, ActivitiesPContainer);
			getClientHeight(MerchPContainer, AirdropsPContainer);
		});


		$('.coming-soon-button').on("mouseover", function () {
			
			if(!this.classList.contains("hovered")){
			this.classList.add("hovered");
			this.innerText = 'COMING SOON';
			}
		});


		$('.coming-soon-button').on("click", function () {
			

			if(!this.classList.contains("visited")){
				
				this.classList.add("visited");
				this.innerText = 'COMING SOON...';
			} 
			

		
		})


		
	
		

	} else if (document.body.classList.contains("BrandValuesPage"))


	$('.carousel').carousel({
		interval: 100000
	})


});