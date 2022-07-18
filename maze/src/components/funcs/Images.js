import React from 'react'

export function ImageAll(context) {
    console.log(context)
    let imageFiles = [];
    context.keys().map((item) => imageFiles.push(
        { "name": item.replace('./', ''), "path": context(item) }
    ));
    return imageFiles
}