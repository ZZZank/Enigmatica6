

```regex
onEvent\('((\w|\.)+)', \(\w+\)\s=>\s\{\n\s+if\s\(global\.isNormalMode\)\s\{\s+return;\s+\}
```
to
```regex
onEventExpert('$1', (event) => {
```

and

```
onEvent\('((\w|\.)+)', \(\w+\)\s=>\s\{\n\s+if\s\(global\.isExpertMode\)\s\{\s+return;\s+\}
```
to
```
onEventNormal('$1', (event) => {
```