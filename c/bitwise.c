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
}
