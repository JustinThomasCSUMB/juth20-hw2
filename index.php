<!DOCTYPE html>
<html lang=en-us>
<!--

First Website
and comment
in html
(comments can span multiple lines)

-->

<!-- This is the head -->
<!-- All styles and javascript go inside the head -->
    <head>
        <meta charset="utf-8"/>
        <title> Justin Thomas: CST336 HW1</title>
        <link href="css/style.css" rel="stylesheet" type="text/css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="./script/index.js"></script>
    </head>
<!-- closing head -->

    <!-- This is the body -->
    <!-- This is where we place the content of our website -->
    <body>
        <header>
            <h1> Justin Thomas HW 2 - Javascript/jQuery </h1>
        </header>
        <hr>
        
        <div id="content">
            <h1>Spin To Win!!!</h1>
            <p>Enter a dollar amount below and click SPIN</p>
            <p>Match any three of the same symbols and win <strong>5x</strong></p>
            <div>
                <img id="slot1" src="./img/cherry.webp" alt="cherries"/>
                <img id="slot2" src="./img/bar.png" alt="bar"/>
                <img id="slot3" src="./img/seven.png" alt="seven"/>
            </div>
            <br>
            <span><strong>BET</strong></span>
            <input id="betAmount" type="number" min="1">
            <div id="betError"></div>
            <br>
            <br>
            <button id="buttonSpin">SPIN</button>
            <div id="winnings"></div>
        </div>
        
        <footer>
            Justin Thomas hw 2 - CST336
        </footer>
    </body>
    <!-- closing body -->

</html>