var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#inputDiv");
var outputD = document.querySelector("#outputDiv");
var ServerUrl = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationURL(text) {
    return ServerUrl + "?" + "text=" + text;
}

function errorhandler(error) {
    alert("error occured!", error);
}

function ClickHandler() {

    // console.log("clicked");
    // console.log(txtInput.value);
    var inputText = txtInput.value;


    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputD.innerText = translatedText;
        })
        .catch(errorhandler);


};

btnTranslate.addEventListener("click", ClickHandler);