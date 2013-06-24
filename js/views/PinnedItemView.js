define(["jquery", "underscore", "backbone", "handlebars", "text!templates/pf-item.html"],
    function ($, _, Backbone, Handlebars, template) {

    var PinnedItemView = Backbone.View.extend({

        tagName: "li",

        events: {
          "click": "goToDetails"
        },

        template: Handlebars.compile(template),

        render: function (eventName) {
          var course = this.model.get("course");
          console.log(course);
          $(this.el).html(this.template(course));
          return this;
        },
		goToDetails: function () {
            Backbone.history.navigate("pinned/" + this.model.id, {trigger: true});
        }
      });

    return PinnedItemView;

  });