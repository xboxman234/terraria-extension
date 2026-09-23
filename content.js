var coll = document.getElementsByClassName("main-heading");
var i;

//get all the boss titles
for (i = 0; i < coll.length; i++) {
    
    


    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        while (content) {
            
            if (content.style.display === "" ) {
                content.style.display = "none";
            } else  {
                content.style.display = "";
            };
            content = content.nextElementSibling;
        }



    });
    coll[i].click();
}


/*

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

*/

var coll = document.getElementsByClassName("mw-headline");
var i;

//get all the boss titles
for (i = 0; i < coll.length; i++) {
    
    coll[i].parentElement.onmouseenter = function()  {
        console.log("should be woeking");
        
        this.style.backgroundColor = "white";
        this.style.color = "black";
    };
    coll[i].parentElement.onmouseleave = function()  {
        this.style.backgroundColor = "";
        this.style.color = "";
    };


    coll[i].parentElement.addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        while (!(content.tagName === "H2")) {
            console.log(content.tagName);
            console.log("h9i");
            console.log(content);
            if (content.style.display === "flex" || content.tagName === "P") {
                content.style.display = "none";
            } else if (content.tagName === "DIV") {
                content.style.display = "flex";
            };
            content = content.nextElementSibling;
        }



    });
    coll[i].parentElement.click();
}