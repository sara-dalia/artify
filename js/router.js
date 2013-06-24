define(["jquery", "underscore", "backbone", "views/CourseView", "views/CourseListView", "views/MapView", "views/PersonView", "initData", "initData2"],
    function ($, _, Backbone, CourseView, CourseListView, MapView, PersonView, initData, initData2) {

    var AppRouter = Backbone.Router.extend({

      routes: {
        "": "list",
        "list": "list",
        "course/:id": "courseDetails",
        "map": "map",
        "person": "personDetails",
        "pinned/:id": "coursePersonDetails"
      },

      initialize: function () {
        this.currentView = undefined;
        this.courses = initData;
      },

      list: function () {
        var page = new CourseListView({
          model: this.courses
        });
        this.changePage(page);
      },

      courseDetails: function (id) {
        var course = this.courses.get(id);
        this.changePage(new CourseView({
          model: course
        }));
      },

      map: function () {
        var page = new MapView({
          model: this.courses
        });
        this.changePage(page);
      },

      personDetails: function (id) {
        this.followedPinned = initData2;
        this.changePage(new PersonView({
          model: this.followedPinned
        }));
      },

      coursePersonDetails: function (id) {
        var course = this.followedPinned.get(id).get("course");
        this.changePage(new CourseView({
          model: course
        }));
      },

      changePage: function (page) {
        // if(this.currentView) {
        //    this.currentView.remove();
        //  }

        this.currentView = page;
        page.render();
        $('body').append($(page.el));
        this.currentView.trigger("inTheDom");
        window.scrollTo(0,0)
      }

    });

    return AppRouter;

  });
