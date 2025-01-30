function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const resultDiv = document.getElementById('result');

    const birthdate = new Date(birthdateInput.value);
    const today = new Date();

    if (isNaN(birthdate)) {
        resultDiv.textContent = "Please enter a valid date.";
        return;
    }

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();

    if (months < 0 || (months === 0 && today.getDate() < birthdate.getDate())) {
        years--;
        months += 12;
    }

    resultDiv.innerHTML = `You are ${years} years and ${months} months old.`;
}