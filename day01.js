const input = [71407,
    81197,
    76198,
    74252,
    72416,
    84763,
    50109,
    94285,
    120589,
    63022,
    125821,
    98807,
    119795,
    128182,
    59505,
    71577,
    148454,
    62504,
    69879,
    94627,
    113053,
    116212,
    135361,
    89835,
    104648,
    74343,
    131401,
    143696,
    71891,
    77750,
    70549,
    65354,
    137408,
    63526,
    58679,
    55834,
    110914,
    118013,
    107422,
    135027,
    147523,
    75502,
    88890,
    68982,
    76256,
    113357,
    97845,
    114557,
    77538,
    82036,
    107707,
    91224,
    123240,
    109997,
    99615,
    54872,
    144766,
    59363,
    82870,
    78971,
    58341,
    100286,
    55403,
    101399,
    128763,
    68876,
    114973,
    116935,
    78603,
    75321,
    86036,
    146089,
    66557,
    112169,
    79699,
    89839,
    142146,
    55840,
    131197,
    50455,
    92262,
    62094,
    132344,
    113253,
    94504,
    84757,
    87485,
    109422,
    81599,
    129372,
    107622,
    121506,
    57286,
    124121,
    126350,
    120381,
    126424,
    110346,
    75626,
    94308
]

/**
 * part 1
 * take its mass, divide by three, round down, and subtract 2.
 */

const fuelNeededForModules = input.reduce((acc, mass) => {
    const fuelNeeded = Math.floor(mass / 3.0) - 2;
    return acc += fuelNeeded
}, 0);


console.log('*----------------------part 1------------------------*')
console.log('fuelNeededForModules', fuelNeededForModules);

/**
    part 2
    So, for each module mass, calculate its fuel and add it to the total. Then,
    treat the fuel amount you just calculated as the input mass and repeat the process,
    continuing until a fuel requirement is zero or negative. For example:

    A module of mass 14 requires 2 fuel. This fuel requires no further fuel
    (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
    At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel
    (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel.
    So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
    The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.
 */

const allFuel = input.reduce((acc, mass) => {
    let fuelNeeded = Math.floor(mass / 3.0) - 2;

    while (fuelNeeded > 0) {
        acc += fuelNeeded;
        fuelNeeded = Math.floor(fuelNeeded / 3.0) - 2;
    }

    return acc;
}, 0);

console.log('*----------------------part 2------------------------*')
console.log('allFuel', allFuel)
