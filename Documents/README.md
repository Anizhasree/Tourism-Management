**Tourism**
                  

**Brief description:**

India, the country rich in cultural and traditional diversities for the tourism sector and each region have its own traditional art-forms, crafts, and services. This is a project proposal that takes the current tourism system sector into a token-based system. This is an initiative to avoid the sales of the fake or duplicate relics and artifacts to the customers. Tourists and foreigners can convert their money into Ethereum based tokens from government authorized dealers. The converted tokens will be stored in their online wallets. These tokens can be used to purchase authentic traditional crafts, products, tickets, coupons, other services, and subscriptions from India by giving their genuine KYC (Know your customer) details to the authorized distributors, which leads to the reduction of fraud activities in the tourism sector.



**Description:**

The project is an Ethereum based Dapp that takes the current tourism system sector into a token-based system and provides the sales of relics and artifacts to the customers in exchange for these tokens.
India has vast locations and markets for its tourism and travel activities for anyone regardless of native citizens or foreigners. It offers a diverse portfolio of adventures, shopping, explorations, food, travel, historical monuments, and artifacts. In 2018 itself, the tourism sector in India generated an amount of ₹16.91 lakh crore as revenue. The launch of several new branding and marketing initiatives by the Indian Government such as the ‘Athiti Devo Bhava’ and  ‘Incredible India!’ has provided a boost in the growth of the sector.
But along with this exponential financial growth in the tourism and travel sector, the fraud and scams activities also arises. Some of the fraud and scams happening in India are, "Giving your driver or shop owner 1000 rupees and waiting for change, just for him to say you only handed over 100", "Fake train ticket offices", "police asking to pay a road fee", "extra bill", "local people expecting a tip", etc.
Against these misbehaviors to the tourists, we are utilizing blockchain for tourism-related sub-sectors, providing transparent real-time pricing and choice to the customers in the markets. Implementing these sub-sectors will help the tourism sector to grow beyond the borders and access global consumers. The blockchain in tourism and markets will allow smaller organizations equal opportunity to attract tourists and increase their sales.
The tourists or foreigners can convert their money into Ethereum based tokens from any Government authorized dealers by completing their KYC (Know your customer) details. The above-converted tokens will be transferred to the customer and these tokens will be stored in the online wallet of the customer. When the customers need to purchase some products or choose any subscriptions available from the seller, the tokens can be used for trade instead of money or denominations. The required tokens will be deducted from the wallet of the customer and will be transferred to the wallet of the seller. The customer can again convert their money into tokens for adding more tokens to their wallets as like there requirements.




**System requirements:**

1. Operating system: Ubuntu 16.04.
2. System RAM: 4 GB or above (recommended 8 GB).
3. Free System storage: 4 GB on /home.

**Installation prerequisites:**

1. Ensure that NodeJS is installed in the system. For more information about NodeJS, go to NodeJS website [ https://nodejs.org ].
   To check if NodeJs is installed, open a terminal window, run following command:

   $ node -v

2. If NodeJS is not installed, go to [ https://nodejs.org ] and download the compatible version based on your operating system.
   To install through a terminal window, run following command:

   $ sudo apt-get install -y nodejs

3. Ensure that Truffle is installed. Truffle Suite helps to develop Dapps easily. For more information, go to [ https://truffleframework.com/ ].
   To check if Truffle is installed, run following command in the terminal window:

   $ truffle version

4. If Truffle is not installed, run following command in the terminal window:

   $ npm install -g truffle


5. Ensure that Geth is installed. Geth is the official Golang implementation of the Ethereum protocol.
   To check if Geth is installed, run following command in the terminal window:

   $ geth version

6. To install Geth, run following command in the terminal window:

   $ sudo apt-get install software-properties-common
   $ sudo add-apt-repository -y ppa:ethereum/ethereum
   $ sudo apt-get update
   $ sudo apt-get install ethereum

7. Ensure that Go and C compilers are installed. To check if Go and C are installed, run following command in the terminal window:

   $ sudo apt-get install -y build-essential

**Method for Installation and using Dapp using truffle:**

1. Download the folder "Dapp"
2. Open Terminal inside the dapp folder and give the command,
3. (-)npm install
4. Now Download the folder "Tourism-truffle".
5. Open another terminal to unlock Accounts
6. Here we have 3 accounts. Tourism department, Tourist, Dealer
7. To Unlock 3 accounts give the following commands:
8. geth --identity "miner" --networkid 4002 --datadir  dev --rpc --rpcport "8545" --unlock 0,1,2,3,4 --ipcpath "~/.ethereum/geth.ipc" --rpccorsdomain 
"*" --rpcapi "db, eth, net, web3, personal" --dev

9. while unlocking account they will ask you for a passphrase: Here we have set it as 123
	passphrase:123
10. open another terminal and give the command: geth attach
11. start mining by giving: miner.start() 
12. Go to the terminal of Project-truffle and give commands,
13. (-)truffle migrate [make sure mining is done in the background]
14. Now go back to the Dapp-folder terminal and give the command,
15. (-) npm start
12. Go to..... http://localhost:3000/home
13. Now you can access the UI part of the Dapp.


------------

14. First Add Product[product should be added by a dealer for the trading purpose]:
    eg:
    product id: 1                                                  // it is a unique id for each product
    product name: ABC                                              // Name of the product
    Product price:10                                               //  it is the price in tokens.
    Product quantity:200                                           //Total number of products the seller have.
    Seller address:250016a9b3a05423ffd2f5042fcc6683fe2dbedd        //The accounts[2],ie the 3rd account we have created
15. To view Product :
    product id:1                                                  //product details will be displayed.
16. Then Tourist Registration:
    Register Number :1
    Name:
    Age:
    Indian :True or false
    nationality:
    Gender:male / female
    Blood Group:
    passport Number:
    Buy Token:   2                                                //Give the ether value here,The number of tokens corresponding to the Ether value will be added to your account
    Tourist AccountNo:94fa1a39b616328b42cde21a3d7b74284da4b052    //The account[1],ie the 2nd account we have created.
17. To check Tourist balance:
    Check Tourist balance:94fa1a39b616328b42cde21a3d7b74284da4b052 //The token balance will be displayed
18. By more tokens:                                     //If The tourist need addition tokens even after initial registration ,he can access it from this field
    Tourist ID:1
    Tourist Address:                                     //The account[1],ie the 2nd account we have created.
    Buy Token: 10                                        // enter the amount of token you need
19. Buy Product:                                         //Tourist can buy the product from here
    Tourist ID:1                                         //unique id of Tourist
    Tourist Address:                                     //The account[1],ie the 2nd account we have created.
    Product id: 1                                        //unique id of the product
    Quantity:1                                           //quantity of the product needed
20. View Product:
    Product id: 1                                        //id of the product we want to view


Note: Product should be added before Tourist registration.

21. If required, Account can be imported to metaMask by using private key available .
22. And you can use signing transaction via metamask if required.
23. Note: Check the UI flow chart to follow the steps to be taken while using UI.



