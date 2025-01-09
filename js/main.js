document.addEventListener('DOMContentLoaded', function() {
    const buttons = {
        '🌍': 'audio/earth.mp3',
        '⭐️': 'audio/star.mp3',
        '☀️': 'audio/sun.mp3',
        '❤️': 'audio/heart.mp3',
        '✋': 'audio/hand.mp3',
        '🌸': 'audio/flower.mp3'
    };

    const container = document.getElementById('buttons-container');

    Object.keys(buttons).forEach(symbol => {
        const button = document.createElement('button');
        button.textContent = symbol;
        button.style.fontSize = '6em'; // Taille du texte augmentée
        button.style.margin = '20px'; // Espace autour des boutons
        button.style.padding = '30px'; // Taille des boutons augmentée
        button.style.borderRadius = '50px'; // Bords très arrondis
        button.style.border = 'none'; // Bordure transparente
        button.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)'; // Ombre pour effet de bordure
        button.style.backgroundColor = '#f0f0f0'; // Couleur de fond
        button.addEventListener('click', () => {
            const audio = new Audio(buttons[symbol]);
            audio.play();
        });
        container.appendChild(button);
    });
});