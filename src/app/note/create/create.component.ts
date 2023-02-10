import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  note = {
    title: '',
    body: ''
  };

  isBookAdded = false;

  constructor(private notesService: NotesService, private router: Router) {}

  ngOnInit(): void {}

  addNote(): void {
    const data = {
      title: this.note.title,
      body: this.note.body
    };

    if(!data.title || !data.body){
      alert('Plase add title and body!');
      return;
    }

    this.notesService.create(data).subscribe({ next: response => {
      this.router.navigate(['/notes'])
    }, error: (err: any) => { console.log(err); } 
    });
  }
}
