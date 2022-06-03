import { Component, OnInit } from '@angular/core';
import { PedidoModel } from 'src/app/models/pedido.model';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  public pedido: PedidoModel;

  constructor(private pedidoService: PedidoService) {
    this.pedido = pedidoService.pedido;
   }

  public adicionar(): void {
    console.log("adicionando pedido: " + this.pedido.total);
    if (this.pedido.pedidoItem.length > 0) {
      this.pedidoService.GravarPedido(this.pedido);
    } else {
      alert('Por favor informe os itens');
    }
        
  } 

  ngOnInit(): void {
  }

  

}
