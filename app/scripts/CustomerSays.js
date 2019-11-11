var ssliderImages = document.querySelectorAll('.slidee'),
	aarrowLeftt = document.querySelector('#arroww-left'),
	aarrowRightt = document.querySelector('#arroww-right'),
	ccurrent = 0;
	
	
	function resett(){
		for(var i = 0; i < ssliderImages.length; i++){
			ssliderImages[i].style.display = 'none';
		}
	}
	function validate3(){
		//console.log(current);
		if(ccurrent >= sliderImages.length) ccurrent=0;
		if(ccurrent < 0) ccurrent=sliderImages.length-1;
	}

	function startSlidee(){
		resett();
		ssliderImages[0].style.display = 'block';
	}
	
	function slideLeftt(){
		resett();
		validate3();
		ssliderImages[ccurrent].style.display = 'block';
		ccurrent--;
	}

	function slideRightt(){
		resett();
		validate3();
		ssliderImages[ccurrent].style.display='block';
		ccurrent++;
	}
	function firstt(){
		if(ccurrent===0){
			ccurrent = ssliderImages.length;
		}
		slideLeftt();
	}
	function secondd(){
		if(ccurrent===ssliderImages.length - 1){
			ccurrent = -1; 
		}
		slideRightt();
	}
	
		
		aarrowLeftt.addEventListener('click', firstt);


		aarrowRightt.addEventListener('click', secondd);
		

	startSlidee();
	setInterval(slideRightt, 3000);