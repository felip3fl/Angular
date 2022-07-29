import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { ProdutoModule } from '../produto.module';

import { DetalhesComponent } from './detalhes.component';

describe('DetalhesComponent', () => {
  let component: DetalhesComponent;
  let fixture: ComponentFixture<DetalhesComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ProdutoModule, AppModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesComponent);   
    component = fixture.componentInstance;

    component.imagens = "";
    component.produto = {
                          'id': 'string',
                          'nome': 'string',
                          'descricao': 'string',
                          'imagem': 'string',
                          'imagemUpload': 'string',
                          'valor': 1,
                          'dataCadastro': '01/01/2000',
                          'ativo': true,
                          'fornecedorId': 'string',
                          'nomeFornecedor': 'string'
                        }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
