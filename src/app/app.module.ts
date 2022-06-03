import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { PedidoService } from './services/pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ProdutoService } from './services/produto.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PedidoComponent,
    ProdutosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [PedidoService,
    ApiService,
    ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
