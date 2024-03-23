var photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg", "photo7.jpg", "photo8.jpg", "photo9.jpg", "photo10.jpg", "photo11.jpg"/* Add all photo filenames here */];
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