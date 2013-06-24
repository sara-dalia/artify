define(["jquery", "underscore", "backbone", "parse"],
  function ($, _, Backbone, Parse) {
    var BackboneFP = Backbone.Model.extend({
      urlRoot: "/FollowedPinned"
    });
    var FollowedPinned = Parse.Object.extend({
      className: "FollowedPinned"
    })
    return FollowedPinned;

  });