 
window.addEventListener('load', function () {

	


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
			mountain.style.opacity = 0;
			pond.style.opacity = 0;
			mountain.style.top = halfSectionHeight * 1.25 + 'px';
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
				
				$('#moon').css('transform' , `translate(${scrollPx}, ${halfscrollPx})`);
				
		
				title.style.top = value + 110 + 'px';

				if(x > 300 && x < 650) {
					value = window.scrollY - 300;
					let mountainY = -value  * 1.45 + 'px';
					let pondY = -value * 1.1 + 'px';
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
				   console.log(x)
				 scrollPx = value + 'px';
				let bgScrollPx = -value * .15 + 'px';
			



				// bg.style.top = -value * .15 + 'px';


				$('#bg').css('transform' , `translate(0px, ${bgScrollPx})`);
				// moon.style.left = value * 1 - 199 + 'px';
				//  moon.style.top = value * 1 - 199 + 'px';
				 $('#moon').css('transform' , `translate(${scrollPx}, ${scrollPx})`);
				



				// title.style.top = value + 110 + 'px';
				$('#text').css('transform' , `translate(0px, ${scrollPx})`);
				
			
				
				
				if(x < 300) {
					 mountainY = -value * .6  + 'px';
					 pondY = -value * .3 + 'px';

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
			} else if(this.classList.contains("visited") && !this.classList.contains("visited-again")){
				this.classList.add("visited-again");
				this.innerText = 'Patience...';
			} else if(this.classList.contains("visited-again") && !this.classList.contains("warning")){
				this.classList.add("warning");
				this.innerText = 'im warning you...';
			} else if (this.classList.contains("warning") && this.classList.contains("visited-again") && !this.classList.contains("done") ) {
				this.classList.add("done");
				this.innerText = 'you ducked up';
				$('#evader').css("display", 'block');
				animateDiv();
				
			} else {
				//do nothing
			}
			

		
		})

	
		
		function makeNewPosition(){
			
			// Get viewport dimensions (remove the dimension of the div)
			var h = $(window).height() - 50;
			var w = $(window).width() - 50;
			
			var nh = Math.floor(Math.random() * h);
			var nw = Math.floor(Math.random() * w);
			
			return [nh,nw];    
			
		}
		
		function animateDiv(){
			var newq = makeNewPosition();
			$('.touchMeNot').animate({ top: newq[0], left: newq[1] }, function(){
			  animateDiv();        
			});
			
		};


		$('.touchMeNotImg').on('click' , function(){
			$('.touchMeNot').css('display', "none");
			alert("you win this round...")
		})

	
		

	} else if (document.body.classList.contains("BrandValuesPage"))


	$('.carousel').carousel({
		interval: 100000
	})


});