var photos = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg", "images/photo4.jpg", "images/photo5.jpg", "images/photo6.jpg", "images/photo7.jpg", "images/photo8.jpg", "images/photo9.jpg", "images/photo10.jpg", "images/photo11.jpg"/* Add all photo filenames here */];
var currentPhotoIndex = 0; // Assuming the first photo is displayed initially

// Adjusted changePhoto function
function changePhoto(index) {
    if (index >= 0 && index < photos.length) {
        currentPhotoIndex = index;
        document.getElementById('displayed-photo').src = photos[currentPhotoIndex];
    }
}

// Next photo function
document.getElementById('next-photo').addEventListener('click', function() {
    var newIndex = (currentPhotoIndex + 1) % photos.length; // Loop back to start
    changePhoto(newIndex);
});

// Previous photo function
document.getElementById('prev-photo').addEventListener('click', function() {
    var newIndex = (currentPhotoIndex - 1 + photos.length) % photos.length; // Loop back to end
    changePhoto(newIndex);
});
