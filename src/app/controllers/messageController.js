import Message from '../models/message';
import Resp from '../models/Resp';


class MessageController {
  async store(req, res) {
    try {
      const { text, from, to, conversa } = req.body;

      const mensag = await Message.create({ text, from, to });

      await Promise.all(conversa.map(async resp => {
        const resposta = new Resp({...resp, message: mensag._id});

        await resposta.save();

        mensag.conversa.push(resposta);
      }));

      await mensag.save();

      return res.json({
        mensag
      });
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: " Registro falhou" })
    }
  }

  async listar(req, res) {
    try {
      const message = await Message.find();

      return res.send({ message });

    } catch (err) {
      return res.status(400).send({ error: " ERRO AO LISTAR MENSAGENS" })
    }
  }

  async listarId(req, res) {
    try {
      const message = await Message.findById(req.params._id);

      return res.send({ message });

    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: " ERRO AO LISTAR DADOS " })
    }
  }


}

export default new MessageController();