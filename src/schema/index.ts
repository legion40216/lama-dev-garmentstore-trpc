// schemas/index.ts
import { z } from "zod";
import { categories } from "@/data/data";

const validCategorySlugs = categories.map((c) => c.slug);
const fallbackCategory = validCategorySlugs[0] || "all";

const validFilters = ["newest", "oldest", "price_low_high", "price_high_low"] as const;

export const searchParamsSchema = z.object({
  category: z
    .enum(validCategorySlugs as [string, ...string[]])
    .optional()
    .catch(fallbackCategory)
    .default(fallbackCategory),
  
  filter: z
    .enum(validFilters)
    .optional()
    .catch("newest")
    .default("newest"),
});

export type SearchParamsValues = z.infer<typeof searchParamsSchema>;
export type FilterValue = typeof validFilters[number];
export type CategorySlug = typeof validCategorySlugs[number];