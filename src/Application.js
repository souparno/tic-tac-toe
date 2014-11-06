import device;
import ui.ImageView as ImageView;
import src.EventAreas as EventAreas;

exports = Class(GC.Application, function () {

    this.initUI = function () {

        var imageview = new ImageView({
            superview: this.view,
            x: 0,
            y: 0,
            scale: 0.75,
            layout: "box",
            image: "resources/images/board.png"
        });


        var eventAreas = new EventAreas({
            maxHorizontal_box: 3,
            maxVertical_box: 3,
            box: {
				view:this.view,
                height: 80,
                width: 75
            },
            margin: {
                left: 10,
                top: 10
            },
            x: 40,
            y: 65
        }).create(9);        
    };
    
    
    
    
    /* Executed after the asset resources have been loaded.
	 * If there is a splash screen, it's removed.
	 */
	this.launchUI = function () {};
});
