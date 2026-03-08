// Fungsi untuk pindah dari Home ke Calculator
function goToCalculator() {
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('calc-screen').classList.add('active');
}

// Fungsi Hitung Kalori (Tetap yang lama)
function hitungKalori() {
    const berat = document.getElementById('weight').value;
    const durasi = document.getElementById('duration').value;
    const met = document.getElementById('exercise').value;

    if (berat === "" || durasi === "") {
        alert("PLEASE FILL ALL FIELDS");
        return;
    }

    const kalori = (met * 3.5 * berat) / 200 * durasi;
    const resultDiv = document.getElementById('result-display');
    const valueSpan = document.getElementById('caloriesValue');
    
    valueSpan.innerText = Math.round(kalori);
    resultDiv.style.display = 'block';
}