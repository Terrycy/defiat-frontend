import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import getWeb3 from '../../getWeb3';
import constants from '../../constants';
import { connect } from 'react-redux';
import DeFiat_Token from 'contracts/DeFiat_Token.json';
import DeFiat_Points from 'contracts/DeFiat_Points.json';
import DeFiat_Gov from 'contracts/DeFiat_Gov.json';
import DeFiat_Farming from 'contracts/DeFiat_Farming.json';
import { 
  setWeb3State, 
  setContractState, 
  setAccountsState, 
  setNetworkState
 } from 'store/action';
import { NoWallet } from './NoWallet';
import { Wallet } from './Wallet';
import { Staking } from './Staking';
import { withRouter } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap';
import { toast } from 'react-toastify'

const Dashboard = (props) => {
  const {
    location,
    //web3,
    setWeb3,
    accounts,
    setAccount,
    contracts,
    setContractInstance,
    network,
    setNetwork
  } = props;

  const [showDashboard, setShowDashboard] = useState(false);
  const [activeTab, setTab] = useState('wallet');

  useEffect(() => {
    async function loadWeb3() {
      try {
        // Get network provider and web3 instance.
        const w3 = await getWeb3();
  
        // Use web3 to get the user's accounts.
        const accts = await w3.eth.getAccounts();
  
        // Get the contract instance.
        const networkId = await w3.eth.net.getId();
        const ntk = constants.networks[networkId];
        
        // Remove this when adding contract to main net
        if (networkId === 1) {
          setNetwork({ network: ntk });
          return;
        }


        const smartContracts = {
          token: new w3.eth.Contract(DeFiat_Token.abi, ntk["token"]),
          points: new w3.eth.Contract(DeFiat_Points.abi, ntk["points"]),
          gov: new w3.eth.Contract(DeFiat_Gov.abi, ntk["gov"]),
          farming: new w3.eth.Contract(DeFiat_Farming.abi, ntk["farming"])
        }
        // Set web3, accounts, and contract to the state.
        setWeb3({ web3: w3 });
        setAccount({ accounts: accts });
        setContractInstance({ contracts: smartContracts });
        setNetwork({ network: ntk });
        setShowDashboard(true);
      } catch (error) {
        // Catch any errors for any of the above operations.
        // alert(`Failed to load web3, accounts, or contract. Check console for details.`);
        console.error(error);
      }
    }
    if (accounts && accounts.length && contracts && network) {
      setShowDashboard(true);
    } else {
      loadWeb3();
    }
  }, [location])

  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          {/* <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          /> */}

          <div className="content">
            {network === undefined || network.name === 'main' ? ( // remove this statement on mainnet launch
              <Row className="justify-content-center">
                <Col lg="3">
                  <img alt="loading" src={require("assets/img/LoadingScales.gif")} />
                  <h2>Awaiting Mainnet Launch</h2>
                </Col>
              </Row>
            ) : (
              <>
                {showDashboard ? (
                  <>
                    <Container>
                      <Nav tabs>
                        <NavItem>
                          <NavLink
                            className={activeTab === 'wallet' ? 'active' : '' }
                            onClick={() => setTab('wallet')}
                            style={{cursor:"pointer"}}
                          >
                            Account
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={activeTab === 'staking' ? 'active' : '' }
                            onClick={() => setTab('staking')}
                            style={{cursor:"pointer"}}
                          >
                            Staking
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={activeTab}>
                        <TabPane tabId="wallet">
                          <Wallet 
                            contracts={contracts} 
                            accounts={accounts}
                            network={network} 
                          />
                        </TabPane>
                        <TabPane tabId="staking">
                          <Staking
                            contracts={contracts} 
                            accounts={accounts}
                            network={network} 
                          />
                        </TabPane>
                      </TabContent>
                    </Container>
                  </>
                ) : (
                  <div className="content-center" onClick={() => console.log(props)}>
                    <NoWallet />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

Dashboard.propTypes = {
  setWeb3: PropTypes.func.isRequired,
  setAccount: PropTypes.func.isRequired,
  setContractInstance: PropTypes.func.isRequired,
  setNetwork: PropTypes.func.isRequired,
};

//May not need state
const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // connectMetamaskWallet: (payload) => {
    //   dispatch(connectWallet(payload));
    // },
    setWeb3: (payload) => {
      dispatch(setWeb3State(payload));
    },
    setAccount: (payload) => {
      dispatch(setAccountsState(payload));
    },
    setContractInstance: (payload) => {
      dispatch(setContractState(payload));
    },
    setNetwork: (payload) => {
      dispatch(setNetworkState(payload));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));