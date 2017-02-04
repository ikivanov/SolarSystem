(function() {
    window.SolarSystemNamespace = window.SolarSystemNamespace || {};

    function Earth(config) {
        var that = this;

        SolarSystemNamespace.SpaceObject.call(that);

        that.context = config.context;
        that.angle = 270;
        that.speedAngle = 0.25;
        that.radius = 15;
        that.backgroundColor = "#2F475D";
        that.sunDistance = 120;

        that.moon = new SolarSystemNamespace.Moon({ context: that.context, earth: that });
        that.satelites.push(that.moon);
    }

    Earth.prototype = Object.create(SolarSystemNamespace.SpaceObject.prototype);
    Earth.prototype.constructor = Earth;

    window.SolarSystemNamespace = window.SolarSystemNamespace || {};
    SolarSystemNamespace.Earth = Earth;
})();