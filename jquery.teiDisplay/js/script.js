/* Author: Daniel Carter

*/

$(document).ready(function(){

	$('#texts').teiDisplay({
		xmlFile: 'data/filmballad.xml',
		witnesses: 'v4n11, v4n8',
		//background: 'tei-type-filmic, null'
	});	

})//onReady
