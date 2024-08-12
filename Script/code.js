console.log("This is some text");
UserPost = document.getElementById("Post")


function Post() {
datePosted = new Date().toTimeString().split(" ")[0];
    document.getElementById("Posted").innerHTML = datePosted
    console.log("posted")
    UserPost.innerHTML = document.getElementById("Msg").value 
   
}