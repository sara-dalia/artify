define(["jquery", "underscore", "backbone", "parse"],
  function ($, _, Backbone, Parse) {
    var BackboneCourse = Backbone.Model.extend({
      urlRoot: "/Courses"
    });
    var Course = Parse.Object.extend({
      className: "Courses"
    })
    return Course;

  });