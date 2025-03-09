function changerOnglet(nomOnglet) {
    // Mise à jour du titre principal
    const titre = document.getElementById('titre-principal');
    titre.textContent = `Devenez ${nomOnglet.charAt(0).toUpperCase() + nomOnglet.slice(1)}`;

    // Désactivation de tous les onglets
    document.querySelectorAll('.panneau-formulaire').forEach(panneau => {
        panneau.classList.remove('actif');
    });
    
    document.querySelectorAll('.bouton-onglet').forEach(bouton => {
        bouton.classList.remove('actif');
    });

    // Activation de l'onglet sélectionné
    document.getElementById(`formulaire-${nomOnglet}`).classList.add('actif');
    event.currentTarget.classList.add('actif');
}

// Gestion de la soumission des formulaires
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Demande envoyée avec succès !\n(NOTE: Ceci est une simulation)');
        form.reset();
    });
});