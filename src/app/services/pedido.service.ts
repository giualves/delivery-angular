import { Injectable } from "@angular/core";
import { PedidoItemModel } from "../models/pedido.item.model";
import { PedidoModel } from "../models/pedido.model";
import { ProdutoModel } from "../models/produto.model";
import { ApiService } from "./api.service";

@Injectable()
export class PedidoService {
    constructor(private apiService:ApiService) {}

    public pedido: PedidoModel = new PedidoModel();

    public adicionarItem(produto: ProdutoModel): void {

        const item = this.pedido.pedidoItem.find( item => item.produto.uuid === produto.uuid);

        if (item) {
            item.quantidade++;
        } else {
            this.pedido.pedidoItem.push( new PedidoItemModel(produto, produto.uuid, 1));
        }
        
        this.pedido.total += Number( produto.preco );

    }

    public RemoverItem(produto: ProdutoModel): void {

        const item = this.pedido.pedidoItem.find( item => item.produto.uuid === produto.uuid);

        if (item) {
            item.quantidade--;

            this.pedido.total -= produto.preco;

            if (item.quantidade === 0) {
                this.pedido.pedidoItem.splice(this.pedido.pedidoItem.indexOf(item), 1);
            }
        }

    }

    public GravarPedido(pedido: PedidoModel) {
        console.log("adicionando item");
        console.log("cliente: " + pedido.total)
        this.apiService.salvarPedido(pedido);
        
    }

}