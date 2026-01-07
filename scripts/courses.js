const courses = [
    { code: "WDD 130", credits: 3, completed: true },
    { code: "WDD 131", credits: 3, completed: true },
    { code: "WDD 231", credits: 3, completed: false },
    { code: "CSE 110", credits: 2, completed: true },
    { code: "CSE 111", credits: 3, completed: false },
];

function displayCourses(filter = 'all') {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';

    const filtered = courses.filter(course =>
        filter === 'all' || course.code.startsWith(filter)
    );

    let totalCredits = 0;
    filtered.forEach(course => {
        const card = document.createElement('div');
        card.className = course - card ${ course.completed ? 'completed' : '' };
        card.textContent = ${ course.code } (${ course.credits } credits);
    courseList.appendChild(card);
    totalCredits += course.completed ? course.credits : 0; // or just total credits
});

document.getElementById('credits').textContent = totalCredits;
}

document.querySelectorAll('.filters button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        displayCourses(btn.dataset.filter);
    });
});

displayCourses();