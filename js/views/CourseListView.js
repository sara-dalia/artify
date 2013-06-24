define(["jquery", "underscore", "backbone", "handlebars", "views/CourseListItemView", "text!templates/layout.html", "text!templates/header.html"],
    function ($, _, Backbone, Handlebars, CourseListItemView, template, partialHeader) {

    var CourseListView = Backbone.View.extend({

        // tagName: "ul",
        // id: "list",
        el: "body",
        events: {
          "click .a_map": "goToMap",
          "click .a_person": "goToPerson"
        },

        template: Handlebars.registerPartial('header', partialHeader),

        template: Handlebars.compile(template),

        initialize: function () {
          this.model.bind("reset", this.render, this);
        },

        render: function (eventName) {
          $(this.el).empty();
          Handlebars.registerPartial('header', partialHeader)
          Handlebars.compile(template);

          $(this.el).html(this.template());
          _.each(this.model.models, function (course) {
            this.$("#columns").append(new CourseListItemView({
              model: course
            }).render().el);
          }, this);
          // var courses = this.model.toJSON();
          // $(this.el).html(this.template(courses));
          return this;
        },

        goToMap: function () {
          Backbone.history.navigate("map", {trigger: true});
        },

        goToPerson: function () {
          Backbone.history.navigate("person", {trigger: true});
        }
      });

    return CourseListView;

  });