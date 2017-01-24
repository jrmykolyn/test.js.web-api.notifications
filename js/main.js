( function() {
    if ( 'Notification' in window ) {
        switch ( Notification.permission ) {
            case 'default':
                Notification.requestPermission()
                    .then(
                        handleAccepted,
                        handleRejected
                    )
                break;
            case 'granted':
                showNotification( 'Welcome back!' );

                break;
            default:
                // DO NO THINGS
        }
    } else {
        console.error( 'Current browser does not support the Notification API.' );
    }

    /* DECLARE FUNCTIONS */
    function handleAccepted( response ) {
        console.log( 'INSIDE `handleAccepted`' );
        console.log( response );

        showNotification( 'Thanks for enabling notifications!' );
    }

    function handleRejected( error ) {
        console.log( 'INSIDE `handleRejected`' );
        console.error( error );
    }

    function showNotification( msg ) {
        var n = new Notification( msg );

        setTimeout( function() { n.close(); }, 5000 );
    }
} )();