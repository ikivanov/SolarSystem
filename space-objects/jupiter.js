(function() {
    window.SolarSystemNamespace = window.SolarSystemNamespace || {};

    Jupiter.prototype = new SolarSystemNamespace.SpaceObject;
    function Jupiter(config) {
        var that = this;

        SolarSystemNamespace.SpaceObject.call(that);

        that.context = config.context;
        that.angle = 270;
        that.angleStep = 0.020;
        that.radius = 5;
        that.backgroundColor = "#8C6E54";
        that.sunDistance = 195;
    }

    window.SolarSystemNamespace = window.SolarSystemNamespace || {};
    SolarSystemNamespace.Jupiter = Jupiter;
})();