// 1. Ses dosyalarını tanımla (Dosya yollarını kendi dosyalarına göre ayarla)
const hoverSound = new Audio('./sounds/hover.mp3'); 
const clickSound = new Audio('./sounds/click.mp3');

// İsteğe bağlı: Ses seviyelerini ayarla (0.0 ile 1.0 arasında)
hoverSound.volume = 1.0;
clickSound.volume = 1.0;

// --- UNREAL ENGINE (Sol) ---
document.getElementById('left').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#00b0f0';
    this.style.color = '#ffff00';
    this.style.fontSize = '2.5em';
    this.style.fontWeight = 'bold'; 
    
    // Sesi başa sar (hızlı geçişlerde sesin takılmasını önler) ve çal
    hoverSound.currentTime = 0; 
    hoverSound.play();
});

document.getElementById('left').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#313131'; 
    this.style.color = '#ffffff';
    this.style.fontSize = '2.0em';
    this.style.fontWeight = 'normal'; 
});

document.getElementById('left').addEventListener('click', function() {
    clickSound.currentTime = 0;
    clickSound.play();
    
    // Sesin duyulması için sayfa yönlendirmesini biraz geciktir (300ms)
    setTimeout(() => {
        window.location.href = './ue_portfolio/index.html'; 
    }, 300);
});

// --- ROBLOX (Orta) ---
document.getElementById('center').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#00ff95'; 
    this.style.color = '#ffff00';
    this.style.fontSize = '2.5em';
    this.style.fontWeight = 'bold'; 
    
    hoverSound.currentTime = 0; 
    hoverSound.play();
});

document.getElementById('center').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#2a2a2a'; 
    this.style.color = '#ffffff';
    this.style.fontSize = '2.0em';
    this.style.fontWeight = 'normal'; 
});

document.getElementById('center').addEventListener('click', function() {
    clickSound.currentTime = 0;
    clickSound.play();
    
    setTimeout(() => {
        window.location.href = './roblox_portfolio/index.html'; 
    }, 300);
});

// --- UEFN (Sağ) ---
document.getElementById('right').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#ffff00'; 
    this.style.color = '#cf48d4';
    this.style.fontSize = '2.5em';
    this.style.fontWeight = 'bold'; 
    
    hoverSound.currentTime = 0; 
    hoverSound.play();
});

document.getElementById('right').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#212121';
    this.style.color = '#ffffff';
    this.style.fontSize = '2.0em';
    this.style.fontWeight = 'normal'; 
});

document.getElementById('right').addEventListener('click', function() {
    clickSound.currentTime = 0;
    clickSound.play();
    
    setTimeout(() => {
        window.location.href = './uefn_portfolio/index.html'; 
    }, 300);
});