function calculateDateDifference() {
    let dateLeft = new Date(document.getElementById('dateLeft').value);
    let dateRight = new Date(document.getElementById('dateRight').value);

    // Calcul de la différence en millisecondes
    let differenceInMs = Math.abs(dateRight - dateLeft);

    // Conversion de la différence en jours
    let differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

    document.getElementById('dateDifference').textContent = "Différence de jours : " + differenceInDays;
}

function calculateTimeDifference() {
    let timeLeft = document.getElementById('timeLeft').value;
    let dateRightTime = new Date(document.getElementById('dateRightTime').value);

    let timeLeftArray = timeLeft.split(':');
    let hoursLeft = parseInt(timeLeftArray[0]);
    let minutesLeft = parseInt(timeLeftArray[1]);

    let currentDate = new Date();
    let dateRight = new Date(dateRightTime.getFullYear(), dateRightTime.getMonth(), dateRightTime.getDate(), hoursLeft, minutesLeft);

    // Calcul de la différence en millisecondes
    let differenceInMs = Math.abs(dateRight - currentDate);

    // Conversion de la différence en heures
    let differenceInHours = Math.ceil(differenceInMs / (1000 * 60 * 60));

    document.getElementById('timeDifference').textContent = "Différence d'heures : " + differenceInHours;
}