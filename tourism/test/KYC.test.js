

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const json = require('../build/contracts/AddProduct.json');

let accounts;
let owner;
let tourist;
let productOwner;
let TourismManagement;
const interface = json['abi'];
const bytecode = json['bytecode'];

beforeEach(async () => {
    try {
        accounts = await web3.eth.getAccounts();
    owner = accounts[0];
    tourist = accounts[1];
    productOwner = accounts[2];
    TourismManagement = await new web3.eth.Contract(interface).deploy({ data: bytecode }).send({ from: owner, gas: '4000000' });
    } catch (err) {}
    
});

describe('AddProduct', () => {
    it('Checks that the contract has been deployed, and contract address has been generated.', async () => {
        try {
            
            const contractAddress = await TourismManagement.options.address;
            assert.ok(contractAddress, 'Deploy testing failed.');
        }catch(err) {
            assert(err);
        }
    });
    it('Checks that the contract has been deployed by the owner.', async () => {
        const contractOwner = await TourismManagement.methods.admin().call();
        assert.equal(owner, contractOwner, 'The owner did not deploy the contract.');
    });
    it('Checks balance of owner', async () => {
        const ownerBalance = await TourismManagement.methods.balanceOf(owner).call();
        assert.equal(100000000000000, ownerBalance, 'Incorrect owner balance.');
    });
});
  