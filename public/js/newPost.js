const newButtons = document.querySelectorAll('.newPost-btn');
const newForms = document.querySelectorAll('.newPost-form');

const newPostHandler = async(event)=>{
    event.preventDefault();
const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
await fetch(`/api/post`,{
    method: 'POST',
    body: JSON.stringify({
        post_name: title,
        post_content: content,
    }),
    headers: {'Content-Type':'application/json'}
})
document.location.replace('/dashboard')




}
// Handle form submission
document.querySelector('.newPost-form').addEventListener('submit',newPostHandler);