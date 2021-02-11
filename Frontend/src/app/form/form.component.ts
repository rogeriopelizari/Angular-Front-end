import { CadeventoService } from '../core/cadastro/cadeventos.service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cadastro } from './../model/eventos.module';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;
  cadevento: Cadastro[] = [];

  constructor(private formBuilder: FormBuilder, private cadeventoService: CadeventoService) { }

  ngOnInit(): void {
    this.createForm();
    console.log(this.formulario)
    this.resgatarFormulario();
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]], // nome: new FormControl
      bairro: null,
      cidade: null,
      dia: null,
      hora: null,
    })
  }

  resgatarFormulario() {
    this.cadeventoService.getUsuario().subscribe((data: Cadastro[]) => {
      this.cadevento = [...data];
    })
  }

  enviarFormulario(){
    if(this.formulario.invalid){
      return alert('Preencha todos os campos!');
    }else{
      this.cadeventoService.postUsuario(this.formulario.value).subscribe(data => {
        alert("Cadastro efetuado com sucesso!")
        this.resgatarFormulario();
        this.formulario.reset();
      })
    }
  }

  excluir(id: number){
    this.cadeventoService.deleteUsuario(id).subscribe(data => {
      alert("Deletado com sucesso!")
      this.resgatarFormulario();
      this.formulario.reset();
    })
  }

}
