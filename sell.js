document.getElementById('sellForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form
    const title = document.getElementById('productTitle').value;
    const description = document.getElementById('productDescription').value;
    const price = document.getElementById('productPrice').value;
    const imageFile = document.getElementById('productImage').files[0];

    // Display the preview
    document.getElementById('previewTitle').innerText = "Title: " + title;
    document.getElementById('previewDescription').innerText = "Description: " + description;
    document.getElementById('previewPrice').innerText = "Price: $" + price;

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewImage = document.getElementById('previewImage');
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        }
        reader.readAsDataURL(imageFile);
    }
});
