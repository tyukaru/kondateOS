/** 献立一覧カードに表示するデータ */
export interface Meal {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  cookingTime: string;
  tags: string[];
  nutrition: Nutrition;
}

/** PFC + カロリー */
export interface Nutrition {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

/** 献立詳細ページ用データ */
export interface MealDetail extends Meal {
  partnerComment: string;
  ingredients: Ingredient[];
  steps: string[];
  sideDishes: SideDish[];
}

/** 材料 */
export interface Ingredient {
  name: string;
  amount: string;
}

/** 副菜提案 */
export interface SideDish {
  name: string;
  description: string;
}

/** Firestore に保存するデータ */
export interface SaveMealInput {
  name: string;
  tags: string[];
  cookingTime: string;
  rating: number | null;
}

/** Firestore から取得した履歴データ */
export interface MealHistory {
  id: string;
  name: string;
  createdAt: any;
  rating: number | null;
  tags: string[];
  cookingTime: string;
}
