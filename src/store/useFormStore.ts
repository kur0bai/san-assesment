import { create } from "zustand";

type FormData = {
  business: { name: string; type: string; address: any };
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  setBusiness: (data: Partial<FormData["business"]>) => void;
  setContact: (data: Partial<FormData["contact"]>) => void;
  clearForm: () => void;
};

export const useFormStore = create<FormData>((set) => ({
  business: { name: "", type: "", address: {} },
  contact: { firstName: "", lastName: "", email: "", phone: "" },
  setBusiness: (data) =>
    set((state) => ({ business: { ...state.business, ...data } })),
  setContact: (data) =>
    set((state) => ({ contact: { ...state.contact, ...data } })),
  clearForm: () =>
    set({
      business: { name: "", type: "", address: {} },
      contact: { firstName: "", lastName: "", email: "", phone: "" },
    }),
}));
