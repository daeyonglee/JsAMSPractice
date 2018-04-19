function Account(accountNum, accountOwner, passwd, restMoney) {
	this.accountType = "입출금";
	this.accountNum = accountNum;
	this.accountOwner = accountOwner;
	this.passwd = passwd;
	this.restMoney = restMoney;
}

Account.prototype.toString = function() {
	return this.accountType + "," + this.accountNum + "," + this.accountOwner + "," + this.passwd + "," + this.restMoney; 
}

