import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { ProgressoComponent } from "../progresso/progresso.component";
import { TentativasComponent } from "../tentativas/tentativas.component";
import { Frase } from '../shared/frase.model';
import { frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [ProgressoComponent, TentativasComponent],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent implements OnDestroy {
  public frases: Frase[] = frases;
  public instrucao: string = "Traduza a frase:";
  public resposta: string = "";
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;
  public tentativas: number = 3;
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
  }
  
  ngOnDestroy(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value);
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr.toLowerCase() == this.resposta.toLowerCase()) {
      //trocar a pergunta
      this.rodada++;

      //progresso
      this.progresso += (100 / this.frases.length);

      //
      if (this.rodada === 4) {
        this.encerrarJogo.emit("vitoria");
      }

      //atualiza o objeto rodadaFrase
      this.atualizaRodada();
    } else {
      alert("A tradução está errada");
      this.tentativas--;

      if (this.tentativas === -1) {
        this.encerrarJogo.emit("derrota");
      }
    }
  }

  public atualizaRodada(): void {
    //define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada];

    //limpar a resposta
    this.resposta = "";
  }
}
