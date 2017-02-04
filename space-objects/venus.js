(function() {
    window.SolarSystemNamespace = window.SolarSystemNamespace || {};

    function Venus(config) {
        var that = this;

        SolarSystemNamespace.SpaceObject.call(that);

        that.context = config.context;
        that.angle = ANGLES_270;
        that.speedAngle = 0.405;
        that.radius = RADIUS;
        that.backgroundColor = BACKGROUND;
        that.sunDistance = SUN_DISTANCE;
    }

    Venus.prototype = Object.create(SolarSystemNamespace.SpaceObject.prototype);
    Venus.prototype.constructor = Venus;

    window.SolarSystemNamespace = window.SolarSystemNamespace || {};
    SolarSystemNamespace.Venus = Venus;

    const CENTER_X = 150,
        CENTER_Y = 150,
        RADIUS = 5,
        ANGLES_30 = 30,
        ANGLES_60 = 60,
        ANGLES_90 = 90,
        ANGLES_180 = 180,
        ANGLES_270 = 270,
        ANGLES_360 = 360,
        SUN_DISTANCE = 60,
        BACKGROUND = "#CFD2CD"
})();