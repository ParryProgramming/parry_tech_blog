const editButtons = document.querySelectorAll('.edit-btn');
const editForms = document.querySelectorAll('.edit-form');


editButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        
        editForms[index].style.display = 'block';
        
        editButtons[index].parentNode.querySelector('.post-content').style.display = 'none';
    });
});


editForms.forEach((form, index) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const editedContent = form.querySelector('.edit-textarea').value;
        
        editButtons[index].parentNode.querySelector('.post-content').textContent = editedContent;
        
        form.style.display = 'none';
        editButtons[index].parentNode.querySelector('.post-content').style.display = 'block';
    });
});