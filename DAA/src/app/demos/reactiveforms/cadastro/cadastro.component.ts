import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  cadastroForm123: FormGroup;

  constructor() { }

  ngOnInit() {
    //Aqui é para validar o controle individualmente, diferente do FormGroup
    //let nome = new FormControl('');

    //Aqui é para validação em grupo
    //Posso tratar varios itens desse formulario, como se fosse o mesmo formulario
    this.cadastroForm123 = new FormGroup({
      nome12: new FormControl(''),
      cpf12: new FormControl(''),
      email12: new FormControl(''),
      senha12: new FormControl(''),
      senhaConfirmacao12: new FormControl(''),
    });

  }

  adicionarUsuario(){
    let x = this.cadastroForm123.value;
  }

}
