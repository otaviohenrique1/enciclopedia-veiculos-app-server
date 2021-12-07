import Veiculo from "../entity/Veiculo";

export default {
  render(veiculo: Veiculo) {
    return {
      id: veiculo.id,
      nome: veiculo.nome,
      pais_origem: veiculo.pais_origem,
      status: veiculo.status,
      classificacao: veiculo.classificacao,
      tipo: veiculo.tipo,
      fabricante: veiculo.fabricante,
      utilizadores: veiculo.utilizadores,
      variantes: veiculo.variantes,
      quantidade_produzida: veiculo.quantidade_produzida,
      quantidade_produzida_unidade: veiculo.quantidade_produzida_unidade,
      perido_servico: veiculo.perido_servico,
      massa: veiculo.massa,
      massa_unidade: veiculo.massa_unidade,
      comprimento: veiculo.comprimento,
      comprimento_unidade: veiculo.comprimento_unidade,
      altura: veiculo.altura,
      altura_unidade: veiculo.altura_unidade,
      largura: veiculo.largura,
      largura_unidade: veiculo.largura_unidade,
      tripulacao: veiculo.tripulacao,
      custo_unitario: veiculo.custo_unitario,
      custo_unitario_moeda: veiculo.custo_unitario_moeda,
      armamento: veiculo.armamento,
      id_usuario: veiculo.id_usuario,
      data_cadastro: veiculo.data_cadastro,
    };
  }
};