function getval() {
    

    var x = document.querySelector('input[name="b"]:checked').value;
    console.log(x);
    // alert(x)
    if (x!=null){
        document.getElementsByClassName("sec1")[0].style.display ="none"
        document.getElementsByClassName("sec2")[0].style.display ="flex"
        document.getElementsByClassName("rating")[0].innerText = x
        
    }else{
        alert("select value")
    }
}