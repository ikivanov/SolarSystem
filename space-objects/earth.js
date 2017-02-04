(function() {
    window.SolarSystemNamespace = window.SolarSystemNamespace || {};

    function Earth(config) {
        var that = this;

        SolarSystemNamespace.SpaceObject.call(that);

        that.context = config.context;
        that.image = config.image;
        that.progressCallback = config.progressCallback;
        that.angle = INITIAL_ANGLE;
        that.angleStep = 0.25;
        that.selfRotationAngle = 0;
        that.selfRotationAngleStep = 2.5;
        that.radius = 25;
        that.backgroundColor = "#2F475D";
        that.sunDistance = 120;
        that.oldAgeInDays = 0;
        that.ageInDays = 0;

        that.moon = new SolarSystemNamespace.Moon({ context: that.context, earth: that });
        that.satelites.push(that.moon);
    }

    Earth.prototype = Object.create(SolarSystemNamespace.SpaceObject.prototype);
    Earth.prototype.constructor = Earth;

    Earth.prototype.update = function() {
        var that = this;

        SolarSystemNamespace.SpaceObject.prototype.update.call(that);
        
        if (that.angle == INITIAL_ANGLE) {
            that.ageInDays += AGE_CORRECTION;
        }

        var days = parseInt(that.angle);
        if (days === 0) {
            that.oldAgeInDays = 0;
        }

        if (days > that.oldAgeInDays) {
            that.ageInDays++;
            that.oldAgeInDays = days;

            if (that.progressCallback) {
                that.progressCallback(that.ageInDays);
            }
        }
    }

    const INITIAL_ANGLE = 270,
        AGE_CORRECTION = 5;

    window.SolarSystemNamespace = window.SolarSystemNamespace || {};
    SolarSystemNamespace.Earth = Earth;
})();