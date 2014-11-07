import ui.View as View;
import src.Game as Game;


exports = Class(function(){

    this.init = function(paramObj){
						
	  this.maxHorizontal_box=paramObj.maxHorizontal_box;
	  this.maxVertical_box=paramObj.maxVertical_box;
	  this.box=new Box(paramObj.box);
	  this.margin={left:paramObj.margin.left , top:paramObj.margin.top};
	  this.x=paramObj.x;
	  this.y=paramObj.y;
	  this.x = this.x + this.margin.left;
	  this.y = this.y + this.margin.top;	  
	};	
	
	this.create = function(rpt){
       
       var count_x=1;       
       var temp_x=this.x;
       
       for(var i=1;i<=rpt;i++){
		 
		 if(count_x <= this.maxHorizontal_box){
			 this.box.render(this.x,this.y);
			 this.x = this.x +this.box.width + this.margin.left;
		     count_x++;		     
	     }else{
			 count_x=1;
			 this.x=temp_x;
			 this.y = this.y + this.box.height + this.margin.top;
			 i--;
		 }		  
	   }       		
	};	
});


var Box = Class(function(){


	this.init = function(paramObj){
		this.height=paramObj.height;
		this.width=paramObj.width;
		this.view=paramObj.view;
		this.playerMove = "cross";
	};
	
	
	this.render = function(x,y){
		
		
		
		var view = new View({
			superview: this.view,
			x: x,
			y: y,
			width: this.width,
			height: this.height,
			backgroundColor : "#FF0000"
		});
		
		
		view.on('InputStart',bind(this,function(){
		   console.log("You just clicked on one of the squares");			
		   
		   var game=new Game(view);	
		   game.render(this.playerMove);	
		  
		   if(this.playerMove == "cross") this.playerMove="circle";
		   else this.playerMove="cross";		  
		   
		})); 		  
		
	};

});


