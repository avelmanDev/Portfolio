document.getElementById('left').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#00b0f0';
    this.style.color = '#ffff00';
    this.style.fontSize = '2.5em';
    this.style.fontWeight = 'bold'; 
});

document.getElementById('left').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#212121';
    this.style.color = '#ffffff';
    this.style.fontSize = '2.0em';
    this.style.fontWeight = 'normal'; 
    
});

document.getElementById('left').addEventListener('click', function() {
    window.location.href = './ue_portfolio/index.html'; // Unreal Engine Portfolio URL
});

document.getElementById('right').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#ffff00'; 
    this.style.color = '#cf48d4';
    this.style.fontSize = '2.5em';
    this.style.fontWeight = 'bold'; 
});

document.getElementById('right').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#313131';
    this.style.color = '#ffffff';
    this.style.fontSize = '2.0em';
    this.style.fontWeight = 'normal'; 
});

document.getElementById('right').addEventListener('click', function() {
    window.location.href = './uefn_portfolio/index.html'; // UEFN Portfolio URL
});


