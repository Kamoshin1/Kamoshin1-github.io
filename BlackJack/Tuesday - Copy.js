var sixDeckArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312];
//1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255,256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299,
var deckCardTotal = 36;
var cardNumber;
var yourFirstCard = document.getElementById("your-first-card");
var yourSecondCard = document.getElementById("your-second-card");
var yourThirdCard = document.getElementById("your-third-card");
var yourFourthCard = document.getElementById("your-fourth-card");
var yourFifthCard = document.getElementById("your-fifth-card");
var yourSixthCard = document.getElementById("your-sixth-card");
var secondHandFirstCard = document.getElementById("second-hand-first-card");
var secondHandSecondCard = document.getElementById("second-hand-second-card");
var secondHandThirdCard = document.getElementById("second-hand-card");
var secondHandFourthCard = document.getElementById("second-hand-fourth-card");
var secondHandFifthCard = document.getElementById("second-hand-fifth-card");
var secondHandSixthCard = document.getElementById("second-hand-sixth-card");
var yourFirstCardObj;
var yourSecondCardObj;
var yourThirdCardObj;
var yourFourthCardObj;
var yourFifthCardObj;
var yourSixthCardObj;
var dealerFirstCardObj;
var dealerSecondCardObj;
var dealerThirdCardObj;
var dealerFourthCardObj;
var dealerFifthCardObj;
var dealerSixthCardObj;
var message = document.getElementById("message");
var yourHand = [];
var dealerHand = [];
var yourSecondHand = [];
var pot;

//var firstCardValue = document.getElementById("first-card-value");
//var secondCardValue = document.getElementById("second-card-value");
var dealerFirstCardValue = document.getElementById("dealer-first-card-value");
var dealerSecondCardValue = document.getElementById("dealer-second-card-value");
var potDisplay = document.getElementById("pot");
potDisplay.textContent = pot;


var twoCardObj = {
    cardValue: 2,
    cardType: "two",
    isAce: false
};

var threeCardObj = {
    cardValue: 3,
    cardType: "three",
    isAce: false
};

var fourCardObj = {
    cardValue: 4,
    cardType: "four",
    isAce: false
};

var fiveCardObj = {
    cardValue: 5,
    cardType: "five",
    isAce: false
};

var sixCardObj = {
    cardValue: 6,
    cardType: "six",
    isAce: false
};

var sevenCardObj = {
    cardValue: 7,
    cardType: "seven",
    isAce: false
};
var eightCardObj = {
    cardValue: 8,
    cardType: "eight",
    isAce: false
};

var nineCardObj = {
    cardValue: 9,
    cardType: "nine",
    isAce: false
};

var tenCardObj = {
    cardValue: 10,
    cardType: "ten",
    isAce: false
};

var jackCardObj = {
    cardValue: 10,
    cardType: "jack",
    isAce: false
};

var queenCardObj = {
    cardValue: 10,
    cardType: "queen",
    isAce: false
};

var kingCardObj = {
    cardValue: 10,
    cardType: "king",
    isAce: false
};

var aceCardObj = {
    cardValue: 11,
    cardType: "ace",
    isAce: true,
    inHand: false
};

var tempAceObj1 = jQuery.extend(true, {}, aceCardObj);
var tempAceObj2 = jQuery.extend(true, {}, aceCardObj);
var tempAceObj3 = jQuery.extend(true, {}, aceCardObj);
var tempAceObj4 = jQuery.extend(true, {}, aceCardObj);
var tempAceObj5 = jQuery.extend(true, {}, aceCardObj);
var tempAceObj6 = jQuery.extend(true, {}, aceCardObj);



