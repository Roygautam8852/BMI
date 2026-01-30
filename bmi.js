document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const heightM = heightCm / 100; // Convert cm to meters

    const bmi = weight / (heightM * heightM);

    let category = '';
    
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
    
    // Display result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your BMI: ${bmi.toFixed(2)} - ${category}`;
});
