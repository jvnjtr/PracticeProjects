import { OnlyCharacter } from './only-character';
import { ElementRef } from '@angular/core';

describe('OnlyCharacter', () => {
  it('should create an instance', () => {
   const mockElementRef = new ElementRef(document.createElement('input'));

    const directive = new OnlyCharacter(mockElementRef);

    expect(directive).toBeTruthy();
  });
});
