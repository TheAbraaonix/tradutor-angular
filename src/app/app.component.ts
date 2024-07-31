import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopoComponent } from "./topo/topo.component";
import { PainelComponent } from "./painel/painel.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopoComponent, PainelComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
  public jogoEmAndamento: boolean = true;
  public tipoEncerramento: string = "";

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    this.tipoEncerramento = tipo;
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true;
    this.tipoEncerramento = "";
  }
}
