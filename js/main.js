document.addEventListener("DOMContentLoaded", init);
let uri = "https://davidst.edumedia.ca/mad9014/nums.php";

function init() {
    document.getElementById("btnSend").addEventListener("click", getData);

}

function getData() {

    let formdata = new FormData();
    formdata.append("digits", document.getElementById("digits").value);
    formdata.append("max", document.getElementById("max").value);
    let request = new Request(uri, {
        method: "POST",
        mode: "cors",
        body: formdata
    });
    fetch(request)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (err) {
            alert("error:" + err.message);
        })
}