function dealCardToYou()  {
    var i = Math.floor(Math.random() * (deckCardTotal-1));
    cardNumber = sixDeckArray[i];
    if (deckCardTotal == 0) {
        sixDeckArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312];
        deckCardTotal = 312;
        dealCardtoYou();
    }
    else if (!yourFirstCard.textContent) {
        yourFirstCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);        
        displayYourCard("#your-first-card");
        deckCardTotal--;
    }
    else if (!yourSecondCard.textContent) {
        yourSecondCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayYourCard("#your-second-card");
        deckCardTotal--;
    }
    else if (!yourThirdCard.textContent) {
        yourThirdCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayYourCard("#your-third-card");
        deckCardTotal--;
    }
    else if (!yourFourthCard.textContent) {
        yourFourthCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayYourCard("#your-fourth-card");
        deckCardTotal--;
    }
    else if (!yourFifthCard.textContent) {
        yourFifthCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayYourCard("#your-fifth-card");
        deckCardTotal--;
    }
    else if (!yourSixthCard.textContent) {
        yourSixthCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayYourCard("#your-sixth-card");
        deckCardTotal--;
    }
    else {
        alert("You've reached the maximum number of cards allowed.");
    };
};

function dealCardSecondHand() {
    var i = Math.floor(Math.random() * (deckCardTotal - 1));
    cardNumber = sixDeckArray[i];
    if (deckCardTotal == 0) {
        sixDeckArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312];
        deckCardTotal = 312;
        dealCardSecondHand();
    }
    else if (!secondHandSecondCard.textContent) {
        secondHandSecondCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayYourCard("#second-hand-second-card");
        deckCardTotal--;
    }
    else if (!secondHandThirdCard.textContent) {
        secondHandThirdCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayYourCard("#second-hand-third-card");
        deckCardTotal--;
    }
    else if (!secondHandFourthCard.textContent) {
        secondHandFourthCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayYourCard("#second-hand-fourth-card");
        deckCardTotal--;
    }
    else if (!secondHandFifthCard.textContent) {
        secondHandFifthCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayYourCard("#second-hand-fifth-card");
        deckCardTotal--;
    }
    else if (!secondHandSixthCard.textContent) {
        secondHandSixthCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayYourCard("#second-hand-sixth-card");
        deckCardTotal--;
    }
    else {
        alert("You've reached the maximum number of cards allowed.");
    };
};



var dealerFirstCard = document.getElementById("dealer-first-card");
var dealerSecondCard = document.getElementById("dealer-second-card");
var dealerThirdCard = document.getElementById("dealer-third-card");
var dealerFourthCard = document.getElementById("dealer-fourth-card");
var dealerFifthCard = document.getElementById("dealer-fifth-card");
var dealerSixthCard = document.getElementById("dealer-sixth-card");


function dealCardToDealer() {
    var i = Math.floor(Math.random() * (deckCardTotal - 1));
    cardNumber = sixDeckArray[i];
    if (deckCardTotal == 0) {
        sixDeckArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312];
        deckCardTotal = 312;
        dealCardToDealer();
    }
    else if (!dealerFirstCard.textContent) {
        dealerFirstCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayDealerCard("#dealer-first-card");
        deckCardTotal--;
    }
    else if (!dealerSecondCard.textContent) {
        dealerSecondCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayDealerCard("#dealer-second-card");
        deckCardTotal--;
    }
    else if (!dealerThirdCard.textContent) {
        dealerThirdCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayDealerCard("#dealer-third-card");
        deckCardTotal--;
    }
    else if (!dealerFourthCard.textContent) {
        dealerFourthCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayDealerCard("#dealer-fourth-card");
        deckCardTotal--;
    }
    else if (!dealerFifthCard.textContent) {
        dealerFifthCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayDealerCard("#dealer-fifth-card");
        deckCardTotal--;
    }
    else if (!dealerSixthCard.textContent) {
        dealerSixthCard.textContent = cardNumber;
        sixDeckArray.splice(i, 1);
        displayDealerCard("#dealer-sixth-card");
        deckCardTotal--;
    }
    else {
        alert("You've reached the maximum number of cards allowed.");
    };
};

