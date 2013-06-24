define(["jquery", "underscore", "backbone", "handlebars", "views/CourseItemView", "text!templates/layout.html", "text!templates/header-back.html"],
    function ($, _, Backbone, Handlebars, CourseItemView, template, partialHeaderBack) {

    var CourseView = Backbone.View.extend({

        el: "body",

        events: {
          "click .a_back": "goBack"
        },

        template: Handlebars.registerPartial('header', partialHeaderBack),

        template: Handlebars.compile(template),

        render: function (eventName) {
          $(this.el).empty();
          var course = this.model.toJSON();
          Handlebars.registerPartial('header', partialHeaderBack)
          Handlebars.compile(template);

          $(this.el).html(this.template());
          this.$("#content").append(new CourseItemView({
            model: course
          }).render().el);
          return this;
        },

        goBack: function () {
          window.history.back();
        },

      });

    return CourseView;

  });