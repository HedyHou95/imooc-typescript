// enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var color = Color.blue;
console.log(color);
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 10] = "red";
    Color2[Color2["green"] = 12] = "green";
    Color2[Color2["blue"] = 1] = "blue";
})(Color2 || (Color2 = {}));
var color2 = Color2.blue;
console.log(color2);
var Color3;
(function (Color3) {
    Color3["red"] = "red";
    Color3["green"] = "green";
    Color3[Color3["blue"] = 1] = "blue";
})(Color3 || (Color3 = {}));
var color3 = Color3.blue;
console.log(color3);
