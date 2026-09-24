import { searchParamsSchema, SearchParamsValues } from "@/schema";
import { ReadonlyURLSearchParams } from "next/navigation";

// 1. Normalize Server Params (Next.js prop)
function normalizeServerSearchParams(
  searchParams: Record<string, string | string[] | undefined>
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(searchParams)) {
    if (typeof value === "string") {
      result[key] = value;
    } else if (Array.isArray(value) && value.length > 0) {
      result[key] = value[value.length - 1];
    }
  }
  return result;
}

// 2. Normalize Client Params (Browser API)
function normalizeClientSearchParams(
  params: URLSearchParams | ReadonlyURLSearchParams
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
}

// 3. Main Parser
export function getValidatedSearchParams(
  input:
    | Record<string, string | string[] | undefined>
    | URLSearchParams
    | ReadonlyURLSearchParams
): SearchParamsValues {
  const normalized =
    "entries" in input && typeof input.entries === "function"
      ? normalizeClientSearchParams(input)
      : normalizeServerSearchParams(input);

  return searchParamsSchema.parse(normalized);
}
