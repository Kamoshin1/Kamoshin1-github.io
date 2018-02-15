

////https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC&tsyms=USD&e=Coinbase&extraParams=your_app_name


var bitcoinCurrentPrice = document.getElementById("bitcoin-current-price");
var bitcoinPercentChange = document.getElementById("bitcoin-percent-change");
var ethereumCurrentPrice = document.getElementById("ethereum-current-price");
var ethereumPercentChange = document.getElementById("ethereum-percent-change");
var litecoinCurrentPrice = document.getElementById("litecoin-current-price");
var litecoinPercentChange = document.getElementById("litecoin-percent-change");

var interval = 10000;

function lastUpdateTime() {
    var currentTime = new Date();
    currentTime.getTime();
    //var year = currentTime.getFullYear();
    //var month = currentTime.getMonth() + 1;
    //var today = currentTime.getDate();

    var realTime = currentTime.toLocaleTimeString();
    //var todayDate = month + "/" + today + "/" + year;
    var time = document.getElementById("time");
    time.textContent = "Last Updated:    " +  "      " + realTime;
};

var bitcoinPercentNum;
var ethereumPercentNum;
var litecoinPercentNum;
var bitcoinPercentStr;
var ethereumPercentStr;
var litecoinPercentStr;

var ajaxFunction = function () {

    $.ajax({
        type: "GET",
        url: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC&tsyms=USD&e=Coinbase&extraParams=your_app_name",
        success: function (data) {
            
            bitcoinCurrentPrice.textContent = data.DISPLAY.BTC.USD.PRICE;
            bitcoinPercentNum = data.DISPLAY.BTC.USD.CHANGEPCT24HOUR;
            bitcoinPercentStr = bitcoinPercentNum + "%";
            
            ethereumCurrentPrice.textContent = data.DISPLAY.ETH.USD.PRICE;
            ethereumPercentNum = (data.RAW.ETH.USD.CHANGEPCT24HOUR).toFixed(2);
            ethereumPercentStr = ethereumPercentNum + "%";
            
            litecoinCurrentPrice.textContent = data.DISPLAY.LTC.USD.PRICE;
            litecoinPercentNum = (data.RAW.LTC.USD.CHANGEPCT24HOUR).toFixed(2);
            litecoinPercentStr = litecoinPercentNum + "%";

            bitcoinChange();
            ethereumChange();
            litecoinChange();
            lastUpdateTime();

        },
        complete: function (data) {
            setTimeout(ajaxFunction, 10000);
        }
    });
};

ajaxFunction();
setTimeout(ajaxFunction, interval);


function bitcoinChange() {

    if (bitcoinPercentNum > 0) {
        $("#bitcoin-percent-change").removeClass("percent-decrease");
        $("#bitcoin-percent-change").addClass("percent-increase");
        bitcoinPercentStr = "+ " + bitcoinPercentStr;
        bitcoinPercentChange.textContent = bitcoinPercentStr;
    }
    else if (bitcoinPercentNum === 0) {
        $("#bitcoin-percent-change").removeClass("percent-increase");
        $("#bitcoin-percent-change").removeClass("percent-decrease");
        bitcoinPercentStr = bitcoinPercentStr;
        bitcoinPercentChange.textContent = bitcoinPercentStr;
    }
    else {
        $("#bitcoin-percent-change").removeClass("percent-increase");
        $("#bitcoin-percent-change").addClass("percent-decrease");
        bitcoinPercentStr = "- " + bitcoinPercentStr;
        bitcoinPercentChange.textContent = bitcoinPercentStr;
    };
};

