document.addEventListener("DOMContentLoaded", () => {
    // Plan Toggle Logic
    const toggleBtns = document.querySelectorAll(".toggle-btn");
    const prices = document.querySelectorAll(".price");

    toggleBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            toggleBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const type = btn.getAttribute("data-type");
            prices.forEach(price => {
                price.textContent = price.getAttribute(`data-${type}`);
            });
        });
    });

    // Tabs Navigation
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabs = document.querySelectorAll(".tab");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            tabs.forEach(tab => tab.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(btn.getAttribute("data-target")).classList.add("active");
        });
    });

    // Testimonial Rotator
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    setInterval(() => {
        testimonials[index].style.display = "none";
        index = (index + 1) % testimonials.length;
        testimonials[index].style.display = "block";
    }, 3000);
});
