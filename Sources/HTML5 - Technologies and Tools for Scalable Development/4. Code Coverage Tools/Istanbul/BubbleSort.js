/*
	Steps to install and run this tool:
	  npm install istanbul -g
	  istanbul cover BubbleSort.js
*/

arr = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function bubbleSort(arr, arr2)
{
	if (arr != null) {
		do {
			swapped = false;
			for (var i=0; i < arr.length-1; i++) {
				if (arr[i] > arr[i+1]) {
					var temp = arr[i];
					arr[i] = arr[i+1];
					arr[i+1] = temp;
					swapped = true;
				}
			}
		} while (swapped);
	}
}

//bubbleSort(arr);
Array.prototype.foo = 9999;
for(var i=0; i<arr.length; i++) {
	console.log(arr[i] + " ");
}