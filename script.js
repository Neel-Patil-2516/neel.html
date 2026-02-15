function showQuestion() {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('question').classList.remove('hidden');
}

const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    // Moves the button to a random spot within the window
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

function celebrate() {
    document.getElementById('question').classList.add('hidden');
    document.getElementById('success').classList.remove('hidden');
    
    // Launch emoji celebration
    for(let i=0; i<40; i++) {
        setTimeout(spawnEmoji, i * 100);
    }
}

function spawnEmoji() {
    const emojis = ['🎀', '🍓', '💖', '🧸', '🍭'];
    const el = document.createElement('div');
    el.className = 'falling-emoji';
    el.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = Math.random() * 20 + 20 + 'px';
    el.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
}


setInterval(spawnEmoji, 700);