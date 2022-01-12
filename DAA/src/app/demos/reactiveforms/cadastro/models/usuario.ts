// Aqui poderia usar como CLASS , ao inves de interface
// diferença eh que na classe, eu poderia adicionar um tipo de comportarmento
// não é o caso aqui, então melhor usar interface
// export CLASS Usuario {
export interface Usuario {
    id: string;
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    senhaConfirmacao: string;
}