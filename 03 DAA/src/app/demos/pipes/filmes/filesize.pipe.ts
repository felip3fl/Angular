import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    //use sempre esse padrao de nome, minusculo e sem espaco
    //esse nome vai ser usado no html
    name: 'filesize'
})
export class FileSizePipe implements PipeTransform {
    
    transform(size: number) {
        
        let tamanhoCalculado = (size / (1024 * 1024))
        let extension = ' MB'

        if (tamanhoCalculado > 1024) {
            tamanhoCalculado = (tamanhoCalculado / 1024);
            extension = ' GB'
        }

        //toFixed(2) = estou dizendo para exibir 2 casas depois da virgula
        return tamanhoCalculado.toFixed(2) + extension;
    }

}