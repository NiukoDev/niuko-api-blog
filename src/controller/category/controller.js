import db from "../../lib/prisma.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await db.category.findMany();
    return res.json({ message: "Categorías encontradas", data: categories });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const category = await db.category.create({
      data: {
        name,
        description,
      },
    });
    return res.json({ message: "Categoría creada", data: category });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const category = await db.category.update({
      where: { id },
      data: {
        name,
        description,
      },
    });
    return res.json({ message: "Categoría actualizada", data: category });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await db.category.delete({
      where: { id },
    });
    return res.json({ message: "Category deleted" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
