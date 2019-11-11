var sliderImages = document.querySelectorAll('.slide'),
	arrowLeft = document.querySelector('#arrow-left'),
	arrowRight = document.querySelector('#arrow-right'),
	current = 0;

	function reset(){
		for(var i = 0; i < sliderImages.length; i++){
			sliderImages[i].style.display = 'none';
		}
	}

	function validate(){
		//console.log(current);
		if(current >= sliderImages.length) current=0;
		if(current < 0) current=sliderImages.length-1;
	}
	function startSlide(){
		reset();
		sliderImages[0].style.display = 'block';
	}

	function slideLeft(){
		reset();
		validate();
		sliderImages[current].style.display = 'block';
		current--;
	}

	function slideRight(){
		//console.log(current);
		reset();
		validate();
		sliderImages[current ].style.display='block';
		current++;
		
	}
	function first(){
		if(current===0){
			current = sliderImages.length;
		}
		slideLeft();
	}
	function second(){
		if(current===sliderImages.length - 1){
			current = -1; 
		}
		slideRight();
	}
	

		arrowLeft.addEventListener('click', first);


		arrowRight.addEventListener('click', second);
		

	startSlide();
	setInterval(slideRight, 3000);