import Usuario from "../entity/Usuario";

export default {
  render(usuario: Usuario) {
    return {
      id: usuario.id,
      nome: usuario.nome,
      perfil: usuario.perfil,
      email: usuario.email,
      senha: usuario.senha,
      data_nascimento: usuario.data_nascimento,
      data_cadastro: usuario.data_cadastro,
    };
  },
  renderMany(usuarios: Usuario[]) {
    return usuarios.map(usuario => this.render(usuario));
  }
};