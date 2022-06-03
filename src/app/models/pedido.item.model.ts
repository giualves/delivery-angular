import { ProdutoModel } from "./produto.model";

export class PedidoItemModel {
    public produto: ProdutoModel;
    public uuid: string;
    public quantidade: number;


    constructor(produto: ProdutoModel, uuid: string, quantidade: number){
        this.produto = produto;
        this.uuid = uuid;
        this.quantidade = quantidade;
        
    }
}