function ethereumChange() {
    if (ethereumPercentNum > 0) {
        $("#ethereum-percent-change").removeClass("percent-decrease");
        $("#ethereum-percent-change").addClass("percent-increase");
        ethereumPercentStr = "+ " + ethereumPercentStr;
        ethereumPercentChange.textContent = ethereumPercentStr;
    }       
    else if (ethereumPercentNum === 0) {
        $("#ethereum-percent-change").removeClass("percent-increase");
        $("#ethereum-percent-change").removeClass("percent-decrease");
        ethereumPercentChange.textContent = ethereumPercentStr;
    }
    else {
        $("#ethereum-percent-change").removeClass("percent-increase");
        $("#ethereum-percent-change").addClass("percent-decrease");
        ethereumPercentStr = "- " + ethereumPercentStr;
        ethereumPercentChange.textContent = ethereumPercentStr;
    };
};

function litecoinChange() {
    if (litecoinPercentNum > 0) {
        $("#litecoin-percent-change").removeClass("percent-decrease");
        $("#litecoin-percent-change").addClass("percent-increase");
        litecoinPercentStr = "+ " + litecoinPercentStr;
        litecoinPercentChange.textContent = litecoinPercentStr;
    }
    else if (litecoinPercentNum === 0) {
        $("#litecoin-percent-change").removeClass("percent-increase");
        $("#litecoin-percent-change").removeClass("percent-decrease");
        litecoinPercentChange.textContent = litecoinPercentStr;
    }
    else {
        $("#litecoin-percent-change").removeClass("percent-increase");
        $("#litecoin-percent-change").addClass("percent-decrease");
        litecoinPercentStr = "- " + litecoinPercentStr;
        litecoinPercentChange.textContent = litecoinPercentStr;
    };
};



var additionalCurrencyName = document.getElementById("additional-currency-name");
var additionalCurrencyValue = document.getElementById("additional-currency-value");
var additionalCurrencyPercentChange = document.getElementById("additional-currency-percent-change");
var additionalCurrencyPercentNum;
var additionalPercentChangeStr;
var additionalPercentNum;

var additionalSymbol;


function getAdditionalURL() {
    switch ($('#additional-value option:selected').val()) {
        case "bitcoin-cash":
            viewBitcoinCash();
            break;
        case "cardano":
            viewCardano();
            break;
        case "ripple":
            viewRipple();
            break;
        case "stellar":
            viewStellar();
            break;
        case "verge":
            viewVerge();
            break;
        default:
            alert("You forgot to select a currency");
    }
};

function lastUpdateTimeAdditional() {
    var currentTime = new Date();
    currentTime.getTime();
    var realTime = currentTime.toLocaleTimeString();
    var timeTwo = document.getElementById("last-updated-additional");
    timeTwo.textContent = "Last Updated: " + realTime;
};

var additionalCurrencyValueNum;
var additionalCurrencyValueStr;

function viewBitcoinCash()  {
    var fullURL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BCH&tsyms=USD&e=Coinbase&extraParams=your_app_name";

    $.getJSON(fullURL, function (data)  {
        additionalCurrencyName.textContent = "Bitcoin Cash (BCH)";
        additionalCurrencyValueNum = (data.RAW.BCH.USD.PRICE).toFixed(2);
        additionalCurrencyValueStr = additionalCurrencyValueNum.toString();
        additionalCurrencyValue.textContent = "$" + additionalCurrencyValueStr;

        additionalCurrencyPercentNum = (data.RAW.BCH.USD.CHANGEPCT24HOUR).toFixed(2);
        additionalPercentChangeStr = additionalCurrencyPercentNum + "%";
        additionalCurrencyChange();
        lastUpdateTimeAdditional();
        $("#additional-crypto").removeClass("hidden");
        event.preventDefault();
    });
};

function viewCardano() {
    var fullURL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ADA&tsyms=USD";

    $.getJSON(fullURL, function (data) {
        additionalCurrencyName.textContent = "Cardano (ADA)";
        additionalCurrencyValueNum = (data.RAW.ADA.USD.PRICE).toFixed(2);
        additionalCurrencyValueStr = additionalCurrencyValueNum.toString();
        additionalCurrencyValue.textContent = "$" + additionalCurrencyValueStr;

        additionalCurrencyPercentNum = (data.RAW.ADA.USD.CHANGEPCT24HOUR).toFixed(2);
        additionalPercentChangeStr = additionalCurrencyPercentNum + "%";
        additionalCurrencyChange();
        lastUpdateTimeAdditional();
        $("#additional-crypto").removeClass("hidden");
        event.preventDefault();
    });
};

