(function() {
    window.SolarSystemNamespace = window.SolarSystemNamespace || {};

    Neptune.prototype = new SolarSystemNamespace.SpaceObject;
    function Neptune(config) {
        var that = this;

        SolarSystemNamespace.SpaceObject.call(that);

        that.context = config.context;
        that.angle = 270;
        that.angleStep = 0.0015;
        that.radius = 5;
        that.backgroundColor = "#A7CBFF";
        that.sunDistance = 260;
    }

    window.SolarSystemNamespace = window.SolarSystemNamespace || {};
    SolarSystemNamespace.Neptune = Neptune;
})();