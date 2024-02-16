const sharp = require('sharp'); 
const compress_iamge = require('compress-images');
const fs = requiere('fs');

let path = process.argv[2];
let width = Number(process.argv[3]);

function resize(path, width) {
    sharp(path).resize({width: width}).toFile('./temp/output_resize.jpg', (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('boa')
            compress(outputPath, "./compressed/")
        }
    })
}

function compress(pathInput, outputPath) {
    compress_images(pathInput, outputPath, {compress_force: false, statictic: false, autoupdade: true}, false,
        { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
        { png: { engine: 'pngquant', command: ['--quality=20-5-'] } },
        { svg: { engine: 'svgo', command: '--multipass' } },
        { gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] } }, function (error, completed, statistics) {
            console.log('----------');
            console.log(error);
            console.log(completed);
            console.log(statistics);
            console.log('---------');

            fs.unlink(pathInput, (err) => {
                if(err) {
                    console.log(err)
                } else {
                    console.log(pathInput, "apagado");
                }
            })
        });
}

resize(path, './temp/output_resize.jpg', width)