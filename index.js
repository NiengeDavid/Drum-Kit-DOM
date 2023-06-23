const btn = document.querySelectorAll(".drum");

btn.forEach(btn => {
    btn.addEventListener('click', function() {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animateButton(buttonInnerHTML);
    });
})

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    animateButton(event.key);
});

function makeSound(key) {
    switch (key.toLowerCase()) {
        case "w":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play()
        break;

        case "a":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play()
        break;

        case "s":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play()
        break;

        case "d":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play()
        break;

        case "j":
            const snare = new Audio("sounds/snare.mp3");
            snare.play()
        break;

        case "k":
            const crash = new Audio("sounds/crash.mp3");
            crash.play()
        break;

        case "l":
            const kick = new Audio("sounds/kick-bass.mp3");
            kick.play()
        break;
    
        default:
            //console.log(key)
        break;
    }
}

function animateButton(currentKey){
    const animate = document.querySelector("." + currentKey.toLowerCase());
    animate.classList.add("pressed");
    setTimeout(function(){
        animate.classList.remove("pressed");
    }, 0.1);
}
