define(["jquery", "underscore", "backbone", "handlebars", "leaflet", "text!templates/person-details.html", "views/PinnedItemView"],
    function ($, _, Backbone, Handlebars, Leaflet, template, PinnedItemView) {

    var PersonItemView = Backbone.View.extend({

        el: "article",

        template: Handlebars.compile(template),

        render: function(eventName) {
            var courses = this.model;
            Handlebars.compile(template),
            $(this.el).html(this.template());

            _.each(this.model.models, function (object) {
                if(object.get("pinned")){
                    this.$("#a_list_pinned").append(new PinnedItemView({
                      model: object
                    }).render().el);
                }
                if(object.get("followed")){
                    this.$("#a_list_followed").append(new PinnedItemView({
                      model: object
                    }).render().el);
                }
            }, this);
            
        }
    });
    return PersonItemView;
});