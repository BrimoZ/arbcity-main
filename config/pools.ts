type Address = `0x${string}`;

const poolsConfiguration = [
  {
    pid: 2,
    v1pid: 251,
    lpSymbol: "CAKE-BNB LP",
    lpAddress: "0x0eD7e52944161450477ee417DE9Cd3a859b14fD0",
    token: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
    quoteToken: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    boosted: true,
  },
  {
    pid: 3,
    v1pid: 252,
    lpSymbol: "BUSD-BNB LP",
    lpAddress: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
    token: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    quoteToken: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  },
  {
    pid: 133,
    lpSymbol: "USDT-BUSD LP",
    lpAddress: "0x36842F8fb99D55477C0Da638aF5ceb6bBf86aA98",
    token: "0x69bab60997a2f5cbee668e5087dd9f91437206bb",
    quoteToken: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    stableSwapAddress: "0x169F653A54ACD441aB34B73dA9946e2C451787EF",
    infoStableSwapAddress: "0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6",
    stableLpFee: 0.00005,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    pid: 10,
    v1pid: 261,
    lpSymbol: "ETH-BNB LP",
    lpAddress: "0x74E4716E431f45807DCF19f284c7aA99F18a4fbc",
    token: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    quoteToken: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  },
  {
    pid: 11,
    v1pid: 262,
    lpSymbol: "BTCB-BNB LP",
    lpAddress: "0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082",
    token: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    quoteToken: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  },
] as Array<{
  pid: number;
  v1pid?: number;
  lpSymbol: string;
  lpAddress: Address;
  token: Address;
  quoteToken: Address;
  stableSwapAddress?: Address;
  infoStableSwapAddress?: Address;
  stableLpFee?: number;
  stableLpFeeRateOfTotalFee?: number;
  boosted?: boolean;
}>;

export default poolsConfiguration;
