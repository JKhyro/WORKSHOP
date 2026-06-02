#include "workshop_core.h"

#include <string.h>

typedef struct WorkshopStatusName {
    WorkshopServiceStatus status;
    const char *label;
} WorkshopStatusName;

typedef struct WorkshopLaneName {
    WorkshopServiceLane lane;
    const char *label;
} WorkshopLaneName;

typedef struct WorkshopPackageKindName {
    WorkshopPackageKind kind;
    const char *label;
} WorkshopPackageKindName;

typedef struct WorkshopSubmissionKindName {
    WorkshopSubmissionKind kind;
    const char *label;
} WorkshopSubmissionKindName;

typedef struct WorkshopEpochHandoffKindName {
    WorkshopEpochHandoffKind kind;
    const char *label;
} WorkshopEpochHandoffKindName;

static const WorkshopStatusName WORKSHOP_STATUS_NAMES[] = {
    {WORKSHOP_STATUS_DRAFT, "draft"},
    {WORKSHOP_STATUS_AVAILABLE, "available"},
    {WORKSHOP_STATUS_QUEUED, "queued"},
    {WORKSHOP_STATUS_IN_PROGRESS, "in-progress"},
    {WORKSHOP_STATUS_BLOCKED, "blocked"},
    {WORKSHOP_STATUS_COMPLETE, "complete"},
    {WORKSHOP_STATUS_INTAKE_READY, "intake-ready"},
    {WORKSHOP_STATUS_FIT_REVIEW, "fit-review"},
    {WORKSHOP_STATUS_MATERIALS_RECEIVED, "materials-received"},
    {WORKSHOP_STATUS_WAITING_ON_CUSTOMER, "waiting-on-customer"},
    {WORKSHOP_STATUS_EPOCH_TIME_REQUESTED, "epoch-time-requested"},
    {WORKSHOP_STATUS_CANCELED, "canceled"},
};

static const WorkshopLaneName WORKSHOP_LANE_NAMES[] = {
    {WORKSHOP_LANE_EDUCATION_SUBMISSION, "education-submission"},
    {WORKSHOP_LANE_PREMIUM_PROGRAM, "premium-program"},
    {WORKSHOP_LANE_COHORT, "cohort"},
    {WORKSHOP_LANE_SUBSCRIPTION_MATERIALS, "subscription-materials"},
    {WORKSHOP_LANE_TECH_SUPPORT, "tech-support"},
    {WORKSHOP_LANE_CRM_DATABASE, "crm-database"},
    {WORKSHOP_LANE_ADMIN_SYSTEMS, "admin-systems"},
    {WORKSHOP_LANE_OPERATIONS_CONSULTING, "operations-consulting"},
    {WORKSHOP_LANE_DEV_BUILD, "dev-build"},
};

static const WorkshopPackageKindName WORKSHOP_PACKAGE_KIND_NAMES[] = {
    {WORKSHOP_PACKAGE_SUBMISSION_PACK, "submission-pack"},
    {WORKSHOP_PACKAGE_PREMIUM_PROGRAM, "premium-program"},
    {WORKSHOP_PACKAGE_COHORT, "cohort"},
    {WORKSHOP_PACKAGE_SUBSCRIPTION, "subscription"},
    {WORKSHOP_PACKAGE_SUPPORT_BLOCK, "support-block"},
    {WORKSHOP_PACKAGE_SYSTEMS_BUILD, "systems-build"},
    {WORKSHOP_PACKAGE_SCOPED_CONSULTING, "scoped-consulting"},
};

static const WorkshopSubmissionKindName WORKSHOP_SUBMISSION_KIND_NAMES[] = {
    {WORKSHOP_SUBMISSION_WRITING, "writing"},
    {WORKSHOP_SUBMISSION_DOCUMENT_REVIEW, "document-review"},
    {WORKSHOP_SUBMISSION_DIAGNOSTIC, "diagnostic"},
    {WORKSHOP_SUBMISSION_TECH_SUPPORT, "tech-support"},
    {WORKSHOP_SUBMISSION_SYSTEMS_REQUEST, "systems-request"},
};

static const WorkshopEpochHandoffKindName WORKSHOP_EPOCH_HANDOFF_KIND_NAMES[] = {
    {WORKSHOP_EPOCH_HANDOFF_APPOINTMENT, "appointment"},
    {WORKSHOP_EPOCH_HANDOFF_DEADLINE, "deadline"},
    {WORKSHOP_EPOCH_HANDOFF_REMINDER, "reminder"},
    {WORKSHOP_EPOCH_HANDOFF_AVAILABILITY, "availability"},
    {WORKSHOP_EPOCH_HANDOFF_COHORT_WINDOW, "cohort-window"},
};

const char *workshop_status_label(WorkshopServiceStatus status) {
    size_t i;

    for (i = 0; i < sizeof(WORKSHOP_STATUS_NAMES) / sizeof(WORKSHOP_STATUS_NAMES[0]); i++) {
        if (WORKSHOP_STATUS_NAMES[i].status == status) {
            return WORKSHOP_STATUS_NAMES[i].label;
        }
    }

    return "unknown";
}

