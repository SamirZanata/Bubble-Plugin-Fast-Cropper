function(instance, properties, context) {
    function Cortar(img) {
        var area, aspect;
        if (instance.data.carregado) {
            instance.data.cropper.destroy();
        }

        switch (properties.aspect) {
            case "1:1.51":
                aspect = 0.662251655;
                break;
            case "1.51:1":
                aspect = 1.510000000;
                break;
            case "1:1":
                aspect = 1;
                break;
            case "1:1.50":
                aspect = 0.666666667;
                break;
            case "1:1.33":
                aspect = 0.751879699;
                break;
            case "1:1.25":
                aspect = 0.8;
                break;
            case "1:0.66":
                aspect = 1.515151515;
                break;
            case "1:0.75":
                aspect = 1.333333333;
                break;
            case "1:0.80":
                aspect = 1.250000000;
                break;
            case "Free":
                aspect = NaN;
                break;
        }

        switch (properties.area) {
            case "10%":
                area = 0.1;
                break;
            case "20%":
                area = 0.2;
                break;
            case "30%":
                area = 0.3;
                break;
            case "40%":
                area = 0.4;
                break;
            case "50%":
                area = 0.5;
                break;
            case "60%":
                area = 0.6;
                break;
            case "70%":
                area = 0.7;
                break;
            case "80%":
                area = 0.8;
                break;
            case "90%":
                area = 0.9;
                break;
            case "100%":
                area = 1;
                break;
            default:
                area = 1; // Valor padrão
                break;
        }

        cropper = new Cropper(img, {
            aspectRatio: aspect,
            viewMode: properties.viewmode,
            dragMode: 'move',
            autoCropArea: area,
            cropBoxResizable: properties.cropboxresizable,
            minContainerWidth: properties.mincontainerwidth,
            minContainerHeight: properties.mincontainerheight,
            minCropBoxWidth: properties.mincropboxwidth,
            minCropBoxHeight: properties.mincropboxheight,
            center: true, // Centraliza a imagem na viewport
            autoCrop: true, // Ajusta automaticamente a área de recorte
            zoomOnWheel: false,
            ready: function () {
                cropper.zoomTo(1);
            }
        });

        instance.data.carregado = true;
        instance.data.cropper = cropper;
    }

    // Lógica para selecionar a imagem da div e chamar a função Cortar
    let div = document.getElementById(properties.elemento);
    let imageElement = div.querySelector('img');
    if (imageElement) {
        Cortar(imageElement);
    } else {
        console.warn('Nenhuma imagem encontrada na div especificada.');
    }
}
