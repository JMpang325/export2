var calcAreaOfCube=function(d,h,l){
    var area =(h*l*d)
    return area
}
var areaOfCircle = function(radius){
    var area = radius*radius*this.pi
    return area 
}
var areaOfTriangle =function(length, height){
    var area = (length*height) /2
    return area
}
var geolib = {
    pi : 3.14,
    calcAreaOfCube: calcAreaOfCube,
    areaOfCircle: areaOfCircle,
    areaOfTriangle: areaOfTriangle,
}
module.exports =geolib


