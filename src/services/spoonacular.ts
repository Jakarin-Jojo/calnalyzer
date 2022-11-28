import axios from "axios";

export async function getRandomFood() {
  const res = await axios.get(
    "https://api.spoonacular.com/recipes/random?apiKey=915e7e7a090e42399090d19cb2358e42",
    { params: { number: 30 } }
  );
  return res.data;
}

<<<<<<< HEAD
export async function getMealPlan(calories: number) {
  const res = await axios.get(
    "https://api.spoonacular.com/mealplanner/generate?apiKey=260b7315e22d4e2894fb24041101545a",
    { params: { targetCalories: calories } }
=======
export async function getMealPlan(calorie: number) {
  const res = await axios.get(
    `https://api.spoonacular.com/mealplanner/generate?apiKey=787ebf04276c47d781e1e76c972ff881&targetCalories=${calorie}`
>>>>>>> ef7a489 (Add calorie input)
  );
  return res.data;
}

export async function getForm() {
  const res = await axios.get("https://sheetdb.io/api/v1/cmqnl8n0lcadt");
  return res.data;
}

export async function getWorkOut() {
  const res = await axios.get("https://sheetdb.io/api/v1/y1mg9a0h0od0a");
  return res.data;
}
