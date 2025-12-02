// Vérifier si l'utilisateur est connecté
const patient = JSON.parse(localStorage.getItem('patient'));
if(!patient) {
    alert("Veuillez vous connecter !");
    window.location.href = "app.html"; // page de connexion
}

// Afficher / masquer les sections
function showSection(id){
    document.querySelectorAll('.form-section').forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}
// Afficher profil par défaut
showSection('profile');

// Déconnexion
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('patient');
    window.location.href = "app.html";
});

// Charger infos patient
window.addEventListener('load', () => {
    document.getElementById('profileName').value = patient.name || '';
    document.getElementById('profileEmail').value = patient.email || '';
    document.getElementById('profilePhone').value = patient.phone || '';
    document.getElementById('profileAddress').value = patient.address || '';
    document.getElementById('profileAge').value = patient.age || '';
    document.getElementById('profileAllergies').value = patient.allergies || '';
    document.getElementById('profileInsurance').value = patient.insurance || '';
});

// Mettre à jour profil
document.getElementById('profileForm').addEventListener('submit', e => {
    e.preventDefault();
    const updatedPatient = {
        name: document.getElementById('profileName').value,
        email: document.getElementById('profileEmail').value,
        phone: document.getElementById('profilePhone').value,
        address: document.getElementById('profileAddress').value,
        age: document.getElementById('profileAge').value,
        allergies: document.getElementById('profileAllergies').value,
        insurance: document.getElementById('profileInsurance').value
    };
    localStorage.setItem('patient', JSON.stringify(updatedPatient));
    alert("Profil mis à jour !");
});

// Rendez-vous
document.getElementById('appointmentForm').addEventListener('submit', e => {
    e.preventDefault();
    alert(`Rendez-vous réservé avec ${document.getElementById('appointmentDoctor').value}`);
});

// Avis
document.getElementById('reviewForm').addEventListener('submit', e => {
    e.preventDefault();
    alert(`Avis envoyé pour ${document.getElementById('reviewDoctor').value}`);
    document.getElementById('reviewForm').reset();
});
