define(["jquery", "underscore", "backbone", "parse"],
  function ($, _, Backbone, Parse) {
    var BackboneUser = Backbone.Model.extend({
      urlRoot: "/User"
    });
    var User = Parse.Object.extend({
      className: "User"
    })
    return User;

  });