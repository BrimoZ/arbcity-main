// import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import PiggyMagnet from "@/public/piggy-magnet.svg";

import Divider from "@/components/Divider";
import DDATAmount from "@/components/DDATAmount";
import StakingPools from "@/components/StakingPools";
import Container from "@/components/Container";

import { readContract, readContracts } from "@wagmi/core";
import contracts from "@/config/contracts";
import { BigNumber } from "ethers";
import { StakingPool } from "@/hooks/useStakingPools";

const hydratePools = (pools: any[]): StakingPool[] => {
  return pools.reduce((acc, next) => {
    const obj = Object.create(null);

    for (const entries of Object.entries(next)) {
      const key = entries[0];
      const value = entries[1];

      if (value && typeof value === "object" && "hex" in value) {
        obj[key] = BigNumber.from(value);
      } else {
        obj[key] = value;
      }
    }

    acc.push(obj);
    return acc;
  }, []);
};

export default function Pool({
  pools,
  totalPools,
}: {
  pools: StakingPool[];
  totalPools: number;
}) {
  const hydratedPools = hydratePools(pools);

  return (
    <>
      <Head>
        <title>Pig Vault | Pool</title>
        <meta name="description" content="Zap Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main className="py-16">
          <div className="flex flex-col md:flex-row items-center md:justify-between max-w-5xl mx-auto gap-4 mb-16">
            <div className="max-w-md mx-auto md:max-w-none flex-1">
              <h1 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#6AA0BF] to-[#D60040]">
                ApeVaults Yield
                <br className="hidden xl:block" />
                Aggregator & Optimizer
              </h1>
              <p className="text-white/75 text-sm mt-4 max-w-md">
                It aggregates and compounds yields from others protocols, and
                saves you time and money compared to doing it yourself.
              </p>
            </div>

            <Image src={PiggyMagnet} alt="A pig with lots of coins around it" />
          </div>

          <DDATAmount />

          <Divider />

          <StakingPools pools={hydratedPools} totalPools={totalPools} />
        </main>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const totalPools = await readContract({
    address: contracts.tokenStaking.address,
    abi: contracts.tokenStaking.abi,
    functionName: "totalPools",
    args: [],
  });

  const nTotalPools = BigNumber.isBigNumber(totalPools)
    ? totalPools.toNumber()
    : 0;

  const pools = await readContracts({
    contracts: Array.from({ length: nTotalPools }, (_, idx) => ({
      address: contracts.tokenStaking.address,
      abi: contracts.tokenStaking.abi,
      functionName: "poolInfo",
      enabled: false,
      args: [idx],
    })),
  });

  return {
    props: {
      pools: JSON.parse(
        JSON.stringify(
          pools.map((pool) => ({
            active: pool.active,
            fullMaturityTime: pool.fullMaturityTime,
            poolDays: pool.poolDays,
            poolLimit: pool.poolLimit,
            poolNumber: pool.poolNumber,
            poolRewardPercent: pool.poolRewardPercent,
            poolStaked: pool.poolStaked,
            lpToken: pool.lpToken,
            rewardToken: pool.rewardToken,
            stakeToken: pool.stakeToken,
          }))
        )
      ),
      totalPools: nTotalPools,
    },
  };
}
