import { create } from "zustand";

type UserState = {
  firstName: string
  lastName: string
}

type Action = {
  updateFirstName: (firstName: UserState["firstName"]) => void
  updateLastName: (lastName: UserState["lastName"]) => void
}

const userStore = create<UserState & Action>((set) => ({
  firstName: "",
  lastName: "",
  updateFirstName: firstName => set(() => ({ firstName })),
  updateLastName: lastName => set(() => ({ lastName })),
}));

export default userStore;
