function Person () {
  this.firstName = '';
  this.lastName = '';
  this.setFirst = function(first){
    this.valid(first);
    this.isStr(first);
    this.firstName = first;
  }
  this.setLast = function(last){
    this.valid(last);
    this.isStr(last);
    this.lastName = last;
  }
  this.valid = function(name){
    if (name.length > 50 ) console.log("Invalid name");
  }
  this.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
  }
  this.isStr = function(name){
    if (typeof name === 'string'){
      return true;
    } else {
      console.log('not a string');
      return false;
    }
  }
}

var me = new Person();
me.setFirst("Chris");
me.setLast("Hutchinson");
console.log(me.getFullName());
