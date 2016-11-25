var chai = require('chai');
var expect = chai.expect;
describe("Sample test Running", function(){
	it("check the value", function(){
		var elem = document.createElement('a');
			elem.setAttribute('id','one');
			elem.addEventlistener('click', function(){
				alert('test');
			})
			document.body.appendChild(elem);
			document.getElementById('one').click();

	})
})