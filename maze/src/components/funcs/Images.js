import React from 'react'

export const Image = () => {
    exports.imageAll = function (context) {
        let imageFiles = [];
        context.keys().map((item, index) => imageFiles.push(
            { "name": item.replace('./', ''), "path": context(item) }
        ));
        return imageFiles
    }
}

export default Image;