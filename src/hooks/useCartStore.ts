import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";
import { CartItemProps } from "@/types";

// Define store state and actions
interface CartState {
  items: CartItemProps[];

  addItem: (data: Omit<CartItemProps, "count">, count?: number) => void;

  updateItemCount: (
    id: string | number,
    selectedSize: string,
    selectedColor: string,
    newCount: number
  ) => void;

  removeItem: (
    id: string | number,
    selectedSize: string,
    selectedColor: string
  ) => void;

  getItemCount: (
    id: string | number,
    selectedSize: string,
    selectedColor: string
  ) => number;
  
  getTotalCount: () => number;

  getTotalPrice: () => number;

  clearCart: () => void;
}

// Zustand store with persistence
const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (data, count = 1) => {
        const currentItems = get().items;
        
        // Check if exact combination already exists (id + size + color)
        const existingItem = currentItems.find(
          (item) =>
            item.id === data.id && 
            item.selectedSize === data.selectedSize &&
            item.selectedColor === data.selectedColor
        );

        if (existingItem) {
          // Update count instead of adding duplicate
          const updatedItems = currentItems.map((item) =>
            item.id === data.id && 
            item.selectedSize === data.selectedSize &&
            item.selectedColor === data.selectedColor
              ? { ...item, count: item.count + count }
              : item
          );
          set({ items: updatedItems });
          toast.success("Item quantity increased.");
          return;
        }

        // Add new item
        set({ items: [...currentItems, { ...data, count }] });
        toast.success("Item added to cart.");
      },

      updateItemCount: (id, selectedSize, selectedColor, newCount) => {
        if (newCount <= 0) {
          get().removeItem(id, selectedSize, selectedColor);
          return;
        }

        const updatedItems = get().items.map((item) =>
          item.id === id && 
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
            ? { ...item, count: newCount }
            : item
        );
        set({ items: updatedItems });
        toast.success("Cart updated.");
      },

      // This remove items by id, size, and color, if id matches but size/color differ, it won't remove
      removeItem: (id, selectedSize, selectedColor) => {
        set({
          items: get().items.filter(
            (item) => !(
              item.id === id && 
              item.selectedSize === selectedSize &&
              item.selectedColor === selectedColor
            )
          ),
        });
        toast.success("Item removed from the cart.");
      },

      getItemCount: (id, selectedSize, selectedColor) => {
        const item = get().items.find(
          (item) => 
            item.id === id && 
            item.selectedSize === selectedSize &&
            item.selectedColor === selectedColor
        );
        return item ? item.count : 0;
      },

      getTotalCount: () => {
        return get().items.reduce((total, item) => total + item.count, 0);
      },

      clearCart: () => {
        set({ items: [] });
        toast.success("Cart cleared");
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => {
            const finalPrice = item.price - item.discount;
            return total + (finalPrice * item.count);
          },
          0
        );
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;