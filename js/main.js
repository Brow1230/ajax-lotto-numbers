document.addEventListener("DOMContentLoaded", init);
let uri = "https://davidst.edumedia.ca/mad9014/nums.php";
let pages = [];

function init() {

    document.getElementById("btnSend").addEventListener("click", getData); //sends data

    pages = document.querySelectorAll(".page")
    console.log(pages);
    document.getElementById("btnBack").addEventListener("click", function () {
        pages[0].classList.toggle("hidden");
        pages[1].classList.toggle("hidden");
        let ul = document.querySelector(".num_list");
        ul.textContent = " ";
        
    });

    document.getElementById("btnSend").addEventListener("click", function () {
        pages[0].classList.toggle("hidden");
        pages[1].classList.toggle("hidden");
    });
    document.getElementById("btnBack").addEventListener("click", )
}
/////////////////////////////////////////
///function to communicate with server///
/////////////////////////////////////////
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
        .then(function (jsonData) {
            console.log(jsonData.numbers);
        
        


            let ul = document.querySelector(".num_list");
                console.log(ul)
            let df = new DocumentFragment();
             jsonData.numbers.forEach(function (item, index) {
                let li = document.createElement("li");
                console.log(li)

                li.innerHTML = item;
                console.log(item)
                ul.appendChild(li)

               
            })
            ul.appendChild(df);
        })
        .catch(function (err) {
            alert("error: " + err.message);
        })
}
//////////////////////////////
///function to change pages///
//////////////////////////////
let pageChange = function (pages) {
    for (let i = 0; i < pages.length; i++)
        if (pages == i) {
            pages[i].addClass("hidden");
        } else {
            pages[i].removeClass("hidden");
        }
}
