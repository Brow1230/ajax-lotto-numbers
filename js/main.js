/********************************
Filename: main.js
Author: @
Description: 
Date: 
*********************************/
document.addEventListener("DOMContentLoaded", init);

let url ; //to be filled in 
    
let req = new Request(url, {
    method:"POST",
    body:"form"
});

let pages = [];


function init(){
    pages = document.querySelectorAll(".page");
    console.log(pages);
    
    
    
//  trying to organize pages
    
//    document.getElementById("btnSend").addEventListener("click", function (){
//            pages[0].target.toggleClass("show");
//            pages[1].target.toggleClass("show");
//        
//        });
//    document.getElementById("btnBack").addEventListener("click", function(){
//             pages[0].target.toggleClass("show");
//             pages[1].target.toggleClass("show");
//    });
}
    //let pages = [];
    //
    //function init () {
    //    pages = document.querySelectorAll(".page");
    //    console.log(pages);
    //}
