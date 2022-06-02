// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Greeting {
   
    function greeting(address helper) public returns (string memory){
        (bool success, bytes memory result) = helper.delegatecall(abi.encodeWithSignature("getGreeting()"));
        require(success, "Call to helper failed");
        return abi.decode(result, (string));
    }
}


contract GreetHelper {
    string public greeting = "hello";

    function getGreeting() public view returns(string memory){
       return greeting;
    }
}

