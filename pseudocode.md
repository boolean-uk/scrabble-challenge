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
```

#### Extensions

```
1. Add `[`,`]`, `{`,`}` to the map with their corresponding multiplier points
2. function scrabble(input):
    points = 0;
    multiplier = 1;

    if not input: return points;

    foreach(char in input):
        char.toUpperCase();
        if(char == [ OR char == {) multiplier *= pointsMap(char)
        else if(char == ] OR char == }) multiplier /= pointsMap(char)
        else{
            charPoints = pointsMap(char)
            if(!charPoints) return 0; //invalid character

            points += charPoints * multiplier;
        }
        charPoint = pointsMap(char) OR 0;
        points += charPoint;

    //multiplier should be 1 at the end, to ensure every opening bracket has a closing one. Else we return 0 because the string is invalid
    multiplier == 1 ? return points : 0;

```