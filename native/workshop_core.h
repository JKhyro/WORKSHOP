#ifndef WORKSHOP_CORE_H
#define WORKSHOP_CORE_H

#include <stddef.h>

#ifdef __cplusplus
extern "C" {
#endif

typedef enum WorkshopServiceStatus {
    WORKSHOP_STATUS_DRAFT = 0,
    WORKSHOP_STATUS_AVAILABLE = 1,
    WORKSHOP_STATUS_QUEUED = 2,
    WORKSHOP_STATUS_IN_PROGRESS = 3,
    WORKSHOP_STATUS_BLOCKED = 4,
    WORKSHOP_STATUS_COMPLETE = 5,
    WORKSHOP_STATUS_INTAKE_READY = 6,
    WORKSHOP_STATUS_FIT_REVIEW = 7,
    WORKSHOP_STATUS_MATERIALS_RECEIVED = 8,
    WORKSHOP_STATUS_WAITING_ON_CUSTOMER = 9,
    WORKSHOP_STATUS_EPOCH_TIME_REQUESTED = 10,
    WORKSHOP_STATUS_CANCELED = 11
} WorkshopServiceStatus;

typedef enum WorkshopServiceLane {
    WORKSHOP_LANE_EDUCATION_SUBMISSION = 0,
    WORKSHOP_LANE_PREMIUM_PROGRAM = 1,
    WORKSHOP_LANE_COHORT = 2,
    WORKSHOP_LANE_SUBSCRIPTION_MATERIALS = 3,
    WORKSHOP_LANE_TECH_SUPPORT = 4,
    WORKSHOP_LANE_CRM_DATABASE = 5,
    WORKSHOP_LANE_ADMIN_SYSTEMS = 6,
    WORKSHOP_LANE_OPERATIONS_CONSULTING = 7,
    WORKSHOP_LANE_DEV_BUILD = 8
} WorkshopServiceLane;

typedef enum WorkshopPackageKind {
    WORKSHOP_PACKAGE_SUBMISSION_PACK = 0,
    WORKSHOP_PACKAGE_PREMIUM_PROGRAM = 1,
    WORKSHOP_PACKAGE_COHORT = 2,
    WORKSHOP_PACKAGE_SUBSCRIPTION = 3,
    WORKSHOP_PACKAGE_SUPPORT_BLOCK = 4,
    WORKSHOP_PACKAGE_SYSTEMS_BUILD = 5,
    WORKSHOP_PACKAGE_SCOPED_CONSULTING = 6
} WorkshopPackageKind;

typedef enum WorkshopSubmissionKind {
    WORKSHOP_SUBMISSION_WRITING = 0,
    WORKSHOP_SUBMISSION_DOCUMENT_REVIEW = 1,
    WORKSHOP_SUBMISSION_DIAGNOSTIC = 2,
    WORKSHOP_SUBMISSION_TECH_SUPPORT = 3,
    WORKSHOP_SUBMISSION_SYSTEMS_REQUEST = 4
} WorkshopSubmissionKind;

typedef enum WorkshopEpochHandoffKind {
    WORKSHOP_EPOCH_HANDOFF_APPOINTMENT = 0,
    WORKSHOP_EPOCH_HANDOFF_DEADLINE = 1,
    WORKSHOP_EPOCH_HANDOFF_REMINDER = 2,
    WORKSHOP_EPOCH_HANDOFF_AVAILABILITY = 3,
    WORKSHOP_EPOCH_HANDOFF_COHORT_WINDOW = 4
} WorkshopEpochHandoffKind;

typedef struct WorkshopServiceRequest {
    const char *id;
    const char *customer_id;
    WorkshopServiceLane lane;
    const char *requested_package_id;
    WorkshopServiceStatus status;
    int customer_age;
    int compatibility_assessment_required;
    int epoch_time_needed;
    const char *created_iso;
    const char *next_action;
} WorkshopServiceRequest;

typedef struct WorkshopSubmission {
    const char *id;
    const char *service_request_id;
    WorkshopSubmissionKind kind;
    WorkshopServiceStatus status;
    const char *material_label;
    const char *received_iso;
    const char *review_due_iso;
    int customer_visible;
} WorkshopSubmission;

typedef struct WorkshopPackage {
    const char *id;
    WorkshopPackageKind kind;
    const char *title;
    int monthly_price_jpy;
    int per_submission_price_jpy;
    int expected_live_minutes;
    int supports_async_delivery;
    int supports_cohort_delivery;
    int requires_compatibility_assessment_under_19;
} WorkshopPackage;

typedef struct WorkshopEpochTimeHandoff {
    const char *id;
    const char *service_request_id;
    WorkshopEpochHandoffKind kind;
    WorkshopServiceStatus status;
    const char *requested_window_iso;
    const char *deadline_iso;
    const char *customer_safe_status;
} WorkshopEpochTimeHandoff;

const char *workshop_status_label(WorkshopServiceStatus status);
int workshop_status_from_label(const char *label, WorkshopServiceStatus *out_status);
int workshop_status_is_terminal(WorkshopServiceStatus status);
int workshop_status_needs_operator_attention(WorkshopServiceStatus status);
const char *workshop_lane_label(WorkshopServiceLane lane);
const char *workshop_package_kind_label(WorkshopPackageKind kind);
const char *workshop_submission_kind_label(WorkshopSubmissionKind kind);
const char *workshop_epoch_handoff_kind_label(WorkshopEpochHandoffKind kind);
int workshop_service_request_requires_guardian_flow(const WorkshopServiceRequest *request);
int workshop_service_request_needs_epoch_time(const WorkshopServiceRequest *request);
int workshop_package_is_lower_labor(const WorkshopPackage *package);
int workshop_submission_needs_review(const WorkshopSubmission *submission);
int workshop_epoch_handoff_is_customer_safe(const WorkshopEpochTimeHandoff *handoff);

#ifdef __cplusplus
}
#endif

#endif
