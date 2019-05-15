/* Manejo del DOM */
window.addEventListener('load', function() {
    fetch('data/worldbank/worldbank.json').then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
    });
});