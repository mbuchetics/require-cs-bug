({
    appDir: "../",
    baseUrl: "js",
    dir: "../../public-build",
    findNestedDependencies: true,
    optimize: "none",
    paths: {
        "order":        "requirejs/order",
        "cs":           "requirejs/csBuild",
        "csBuild":      "requirejs/cs",
        "CoffeeScript": "requirejs/CoffeeScript"
    },
    modules: [
        {
            name: "app/run",
            exclude: ["CoffeeScript"]
        }
    ]
})
