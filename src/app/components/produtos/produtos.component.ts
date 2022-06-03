import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/models/produto.model';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public produtos: ProdutoModel[];


  constructor(private produtoService: ProdutoService, private pedidoService: PedidoService) { 

      this.produtos = produtoService.produtos;
  }

  ngOnInit(): void {
  }

  public adicionar(uuid: string): void {
    console.log(uuid);
    const produto = this.produtos.find( produto => produto.uuid === uuid);

    if (produto) {
      this.pedidoService.adicionarItem(produto);  
    }

  
  }

  public remover(uuid: string): void {
    
    const produto = this.produtos.find( produto => produto.uuid === uuid);

    if (produto) {
      this.pedidoService.RemoverItem(produto);
    }
  }

}
