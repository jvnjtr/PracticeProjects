import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
  standalone: false,
})
export class FileSizePipe implements PipeTransform {
  transform(value: number, ...args: any[]): string {
    if (value === 0) {
      return '0 Bytes';
    }
     if (value === null || value === undefined) {
      return '0 B';
    }

    if (value < 1024) {
      return value + ' B';
    }

    if (value < 1024 * 1024) {
      return (value / 1024).toFixed(2) + ' KB';
    }

    if (value < 1024 * 1024 * 1024) {
      return (value / (1024 * 1024)).toFixed(2) + ' MB';
    }

    return (value / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
  }
}
