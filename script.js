function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    function addSkills(skillList, containerId) {
        const container = document.getElementById(containerId);
        skillList.forEach(skill => {
            const article = document.createElement("article");

            const img = document.createElement("img");
            img.src = "./assets/checkmark.png";
            img.alt = "experience icon";
            img.classList.add("icon");

            const div = document.createElement("div");
            const h3 = document.createElement("h3");
            h3.textContent = skill.name;
            const p = document.createElement("p");
            p.textContent = skill.level;

            div.appendChild(h3);
            div.appendChild(p);
            article.appendChild(img);
            article.appendChild(div);

            container.appendChild(article);
        });
    }
    addSkills(frontEndSkills, "frontend-skills");
    addSkills(backEndSkills, "backend-skills");
});
