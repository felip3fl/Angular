import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { Usuario } from './models/usuario';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  cadastroForm123: FormGroup;
  usuario: Usuario;
  formResult321: string = '';
  MASKS = utilsBr.MASKS;

  constructor(private fb14: FormBuilder) { }

  ngOnInit() {
    let senha = new FormControl('',[Validators.required, CustomValidators.rangeLength([6,15])]);
    let senhaConfirmacao = new FormControl('',[Validators.required, 
      CustomValidators.rangeLength([6,15]), 
      CustomValidators.equalTo(senha)]);

    //Aqui é para validar o controle individualmente, diferente do FormGroup
    //let nome = new FormControl('');

    //https://angular.io/guide/form-validation
    //Aqui é para validação em grupo
    //Posso tratar varios itens desse formulario, como se fosse o mesmo formulario
    //é recomendado usar FormBuilder para código mais 'limpo'
    this.cadastroForm123 = this.fb14.group({
      nome12: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(150)]],
      cpf12: ['',[Validators.required, NgBrazilValidators.cpf]],
      email12: ['', [Validators.required, Validators.email]],
      senha12: senha,
      senhaConfirmacao12: senhaConfirmacao,
    });

  }

  adicionarUsuario(){
    if(this.cadastroForm123.dirty && this.cadastroForm123.valid){
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm123.value);
      this.formResult321 = JSON.stringify(this.cadastroForm123.value);
    }{
      this.formResult321 = "Não submeteu!"
    }
  }

}
