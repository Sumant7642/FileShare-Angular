import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
dropDrownFlag!:boolean;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  dropDown(){
    this.dropDrownFlag=true;
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent | KeyboardEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.dropDrownFlag = false;
    }
  }

}
