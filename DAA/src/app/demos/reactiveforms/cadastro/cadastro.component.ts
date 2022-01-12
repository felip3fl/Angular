import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  cadastroForm123: FormGroup;
  usuario: Usuario;

  constructor(private fb14: FormBuilder) { }

  ngOnInit() {
    //Aqui é para validar o controle individualmente, diferente do FormGroup
    //let nome = new FormControl('');

    //https://angular.io/guide/form-validation
    //Aqui é para validação em grupo
    //Posso tratar varios itens desse formulario, como se fosse o mesmo formulario
    //é recomendado usar FormBuilder para código mais 'limpo'
    this.cadastroForm123 = this.fb14.group({
      nome12: ['', Validators.required],
      cpf12: [''],
      email12: [''],
      senha12: [''],
      senhaConfirmacao12: [''],
    });

  }

  adicionarUsuario(){
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm123.value)
  }

}
