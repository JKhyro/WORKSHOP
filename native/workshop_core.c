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

typedef struct WorkshopAraReviewStatusName {
    WorkshopAraReviewStatus status;
    const char *label;
} WorkshopAraReviewStatusName;

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
    {WORKSHOP_STATUS_COMPATIBILITY_REVIEW, "compatibility-review"},
};

static int workshop_text_present(const char *value) {
    return value != 0 && value[0] != '\0';
}

static int workshop_ara_review_status_is_active(WorkshopAraReviewStatus status) {
    return status == WORKSHOP_ARA_REVIEW_QUEUED ||
           status == WORKSHOP_ARA_REVIEW_OPERATOR_REVIEW ||
           status == WORKSHOP_ARA_REVIEW_APPROVED ||
           status == WORKSHOP_ARA_REVIEW_REVISION_REQUIRED;
}

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

static const WorkshopAraReviewStatusName WORKSHOP_ARA_REVIEW_STATUS_NAMES[] = {
    {WORKSHOP_ARA_REVIEW_NOT_REQUESTED, "not-requested"},
    {WORKSHOP_ARA_REVIEW_QUEUED, "queued"},
    {WORKSHOP_ARA_REVIEW_OPERATOR_REVIEW, "operator-review"},
    {WORKSHOP_ARA_REVIEW_APPROVED, "approved"},
    {WORKSHOP_ARA_REVIEW_REVISION_REQUIRED, "revision-required"},
    {WORKSHOP_ARA_REVIEW_REJECTED, "rejected"},
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
           status == WORKSHOP_STATUS_COMPATIBILITY_REVIEW ||
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

const char *workshop_ara_review_status_label(WorkshopAraReviewStatus status) {
    size_t i;

    for (i = 0; i < sizeof(WORKSHOP_ARA_REVIEW_STATUS_NAMES) / sizeof(WORKSHOP_ARA_REVIEW_STATUS_NAMES[0]); i++) {
        if (WORKSHOP_ARA_REVIEW_STATUS_NAMES[i].status == status) {
            return WORKSHOP_ARA_REVIEW_STATUS_NAMES[i].label;
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

int workshop_package_eligibility_is_offer_ready(const WorkshopPackageEligibility *eligibility) {
    if (eligibility == 0) {
        return 0;
    }

    return workshop_text_present(eligibility->package_id) &&
           workshop_text_present(eligibility->operator_next_action) &&
           workshop_text_present(eligibility->customer_safe_status) &&
           eligibility->customer_offer_ready &&
           eligibility->readiness_status != WORKSHOP_STATUS_DRAFT &&
           eligibility->readiness_status != WORKSHOP_STATUS_BLOCKED &&
           eligibility->accepts_direct_adult_intake;
}

int workshop_package_eligibility_is_intake_ready(const WorkshopPackageEligibility *eligibility) {
    if (eligibility == 0) {
        return 0;
    }

    return workshop_package_eligibility_is_offer_ready(eligibility) &&
           eligibility->readiness_status != WORKSHOP_STATUS_COMPATIBILITY_REVIEW;
}

int workshop_service_request_routes_to_compatibility_review(const WorkshopServiceRequest *request, const WorkshopPackageEligibility *eligibility) {
    if (request == 0) {
        return 0;
    }

    return workshop_service_request_requires_guardian_flow(request) &&
           (eligibility == 0 || !eligibility->accepts_direct_under_19_intake);
}

int workshop_package_accepts_service_request(const WorkshopPackageEligibility *eligibility, const WorkshopServiceRequest *request) {
    if (eligibility == 0 || request == 0) {
        return 0;
    }

    return workshop_package_eligibility_is_intake_ready(eligibility) &&
           !workshop_service_request_routes_to_compatibility_review(request, eligibility) &&
           (!workshop_service_request_needs_epoch_time(request) || eligibility->lower_labor_default || eligibility->kind == WORKSHOP_PACKAGE_PREMIUM_PROGRAM);
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

int workshop_submission_review_cycle_is_ready(const WorkshopSubmissionReviewCycle *cycle) {
    if (cycle == 0) {
        return 0;
    }

    return workshop_text_present(cycle->id) &&
           workshop_text_present(cycle->submission_id) &&
           workshop_text_present(cycle->service_request_id) &&
           workshop_text_present(cycle->intake_iso) &&
           workshop_text_present(cycle->return_window_label) &&
           workshop_text_present(cycle->operator_next_action) &&
           workshop_text_present(cycle->customer_safe_status) &&
           cycle->customer_visible &&
           cycle->current_status != WORKSHOP_STATUS_DRAFT &&
           cycle->current_status != WORKSHOP_STATUS_CANCELED;
}

int workshop_submission_review_cycle_is_customer_safe(const WorkshopSubmissionReviewCycle *cycle) {
    if (cycle == 0) {
        return 0;
    }

    return workshop_submission_review_cycle_is_ready(cycle) &&
           workshop_text_present(cycle->review_due_iso) &&
           workshop_text_present(cycle->customer_safe_status) &&
           cycle->current_status != WORKSHOP_STATUS_BLOCKED;
}

int workshop_cohort_plan_is_enrollment_ready(const WorkshopCohortPlan *plan) {
    if (plan == 0) {
        return 0;
    }

    return workshop_text_present(plan->id) &&
           workshop_text_present(plan->package_id) &&
           workshop_text_present(plan->operator_next_action) &&
           workshop_text_present(plan->customer_safe_status) &&
           plan->readiness_status != WORKSHOP_STATUS_BLOCKED &&
           plan->target_capacity > 0 &&
           plan->minimum_viable_count > 0 &&
           plan->target_capacity >= plan->minimum_viable_count &&
           plan->enrolled_count >= 0 &&
           plan->reusable_materials_ready;
}

int workshop_cohort_plan_supports_subscription(const WorkshopCohortPlan *plan) {
    if (plan == 0) {
        return 0;
    }

    return workshop_cohort_plan_is_enrollment_ready(plan) &&
           plan->target_capacity > plan->minimum_viable_count &&
           plan->readiness_status != WORKSHOP_STATUS_CANCELED;
}

int workshop_compatibility_gate_blocks_auto_accept(const WorkshopCompatibilityGate *gate) {
    if (gate == 0) {
        return 0;
    }

    return workshop_text_present(gate->id) &&
           workshop_text_present(gate->service_request_id) &&
           workshop_text_present(gate->operator_next_action) &&
           workshop_text_present(gate->customer_safe_status) &&
           gate->blocks_auto_acceptance &&
           gate->customer_age > 0 &&
           gate->customer_age < 19 &&
           gate->guardian_terms_required &&
           gate->gate_status == WORKSHOP_STATUS_COMPATIBILITY_REVIEW;
}

int workshop_crm_opportunity_is_qualified(const WorkshopCrmOpportunity *opportunity) {
    if (opportunity == 0) {
        return 0;
    }

    return workshop_text_present(opportunity->id) &&
           workshop_text_present(opportunity->account_id) &&
           workshop_text_present(opportunity->service_request_id) &&
           workshop_text_present(opportunity->operator_next_action) &&
           workshop_text_present(opportunity->customer_safe_status) &&
           opportunity->estimated_value_jpy > 0 &&
           opportunity->qualified &&
           opportunity->status != WORKSHOP_STATUS_DRAFT &&
           opportunity->status != WORKSHOP_STATUS_CANCELED &&
           opportunity->status != WORKSHOP_STATUS_BLOCKED;
}

int workshop_ara_revenue_packet_is_ready(const WorkshopAraRevenuePacket *packet) {
    if (packet == 0) {
        return 0;
    }

    return workshop_text_present(packet->id) &&
           workshop_text_present(packet->opportunity_id) &&
           workshop_text_present(packet->owner) &&
           workshop_text_present(packet->operator_next_action) &&
           workshop_text_present(packet->customer_safe_status) &&
           packet->requires_operator_review &&
           packet->status != WORKSHOP_STATUS_DRAFT &&
           packet->status != WORKSHOP_STATUS_BLOCKED &&
           packet->status != WORKSHOP_STATUS_CANCELED &&
           workshop_ara_review_status_is_active(packet->review_status);
}

int workshop_ara_assignment_is_active(const WorkshopAraAssignment *assignment) {
    if (assignment == 0) {
        return 0;
    }

    return workshop_text_present(assignment->id) &&
           workshop_text_present(assignment->packet_id) &&
           workshop_text_present(assignment->assignee) &&
           workshop_text_present(assignment->operator_next_action) &&
           workshop_text_present(assignment->customer_safe_status) &&
           assignment->accepted &&
           (assignment->review_required || assignment->review_complete) &&
           assignment->status != WORKSHOP_STATUS_DRAFT &&
           assignment->status != WORKSHOP_STATUS_BLOCKED &&
           assignment->status != WORKSHOP_STATUS_CANCELED;
}

int workshop_ara_review_receipt_is_customer_safe(const WorkshopAraReviewReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->request_id) &&
           workshop_text_present(receipt->opportunity_id) &&
           workshop_text_present(receipt->packet_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->summary) &&
           workshop_text_present(receipt->created_iso) &&
           workshop_text_present(receipt->customer_safe_status) &&
           receipt->customer_visible &&
           workshop_ara_review_status_is_active(receipt->review_status);
}

int workshop_epoch_handoff_is_customer_safe(const WorkshopEpochTimeHandoff *handoff) {
    if (handoff == 0) {
        return 0;
    }

    return workshop_text_present(handoff->id) &&
           workshop_text_present(handoff->service_request_id) &&
           workshop_text_present(handoff->customer_safe_status) &&
           handoff->status != WORKSHOP_STATUS_DRAFT &&
           handoff->status != WORKSHOP_STATUS_BLOCKED;
}

int workshop_delivery_transition_is_allowed(WorkshopServiceStatus from_status, WorkshopServiceStatus to_status) {
    if (from_status == to_status || workshop_status_is_terminal(from_status)) {
        return 0;
    }

    switch (from_status) {
        case WORKSHOP_STATUS_DRAFT:
        case WORKSHOP_STATUS_AVAILABLE:
            return to_status == WORKSHOP_STATUS_INTAKE_READY ||
                   to_status == WORKSHOP_STATUS_FIT_REVIEW ||
                   to_status == WORKSHOP_STATUS_COMPATIBILITY_REVIEW ||
                   to_status == WORKSHOP_STATUS_QUEUED ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        case WORKSHOP_STATUS_INTAKE_READY:
            return to_status == WORKSHOP_STATUS_FIT_REVIEW ||
                   to_status == WORKSHOP_STATUS_COMPATIBILITY_REVIEW ||
                   to_status == WORKSHOP_STATUS_MATERIALS_RECEIVED ||
                   to_status == WORKSHOP_STATUS_QUEUED ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        case WORKSHOP_STATUS_FIT_REVIEW:
            return to_status == WORKSHOP_STATUS_COMPATIBILITY_REVIEW ||
                   to_status == WORKSHOP_STATUS_MATERIALS_RECEIVED ||
                   to_status == WORKSHOP_STATUS_QUEUED ||
                   to_status == WORKSHOP_STATUS_BLOCKED ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        case WORKSHOP_STATUS_COMPATIBILITY_REVIEW:
            return to_status == WORKSHOP_STATUS_FIT_REVIEW ||
                   to_status == WORKSHOP_STATUS_QUEUED ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        case WORKSHOP_STATUS_MATERIALS_RECEIVED:
            return to_status == WORKSHOP_STATUS_EPOCH_TIME_REQUESTED ||
                   to_status == WORKSHOP_STATUS_IN_PROGRESS ||
                   to_status == WORKSHOP_STATUS_WAITING_ON_CUSTOMER ||
                   to_status == WORKSHOP_STATUS_BLOCKED ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        case WORKSHOP_STATUS_EPOCH_TIME_REQUESTED:
            return to_status == WORKSHOP_STATUS_QUEUED ||
                   to_status == WORKSHOP_STATUS_IN_PROGRESS ||
                   to_status == WORKSHOP_STATUS_WAITING_ON_CUSTOMER ||
                   to_status == WORKSHOP_STATUS_BLOCKED ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        case WORKSHOP_STATUS_QUEUED:
            return to_status == WORKSHOP_STATUS_EPOCH_TIME_REQUESTED ||
                   to_status == WORKSHOP_STATUS_IN_PROGRESS ||
                   to_status == WORKSHOP_STATUS_WAITING_ON_CUSTOMER ||
                   to_status == WORKSHOP_STATUS_BLOCKED ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        case WORKSHOP_STATUS_IN_PROGRESS:
            return to_status == WORKSHOP_STATUS_WAITING_ON_CUSTOMER ||
                   to_status == WORKSHOP_STATUS_BLOCKED ||
                   to_status == WORKSHOP_STATUS_COMPLETE ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        case WORKSHOP_STATUS_WAITING_ON_CUSTOMER:
            return to_status == WORKSHOP_STATUS_QUEUED ||
                   to_status == WORKSHOP_STATUS_IN_PROGRESS ||
                   to_status == WORKSHOP_STATUS_BLOCKED ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        case WORKSHOP_STATUS_BLOCKED:
            return to_status == WORKSHOP_STATUS_FIT_REVIEW ||
                   to_status == WORKSHOP_STATUS_QUEUED ||
                   to_status == WORKSHOP_STATUS_IN_PROGRESS ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        default:
            return 0;
    }
}

int workshop_delivery_lifecycle_is_valid(const WorkshopDeliveryLifecycle *lifecycle) {
    if (lifecycle == 0) {
        return 0;
    }

    return workshop_text_present(lifecycle->id) &&
           workshop_text_present(lifecycle->service_request_id) &&
           workshop_text_present(lifecycle->operator_next_action) &&
           workshop_text_present(lifecycle->customer_safe_status) &&
           workshop_text_present(lifecycle->updated_iso) &&
           lifecycle->customer_visible &&
           workshop_delivery_transition_is_allowed(lifecycle->current_status, lifecycle->next_status);
}

int workshop_customer_safe_status_event_is_valid(const WorkshopCustomerSafeStatusEvent *event) {
    if (event == 0) {
        return 0;
    }

    return workshop_text_present(event->id) &&
           workshop_text_present(event->service_request_id) &&
           workshop_text_present(event->label) &&
           workshop_text_present(event->customer_safe_status) &&
           workshop_text_present(event->created_iso) &&
           event->customer_visible &&
           event->status != WORKSHOP_STATUS_DRAFT &&
           event->status != WORKSHOP_STATUS_BLOCKED;
}

int workshop_epoch_bridge_payload_is_ready(const WorkshopEpochBridgePayload *payload) {
    if (payload == 0) {
        return 0;
    }

    return workshop_text_present(payload->source_handoff_id) &&
           workshop_text_present(payload->requester) &&
           workshop_text_present(payload->need) &&
           workshop_text_present(payload->requested_window) &&
           workshop_text_present(payload->timezone) &&
           workshop_text_present(payload->status) &&
           workshop_text_present(payload->customer_safe_status) &&
           workshop_text_present(payload->created_iso) &&
           payload->sandbox_only &&
           !payload->provider_go_live_requested &&
           strcmp(payload->status, "blocked") != 0 &&
           strcmp(payload->status, "failed") != 0;
}
