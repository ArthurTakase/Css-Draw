document.addEventListener("DOMContentLoaded", function(event) { 
    var currentUrl = window.location.href
    var params = (new URL(currentUrl)).searchParams;

    var movie = params.get("movie") ? params.get("movie") : "Movie"
    var theater =  params.get("theater") ? params.get("theater") : "2"
    var seat = params.get("seat") ? params.get("seat") : "D12"
    var date = params.get("date") ? params.get("date") : "10/01/2016"
    var price = params.get("price") ? params.get("price") : "5 USD"
    var number = params.get("number") ? params.get("number") : "0123456789"
    var hour = params.get("hour") ? params.get("hour") : "14:00 PM"

    document.getElementById('movie').textContent = movie
    document.getElementById('theater').textContent = theater
    document.getElementById('theater2').textContent = theater
    document.getElementById('seat').textContent = seat
    document.getElementById('seat2').textContent = seat
    document.getElementById('seat3').textContent = seat
    document.getElementById('date').textContent = date
    document.getElementById('date2').textContent = date
    document.getElementById('price').textContent = price
    document.getElementById('number').textContent = number
    document.getElementById('hour').textContent = hour
});