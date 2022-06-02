const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers, waffle } = require("hardhat");

describe("Greet Attack", function () {
    it("Should Check result of delegate call", async function () {
        // Deploy the helper contract
        const helperContract = await ethers.getContractFactory("GreetHelper");
        const _helperContract = await helperContract.deploy();
        await _helperContract.deployed();
        console.log("Greet Helper Contract's Address:", _helperContract.address);


        // Deploy the Attack contract
        const attackContract = await ethers.getContractFactory("Greeting");
        const _attackContract = await attackContract.deploy();
        await _attackContract.deployed();
        console.log("Attack Contract's Address", _attackContract.address);

        // Now lets attack the good contract

        // Start the attack
        let tx = await _attackContract.greeting(_helperContract.address);
        await tx.wait();
        console.log(`TX Greeting result > ${JSON.stringify(tx)}`);
        // expect(await ).to.equal(_attackContract.address);
    });
});
