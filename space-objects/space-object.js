(function() {
    function SpaceObject() {
        this.satelites = [];
    }

    SpaceObject.prototype.update = function() {
        var that = this;
        
        if (that.angle >= 360) {
            that.angle = 0;
        }

        that.angle += that.speedAngle;

        that.x = CENTER_X + (that.sunDistance * Math.cos(that._toRadians(that.angle)));
        that.y = CENTER_Y + (that.sunDistance * Math.sin(that._toRadians(that.angle)));
    }

    SpaceObject.prototype.render = function() {
        var that = this,
            ctx = that.context;

        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = that.backgroundColor;
        ctx.arc(that.x, that.y, that.radius, 0, 2 * Math.PI);
        ctx.fillStyle = that.backgroundColor;
        ctx.fill();
        ctx.stroke();
    }

    SpaceObject.prototype._toRadians = function(degrees) {
        return degrees * Math.PI / 180;
    }

    window.SolarSystemNamespace = window.SolarSystemNamespace || {};
    SolarSystemNamespace.SpaceObject = SpaceObject;

    const CENTER_X = 300,
        CENTER_Y = 300;
})();