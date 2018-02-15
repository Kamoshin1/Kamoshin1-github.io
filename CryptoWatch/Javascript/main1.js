

////https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC&tsyms=USD&e=Coinbase&extraParams=your_app_name
/*
var xhr = new XMLHttpRequest();

//xhr.onload = function()  {
  if (xhr.status === 200)
}*/


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

    var year = currentTime.getFullYear();
    var month = currentTime.getMonth() + 1;
    var today = currentTime.getDate();

    var realTime = currentTime.toLocaleTimeString();

    var time = document.getElementById("time-placeholder");
    time.textContent = month + "/" + today + "/" + year;

    var timeTwo = document.getElementById("real-time");
    timeTwo.textContent = realTime;
};


var ajaxFunction = function () {

    $.ajax({
        type: "GET",
        url: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC&tsyms=USD&e=Coinbase&extraParams=your_app_name",
        success: function (data) {
            
            bitcoinCurrentPrice.textContent = data.DISPLAY.BTC.USD.PRICE;
            bitcoinPercentChange.textContent = data.DISPLAY.BTC.USD.CHANGEPCT24HOUR;
            ethereumCurrentPrice.textContent = data.DISPLAY.ETH.USD.PRICE;
            ethereumPercentChange.textContent = data.RAW.ETH.USD.CHANGEPCT24HOUR;
            litecoinCurrentPrice.textContent = data.DISPLAY.LTC.USD.PRICE;
            litecoinPercentChange.textContent = data.RAW.LTC.USD.CHANGEPCT24HOUR;
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
    if (bitcoinPercentChange.value > 0) {
        $("#bitcoin-percent-change").removeClass("percent-decrease");
        $("#bitcoin-percent-change").addClass("percent-increase");
    }
    else if (bitcoinPercentChange === 0) {
        $("#bitcoin-percent-change").removeClass("percent-increase");
        $("#bitcoin-percent-change").removeClass("percent-decrease");
    }
    else {
        $("#bitcoin-percent-change").removeClass("percent-increase");
        $("#bitcoin-percent-change").addClass("percent-decrease");
    };
};

function ethereumChange() {
    if (ethereumPercentChange.value > 0) {
        $("#ethereum-percent-change").removeClass("percent-decrease");
        $("#ethereum-percent-change").addClass("percent-increase");
    }
    else if (bitcoinPercentChange === 0) {
        $("#ethereum-percent-change").removeClass("percent-increase");
        $("#ethereum-percent-change").removeClass("percent-decrease");
    }
    else {
        $("#ethereum-percent-change").removeClass("percent-increase");
        $("#ethereum-percent-change").addClass("percent-decrease");
    };
};

function litecoinChange() {
    if (bitcoinPercentChange.value > 0) {
        $("#litecoin-percent-change").removeClass("percent-decrease");
        $("#litecoin-percent-change").addClass("percent-increase");
    }
    else if (bitcoinPercentChange === 0) {
        $("#litecoin-percent-change").removeClass("percent-increase");
        $("#litecoin-percent-change").removeClass("percent-decrease");
    }
    else {
        $("#litecoin-percent-change").removeClass("percent-increase");
        $("#litecoin-percent-change").addClass("percent-decrease");
    };
};


// Stock Exchange Indexes
var dowJonesCurrentPrice = document.getElementById("dow-jones-current-price");


var ajaxFunctionTwo = function () {

    $.ajax({
        type: "GET",
        url: "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=DJI&outputsize=full&apikey=BSQVFP4GHBMD5BW5",
        success: function (data) {

            dowJonesCurrentPrice.textContent = data['Time Series (Daily)']['1. open:'];
            //bitcoinPercentChange.textContent = data.DISPLAY.BTC.USD.CHANGEPCT24HOUR;
            //ethereumCurrentPrice.textContent = data.DISPLAY.ETH.USD.PRICE;
            //ethereumPercentChange.textContent = data.RAW.ETH.USD.CHANGEPCT24HOUR;
            //litecoinCurrentPrice.textContent = data.DISPLAY.LTC.USD.PRICE;
            //litecoinPercentChange.textContent = data.RAW.LTC.USD.CHANGEPCT24HOUR;
            //bitcoinChange();
            //ethereumChange();
            //litecoinChange();
            //lastUpdateTime();

        },
        complete: function (data) {
            setTimeout(ajaxFunction, 30000);

        }
    });
};

ajaxFunctionTwo();
setTimeout(ajaxFunctionTwo, interval);


function bitcoinChange() {
    if (bitcoinPercentChange.value > 0) {
        $("#bitcoin-percent-change").removeClass("percent-decrease");
        $("#bitcoin-percent-change").addClass("percent-increase");
    }
    else if (bitcoinPercentChange === 0) {
        $("#bitcoin-percent-change").removeClass("percent-increase");
        $("#bitcoin-percent-change").removeClass("percent-decrease");
    }
    else {
        $("#bitcoin-percent-change").removeClass("percent-increase");
        $("#bitcoin-percent-change").addClass("percent-decrease");
    };
};

function ethereumChange() {
    if (ethereumPercentChange.value > 0) {
        $("#ethereum-percent-change").removeClass("percent-decrease");
        $("#ethereum-percent-change").addClass("percent-increase");
    }
    else if (bitcoinPercentChange === 0) {
        $("#ethereum-percent-change").removeClass("percent-increase");
        $("#ethereum-percent-change").removeClass("percent-decrease");
    }
    else {
        $("#ethereum-percent-change").removeClass("percent-increase");
        $("#ethereum-percent-change").addClass("percent-decrease");
    };
};

function litecoinChange() {
    if (bitcoinPercentChange.value > 0) {
        $("#litecoin-percent-change").removeClass("percent-decrease");
        $("#litecoin-percent-change").addClass("percent-increase");
    }
    else if (bitcoinPercentChange === 0) {
        $("#litecoin-percent-change").removeClass("percent-increase");
        $("#litecoin-percent-change").removeClass("percent-decrease");
    }
    else {
        $("#litecoin-percent-change").removeClass("percent-increase");
        $("#litecoin-percent-change").addClass("percent-decrease");
    };
};