function displayYourCard(element) {
    switch (true) {
        case (cardNumber <= 6): $(element).addClass("two-clubs");
            yourHand.push(twoCardObj);
            break;
        case (cardNumber <= 12): $(element).addClass("two-diamonds");
            yourHand.push(twoCardObj);
            break;
        case (cardNumber <= 18): $(element).addClass("two-hearts");
            yourHand.push(twoCardObj);
            break;
        case (cardNumber <= 24): $(element).addClass("two-spades");
            yourHand.push(twoCardObj);
            break;
        case (cardNumber <= 30): $(element).addClass("three-clubs");
            yourHand.push(threeCardObj);
            break;
        case (cardNumber <= 36): $(element).addClass("three-diamonds");
            yourHand.push(threeCardObj);
            break;
        case (cardNumber <= 42): $(element).addClass("three-hearts");
            yourHand.push(threeCardObj);
            break;
        case (cardNumber <= 48): $(element).addClass("three-spades");
            yourHand.push(threeCardObj);
            break;
        case (cardNumber <= 54): $(element).addClass("four-clubs");
            yourHand.push(fourCardObj);
            break;
        case (cardNumber <= 60): $(element).addClass("four-diamonds");
            yourHand.push(fourCardObj);
            break;
        case (cardNumber <= 66): $(element).addClass("four-hearts");
            yourHand.push(fourCardObj);
            break;
        case (cardNumber <= 72): $(element).addClass("four-spades");
            yourHand.push(fourCardObj);
            break;
        case (cardNumber <= 78): $(element).addClass("five-clubs");
            yourHand.push(fiveCardObj);
            break;
        case (cardNumber <= 84): $(element).addClass("five-hearts");
            yourHand.push(fiveCardObj);
            break;
        case (cardNumber <= 90): $(element).addClass("five-diamonds");
            yourHand.push(fiveCardObj);
            break;
        case (cardNumber <= 96): $(element).addClass("five-spades");
            yourHand.push(fiveCardObj);
            break;
        case (cardNumber <= 102): $(element).addClass("six-clubs");
            yourHand.push(sixCardObj);
            break;
        case (cardNumber <= 108): $(element).addClass("six-hearts");
            yourHand.push(sixCardObj);
            break;
        case (cardNumber <= 114): $(element).addClass("six-diamonds");
            yourHand.push(sixCardObj);
            break;
        case (cardNumber <= 120): $(element).addClass("six-spades");
            yourHand.push(sixCardObj);
            break;
        case (cardNumber <= 126): $(element).addClass("seven-clubs");
            yourHand.push(sevenCardObj);
            break;
        case (cardNumber <= 132): $(element).addClass("seven-hearts");
            yourHand.push(sevenCardObj);
            break;
        case (cardNumber <= 138): $(element).addClass("seven-diamonds");
            yourHand.push(sevenCardObj);
            break;
        case (cardNumber <= 144): $(element).addClass("seven-spades");
            yourHand.push(sevenCardObj);
            break;
        case (cardNumber <= 150): $(element).addClass("eight-clubs");
            yourHand.push(eightCardObj);
            break;
        case (cardNumber <= 156): $(element).addClass("eight-hearts");
            yourHand.push(eightCardObj);
            break;
        case (cardNumber <= 162): $(element).addClass("eight-diamonds");
            yourHand.push(eightCardObj);
            break;
        case (cardNumber <= 168): $(element).addClass("eight-spades");
            yourHand.push(eightCardObj);
            break;
        case (cardNumber <= 174): $(element).addClass("nine-clubs");
            yourHand.push(nineCardObj);
            break;
        case (cardNumber <= 180): $(element).addClass("nine-hearts");
            yourHand.push(nineCardObj);
            break;
        case (cardNumber <= 186): $(element).addClass("nine-diamonds");
            yourHand.push(nineCardObj);
            break;
        case (cardNumber <= 192): $(element).addClass("nine-spades");
            yourHand.push(nineCardObj);
            break;
        case (cardNumber <= 198): $(element).addClass("ten-clubs");
            yourHand.push(tenCardObj);
            break;
        case (cardNumber <= 204): $(element).addClass("ten-diamonds");
            yourHand.push(tenCardObj);
            break;
        case (cardNumber <= 210): $(element).addClass("ten-hearts");
            yourHand.push(tenCardObj);
            break;
        case (cardNumber <= 216): $(element).addClass("ten-spades");
            yourHand.push(tenCardObj);
            break;
        case (cardNumber <= 222): $(element).addClass("jack-clubs");
            yourHand.push(jackCardObj);
            break;
        case (cardNumber <= 228): $(element).addClass("jack-diamonds");
            yourHand.push(jackCardObj);
            break;
        case (cardNumber <= 234): $(element).addClass("jack-hearts");
            yourHand.push(jackCardObj);
            break;
        case (cardNumber <= 240): $(element).addClass("jack-spades");
            yourHand.push(jackCardObj);
            break;
        case (cardNumber <= 246): $(element).addClass("queen-clubs");
            yourHand.push(queenCardObj);
            break;
        case (cardNumber <= 252): $(element).addClass("queen-hearts");
            yourHand.push(queenCardObj);
            break;
        case (cardNumber <= 258): $(element).addClass("queen-diamonds");
            yourHand.push(queenCardObj);
            break;
        case (cardNumber <= 264): $(element).addClass("queen-spades");
            yourHand.push(queenCardObj);
            break;
        case (cardNumber <= 270): $(element).addClass("king-clubs");
            yourHand.push(kingCardObj);
            break;
        case (cardNumber <= 276): $(element).addClass("king-diamonds");
            yourHand.push(kingCardObj);
            break;
        case (cardNumber <= 282): $(element).addClass("king-hearts");
            yourHand.push(kingCardObj);
            break;
        case (cardNumber <= 288): $(element).addClass("king-spades");
            yourHand.push(kingCardObj);
            break;
        case (cardNumber <= 294): $(element).addClass("ace-clubs");
            insertAceInHand();
            break;
        case (cardNumber <= 300): $(element).addClass("ace-diamonds");
            insertAceInHand();
            break;
        case (cardNumber <= 306): $(element).addClass("ace-hearts");
            insertAceInHand();
            break;
        case (cardNumber <= 312): $(element).addClass("ace-spades");
            insertAceInHand();
            break;
        case (cardNumber > 24): alert("The game has encountered a problem  Please redeal.");

    };
};

