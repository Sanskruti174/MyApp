

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#inputDiv");
var Output = document.querySelector("#outputDiv");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}
function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json() )
    .then(json => {
        var translatedText = json.contents.translated;
        Output.innerText = translatedText;
    })
};
btnTranslate.addEventListener("click",clickHandler);
