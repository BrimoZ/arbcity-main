const tokens = {
  cake: "0xa96818CA65B57bEc2155Ba5c81a70151f63300CD",
  cake1: "0x43474b869808E4bD6056e65F954F6cA42fC8166E",
  wbnb: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  busd: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
  usdt: "0x69bab60997a2f5cbee668e5087dd9f91437206bb",
  btcb: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
  eth: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
  planc: "0xbB267B8d0a55fF614BA84Ca20152266BFEB87B74",
  cakelp: "0x43474b869808E4bD6056e65F954F6cA42fC8166E",
};

const reverseTokens = Object.entries(tokens).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
}, {} as { [x: string]: string });

export { tokens, reverseTokens };
