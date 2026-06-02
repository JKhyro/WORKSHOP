#ifndef WORKSHOP_CORE_H
#define WORKSHOP_CORE_H

#ifdef __cplusplus
extern "C" {
#endif

typedef enum WorkshopServiceStatus {
    WORKSHOP_STATUS_DRAFT = 0,
    WORKSHOP_STATUS_AVAILABLE = 1,
    WORKSHOP_STATUS_QUEUED = 2,
    WORKSHOP_STATUS_IN_PROGRESS = 3,
    WORKSHOP_STATUS_BLOCKED = 4,
    WORKSHOP_STATUS_COMPLETE = 5
} WorkshopServiceStatus;

const char *workshop_status_label(WorkshopServiceStatus status);
int workshop_status_is_terminal(WorkshopServiceStatus status);

#ifdef __cplusplus
}
#endif

#endif
