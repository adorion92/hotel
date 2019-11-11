var sssliderImages = document.querySelectorAll('.slideee'),
	aaarrowLeft = document.querySelector('#arrowww-left'),
	aaarrowRight = document.querySelector('#arrowww-right'),
	cccurrent = 0;

	function resettt(){
		for(var i = 0; i < sssliderImages.length; i++){
			sssliderImages[i].style.display = 'none';
		}
	}
	function validate2(){
		//console.log(current);
		if(cccurrent >= sliderImages.length) cccurrent=0;
		if(cccurrent < 0) cccurrent=sliderImages.length-1;
	}

	function startSlideee(){
		resettt();
		sssliderImages[0].style.display = 'block';
	}

	function slideLefttt(){
		resettt();
		validate2();
		sssliderImages[cccurrent].style.display = 'block';
		cccurrent--;
	}

	function slideRighttt(){
		resettt();
		validate2();
		sssliderImages[cccurrent].style.display='block';
		cccurrent++;
	}
	function firsttt(){
		if(cccurrent===0){
			cccurrent = sssliderImages.length;
		}
		slideLefttt();
	}
	function seconddd(){
		if(cccurrent===sssliderImages.length - 1){
			cccurrent = -1; 
		}
		slideRighttt();
	}
	

		aaarrowLeft.addEventListener('click', firsttt);


		aaarrowRight.addEventListener('click', seconddd);
		

	startSlideee();
	setInterval(slideRighttt, 5000);