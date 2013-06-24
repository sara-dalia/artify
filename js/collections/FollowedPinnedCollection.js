define(["jquery", "underscore", "backbone", "parse", "models/FollowedPinned"],
    function ($, _, Backbone, Parse, FollowedPinned) {

    var FollowedPinnedCollection = Parse.Collection.extend({
        model: FollowedPinned
      });
    return FollowedPinnedCollection;

  });