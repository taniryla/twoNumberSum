import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>twoNumberSum</h1>
<div>
function twoNumberSum(array, targetSum) {
  // Write your code here.
	for (let i = 0; i < array.length - 1; i++) {
		const firstNum = array[i];
			for (let j = i + 1; j < array.length; j++) {
					const secondNum = array[j];
		if (firstNum + secondNum === targetSum) {
			return [firstNum, secondNum];
		}
	}
}
	return [];
}
</div>
`;
