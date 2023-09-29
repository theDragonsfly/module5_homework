let map = new Map();
map.set("apple", "green");
map.set("tomato", "red");
map.set("eggyolk", "yellow");

for (let key of map.keys()) {
    console.log(`Ключ — ${key}, значение -  ${map.get(key)}`);
}