import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class ButtonComponent {

  @Input() public text!:string;
  @Input() public isLoading:boolean = false;
  @Output() public clickButton = new EventEmitter();

  public buttonClicked(){
    this.clickButton.emit();
  }

}
