
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnSubmit.onclick=function(){
  let user_name = inptUsername.value
  if (members.includes(inptUsername.value)) {
    lblMessage.value = `${inptUsername.value}, you are a member!`
  } else {
    lblMessage.value = `${inptUsername.value}, you are currently not a member, but you have been added to the list!`
    members.push(inptUsername.value)
  }
}


