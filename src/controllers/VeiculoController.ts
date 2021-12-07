import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Veiculo from "../entity/Veiculo";
import veiculoView from "../views/VeiculoView";

export default {
  async index(request: Request, response: Response) {
    const veiculoRepository = getRepository(Veiculo);
    const veiculo = await veiculoRepository.find();
    return response.json(veiculo);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const veiculoRepository = getRepository(Veiculo);
    const veiculo = await veiculoRepository.findOneOrFail(id);
    return response.json(veiculoView.render(veiculo));
  },
  async create(request: Request, response: Response) {
    const {
      nome,
      pais_origem,
      status,
      classificacao,
      tipo,
      fabricante,
      utilizadores,
      variantes,
      quantidade_produzida,
      quantidade_produzida_unidade,
      perido_servico,
      massa,
      massa_unidade,
      comprimento,
      comprimento_unidade,
      altura,
      altura_unidade,
      largura,
      largura_unidade,
      tripulacao,
      custo_unitario,
      custo_unitario_moeda,
      armamento,
      id_usuario,
      data_cadastro
    } = request.body;
    const veiculoRepository = getRepository(Veiculo);
    const data = {
      nome,
      pais_origem,
      status,
      classificacao,
      tipo,
      fabricante,
      utilizadores,
      variantes,
      quantidade_produzida,
      quantidade_produzida_unidade,
      perido_servico,
      massa,
      massa_unidade,
      comprimento,
      comprimento_unidade,
      altura,
      altura_unidade,
      largura,
      largura_unidade,
      tripulacao,
      custo_unitario,
      custo_unitario_moeda,
      armamento,
      id_usuario,
      data_cadastro
    };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      pais_origem: Yup.string().required(),
      status: Yup.string().required(),
      classificacao: Yup.string().required(),
      tipo: Yup.string().required(),
      fabricante: Yup.string().required(),
      utilizadores: Yup.string().required(),
      variantes: Yup.string().required(),
      quantidade_produzida: Yup.number().required(),
      quantidade_produzida_unidade: Yup.string().required(),
      perido_servico: Yup.string().required(),
      massa: Yup.number().required(),
      massa_unidade: Yup.string().required(),
      comprimento: Yup.number().required(),
      comprimento_unidade: Yup.string().required(),
      altura: Yup.number().required(),
      altura_unidade: Yup.string().required(),
      largura: Yup.number().required(),
      largura_unidade: Yup.string().required(),
      tripulacao: Yup.number().required(),
      custo_unitario: Yup.number().required(),
      custo_unitario_moeda: Yup.string().required(),
      armamento: Yup.string().required(),
      id_usuario: Yup.number().required(),
      data_cadastro: Yup.date().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const veiculo = veiculoRepository.create(data);
    await veiculoRepository.save(veiculo);
    return response.status(201).json(veiculo);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const veiculoRepository = getRepository(Veiculo);
    const veiculo = await veiculoRepository.delete(id);
    return response.status(200).json(veiculo);
  },
  async update(request: Request, response: Response) {
    const {
      id,
      nome,
      pais_origem,
      status,
      classificacao,
      tipo,
      fabricante,
      utilizadores,
      variantes,
      quantidade_produzida,
      quantidade_produzida_unidade,
      perido_servico,
      massa,
      massa_unidade,
      comprimento,
      comprimento_unidade,
      altura,
      altura_unidade,
      largura,
      largura_unidade,
      tripulacao,
      custo_unitario,
      custo_unitario_moeda,
      armamento,
    } = request.body;
    const veiculoRepository = getRepository(Veiculo);
    const data = {
      nome,
      pais_origem,
      status,
      classificacao,
      tipo,
      fabricante,
      utilizadores,
      variantes,
      quantidade_produzida,
      quantidade_produzida_unidade,
      perido_servico,
      massa,
      massa_unidade,
      comprimento,
      comprimento_unidade,
      altura,
      altura_unidade,
      largura,
      largura_unidade,
      tripulacao,
      custo_unitario,
      custo_unitario_moeda,
      armamento,
    };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      pais_origem: Yup.string().required(),
      status: Yup.string().required(),
      classificacao: Yup.string().required(),
      tipo: Yup.string().required(),
      fabricante: Yup.string().required(),
      utilizadores: Yup.string().required(),
      variantes: Yup.string().required(),
      quantidade_produzida: Yup.number().required(),
      quantidade_produzida_unidade: Yup.string().required(),
      perido_servico: Yup.string().required(),
      massa: Yup.number().required(),
      massa_unidade: Yup.string().required(),
      comprimento: Yup.number().required(),
      comprimento_unidade: Yup.string().required(),
      altura: Yup.number().required(),
      altura_unidade: Yup.string().required(),
      largura: Yup.number().required(),
      largura_unidade: Yup.string().required(),
      tripulacao: Yup.number().required(),
      custo_unitario: Yup.number().required(),
      custo_unitario_moeda: Yup.string().required(),
      armamento: Yup.string().required(),
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const veiculo = await veiculoRepository.update(id, data);
    return response.status(201).json(veiculo);
  },
};
