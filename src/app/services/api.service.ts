import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { PedidoItemModel } from "../models/pedido.item.model";
import { PedidoModel } from "../models/pedido.model";
import { ProdutoModel } from "../models/produto.model";

@Injectable()
export class ApiService {

    constructor (private httpClient: HttpClient) {



    }

    public getProdutos(): Observable<ProdutoModel[]> {

        const headers = new HttpHeaders({
            "Content-Type" : "application/json",
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiR2l1bGlhbm5vIiwidXVpZCI6IjBhMjM4YjZjLWM1MDQtMTFlYy05ZDY0LTAyNDJhYzEyMDAwMiIsInVzZXJfbmFtZSI6ImZkYy5naXVAZ21haWwuY29tIiwianRpIjoiNTU0ZTE2YzUtZDQ3NC00Y2I5LTg2YzUtY2IzMGQyOGVkODE5IiwiY2xpZW50X2lkIjoiZGVsaXZlcnkiLCJzY29wZSI6WyJSRUFEIiwiV1JJVEUiXX0.EFIQ7wYmW0efGb4_mymH5ehK-xUz_0bmH6JVV6SYF1U"
        });       

        return this.httpClient.get<ProdutoModel[]>("http://localhost:8080/produtos", {headers: headers});
        
    }

    public salvarPedido(pedido: PedidoModel) {

        const headers = {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiR2l1bGlhbm5vIiwidXVpZCI6IjBhMjM4YjZjLWM1MDQtMTFlYy05ZDY0LTAyNDJhYzEyMDAwMiIsInVzZXJfbmFtZSI6ImZkYy5naXVAZ21haWwuY29tIiwianRpIjoiNTU0ZTE2YzUtZDQ3NC00Y2I5LTg2YzUtY2IzMGQyOGVkODE5IiwiY2xpZW50X2lkIjoiZGVsaXZlcnkiLCJzY29wZSI6WyJSRUFEIiwiV1JJVEUiXX0.EFIQ7wYmW0efGb4_mymH5ehK-xUz_0bmH6JVV6SYF1U"
        };
        
        console.log(pedido);

        this.httpClient.post("http://localhost:8080/pedidos", pedido, {'headers':headers}).
            subscribe(res => {
                alert('Pedido salvo com sucesso!')
                console.log(res)
                document.location.reload();
            },
            
            erro => {

               let erroMsg: string ;
               if (erro.status === 0) {
                alert('Não foi possivel obter uma conexão com o servidor.');
               } else {
                alert('Não foi possivel gravar o registro \n\n' + erro.error.mensagem);
               }                
               console.log(erro)
            });
        
       // return this.httpClient.post<PedidoModel>("http://localhost:8080/pedidos", pedido, {'headers':headers});

    }

}