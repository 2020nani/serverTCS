/*
    Dados do server
   * Nome : CotaboxTesteServer
   * Objetivo: Fornecer e receber dados para o frontend
   * Desenvolvedor: Hernani Almeida
   * data criacao: 22/12/2020 - 27/12/2020
   
*/

/* exporta os models para criacao no banco de dados atraves do sequelize */
import mongoose from 'mongoose'
import {URL} from '../config/database'

mongoose.connect(URL , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
 }, function (error) {
 if (!error) return;
 console.log('Falha na conexao!', error)
})
mongoose.Promise = global.Promise;

module.exports = mongoose