import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import type { SaveMealInput, MealHistory } from "@/types/meal";

/**
 * 献立を Firestore の meals コレクションに保存する
 */
export async function saveMeal(input: SaveMealInput): Promise<string> {
  const docRef = await addDoc(collection(db, "meals"), {
    name: input.name,
    tags: input.tags,
    cookingTime: input.cookingTime,
    rating: input.rating,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

/**
 * meals コレクションから全展歴を取得（新しい順）
 */
export async function getMeals(): Promise<MealHistory[]> {
  const q = query(collection(db, "meals"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  })) as MealHistory[];
}

/**
 * 指定 meal の rating を更新する
 */
export async function updateMealRating(
  id: string,
  rating: number
): Promise<void> {
  const ref = doc(db, "meals", id);
  await updateDoc(ref, { rating });
}
