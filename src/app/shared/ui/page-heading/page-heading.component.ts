import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrl: './page-heading.component.scss',
  imports:[NgIf],
  standalone:true,
})
export class PageHeadingComponent {

  @Input() title: string = '';
  @Input() subtitle: string = '';

  @Input() explorerBtn: boolean = false;
  @Input() AddBtn: boolean = false;
}
