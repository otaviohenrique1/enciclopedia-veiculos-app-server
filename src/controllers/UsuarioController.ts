import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Usuario from "../entity/Usuario";
import usuarioView from "../views/UsuarioView";

export default {
  async login(request: Request, response: Response) {
    const { email, senha } = request.body;
    let existingUser: any;
    const usuarioRepository = getRepository(Usuario);
    try {
      existingUser = await usuarioRepository.findOne({ email: email });
    } catch (error) {
      const mensagemErro = "Login falhou, tente novamente mais tarde";
      return response.status(500).json({ message: mensagemErro });
    }
    if (!existingUser || existingUser.senha !== senha) {
      const mensagemErro = "Dados invalidos";
      console.log(`${email}, ${senha}`);
      return response.status(401).json({ message: mensagemErro });
    }
    let data_user = {
      id: existingUser.id,
      nome: existingUser.nome,
      email: existingUser.email,
    };
    return response.status(200).json({ message: "Logado com sucesso!", data_user });
  },
  async index(request: Request, response: Response) {
    const usuarioRepository = getRepository(Usuario);
    const usuario = await usuarioRepository.find();
    return response.json(usuarioView.renderMany(usuario));
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const usuarioRepository = getRepository(Usuario);
    const usuario = await usuarioRepository.findOneOrFail(id, { relations: ['usuarios'] });
    return response.json(usuarioView.render(usuario));
  },
  async create(request: Request, response: Response) {
    const { nome, perfil, email, senha, data_nascimento, data_cadastro } = request.body;
    const usuarioRepository = getRepository(Usuario);
    const data = { nome, perfil, email, senha, data_nascimento, data_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      perfil: Yup.string().required(),
      email: Yup.string().required(),
      senha: Yup.string().required(),
      data_nascimento: Yup.date().required(),
      data_cadastro: Yup.date().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const usuario = usuarioRepository.create(data);
    await usuarioRepository.save(usuario);
    return response.status(201).json(usuario);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const usuarioRepository = getRepository(Usuario);
    const usuario = await usuarioRepository.delete(id);
    return response.status(200).json(usuario);
  },
  async update(request: Request, response: Response) {
    const { id, nome, perfil, email, senha, data_nascimento } = request.body;
    const usuarioRepository = getRepository(Usuario);
    const data = { nome, perfil, email, senha, data_nascimento };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      perfil: Yup.string().required(),
      email: Yup.string().required(),
      senha: Yup.string().required(),
      data_nascimento: Yup.date().required(),
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const usuario = await usuarioRepository.update(id, data);
    return response.status(201).json(usuario);
  },
};