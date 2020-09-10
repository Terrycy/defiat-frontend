export default {
  isLocalhost: window.location.href.indexOf("localhost") > -1, 
  networks: {
    1: {
      name: "main",
      token: "0xB6eE603933E024d8d53dDE3faa0bf98fE2a3d6f1",
      points: "0x8c9d8f5CC3427F460e20F63b36992f74AA19e27d",
      gov: "0x3Aa3303877A0D1c360a9FE2693AE9f31087A1381",
      price: "0x86d1d85bb861e13ecb49a396cce1b936307e0fb7",
      weth: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      pools: [
        {
          poolLogo: require("assets/img/defiat-dungeon.png"),
          poolTitle: "DeFiat Dungeon",
          poolSubtitle: "Stake DFT, earn DFT",
          poolAddress: "0xB508Dd7EeD4517bc66462cd384c0849d99B160fc",
          basePool: "0xB6eE603933E024d8d53dDE3faa0bf98fE2a3d6f1",
          stakedAddress: "0xB6eE603933E024d8d53dDE3faa0bf98fE2a3d6f1",
          rewardAddress: "0xB6eE603933E024d8d53dDE3faa0bf98fE2a3d6f1",
          stakedSymbol: "DFT",
          rewardSymbol: "DFT",
          isLiquidityToken: false
        },
        {
          poolLogo: require("assets/img/points-palace.png"),
          poolTitle: "Points Palace",
          poolSubtitle: "Stake DFT, earn DFTP",
          poolAddress: "0x973a2B39F7D59C0E59097f26C0921b60597aFe57",
          basePool: "0xB6eE603933E024d8d53dDE3faa0bf98fE2a3d6f1",
          stakedAddress: "0xB6eE603933E024d8d53dDE3faa0bf98fE2a3d6f1",
          rewardAddress: "0x8c9d8f5CC3427F460e20F63b36992f74AA19e27d",
          stakedSymbol: "DFT",
          rewardSymbol: "DFTP",
          isLiquidityToken: false
        },
        {
          poolLogo: require("assets/img/liquidity-lab.png"),
          poolTitle: "Liquidity Laboratory",
          poolSubtitle: "Stake DFT-UNI-V2, earn DFT",
          poolAddress: "0x7BACeF5001203724B1D8b5480dfb7238fcA1375c",
          basePool: "0xB6eE603933E024d8d53dDE3faa0bf98fE2a3d6f1",
          stakedAddress: "0xe2a1d215d03d7e9fa0ed66355c86678561e4940a",
          rewardAddress: "0xB6eE603933E024d8d53dDE3faa0bf98fE2a3d6f1",
          stakedSymbol: "DFT-UNI-V2",
          rewardSymbol: "DFT",
          isLiquidityToken: true
        },
      ]
    },
    4: {
      name: "rinkeby",
      token: "0xb571d40e4a7087c1b73ce6a3f29eadfca022c5b2",
      points: "0x70c7d7856e1558210cfbf27b7f17853655752453",
      gov: "0x064fd7d9c228e8a4a2bf247b432a34d6e1cb9442",
      price: "0xdbada9b7e7c6334b1a539e8e1a01c4eb3230d095",
      weth: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
      pools: [
        {
          poolLogo: require("assets/img/defiat-dungeon.png"),
          poolTitle: "DeFiat Dungeon",
          poolSubtitle: "Stake DFT, earn DFT",
          poolAddress: "0x39f2cfD89611Ed95D713CFC59A025d939C49Bd44",
          basePool: "0xb571d40e4a7087c1b73ce6a3f29eadfca022c5b2",
          stakedAddress: "0xb571d40e4a7087c1b73ce6a3f29eadfca022c5b2",
          rewardAddress: "0xb571d40e4a7087c1b73ce6a3f29eadfca022c5b2",
          stakedSymbol: "DFT",
          rewardSymbol: "DFT",
          isLiquidityToken: false
        },
        {
          poolLogo: require("assets/img/defiat-dungeon.png"),
          poolTitle: "DeFiat Dungeon (Short)",
          poolSubtitle: "Stake DFT, earn DFT",
          poolAddress: "0x5911a3849Bd10e2c463240b07435A9A262fb115A",
          basePool: "0xb571d40e4a7087c1b73ce6a3f29eadfca022c5b2",
          stakedAddress: "0xb571d40e4a7087c1b73ce6a3f29eadfca022c5b2",
          rewardAddress: "0xb571d40e4a7087c1b73ce6a3f29eadfca022c5b2",
          stakedSymbol: "DFT",
          rewardSymbol: "DFT",
          isLiquidityToken: false
        },
        // {
        //   poolLogo: require("assets/img/points-palace.png"),
        //   poolTitle: "Points Palace",
        //   poolSubtitle: "Stake DFT, earn DFTP",
        //   poolAddress: "0x995804C14d1AaF5bf3E52Cb18e3feaF1a24725e8",
        //   basePool: "0xb571d40e4a7087c1b73ce6a3f29eadfca022c5b2",
        //   stakedAddress: "0xb571d40e4a7087c1b73ce6a3f29eadfca022c5b2",
        //   rewardAddress: "0x70c7d7856e1558210cfbf27b7f17853655752453",
        //   stakedSymbol: "DFT",
        //   rewardSymbol: "DFTP",
        //   isLiquidityToken: false
        // },
        {
          poolLogo: require("assets/img/liquidity-lab.png"),
          poolTitle: "Liquidity Laboratory",
          poolSubtitle: "Stake DFT-UNI-V2, earn DFT",
          poolAddress: "0x9BCC9ef46eCe3688228648a19E5515f62020F83c",
          basePool: "0xb571d40e4a7087c1b73ce6a3f29eadfca022c5b2",
          stakedAddress: "0xf7426eacb2b00398d4cefb3e24115c91821d6fb0",
          rewardAddress: "0xb571d40e4a7087c1b73ce6a3f29eadfca022c5b2",
          stakedSymbol: "DFT-UNI-V2",
          rewardSymbol: "DFT",
          isLiquidityToken: true
        },
      ],
      proposals: [
        {
          proposalTitle: "Proposal 1",
          proposalAddress: "",
          proposalOperator: "",
        },
      ]
     }
  },
};
