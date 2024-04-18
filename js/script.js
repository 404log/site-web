const title = document.getElementById('title');
const enterButton = document.getElementById('enterButton');
const leaveButton = document.getElementById('leaveButton');

enterButton.addEventListener('click', () => {
    title.classList.add('red');
    title.classList.remove('white');
});

leaveButton.addEventListener('click', () => {
    title.classList.add('white');
    title.classList.remove('red');
});
