import { create } from "zustand";

export enum RequestType {
  ERROR = "error",
  OK = "ok",
  PROGRESS = "progress",
}

type RequestStore = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  requestType: RequestType | null;
  setRequestType: (type: RequestType) => void;
};

export const useRequestStore = create<RequestStore>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  requestType: null,
  setRequestType: (type: RequestType) => set({ requestType: type }),
}));
