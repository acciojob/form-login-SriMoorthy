function getFormvalue(fname,lname) {
    //Write your code here
	let fname = document.getElementByName('fname')
	let lname = document.getElementByName('lname')
	let button = document.getElementById('btn')

	button.addEventListener('click',()=>{
		return fname.value+' '+lname.value
	})
}
alert(getFormvalue())