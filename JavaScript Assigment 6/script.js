const countdown = () => {
    const now = new Date();
    const futureDate = new Date("2024-06-17T00:00:00");

    const difference = futureDate - now;

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // document.getElementById("years").textContent = years.toString().padStart(2, "0");
    document.getElementById("months").textContent ="TOTAL MONTHS LEFT : " + months.toString().padStart(2, "0");
    document.getElementById("days").textContent = "TOTAL DAYS LEFT : " + days.toString().padStart(2, "0");
    document.getElementById("hours").textContent ="TOTAL HOUR'S LEFT : " + hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent ="TOTAL MINUTES LEFT : " + minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent ="TOTAL SECOND LEFT : " + seconds.toString().padStart(2, "0");
};

countdown();
setInterval(countdown, 1000);
