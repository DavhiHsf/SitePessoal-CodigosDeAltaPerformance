function navigateTo(url) {
    window.location.href = url;
    
}

document.addEventListener('DOMContentLoaded', function() {
    
    const ajustarFonteBtn = document.getElementById('ajustar-fonte-btn');
    const fontAdjuster = document.getElementById('ajustar-fonte');
    const increaseFontButton = document.getElementById('increaseFont');
    const decreaseFontButton = document.getElementById('decreaseFont');
    const content = document.getElementById('content');
    
    let currentFontSize = 16; // Tamanho de fonte inicial

    ajustarFonteBtn.addEventListener('click', function() {
        // Mostrar ou esconder o bloco flutuante
        if (fontAdjuster.style.display === 'none' || fontAdjuster.style.display === '') {
            const rect = ajustarFonteBtn.getBoundingClientRect();
            fontAdjuster.style.display = 'block';
            fontAdjuster.style.top = `${rect.bottom}px`;
            fontAdjuster.style.left = `${rect.left}px`;
        } else {
            fontAdjuster.style.display = 'none';
        }
    });

    increaseFontButton.addEventListener('click', function() {
        currentFontSize += 2;
        content.style.fontSize = `${currentFontSize}px`;
    });

    decreaseFontButton.addEventListener('click', function() {
        currentFontSize -= 2;
        content.style.fontSize = `${currentFontSize}px`;
    });
});
