
document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function () {
            const content = this.nextElementSibling;

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});


const map = L.map('map').setView([51.3510, -116.3250], 14
);

// Add a tile layer to the map (OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Define the hiking trail coordinates around Lake O'Hara
const trailCoordinates = [
    [51.3582, -116.3380], // Starting point
    [51.3575, -116.3395], // Trail point 1
    [51.3540, -116.3340], // Trail point 2
    [51.3530, -116.3340], // Trail point 3
    [51.3525, -116.3330], // Trail point 4
    [51.3520, -116.3310], // Trail point 5
    [51.3490, -116.3300], // Trail point 6
    [51.3480, -116.3300], // Trail point 7
    [51.3450, -116.3270], // Trail point 8
    [51.3460, -116.3250], // Trail point 9
    [51.3480, -116.3250], // Trail point 10
    [51.3495, -116.3230], // Trail point 11
    [51.3440, -116.3175], // Trail point 12
    [51.3460, -116.3170], // Trail point 13
    [51.3525, -116.3215], // Trail point 14
    [51.3565, -116.3175], // Trail point 15
    [51.3545, -116.3100], // Trail point 16
    [51.3548, -116.3095], // Trail point 17
    [51.3545, -116.3090], // Trail point 18
    [51.3550, -116.3085], // Trail point 19
    [51.3565, -116.3100], // Trail point 20
    [51.3585, -116.3137], // Trail point 21
    [51.3589, -116.3190], // Trail point 22
    [51.3580, -116.3210], // Trail point 23
    [51.3575, -116.3220], // Trail point 24
    [51.3575, -116.3245], // Trail point 25
    [51.3583, -116.3260], // Trail point 26
    [51.3586, -116.3260], // Trail point 27
    [51.3587, -116.3263], // Trail point 28
    [51.3587, -116.3267], // Trail point 29
    [51.3585, -116.3279], // Trail point 30
    [51.3583, -116.3276], // Trail point 31
    [51.3581, -116.3280], // Trail point 32
    [51.3579, -116.3278], // Trail point 33
    [51.3578, -116.3291], // Trail point 34
    [51.3579, -116.3299], // Trail point 35
    [51.3576, -116.3320], // Trail point 36
    [51.3577, -116.3327], // Trail point 37
    [51.3575, -116.3333], // Trail point 38
    [51.3576, -116.3352], // Trail point 39
    [51.3582, -116.3359], // Trail point 40
    [51.3585, -116.3365], // Trail point 41
    [51.3585, -116.3365], // Trail point 42
    [51.3582, -116.3380], // Ending point
];

// Add a polyline to the map using the trail coordinates with track symbols
L.polyline(trailCoordinates, {
    color: 'orange',
    weight: 5,
    opacity: 0.8
}).addTo(map);


