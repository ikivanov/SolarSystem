(function() {
    function SpaceObject() {
        this.satelites = [];
        this.selfRotationAngle = 0;
        this.selfRotationAngleStep = 0;
    }

    SpaceObject.prototype.update = function() {
        var that = this;
        
        if (that.angle >= 360) {
            that.angle = 0;
        }

        that.angle += that.angleStep;

        that.x = CENTER_X + (that.sunDistance * Math.cos(that._toRadians(that.angle)));
        that.y = CENTER_Y + (that.sunDistance * Math.sin(that._toRadians(that.angle)));
    
        if (that.selfRotationAngle > 360) {
            that.selfRotationAngle = 0;
        }

        that.selfRotationAngle += that.selfRotationAngleStep;
    }

    SpaceObject.prototype.render = function() {
        var that = this,
            ctx = that.context;

        if (that.image) {
            that._renderImage();
        } else {
            that._renderCircle();
        }
    }

    SpaceObject.prototype._renderImage = function() {
        var that = this,
            ctx = that.context,
            rotationAngle = that._toRadians(that.selfRotationAngle);

        ctx.translate(that.x, that.y);
        ctx.rotate(rotationAngle);
        ctx.drawImage(that.image, -that.radius, -that.radius);
        ctx.rotate(-rotationAngle);
        ctx.translate(-that.x, -that.y);
    },

    SpaceObject.prototype._renderCircle = function() {
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