// <!-- copy code js -->

// HTML BOx JS Code
let HTMLBox = document.getElementById("HTMLBox");
let HTMLButton = document.getElementById("HTMLButton");

HTMLButton.onclick = function() {
    HTMLBox.select();
    document.execCommand("copy");
    HTMLButton.innerText = "Codes Copied"
}

// CSS Box Js Code
let CSSBox = document.getElementById("CSSBox");
let CSSButton = document.getElementById("CSSButton");

CSSButton.onclick = function() {
        CSSBox.select();
        document.execCommand("copy");
        CSSButton.innerText = "Codes Copied"
    }
    // JavaScript BOx JS Code
let JSBox = document.getElementById("JSBox");
let JSButton = document.getElementById("JSButton");

JSButton.onclick = function() {
    JSBox.select();
    document.execCommand("copy");
    JSButton.innerText = "Codes Copied"
}

// <!-- download btn js -->
const downloadBtn = document.querySelector(".download-btn");
const countdown = document.querySelector(".countdown");
const pleaseWaitText = document.querySelector(".pleaseWait-text");
const manualDownloadText = document.querySelector(".manualDownload-text");
const manualDownloadLink = document.querySelector(".manualDownload-link");
var timeLeft = 5;

downloadBtn.addEventListener("click", () => {
    downloadBtn.style.display = "none";
    countdown.innerHTML = "Please wait in... <span>" + timeLeft + "</span> seconds."; //for quick start of countdown

    var downloadTimer = setInterval(function timeCount() {
        timeLeft -= 1;
        countdown.innerHTML = "Please wait in... <span>" + timeLeft + "</span> seconds.";

        if (timeLeft <= 0) {
            clearInterval(downloadTimer);
            pleaseWaitText.style.display = "block";
            let download_href = "social-button.rar"; //enter the downloadable file link URL here
            window.location.href = download_href;
            manualDownloadLink.href = download_href;

            setTimeout(() => {
                pleaseWaitText.style.display = "none";
                manualDownloadText.style.display = "block";
            }, 0);
        }
    }, 1000);
});