function insertAceInHand() {
    switch (true) {
        case (tempAceObj1.inHand == false):
            tempAceObj1.inHand = true;
            yourHand.push(tempAceObj1);
            break;

        case (tempAceObj2.inHand == false):
            tempAceObj2.inHand = true;
            yourHand.push(tempAceObj2);
            break;

        case (tempAceObj3.inHand == false):
            tempAceObj3.inHand = true;
            yourHand.push(tempAceObj3);
            break;

        case (tempAceObj4.inHand == false):
            tempAceObj4.inHand = true;
            yourHand.push(tempAceObj4);
            break;

        case (tempAceObj5.inHand == false):
            tempAceObj5.inHand = true;
            yourHand.push(tempAceObj5);
            break;

        case (tempAceObj6.inHand == false):
            tempAceObj6.inHand = true;
            yourHand.push(tempAceObj6);
            break;
    };
};

function displayDealerCard(element) {
    switch (true) {
        case (cardNumber <= 6): $(element).addClass("two-clubs");
            dealerHand.push(twoCardObj);
            break;
        case (cardNumber <= 12): $(element).addClass("two-diamonds");
            dealerHand.push(twoCardObj);
            break;
        case (cardNumber <= 18): $(element).addClass("two-hearts");
            dealerHand.push(twoCardObj);
            break;
        case (cardNumber <= 24): $(element).addClass("two-spades");
            dealerHand.push(twoCardObj);
            break;
        case (cardNumber <= 30): $(element).addClass("three-clubs");
            dealerHand.push(threeCardObj);
            break;
        case (cardNumber <= 36): $(element).addClass("three-diamonds");
            dealerHand.push(threeCardObj);
            break;
        case (cardNumber <= 42): $(element).addClass("three-hearts");
            dealerHand.push(threeCardObj);
            break;
        case (cardNumber <= 48): $(element).addClass("three-spades");
            dealerHand.push(threeCardObj);
            break;
        case (cardNumber <= 54): $(element).addClass("four-clubs");
            dealerHand.push(fourCardObj);
            break;
        case (cardNumber <= 60): $(element).addClass("four-diamonds");
            dealerHand.push(fourCardObj);
            break;
        case (cardNumber <= 66): $(element).addClass("four-hearts");
            dealerHand.push(fourCardObj);
            break;
        case (cardNumber <= 72): $(element).addClass("four-spades");
            dealerHand.push(fourCardObj);
            break;
        case (cardNumber <= 78): $(element).addClass("five-clubs");
            dealerHand.push(fiveCardObj);
            break;
        case (cardNumber <= 84): $(element).addClass("five-hearts");
            dealerHand.push(fiveCardObj);
            break;
        case (cardNumber <= 90): $(element).addClass("five-diamonds");
            dealerHand.push(fiveCardObj);
            break;
        case (cardNumber <= 96): $(element).addClass("five-spades");
            dealerHand.push(fiveCardObj);
            break;
        case (cardNumber <= 102): $(element).addClass("six-clubs");
            dealerHand.push(sixCardObj);
            break;
        case (cardNumber <= 108): $(element).addClass("six-hearts");
            dealerHand.push(sixCardObj);
            break;
        case (cardNumber <= 114): $(element).addClass("six-diamonds");
            dealerHand.push(sixCardObj);
            break;
        case (cardNumber <= 120): $(element).addClass("six-spades");
            dealerHand.push(sixCardObj);
            break;
        case (cardNumber <= 126): $(element).addClass("seven-clubs");
            dealerHand.push(sevenCardObj);
            break;
        case (cardNumber <= 132): $(element).addClass("seven-hearts");
            dealerHand.push(sevenCardObj);
            break;
        case (cardNumber <= 138): $(element).addClass("seven-diamonds");
            dealerHand.push(sevenCardObj);
            break;
        case (cardNumber <= 144): $(element).addClass("seven-spades");
            dealerHand.push(sevenCardObj);
            break;
        case (cardNumber <= 150): $(element).addClass("eight-clubs");
            dealerHand.push(eightCardObj);
            break;
        case (cardNumber <= 156): $(element).addClass("eight-hearts");
            dealerHand.push(eightCardObj);
            break;
        case (cardNumber <= 162): $(element).addClass("eight-diamonds");
            dealerHand.push(eightCardObj);
            break;
        case (cardNumber <= 168): $(element).addClass("eight-spades");
            dealerHand.push(eightCardObj);
            break;
        case (cardNumber <= 174): $(element).addClass("nine-clubs");
            dealerHand.push(nineCardObj);
            break;
        case (cardNumber <= 180): $(element).addClass("nine-hearts");
            dealerHand.push(nineCardObj);
            break;
        case (cardNumber <= 186): $(element).addClass("nine-diamonds");
            dealerHand.push(nineCardObj);
            break;
        case (cardNumber <= 192): $(element).addClass("nine-spades");
            dealerHand.push(nineCardObj);
            break;
        case (cardNumber <= 198): $(element).addClass("ten-clubs");
            dealerHand.push(tenCardObj);
            break;
        case (cardNumber <= 204): $(element).addClass("ten-diamonds");
            dealerHand.push(tenCardObj);
            break;
        case (cardNumber <= 210): $(element).addClass("ten-hearts");
            dealerHand.push(tenCardObj);
            break;
        case (cardNumber <= 216): $(element).addClass("ten-spades");
            dealerHand.push(tenCardObj);
            break;
        case (cardNumber <= 222): $(element).addClass("jack-clubs");
            dealerHand.push(jackCardObj);
            break;
        case (cardNumber <= 228): $(element).addClass("jack-diamonds");
            dealerHand.push(jackCardObj);
            break;
        case (cardNumber <= 234): $(element).addClass("jack-hearts");
            dealerHand.push(jackCardObj);
            break;
        case (cardNumber <= 240): $(element).addClass("jack-spades");
            dealerHand.push(jackCardObj);
            break;
        case (cardNumber <= 246): $(element).addClass("queen-clubs");
            dealerHand.push(queenCardObj);
            break;
        case (cardNumber <= 252): $(element).addClass("queen-hearts");
            dealerHand.push(queenCardObj);
            break;
        case (cardNumber <= 258): $(element).addClass("queen-diamonds");
            dealerHand.push(queenCardObj);
            break;
        case (cardNumber <= 264): $(element).addClass("queen-spades");
            dealerHand.push(queenCardObj);
            break;
        case (cardNumber <= 270): $(element).addClass("king-clubs");
            dealerHand.push(kingCardObj);
            break;
        case (cardNumber <= 276): $(element).addClass("king-diamonds");
            dealerHand.push(kingCardObj);
            break;
        case (cardNumber <= 282): $(element).addClass("king-hearts");
            dealerHand.push(kingCardObj);
            break;
        case (cardNumber <= 288): $(element).addClass("king-spades");
            dealerHand.push(kingCardObj);
            break;
        case (cardNumber <= 294): $(element).addClass("ace-clubs");
            dealerHand.push(aceCardObj);
            break;
        case (cardNumber <= 300): $(element).addClass("ace-diamonds");
            dealerHand.push(aceCardObj);
            break;
        case (cardNumber <= 306): $(element).addClass("ace-hearts");
            dealerHand.push(aceCardObj);
            break;
        case (cardNumber <= 312): $(element).addClass("ace-spades");
            dealerHand.push(aceCardObj);
            break;
        case (cardNumber > 24): alert("The game has encountered a problem  Please redeal.");

    };
};


