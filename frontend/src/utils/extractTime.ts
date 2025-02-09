export function extractTime(dateString: string) {
	const date = new Date(dateString);
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	return `${hours}:${minutes}`;
}

// Вспомогательная функция для заполнения однозначных чисел начальным нулем
function padZero(number: number) {
	return number.toString().padStart(2, "0");
}