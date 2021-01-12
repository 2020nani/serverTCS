import Boot from '../models/bot';


class BootController {
  async store(req, res) {
    try {
      const nome = await Boot.create(req.body);
      return res.json({
        nome
      });
    } catch (err) {
      return res.status(400).send({ error: " Registro falhou" })
    }
  }

  async listar(req, res) {
    try {
      const bots = await Boot.find();

      return res.json({ bots });

    } catch (err) {
      return res.status(400).send({ error: " ERRO AO LISTAR DADOS" })
    }
  }

  async listarId(req, res) {
    try {
      const bot = await Boot.findById(req.params._id);

      return res.json({ bot });

    } catch (err) {
      return res.status(400).send({ error: " ERRO AO LISTAR DADOS " })
    }
  }

  async update(req, res) {
    try {
      const { nome } = req.body;
      const bot = await Boot.findByIdAndUpdate(req.params._id , {
        nome
      }, {new: true});

      return res.json( "Atualizado com sucesso" );

    } catch (err) {
      return res.status(400).send({ error: " ERRO AO LISTAR DADOS " })
    }
  }

  async delete(req, res) {
    try {
      const bot = await Boot.findByIdAndDelete(req.params._id);

      return res.json( "Deletado com sucesso" );

    } catch (err) {
      return res.status(400).send({ error: " ERRO AO LISTAR DADOS " })
    }
  }

 
}

export default new BootController();