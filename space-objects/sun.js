(function() {
    function Sun(config) {
        var that = this;

        SolarSystemNamespace.SpaceObject.call(this);

        that.context = config.context;
        that.image = config.image;
        that.angle = 270;
        that.angleStep = 0;
        that.selfRotationAngle = 0;
        that.selfRotationAngleStep = 0.5;
        that.radius = 30;
        that.backgroundColor = "#FF7801";
        that.sunDistance = 0;
    }

    Sun.prototype = Object.create(SolarSystemNamespace.SpaceObject.prototype);
    Sun.prototype.constructor = Sun;

    window.SolarSystemNamespace = window.SolarSystemNamespace || {};
    SolarSystemNamespace.Sun = Sun;
})();