import { create } from "zustand";

type StepStore = {
  currentStep: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetStep: () => void;
};

export const useStepStore = create<StepStore>((set) => ({
  currentStep: 1,
  setStep: (step) => set({ currentStep: step }),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(0, state.currentStep - 1),
    })),
  resetStep: () => set({ currentStep: 0 }),
}));
