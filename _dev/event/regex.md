

```regex
onEvent\('((\w|\.)+)', \(\w+\)\s=>\s\{\n\s+if\s\(global\.isNormalMode\)\s\{\s+return;\s+\}
```

```regex
onEventExpert('$1', (event) => {
```