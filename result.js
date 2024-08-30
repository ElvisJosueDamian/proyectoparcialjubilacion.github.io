// Recuperar los datos de localStorage
const firstName = localStorage.getItem('firstName');
const firstSurname = localStorage.getItem('firstSurname');
const secondSurname = localStorage.getItem('secondSurname');
const gender = localStorage.getItem('gender') === 'M' ? 'Masculino' : 'Femenino';
const birthdate = localStorage.getItem('birthdate');
const yearsUntilRetirement = localStorage.getItem('yearsUntilRetirement');
const estimatedPension = localStorage.getItem('estimatedPension');
const currentDate = new Date();
const birthDate = new Date(birthdate);
const currentAge = currentDate.getFullYear() - birthDate.getFullYear();

// Mostrar los resultados en la página
document.getElementById('fullName').textContent = `${firstName} ${firstSurname} ${secondSurname}`;
document.getElementById('gender').textContent = gender;
document.getElementById('birthdate').textContent = birthdate;
document.getElementById('currentAge').textContent = currentAge;
document.getElementById('yearsUntilRetirement').textContent = yearsUntilRetirement;
document.getElementById('estimatedPension').textContent = estimatedPension;
