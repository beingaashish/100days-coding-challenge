let formValidation = ( function() {

	const DOMStrings = {
		form: document.querySelector('.form'),
		username: document.querySelector('#username'),
		email: document.querySelector('#email'),
		password: document.querySelector('#password'),
		password2: document.querySelector('#password2')
	}

	function validateUserNameAndPassword( inputEl, minLength, maxLength ) {
		if ( ! hasAnyValue( inputEl ) ) {
			showError( inputEl, 'is required.' );
		} else if( hasMinLength( inputEl, minLength ) ) {
			showError( inputEl, 'must have minimum of ' + minLength + ' characters.' );
		} else if( hasMaxLength( inputEl, maxLength ) ) {
			showError( inputEl, 'must not have more than ' + maxLength + ' characters.' );
		} else {
			showSuccess( inputEl );
		}
	}

	function validateEmail( inputEl ) {
		if ( ! hasAnyValue( inputEl ) ) {
			showError( inputEl, 'is required.' );
		} else if ( ! isValidEmail( inputEl ) ) {
			showError( inputEl, 'is not valid.' );
		} else {
			showSuccess( inputEl );
		}
	}

	function validatePassword2 ( pass2, pass1 ) {
		if ( ! hasAnyValue( pass2 ) ) {
			showError( pass2, 'is required.' );
		} else if( pass1.value !== pass2.value ) {
			showError( pass2, 'does not matches.' );
		} else {
			showSuccess( pass2 );
		}
	}

	function hasAnyValue( inputEl ) {
		if ( inputEl.value.trim() === '' ) {
			return false;
		} else {
			return true;
		}
	}

	function hasMinLength( inputEl, min ) {
		if( inputEl.value.length < min ) {
			return true;
		} else {
			return false;
		}
	}

	function hasMaxLength( inputEl, max ) {
		if( inputEl.value.length > max ) {
			return true;
		} else {
			return false;
		}
	}

	function isValidEmail( inputEl ) {
		const filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return filter.test( String( inputEl.value ).toLowerCase() );
	}

	function showError( inputEl, message ) {
		let parentEl = inputEl.parentElement;
		if ( parentEl.classList.contains( 'success' ) ) {
			parentEl.classList.remove( 'success' );
		}
		parentEl.classList.add( 'error' );
		parentEl.querySelector('.error-text').textContent = getInputFieldName( inputEl ) + ' ' + message;
	}

	function showSuccess( inputEl ) {
		let parentEl = inputEl.parentElement;
		if ( parentEl.classList.contains( 'error' ) ) {
			parentEl.classList.remove( 'error' );
		}
		parentEl.classList.add( 'success' );
	}

	function getInputFieldName( inputEl ) {
		return inputEl.id.charAt(0).toUpperCase() + inputEl.id.slice(1);
	}

	function setUpEvents() {
		DOMStrings.form.addEventListener('submit', function( e ) {
			e.preventDefault();

			validateUserNameAndPassword( DOMStrings.username, 5, 15 );
			validateEmail( DOMStrings.email );
			validateUserNameAndPassword( DOMStrings.password, 8, 20 );
			validatePassword2( DOMStrings.password2, DOMStrings.password );

		} );
	}

	return {
		init: function() {
			setUpEvents();
		}
	}
} ) ();

formValidation.init();