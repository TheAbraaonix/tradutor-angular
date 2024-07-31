export class Coracao {
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = "images/coracao_cheio.png",
        public urlCoracaoVazio: string = "images/coracao_vazio.png"
    ) {}

    public exibeCoracao(): string {
        if (this.cheio) return this.urlCoracaoCheio;
        
        return this.urlCoracaoVazio;
    }
}