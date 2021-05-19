class StringCalculator {

    add(stringOfNumbers) {
        const negativeNumberRegex = /-\d/gm;
        const matched = stringOfNumbers.match(negativeNumberRegex);
        
        if (matched) {
            throw new Error("Negatives not allowed: " + matched)
        }

        if (stringOfNumbers === "") {
            return 0
        } else if (stringOfNumbers.substring(0, 2) === "//") {
            const delimiter = stringOfNumbers[2];
            let shortenString = stringOfNumbers.substring(4);
            return this.addLogic(shortenString, delimiter);
        }
        else {
            const delimiter = /[,\n]+/;
            return this.addLogic(stringOfNumbers, delimiter);
        }
    }

    addLogic(stringOfNumbers, allowedDelimiter) {
        let arrayOfStringNumbers = [];
        arrayOfStringNumbers = stringOfNumbers.split(allowedDelimiter);
        var sum = 0;
        arrayOfStringNumbers.forEach(function (item) {
            item = Number(item);
            sum += item;
        });
        return sum;
    }


}

module.exports = StringCalculator
