(function() {
    function SolarSystem(config) {
        var that = this;

        that.primaryCanvas = config.canvas;
        that.primaryContext = that.primaryCanvas.getContext("2d");

        that.canvas = document.createElement("canvas");
        that.canvas.width = WIDTH;
        that.canvas.height = HEIGHT;
        that.context = that.canvas.getContext("2d");
        that.earthAge = 0;
        that.oldTime = new Date();
        that.framesCounter = 0;
        that.fps = 0;

        that.background = that._getImage("images/space.png");

        that.spaceObjects = [
            new SolarSystemNamespace.Sun({ context: that.context, image: that._getImage("images/sun.png") }),
            new SolarSystemNamespace.Mercury({ context: that.context }),
            new SolarSystemNamespace.Venus({ context: that.context }),
            new SolarSystemNamespace.Earth({ context: that.context, image: that._getImage("images/earth.png"), progressCallback: that._onEarthAgeChange.bind(this) }),
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

            that._renderBackground();
            that._renderTimeEllapsed();
            that._renderFPS();

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

        _renderBackground: function() {
            var that = this,
                ctx = that.context;

            ctx.drawImage(that.background, 0, 0);
        },

        _renderTimeEllapsed: function() {
            var that = this,
                ctx = that.context,
                years = Math.floor(that.earthAge / DAYS_IN_YEAR),
                days = that.earthAge > DAYS_IN_YEAR ? that.earthAge % DAYS_IN_YEAR : that.earthAge;
            
            ctx.font = "14px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "left";
            ctx.fillText("Time ellapsed: " + years + " years, " + days + " days", 5, 25);
        },

        _renderFPS: function() {
            var that = this,
                now = new Date(),
                ctx = that.context,
                diff = now.getTime() - that.oldTime.getTime();

            if (diff < 1000) {
                that.framesCounter++;
            } else {
                that.fps = that.framesCounter;
                that.framesCounter = 0;
                that.oldTime = new Date();
            }

            ctx.font = "14px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "left";
            ctx.fillText("fps: " + that.fps, 550, 25);
        },

        _onEarthAgeChange: function(age) {
            this.earthAge = age;
        },

        _getImage: function(filename) {
            var image = new Image();
            image.src = filename;
            return image;
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
        UPDATE_TIMEOUT = 1000 / 65,
        DAYS_IN_YEAR = 365;
})();