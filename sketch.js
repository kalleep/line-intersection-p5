
let boundary;
let ray;

function setup() {
	createCanvas(400, 400);

	boundary = new Boundary(300, 100, 300, 300);
	ray = new Ray(100, 200);
}

function draw() {
	background(0);
	boundary.draw();

	ray.draw();
	ray.update(mouseX, mouseY);

	const hit = ray.cast(boundary);

	if(hit) {
		fill(255);
		ellipse(hit.x, hit.y, 8, 8);
	}


}