document.addEventListener("DOMContentLoaded", function () {
    hideAllSections();
});

function showSection(sectionId) {
    hideAllSections();

    if (sectionId === 'all') {
        var sections = document.querySelectorAll('.content-section');
        sections.forEach(function (section) {
            section.classList.add('active');
        });
    } else {
        var section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('active');
        }
    }
}

function hideAllSections() {
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });
}
