(function() {
    function Sun(config) {
        var that = this;

        SolarSystemNamespace.SpaceObject.call(this);

        that.context = config.context;
    }

    Sun.prototype = Object.create(SolarSystemNamespace.SpaceObject.prototype);
    Sun.prototype.constructor = Sun;

    Sun.prototype.update = function() {
        //TODO: apply rotation
    },

    Sun.prototype.render = function() {
        var ctx = this.context;

        ctx.beginPath();
        ctx.strokeStyle = YELLOW;
        ctx.arc(CENTER_X, CENTER_Y, RADIUS, 0, 2 * Math.PI);
        ctx.fillStyle = YELLOW;
        ctx.fill();
        ctx.stroke();
    }

    window.SolarSystemNamespace = window.SolarSystemNamespace || {};
    SolarSystemNamespace.Sun = Sun;

    const CENTER_X = 300,
        CENTER_Y = 300,
        RADIUS = 25,
        YELLOW = "#FF7801"
})();