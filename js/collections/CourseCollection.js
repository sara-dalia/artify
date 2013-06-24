define(["jquery", "underscore", "backbone", "parse", "models/Course"],
    function ($, _, Backbone, Parse, Course) {

    var CourseCollection = Parse.Collection.extend({
        model: Course
      });
    return CourseCollection;

  });