
console.log("we are doing great")


function check() {
    const username = String(document.getElementById("username").value)
    let password = String(document.getElementById("password").value)
    
  if(username == "mohnd" && password == "05030"){
    document.getElementById("wm").innerHTML = `wlecome ${username}`
  }else{
      document.getElementById("wm").innerHTML =`worng user name or password`
    }
    console.log(username)
}