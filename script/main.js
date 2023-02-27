function calc() {
    let yName = document.querySelector(".yourName").value;
    let cName = document.querySelector(".crushName").value;
    if (yName == "" || cName == "")
        document.querySelector(".error").innerHTML = "Input your name and crush name";
    else {
        let genNumber = Math.random() * 100 ;
        let result = Math.floor(genNumber)
        document.querySelector(".MSG").innerHTML = yName + " and " + cName + " has the change of fall in love is";
        document.querySelector(".result").innerHTML = result + "%";
    }
}