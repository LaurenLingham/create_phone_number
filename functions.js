function createPhoneNumber(numbers) {
    // Code here

    combinedSection = (index1, index2) => {
        return numbers.slice(index1, index2).join("");
    };
    
    part1 = combinedSection(0, 3);
    part2 = combinedSection(3, 6);
    part3 = combinedSection(6, 10);

    return (`(${part1}) ${part2}-${part3}`);
};

module.exports = createPhoneNumber;