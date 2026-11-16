const form = document.getElementById("orderForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const dish = document.getElementById("dish").value;

    message.textContent =
        "Thank you, " + name +
        "! Your order for " + dish +
        " has been received.";

    form.reset();
});