"use server";

import Tag from "@/database/tag.model";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";

import Question from "@/database/question.model";

export async function createQuestion(params: any) {
  try {
    connectToDatabase();
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}
