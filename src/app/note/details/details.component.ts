import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentNote: any;

  constructor(
    private notesService: NotesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getNote(this.route.snapshot.paramMap.get('id'));
  }

  getNote(id: string | null): void {
    this.notesService.getItem(id).subscribe({next: (note: null) => {
      this.currentNote = note;
    }, error: (err: any) => { console.log(err); } 
    });   
  }

  updateNote(): void {
    this.notesService.update(this.currentNote.id, this.currentNote)
    .subscribe({next: response => {
      this.router.navigate(['/notes'])
    }, error: (err: any) => { console.log(err); } 
    });
  }

  deleteNote(): void {
    this.notesService.delete(this.currentNote.id)
    .subscribe({next: response => {
      this.router.navigate(['/notes'])
    }, error: (err: any) => { console.log(err); } 
    });
  }
}
