import stakingAbi from "@/abi/stakingAbi.json";
import tokenStakingAbi from "@/abi/tokenStakingAbi.json";
import masterchefAbi from "@/abi/masterchef.json";

const contracts = {
  staking: {
    address: "0xA909c929232e86087147b32Fc28bd6649E009b7A",
    abi: stakingAbi,
  },
  tokenStaking: {
    address: "0x6fEf130e3D090C2fe453A7Bea1956870eAd88794",
    abi: tokenStakingAbi,
  },
  masterchef: {
    address: "0xf8996935878a97aa6a899c563c13484e2c37aa97",
    abi: masterchefAbi,
  },
} as {
  [x: string]: {
    address: `0x${string}`;
    abi: any;
  };
};

export default contracts;
