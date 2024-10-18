import db from "../../lib/prisma.js";

export const createComment = async (req, res) => {
  const { content, userId, postId } = req.body;
  try {
    const comment = await db.comment.create({
      data: {
        content,
        authorId,
        postId,
      },
    });
    return res.json({ message: "Comentario creado", data: comment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    await db.comment.delete({
      where: { id },
    });
    return res.json({ message: "Comentario eliminado" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}