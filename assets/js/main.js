// Mobile Menu Toggle
const hamburger = document.querySelector('.navbar__hamburger');
const navLinks = document.querySelector('.navbar__links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Navbar Shadow on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});

// Smooth Scrolling for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal on Scroll (Optional)
const revealElements = document.querySelectorAll('.animate-slide-up');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
});

revealElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    revealObserver.observe(el);
});

// Order Form Enhancements
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    const orderType = document.getElementById('orderType');
    const deliveryAddressGroup = document.getElementById('deliveryAddressGroup');
    const deliveryAddress = document.getElementById('deliveryAddress');

    orderType.addEventListener('change', () => {
        if (orderType.value === 'delivery') {
            deliveryAddressGroup.style.display = 'block';
            deliveryAddress.required = true;
        } else {
            deliveryAddressGroup.style.display = 'none';
            deliveryAddress.required = false;
        }
    });

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        const orderDetails = document.getElementById('orderDetails').value;
        const orderTypeVal = orderType.value;
        const address = orderTypeVal === 'delivery' ? document.getElementById('deliveryAddress').value : 'N/A';
        const instructions = document.getElementById('specialInstructions').value || 'None';

        const message = `New Order from Negus Kota Takeaway!\n\n` +
                        `Name: ${name}\n` +
                        `Contact: ${contact}\n` +
                        `Order Type: ${orderTypeVal.charAt(0).toUpperCase() + orderTypeVal.slice(1)}\n` +
                        (orderTypeVal === 'delivery' ? `Delivery Address: ${address}\n` : '') +
                        `Order Details:\n${orderDetails}\n\n` +
                        `Special Instructions: ${instructions}`;

        window.location.href = `https://wa.me/27111234567?text=${encodeURIComponent(message)}`;
    });
}