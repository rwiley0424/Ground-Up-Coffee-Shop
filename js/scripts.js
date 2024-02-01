let sectionImg = document.querySelectorAll( 'section img' );
		let sectionText = document.querySelectorAll( 'section div' );

		for(let i=0; i < sectionImg.length; i++) {
			let movement = 100 // odd rows
			if( i % 2 == 0 ) {
				movement = -movement; // even rows
			}

			gsap.from(sectionImg[i], {
				scrollTrigger: {
					trigger: sectionImg[i],
					//markers: true,
					scrub: 1,
					start: 'top 85%',
					end: 'bottom 80%'
				}, x:movement, opacity: 0, scale:0 }
			)
			gsap.from(sectionText[i], {
				scrollTrigger: {
					trigger: sectionText[i],
					//markers: true,
					scrub: 1,
					start: 'top 85%',
					end: 'bottom 80%'
				}, x:-movement, opacity: 0}
			)
		}//end of for loop