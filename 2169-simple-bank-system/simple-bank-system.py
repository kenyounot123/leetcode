class Bank:

    def __init__(self, balance: List[int]):
        # input: initial balance of each account is stored in balance[]
        # balance[]
        self.balance = balance


    def transfer(self, account1: int, account2: int, money: int) -> bool:
        if account1 not in range(1, len(self.balance) + 1) or account2 not in range(1, len(self.balance) + 1):
            return False
        a1 = account1 - 1
        a2 = account2 - 1
        if self.balance[a1] >= money:
            self.balance[a1] = self.balance[a1] - money
            self.balance[a2] = self.balance[a2] + money
            return True
        else:
            return False


    def deposit(self, account: int, money: int) -> bool:
        if account not in range(1, len(self.balance) + 1):
            return False
        a = account - 1
        self.balance[a] = self.balance[a] + money
        return True
        

    def withdraw(self, account: int, money: int) -> bool:
        if account not in range(1, len(self.balance) + 1):
            return False
        account_balance = self.balance[account - 1]
        if account_balance >= money:
            self.balance[account - 1] = self.balance[account - 1] - money
            return True
        else:
            return False
        


# Your Bank object will be instantiated and called as such:
# obj = Bank(balance)
# param_1 = obj.transfer(account1,account2,money)
# param_2 = obj.deposit(account,money)
# param_3 = obj.withdraw(account,money)