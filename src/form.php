<?php
    $response = array();
    $response['status'] = 'warning';

    // Contact form
    if ( ( isset($_POST['your-name']) && $_POST['your-name'] != "" ) && ( isset($_POST['your-email-phone'] ) && $_POST['your-email-phone'] != "" ) && ( isset($_POST['your-message'] ) && $_POST['your-message'] != "" ) ) {
        $to = 'your@email.com'; // Your email
        $subject = 'Contact form'; // E-mail subject
        $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Name: '.$_POST['your-name'].'</p>
                    <p>Email/Phone no.: '.$_POST['your-email-phone'].'</p>
                    <p>Message: '.$_POST['your-message'].'</p>
                </body>
            </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; // Charset
        $headers .= "From: Oxer <your@email.com>\r\n"; // Your name and email

        if ( mail( $to, $subject, $message, $headers ) ) {
            $response['status'] = 'success';
        } else {
            $response['status'] = 'error';
        }
    }

    // Comment form
    else if ( isset( $_POST['comment'] ) && isset( $_POST['author'] ) && isset( $_POST['email'] ) && isset( $_POST['url'] ) ) {
        $to = 'your@email.com'; // Your email
        $subject = 'Comment form'; // E-mail subject
        $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Comment: '.$_POST['comment'].'</p>
                    <p>Author.: '.$_POST['author'].'</p>
                    <p>Email: '.$_POST['email'].'</p>
                    <p>url: '.$_POST['url'].'</p>
                </body>
            </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; // Charset
        $headers .= "From: Oxer <your@email.com>\r\n"; // Your name and email

        if ( mail( $to, $subject, $message, $headers ) ) {
            $response['status'] = 'success';
        } else {
            $response['status'] = 'error';
        }
    }

    echo json_encode($response);
?>