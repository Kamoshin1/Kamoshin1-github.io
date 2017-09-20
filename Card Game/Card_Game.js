          function isBlack() {
              var x = document.querySelectorAll(".red");
              var i;
              for (i = 0; i < x.length; i++) {
                  x[i].style.visibility = "hidden";
                  var q = document.getElementById("question");
                  q.innerHTML = "Is your card a Spade?";
                  var b = document.getElementById("isBlackButton").style.visibility = 'hidden';
                  var c = document.getElementById("isSpadeButton").style.visibility = 'visible';
                  var b = document.getElementById("notBlackButton").style.visibility = 'hidden';
                  var c = document.getElementById("notSpadeButton").style.visibility = 'visible';

              }
          }

            
       
       


        function notBlack() {
            var x = document.querySelectorAll(".black");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
            var q = document.getElementById("question");
            q.innerHTML = "Is your card a Heart?";
            var b = document.getElementById("isBlackButton").style.visibility = 'hidden';
            var c = document.getElementById("isHeartButton").style.visibility = 'visible';
            var b = document.getElementById("notBlackButton").style.visibility = 'hidden';
            var c = document.getElementById("notHeartButton").style.visibility = 'visible';
        }
    }
           

            

        function isSpade() {
            var x = document.querySelectorAll(".not-spade");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
            var q = document.getElementById("question");
            q.innerHTML = "Is your card a Number?";
            var b = document.getElementById("isSpadeButton").style.visibility = 'hidden';
            var c = document.getElementById("isNumberButton").style.visibility = 'visible';
            var b = document.getElementById("notSpadeButton").style.visibility = 'hidden';
            var c = document.getElementById("notNumberButton").style.visibility = 'visible';
            }
        }
        function notSpade() {
            var x = document.querySelectorAll(".spades");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
            var q = document.getElementById("question");
            q.innerHTML = "Is your card a Number?";
            var b = document.getElementById("isSpadeButton").style.visibility = 'hidden';
            var c = document.getElementById("isNumberButton").style.visibility = 'visible';
            var b = document.getElementById("notSpadeButton").style.visibility = 'hidden';
            var c = document.getElementById("notNumberButton").style.visibility = 'visible';

            }
        }

        function isHeart() {
            var x = document.querySelectorAll(".not-heart");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
            var q = document.getElementById("question");
            q.innerHTML = "Is your card a Number?";
            var b = document.getElementById("isHeartButton").style.visibility = 'hidden';
            var c = document.getElementById("isNumberButton").style.visibility = 'visible';
            var b = document.getElementById("notHeartButton").style.visibility = 'hidden';
            var c = document.getElementById("notNumberButton").style.visibility = 'visible';
            }
        }
        function notHeart() {
            var x = document.querySelectorAll(".hearts");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "Is your card a Number?";
            var b = document.getElementById("isHeartButton").style.visibility = 'hidden';
            var c = document.getElementById("isNumberButton").style.visibility = 'visible';
            var b = document.getElementById("notHeartButton").style.visibility = 'hidden';
            var c = document.getElementById("notNumberButton").style.visibility = 'visible';
            }
        }

        function isNumber() {
            var x = document.querySelectorAll(".not-number");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "Is your card an even number?";
            var b = document.getElementById("isNumberButton").style.visibility = 'hidden';
            var c = document.getElementById("isEvenButton").style.visibility = 'visible';
            var b = document.getElementById("notNumberButton").style.visibility = 'hidden';
            var c = document.getElementById("notEvenButton").style.visibility = 'visible';
            }
        }
        function notNumber() {
            var x = document.querySelectorAll(".number");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "Is your card an ace?";
            var b = document.getElementById("isNumberButton").style.visibility = 'hidden';
            var c = document.getElementById("isAceButton").style.visibility = 'visible';
            var b = document.getElementById("notNumberButton").style.visibility = 'hidden';
            var c = document.getElementById("notAceButton").style.visibility = 'visible';
            }
        }

        function isAce() {
            var x = document.querySelectorAll(".not-ace");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "Looks like your card is an Ace!";
                var b = document.getElementById("isAceButton").style.visibility = 'hidden';
               // var c = document.getElementById("isAceButton").style.visibility = 'visible';
                var b = document.getElementById("notAceButton").style.visibility = 'hidden';
              //  var c = document.getElementById("notAceButton").style.visibility = 'visible';
            }
        }
        function notAce() {
            var x = document.querySelectorAll(".ace");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "Does your card have a Male character?";
                var b = document.getElementById("isAceButton").style.visibility = 'hidden';
                var c = document.getElementById("isMaleButton").style.visibility = 'visible';
                var b = document.getElementById("notAceButton").style.visibility = 'hidden';
                var c = document.getElementById("notMaleButton").style.visibility = 'visible';
            }
        }
        function isMale() {
            var x = document.querySelectorAll(".not-male");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "Is your card a King!?";
            var b = document.getElementById("isMaleButton").style.visibility = 'hidden';
            var c = document.getElementById("isKingButton").style.visibility = 'visible';
            var b = document.getElementById("notMaleButton").style.visibility = 'hidden';
            var c = document.getElementById("notKingButton").style.visibility = 'visible';
            }
        }
        function notMale() {
            var x = document.querySelectorAll(".male");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "It looks like your card is a Queen!";
            var b = document.getElementById("isMaleButton").style.visibility = 'hidden';
            //var c = document.getElementById("isKingButton").style.visibility = 'visible';
            var b = document.getElementById("notMaleButton").style.visibility = 'hidden';
            //var c = document.getElementById("notKingButton").style.visibility = 'visible';
            }
        }
        function isKing() {
            var x = document.querySelectorAll(".not-king");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "It looks like your card is a King!";
                var b = document.getElementById("isKingButton").style.visibility = 'hidden';
                // var c = document.getElementById("isKingButton").style.visibility = 'visible';
                var b = document.getElementById("notKingButton").style.visibility = 'hidden';
                // var c = document.getElementById("notKingButton").style.visibility = 'visible';
            }
        }
        function notKing() {
            var x = document.querySelectorAll(".king");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "It looks like your card is a Jack!";
                var b = document.getElementById("isKingButton").style.visibility = 'hidden';
                //var c = document.getElementById("isKingButton").style.visibility = 'visible';
                var b = document.getElementById("notKingButton").style.visibility = 'hidden';
                //var c = document.getElementById("notKingButton").style.visibility = 'visible';
            }
        }



        function isEven() {
            var x = document.querySelectorAll(".odd");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "Is your card's number greater than 5?";
                var b = document.getElementById("isEvenButton").style.visibility = 'hidden';
                var c = document.getElementById("isGreaterThanFiveButton").style.visibility = 'visible';
                var b = document.getElementById("notEvenButton").style.visibility = 'hidden';
                var c = document.getElementById("notGreaterThanFiveButton").style.visibility = 'visible';
            }
        }
        function notEven() {
            var x = document.querySelectorAll(".even");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "Is your card's number greater than 6?";
                var b = document.getElementById("isEvenButton").style.visibility = 'hidden';
                var c = document.getElementById("isGreaterThanSixButton").style.visibility = 'visible';
                var b = document.getElementById("notEvenButton").style.visibility = 'hidden';
                var c = document.getElementById("notGreaterThanSixButton").style.visibility = 'visible';
            }
        }

        function isGreaterThanFive() {
            var x = document.querySelectorAll(".not-greater-than-five");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "Is your card's number greater than 7?";
                var b = document.getElementById("isGreaterThanFiveButton").style.visibility = 'hidden';
                var c = document.getElementById("isGreaterThanSevenButton").style.visibility = 'visible';
                var b = document.getElementById("notGreaterThanFiveButton").style.visibility = 'hidden';
                var c = document.getElementById("notGreaterThanSevenButton").style.visibility = 'visible';
            }
        }

        function notGreaterThanFive() {
            var x = document.querySelectorAll(".greater-than-five");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "Is your card's number greater than 3?";
                var b = document.getElementById("isGreaterThanFiveButton").style.visibility = 'hidden';
                var c = document.getElementById("isGreaterThanThreeButton").style.visibility = 'visible';
                var b = document.getElementById("notGreaterThanFiveButton").style.visibility = 'hidden';
                var c = document.getElementById("notGreaterThanThreeButton").style.visibility = 'visible';
            }
        }
        function isGreaterThanSeven() {
            var x = document.querySelectorAll(".not-greater-than-seven");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "Is your card's number greater than 9?";
                var b = document.getElementById("isGreaterThanSevenButton").style.visibility = 'hidden';
                var c = document.getElementById("isGreaterThanNineButton").style.visibility = 'visible';
                var b = document.getElementById("notGreaterThanSevenButton").style.visibility = 'hidden';
                var c = document.getElementById("notGreaterThanNineButton").style.visibility = 'visible';
            }
        }

        function notGreaterThanSeven() {
            var x = document.querySelectorAll(".greater-than-seven");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "It looks like your card is a 6?";
                var b = document.getElementById("isGreaterThanFiveButton").style.visibility = 'hidden';
                // var c = document.getElementById("isGreaterThanThreeButton").style.visibility = 'visible';
                var b = document.getElementById("notGreaterThanFiveButton").style.visibility = 'hidden';
                // var c = document.getElementById("notGreaterThanThreeButton").style.visibility = 'visible';
            }
        }

        function isGreaterThanThree() {
            var x = document.querySelectorAll(".not-greater-than-three");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "It looks like your card is a 4!";
                var b = document.getElementById("isGreaterThanThreeButton").style.visibility = 'hidden';
                // var c = document.getElementById("isGreaterThanSevenButton").style.visibility = 'visible';
                var b = document.getElementById("notGreaterThanThreeButton").style.visibility = 'hidden';
                // var c = document.getElementById("notGreaterThanSevenButton").style.visibility = 'visible';
            }
        }

        function notGreaterThanThree() {
            var x = document.querySelectorAll(".greater-than-three");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "It looks like your card is a 2!";
                var b = document.getElementById("isGreaterThanThreeButton").style.visibility = 'hidden';
                // var c = document.getElementById("isGreaterThanThreeButton").style.visibility = 'visible';
                var b = document.getElementById("notGreaterThanThreeButton").style.visibility = 'hidden';
                // var c = document.getElementById("notGreaterThanThreeButton").style.visibility = 'visible';
            }
        }

        function isGreaterThanNine() {
            var x = document.querySelectorAll(".not-greater-than-nine");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "It looks like your card is a 10!";
                var b = document.getElementById("isGreaterThanNineButton").style.visibility = 'hidden';
                // var c = document.getElementById("isGreaterThanSevenButton").style.visibility = 'visible';
                var b = document.getElementById("notGreaterThanNineButton").style.visibility = 'hidden';
                // var c = document.getElementById("notGreaterThanSevenButton").style.visibility = 'visible';
            }
        }

        function notGreaterThanNine() {
            var x = document.querySelectorAll(".greater-than-nine");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "It looks like your card is a 8!";
                var b = document.getElementById("isGreaterThanNineButton").style.visibility = 'hidden';
                // var c = document.getElementById("isGreaterThanThreeButton").style.visibility = 'visible';
                var b = document.getElementById("notGreaterThanNineButton").style.visibility = 'hidden';
                // var c = document.getElementById("notGreaterThanThreeButton").style.visibility = 'visible';
            }
        }
        function isGreaterThanSix() {
            var x = document.querySelectorAll(".not-greater-than-six");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "It looks like your card's number greater than 8?";
                var b = document.getElementById("isGreaterThanSixButton").style.visibility = 'hidden';
                var c = document.getElementById("isGreaterThanEightButton").style.visibility = 'visible';
                var b = document.getElementById("notGreaterThanSixButton").style.visibility = 'hidden';
                var c = document.getElementById("notGreaterThanEightButton").style.visibility = 'visible';
            }
        }

        function notGreaterThanSix() {
            var x = document.querySelectorAll(".greater-than-six");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "It looks like your card's number less than 4?";
                var b = document.getElementById("isGreaterThanSixButton").style.visibility = 'hidden';
                var c = document.getElementById("isGreaterThanFourButton").style.visibility = 'visible';
                var b = document.getElementById("notGreaterThanSixButton").style.visibility = 'hidden';
                var c = document.getElementById("notGreaterThanFourButton").style.visibility = 'visible';
            }
        }

        function isGreaterThanFour() {
            var x = document.querySelectorAll(".not-greater-than-four");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "It looks like your card is a 5!";
                var b = document.getElementById("isGreaterThanSixButton").style.visibility = 'hidden';
                // var c = document.getElementById("isGreaterThanEightButton").style.visibility = 'visible';
                var b = document.getElementById("notGreaterThanSixButton").style.visibility = 'hidden';
                // var c = document.getElementById("notGreaterThanEightButton").style.visibility = 'visible';
            }
        }

        function notGreaterThanFour() {
            var x = document.querySelectorAll(".greater-than-four");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "It looks like your card is a 3!";
                var b = document.getElementById("isGreaterThanSixButton").style.visibility = 'hidden';
                // var c = document.getElementById("isGreaterThanFourButton").style.visibility = 'visible';
                var b = document.getElementById("notGreaterThanSixButton").style.visibility = 'hidden';
                // var c = document.getElementById("notGreaterThanFourButton").style.visibility = 'visible';
            }
        }

        function isGreaterThanEight() {
            var x = document.querySelectorAll(".not-greater-than-eight");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "It looks like your card is a 9!";
                var b = document.getElementById("isGreaterThanEightButton").style.visibility = 'hidden';
                // var c = document.getElementById("isGreaterThanEightButton").style.visibility = 'visible';
                var b = document.getElementById("notGreaterThanEightButton").style.visibility = 'hidden';
                // var c = document.getElementById("notGreaterThanEightButton").style.visibility = 'visible';
            }
        }

        function notGreaterThanEight() {
            var x = document.querySelectorAll(".greater-than-eight");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
                var q = document.getElementById("question");
                q.innerHTML = "It looks like your card is a 7!";
                var b = document.getElementById("isGreaterThanEightButton").style.visibility = 'hidden';
                // var c = document.getElementById("isGreaterThanFourButton").style.visibility = 'visible';
                var b = document.getElementById("notGreaterThanEightButton").style.visibility = 'hidden';
                // var c = document.getElementById("notGreaterThanFourButton").style.visibility = 'visible';
            }
        }