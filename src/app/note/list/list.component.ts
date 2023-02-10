import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  notes: any;
  currentNote: any;
  currentIndex = -1;
  searchTitle = '';

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes(): void {
    this.notesService.list().subscribe({next: (notes: any) => {
      this.notes = notes;
    }, error: (err: any) => { console.log(err); } 
    });    
  }

  deleteBook(id: number){
    this.notesService.delete(id).subscribe({ next: response => {
      this.getAllNotes(); 
    }, error: (err: any) => { console.log(err); } 
    });
  }
}
