//variabile globale per settaggio mocked
mocked=false;
userId="qsErjR7lxC";
require.config({
  paths: {
    // domReady: '../lib/require/domReady',
    jquery: '../lib/jquery/jquery-1.9.1.min',
    underscore: '../lib/underscore/underscore-min',
    backbone: '../lib/backbone/backbone',
    parse: '../lib/parse/parse-1.2.7',
    text: '../lib/require/text-1.0.6',
    async: '../lib/require/async',
    handlebars: '../lib/handlebars/handlebars',
    templates: '../templates',
    leaflet: '../lib/leaflet/leaflet'
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'handlebars': {
      exports: 'Handlebars'
    }
    ,
    'parse': {
      deps: ['jquery', 'underscore'],
      exports: 'Parse'
    },
    'leaflet': {
      exports: 'L'
    }
  }
});

// We launch the App
require(['underscore', 'backbone', 'parse', 'router'],
    function (_, Backbone, Parse, AppRouter) {

      // document.addEventListener("deviceready", run, false);

      // function run() {
        new AppRouter();
        Backbone.history.start();
      // }
  });