int workshop_status_from_label(const char *label, WorkshopServiceStatus *out_status) {
    size_t i;

    if (label == 0 || out_status == 0) {
        return 0;
    }

    for (i = 0; i < sizeof(WORKSHOP_STATUS_NAMES) / sizeof(WORKSHOP_STATUS_NAMES[0]); i++) {
        if (strcmp(WORKSHOP_STATUS_NAMES[i].label, label) == 0) {
            *out_status = WORKSHOP_STATUS_NAMES[i].status;
            return 1;
        }
    }

    return 0;
}

int workshop_status_is_terminal(WorkshopServiceStatus status) {
    return status == WORKSHOP_STATUS_COMPLETE ||
           status == WORKSHOP_STATUS_CANCELED;
}

int workshop_status_needs_operator_attention(WorkshopServiceStatus status) {
    return status == WORKSHOP_STATUS_DRAFT ||
           status == WORKSHOP_STATUS_QUEUED ||
           status == WORKSHOP_STATUS_BLOCKED ||
           status == WORKSHOP_STATUS_INTAKE_READY ||
           status == WORKSHOP_STATUS_FIT_REVIEW ||
           status == WORKSHOP_STATUS_MATERIALS_RECEIVED ||
           status == WORKSHOP_STATUS_WAITING_ON_CUSTOMER ||
           status == WORKSHOP_STATUS_EPOCH_TIME_REQUESTED;
}

const char *workshop_lane_label(WorkshopServiceLane lane) {
    size_t i;

    for (i = 0; i < sizeof(WORKSHOP_LANE_NAMES) / sizeof(WORKSHOP_LANE_NAMES[0]); i++) {
        if (WORKSHOP_LANE_NAMES[i].lane == lane) {
            return WORKSHOP_LANE_NAMES[i].label;
        }
    }

    return "unknown";
}

const char *workshop_package_kind_label(WorkshopPackageKind kind) {
    size_t i;

    for (i = 0; i < sizeof(WORKSHOP_PACKAGE_KIND_NAMES) / sizeof(WORKSHOP_PACKAGE_KIND_NAMES[0]); i++) {
        if (WORKSHOP_PACKAGE_KIND_NAMES[i].kind == kind) {
            return WORKSHOP_PACKAGE_KIND_NAMES[i].label;
        }
    }

    return "unknown";
}

const char *workshop_submission_kind_label(WorkshopSubmissionKind kind) {
    size_t i;

    for (i = 0; i < sizeof(WORKSHOP_SUBMISSION_KIND_NAMES) / sizeof(WORKSHOP_SUBMISSION_KIND_NAMES[0]); i++) {
        if (WORKSHOP_SUBMISSION_KIND_NAMES[i].kind == kind) {
            return WORKSHOP_SUBMISSION_KIND_NAMES[i].label;
        }
    }

    return "unknown";
}

const char *workshop_epoch_handoff_kind_label(WorkshopEpochHandoffKind kind) {
    size_t i;

    for (i = 0; i < sizeof(WORKSHOP_EPOCH_HANDOFF_KIND_NAMES) / sizeof(WORKSHOP_EPOCH_HANDOFF_KIND_NAMES[0]); i++) {
        if (WORKSHOP_EPOCH_HANDOFF_KIND_NAMES[i].kind == kind) {
            return WORKSHOP_EPOCH_HANDOFF_KIND_NAMES[i].label;
        }
    }

    return "unknown";
}

int workshop_service_request_requires_guardian_flow(const WorkshopServiceRequest *request) {
    if (request == 0) {
        return 0;
    }

    return request->customer_age > 0 &&
           request->customer_age < 19 &&
           request->compatibility_assessment_required;
}

int workshop_service_request_needs_epoch_time(const WorkshopServiceRequest *request) {
    if (request == 0) {
        return 0;
    }

    return request->epoch_time_needed ||
           request->status == WORKSHOP_STATUS_EPOCH_TIME_REQUESTED;
}

int workshop_package_is_lower_labor(const WorkshopPackage *package) {
    if (package == 0) {
        return 0;
    }

    return package->supports_async_delivery ||
           package->supports_cohort_delivery ||
           package->expected_live_minutes <= 30;
}

int workshop_submission_needs_review(const WorkshopSubmission *submission) {
    if (submission == 0) {
        return 0;
    }

    return submission->status == WORKSHOP_STATUS_QUEUED ||
           submission->status == WORKSHOP_STATUS_MATERIALS_RECEIVED ||
           submission->status == WORKSHOP_STATUS_IN_PROGRESS ||
           submission->status == WORKSHOP_STATUS_BLOCKED;
}

int workshop_epoch_handoff_is_customer_safe(const WorkshopEpochTimeHandoff *handoff) {
    if (handoff == 0) {
        return 0;
    }

    return handoff->customer_safe_status != 0 &&
           handoff->customer_safe_status[0] != '\0' &&
           handoff->status != WORKSHOP_STATUS_DRAFT &&
           handoff->status != WORKSHOP_STATUS_BLOCKED;
}
