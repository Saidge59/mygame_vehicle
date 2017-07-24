/*
 * name@ Sh.D
 * class@ Vector2D
*/

function Vector2D(x, y) {
    this.x = x;
    this.y = y;
}

Vector2D.prototype.clone = function () {
    return (new Vector2D(this.x, this.y));
};

Vector2D.prototype.clear = function () {
    this.x = 0;
    this.y = 0;
    return this;
};

Vector2D.prototype.set = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
};

Vector2D.prototype.toString = function () {
    return ("[ x: " + this.x.toFixed(2) + " y: " + this.y.toFixed(2) + " ]");
};

/*
 * Method length and angle Vector2d
 */
Vector2D.prototype.lengthSQ = function () {
    return (this.x * this.x + this.y * this.y);
};

Object.defineProperty(Vector2D.prototype, "length", {
    get: function () {
        return Math.sqrt(this.lengthSQ());
    },
    set: function (val) {
        this.x = Math.cos(this.angleRad) * val;
        this.y = Math.sin(this.angleRad) * val;
    }
});

Object.defineProperty(Vector2D.prototype, "angleRad", {
    get: function () {
        return Math.atan2(this.y, this.x);
    },
    set: function (val) {
        var len = this.length;
        this.x = (Math.cos(val) * len);
        this.y = (Math.sin(val) * len);
    }
});

Object.defineProperty(Vector2D.prototype, "angleDeg", {
    get: function () {
        return (Vector2D.toDegrees(this.angleRad));
    },
    set: function (val) {
        var len = this.length,
            rad = Vector2D.toRadian(val);
        this.x = (Math.cos(rad) * len);
        this.y = (Math.sin(rad) * len);
    }
});

//Vector2D.prototype.getLength = function () {
//    return Math.sqrt(this.lengthSQ());
//}
//
//Vector2D.prototype.setLength = function (val) {
//    var a  = this.getAngleRad();
//    this.x = Math.cos(a) * val;
//    this.y = Math.sin(a) * val;
//    return this;
//}

//Vector2D.prototype.getAngleRad = function () {
//    return Math.atan2(this.y, this.x);
//}
//
//Vector2D.prototype.getAngleDeg = function () {
//    return (Vector2D.toDegrees(this.getAngleRad()));
//}
//
//Vector2D.prototype.setAngleRad = function (val) {
//    var len = this.getLength();
//    this.x  = Math.cos(val) * len;
//    this.y  = Math.sin(val) * len;
//    return this;
//}

//Vector2D.prototype.setAngleDeg = function (val) {
//    var len   = this.getLength();
//    var rad = Vector2D.toRadian(val);
//    this.x  = Math.cos(rad) * len;
//    this.y  = Math.sin(rad) * len;
//    return this;
//}

/*
 * Method add
 */
Vector2D.prototype.add = function (v2) {
    this.x += v2.x;
    this.y += v2.y;
    return this;
};

Vector2D.prototype.addVal = function (val) {
    this.x += val;
    this.y += val;
    return this;
};

/*
 * Method sub
 */
Vector2D.prototype.subtract = function (v2) {
    this.x -= v2.x;
    this.y -= v2.y;
    return this;
};

/*
 * Method mul
 */
Vector2D.prototype.mul = function (val) {
    this.x *= val;
    this.y *= val;
    return this;
};

/*
 * Method div
 */
Vector2D.prototype.div = function (val) {
    this.x /= val;
    this.y /= val;
    return this;
};

/*
 * Methods MATH
 */
Vector2D.prototype.dist = function (v2) {
    return Math.sqrt(this.distSQ(v2)).toFixed(2);
};

Vector2D.prototype.distSQ = function (v2) {
    var dx = v2.x - this.x,
        dy = v2.y - this.y;
    return (dx * dx + dy * dy);
};


Vector2D.prototype.truncate = function (max) {
    this.length = Math.min(max, this.length);
    return this;
};

Vector2D.prototype.revers = function () {
    this.x = -this.x;
    this.y = -this.y;
    return this;
};

Vector2D.prototype.normalize = function () {
    var len = this.length;
    if (len === 0) {
        this.x = 1;
        return this;
    }
    this.x /= len;
    this.y /= len;
    return this;
};

Vector2D.prototype.projX = function () {
    return Math.cos(this.angleRad);
};

Vector2D.prototype.projY = function () {
    return Math.sin(this.angleRad);
};

/*
 * Conversion toRadians or toDegrees
 */

Vector2D.toRadian = function (val) {
    return (val * Math.PI / 180);
};

Vector2D.toDegrees = function (val) {
    return (val * 180 / Math.PI);
};

Vector2D.getRandom = function (min, max) {
	return (Math.random() * (max - min) + min);
};

/*
 * Comparison methods
 */
Vector2D.prototype.isZero = function () {
    return Math.floor(this.x) === 0 && Math.floor(this.y) === 0;
};

Vector2D.prototype.isNormalized = function () {
    return Math.ceil(this.length) === 1;
};

Vector2D.prototype.equals = function (v2) {
    return Math.ceil(this.x) === Math.ceil(v2.x) && Math.ceil(this.y) === Math.ceil(v2.y);
};


