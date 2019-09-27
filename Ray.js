
class Ray {

	constructor(x, y) {
		this.position = createVector(x, y);
		this.direction = createVector(1, 0);
	}

	update(x, y) {

		this.direction.x = x - this.position.x;
		this.direction.y = y - this.position.y;
		this.direction.normalize();

	}

	draw() {
		stroke(255);
		push();
		translate(this.position.x, this.position.y);
		line(0, 0, this.direction.x * 10, this.direction.y * 10);
		pop();
	}

	cast(boundary) {

		const x1 = boundary.a.x;
		const y1 = boundary.a.y;
		const x2 = boundary.b.x;
		const y2 = boundary.b.y;

		const x3 = this.position.x;
		const y3 = this.position.y;
		const x4 = this.position.x + this.direction.x;
		const y4 = this.position.y + this.direction.y;

		const denT = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

		if(denT === 0) {
			return null;
		}

		const numT = (x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4);

		const t = numT / denT;

		const denU = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

		const numU = (x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3);

		const u = -(numU) / denU;

		if(t > 0 && t < 1 && u > 0) {

			const hit = createVector();

			hit.x = x1 + t * (x2 - x1);
			hit.y = y1 + t * (y2 - y1);

			return hit;

		}

		return null;

	}

}