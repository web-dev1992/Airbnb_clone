"use client";
import { Input } from "../ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {  useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

function NavSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState<string>(
    searchParams.get("search")?.toString() || ""
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 500);

  useEffect(() => {
    if (!searchParams.get("search")) setSearch("");
  }, [searchParams]);
  return (
    <Input
      type="search"
      placeholder="find a property..."
      className="max-w-xs dark:bg-muted "
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
}
export default NavSearch;
