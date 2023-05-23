"use client";
import React, { useState } from "react";
import Image from "next/image";
import { reverseTokens, tokens } from "@/config/tokens";
import { StakingPool } from "@/hooks/useStakingPools";

import BNB from "@/public/bnb.png";
import BTCB from "@/public/btcb.png";
import BUSD from "@/public/busd.png";
import CAKE from "@/public/cake.png";
import ETH from "@/public/eth.png";
import USDT from "@/public/usdt.png";
import useToggle from "@/hooks/useToggle";
import Piggies from "./Piggies";
import { SlArrowDown } from "react-icons/sl";
import Divider from "./Divider";
import useTokenBalance from "@/hooks/useTokenBalance";
import { ethers } from "ethers";
import StakingEnabler from "./StakingEnabler";
import useStakingIsApproved from "@/hooks/useStakingIsApproved";
import usePoolUserInfo, { UserInfo } from "@/hooks/usePoolUserInfo";
import useStakingPoolReward from "@/hooks/useStakingPoolReward";
import useStake from "@/hooks/useStake";
import useClaim from "@/hooks/useClaim";
import Loader from "./Loader";
import { useRouter } from "next/router";

const getTokenSymbol = (contract: string = "default") => {
  const tokenImages = {
    [tokens.btcb]: "BTCB",
    [tokens.busd]: "BUSD",
    [tokens.cake]: "CAKE",
    [tokens.cake1]: "CAKE",
    [tokens.usdt]: "USDT",
    [tokens.eth]: "ETH",
    [tokens.wbnb]: "BNB",
    [tokens.planc]: "PLANC",
    default: "BNB",
  };

  return tokenImages[contract];
};

const getTokenImage = (contract: string) => {
  const tokenImages = {
    [tokens.btcb]: BTCB,
    [tokens.busd]: BUSD,
    [tokens.cake]: CAKE,
    [tokens.cake1]: CAKE,
    [tokens.usdt]: USDT,
    [tokens.eth]: ETH,
    [tokens.wbnb]: BNB,
    default: BNB,
  };

  if (contract in tokenImages) {
    return tokenImages[contract];
  }

  return tokenImages.default;
};

interface PoolProps {
  pool: StakingPool;
  info: React.ReactNode;
  details: React.ReactNode;
}

const PoolContext = React.createContext<{
  pool: StakingPool;
  isOpen: boolean;
  isBoosted: boolean;
  userInfo: {
    userInfo: UserInfo;
    refetch: () => void;
  };
  approval: {
    approved: boolean;
    loading: boolean;
    refetch: () => void;
  };
  onToggle: () => void;
} | null>(null);

const usePoolContext = () => {
  const context = React.useContext(PoolContext);
  if (!context)
    throw new Error("You can only use usePoolContext inside a PoolProvider");
  return context;
};

