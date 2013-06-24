define(["jquery", "underscore", "backbone", "handlebars", "text!templates/course-list-item.html"],
    function ($, _, Backbone, Handlebars, template) {
      var moving=false;
    var CourseListItemView = Backbone.View.extend({

        tagName: "div",
        className: "a_course",

        events: {
          "click": "goToDetails",
          "touchmove": "moving"
        },

        template: Handlebars.compile(template),

        initialize: function () {
          this.model.bind("change", this.render, this);
          this.model.bind("destroy", this.close, this);
        },

        render: function (eventName) {
          var course = this.model.toJSON();
          course.cid = this.model.id;
          $(this.el).html(this.template(course));
          return this;
        },

        moving: function(){
          moving=true;
        },

        goToDetails: function () {
          if(!moving){
            Backbone.history.navigate("course/" + this.model.id, {trigger: true});
          }
          moving=false;
        }
      });

    return CourseListItemView;

  });