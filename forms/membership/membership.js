let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnAdd.onclick=function(){
  let name = inptUsername.value
if (members.includes(name)) {
  lblMessage.value = `${name}, you are a member!`
} else { 
  lblMessage.value = `${name}, you are not a member, you have been added to the list!`
  members.push(name)
}
}