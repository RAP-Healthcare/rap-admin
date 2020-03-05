import { Component } from '@angular/core';

@Component({
  selector: 'xa-tiny-mce-page',
  template: `
    <nb-card>
      <nb-card-header>
        Tiny MCE
      </nb-card-header>
      <nb-card-body>
        <xa-tiny-mce></xa-tiny-mce>
      </nb-card-body>
    </nb-card>
  `,
})
export class TinyMCEComponent {
}
