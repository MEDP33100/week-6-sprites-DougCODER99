document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch("data.json");
        const songs = await response.json();
        songs.forEach(song => {
            const sprite = new Sprite(song);
            sprite.render();
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

class Sprite {
    constructor(song) {
        this.id = song.id;
        this.title = song.title;
        this.artist = song.artist;
        this.genre = song.genre;
        this.color = song.spriteColor;
    }

    render() {
        const container = document.getElementById("sprite-container");
        const spriteElement = document.createElement("div");
        spriteElement.classList.add("sprite");
        spriteElement.style.backgroundColor = this.color;
        spriteElement.innerHTML = `<p>${this.title} - ${this.artist}</p>`;

        container.appendChild(spriteElement);
    }
}
