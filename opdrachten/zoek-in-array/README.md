# Zoek in array

In deze opdracht moet je een functie maken met de volgende signature.

```javascript
function findClosestValue(array: int[], needle: int, number: int): int[] {
    //...
}
```

- `array` is een geordende array van getallen
- `needle` getal waar naar gezocht moet worden
- `number` getal hoeveel getallen hij terug moet geven

De functie moet een array teruggeven met lengte van `number` met de getallen die het dichtst bij `needle` liggen.
De `array` is een gesorteerde lijst van getalen van laag naar hoog.

Deze opdracht graag uplaoden naar github.com zodat we je code kunnen bekijken.

## Voorbeelden

```javascript
array = [1, 2, 4, 4, 6, 7];
needle = 3;
number = 4;

result: [1, 2, 4, 4];
```

```javascript
array = [-3, -3, -2, 0, 1, 1, 3, 7, 7];
needle = 5;
number = 3;

result: [3, 7, 7];
```
