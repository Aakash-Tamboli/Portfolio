// Those who are at top will visible at top of browser's canvas.

const projects = [
    {
        id: 5,
        title: "Analytics Dashboard",
        description: "Developed a comprehensive analytics dashboard for tracking key performance indicators.",
        date: "2023-12-18",
        tags: ["Analytics", "Dashboard", "Data Visualization"]
    },
    {
        id: 4,
        title: "E-commerce Integration",
        description: "Integrated payment gateways and shopping cart functionality into the main platform.",
        date: "2023-09-05",
        tags: ["E-commerce", "Integration", "API"]
    },
    {
        id: 3,
        title: "Database Migration",
        description: "Migrated legacy database systems to a new cloud-based solution, improving performance by 40%.",
        date: "2023-06-10",
        tags: ["Database", "Cloud", "Backend"]
    },
    {
        id: 2,
        title: "Mobile App Launch",
        description: "Successfully launched the company's first mobile application on both iOS and Android platforms.",
        date: "2023-03-22",
        tags: ["Mobile", "React Native", "Product Launch"]
    },
    {
        id: 1,
        title: "Website Redesign",
        description: "Complete overhaul of the company website with modern design principles and improved user experience.",
        date: "2023-01-15",
        tags: ["Web Design", "UX", "Frontend"]
    }
];

function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
}

function renderTimeline() {
    const timelineContainer = document.getElementById('timeline');
    timelineContainer.innerHTML = projects.map(project => `
        <div class="timeline-item">
            <div class="date-circle">
                <span class="date-text">${formatDate(project.date)}</span>
            </div>
            <div class="project-card">
                <h2 class="text-xl font-semibold mb-2">${project.title}</h2>
                <p class="text-gray-600 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${project.tags.map(tag => `<span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function animateTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        item.classList.add('animated');
                    }, index * 200);
                    observer.unobserve(item);
                }
            });
        }, { threshold: 0.2 });
        observer.observe(item);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderTimeline();
    animateTimelineItems();
});
