#include "workshop_core.h"

const char *workshop_status_label(WorkshopServiceStatus status) {
    switch (status) {
    case WORKSHOP_STATUS_DRAFT:
        return "draft";
    case WORKSHOP_STATUS_AVAILABLE:
        return "available";
    case WORKSHOP_STATUS_QUEUED:
        return "queued";
    case WORKSHOP_STATUS_IN_PROGRESS:
        return "in-progress";
    case WORKSHOP_STATUS_BLOCKED:
        return "blocked";
    case WORKSHOP_STATUS_COMPLETE:
        return "complete";
    default:
        return "unknown";
    }
}

int workshop_status_is_terminal(WorkshopServiceStatus status) {
    return status == WORKSHOP_STATUS_COMPLETE;
}
