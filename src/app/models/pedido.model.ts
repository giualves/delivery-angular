import { PedidoItemModel } from "./pedido.item.model";
import { ProdutoModel } from "./produto.model";

export class PedidoModel  {

    public cli_uuid: string;
    public pedidoItem: PedidoItemModel[]; 
    public total: number;

    constructor(cli_uuid: string = "123", itens: PedidoItemModel[] = []) {
        this.cli_uuid = cli_uuid;
        this.pedidoItem = itens;
        this.total = 0;

        for (let item of this.pedidoItem) {
            this.total += item.produto.preco;
        }
    }
}