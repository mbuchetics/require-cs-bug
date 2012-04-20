
/**
 * @license csBuild 0.4.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/require-cs for details
 */

/*jslint strict: false */
/*global define */

define('cs',{
    //In your build file's paths config, map cs: 'csBuild' and
    //csBuild: 'cs'. This will allow using the regular cs module as the one
    //used in the optimization, but use this file as the build output for
    //the cs file.
    pluginBuilder: 'csBuild',
    load: function () {
        throw new Error('Cannot dynamically load CoffeeScript');
    }
});

/*
 RequireJS order 1.0.5 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
(function(){function k(a){var b=a.currentTarget||a.srcElement,c;if(a.type==="load"||l.test(b.readyState)){a=b.getAttribute("data-requiremodule");j[a]=!0;for(a=0;c=g[a];a++)if(j[c.name])c.req([c.name],c.onLoad);else break;a>0&&g.splice(0,a);setTimeout(function(){b.parentNode.removeChild(b)},15)}}function m(a){var b,c;a.setAttribute("data-orderloaded","loaded");for(a=0;c=h[a];a++)if((b=i[c])&&b.getAttribute("data-orderloaded")==="loaded")delete i[c],require.addScriptToDom(b);else break;a>0&&h.splice(0,
a)}var f=typeof document!=="undefined"&&typeof window!=="undefined"&&document.createElement("script"),n=f&&(f.async||window.opera&&Object.prototype.toString.call(window.opera)==="[object Opera]"||"MozAppearance"in document.documentElement.style),o=f&&f.readyState==="uninitialized",l=/^(complete|loaded)$/,g=[],j={},i={},h=[],f=null;define('order',{version:"1.0.5",load:function(a,b,c,e){var d;b.nameToUrl?(d=b.nameToUrl(a,null),require.s.skipAsync[d]=!0,n||e.isBuild?b([a],c):o?(e=require.s.contexts._,!e.urlFetched[d]&&
!e.loaded[a]&&(e.urlFetched[d]=!0,require.resourcesReady(!1),e.scriptCount+=1,d=require.attach(d,e,a,null,null,m),i[a]=d,h.push(a)),b([a],c)):b.specified(a)?b([a],c):(g.push({name:a,req:b,onLoad:c}),require.attach(d,null,a,k,"script/cache"))):b([a],c)}})})();

define('app/test',[], function() {
    return console.log('test');
});

define('app/test2',[], function() {
    return console.log('test2');
});
(function() {

  define('cs!app/main',["order!app/test", "app/test2"], function(test, test2) {
    var init;
    init = function() {
      return console.log('init');
    };
    return {
      init: init
    };
  });

}).call(this);

require([ "cs!app/main" ],
    function(main) {
        console.log("run.js");
        main.init();
    }
);
define("app/run", function(){});
