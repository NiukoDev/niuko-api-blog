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
    // Obtener parámetros de paginación de la solicitud
    const { page = 1, size = 10 } = req.query;
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(size, 10);

    // Calcular valores de skip y take
    const skip = (pageNumber - 1) * pageSize;
    const take = pageSize;

    // Obtener el total de registros
    const totalPosts = await db.post.count();

    // Obtener los registros paginados
    const posts = await db.post.findMany({
      skip,
      take,
      include: {
        author: true,
        categories: {
          include: {
            category: true,
          },
        },
      },
    });

    // Calcular el número total de páginas
    const totalPages = Math.ceil(totalPosts / pageSize);

    // Responder con los datos y la información de paginación
    return res.json({
      message: "Posts encontrados",
      data: posts,
      pagination: {
        totalPosts,
        totalPages,
        currentPage: pageNumber,
        pageSize,
      },
    });
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
