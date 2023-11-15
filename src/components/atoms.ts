import { atom } from "recoil";

type PlayerStatus = Record<string, boolean>;

export const playerStatusState = atom<PlayerStatus>({
  key: "playerStatusState",
  default: {
    dog1: true,
    dog2: true,
    dog3: true,
    dog4: true,
    dog5: true,
    dog6: true,
    dog7: true,
    cat1: true,
    cat2: true,
    cat3: true,
    cat4: true,
    cat5: true,
    cat6: true,
    cat7: true,
  },
});
