/*
    Dados do server
   * Nome : CotaboxTesteServer
   * Objetivo: Fornecer e receber dados para o frontend
   * Desenvolvedor: Hernani Almeida
   * data criacao: 22/12/2020 - 27/12/2020
   
*/

import { Router } from 'express';
import BootController from './app/controllers/botController';
import messageController from './app/controllers/messageController';


const routes = new Router();
routes.post('/bots', BootController.store);
routes.put('/bots/:_id', BootController.update);
routes.get('/bots', BootController.listar);
routes.get('/bots/:_id', BootController.listarId);
routes.delete('/bots/:_id', BootController.delete);
routes.post('/message', messageController.store);
routes.get('/message', messageController.listar);
routes.get('/message/:_id', messageController.listarId);





module.exports = routes;