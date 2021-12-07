import Categoria from "../entity/Categoria";

export default {
  render(categoria: Categoria) {
    return {
      id: categoria.id,
      nome: categoria.nome,
      id_usuario: categoria.id_usuario,
      data_cadastro: categoria.data_cadastro,
    };
  },
  renderMany(usuarios: Categoria[]) {
    return usuarios.map(usuario => this.render(usuario));
  }
};