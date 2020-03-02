# Week 2: User Persona, Pain Points and User Stories #

## Problems and actors involved:

### Local communities

The Bangla area of Nairobi, Kenya, is an example of a socially challenged community where there is not a consistent access to conventional money. As Bangla does not have a competitive industry the trade-balance remains negative, so for all money flowing into the community they fast flow back out again. Bangla needs to have start demanded businesses / competitive industry and having access to a resilient currency, which does not directly has to compete with a national currency lack of access to a medium of exchange prohibits an efficient trade system to foster economic growth in the local economy. Dependency on national currency makes community exposed to currency fluctuations, even if their own small economy is thriving.

### End-users

It’s not easy to improve your future as the lack of money makes the demand side very limited and does not allow for a lot of jobs to be created. With a limited amount of money present the economic activity takes form in an informal and barter type of way utilizing your reputation in the community. Existing payments systems such as M-Pesa or used cryptocurrencies only works if the users already has conventional money or IT and skills to mine or complete bounties

### Grassroot organizations

Organizations such as Grassroots Economics that are working on the ground in the local economy to building up resilient economic infrastructures are only operating voluntarily or donation based


### Charity organizations

When Charities such as Unicef and Red Cross operating in the area send external conventional money they pay a lot of fees to banks and money providers such as Western Union or local mobile money agents. The cash injection only has a short-term limited effect as the end-users mostly purchase goods produced outside the community, resulting in yet another lack of money.
High administration costs.

### Philanthropic Donors 

End-users & companies donating into charity organizations experience a lack of traceability where their individual contributions are actually going to and has to rely on repotings from the charities, without having up to date KPIs with how much their specific donation has achieved.

### Impact investors

Other than traditional equity / loan deals with local entrepreneurs, there’s no way to contribute to this problem for external investors that want to make a difference while having the opportunity to make a profit.

## User-stories

As a donation end-user I want to be able to...

### Navigate to “inclusive currency campaign”

- Have an overview of communities I can donate to
- Select “Donate” to be able to see additional information and donate to that community

### Login and send funds

- Login to Dashboard wallet
- Donate Fiat via credit card or bank transfer
- Donate Crypto via DAI
- Have a notification that the transaction is processing
- Get a confirmation that my donation has been transferred to Dashboard
- Behind the scenes we will already transfer onto xDAI at this point
	
### Distribution of inclusive currency

- V iew the inclusive currency minting ratio on xDAI
- Choose between different verticals within the community to donate to including 
  - all
  - Organizer such as Grassroots economics
  - Business category
  - Gender
  - Token they are using

### Mint inclusive currency by clicking a button

- Have a notification that the transaction is processing
- Get a confirmation that the inclusive currency has been created

### Impact of inclusive currency

- See the economic value of the CIC I have donated under “Donations”
- See the economic value of all CIC circulation within the selected vertical

## Withdraw from as reserve for CIC

- View the conditions of withdrawal
- View the value I can withdraw back from the CIC
- Click withdraw to make it accessible on the Dashboard
- Delegate DAI to another community
- Withdraw to DAI into an Ethereum address

## Tech-Stack

### Overview of process


![Overview of process](https://github.com/abundance-stack/donationsapp/blob/master/User-journey.png)


### Implementation of each step

- UI implemented in Svelte.js - queries list of communities from MongoDB database via Node.js server 

- User login with onboard.js options and uses sendwyre / moonpay API and UI widget to on-ramp fiat into DAI stable coin

- The DAI stable coin uses Ethereum mainnet to xDAI bridge to convert it into xDAI

- UI queries via Node.js server the MongoDB information regarding indexing of user-data, once pressing confirmed the xDAI is deposited into the CIC bonding curve contract and the minted CIC is distributed to the chosen recipients

- The xDAI is sent to the individual xDAI addresses, and the end-users get a notification on their feature-phones of the balance update to their address

- The donor can withdraw the donation back to DAI, according to withdraw restrictions
