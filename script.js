let lock1 = document.getElementById("lock1");
let box = document.getElementById("box");

box.addEventListener('click',function(){
    box.classList.toggle("active");

    if(box.classList.contains("active")){
       lock1.classList.replace("bxs-lock-open","bxs-lock");
    }
    else{
      lock1.classList.replace("bxs-lock","bxs-lock-open");
    }
})