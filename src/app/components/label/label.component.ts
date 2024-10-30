import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
  @Input({ required: true, alias: 'text' })
  labelText: string = ""

  @Input({ required: true, alias: 'id' })
  labelId: string = ""
}
