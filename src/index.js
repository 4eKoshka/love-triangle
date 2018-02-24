/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var k = 0;
  var f = true;
  for (var i = 0; i< preferences.length; i++) {
	   if (preferences.length < 3) {
		   f=false;
	   }
		
	  	  	  
	  if ( (i+1) === preferences[preferences[preferences[i]-1]-1] && f === true) {
		  k++; 
		 }
	 	 
		  
  }
  var res = Math.floor(k/3);
  return res;
};
