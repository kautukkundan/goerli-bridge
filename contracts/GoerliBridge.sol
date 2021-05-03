// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;

contract GoerliBridge {
  address admin;

  event DepositGoeth(address sender, uint256 value);

  constructor() {
    admin = msg.sender;
  }

  modifier onlyAdmin {
    require(msg.sender == admin, "caller not admin");
    _;
  }

  function depositTokens() external payable {
    emit DepositGoeth(msg.sender, msg.value);
  }

  function releaseTokens(address payable _receiver, uint256 _amount) external {
    _receiver.transfer(_amount);
  }
}
