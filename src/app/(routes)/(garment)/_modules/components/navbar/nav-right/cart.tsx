"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import useCart from "@/hooks/useCartStore";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const { items, getTotalCount} = useCart();
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    setTotalCount(getTotalCount());
  }, [getTotalCount, items]);

  return (
    <Button className="relative"
    variant="outline"
    size={"icon"}
    asChild
    >
      <Link href="/checkout" className="block">
        <Badge className="absolute -top-2 -right-2 bg-red-500">
          {totalCount}
        </Badge>
        <ShoppingBasket className="size-6"/>
      </Link>
    </Button>
  );
}
