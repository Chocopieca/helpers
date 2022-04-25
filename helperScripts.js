getFontSize(displayWidth, weight, sizes) {
    if(sizes.length === 4) {
        if(displayWidth >= 1904) {
            return `size${sizes[0]}-weight${weight}`;
        } else if(displayWidth < 1904 && displayWidth >= 1264) {
            return `size${sizes[1]}-weight${weight}`;
        } else if(displayWidth < 1264 && displayWidth >= 960) {
            return `size${sizes[2]}-weight${weight}`;
        } else if(displayWidth < 960 && displayWidth >= 600) {
            return `size${sizes[3]}-weight${weight}`;
        }
    }
}

UpdateMath() {
    function decimalAdjust(type, value, exp) {
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    if (!Math.round10) {
        Math.round10 = function(value, exp) {
            return decimalAdjust('round', value, exp);
        };
    }
    if (!Math.floor10) {
        Math.floor10 = function(value, exp) {
            return decimalAdjust('floor', value, exp);
        };
    }
    if (!Math.ceil10) {
        Math.ceil10 = function(value, exp) {
            return decimalAdjust('ceil', value, exp);
        };
    }
}

