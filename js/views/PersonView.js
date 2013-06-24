define(["jquery", "underscore", "parse", "handlebars", "views/PersonItemView", "text!templates/layout.html", "text!templates/header-back.html"],
  function($, _, Parse, Handlebars, PersonItemView, template, partialHeaderBack) {

    var PersonView = Parse.View.extend({

        el: "body",

        events: {
          "click .a_back": "goBack",
          "click .a_pinned": "showPinned",
          "click .a_followed": "showFollowed"
        },
        
        template: Handlebars.registerPartial('header', partialHeaderBack),

        template: Handlebars.compile(template),

        initialize: function () {
          // this.model.bind("reset", this.render, this);
        },

        render: function (eventName) {
          $(this.el).empty();
          var courses = this.model;
          Handlebars.registerPartial('header', partialHeaderBack)
          Handlebars.compile(template);

          $(this.el).html(this.template());
          this.$("#content").append(new PersonItemView({
            model: courses
          }).render());
          
          return this;
        },

        goBack: function () {
          window.history.back();
        },

        showPinned: function(){
          this.$(".a_followed").removeClass("a_down");
          this.$(".a_pinned").addClass("a_down");
          this.$("#a_list_pinned").removeClass("a_hide");
          this.$("#a_list_followed").addClass("a_hide");
        },

        showFollowed: function(){
          this.$(".a_pinned").removeClass("a_down");
          this.$(".a_followed").addClass("a_down");
          this.$("#a_list_followed").removeClass("a_hide");
          this.$("#a_list_pinned").addClass("a_hide");
        }
    });
    return PersonView;
});