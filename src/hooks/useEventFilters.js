import { useMemo } from "react";
import { useSearchParams } from "react-router";

export function useEventFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const isPaidParam = searchParams.get("isPaid");
  const filters = useMemo(() => {
    return {
      format: searchParams.get("format") || "",
      isPaid:
        isPaidParam === "true" ? true : isPaidParam === "false" ? false : "",
      category: searchParams.get("category") || "",
    };
  }, [searchParams]);

  function updateParams(updates) {
    const params = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, val]) => {
      if (val !== undefined && val !== "" && val !== null) {
        params.set(key, String(val));
      } else {
        params.delete(key);
      }
    });
    setSearchParams(params);
  }

  function apiQueryString() {
    const params = new URLSearchParams();
    if (filters.format) {
      params.set("format", filters.format);
    }

    if (filters.isPaid !== "") {
      params.set("isPaid", String(filters.isPaid));
    }
    if (filters.category) {
      params.set("category", String(filters.category));
    }
    return params.toString();
  }

  return {
    apiQueryString,
    updateParams,
    searchParams,
    filters,
  };
}
