import { Component, OnInit,} from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskArray = [{taskName: 'Brush Teeth', isCompleletd: false}];



  constructor(){

  }

  ngOnInit(): void {
    
  }
  onSubmit(form: NgForm){
    console.log(form);
    
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleletd: false
    })

    form.reset();
  }

  onDelete(index: number){
    console.log(index);
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number){
    console.log(this.taskArray);
    
    this.taskArray[index].isCompleletd = !this.taskArray[index].isCompleletd;
  }
}

