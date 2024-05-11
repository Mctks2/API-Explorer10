const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");
class UserAvatarController {
  async update(request, response) {
    const user_id = request.user.id;
    const avatarFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    const user = await knex("users").
    where({ id: user_id }).first();

    if (!user) {
      // Verificar se o usário existe
      throw new AppError("Somente usários autenticados podem mudar o avatar", 400);
    }

    if (user.avatar) {
      // Deletar imagem antiga
      await diskStorage.deleteFile(user.avatar);
    }

    // Salvar imagem
    const filename = await diskStorage.saveFile(avatarFilename);
    user.avatar = filename;

    await knex("users").update(user).where({ id: user_id });

    return response.json(user);
  }
}

module.exports = UserAvatarController;
