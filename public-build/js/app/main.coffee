# does not work
define(["order!app/test", "app/test2"], (test, test2) ->
    init = ->
        console.log('init');

    init: init
)

# works
#define(["app/test", "app/test2"], (test, test2) ->
#    init = ->
#        console.log('init');
#
#    init: init
#)
