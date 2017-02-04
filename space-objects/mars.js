(function() {
    window.SolarSystemNamespace = window.SolarSystemNamespace || {};

    Mars.prototype = new SolarSystemNamespace.SpaceObject;
    function Mars(config) {
        var that = this;

        SolarSystemNamespace.SpaceObject.call(that);

        that.context = config.context;
        that.angle = 270;
        that.angleStep = 0.132;
        that.radius = 5;
        that.backgroundColor = "#A98762";
        that.sunDistance = 175;
    }

    window.SolarSystemNamespace = window.SolarSystemNamespace || {};
    SolarSystemNamespace.Mars = Mars;
})();