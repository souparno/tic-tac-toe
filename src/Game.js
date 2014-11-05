import ui.ImageView as ImageView;


exports = Class(function(){
	
	
	this.init=function(view){
	  
		this._view_superview=view.style._superview;
		this._view_width=view.style._width;
		this._view_height=view.style._height;
		this._view_x=view.style.x;
		this._view_y=view.style.y;
	}
		
	//shows a circle or cross.
	this.render=function(option){
		
		var imageview = new ImageView({
			superview: this._view_superview,
			width:this._view_width,
			height:this._view_height,
			x: this._view_x,
			y: this._view_y,
			image: "resources/images/"+option+".png"
		});
	    
	};

});
