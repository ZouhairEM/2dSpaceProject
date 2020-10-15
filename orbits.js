var buttonClick = false;
var cometClick = false;

function rotate_point(originX, originY, body, isbool) {
    body.angle += (1.0 / body.period); //Calculates the angle, divided by distance from center of body
    var ang = body.angle * 2.0 * Math.PI / 180.0; //calculates full 360° rotation required based on angle
    if (isbool == false) body.orbit = Math.max(body.orbit - bendOrbit, 0); //bends orbit inwards
    if (isbool == true) body.orbit = Math.max(body.orbit + bendOrbit, 0); //bends orbit inwards
    var r = body.orbit;
    return {
        x: Math.cos(ang) * r - Math.sin(ang) * r + originX,
        y: Math.sin(ang) * r + Math.cos(ang) * r + originY
    };
} // generic rendering of a unit orbital progression of a planet

function planetrotation(planet) {
    var x, y, x_sun, y_sun, e, c_new;
    e = document.getElementById(planet);
    x_sun = parseFloat(document.getElementById("Sun").getAttribute("cx"));
    y_sun = parseFloat(document.getElementById("Sun").getAttribute("cy"));
    c_new = rotate_point(x_sun, y_sun, Solarsystem[planet], buttonClick);
    e.setAttribute("cx", c_new.x);
    e.setAttribute("cy", c_new.y);
} // Rotations of the planets around Sun    

function lunarrotation(moon) {
    var x, y, x_earth, y_earth, e, c_new;
    e = document.getElementById(moon);
    x_earth = parseFloat(document.getElementById("Earth").getAttribute("cx"));
    y_earth = parseFloat(document.getElementById("Earth").getAttribute("cy"));
    c_new = rotate_point(x_earth, y_earth, Lunar[moon], buttonClick);
    e.setAttribute("cx", c_new.x);
    e.setAttribute("cy", c_new.y);
} // Rotation of the moon around Earth

function ganymederotation(ganymede) {
    var x, y, x_jupiter, y_jupiter, e, c_new;
    e = document.getElementById(ganymede);
    x_jupiter = parseFloat(document.getElementById("Jupiter").getAttribute("cx"));
    y_jupiter = parseFloat(document.getElementById("Jupiter").getAttribute("cy"));
    c_new = rotate_point(x_jupiter, y_jupiter, JupiterMoon[ganymede], buttonClick);
    e.setAttribute("cx", c_new.x);
    e.setAttribute("cy", c_new.y);
} // Rotation of Ganymede around Jupiter	

//Different function rotate for comet
function rotate_pointcomet(originX, originY, bodycomet, cometbool) {
    bodycomet.angle += (1.0 / bodycomet.periodcomet); //Calculates the angle, divided by distance from center of body
    var angcomet = bodycomet.angle * 2.0 * Math.PI / 180.0; //calculates full 360° rotation required based on angle
    if (cometbool == true) bodycomet.orbit = Math.max(bodycomet.orbit - bendCometOrbit, 10); //bends orbit inwards
    var rcomet = bodycomet.orbit;
    return {
        x: Math.cos(angcomet) * rcomet - Math.sin(angcomet) * rcomet + originX,
        y: Math.sin(angcomet) * rcomet + Math.cos(angcomet) * rcomet + originY
    };
} // variation for comet specific rotation

function cometrotation(cometx) {
    var x, y, x_sun, y_sun, e, c_new;
    e = document.getElementById(cometx);
    x_sun = parseFloat(document.getElementById(planetX).getAttribute("cx"));
    y_sun = parseFloat(document.getElementById(planetX).getAttribute("cy"));
    c_new = rotate_pointcomet(x_sun, y_sun, Comets[cometx], cometClick);
    e.setAttribute("cx", c_new.x);
    e.setAttribute("cy", c_new.y);
}	

var Solarsystem = {
	Mercury:	{ period: 1.5, orbit: 40,	angle: 50.0 }
	, Venus: 	{ period: 2.5, orbit: 65,	angle: 50.0 }
	, Earth:	{ period: 3.5, orbit: 90,	angle: 50.0 }
	, Mars:		{ period: 4.5, orbit: 115,	angle: 50.0 }
	, Jupiter:	{ period: 5.5, orbit: 140,	angle: 50.0 }
	, Saturn:	{ period: 6.5, orbit: 170,	angle: 50.0 }
	, Uranus: 	{ period: 7.5, orbit: 190,  angle: 50.0 }
	, Neptune:	{ period: 8.5, orbit: 208,  angle: 50.0 }
};

