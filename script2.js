// No pubish date by ternary operator


console.log("hi")

const loadPost = async()=>{
    const res = await fetch (`https://openapi.programming-hero.com/api/retro-forum/posts`);  //https://openapi.programming-hero.com/api/retro-forum/posts?category=coding
    // console.log(res);
    // console.log(typeof res)
    const data = await res.json();
    const posts = data.posts;
    // const author = post[0].author;
    // console.log(posts);
    // console.log(author);
    displayPost(posts)


}


// Display post

const displayPost = posts =>{
    // console.log(posts);
    // step1. get element
    const postFinalContainer = document.getElementById('post-final-container');
    // const phoneContainer = document.getElementById('phone-container');
    // // clear phone container before addes new cards
    // phoneContainer.textContent='';

    // // display show all button if items more than 18
    // const showAllContainer = document.getElementById('show-all-container')
    // if (phones.length > 18){
    //     showAllContainer.classList.remove('hidden');
    // }else{
    //     showAllContainer.classList.add('hidden');
    // }



    // // Display only first 20 items
    // phones = phones.slice(0,18);


    // if (post.isActive=true){
    //     document.getElementById('avatar-online').classList.remove('hidden');
    // } 
    // else if(post.isActive=false){
    //     document.getElementById('avatar-online').classList.add('hidden');
    //     document.getElementById('avatar-offline').classList.remove('hidden');

    // }



    posts.forEach(post => {
        console.log(post);
        // display post start here
        const displayPostDiv = document.createElement('div');
        displayPostDiv.classList="";
        displayPostDiv.innerHTML = ` <!-- Right Section -->
        <div class="w-4/6 bg-blue-200 p-6 mx-auto border rounded-lg border-blue-950">
            <div class="flex flex-row justify-between">
                <!-- div for avatar -->
                <div>
                    <div id="avatar-online" class="avatar online hidden">
                        <div class="w-24 rounded-full">
                          <img src="${post.image}" />
                        </div>
                      </div>
                      <div id="avatar-offline" class="avatar offline hidden">
                        <div class="w-24 rounded-full">
                          <img src="${post.image}" />
                        </div>
                      </div>
                </div>
                <!-- div for avatar right section -->
                <div>
                    <div>
                        <p># <span id="author-category">${post.category}</span></p>
                        <p>Author: <span id="author-name">${post.author.name}</span></p>
                    </div>
                    <p id="item-title">${post.title
                    }</p>
                    <p id="item-description">${post.description
                    }</p>
                        <hr>
                    <!-- Div for Icon and info and envlope -->
                    <div class="flex flex-row justify-between ">
                
                        <!-- div for icon and text -->
                        <div class="flex flex-row w-3/4">
                            <div class="flex flex-row">
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                  </svg>
                                  </span>
                                  <p id="comment-count">${post.comment_count
                                  }</p>
                            </div>
                            <div class="flex flex-row">
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                  </svg>
                                </span>
                                <p id="view-count">${post.view_count
                                }</p>
                            </div>
                            <div class="flex flex-row">
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                  </svg>
                                </span>
                                <p><span id="posted-time">${post.posted_time
                                }</span> min</p>
                            </div>
                        </div>
                        <!-- envlope div -->
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                              </svg>
                              
                        </div>

                    </div>
                </div>
            </div>
        </div>
`;

    postFinalContainer.appendChild(displayPostDiv);

    });

}

loadPost();



