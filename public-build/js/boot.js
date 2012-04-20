require.config({
    paths: {
        "order":            "requirejs/order",
        "cs":               "requirejs/cs",
        "CoffeeScript":     "requirejs/CoffeeScript"
    }
});

require([ "app/run" ]);
