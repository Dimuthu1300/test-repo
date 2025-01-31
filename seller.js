document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("product-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        //get values from input fields
        const productData = {
            product: document.getElementById("product").value.trim(),
            productType: document.getElementById("Type").value.trim(),
            description: document.getElementById("description").value.trim(),
            amount: document.getElementById("amount").value.trim(),
            sellerName: document.getElementById("sellername").value.trim(),
            sellerContact: document.getElementById("sellercontact").value.trim(),
            district: document.getElementById("district").value.trim(),
            city: document.getElementById("city").value.trim()
        };

        //validation 
        if (!productData.product || !productData.productType || !productData.description || 
            !productData.amount || !productData.sellerName || !productData.sellerContact ||
            !productData.district || !productData.city) {
            alert("Please fill out all required fields.");
            return;
        }

        if (!/^[0-9]{10,15}$/.test(productData.sellerContact)) {
            alert("Please enter a valid contact number.");
            return;
        }

        alert("Product added successfully!");

        console.log(productData);
    });
});
