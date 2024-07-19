import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  name = "Satyam"
  status = "single"
  salary = 8000
  isDisabled = false
  isInput = "test karo"

  onChange(e:Event){
    const value = (e.target as HTMLInputElement ).value;
    console.log("called"+ value);
    this.isInput = value
  }
}
