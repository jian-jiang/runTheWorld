(functiton(){
	$(document).ready(
		var myDataRef = new Firebase('https://rjuta02bfmx.firebaseio-demo.com/');
	$('#messageInput').keypress(function(){
		if(e.keyCode===13){
			var name=$('#nameInput').val();
			var text=$('#messageInput').val();
			myDataRef.push({name: name, text: text});
			$('#messageInput').val('');
		}
	});
	);
})();
