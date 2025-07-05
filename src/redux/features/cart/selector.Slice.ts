import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type TMerchantPayload = {
  merchantId: number;
  itemIds: number[] | [];
};

export type TSelectorSlice = {
  selectAll: boolean;
  selectedMerchants: number[];
  selectedProducts: number[];
};

const initialState: TSelectorSlice = {
  selectAll: false,
  selectedMerchants: [],
  selectedProducts: [],
};

const selectorSlice = createSlice({
  name: "selector",
  initialState,
  reducers: {
    toggleSelectAll: (state) => {
      if (state.selectAll) {
        state.selectAll = false;
        state.selectedMerchants = [];
        state.selectedProducts = [];
      } else {
        state.selectAll = true;
      }
    },
    selectSingleCartItem: (state, action: PayloadAction<number>) => {
      if (!state.selectedProducts.includes(action.payload)) {
        state.selectedProducts.push(action.payload);
      }
    },
    removeSelectionSingleCartItem: (state, action: PayloadAction<number>) => {
      state.selectedProducts = state.selectedProducts.filter(
        (item) => item !== action.payload
      );
    },
    selectSingleMerchantOnCart: (
      state,
      action: PayloadAction<TMerchantPayload>
    ) => {
      const { merchantId, itemIds } = action.payload;

      if (!state.selectedMerchants.includes(merchantId)) {
        state.selectedMerchants.push(merchantId);
      }

      itemIds.forEach((itemId) => {
        if (!state.selectedProducts.includes(itemId)) {
          state.selectedProducts.push(itemId);
        }
      });
    },
    removeSelectionMerchantOnCart: (
      state: TSelectorSlice,
      action: PayloadAction<TMerchantPayload>
    ) => {
      state.selectedMerchants = state.selectedMerchants.filter(
        (item) => item !== action?.payload?.merchantId
      );
      state.selectedProducts = action.payload.itemIds.filter(
        (itemId: number) => !state?.selectedProducts?.includes(itemId)
      );
    },
    removeAllSelection: (state) => {
      state.selectAll = false;
      state.selectedMerchants = [];
      state.selectedProducts = [];
    },
  },
});

export const selectSelector = (state: RootState) => state.selector;

export const {
  toggleSelectAll,
  selectSingleCartItem,
  removeSelectionSingleCartItem,
  selectSingleMerchantOnCart,
  removeSelectionMerchantOnCart,
  removeAllSelection,
} = selectorSlice.actions;

export default selectorSlice.reducer;
