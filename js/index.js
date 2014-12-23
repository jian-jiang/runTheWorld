$(document).ready(function(){
	var ref = new Firebase('https://run-the-world.firebaseio.com/');
	$('.create #messageInput').keypress(function(e){
		if(e.keyCode===13){
			var name=$('.create #nameInput').val();
			var password=$('.create #messageInput').val();
			ref.createUser({
				email:name,
				password:password
			},function(error){
				if(error===null){
					console.log("User created successfully");
				}else{
					console.log("Error creating user:",error);
				}
			});
		}
	$('.log #messageInput').keypress(function(e){
		if(e.keyCode===13){
			var name=$('.log #nameInput').val();
			var password=$('.log #messageInput').val();
			ref.authWithPassword({
				email:name,
				password:password
			},function(error,authData){
				if(error){
					console.log("Login Failed!",error);
				}else{
					console.log("Login success",authData);
				}
			});
		}
	});
	});
});
