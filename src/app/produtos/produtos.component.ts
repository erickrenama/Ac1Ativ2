import { Component } from '@angular/core';

interface Produto {
  nome: string;
  preco: number;
  descricao: string;
  emEstoque: boolean;
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent {
  produtos: Produto[] = [
    {
      nome: 'Bota',
      preco: 200,
      descricao: 'Nº34 ao 44',
      emEstoque: true,
    },
    {
      nome: 'Tenis',
      preco: 120,
      descricao: 'Nº35 ao 44',
      emEstoque: false,
    },
    {
      nome: 'Chinelo',
      preco: 140,
      descricao: 'Nº33 ao 42',
      emEstoque: true,
    },
  ];
}
