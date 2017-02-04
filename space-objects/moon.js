(function() {
    window.SolarSystemNamespace = window.SolarSystemNamespace || {};

    function Moon(config) {
        var that = this;

        SolarSystemNamespace.SpaceObject.call(that);

        that.context = config.context;
        that.earth = config.earth;
        that.angle = 270;
        that.speedAngle = 3.379;
        that.radius = 5;
        that.backgroundColor = "#FFF";
        that.earthDistance = 35;
    }

    Moon.prototype = Object.create(SolarSystemNamespace.SpaceObject.prototype);
    Moon.prototype.constructor = Moon;
    
    Moon.prototype.update = function() {
        var that = this;
        
        if (that.angle >= 360) {
            that.angle = 0;
        }

        that.angle += that.speedAngle;

        that.x = that.earth.x + (that.earthDistance * Math.cos(that._toRadians(that.angle)));
        that.y = that.earth.y + (that.earthDistance * Math.sin(that._toRadians(that.angle)));
    }

    window.SolarSystemNamespace = window.SolarSystemNamespace || {};
    SolarSystemNamespace.Moon = Moon;
})();