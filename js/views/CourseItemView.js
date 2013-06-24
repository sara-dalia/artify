define(["jquery", "underscore", "backbone", "handlebars", "text!templates/course-details.html"],
    function ($, _, Backbone, Handlebars, template) {

    var CourseItemView = Backbone.View.extend({

        el: "article",

        template: Handlebars.compile(template),

        render: function (eventName) {
          var course = this.model;
          course.cid = this.model.cid;
          $(this.el).html(this.template(course));
          return this;
        },

      });

    return CourseItemView;

  });