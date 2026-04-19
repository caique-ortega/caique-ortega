export default class Desenvolvedor {
    constructor({
        nome = "",
        area = "",
        localizacao = "",
        especialidade = "",
        habilidadesTecnicas = {}
    } = {}) {
        this.nome = nome;
        this.localizacao = localizacao;
        this.area = area;
        this.especialidade = especialidade;

        this.habilidadesTecnicas = {
            frontendWeb: [],
            frontendMobile: [],
            backend: [],
            tools: [],
            ...habilidadesTecnicas
        };
    }
}