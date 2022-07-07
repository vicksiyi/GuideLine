const namesRGB = ['r', 'g', 'b'];

export const webRGBToJsDesignRGB = (color) => {
    const rgb = {};
    namesRGB.forEach((e, i) => {
        rgb[e] = color[i] / 255;
    });
    if (color[3] !== undefined) rgb['a'] = color[3];
    return rgb;
}

// 十六进制转RGB
export const hexToJsDesignRGB = (color) => {
    let opacity = '';
    color = color.toLowerCase();
    if (color[0] === '#') color = color.slice(1);

    if (color.length === 3) {
        color = color.replace(/(.)(.)(.)?/g, '$1$1$2$2$3$3');
    } else if (color.length === 8) {
        const arr = color.match(/(.{6})(.{2})/);
        color = arr[1];
        opacity = arr[2];
    }
    const num = parseInt(color, 16);
    const rgb = [num >> 16, num >> 8 & 255, num & 255];

    if (opacity) {
        rgb.push(parseInt(opacity, 16) / 255);
        return webRGBToJsDesignRGB(rgb);
    } else {
        return webRGBToJsDesignRGB(rgb);
    }
}