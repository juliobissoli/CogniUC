import { Injectable } from '@angular/core';

@Injectable()
export class FileHelp {
  convertJson2CsvArray(data: Array<any>, fields?: Array<string>, hiddenHeader?: boolean) {
    if (data.length > 0) {
      const header = fields || Object.keys(data[0]);

      const csvContent = data
        .map((e) =>
          header.map((field: any) => (e[field] !== undefined ? e[field] : '--')).join(','),
        )
        .join('\n');

      const headerStr = header.join(',');
      return hiddenHeader ? [csvContent].join('\n') : [headerStr, csvContent].join('\n');
    }
    return undefined;
  }

  downloadFile(fileBlob: Blob, name?: string) {
    if (fileBlob) {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(fileBlob);
        link.setAttribute('href', url);
        link.setAttribute('download', name || 'exemplo.txt');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }


  decodeCsv2JSON(file: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        const csv = reader.result;
        if (typeof csv === 'string') {
          const array = csv.toString().split('\n');
          let separator = ';';
          if (array && array[0].split(separator).length === 1) separator = ',';
          const firstLine = array[0].split(separator);
          if (!array[1] || (array && array.length <= 2 && array[1].length > 1)) {
            reject(new Error('File malformed'))
          }

          const headers = firstLine;
          headers.forEach((column, index) => (headers[index] = column.replace(/[^A-Za-z_]/g, '')));


          const result: Array<any> = [];
          array.forEach((line, index) => {
            const obj: any = {};
            if (index > 0) {
              const fields = line.split(separator);
              fields.forEach((cell, indice) => {
                if (cell === '' || cell.length === 0) {

                  return;
                }
                obj[headers[indice]] = cell;
              });
              result.push(obj);
            }
          });
          resolve(result)

        }

      }

    })
  }




}
