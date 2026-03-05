export function isValidCorreiosTrackingCode(code: string): boolean {
  const regex = /^[A-Z]{2}[0-9]{9}[A-Z]{2}$/;

  if (!regex.test(code.toUpperCase())) {
    return false;
  }

  const codeUpperCase = code.toUpperCase();
  const numbers = codeUpperCase.substring(2, 10); // Get the first 8 numbers
  const checkDigitProvided = parseInt(codeUpperCase.substring(10, 11)); // The 9º number

  const weights = [8, 6, 4, 2, 3, 5, 9, 7];

  // Calculate weighted sum
  let sum: number = 0;
  for (let index = 0; index < 8; index++) {
    sum += parseInt(numbers[index]) * weights[index];
  }

  const remainder = sum % 11;
  let calculatedDigit: number;

  switch (remainder) {
    case 0: {
      calculatedDigit = 5;
      return calculatedDigit === checkDigitProvided;
    }

    case 1: {
      calculatedDigit = 0;

      return calculatedDigit === checkDigitProvided;
    }

    default: {
      calculatedDigit = 11 - remainder;

      return calculatedDigit === checkDigitProvided;
    }
  }
}
