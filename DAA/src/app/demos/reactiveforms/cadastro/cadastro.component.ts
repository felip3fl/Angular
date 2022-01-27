import { AfterViewInit, Component, OnInit,ElementRef, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormControlName } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { Usuario } from './models/usuario';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';
import { ValidationMessages,GenericValidator,DisplayMessage } from './generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit, AfterViewInit {

  // aqui consigo uma coleção de itens do formulario do HTML
  // atraves do FormControlName, ele retorna um controle de formGroup
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  cadastroForm123: FormGroup;
  usuario: Usuario;
  formResult321: string = '';
  MASKS = utilsBr.MASKS;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  mudancasNaoSalvas: boolean;

  constructor(private fb14: FormBuilder) {
    this.validationMessages = {
      nome12: {
        required: 'Nome requerido',
        minlength: 'minimo 2 caracteres',
        maxlength: 'maximo 20 caracteres'
      },
      cpf12: {
        required: 'Informe o CPF',
        cpf: 'CPF inválido'
      },
      email12: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      senha12: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      senhaConfirmacao12: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);

   }

  ngAfterViewInit(): void {
    //Outro exemplo de @ViewChildren - @ViewChild decorators=
    //aqui criei uma colegacao de Observable, vai ser disparada para cada item do formulario
    //atraves do evento 'blur'
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    //merge aplica o efeito para a toda colecao
    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm123);
      
      this.mudancasNaoSalvas = true;
    });
  }

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
      nome12: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(20)]],
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

      this.mudancasNaoSalvas = true;
    }{
      this.formResult321 = "Não submeteu!"
    }
  }

}
