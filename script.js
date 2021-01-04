const postsList = document.querySelector('.posts-list')
const addPostForm = document.querySelector('.add-post-form')
const titleValue = document.getElementById('title-value')
const bodyValue = document.getElementById('body-value')
const btnSubmit = document.querySelector('.btn')


const url2 = ('https://jsonplaceholder.typicode.com/posts')
let output = ''

const renderPosts = (posts) =>{
    posts.forEach(post =>{
        output += `
        <div class="card mt-4 col-md-6 bg-light" >
          <div class="card-body">
           <h5 class="card-title">${post.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
            <p class="card-text">${post.body}</p>
            <a href="#" class="card-link" id='edit-post'>

            <button type="button" class="btn btn-primary mt-3" data-toggle="modal" data-target="#exampleModal">
            Edit
          </button>
          
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-body">
                
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  
                </div>
                <div class="modal-body">
                  <form class='add-post-form'>
                  <div class='form-group'>
                      <label for='title'>Title</label>
                      <input type='text' class='form-control' id='title-value' />
                  </div>
                    <div class='form-group'>
                        <label for='body'>Content</label>
                        <textarea class='form-control' id='body-value'></textarea>
                    </div>   
                   </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        
            
            
            
            </a>
            <a href="#" class="card-link" id='delete-post'>Delete</a>
          </div>
        </div>
        
        `;
    })
    postsList.innerHTML = output
}




addPostForm.addEventListener('click', ()=>{

    fetch(url2, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        body: JSON.stringify({
            title: titleValue.value,
            body: bodyValue.value
        })
 })
 .then(res => res.json())
 .then(data =>{
     const dataArr = [];
     dataArr.push(data);
     renderPosts(dataArr)
 })
})


/*
postsList.addEventListener('click', (e)=>{
    e.preventDefault()
    let editButtonPressed = e.target.id == 'edit-post'
})

if(editButtonPressed){
    const parent = e.target.parentElement;
    let titleContent = parent.querySelector('.card-title').textContent;
    let bodyContent = parent.querySelector('.card-text').textContent;

    console.log(titleContent, bodyContent)
}


titleValue.value = titleContent;
bodyValue.value = bodyContent;


btnSubmit.addEventListener('click',()=>{
    console.log('Post-Updated')
})

fetch(`${url2}/${id}`, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    title: titleValue.value,
    body: bodyValue.value,
    
  }),
})

.then(res => res.json())
.then(()=> location.reload())


*/




let dropdown = $('#users-dropdown')
         dropdown.append('<option selected="true" disabled>Choose Users</option>')
         dropdown.prop('selectedIndex', 0)



        
         const url = ('https://jsonplaceholder.typicode.com/users')

         //Populate dropdown with list of users


         $.getJSON(url, function(data){
            $.each(data, function (key, entry) {
        dropdown.append($(`<option></option>`).attr('value', entry.id).text(entry.name));
       


  })
     })

     $('.target').change(function(){
       
        fetch('https://jsonplaceholder.typicode.com/users/1/posts').then(response =>{
            return response.json()
            .then(data =>{
                console.log(data)
       
                const actualData = data.map(post1 =>{
                    return `
                    <div class="card mt-4 col-md-6 bg-light" >
                    <div class="card-body">
                    <h5 class="card-title">${post1.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                    <p class="card-text">${post1.body}</p>
                    <a href="#" class="card-link" id='edit-post'>
                    
                    <button type="button" class="btn btn-primary mt-3" data-toggle="modal" data-target="#exampleModal">
                    Edit
                  </button>
                  
                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-body">
                        
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                          
                        </div>
                        <div class="modal-body">
                          <form class='add-post-form'>
                          <div class='form-group'>
                              <label for='title'>Title</label>
                              <input type='text' class='form-control' id='title-value' />
                          </div>
                            <div class='form-group'>
                                <label for='body'>Content</label>
                                <textarea class='form-control' id='body-value'></textarea>
                            </div>   
                           </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                
                    
                    </a>
                    <a href="#" class="card-link" id='delete-post'>Delete</a>
                 </div>
                 </div>
                    `
                }).join('')

                document.querySelector('#app').innerHTML = actualData 
     })

    })
})
     

         