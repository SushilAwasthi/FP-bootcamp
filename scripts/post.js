document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if(postId){
        fetch(`https://jsonplaceholder.typicode.com/todos/${postId}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('details-content').textContent = JSON.stringify(data);
            })
            .catch(error => console.error('Error fetching details:', error));
    }else{
        document.getElementById('details-content').textContent = 'No post id provided.';
    }
});
