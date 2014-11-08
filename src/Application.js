import device;
import ui.ImageView as ImageView;
import src.EventAreas as EventAreas;

exports = Class(GC.Application, function () {

    this.initUI = function () {

        var imageview = new ImageView({
            superview: this.view,
            x: 0,
            y: 0,
            //scale: 0.75,
            layout: "box",
            image: "resources/images/board.png"
        });



        var boundsWidth = 576;
        var boundsHeight = 1024;
        
        
        var baseWidth = boundsWidth; //576
		var baseHeight =  device.screen.height * (boundsWidth / device.screen.width); //864
		var scale = device.screen.width / baseWidth; //1
        

        var eventAreas = new EventAreas({
            maxHorizontal_box: 3,
            maxVertical_box: 3,
            box: {
				view:this.view,
                height: 140*scale,
                width: 140*scale
            },
            margin: {
                left: 10*scale,
                top: 10*scale
            },
            x: 80*scale,
            y: 130*scale
        }).create(9);    
        
            
    };
    
    
    
    
    /* Executed after the asset resources have been loaded.
	 * If there is a splash screen, it's removed.
	 */
	this.launchUI = function () {};
});