function startNewHand() {
    $("#second-hand-first-card").removeClass();
    $("#second-hand-second-card").removeClass();
    $("#second-hand-third-card").removeClass();
    $("#second-hand-fourth-card").removeClass();
    $("#second-hand-fifth-card").removeClass();
    $("#second-hand-sixth-card").removeClass();
    //$("#second-hand-first-card").addClass("hide");
    //$("#second-hand-second-card").addClass("hide");
    //$("#second-hand-third-card").addClass("hide");
    //$("#second-hand-fourth-card").addClass("hide");
    //$("#second-hand-fifth-card").addClass("hide");
    //$("#second-hand-sixth-card").addClass("hide");
    pot = 0;
    yourHand = [];
    yourSecondHand = [];
    dealerHand = [];
    yourFirstCard.textContent = "";
    yourSecondCard.textContent = "";
    yourThirdCard.textContent = "";
    yourFourthCard.textContent = "";
    yourFifthCard.textContent = "";
    yourSixthCard.textContent = "";
    dealerFirstCard.textContent = "";
    dealerSecondCard.textContent = "";
    dealerThirdCard.textContent = "";
    dealerFourthCard.textContent = "";
    dealerFifthCard.textContent = "";
    dealerSixthCard.textContent = "";
    $("#your-first-card").removeClass();
    $("#your-second-card").removeClass();
    $("#your-third-card").removeClass();
    $("#your-fourth-card").removeClass();
    $("#your-fifth-card").removeClass();
    $("#your-sixth-card").removeClass();
    $("#dealer-first-card").removeClass();
    $("#dealer-second-card").removeClass();
    $("#dealer-third-card").removeClass();
    $("#dealer-fourth-card").removeClass();
    $("#dealer-fifth-card").removeClass();
    $("#dealer-sixth-card").removeClass();
    yourSecondCard.textContent = "";
    yourThirdCard.textContent = "";
    yourFourthCard.textContent = "";
    yourFifthCard.textContent = "";
    yourSixthCard.textContent = "";
    dealerFirstCard.textContent = "";
    dealerSecondCard.textContent = "";
    dealerThirdCard.textContent = "";
    dealerFourthCard.textContent = "";
    dealerFifthCard.textContent = "";
    dealerSixthCard.textContent = "";
    yourTotalDisplay.textContent = "Your Total";
    dealerTotalDisplay.textContent = "Dealer Total"; 
    message.textContent = "";

    bankroll = bankroll - 100;
    pot = 200;
    balance.textContent = bankroll;
    potDisplay.textContent = pot;
    $("#deal-button").addClass("hide");
    dealCardToYou();
    dealCardToDealer();  //need to add a function later to not show the dealer's first card, but we will still add to dealerHand array
    dealCardToYou();
    dealCardToDealer();

    
    
    getYourTotal();
    yourTotalDisplay.textContent = "Your Total is " + yourTotal;
    getDealerTotal();
    dealerTotalDisplay.textContent = "Dealer Total is " + dealerTotal;
    afterDeal();
};

