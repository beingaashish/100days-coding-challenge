let UIaccordion = (
	function() {
		const DOMStrings = {
			accordionButtons: document.querySelectorAll( '.accordion-item__button' ),
		}

		function setUpEvents() {
			DOMStrings.accordionButtons.forEach( function( btnEl ) {
				btnEl.addEventListener( 'click', function( e ) {
					let targetElSelector = this.getAttribute('data-target');
					let targetEl         = document.querySelector( targetElSelector );
					let parentEl         = targetEl.parentElement;

					// Uncomment the below code if you want to close other tabs when a opening only one accordion.
					// let currActive = document.querySelector( '.accordion-item.active' );

					// if ( currActive && (parentEl !== currActive) ) {
					// 	currActive.classList.toggle( 'active' );
					// 	currActive.querySelector('.accordion-item__body').style.maxHeight = 0;
					// }

					parentEl.classList.toggle( 'active' );

					if( parentEl.classList.contains( 'active' ) ) {
						targetEl.style.maxHeight = targetEl.scrollHeight + "px";
					} else {
						targetEl.style.maxHeight = 0;
					}
				} );
			} );
		}

		return {
			init: function() {
				setUpEvents();
			}
		}
	}
)();

UIaccordion.init();
