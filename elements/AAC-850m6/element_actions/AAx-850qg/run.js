function(instance, properties, context) {
    // Função para recortar a imagem
    function recortar(imagem) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var width = imagem.width;
        var height = imagem.height;

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(imagem, 0, 0, width, height);
        ctx.globalCompositeOperation = 'destination-in';
        ctx.beginPath();
        if (instance.data.redonda) {
            ctx.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
        }
        ctx.fill();
        return canvas.toDataURL(); // Retornar a imagem como um URL de dados
    }

    // Lógica para recortar a imagem
    var croppedCanvas = instance.data.cropper.getCroppedCanvas();
    var previewBase64 = recortar(croppedCanvas);

    // Publicar o estado 'preview' com o base64 da imagem cortada
    instance.publishState('preview', previewBase64);
}
