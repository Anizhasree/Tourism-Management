pragma solidity ^0.5.0;
import "./TourToken.sol";

contract TourismManagement is TourToken{
    uint256 public touristCount;
    
    enum gender {male, female, other}
    
    struct profile {
        string name;
        uint age;
        bool indian;
        string nationality;
        gender myGender;
        string blood;
        uint passNo;
        uint TokenBuy;
        address touristaddress;
        uint productRegNum;
        uint productBuyCount;
        
    }
     
    mapping(uint => profile) tourist;
    
    address payable admin;
    TourToken public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokenSold;
    
    address public touristAdd;
    uint256 public adminBalance;
    
    event Sell(address _buyer, uint256 _amount);
    
    constructor() public {
        //Asign admin
        admin = msg.sender;
        // setting token price as 100 wei per token
        tokenPrice = 10000 ;
    }
    
    // Function to buy tokens using ether value
    function buyTokens(uint256 _numberOfTokens) public  {
        // check admin not buying tokens
         // have check for sufficient ether balance
        touristAdd = msg.sender;
    
      
         // transfer ether value for tokens
        admin.transfer(_numberOfTokens );
         // transfer tokens
        transfer(msg.sender, _numberOfTokens);
        //trackin of sold Tokens
        tokenSold += _numberOfTokens;
        //sell event
        emit Sell(msg.sender, _numberOfTokens);
    }
    
    // Function to register Tourist
    function addTourist(uint _regNo, string memory _name, uint _age, bool _indian,string memory _nationality, gender _myGender, string memory _blood, uint _passNo, uint256 _TokenBuy,address _touristaddress) public payable {
        touristCount +=1;
        _TokenBuy = msg.value/10000;
       buyTokens(_TokenBuy);
        
        
        tourist[_regNo] = profile(_name, _age, _indian,_nationality, _myGender,_blood,_passNo,_TokenBuy,_touristaddress, 0, 0);
    }
    
    // Function to view Tourist details
    function getTourist(uint _regNo) public view returns (string memory _name, uint _age, bool _indian,string memory _nationality, gender _myGender,string memory _blood,uint _passNo,uint _TokenBuy,address _touristaddress, uint _productRegNum, uint _productBuyCount){
        _name = tourist[_regNo].name;
        _age = tourist[_regNo].age;
        _indian = tourist[_regNo].indian;
        _nationality = tourist[_regNo].nationality;
        _myGender = tourist[_regNo].myGender;
        _blood = tourist[_regNo].blood;
        _passNo = tourist[_regNo].passNo;
        _TokenBuy = tourist[_regNo].TokenBuy;
        _touristaddress = tourist[_regNo].touristaddress;
        _productRegNum = tourist[_regNo].productRegNum;
        _productBuyCount = tourist[_regNo].productBuyCount;
    }
    
    // Function to top-up token balance, called by Tourist
    function addTokens (uint _regNo,uint256 _TokenBuy) public payable returns (bool) {
        address touristTemp = tourist[_regNo].touristaddress;
        // add a require to check if tourist is already registered, best to have a flag in the struct
        require(msg.sender == touristTemp, "Only tourist can call this function");
        buyTokens(msg.value/10000);
        tourist[_regNo].TokenBuy = tourist[_regNo].TokenBuy + _TokenBuy;
        return true;
    }
}

contract AddProduct is TourismManagement {
    
    // number of products added
    uint256 public ProductCount;
    uint256 quantityCount; 
    
    
    struct details {
        uint productId;
        string name;
        uint productPrice;
        uint quantity;
        address productOwner;
    }
    
    
    mapping(uint => details) product;
     
    
    // Function to add Product to sell
    function addProductt(uint _productId, string memory _name, uint _token,uint _quantity, address _productOwner) public {
        ProductCount +=1;
        product[_productId] = details(_productId,_name, _token,_quantity, _productOwner);
    }
    // Function to display product
    function getProduct(uint productId) public view returns(uint _productId,string memory _name, uint _token,uint _quantity, address _productOwner){
        _productId = product[productId].productId;
         _name = product[productId].name;
        _token = product[productId].productPrice;
        _quantity = product[productId].quantity;
        _productOwner = product[productId].productOwner;
    
    }
    // Function to buy product called by Tourist
    function buyProduct(uint _regNo, uint _productId, uint _quantity1)public returns(uint _balancequantity){
        uint quantityCountInternal = product[_productId].quantity;
        _balancequantity = quantityCountInternal-_quantity1;
        quantityCount = _balancequantity;
        uint  value = (product[_productId].productPrice)*(_quantity1);
        require(product[_productId].quantity >= _quantity1, "Sufficient product quantity not available");
        require(msg.sender != product[_productId].productOwner, "Product Owner cannot buy their own product");
        transfer(product[_productId].productOwner, value);
        tourist[_regNo].TokenBuy = tourist[_regNo].TokenBuy - value;  
        tourist[_regNo].productRegNum = _productId;
        tourist[_regNo].productBuyCount = tourist[_regNo].productBuyCount + _quantity1;
        product[_productId].quantity = product[_productId].quantity - _quantity1;
    }
}
    









