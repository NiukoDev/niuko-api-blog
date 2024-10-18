import db from "../../lib/prisma.js";

export const createPost = async (req, res) => {
  const { title, content, userId, categoryId } = req.body;
  try {
    const post = await db.post.create({
      data: {
        title,
        content,
        authorId,
      },
    });
    return res.json({ message: "Post creado", data: post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await db.post.findMany();
    return res.json({ message: "Posts encontrados", data: posts });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await db.post.findUnique({
      where: { id },
    });
    return res.json({ message: "Post encontrado", data: post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, userId, categoryId } = req.body;
  try {
    const post = await db.post.update({
      where: { id },
      data: {
        title,
        content,
        authorId,
      },
    });
    return res.json({ message: "Post actualizado", data: post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};