import db from "../../lib/prisma.js";

export const getUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.json({ message: "Usuario encontrado", data: user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await db.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return res.json({ message: "Usuario creado", data: user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await db.user.update({
      where: { id },
      data: {
        name,
        email,
        password,
      },
    });
    return res.json({ message: "Usuario actualizado", data: user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
