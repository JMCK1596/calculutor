const form = document.getElementById("form")
const textarea= document.getElementById("text")
const lenta = document.getElementById("lenta")



// Действие
function createPost(text) {
  const newPost = document.createElement('div');
  newPost.classList.add("card")

  const p = document.createElement('p');
  p.innerText = text;
  newPost.appendChild(p);

  const button = document.createElement('button');
  button.innerText = "Delete";
  button.classList.add("delete")
  button.addEventListener("click", function (element) {
    newPost.remove()
  })
  newPost.appendChild(button);

  lenta.appendChild(newPost)
}

// Событие
function submit(e){
  e.preventDefault()

  const text = textarea.value;
  createPost(text)
}
form.addEventListener("submit", submit)