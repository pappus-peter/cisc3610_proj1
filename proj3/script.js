document.addEventListener('DOMContentLoaded', () => {
    const petForm = document.getElementById('petForm');
    const resultDiv = document.getElementById('result');
    const petAgeInput = document.getElementById('petAge');
    const speciesRadios = document.getElementsByName('species');

    // Check if localStorage has saved values
    if (localStorage.getItem('petAge')) {
        petAgeInput.value = localStorage.getItem('petAge');
    }

    // Check if localStorage has saved species
    if (localStorage.getItem('species')) {
        const savedSpecies = localStorage.getItem('species');
        for (let i = 0; i < speciesRadios.length; i++) {
            if (speciesRadios[i].value === savedSpecies) {
                speciesRadios[i].checked = true;
            }
        }
    }

    // Event listener for form submission
    petForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get selected species
        let species;
        for (let i = 0; i < speciesRadios.length; i++) {
            if (speciesRadios[i].checked) {
                species = speciesRadios[i].value;
                break;
            }
        }

        // Get pet age from input
        const petAge = parseInt(petAgeInput.value);

        // Convert pet age to human age
        let humanAge;
        if (species === 'cat') {
            humanAge = petAge * 4;
        } else if (species === 'dog') {
            humanAge = 10 + petAge * 5;
        } else if (species === 'fish') {
            humanAge = petAge * 20;
        }

        // Display the result
        resultDiv.innerHTML = `Your ${species} is approximately ${humanAge} years old in human years.`;

        // Save pet age and species in localStorage
        localStorage.setItem('petAge', petAge);
        localStorage.setItem('species', species);
    });
});
