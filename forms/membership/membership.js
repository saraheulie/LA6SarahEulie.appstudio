let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnSubmit.onclick=function(){
  let name = inptUsername.value
  let n = members.includes(name)
  if (n === True) {
    lblMessage.value = `${name}, you are a member!`
  } else {
    members.push(name)
    lblMessage.value = `${name}, you are currently not a member, but you have been added to the list!`
  }
}