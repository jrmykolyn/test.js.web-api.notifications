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
                var msgs = [
                    'This is the first message.',
                    'This is the second message',
                    'This is the third message',
                    'This is the fourth message',
                    'This is the fifth message'
                ];

                var sequenceIntervalId = initIntervalSequence( msgs, 1000 );

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

    function initIntervalSequence( msgs, frequency ) {
        msgs = msgs || [];
        frequency = frequency || 5000;

        var counter = 0;
        var interval = setInterval( function() {
            if ( counter === msgs.length ) {
                clearInterval( interval );
                return;
            }

            showNotification( msgs[ counter ] );

            counter++;
        }, frequency );

        return interval;
    }
} )();