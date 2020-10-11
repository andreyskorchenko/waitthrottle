export function throttle(fn, ms) {
    var isOpen = true;
    var tc = null;
    var ta = null;

    return function() {
        if (isOpen) {
            isOpen = false;

            fn.apply(this, arguments);

            setTimeout(function() {
                if (tc && ta) {
                    fn.apply(tc, ta);
                    tc = ta = null;
                }

                isOpen = true;
            }, ms);
        } else {
            tc = this;
            ta = arguments;
        }
    };
}