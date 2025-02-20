// Sample blog posts data
const blogPosts = [
    {
        title: "Getting Started with Web Development",
        date: "January 15, 2024",
        excerpt: "Learn the basics of web development and start your journey as a developer.",
        image: "blog1.jpg"
    },
    {
        title: "Design Principles Every Developer Should Know",
        date: "January 22, 2024",
        excerpt: "Essential design principles that will help you create better user interfaces.",
        image: "blog2.jpg"
    },
    {
        title: "The Future of Web Development",
        date: "January 29, 2024",
        excerpt: "Exploring upcoming trends and technologies in web development.",
        image: "blog3.jpg"
    }
];

// Function to load blog posts
function loadBlogPosts() {
    const blogGrid = document.getElementById('blogPosts');
    
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        
        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="blog-post-content">
                <h3>${post.title}</h3>
                <p class="date">${post.date}</p>
                <p>${post.excerpt}</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        `;
        
        blogGrid.appendChild(postElement);
    });
}

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load blog posts when the page loads
window.addEventListener('load', loadBlogPosts);