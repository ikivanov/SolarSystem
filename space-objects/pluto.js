(function() {
    window.SolarSystemNamespace = window.SolarSystemNamespace || {};

    Pluto.prototype = new SolarSystemNamespace.SpaceObject;
    function Pluto(config) {
        var that = this;

        SolarSystemNamespace.SpaceObject.call(that);

        that.context = config.context;
        that.angle = 270;
        that.speedAngle = 0.0010;
        that.radius = 3;
        that.backgroundColor = "#E2BE9C";
        that.sunDistance = 280;
    }

    window.SolarSystemNamespace = window.SolarSystemNamespace || {};
    SolarSystemNamespace.Pluto = Pluto;
})();