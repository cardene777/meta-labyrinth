exports.imageAll = function (context) {
    let imageFiles = [];
    context.keys().map((item, index) => imageFiles.push(
        { "name": item.replace('./', ''), "path": context(item) }
    ));
    return imageFiles
}