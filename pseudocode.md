# Pseudocode

#### Add the steps you need to take to implement the requirements for Scrabble Challenge

```
1. Create a dictionary to map the letters with corresponding point
    pointsMap = {A:1, B:1,...}

2. function scrabble(input):
    points = 0;
    if not input: return points;
    foreach(char in input):
        char.toUpperCase();
        charPoint = pointsMap(char) OR 0;
        points += charPoint;
    return points;