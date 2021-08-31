import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Comentarios } from './comentarios';
import { ComentariosService } from './comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input() id!: number;
  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;

  constructor(private comentarioService: ComentariosService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.comentarios$ = this.comentarioService.buscaComentarios(this.id);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)]
    })
  }

  gravar(): void {
    const commentText = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentarioService.incluirComentario(this.id, commentText)
      .pipe(
        switchMap(() => this.comentarioService.buscaComentarios(this.id)),
        tap(() => {
          this.comentarioForm.reset();
        })
      )

  }
}
