(function() {
    window.SolarSystemNamespace = window.SolarSystemNamespace || {};

    function Mercury(config) {
        var that = this;

        SolarSystemNamespace.SpaceObject.call(that);

        that.context = config.context;
        that.angle = 270;
        that.speedAngle = 1.035;
        that.radius = 3;
        that.backgroundColor = "#9A938B";
        that.sunDistance = 40;
    }
    Mercury.prototype = Object.create(SolarSystemNamespace.SpaceObject.prototype);
    Mercury.prototype.constructor = Mercury;

    window.SolarSystemNamespace = window.SolarSystemNamespace || {};
    SolarSystemNamespace.Mercury = Mercury;
})();