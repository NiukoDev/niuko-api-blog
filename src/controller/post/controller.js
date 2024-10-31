import db from "../../lib/prisma.js";

export const createPost = async (req, res) => {
  const { title, content, authorId, image, infographic, categories } = req.body;
  try {
    const post = await db.post.create({
      data: {
        title,
        content,
        authorId,
        image,
        infographic,
      },
    });

    const categoryIds = categories.split(',');
    for (const categoryId of categoryIds) {
      await db.postCategory.create({
      data: {
        postId: post.id,
        categoryId,
      },
      });
    }

    return res.json({ message: "Post creado", data: post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await db.post.findMany({
      include: {
        author: true,
        categories: {
          include: {
            category: true,
          },
        },
      },
    });
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
        image,
        infographic,
      },
    });
    return res.json({ message: "Post actualizado", data: post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await db.post.delete({
      where: { id },
    });
    return res.json({ message: "Post eliminado" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
