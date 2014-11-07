import ui.ImageView as ImageView;


exports = Class(function(){
	
	
	this.init=function(view){
		
		this._view_superview=view;
		this._view_width=view.style.width;
		this._view_height=view.style.height;
		this._view_x=view.style.x;
		this._view_y=view.style.y;
		
	}
		
	//shows a circle or cross.
	this.render=function(option){
		
		var imageview = new ImageView({
			superview: this._view_superview,
			width:this._view_width,
			height:this._view_height,
			image: "resources/images/"+option+".png"
		});
	    
	};
	
	
	this.onInputStart = function(){
		this.value=this.value || 0;
		this.value ++;
		alert(this.value);
	}
	

});