function endHand() {

    $("#deal-button").removeClass("hide");
    $("#split-button").addClass("hide");
    $("#hit-button").addClass("hide");
    $("#hold-button").addClass("hide");
    $("#double-down-button").addClass("hide");
    resetTempAceObj();  
};

function resetTempAceObj() {
    tempAceObj1 = jQuery.extend(true, {}, aceCardObj);
    tempAceObj2 = jQuery.extend(true, {}, aceCardObj);
    tempAceObj3 = jQuery.extend(true, {}, aceCardObj);
    tempAceObj4 = jQuery.extend(true, {}, aceCardObj);
    tempAceObj5 = jQuery.extend(true, {}, aceCardObj);
    tempAceObj6 = jQuery.extend(true, {}, aceCardObj);
};

function afterDeal()  {
    if (dealerTotal === 21 && yourTotal === 21)  {
        message.textContent = "PUSH";
        bankroll = bankroll + 100;
        balance.textContent = bankroll;
        endHand();
    }
    else if (dealerTotal === 21)  {
        //  Dealer Wins Message ?Redeal?
        message.textContent = "Dealer Wins";
        //bankroll = bankroll - 100;
        //balance.textContent = bankroll;
        endHand();
    }
    else if (yourTotal === 21)  {
        //  Message BlackJack!  You win 1.5.  Update Bank ?Redeal?
        message.textContent = "You Win! BlackJack!";
        bankroll = bankroll + (pot * 1.5);
        balance.textContent = bankroll;
        endHand();
    }
    else if (yourHand[0].cardType == yourHand[1].cardType) {
        $("#split-button").removeClass("hide");
        $("#hit-button").removeClass("hide");
        $("#hold-button").removeClass("hide");
        $("#double-down-button").removeClass("hide");
    }
    else  {
        // Show Hit Button, Show Hold Button, Show Double Down Button
        $("#hit-button").removeClass("hide");
        $("#hold-button").removeClass("hide");
        $("#double-down-button").removeClass("hide");
    };
    
};

