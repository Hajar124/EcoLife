document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.animate-product');
    
    products.forEach((product, index) => {
        setTimeout(() => {
            product.style.opacity = '1';
            product.style.transform = 'translateY(0)';
        }, index * 200); // Stagger the animations
    });
});
