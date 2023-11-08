function toggleFollow() {
    const followButton = document.getElementById('follow-button');
    if (followButton.classList.contains('following')) {
        followButton.classList.remove('following');
        followButton.textContent = 'Seguir';
    } else {
        followButton.classList.add('following');
        followButton.textContent = 'Seguindo';
    }
}