function youHit() {
    $("#double-down-button").addClass("hide");
    dealCardToYou();  
    getYourTotal();
    areYouOverWithAce();
    yourTotalDisplay.textContent = "Your Total is " + yourTotal;
    if (yourTotal > 21) {
        areYouOverWithAce();
        getYourTotal();
        yourTotalDisplay.textContent = "Your Total is " + yourTotal;
        message.textContent = "You Lose";
        endHand();
    }
    else {
        getYourTotal();
        yourTotalDisplay.textContent = "Your Total is " + yourTotal;
    };
};


$("#hit-button").click(youHit);

function dealerTurn() {
    if (dealerTotal > 21) {  //need to add code for the ACE
        dealerTotalDisplay.textContent = "Dealer Total is " + dealerTotal;
        message.textContent = "Dealer Busts! You win!";
        bankroll = bankroll + pot;
        balance.textContent = bankroll;
    }
    else if (dealerTotal >= 17 && dealerTotal === yourTotal) {
        dealerTotalDisplay.textContent = "Dealer Total is " + dealerTotal;
        message.textContent = "PUSH";
        bankroll = bankroll + (pot * 0.5);
        balance.textContent = bankroll;
    }
    else if (dealerTotal >= 17 && dealerTotal > yourTotal) {
        message.textContent = "You Lose";
    }
    else if (dealerTotal >= 17 && dealerTotal < yourTotal) {
        message.textContent = "You Win";
        bankroll = bankroll + pot;
        balance.textContent = bankroll;
    }
    else {
        dealCardToDealer();  //Need to figure out how to have it deal 1 card and then re-evaluate without it becoming an infinite loop
        getDealerTotal();
        dealerTotalDisplay.textContent = "Dealer Total is " + dealerTotal;
        dealerTurn();
    };
    //message.textContent = "Dealer Total is " + dealerTotal;
    endHand();
};