function viewRipple() {
    var fullURL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRP&tsyms=USD";

    $.getJSON(fullURL, function (data) {
        additionalCurrencyName.textContent = "Ripple (XRP)";
        additionalCurrencyValueNum = (data.RAW.XRP.USD.PRICE).toFixed(2);
        additionalCurrencyValueStr = additionalCurrencyValueNum.toString();
        additionalCurrencyValue.textContent = "$" + additionalCurrencyValueStr;


        additionalCurrencyPercentNum = (data.RAW.XRP.USD.CHANGEPCT24HOUR).toFixed(2);
        additionalPercentChangeStr = additionalCurrencyPercentNum + "%";
        additionalCurrencyChange();
        lastUpdateTimeAdditional();
        $("#additional-crypto").removeClass("hidden");
        event.preventDefault();
    });
};

function viewStellar() {
    var fullURL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XLM&tsyms=USD";

    $.getJSON(fullURL, function (data) {
        additionalCurrencyName.textContent = "Stellar (XLM)";
        additionalCurrencyValueNum = (data.RAW.XLM.USD.PRICE).toFixed(2);
        additionalCurrencyValueStr = additionalCurrencyValueNum.toString();
        additionalCurrencyValue.textContent = "$" + additionalCurrencyValueStr;

        additionalCurrencyPercentNum = (data.RAW.XLM.USD.CHANGEPCT24HOUR).toFixed(2);
        additionalPercentChangeStr = additionalCurrencyPercentNum + "%";
        additionalCurrencyChange();
        lastUpdateTimeAdditional();
        $("#additional-crypto").removeClass("hidden");
        event.preventDefault();
    });
};

function viewVerge() {
    var fullURL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XVG&tsyms=USD";

    $.getJSON(fullURL, function (data) {
        additionalCurrencyName.textContent = "Verge (XVG)";
        additionalCurrencyValueNum = (data.RAW.XVG.USD.PRICE).toFixed(2);
        additionalCurrencyValueStr = additionalCurrencyValueNum.toString();
        additionalCurrencyValue.textContent = "$" + additionalCurrencyValueStr;

        additionalCurrencyPercentNum = (data.RAW.XVG.USD.CHANGEPCT24HOUR).toFixed(2);
        additionalPercentChangeStr = additionalCurrencyPercentNum + "%";
        additionalCurrencyChange();
        lastUpdateTimeAdditional();
        $("#additional-crypto").removeClass("hidden");
        event.preventDefault();
    });
};

function additionalCurrencyChange()  {
    if (additionalCurrencyPercentNum > 0) {
        $("#additional-currency-percent-change").removeClass("percent-decrease");
        $("#additional-currency-percent-change").addClass("percent-increase");
        additionalPercentChangeStr = "+ " + additionalPercentChangeStr;
        additionalCurrencyPercentChange.textContent = additionalPercentChangeStr;
    }
    else if (additionalCurrencyPercentNum === 0) {
        $("#additional-currency-percent-change").removeClass("percent-increase");
        $("#additional-currency-percent-change").removeClass("percent-decrease");
        additionalCurrencyPercentChange.textContent = additionalPercentChangeStr;
    }
    else {
        $("#additional-currency-percent-change").removeClass("percent-increase");
        $("#additional-currency-percent-change").addClass("percent-decrease");
        additionalPercentChangeStr = "- " + additionalPercentChangeStr;
        additionalCurrencyPercentChange.textContent = additionalPercentChangeStr;
    };
};

var viewButton = document.getElementById("view-additional-currency");
viewButton.addEventListener('click', getAdditionalURL, false);


