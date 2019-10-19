document.addEventListener( 'click', function( event ) {

  if ( !event.target.matches('[name="show-passwords"]') ) return;

  var passwords = Array.prototype.slice.call( document.querySelectorAll( event.target.getAttribute( 'data-pw-toggle' ) ) );

  passwords.forEach( function( field ) {
    if( field.type === 'password' ) {
      field.type = 'text';
    } else {
      field.type = 'password';
    }
  } );

}, false );