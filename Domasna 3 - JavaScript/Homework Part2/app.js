function calculateYears(years, conversionType) {
    if (Number.isNaN(years) || typeof years !== "number") {
      return "Invalid input";
    }
    if (conversionType !== "h2d" && conversionType !== "d2h") {
      return "Invalid input";
    }
    if (conversionType === "h2d") {
      return (result = years * 7);
    } else {
      return (result = years / 7);
    }
  }
  
  const age = Number(prompt("How old is your dog?"));
  const type = prompt("What type of conversion do you want?");

  const convertedAge = calculateYears(age, type);
  
  console.log(convertedAge);