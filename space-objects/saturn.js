(function() {
    window.SolarSystemNamespace = window.SolarSystemNamespace || {};

    Saturn.prototype = new SolarSystemNamespace.SpaceObject;
    function Saturn(config) {
        var that = this;

        SolarSystemNamespace.SpaceObject.call(that);

        that.context = config.context;
        that.angle = 270;
        that.speedAngle = 0.0086;
        that.radius = 5;
        that.backgroundColor = "#E4D59E";
        that.sunDistance = 220;
    }

    window.SolarSystemNamespace = window.SolarSystemNamespace || {};
    SolarSystemNamespace.Saturn = Saturn;
})();