// Those who are at top will visible at top of browser's canvas.

// function formatDate(dateString) {
//     const date = new Date(dateString);
//     return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
// }

function renderTimeline() {
    const timelineContainer = document.getElementById('timeline');
    timelineContainer.innerHTML = projects.map(project => `
        <div class="timeline-item">
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
