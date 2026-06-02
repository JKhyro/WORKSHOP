#include "workshop_core.h"

#include <string.h>

int main(void) {
    if (strcmp(workshop_status_label(WORKSHOP_STATUS_AVAILABLE), "available") != 0) {
        return 1;
    }
    if (!workshop_status_is_terminal(WORKSHOP_STATUS_COMPLETE)) {
        return 2;
    }
    if (workshop_status_is_terminal(WORKSHOP_STATUS_BLOCKED)) {
        return 3;
    }
    return 0;
}
