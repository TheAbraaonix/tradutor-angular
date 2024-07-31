import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tentativas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tentativas.component.html',
  styleUrl: './tentativas.component.css'
})
export class TentativasComponent implements OnInit, OnChanges {
  @Input() public tentativas: number = 0;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
  }

  ngOnInit(): void {

  }
}
