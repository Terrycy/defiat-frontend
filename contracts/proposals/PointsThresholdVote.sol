pragma solidity ^0.6.0;

import "../_Vote.sol";

// contract must be given governor rights

contract PointsThresholdVote is _Vote {
    address public DeFiat_Points;

    constructor (
        address _DeFiat_Points,
        address _DeFiat_Gov,
        address _rewardToken,
        address _uniFactoryAddress,
        address _wethAddress
    ) public 
        _Vote(
            _DeFiat_Gov, 
            0, // no delay
            96, // 4 days
            "Points Threshold Vote",
            3, // 3 choices
            0,
            _rewardToken, 
            5 * 1e18,
            _uniFactoryAddress,
            _wethAddress
        )
    {
    }

    function proposalAction() public override returns (bool) {
        uint256 newRate;
        
        uint winningChoice = getWinningChoice();
        if (winningChoice == 0) {
            newRate = 10 * 1e18;
        } else if (winningChoice == 1) {
            newRate = 50 * 1e18;
        } else {
            newRate = 100 * 1e18;
        }

        IDeFiat_Points(DeFiat_Points).setTxTreshold(newRate);

        return true;
    }
}