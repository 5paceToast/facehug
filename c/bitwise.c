#include "util.h"

int main(void) {
    // Everyone likes bitwise operations
    // They just make things faster, right?

    // The compiler is your friend - it even speaks English!
    // "if x or y are less than zero..."
    NUM((0|0)     < 0);
    NUM((0|10)    < 0);
    NUM((10|0)    < 0);
    NUM((10|10)   < 0);
    NUM((0|-10)   < 0);
    NUM((-10|0)   < 0);
    NUM((-10|-10) < 0);
    NUM((10|-10)  < 0);
    NUM((-10|10)  < 0);

    // Bitshifting left is the same thing as multiplying a number by 2.
    // After writing this proof of concept, I've decided.
    // I will write a mul() wrapper that detects mulitples of two to optimize.
    int i = 32, n = 4;
    NUM(i);
    NUM(n);
    NUM(i << n);
}
