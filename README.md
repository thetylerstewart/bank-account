Feature: Form to enter in bank information

Scenario: User wants to enter bank info
Given the user has visited the site
When they arrive they should find an empty form
Then they should where to enter in their information



Feature: Register Bank Account

Scenario: User Registers a new account
Given the account is new
When a new account is created the Initial deposit will inputed
Then the current balance will be the intial deposit


Feature: Deposit Funds

Given the deposit amount is entered
And the bank account exists
Then current balance should increase by $20
When $20 is deposited


Feature: Withdrawal Funds

Given the withdrawal amount is entered
And the bank account has funds
The current balance should decrease by $20 when $20 is entered
