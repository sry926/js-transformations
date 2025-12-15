function Main(input)
{
    const args = input.split('\n');
    const numbers = args.slice(1, args.length).map(x => parseInt(x, 10));
    const sorted_numbers = numbers.slice().sort((a, b) => a - b);
    const last_number = sorted_numbers[sorted_numbers.length - 1];
    const next_number = sorted_numbers[sorted_numbers.length - 2];

    for (var i = 0; i < numbers.length; ++i)
    {
        if (numbers[i] === last_number)
        {
            console.log(next_number);
        }
        else
        {
            console.log(last_number);
        }
    }
}

// Main(require('fs').readFileSync('test.txt', 'utf8'));
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
