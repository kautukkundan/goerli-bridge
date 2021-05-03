// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WGoethToken is ERC20 {
  address admin;

  constructor() ERC20("wrapped GoETH", "wGOETH") {
    admin = msg.sender;
  }

  modifier onlyAdmin {
    require(msg.sender == admin, "caller not admin");
    _;
  }

  function updateAdmin(address _newAdmin) external onlyAdmin {
    admin = _newAdmin;
  }

  function mint(address _to, uint256 _amount) external onlyAdmin {
    _mint(_to, _amount);
  }

  event BurnTokens(address indexed from, uint256 value);

  function burn(uint256 _amount) external {
    _burn(msg.sender, _amount);
    emit BurnTokens(msg.sender, _amount);
  }
}
