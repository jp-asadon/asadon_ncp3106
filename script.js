document.addEventListener("DOMContentLoaded", function() {
    const timelineContents = document.querySelectorAll(".timeline-content");
    const timelineEmpties = document.querySelectorAll(".timeline-empty");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.4
    });

    timelineContents.forEach(content => {
        observer.observe(content);
    });

    timelineEmpties.forEach(empty => {
        observer.observe(empty);
    });
});
