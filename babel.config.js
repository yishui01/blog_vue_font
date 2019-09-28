module.exports = {
    "presets": [["env", {"modules": false}]],
    "plugins": [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ],
        "babel-plugin-dynamic-import-webpack"
    ]
}
