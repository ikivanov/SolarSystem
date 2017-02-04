(function() {
    function SolarSystem(config) {
        var that = this;

        that.primaryCanvas = config.canvas;
        that.primaryContext = that.primaryCanvas.getContext("2d");

        that.canvas = document.createElement("canvas");
        that.canvas.width = WIDTH;
        that.canvas.height = HEIGHT;
        that.context = that.canvas.getContext("2d");

        that.spaceObjects = [
            new SolarSystemNamespace.Sun({ context: that.context }),
            new SolarSystemNamespace.Mercury({ context: that.context }),
            new SolarSystemNamespace.Venus({ context: that.context }),
            new SolarSystemNamespace.Earth({ context: that.context }),
            new SolarSystemNamespace.Mars({ context: that.context }),
            new SolarSystemNamespace.Jupiter({ context: that.context }),
            new SolarSystemNamespace.Saturn({ context: that.context }),
            new SolarSystemNamespace.Uranus({ context: that.context }),
            new SolarSystemNamespace.Neptune({ context: that.context }),
            new SolarSystemNamespace.Pluto({ context: that.context })
        ];
    }

    SolarSystem.prototype = {
        render: function() {
            this._render();
        },

        _render: function() {
            var that = this,
                ctx = that.context;

            ctx.beginPath();
            ctx.rect(0, 0, WIDTH, HEIGHT);
            ctx.fillStyle = BLACK;
            ctx.fill();
            ctx.stroke();

            for (var i = 0; i < that.spaceObjects.length; i++) {
                var spaceObject = that.spaceObjects[i];

                spaceObject.update();
                for (var j = 0; j < spaceObject.satelites.length; j++) {
                    spaceObject.satelites[j].update();
                }

                spaceObject.render();
                for (var j = 0; j < spaceObject.satelites.length; j++) {
                    spaceObject.satelites[j].render();
                }
            }

            that.primaryContext.clearRect(0, 0, WIDTH, HEIGHT);
            that.primaryContext.drawImage(that.canvas, 0, 0);

            setTimeout(function() {
                that.context.clearRect(0, 0, canvas.width, canvas.height);
                that._render();
            }, UPDATE_TIMEOUT);
        },

        _toRadians: function(degrees) {
            return degrees * Math.PI / 180;
        }
    };

    window.SolarSystemNamespace = window.SolarSystemNamespace || {};
    SolarSystemNamespace.SolarSystem = SolarSystem;

    const WIDTH = 600,
        HEIGHT = 600,
        BLACK = "#000",
        UPDATE_TIMEOUT = 1000 / 60
})();