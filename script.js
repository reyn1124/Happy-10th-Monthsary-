function openLetter() {
    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });
}


// Create extra floating hearts

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "♥";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.color = "#e895bd";
    heart.style.opacity = Math.random() * 0.5 + 0.2;
    heart.style.fontSize = Math.random() * 15 + 10 + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let position = -20;

    const interval = setInterval(() => {

        position += 2;

        heart.style.bottom = position + "px";

        if (position > window.innerHeight) {

            clearInterval(interval);
            heart.remove();

        }

    }, 30);
}


setInterval(createHeart, 1200);