var bankroll = 50000;
var balance = document.getElementById("balance");
balance.textContent = bankroll;


function youHold() {
    $(".btn").addClass("hide");
    getYourTotal();
    //getYourTotal();
    ////dealerTotal = yourFirstCardObj.cardValue + yourSecondCardObj.cardValue + yourThirdCardObj.cardValue + yourFourthCardObj.cardValue + yourFifthCardObj.cardValue + yourSixthCardObj.cardValue;
    dealerTurn();
};

$("#hold-button").click(youHold);

var yourTotal;
var yourTotalDisplay = document.getElementById("your-total");

function getYourTotal() {
    yourTotal = 0;
    for (i = 0; i < yourHand.length; i++) {
        //if (yourHand[i] !== 'undefined');
        // might need a check for ACE
        var x = yourHand[i].cardValue;
        yourTotal +=  x;
    };
    return yourTotal;
};

var dealerTotal;
var dealerTotalDisplay = document.getElementById("dealer-total");
//dealerTotalDisplay.textContent = "Dealer Total is " + dealerTotal;

function getDealerTotal() {
    dealerTotal = 0;
    for (i = 0; i < dealerHand.length; i++) {
        //if (yourHand[i] !== 'undefined');
        // might need a check for ACE
        var x = dealerHand[i].cardValue;
        dealerTotal += x;
    };
    return dealerTotal;
};

//function areYouOver() {
//    if (yourTotal > 21) {
//        message.textContent = "You Lose.  Over 21";
//        //endHand();
//        //$("#deal-button").removeClass("hide");
//        //$("#split-button").addClass("hide");
//        //$("#hit-button").addClass("hide");
//        //$("#hold-button").addClass("hide");
//        //$("#double-down-button").addClass("hide");
//    };
//};
//function overTwentyOne() {
//    if (yourTotal > 21) {
//        endHand();
//    };
//};



function areYouOverWithAce() {
    if (yourTotal > 21) {
        //    while (yourHand[i].isAce == true)  {

        for (i = 0; i < yourHand.length; i++) {   //check for Ace in yourHand
            if (yourHand[i].isAce === true) {
                yourHand[i].cardValue = yourHand[i].cardValue - 10;
                yourHand[i].isAce = false;  //currently this is setting isAce to false for all cards in hand
                getYourTotal();
                return yourTotal;
            };
            
        };
    };
    return yourTotal;
};  //needs to be fixed.
function areYouOver() {
    if (yourTotal > 21) {
        message.textContent = "You Lose.  Over 21";
    };
};


$("#deal-button").click(startNewHand);

function doubleDown() {
    bankroll = bankroll - 100;
    pot = pot + 200;
    balance.textContent = bankroll;
    potDisplay.textContent = pot;
    youHit();

    if (yourTotal <= 21) {
        dealerTurn();
    };
};

$("#double-down-button").click(doubleDown);
var potTwoDisplay = document.getElementById("pot-two");


function split() {
    $("#pot-two").removeClass("hide");
    $("#pot-two-label").removeClass("hide");
    bankroll = bankroll - 100;
    balance.textContent = bankroll;
    potTwo = 200;
    potTwoDisplay.textContent = potTwo;
    
    var secondCardOriginalHand = yourHand[1];
    yourHand.pop();
    yourSecondHand.push(secondCardOriginalHand);
    $("#second-hand-first-card").addClass($("#your-second-card").attr('class'));
    $("#your-second-card").removeClass();
    yourSecondCard.textContent = "";
    dealCardToYou();
    afterDeal();
    $("#split-button").addClass("hide");
    getYourTotal();
    yourTotalDisplay.textContent = "Your Total is " + yourTotal;
    dealCardSecondHand();
};


$("#split-button").click(split);

