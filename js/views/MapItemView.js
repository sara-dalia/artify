define(["jquery", "underscore", "backbone", "handlebars", "leaflet", "text!templates/map.html", "text!templates/marker-popup.html"],
    function ($, _, Backbone, Handlebars, Leaflet, template,popupTemplate) {

    var MapItemView = Backbone.View.extend({

        el: "article",

        events: {
          // "touchend": "goToDetails"
        },

        template: Handlebars.compile(template),
        popupTemplate: Handlebars.compile(popupTemplate),

        // initialize: function() {
        //     this.model.on("reset", this.render, this);
        //     this.on("inTheDom", this.addMap);
        // },

        render: function(eventName) {
            Handlebars.compile(template),
            Handlebars.compile(popupTemplate)
            $(this.el).html(this.template());
            // var options ={center: new L.LatLng(42.350711, 13.399961),
            var options={center: new L.LatLng(41.846256, 12.485903),
              zoom: 13
            };
            var map = L.map('map', options);


            L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
                maxZoom: 20
            }).addTo(map);

            // add the markers about the ads
            for (var i = 0; i < this.model.length; i++) {
              var location = this.model.at(i).get("location");
              var latlng = new L.LatLng(location.latitude, location.longitude);
              var marker = L.marker(latlng).addTo(map);
              var course = this.model.at(i).toJSON();
              marker.bindPopup(this.popupTemplate(course), {closeButton: true});
            }

            var positionIcon = L.icon({
              iconUrl: './res/images/hereIcon.png',
              iconSize:     [20, 20], // size of the icon
            });

            navigator.geolocation.getCurrentPosition(function (position) {
                // console.log(position);
              L.marker([position.coords.latitude, position.coords.longitude], {icon: positionIcon}).addTo(map);
            }, function() {});

        },

        goToDetails: function () {
            Backbone.history.navigate("course/" + this.model.id, {trigger: true});
        }
    });
    return MapItemView;

  });