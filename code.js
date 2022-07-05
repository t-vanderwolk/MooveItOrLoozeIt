let post= document.getElementById("post");
post.addEventListener("click", function(){
    let commentBoxValue= document.getElementById("review-body").value;
 
    let div = document.createElement("div");
    let text = document.createTextNode(commentBoxValue);
    div.appendChild(text);
    document.getElementById("unordered").appendChild(div);
 
});