var Lunar = {
    Moon: { period: 0.5, orbit: 10, angle: 0 }
};

var JupiterMoon = {
    Ganymede: { period: 1.3, orbit: 17, angle: -90 }
};

var Comets = {
    Comet: { periodcomet: 2.0, orbit: 310, angle: 50 }
,    Comettwo: { periodcomet: 2.0, orbit: 290, angle: 100 }
,    Cometthree: { periodcomet: 2.0, orbit: 300, angle: 200 }
};

function animate() {
    planetrotation("Mercury");
    planetrotation("Venus");
    planetrotation("Earth");
    planetrotation("Mars");
    planetrotation("Jupiter");
    planetrotation("Saturn");
    planetrotation("Uranus");
    planetrotation("Neptune");
    lunarrotation("Moon");
    ganymederotation("Ganymede");
    cometrotation("Comet");
    cometrotation("Comettwo");
    cometrotation("Cometthree");
	

    var planet1 = document.getElementById("Mercury"),
        sun = document.getElementById("Sun");
    if (circlesOverlap(planet1, sun)) {
        planet1.setAttribute("class", "class1");
		 $("img").css("width", "9.6%");
		 
		
    }
    var planet2 = document.getElementById("Venus"),
        sun = document.getElementById("Sun");
    if (circlesOverlap(planet2, sun)) {
        planet2.setAttribute("class", "class1");
		 $("img").css("width", "10.2%");
    }
    var planet3 = document.getElementById("Earth"),
        sun = document.getElementById("Sun");
    if (circlesOverlap(planet3, sun)) {
        planet3.setAttribute("class", "class1");
		 $("img").css("width", "10.6%");
    }
    var planet4 = document.getElementById("Mars"),
        sun = document.getElementById("Sun");
    if (circlesOverlap(planet4, sun)) {
        planet4.setAttribute("class", "class1");
		 $("img").css("width", "10.9%");
    }
    var planet5 = document.getElementById("Jupiter"),
        sun = document.getElementById("Sun");
    if (circlesOverlap(planet5, sun)) {
        planet5.setAttribute("class", "class1");
		 $("img").css("width", "11.7%");
    }
    var planet6 = document.getElementById("Saturn"),
        sun = document.getElementById("Sun");
    if (circlesOverlap(planet6, sun)) {
        planet6.setAttribute("class", "class1");
		 $("img").css("width", "12.2%");
    }
    var planet7 = document.getElementById("Uranus"),
        sun = document.getElementById("Sun");
    if (circlesOverlap(planet7, sun)) {
        planet7.setAttribute("class", "class1");
		 $("img").css("width", "12.4%");
    }
    var planet8 = document.getElementById("Neptune"),
        sun = document.getElementById("Sun");
    if (circlesOverlap(planet8, sun)) {
        planet8.setAttribute("class", "class1");
		 $("img").css("width", "12.5%");	
    }
    var moon1 = document.getElementById("Moon"),
        sun = document.getElementById("Sun");
    if (circlesOverlap(moon1, sun)) {
        moon1.setAttribute("class", "class1");	
    }
    var moon2 = document.getElementById("Ganymede"),
        sun = document.getElementById("Sun");
    if (circlesOverlap(moon2, sun)) {
        moon2.setAttribute("class", "class1");
    }

}


function circlesOverlap(circleA, circleB) { // Returns true if the SVG circles A and B overlap, false otherwise.
    var deltaX = circleA.cx.baseVal.value - circleB.cx.baseVal.value;
    var deltaY = circleA.cy.baseVal.value - circleB.cy.baseVal.value;
    var distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY)); // The classic distance-between-two-points formula.
    var radiusA = circleA.r.baseVal.value; // The radius of circle A.
    var radiusB = circleB.r.baseVal.value; // The radius of circle B.

    if (circleA.id == circleB.id) // If true, circleA and circleB are the same circle.
        return false;
    return (distance <= (radiusA + radiusB) - 5);
}