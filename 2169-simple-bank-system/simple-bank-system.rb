class Bank
    attr_accessor :balance

    def initialize(balance)
        @balance = balance
    end

    def transfer(account1, account2, money)
        return false unless (1..balance.size).include?(account1) && (1..balance.size).include?(account2)
    
        account1_balance = account_balance(account1)
        account2_balance = account_balance(account2)
        if account1_balance >= money
            balance[account2 - 1] += money
            balance[account1 - 1] -= money
            true
        else
            false
        end

    end

    def deposit(account, money)
        return false unless (1..balance.size).include?(account)

        balance[account - 1] += money
        true
    end

    def withdraw(account, money)
        return false unless (1..balance.size).include?(account)
        if account_balance(account) >= money
            balance[account - 1] -= money
            true
        else
            false
        end
    end

    private
        def account_balance(account)
            balance[account - 1]
        end
end

# Your Bank object will be instantiated and called as such:
# obj = Bank.new(balance)
# param_1 = obj.transfer(account1, account2, money)
# param_2 = obj.deposit(account, money)
# param_3 = obj.withdraw(account, money)