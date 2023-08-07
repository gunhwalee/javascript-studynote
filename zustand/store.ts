import { create } from "zustand";

type UserState = {
  firstName: string
  lastName: string
}

type Action = {
  updateFirstName: (firstName: UserState["firstName"]) => void
  updateLastName: (lastName: UserState["lastName"]) => void
  reset: () => void
}

const initialState: UserState = {
  firstName: "",
  lastName: ""
};

const userStore = create<UserState & Action>((set) => ({
  ...initialState,
  updateFirstName: firstName => set(() => ({ firstName })),
  updateLastName: lastName => set(() => ({ lastName })),
  reset: () => set(initialState)
}));

export default userStore;
