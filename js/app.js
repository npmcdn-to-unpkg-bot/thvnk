// knockout

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
	
// knockout stuff
	
	// Here's my data model
	
	var ViewModel = function() {
	
		// this.cards = observable array
		
		// make these inside card	
	    //this.title = ko.observable("This is a title");
	    //this.body = ko.observable("<p>This is the body</p>");
	    
	};
	 
	//ko.applyBindings(new ViewModel());