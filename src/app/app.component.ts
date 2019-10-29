import { Component } from '@angular/core';
import { PlaceholderService } from './services/placeholder.service';
import { ITodo } from './interfaces/i-todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: ITodo[];
  constructor(placeholderService: PlaceholderService){ 
    placeholderService.get().subscribe(data=> this.todos = data);
   }

}
