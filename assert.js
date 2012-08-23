//worlds smallest unit testing framework
function Assert() {
	var AssertException = function(message) { this.message = message; };
	
	AssertException.prototype.toString = function () {
		return 'AssertException: ' + this.message;
	};

	this.that = function(exp, message) {
	  if (!exp) {
	    throw new AssertException(message);
	  }
	}

	this.equals = function(expected, actual) {
	  assert(expected === actual, 'Failed asserting that ' + expected + '===' + actual);
	}

	this.type = function(expectedType, actual) {
	  assert(expectedType ===  actual.constructor.name, 'Failed asserting that types match: ' + expectedType + ' ===  ' + actual.constructor.name);
	}  
	//end worlds smallest unit testing framework	
	return this;
}
