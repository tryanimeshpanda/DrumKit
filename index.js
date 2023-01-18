//NO NEED to put semicolon at the end of the
var numberOfDrumButtons= document.querySelectorAll(".drum").length; //document.querySelectorAll(".drum")- SelectorAll//
for(var i=0;i<numberOfDrumButtons;i++)                              //gives us an array of elements present in that List//
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){ //.addEventListener has got 2 parameters//First one specifying What should it Listen to?// //Second on specifying what should it do once detected?//

        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });


    document.addEventListener("keydown",function(event) {
        makeSound(event.key);

        buttonAnimation(event.key);
    })
}
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1= new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2= new Audio("tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3= new Audio("tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4= new Audio("tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash= new Audio("crash.mp3");
            crash.play();
            break;
        case "k":
            var kick= new Audio("kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare= new Audio("snare.mp3");
            snare.play();
            break;
                    
        default:
             break;
    }
}


function buttonAnimation(currentkey) {
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}
