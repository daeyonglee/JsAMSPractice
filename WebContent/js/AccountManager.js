
function AccountManager() {
	this.accounts = new Array();
	this.count = 0;
	this.index = 0;
}

AccountManager.prototype.getAccounts = function() {
	return this.accounts;
}

AccountManager.prototype.open = function(account){
	this.accounts.push(account);
}

AccountManager.prototype.get = function(accountNum) {
	
	var arr = this.accounts;
	for (var i=0; i<arr.length; i++) {
		if (arr[i].accountNum == accountNum) {
			return arr[i];
		}
	}
}

AccountManager.prototype.search = function(accountOwner) {
	
	var arr = this.accounts;
	var rtArr = new Array();
	for (var i=0; i<arr.length; i++) {
		if (arr[i].accountOwner == accountOwner) {
			rtArr.push(arr[i]);
		}
	}
	
	return rtArr;
}

AccountManager.prototype.remove = function(accountNum) {
	var arr = this.accounts;
	for (var i=0; i<arr.length; i++) {
		if (arr[i].accountNum == accountNum) {
			this.accounts.splice(i, 1);
			return 1;
		}
	}
	
	return -1;
}

AccountManager.prototype.listAll = function() {
	return this.accounts;
}