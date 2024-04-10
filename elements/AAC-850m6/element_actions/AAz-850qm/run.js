function(instance, properties, context) {
    if (instance.data.salvar && instance.data.croppedCanvas) {
        // Obtém o canvas recortado e a extensão do arquivo a partir dos dados armazenados
        var croppedCanvas = instance.data.croppedCanvas;
        var fileType = instance.data.fileType;

        // Converte o canvas recortado em uma representação base64
        var base64 = croppedCanvas.toDataURL();

        // Remove o cabeçalho da representação base64
        var dados = base64.substring(base64.indexOf(',') + 1);

        // Função de callback para lidar com o resultado do upload
        function Salvar(err, url) {
            if (url) {
                instance.publishState('bubble', url);
            }
        }

        // Faz o upload do conteúdo recortado
        context.uploadContent(properties.nome + '.' + fileType, dados, Salvar);
    }
}
