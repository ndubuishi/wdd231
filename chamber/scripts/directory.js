document.addEventListener('DOMContentLoaded', async () => {
    // Load members
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error loading members:', error);
    }

    // Toggle views
    document.getElementById('grid-view').addEventListener('click', () => {
        document.getElementById('directory').classList.add('grid-view');
        document.getElementById('directory').classList.remove('list-view');
    });

    document.getElementById('list-view').addEventListener('click', () => {
        document.getElementById('directory').classList.add('list-view');
        document.getElementById('directory').classList.remove('grid-view');
    });

    // Footer dates
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastmodified').textContent = document.lastModified;
});

function displayMembers(members) {
    const directory = document.getElementById('directory');
    directory.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');

        const level = member.membership === 3 ? 'Gold' : member.membership === 2 ? 'Silver' : 'Member';

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo">
            <h3>${member.name} <span class="level">${level}</span></h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>${member.info}</p>
        `;
        directory.appendChild(card);
    });
}