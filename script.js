document.getElementById('retirementForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe

    // Captura los valores del formulario
    const firstSurname = document.getElementById('firstSurname').value;
    const secondSurname = document.getElementById('secondSurname').value;
    const firstName = document.getElementById('firstName').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const birthdate = new Date(document.getElementById('birthdate').value);
    const averageSalary = parseFloat(document.getElementById('averageSalary').value);

    
    // Cálculo básico de jubilación
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthdate.getFullYear();
    let retirementAge = (gender === 'M') ? 65 : 60; // Edad de jubilación estándar
    let yearsUntilRetirement = retirementAge - age;

    // Fórmula simple para calcular la jubilación
    let estimatedPension = averageSalary * 0.6; // 60% del salario promedio

    // Guardar los resultados en localStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('firstSurname', firstSurname);
    localStorage.setItem('secondSurname', secondSurname);
    localStorage.setItem('yearsUntilRetirement', yearsUntilRetirement);
    localStorage.setItem('birthdate', document.getElementById('birthdate').value);
    localStorage.setItem('estimatedPension', estimatedPension.toFixed(2));

    // Redirigir a la página de resultados
    window.location.href = 'result.html';
});
