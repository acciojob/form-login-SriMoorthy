function getFormvalue() {
    //Write your code here
	let form = document.getElementById('form1')
	let fname = form.elements['fname'].value
	let lname = form.elements['lname'].value
	let fullname = fname+' '+lname
	alert(fullname)
}
