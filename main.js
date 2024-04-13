document.getElementById('reminderButton').addEventListener('click', function() {
    setTimeout(function() {
        alert('Drink wat water!');
    }, 15 * 60 * 1000); // 15 minuten in milliseconden
});
