define(["jquery", "underscore", "parse", "handlebars", "views/MapItemView", "text!templates/layout.html", "text!templates/header-back.html"],
  function($, _, Parse, Handlebars, MapItemView, template, partialHeaderBack) {

    var MapView = Parse.View.extend({

        // tagName: "div",
        // id: "map",
        el: "body",

        events: {
          "click .a_back": "goBack"
        },
        
        template: Handlebars.registerPartial('header', partialHeaderBack),

        template: Handlebars.compile(template),

        // popupTemplate: Handlebars.compile(popupTemplate),

        initialize: function() {
            this.model.on("reset", this.render, this);
            this.on("inTheDom", this.addMap);
        },
        
        render: function (eventName) {
          $(this.el).empty();
          var course = this.model;
          Handlebars.registerPartial('header', partialHeaderBack)
          Handlebars.compile(template);

          $(this.el).html(this.template());
          this.$("#content").append(new MapItemView({
            model: course
          }).render());
          
          return this;
        },

        goBack: function () {
          window.history.back();
        },
    });
    return MapView;
});