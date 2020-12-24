// to remove the auto login, and display the form to login
let logout = document.querySelector('.instagram-logout');
let group_01 = document.getElementById('group-01');
let group_02 = document.getElementById('group-02');

logout.addEventListener('click', () => {
    group_01.style.display = 'none';
    group_02.style.display = 'flex';
});