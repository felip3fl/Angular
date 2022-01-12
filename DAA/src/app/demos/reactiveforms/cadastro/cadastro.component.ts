import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  cadastroForm123: FormGroup;

  constructor(private fb14: FormBuilder) { }

  ngOnInit() {
    //Aqui é para validar o controle individualmente, diferente do FormGroup
    //let nome = new FormControl('');

    //Aqui é para validação em grupo
    //Posso tratar varios itens desse formulario, como se fosse o mesmo formulario
    //é recomendado usar FormBuilder para código mais 'limpo'
    this.cadastroForm123 = this.fb14.group({
      nome12: [''],
      cpf12: [''],
      email12: [''],
      senha12: [''],
      senhaConfirmacao12: [''],
    });

  }

  adicionarUsuario(){
    let x = this.cadastroForm123.value;
  }

}
