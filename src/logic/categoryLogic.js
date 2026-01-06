import { getFromStorage, saveToStorage } from "./storage";

const CATEGORY_KEY = "categories";

export const getCategories = () => {
  return getFromStorage(CATEGORY_KEY);
};

export const createCategoryIfNotExist = (name) => {
  const categories = getCategories();

  const existing = categories.find(
    (cat) => cat.name.toLowerCase() === name.toLowerCase()
  );

  if (existing) return existing;

  const newCategory = {
    id: Date.now(),
    name,
  };

  const updated = [...categories, newCategory];
  saveToStorage(CATEGORY_KEY, updated);

  return newCategory;
};

export const deleteCategory = (categoryId) => {
  const categories = getCategories();
  const updated = categories.filter((cat) => cat.id !== categoryId);
  saveToStorage(CATEGORY_KEY, updated);
  return updated;
};
