function MinusAccount(accountNum, accountOwner, passwd, restMoney, borrowMoney) {
	
	Account.call(this, accountNum, accountOwner, passwd, restMoney);
	this.accountType = "마이너스";
	this.borrowMoney = borrowMoney;
}

MinusAccount.prototype = Account;

delete MinusAccount.prototype.accountNum;
delete MinusAccount.prototype.accountOwner;
delete MinusAccount.prototype.passwd;
delete MinusAccount.prototype.restMoney;

MinusAccount.prototype.constructor = MinusAccount;

MinusAccount.prototype.toString = function() {
	return this.accountType + "," + this.accountNum + "," + this.accountOwner + "," + this.passwd + "," + (this.restMoney-this.borrowMoney) + "," + this.borrowMoney; 
}

