	var $draggable = $('.card').draggabilly({
	  // options...
	});
	
	var card_html = $('.default').html();
	
	var id = 6;
	
	$('.add').click(function() {
	
		$('.board').append("<div id='card-" + id + "' class='card'><h1>Title</h1><p>Content</p></div>");
		
		$('#card-' + id).draggabilly({
		  // options...
		});
		
		id++;
	
	});