const PoolInfo = () => {
  const { pool, isBoosted } = usePoolContext();

  const tokenImage = getTokenImage(pool.lpToken);
  const quoteTokenImage = getTokenImage(pool.rewardToken);

  const firstTokenSymbol = getTokenSymbol(pool.lpToken ?? pool.stakeToken);
  const secondTokenSymbol = getTokenSymbol(pool.rewardToken);

  return (
    <>
      <div className="flex items-center gap-4 md:min-w-[300px]">
        <div className="flex">
          <Image src={tokenImage} alt="" width={30} className="z-20" />
          <Image
            src={quoteTokenImage}
            alt=""
            width={30}
            className="-translate-x-1 z-10"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-base md:text-xl text-[#EC6A98]">
            {firstTokenSymbol}-{secondTokenSymbol}
          </h3>
          <h3 className="md:hidden text-blue text-lg tracking-wider text-shadow">
            {pool.poolRewardPercent.toNumber()}%
          </h3>
        </div>
      </div>

      <div className="md:hidden cursor-pointer text-white">
        <SlArrowDown className="" />
      </div>

      <div className="hidden md:flex md:items-center md:justify-end flex-1 gap-28 mr-4 cursor-pointer">
        <div className="flex flex-col text-right">
          <h3 className="text-blue text-4xl tracking-wider text-shadow">
            {pool.poolRewardPercent.toNumber()}%
          </h3>
          {isBoosted && (
            <p className="text-blue text-xl tracking-wider">
              Time to Boost APE
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-white/75 text-lg tracking-wider">Earn</h3>
          <p className="text-white/75 text-lg tracking-wider">Balance</p>
          <p className="text-white/75 text-lg tracking-wider">Total Deposit</p>
        </div>

        <div className="flex flex-col items-end gap-1">
          <h3 className="text-white/75 text-lg tracking-wider">ARB</h3>
          <p className="text-white/75 text-lg tracking-wider">$0.000</p>
          <p className="text-white/75 text-lg tracking-wider">$0.000</p>
        </div>
      </div>

      {isBoosted ? <Piggies /> : null}
    </>
  );
};

const PoolDetails = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const { pool, isOpen, approval } = usePoolContext();

  return (
    <div
      className="flex flex-col gap-4 md:flex-row overflow-hidden z-20 translate-x-0 transition"
      style={{
        height: isOpen ? "100%" : "0",
        padding: isOpen ? "16px" : "0",
      }}
    >
      {approval.approved ? (
        children
      ) : (
        <div className="flex items-center justify-center h-52 w-full">
          <StakingEnabler
            tokenContract={
              router.asPath === "/vaults" ? pool.lpToken : pool.stakeToken!
            }
            onStakingEnabled={approval.refetch}
            isApprovalLoading={approval.loading}
          />
        </div>
      )}
    </div>
  );
};

function truncate(str: string, maxDecimalDigits: number) {
  if (str.includes(".")) {
    const parts = str.split(".");
    return parts[0] + "." + parts[1].slice(0, maxDecimalDigits);
  }
  return str;
}

const Pool = ({ pool, info, details }: PoolProps) => {
  const router = useRouter();

  const { state: isOpen, toggle: onToggle } = useToggle();
  const { userInfo, refetch: refetchUserInfo } = usePoolUserInfo(
    pool.poolNumber.toNumber()
  );

  const {
    isApproved,
    isLoading: isApprovalLoading,
    refetch: refetchApproval,
  } = useStakingIsApproved(
    router.asPath === "/vaults" ? pool.lpToken : pool.stakeToken!
  );

  const value = {
    pool,
    isOpen,
    onToggle,
    isBoosted: true,
    userInfo: {
      userInfo,
      refetch: refetchUserInfo,
    },
    approval: {
      approved: isApproved,
      loading: isApprovalLoading,
      refetch: refetchApproval,
    },
  };

  return (
    <PoolContext.Provider value={value}>
      <div className="relative flex flex-col overflow-hidden bg-[#110F10]">
        <div className="border-2 border-[#EC6A98]/60 absolute top-0 left-0 w-full h-full rounded-2xl" />
        <div
          className="relative overflow-hidden flex items-center justify-between w-full py-4 px-4 border-2 border-[#EC6A98]/60 rounded-2xl"
          style={{
            background: "linear-gradient(to bottom, #110F10 0%, #4B2670 100%)",
            filter: "drop-shadow(0px 0px 4px #EC6A98)",
          }}
          onPointerDown={onToggle}
        >
          {info}
        </div>
        {details}
      </div>
    </PoolContext.Provider>
  );
};

const PersonalData = () => {
  const {
    pool,
    userInfo: { userInfo, refetch: refetchUserInfo },
  } = usePoolContext();

  const { reward } = useStakingPoolReward(pool.poolNumber.toNumber());
  const { claim, isLoading } = useClaim(
    pool.poolNumber.toNumber(),
    refetchUserInfo
  );

  const onClaim = () => {
    claim();
  };

  return (
    <div className="flex flex-col justify-between gap-2 flex-1">
      <label className="flex flex-col text-white/50">
        Deposited
        <span className="bg-[#181D23] rounded-sm h-8 w-full p-2 flex items-center justify-start">
          {ethers.utils.formatEther(userInfo.poolBal)}&nbsp;{pool.token1Symbol}
        </span>
      </label>
      <label className="flex flex-col text-white/50">
        Profit
        <div className="flex items-center gap-2">
          <span className="bg-[#181D23] rounded-sm h-8 w-full p-2 flex items-center justify-start">
            {truncate(ethers.utils.formatEther(reward), 10)} REWARD
          </span>
        </div>
      </label>

      <div className="flex flex-wrap sm:flex-nowrap justify-between items-center">
        <h4 className="text-white/50 sm:flex-1">APY Details</h4>
        <div className="flex flex-col sm:flex-1">
          <p className="text-white">Base</p>
          <p className="text-white/50">{pool.poolRewardPercent.toNumber()}%</p>
        </div>
        <button
          type="button"
          onClick={onClaim}
          disabled={isLoading}
          className="bg-pink hover:bg-light-pink text-white text-center p-2 rounded-lg shadow-lg transition flex-1"
        >
          {isLoading ? (
            <div className="flex items-center justify-center py-1">
              <Loader />
            </div>
          ) : (
            "CLAIM"
          )}
        </button>
      </div>

      <div className="flex flex-row flex-wrap justify-between items-center gap-2">
        <a href="/" target="_blank" className="text-white/50">
          View Contract
        </a>
      </div>
    </div>
  );
};

const DepositForm = () => {
  const {
    pool,
    userInfo: { userInfo, refetch: refetchUserInfo },
  } = usePoolContext();

  const [amount, setAmount] = useState("0");
  const { balance } = useTokenBalance(pool.lpToken);

  const { stake, isLoading } = useStake(
    pool.poolNumber.toNumber(),
    amount,
    refetchUserInfo
  );

  const onSubmit = (e: any) => {
    e.preventDefault();
    stake();
  };

  const onChangeAmount = (e: any) => {
    if (e.target.value === "") setAmount("0");
    setAmount(e.target.value);
  };

  const onMaxClick = () => {
    setAmount(ethers.utils.formatEther(balance));
  };

  return (
    <div className="flex-1 flex justify-end">
      <div className="w-full">
        <form
          className="flex flex-col justify-between gap-2"
          onSubmit={onSubmit}
        >
          <h4 className="text-white">
            <span className="text-pink">DEPOSIT</span> | WITHDRAW
          </h4>
          <div className="flex flex-row items-center gap-2 bg-[#3D484E] text-pink p-1 rounded-lg">
            <input
              type="text"
              value={amount}
              onChange={onChangeAmount}
              className="w-full px-2 py-1 bg-transparent"
            />
            <label htmlFor="depositAmount">
              {(reverseTokens[pool.lpToken] || "").toUpperCase()}
            </label>
            <button
              type="button"
              className="bg-[#57616D] px-2 py-1 text-white"
              onClick={onMaxClick}
            >
              Max
            </button>
          </div>

          <p className="text-pink text-right">
            BALANCE: {ethers.utils.formatEther(balance)}&nbsp;
            {(reverseTokens[pool.lpToken] || "").toUpperCase()}
          </p>

          <Divider color="#CD2460" />

          <div className="text-center text-white">
            <h4>POOL BALANCE</h4>
            <p>
              {ethers.utils.formatEther(userInfo.poolBal)}{" "}
              {(reverseTokens[pool.lpToken] || "").toUpperCase()}
            </p>
          </div>

          <button
            type="submit"
            className="bg-pink hover:bg-light-pink text-white p-2 rounded-lg w-full shadow-lg transition"
          >
            {isLoading ? (
              <div className="flex items-center justify-center py-1">
                <Loader />
              </div>
            ) : (
              "Deposit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

Pool.Info = PoolInfo;
Pool.Details = PoolDetails;
Pool.PersonalData = PersonalData;
Pool.DepositForm = DepositForm;

export default function Pools({ pools }: { pools: StakingPool[] }) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {pools.map((pool) => (
        <Pool
          key={pool.poolNumber.toNumber()}
          pool={pool}
          info={<Pool.Info />}
          details={
            <Pool.Details>
              <Pool.PersonalData />
              <Pool.DepositForm />
            </Pool.Details>
          }
        />
      ))}
    </div>
  );
}
