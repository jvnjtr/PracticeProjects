import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnlyCharacter]',
  standalone: false,
})
export class OnlyCharacter {
  @Input() allowedCharacters: string = '';
  constructor(private el: ElementRef) {}
  @HostListener('input',['$event'])
  onInputChange(event: any) {
     let value = this.el.nativeElement.value;

    // Escape regex special chars
    const escapedChars =
      this.allowedCharacters.replace(
        /[-\/\\^$*+?.()|[\]{}]/g,
        '\\$&'
      );

    // Allow alphabets + allowed special chars + single space
    const regex = new RegExp(
      `[^a-zA-Z ${escapedChars}]`,
      'g'
    );

    // Remove invalid characters
    value = value.replace(regex, '');

    // Remove leading spaces
    value = value.replace(/^\s+/g, '');

    // Replace multiple spaces with single space
    value = value.replace(/\s{2,}/g, ' ');

    // Update input value
    this.el.nativeElement.value = value;

    // Stop propagation if modified
    if (event.target.value !== value) {

      event.stopPropagation();

    }
  }
}
