import db from "../../lib/prisma.js";
import bcrypt from "bcryptjs";

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
    const userFound = await db.user.findUnique({
      where: { email },
    });

    if (userFound) {
      return res.status(400).json({ message: "Usuario ya existe" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
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

export const getAdminUsers = async (req, res) => {
  try {
    const users = await db.user.findMany({
      where: {
        role: "ADMIN",
      },
    });
    return res.json({ message: "Usuarios encontrados", data: users });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
