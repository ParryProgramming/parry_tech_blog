const commentButtons = document.querySelectorAll('.commentPost-btn');
const commentForms = document.querySelectorAll('.commentPost-form');


commentButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        
        newForms[index].style.display = 'block';
       
        commentButtons[index].parentNode.querySelector('.commentPost-content').style.display = 'none';
    });
});


editForms.forEach((form, index) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newContent = form.querySelector('.comment-textarea').value;
        
        commentButtons[index].parentNode.querySelector('.commentPost-content').textContent = newContent;
        
        form.style.display = 'none';
        commentButtons[index].parentNode.querySelector('.commentPost-content').style.display = 'block';
    });
});