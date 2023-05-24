document.addEventListener('DOMContentLoaded', function () {
    var raceCtx = document.getElementById('raceChart').getContext('2d');
    var squirrelCtx = document.getElementById('squirrelChart').getContext('2d');

    // Race Population Data
    var raceData = {
        labels: ['Small Mammals-RVS', 'Birds', 'Small Mammals-non-RVS', 'Raptors', 'Domestic', 'Terrestrial Raptile or Amphibian', 'Deer', 'Domestic Birds', 'Marine Mammals-seals only', 'Coyotes', 'Other', 'Domestic', 'Domestic Small Mammals-non-RVS'],
        datasets: [{
            label: 'Animal Class',
            data: [877, 845, 198, 178, 161, 141, 71, 56, 22, 18, 18, 14, 10],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#E7E9ED', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#E7E9ED', '#FFCE56', '#4BC0C0', '#E7E9ED'],
            borderWidth: 1
        }]
    };

    // Squirrel Population Data
    var squirrelData = {
        labels: ['Healthy', 'Unhealthy', 'Injured', 'N/A', 'DOA'],
        datasets: [{
            label: 'Animal Condition',
            data: [719, 649, 589, 390, 262],
            backgroundColor: ['#FF6384', '#FF6384','#FF6384','#FF6384','#FF6384'],
            borderWidth: 1
        }]
    };

    var options = {
        responsive: true
    };

    // Race Chart
    var raceChart = new Chart(raceCtx, {
        type: 'doughnut',
        data: raceData,
        options: options
    });

    // Squirrel Chart
    var squirrelChart = new Chart(squirrelCtx, {
        type: 'horizontalBar',
        data: squirrelData,
        options: options
    });




});
