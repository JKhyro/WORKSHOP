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
    {WORKSHOP_STATUS_TIMING_CONFIRMED, "timing-confirmed"},
    {WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED, "timing-reschedule-required"},
    {WORKSHOP_STATUS_RECURRING_SERIES_ACTIVE, "recurring-series-active"},
    {WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED, "recurring-exception-action-required"},
    {WORKSHOP_STATUS_TIMING_WAITLISTED, "timing-waitlisted"},
    {WORKSHOP_STATUS_TIMING_PROMOTED, "timing-promoted"},
};

static int workshop_text_present(const char *value) {
    return value != 0 && value[0] != '\0';
}

static int workshop_text_has_prefix(const char *value, const char *prefix) {
    if (!workshop_text_present(value) || !workshop_text_present(prefix)) {
        return 0;
    }

    return strncmp(value, prefix, strlen(prefix)) == 0;
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
           status == WORKSHOP_STATUS_EPOCH_TIME_REQUESTED ||
           status == WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED ||
           status == WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED ||
           status == WORKSHOP_STATUS_TIMING_WAITLISTED;
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

int workshop_cohort_capacity_plan_is_ready(const WorkshopCohortCapacityPlan *plan) {
    if (plan == 0) {
        return 0;
    }

    return workshop_text_present(plan->id) &&
           workshop_text_present(plan->cohort_plan_id) &&
           workshop_text_present(plan->service_request_id) &&
           workshop_text_present(plan->package_id) &&
           workshop_text_present(plan->capacity_status) &&
           workshop_text_present(plan->operator_next_action) &&
           workshop_text_present(plan->customer_safe_status) &&
           workshop_text_present(plan->updated_iso) &&
           plan->target_capacity > 0 &&
           plan->minimum_viable_count > 0 &&
           plan->target_capacity >= plan->minimum_viable_count &&
           plan->enrolled_count >= 0 &&
           plan->enrolled_count <= plan->target_capacity &&
           plan->reusable_materials_ready &&
           plan->customer_visible &&
           plan->status != WORKSHOP_STATUS_BLOCKED &&
           plan->status != WORKSHOP_STATUS_CANCELED;
}

int workshop_subscription_plan_is_low_labor_ready(const WorkshopSubscriptionPlan *plan) {
    if (plan == 0) {
        return 0;
    }

    return workshop_text_present(plan->id) &&
           workshop_text_present(plan->cohort_plan_id) &&
           workshop_text_present(plan->service_request_id) &&
           workshop_text_present(plan->package_id) &&
           workshop_text_present(plan->cadence_label) &&
           workshop_text_present(plan->operator_next_action) &&
           workshop_text_present(plan->customer_safe_status) &&
           workshop_text_present(plan->updated_iso) &&
           plan->monthly_price_jpy > 0 &&
           plan->active_subscribers >= 0 &&
           plan->target_subscribers > 0 &&
           plan->active_subscribers <= plan->target_subscribers &&
           plan->material_units_ready > 0 &&
           !plan->live_time_required &&
           plan->customer_visible &&
           plan->status != WORKSHOP_STATUS_BLOCKED &&
           plan->status != WORKSHOP_STATUS_CANCELED;
}

int workshop_cohort_planning_receipt_is_customer_safe(const WorkshopCohortPlanningReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->cohort_plan_id) &&
           workshop_text_present(receipt->capacity_plan_id) &&
           workshop_text_present(receipt->subscription_plan_id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->summary) &&
           workshop_text_present(receipt->created_iso) &&
           workshop_text_present(receipt->customer_safe_status) &&
           receipt->customer_visible &&
           receipt->status != WORKSHOP_STATUS_BLOCKED &&
           receipt->status != WORKSHOP_STATUS_CANCELED &&
           strcmp(receipt->kind, "cohort-subscription-planning") == 0;
}

int workshop_cohort_enrollment_is_customer_safe(const WorkshopCohortEnrollment *enrollment) {
    if (enrollment == 0) {
        return 0;
    }

    return workshop_text_present(enrollment->id) &&
           workshop_text_present(enrollment->cohort_plan_id) &&
           workshop_text_present(enrollment->service_request_id) &&
           workshop_text_present(enrollment->customer_account_id) &&
           workshop_text_present(enrollment->enrollment_label) &&
           workshop_text_present(enrollment->operator_next_action) &&
           workshop_text_present(enrollment->customer_safe_status) &&
           workshop_text_present(enrollment->created_iso) &&
           enrollment->seat_number > 0 &&
           enrollment->customer_visible &&
           enrollment->status != WORKSHOP_STATUS_BLOCKED &&
           enrollment->status != WORKSHOP_STATUS_CANCELED;
}

int workshop_subscription_lifecycle_is_active(const WorkshopSubscriptionLifecycle *lifecycle) {
    if (lifecycle == 0) {
        return 0;
    }

    return workshop_text_present(lifecycle->id) &&
           workshop_text_present(lifecycle->subscription_plan_id) &&
           workshop_text_present(lifecycle->enrollment_id) &&
           workshop_text_present(lifecycle->service_request_id) &&
           workshop_text_present(lifecycle->customer_account_id) &&
           workshop_text_present(lifecycle->cadence_label) &&
           workshop_text_present(lifecycle->operator_next_action) &&
           workshop_text_present(lifecycle->customer_safe_status) &&
           workshop_text_present(lifecycle->updated_iso) &&
           lifecycle->monthly_price_jpy > 0 &&
           lifecycle->material_units_available > 0 &&
           !lifecycle->payment_live_enabled &&
           lifecycle->customer_visible &&
           lifecycle->status != WORKSHOP_STATUS_BLOCKED &&
           lifecycle->status != WORKSHOP_STATUS_CANCELED;
}

int workshop_subscription_lifecycle_receipt_is_customer_safe(const WorkshopSubscriptionLifecycleReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->subscription_lifecycle_id) &&
           workshop_text_present(receipt->enrollment_id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->summary) &&
           workshop_text_present(receipt->created_iso) &&
           workshop_text_present(receipt->customer_safe_status) &&
           receipt->customer_visible &&
           receipt->status != WORKSHOP_STATUS_BLOCKED &&
           receipt->status != WORKSHOP_STATUS_CANCELED &&
           strcmp(receipt->kind, "subscription-lifecycle") == 0;
}

int workshop_cohort_outcome_report_is_customer_safe(const WorkshopCohortOutcomeReport *report) {
    if (report == 0) {
        return 0;
    }

    return workshop_text_present(report->id) &&
           workshop_text_present(report->cohort_plan_id) &&
           workshop_text_present(report->enrollment_id) &&
           workshop_text_present(report->subscription_lifecycle_id) &&
           workshop_text_present(report->service_request_id) &&
           workshop_text_present(report->customer_account_id) &&
           workshop_text_present(report->renewal_signal) &&
           workshop_text_present(report->operator_next_action) &&
           workshop_text_present(report->customer_safe_status) &&
           workshop_text_present(report->updated_iso) &&
           report->progress_score >= 0 &&
           report->progress_score <= 100 &&
           report->customer_visible &&
           report->status != WORKSHOP_STATUS_BLOCKED &&
           report->status != WORKSHOP_STATUS_CANCELED;
}

int workshop_subscription_renewal_report_is_ready(const WorkshopSubscriptionRenewalReport *report) {
    if (report == 0) {
        return 0;
    }

    return workshop_text_present(report->id) &&
           workshop_text_present(report->subscription_lifecycle_id) &&
           workshop_text_present(report->outcome_report_id) &&
           workshop_text_present(report->service_request_id) &&
           workshop_text_present(report->customer_account_id) &&
           workshop_text_present(report->operator_next_action) &&
           workshop_text_present(report->customer_safe_status) &&
           workshop_text_present(report->updated_iso) &&
           report->renewal_ready &&
           report->risk_score >= 0 &&
           report->risk_score <= 100 &&
           report->projected_value_jpy > 0 &&
           !report->payment_live_enabled &&
           report->customer_visible &&
           report->status != WORKSHOP_STATUS_BLOCKED &&
           report->status != WORKSHOP_STATUS_CANCELED;
}

int workshop_cohort_progress_status_event_is_customer_safe(const WorkshopCohortProgressStatusEvent *event) {
    if (event == 0) {
        return 0;
    }

    return workshop_text_present(event->id) &&
           workshop_text_present(event->outcome_report_id) &&
           workshop_text_present(event->renewal_report_id) &&
           workshop_text_present(event->service_request_id) &&
           workshop_text_present(event->label) &&
           workshop_text_present(event->customer_safe_status) &&
           workshop_text_present(event->created_iso) &&
           event->customer_visible &&
           event->status != WORKSHOP_STATUS_BLOCKED &&
           event->status != WORKSHOP_STATUS_CANCELED;
}

int workshop_outcome_renewal_receipt_is_customer_safe(const WorkshopOutcomeRenewalReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->outcome_report_id) &&
           workshop_text_present(receipt->renewal_report_id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->summary) &&
           workshop_text_present(receipt->created_iso) &&
           workshop_text_present(receipt->customer_safe_status) &&
           receipt->customer_visible &&
           receipt->status != WORKSHOP_STATUS_BLOCKED &&
           receipt->status != WORKSHOP_STATUS_CANCELED &&
           strcmp(receipt->kind, "cohort-outcome-renewal") == 0;
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

int workshop_revenue_outcome_is_reportable(const WorkshopRevenueOutcome *outcome) {
    if (outcome == 0) {
        return 0;
    }

    return workshop_text_present(outcome->id) &&
           workshop_text_present(outcome->service_request_id) &&
           workshop_text_present(outcome->package_id) &&
           workshop_text_present(outcome->operator_next_action) &&
           workshop_text_present(outcome->customer_safe_status) &&
           workshop_text_present(outcome->updated_iso) &&
           outcome->estimated_value_jpy > 0 &&
           outcome->customer_visible &&
           outcome->result_receipt_ready &&
           outcome->status != WORKSHOP_STATUS_DRAFT &&
           outcome->status != WORKSHOP_STATUS_BLOCKED &&
           outcome->status != WORKSHOP_STATUS_CANCELED &&
           outcome->status != WORKSHOP_STATUS_COMPATIBILITY_REVIEW;
}

int workshop_delivery_result_receipt_is_customer_safe(const WorkshopDeliveryResultReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->outcome_id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->summary) &&
           workshop_text_present(receipt->created_iso) &&
           workshop_text_present(receipt->customer_safe_status) &&
           receipt->customer_visible &&
           receipt->status != WORKSHOP_STATUS_DRAFT &&
           receipt->status != WORKSHOP_STATUS_BLOCKED &&
           receipt->status != WORKSHOP_STATUS_CANCELED &&
           receipt->status != WORKSHOP_STATUS_COMPATIBILITY_REVIEW;
}

int workshop_ara_review_completion_is_ready(const WorkshopAraReviewCompletion *completion) {
    if (completion == 0) {
        return 0;
    }

    if (!workshop_text_present(completion->id) ||
        !workshop_text_present(completion->assignment_id) ||
        !workshop_text_present(completion->packet_id) ||
        !workshop_text_present(completion->outcome_id) ||
        !workshop_text_present(completion->operator_next_action) ||
        !workshop_text_present(completion->customer_safe_status) ||
        completion->customer_visible ||
        !workshop_ara_review_status_is_active(completion->review_status)) {
        return 0;
    }

    if (completion->review_complete) {
        return completion->review_status == WORKSHOP_ARA_REVIEW_APPROVED &&
               workshop_text_present(completion->completed_iso);
    }

    return completion->review_status != WORKSHOP_ARA_REVIEW_APPROVED &&
           !workshop_text_present(completion->completed_iso);
}

int workshop_customer_account_is_active(const WorkshopCustomerAccount *account) {
    if (account == 0) {
        return 0;
    }

    return workshop_text_present(account->id) &&
           workshop_text_present(account->display_name) &&
           workshop_text_present(account->account_type) &&
           workshop_text_present(account->next_follow_up_due) &&
           workshop_text_present(account->operator_next_action) &&
           workshop_text_present(account->customer_safe_status) &&
           workshop_text_present(account->updated_iso) &&
           account->lifetime_value_jpy >= 0 &&
           account->active_request_count >= 0 &&
           account->completed_result_count >= 0 &&
           account->customer_visible &&
           account->status != WORKSHOP_STATUS_DRAFT &&
           account->status != WORKSHOP_STATUS_BLOCKED &&
           account->status != WORKSHOP_STATUS_CANCELED;
}

int workshop_customer_account_history_is_customer_safe(const WorkshopCustomerAccountHistory *history) {
    if (history == 0) {
        return 0;
    }

    return workshop_text_present(history->id) &&
           workshop_text_present(history->account_id) &&
           workshop_text_present(history->service_request_id) &&
           workshop_text_present(history->outcome_id) &&
           workshop_text_present(history->event) &&
           workshop_text_present(history->customer_safe_status) &&
           workshop_text_present(history->recorded_iso) &&
           history->value_jpy >= 0 &&
           history->customer_visible &&
           history->status != WORKSHOP_STATUS_DRAFT &&
           history->status != WORKSHOP_STATUS_BLOCKED &&
           history->status != WORKSHOP_STATUS_CANCELED;
}

int workshop_renewal_opportunity_is_ready(const WorkshopRenewalOpportunity *renewal) {
    if (renewal == 0) {
        return 0;
    }

    return workshop_text_present(renewal->id) &&
           workshop_text_present(renewal->account_id) &&
           workshop_text_present(renewal->source_outcome_id) &&
           workshop_text_present(renewal->package_id) &&
           workshop_text_present(renewal->follow_up_due) &&
           workshop_text_present(renewal->operator_next_action) &&
           workshop_text_present(renewal->customer_safe_status) &&
           workshop_text_present(renewal->updated_iso) &&
           renewal->value_jpy > 0 &&
           renewal->renewal_ready &&
           renewal->customer_visible &&
           renewal->status != WORKSHOP_STATUS_DRAFT &&
           renewal->status != WORKSHOP_STATUS_BLOCKED &&
           renewal->status != WORKSHOP_STATUS_CANCELED &&
           renewal->status != WORKSHOP_STATUS_COMPATIBILITY_REVIEW;
}

int workshop_customer_follow_up_is_customer_safe(const WorkshopCustomerFollowUp *follow_up) {
    if (follow_up == 0) {
        return 0;
    }

    return workshop_text_present(follow_up->id) &&
           workshop_text_present(follow_up->renewal_id) &&
           workshop_text_present(follow_up->account_id) &&
           workshop_text_present(follow_up->kind) &&
           workshop_text_present(follow_up->due_label) &&
           workshop_text_present(follow_up->operator_next_action) &&
           workshop_text_present(follow_up->customer_safe_status) &&
           workshop_text_present(follow_up->created_iso) &&
           follow_up->customer_visible &&
           follow_up->status != WORKSHOP_STATUS_DRAFT &&
           follow_up->status != WORKSHOP_STATUS_BLOCKED &&
           follow_up->status != WORKSHOP_STATUS_CANCELED &&
           follow_up->status != WORKSHOP_STATUS_COMPATIBILITY_REVIEW;
}

int workshop_retention_health_is_actionable(const WorkshopRetentionHealth *retention) {
    if (retention == 0) {
        return 0;
    }

    return workshop_text_present(retention->id) &&
           workshop_text_present(retention->account_id) &&
           workshop_text_present(retention->source_renewal_id) &&
           workshop_text_present(retention->risk_level) &&
           workshop_text_present(retention->operator_next_action) &&
           workshop_text_present(retention->customer_safe_status) &&
           workshop_text_present(retention->updated_iso) &&
           retention->retention_score >= 0 &&
           retention->retention_score <= 100 &&
           retention->customer_visible &&
           retention->growth_ready &&
           retention->status != WORKSHOP_STATUS_DRAFT &&
           retention->status != WORKSHOP_STATUS_BLOCKED &&
           retention->status != WORKSHOP_STATUS_CANCELED &&
           retention->status != WORKSHOP_STATUS_COMPATIBILITY_REVIEW;
}

int workshop_referral_opportunity_is_ready(const WorkshopReferralOpportunity *referral) {
    if (referral == 0) {
        return 0;
    }

    return workshop_text_present(referral->id) &&
           workshop_text_present(referral->account_id) &&
           workshop_text_present(referral->source_retention_id) &&
           workshop_text_present(referral->operator_next_action) &&
           workshop_text_present(referral->customer_safe_status) &&
           workshop_text_present(referral->updated_iso) &&
           referral->value_jpy > 0 &&
           referral->referral_ready &&
           referral->customer_visible &&
           referral->status != WORKSHOP_STATUS_DRAFT &&
           referral->status != WORKSHOP_STATUS_BLOCKED &&
           referral->status != WORKSHOP_STATUS_CANCELED &&
           referral->status != WORKSHOP_STATUS_COMPATIBILITY_REVIEW;
}

int workshop_account_growth_plan_is_ready(const WorkshopAccountGrowthPlan *growth_plan) {
    if (growth_plan == 0) {
        return 0;
    }

    return workshop_text_present(growth_plan->id) &&
           workshop_text_present(growth_plan->account_id) &&
           workshop_text_present(growth_plan->source_retention_id) &&
           workshop_text_present(growth_plan->plan_kind) &&
           workshop_text_present(growth_plan->operator_next_action) &&
           workshop_text_present(growth_plan->customer_safe_status) &&
           workshop_text_present(growth_plan->updated_iso) &&
           growth_plan->value_jpy > 0 &&
           growth_plan->growth_ready &&
           growth_plan->customer_visible &&
           growth_plan->status != WORKSHOP_STATUS_DRAFT &&
           growth_plan->status != WORKSHOP_STATUS_BLOCKED &&
           growth_plan->status != WORKSHOP_STATUS_CANCELED &&
           growth_plan->status != WORKSHOP_STATUS_COMPATIBILITY_REVIEW;
}

int workshop_growth_follow_up_receipt_is_customer_safe(const WorkshopGrowthFollowUpReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->growth_plan_id) &&
           workshop_text_present(receipt->account_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->summary) &&
           workshop_text_present(receipt->created_iso) &&
           workshop_text_present(receipt->customer_safe_status) &&
           receipt->customer_visible &&
           receipt->status != WORKSHOP_STATUS_DRAFT &&
           receipt->status != WORKSHOP_STATUS_BLOCKED &&
           receipt->status != WORKSHOP_STATUS_CANCELED &&
           receipt->status != WORKSHOP_STATUS_COMPATIBILITY_REVIEW;
}

int workshop_referral_conversion_is_ready(const WorkshopReferralConversion *conversion) {
    if (conversion == 0) {
        return 0;
    }

    return workshop_text_present(conversion->id) &&
           workshop_text_present(conversion->referral_id) &&
           workshop_text_present(conversion->account_id) &&
           workshop_text_present(conversion->operator_next_action) &&
           workshop_text_present(conversion->customer_safe_status) &&
           workshop_text_present(conversion->updated_iso) &&
           conversion->value_jpy > 0 &&
           conversion->conversion_ready &&
           conversion->customer_visible &&
           conversion->status != WORKSHOP_STATUS_DRAFT &&
           conversion->status != WORKSHOP_STATUS_BLOCKED &&
           conversion->status != WORKSHOP_STATUS_CANCELED &&
           conversion->status != WORKSHOP_STATUS_COMPATIBILITY_REVIEW;
}

int workshop_growth_plan_acceptance_is_ready(const WorkshopGrowthPlanAcceptance *acceptance) {
    if (acceptance == 0) {
        return 0;
    }

    return workshop_text_present(acceptance->id) &&
           workshop_text_present(acceptance->growth_plan_id) &&
           workshop_text_present(acceptance->conversion_id) &&
           workshop_text_present(acceptance->account_id) &&
           workshop_text_present(acceptance->operator_next_action) &&
           workshop_text_present(acceptance->customer_safe_status) &&
           workshop_text_present(acceptance->accepted_iso) &&
           acceptance->accepted &&
           acceptance->customer_visible &&
           acceptance->status != WORKSHOP_STATUS_DRAFT &&
           acceptance->status != WORKSHOP_STATUS_BLOCKED &&
           acceptance->status != WORKSHOP_STATUS_CANCELED &&
           acceptance->status != WORKSHOP_STATUS_COMPATIBILITY_REVIEW;
}

int workshop_expansion_service_request_is_ready(const WorkshopExpansionServiceRequest *request) {
    if (request == 0) {
        return 0;
    }

    return workshop_text_present(request->id) &&
           workshop_text_present(request->acceptance_id) &&
           workshop_text_present(request->account_id) &&
           workshop_text_present(request->package_id) &&
           workshop_text_present(request->operator_next_action) &&
           workshop_text_present(request->customer_safe_status) &&
           workshop_text_present(request->created_iso) &&
           request->value_jpy > 0 &&
           request->customer_visible &&
           request->status != WORKSHOP_STATUS_DRAFT &&
           request->status != WORKSHOP_STATUS_BLOCKED &&
           request->status != WORKSHOP_STATUS_CANCELED &&
           request->status != WORKSHOP_STATUS_COMPATIBILITY_REVIEW;
}

int workshop_conversion_status_event_is_customer_safe(const WorkshopConversionStatusEvent *event) {
    if (event == 0) {
        return 0;
    }

    return workshop_text_present(event->id) &&
           workshop_text_present(event->conversion_id) &&
           workshop_text_present(event->expansion_request_id) &&
           workshop_text_present(event->account_id) &&
           workshop_text_present(event->label) &&
           workshop_text_present(event->customer_safe_status) &&
           workshop_text_present(event->created_iso) &&
           event->customer_visible &&
           event->status != WORKSHOP_STATUS_DRAFT &&
           event->status != WORKSHOP_STATUS_BLOCKED &&
           event->status != WORKSHOP_STATUS_CANCELED &&
           event->status != WORKSHOP_STATUS_COMPATIBILITY_REVIEW;
}

int workshop_conversion_receipt_is_customer_safe(const WorkshopConversionReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->conversion_id) &&
           workshop_text_present(receipt->expansion_request_id) &&
           workshop_text_present(receipt->account_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->summary) &&
           workshop_text_present(receipt->created_iso) &&
           workshop_text_present(receipt->customer_safe_status) &&
           receipt->customer_visible &&
           receipt->status != WORKSHOP_STATUS_DRAFT &&
           receipt->status != WORKSHOP_STATUS_BLOCKED &&
           receipt->status != WORKSHOP_STATUS_CANCELED &&
           receipt->status != WORKSHOP_STATUS_COMPATIBILITY_REVIEW;
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
            return to_status == WORKSHOP_STATUS_TIMING_CONFIRMED ||
                   to_status == WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED ||
                   to_status == WORKSHOP_STATUS_RECURRING_SERIES_ACTIVE ||
                   to_status == WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED ||
                   to_status == WORKSHOP_STATUS_TIMING_WAITLISTED ||
                   to_status == WORKSHOP_STATUS_TIMING_PROMOTED ||
                   to_status == WORKSHOP_STATUS_QUEUED ||
                   to_status == WORKSHOP_STATUS_IN_PROGRESS ||
                   to_status == WORKSHOP_STATUS_WAITING_ON_CUSTOMER ||
                   to_status == WORKSHOP_STATUS_BLOCKED ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        case WORKSHOP_STATUS_TIMING_WAITLISTED:
            return to_status == WORKSHOP_STATUS_EPOCH_TIME_REQUESTED ||
                   to_status == WORKSHOP_STATUS_TIMING_PROMOTED ||
                   to_status == WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED ||
                   to_status == WORKSHOP_STATUS_WAITING_ON_CUSTOMER ||
                   to_status == WORKSHOP_STATUS_BLOCKED ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        case WORKSHOP_STATUS_TIMING_PROMOTED:
            return to_status == WORKSHOP_STATUS_TIMING_CONFIRMED ||
                   to_status == WORKSHOP_STATUS_IN_PROGRESS ||
                   to_status == WORKSHOP_STATUS_COMPLETE ||
                   to_status == WORKSHOP_STATUS_WAITING_ON_CUSTOMER ||
                   to_status == WORKSHOP_STATUS_BLOCKED ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        case WORKSHOP_STATUS_TIMING_CONFIRMED:
            return to_status == WORKSHOP_STATUS_IN_PROGRESS ||
                   to_status == WORKSHOP_STATUS_COMPLETE ||
                   to_status == WORKSHOP_STATUS_RECURRING_SERIES_ACTIVE ||
                   to_status == WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED ||
                   to_status == WORKSHOP_STATUS_WAITING_ON_CUSTOMER ||
                   to_status == WORKSHOP_STATUS_BLOCKED ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        case WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED:
            return to_status == WORKSHOP_STATUS_QUEUED ||
                   to_status == WORKSHOP_STATUS_EPOCH_TIME_REQUESTED ||
                   to_status == WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED ||
                   to_status == WORKSHOP_STATUS_IN_PROGRESS ||
                   to_status == WORKSHOP_STATUS_WAITING_ON_CUSTOMER ||
                   to_status == WORKSHOP_STATUS_BLOCKED ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        case WORKSHOP_STATUS_RECURRING_SERIES_ACTIVE:
            return to_status == WORKSHOP_STATUS_IN_PROGRESS ||
                   to_status == WORKSHOP_STATUS_COMPLETE ||
                   to_status == WORKSHOP_STATUS_WAITING_ON_CUSTOMER ||
                   to_status == WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED ||
                   to_status == WORKSHOP_STATUS_BLOCKED ||
                   to_status == WORKSHOP_STATUS_CANCELED;
        case WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED:
            return to_status == WORKSHOP_STATUS_EPOCH_TIME_REQUESTED ||
                   to_status == WORKSHOP_STATUS_QUEUED ||
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

int workshop_epoch_timing_return_payload_is_customer_safe(const WorkshopEpochTimingReturnPayload *payload) {
    int booking_confirmed;
    int availability_conflict;

    if (payload == 0) {
        return 0;
    }

    if (!workshop_text_present(payload->return_type)) {
        return 0;
    }

    booking_confirmed = strcmp(payload->return_type, "booking-confirmed") == 0;
    availability_conflict = strcmp(payload->return_type, "availability-conflict") == 0;

    return workshop_text_present(payload->id) &&
           workshop_text_present(payload->source_handoff_id) &&
           workshop_text_present(payload->service_request_id) &&
           workshop_text_present(payload->return_type) &&
           workshop_text_present(payload->epoch_status) &&
           workshop_text_present(payload->customer_safe_status) &&
           workshop_text_present(payload->returned_iso) &&
           payload->customer_visible &&
           !payload->provider_go_live_requested &&
           (booking_confirmed || availability_conflict) &&
           (!booking_confirmed || workshop_text_present(payload->confirmed_window)) &&
           strcmp(payload->epoch_status, "blocked") != 0 &&
           strcmp(payload->epoch_status, "failed") != 0;
}

int workshop_epoch_timing_return_consumption_is_customer_safe(const WorkshopEpochTimingReturnConsumption *consumption) {
    if (consumption == 0) {
        return 0;
    }

    return workshop_text_present(consumption->id) &&
           workshop_text_present(consumption->source_handoff_id) &&
           workshop_text_present(consumption->return_payload_id) &&
           workshop_text_present(consumption->service_request_id) &&
           workshop_text_present(consumption->operator_next_action) &&
           workshop_text_present(consumption->customer_safe_status) &&
           workshop_text_present(consumption->consumed_iso) &&
           consumption->customer_visible &&
           (consumption->status == WORKSHOP_STATUS_TIMING_CONFIRMED ||
            consumption->status == WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED);
}

int workshop_timing_return_receipt_is_customer_safe(const WorkshopTimingReturnReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->consumption_id) &&
           workshop_text_present(receipt->return_payload_id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->summary) &&
           workshop_text_present(receipt->created_iso) &&
           workshop_text_present(receipt->customer_safe_status) &&
           receipt->customer_visible &&
           (receipt->status == WORKSHOP_STATUS_TIMING_CONFIRMED ||
            receipt->status == WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED) &&
           strcmp(receipt->kind, "epoch-timing-return") == 0;
}

int workshop_epoch_revised_calendar_timing_payload_is_customer_safe(const WorkshopEpochRevisedCalendarTimingPayload *payload) {
    if (payload == 0) {
        return 0;
    }

    return workshop_text_present(payload->id) &&
           workshop_text_present(payload->source_handoff_id) &&
           workshop_text_present(payload->service_request_id) &&
           workshop_text_present(payload->calendar_system_label) &&
           workshop_text_present(payload->timing_display_label) &&
           workshop_text_present(payload->constraint_summary) &&
           workshop_text_present(payload->conversion_gate_reason) &&
           workshop_text_present(payload->epoch_projection_receipt_id) &&
           workshop_text_present(payload->customer_safe_status) &&
           workshop_text_present(payload->returned_iso) &&
           payload->customer_visible &&
           !payload->provider_go_live_requested &&
           payload->epoch_timing_provider_only &&
           !payload->workshop_calendar_ownership &&
           strcmp(payload->calendar_system_label, "revised-13-month") == 0 &&
           strstr(payload->conversion_gate_reason, "gated") != 0;
}

int workshop_epoch_revised_calendar_timing_consumption_is_customer_safe(const WorkshopEpochRevisedCalendarTimingConsumption *consumption) {
    if (consumption == 0) {
        return 0;
    }

    return workshop_text_present(consumption->id) &&
           workshop_text_present(consumption->payload_id) &&
           workshop_text_present(consumption->source_handoff_id) &&
           workshop_text_present(consumption->service_request_id) &&
           workshop_text_present(consumption->operator_next_action) &&
           workshop_text_present(consumption->customer_safe_status) &&
           workshop_text_present(consumption->consumed_iso) &&
           consumption->customer_visible &&
           consumption->epoch_timing_provider_only &&
           !consumption->workshop_calendar_ownership &&
           (consumption->status == WORKSHOP_STATUS_TIMING_CONFIRMED ||
            consumption->status == WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED ||
            consumption->status == WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED);
}

int workshop_revised_calendar_timing_receipt_is_customer_safe(const WorkshopRevisedCalendarTimingReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->consumption_id) &&
           workshop_text_present(receipt->payload_id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->summary) &&
           workshop_text_present(receipt->created_iso) &&
           workshop_text_present(receipt->customer_safe_status) &&
           receipt->customer_visible &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           strcmp(receipt->kind, "epoch-revised-calendar-timing") == 0 &&
           (receipt->status == WORKSHOP_STATUS_TIMING_CONFIRMED ||
            receipt->status == WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED ||
            receipt->status == WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED);
}

int workshop_epoch_capacity_waitlist_payload_is_customer_safe(const WorkshopEpochCapacityWaitlistPayload *payload) {
    int waitlisted;
    int promoted;

    if (payload == 0) {
        return 0;
    }

    if (!workshop_text_present(payload->epoch_status)) {
        return 0;
    }

    waitlisted = strcmp(payload->epoch_status, "waitlisted") == 0;
    promoted = strcmp(payload->epoch_status, "promoted") == 0;

    return workshop_text_present(payload->id) &&
           workshop_text_present(payload->source_handoff_id) &&
           workshop_text_present(payload->service_request_id) &&
           workshop_text_present(payload->capacity_snapshot_id) &&
           workshop_text_present(payload->waitlist_entry_id) &&
           workshop_text_present(payload->capacity_receipt_id) &&
           workshop_text_present(payload->customer_safe_status) &&
           workshop_text_present(payload->returned_iso) &&
           payload->customer_visible &&
           !payload->provider_go_live_requested &&
           (waitlisted || promoted) &&
           (!waitlisted || payload->waitlist_position > 0) &&
           (!promoted || (payload->released_capacity > 0 &&
                          workshop_text_present(payload->hold_release_id) &&
                          workshop_text_present(payload->promotion_candidate_id)));
}

int workshop_epoch_capacity_waitlist_consumption_is_customer_safe(const WorkshopEpochCapacityWaitlistConsumption *consumption) {
    if (consumption == 0) {
        return 0;
    }

    return workshop_text_present(consumption->id) &&
           workshop_text_present(consumption->capacity_payload_id) &&
           workshop_text_present(consumption->source_handoff_id) &&
           workshop_text_present(consumption->service_request_id) &&
           workshop_text_present(consumption->operator_next_action) &&
           workshop_text_present(consumption->customer_safe_status) &&
           workshop_text_present(consumption->consumed_iso) &&
           consumption->customer_visible &&
           (consumption->status == WORKSHOP_STATUS_TIMING_WAITLISTED ||
            consumption->status == WORKSHOP_STATUS_TIMING_PROMOTED);
}

int workshop_capacity_waitlist_receipt_is_customer_safe(const WorkshopCapacityWaitlistReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->consumption_id) &&
           workshop_text_present(receipt->capacity_payload_id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->summary) &&
           workshop_text_present(receipt->created_iso) &&
           workshop_text_present(receipt->customer_safe_status) &&
           receipt->customer_visible &&
           (receipt->status == WORKSHOP_STATUS_TIMING_WAITLISTED ||
            receipt->status == WORKSHOP_STATUS_TIMING_PROMOTED) &&
           strcmp(receipt->kind, "epoch-capacity-waitlist") == 0;
}

int workshop_epoch_recurring_series_payload_is_customer_safe(const WorkshopEpochRecurringSeriesPayload *payload) {
    int active;
    int exception_action;

    if (payload == 0) {
        return 0;
    }

    if (!workshop_text_present(payload->series_status)) {
        return 0;
    }

    active = strcmp(payload->series_status, "active") == 0;
    exception_action = strcmp(payload->series_status, "exception-action-required") == 0;

    return workshop_text_present(payload->id) &&
           workshop_text_present(payload->source_handoff_id) &&
           workshop_text_present(payload->service_request_id) &&
           workshop_text_present(payload->series_id) &&
           workshop_text_present(payload->recurrence_label) &&
           workshop_text_present(payload->next_occurrence_label) &&
           workshop_text_present(payload->customer_safe_status) &&
           workshop_text_present(payload->returned_iso) &&
           payload->exception_count >= 0 &&
           payload->customer_visible &&
           !payload->provider_go_live_requested &&
           (active || exception_action);
}

int workshop_epoch_recurring_series_consumption_is_customer_safe(const WorkshopEpochRecurringSeriesConsumption *consumption) {
    if (consumption == 0) {
        return 0;
    }

    return workshop_text_present(consumption->id) &&
           workshop_text_present(consumption->recurring_payload_id) &&
           workshop_text_present(consumption->source_handoff_id) &&
           workshop_text_present(consumption->service_request_id) &&
           workshop_text_present(consumption->operator_next_action) &&
           workshop_text_present(consumption->customer_safe_status) &&
           workshop_text_present(consumption->consumed_iso) &&
           consumption->customer_visible &&
           (consumption->status == WORKSHOP_STATUS_RECURRING_SERIES_ACTIVE ||
            consumption->status == WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED);
}

int workshop_recurring_series_receipt_is_customer_safe(const WorkshopRecurringSeriesReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->consumption_id) &&
           workshop_text_present(receipt->recurring_payload_id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->summary) &&
           workshop_text_present(receipt->created_iso) &&
           workshop_text_present(receipt->customer_safe_status) &&
           receipt->customer_visible &&
           (receipt->status == WORKSHOP_STATUS_RECURRING_SERIES_ACTIVE ||
            receipt->status == WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED) &&
           strcmp(receipt->kind, "epoch-recurring-series") == 0;
}

int workshop_market_research_record_is_evidence_ready(const WorkshopMarketResearchRecord *record) {
    if (record == 0) {
        return 0;
    }

    return workshop_text_present(record->id) &&
           workshop_text_present(record->source_label) &&
           workshop_text_present(record->source_url) &&
           workshop_text_present(record->segment) &&
           workshop_text_present(record->observed_gap) &&
           record->confidence_score > 0;
}

int workshop_competitor_price_anchor_is_ready(const WorkshopCompetitorPriceAnchor *anchor) {
    if (anchor == 0) {
        return 0;
    }

    return workshop_text_present(anchor->id) &&
           workshop_text_present(anchor->competitor) &&
           workshop_text_present(anchor->offer_label) &&
           workshop_text_present(anchor->source_url) &&
           anchor->low_price_jpy >= 0 &&
           anchor->premium_price_jpy >= anchor->low_price_jpy &&
           anchor->evidence_ready;
}

int workshop_offer_experiment_is_testable(const WorkshopOfferExperiment *experiment) {
    if (experiment == 0) {
        return 0;
    }

    return workshop_text_present(experiment->id) &&
           workshop_text_present(experiment->offer_label) &&
           workshop_text_present(experiment->lane) &&
           experiment->expected_monthly_revenue_jpy > 0 &&
           experiment->expected_operator_minutes > 0 &&
           experiment->low_labor_score > 0 &&
           experiment->status != WORKSHOP_STATUS_BLOCKED &&
           experiment->status != WORKSHOP_STATUS_CANCELED;
}

int workshop_labor_estimate_is_low_labor(const WorkshopLaborEstimate *estimate) {
    int total_minutes;

    if (estimate == 0) {
        return 0;
    }

    total_minutes = estimate->prep_minutes + estimate->live_minutes + estimate->review_minutes + estimate->admin_minutes;
    return workshop_text_present(estimate->id) &&
           workshop_text_present(estimate->offer_experiment_id) &&
           total_minutes > 0 &&
           estimate->expected_revenue_jpy > 0 &&
           estimate->ara_minutes_saved >= 0 &&
           estimate->live_minutes <= estimate->review_minutes + estimate->admin_minutes;
}

int workshop_roi_record_is_test_ready(const WorkshopRoiRecord *record) {
    if (record == 0) {
        return 0;
    }

    return workshop_text_present(record->id) &&
           workshop_text_present(record->offer_experiment_id) &&
           record->expected_revenue_jpy > record->expected_cost_jpy &&
           record->expected_operator_minutes > 0 &&
           record->payback_days >= 0 &&
           record->approved_for_test;
}

int workshop_revenue_audit_record_is_actionable(const WorkshopRevenueAuditRecord *record) {
    if (record == 0) {
        return 0;
    }

    return workshop_text_present(record->id) &&
           workshop_text_present(record->linked_offer_id) &&
           workshop_text_present(record->summary) &&
           record->low_labor_viable &&
           record->status != WORKSHOP_STATUS_BLOCKED &&
           record->status != WORKSHOP_STATUS_CANCELED;
}

int workshop_revenue_receipt_is_customer_safe(const WorkshopRevenueReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->linked_record_id) &&
           workshop_text_present(receipt->summary) &&
           receipt->customer_visible &&
           (receipt->status == WORKSHOP_STATUS_COMPLETE ||
            receipt->status == WORKSHOP_STATUS_FIT_REVIEW ||
            receipt->status == WORKSHOP_STATUS_TIMING_CONFIRMED ||
            receipt->status == WORKSHOP_STATUS_QUEUED);
}

int workshop_delivery_log_entry_is_product_log(const WorkshopDeliveryLogEntry *entry) {
    if (entry == 0) {
        return 0;
    }

    return workshop_text_present(entry->id) &&
           workshop_text_present(entry->service_request_id) &&
           workshop_text_present(entry->event_kind) &&
           workshop_text_present(entry->summary) &&
           entry->product_log &&
           !entry->monitor_runner_log;
}

int workshop_revenue_search_query_respects_role(const WorkshopRevenueSearchQuery *query) {
    if (query == 0) {
        return 0;
    }

    if (!workshop_text_present(query->id) || !workshop_text_present(query->query) || !workshop_text_present(query->role)) {
        return 0;
    }

    if (query->customer_safe_only) {
        return !query->include_private_records;
    }

    return strcmp(query->role, "owner") == 0 || strcmp(query->role, "admin") == 0 || strcmp(query->role, "operator") == 0;
}

int workshop_revenue_search_result_is_customer_safe(const WorkshopRevenueSearchResult *result) {
    if (result == 0) {
        return 0;
    }

    return workshop_text_present(result->id) &&
           workshop_text_present(result->query_id) &&
           workshop_text_present(result->record_id) &&
           workshop_text_present(result->record_kind) &&
           workshop_text_present(result->display_label) &&
           result->customer_visible;
}

int workshop_offer_template_is_ready(const WorkshopOfferTemplate *template_record) {
    if (template_record == 0) {
        return 0;
    }

    return workshop_text_present(template_record->id) &&
           workshop_text_present(template_record->offer_label) &&
           workshop_text_present(template_record->lane) &&
           workshop_text_present(template_record->default_price_label);
}

int workshop_service_page_is_customer_safe(const WorkshopServicePage *page) {
    if (page == 0) {
        return 0;
    }

    return workshop_text_present(page->id) &&
           workshop_text_present(page->title) &&
           workshop_text_present(page->audience) &&
           workshop_text_present(page->promise) &&
           workshop_text_present(page->related_package_id) &&
           workshop_text_present(page->related_offer_template_id) &&
           workshop_text_has_prefix(page->related_epoch_schedule_template_id, "EPOCH-SCHEDULE-TEMPLATE-") &&
           workshop_text_present(page->related_crm_pipeline_id) &&
           workshop_text_present(page->delivery_type) &&
           workshop_text_present(page->price_label) &&
           workshop_text_present(page->intake_form_key) &&
           workshop_text_present(page->public_status) &&
           workshop_text_present(page->japan_copy_mode) &&
           workshop_text_present(page->intake_cta) &&
           workshop_text_present(page->customer_safe_status) &&
           page->app_owned_service_page_state &&
           page->customer_visible &&
           page->webportal_export_ready &&
           !page->monitor_workflow_exposed &&
           !page->payment_live_enabled &&
           !page->provider_go_live_requested &&
           !page->live_provider_enabled &&
           strcmp(page->japan_copy_mode, "ai-neutral") == 0;
}

int workshop_material_asset_requires_human_review(const WorkshopMaterialAsset *asset) {
    if (asset == 0) {
        return 0;
    }

    return workshop_text_present(asset->id) &&
           workshop_text_present(asset->title) &&
           workshop_text_present(asset->asset_kind) &&
           workshop_text_present(asset->asset_format) &&
           workshop_text_present(asset->linked_offer_id) &&
           workshop_text_present(asset->linked_service_page_id) &&
           workshop_text_present(asset->low_labor_leverage) &&
           workshop_text_present(asset->japan_copy_mode) &&
           workshop_text_present(asset->customer_safe_summary) &&
           workshop_text_present(asset->operator_next_action) &&
           asset->reuse_count >= 0 &&
           asset->expected_time_saved_minutes > 0 &&
           asset->material_asset_ready &&
           asset->ara_draft_ready &&
           asset->human_review_required &&
           asset->app_owned_material_asset_state &&
           !asset->customer_visible &&
           !asset->webportal_export_ready &&
           asset->epoch_timing_provider_only &&
           !asset->workshop_calendar_ownership &&
           !asset->monitor_workflow_exposed &&
           !asset->payment_live_enabled &&
           !asset->provider_go_live_requested &&
           !asset->live_provider_enabled &&
           !asset->ai_forward_copy &&
           strcmp(asset->japan_copy_mode, "ai-neutral") == 0;
}

int workshop_marketing_channel_experiment_is_testable(const WorkshopMarketingChannelExperiment *experiment) {
    if (experiment == 0) {
        return 0;
    }

    return workshop_text_present(experiment->id) &&
           workshop_text_present(experiment->channel) &&
           workshop_text_present(experiment->linked_service_page_id) &&
           workshop_text_present(experiment->target_segment) &&
           workshop_text_present(experiment->status) &&
           workshop_text_present(experiment->next_action) &&
           experiment->expected_leads_per_month > 0 &&
           experiment->expected_conversion_rate_percent > 0 &&
           experiment->expected_conversion_rate_percent <= 100 &&
           experiment->expected_monthly_revenue_jpy > 0 &&
           experiment->operator_minutes_per_lead >= 0 &&
           experiment->marketing_channel_experiment_ready &&
           experiment->app_owned_marketing_channel_state &&
           !experiment->customer_visible &&
           !experiment->webportal_export_ready &&
           experiment->epoch_timing_provider_only &&
           !experiment->workshop_calendar_ownership &&
           !experiment->monitor_workflow_exposed &&
           !experiment->payment_live_enabled &&
           !experiment->provider_go_live_requested &&
           !experiment->live_provider_enabled &&
           !experiment->ai_forward_copy &&
           strcmp(experiment->japan_copy_mode, "ai-neutral") == 0;
}

int workshop_offer_launch_readiness_is_internal(const WorkshopOfferLaunchReadiness *readiness) {
    if (readiness == 0) {
        return 0;
    }

    return workshop_text_present(readiness->id) &&
           workshop_text_present(readiness->service_page_id) &&
           workshop_text_present(readiness->package_id) &&
           workshop_text_present(readiness->offer_experiment_id) &&
           workshop_text_present(readiness->marketing_channel_experiment_id) &&
           workshop_text_present(readiness->service_lane) &&
           workshop_text_present(readiness->launch_stage) &&
           workshop_text_present(readiness->japan_copy_mode) &&
           workshop_text_present(readiness->operator_next_action) &&
           readiness->time_to_cash_days > 0 &&
           readiness->expected_monthly_revenue_jpy > 0 &&
           readiness->expected_operator_minutes > 0 &&
           readiness->cash_speed_score > 0 &&
           readiness->labor_leverage_score > 0 &&
           readiness->proof_readiness_score > 0 &&
           readiness->market_demand_score > 0 &&
           readiness->launch_priority_score >= 80 &&
           !readiness->customer_visible &&
           readiness->customer_safe_for_receipt &&
           !readiness->webportal_export_ready &&
           readiness->epoch_timing_provider_only &&
           !readiness->workshop_calendar_ownership &&
           !readiness->monitor_workflow_exposed &&
           !readiness->payment_live_enabled &&
           !readiness->ai_forward_copy &&
           strcmp(readiness->japan_copy_mode, "ai-neutral") == 0 &&
           readiness->under_19_guard_required;
}

int workshop_offer_launch_readiness_receipt_is_customer_safe(const WorkshopOfferLaunchReadinessReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_page_id) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->summary) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-readiness") == 0 &&
           receipt->customer_visible &&
           receipt->webportal_export_ready &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required;
}

int workshop_offer_launch_intake_action_is_internal(const WorkshopOfferLaunchIntakeAction *action) {
    if (action == 0) {
        return 0;
    }

    return workshop_text_present(action->id) &&
           workshop_text_present(action->source_receipt_id) &&
           workshop_text_present(action->service_request_id) &&
           workshop_text_present(action->service_lane) &&
           workshop_text_present(action->package_id) &&
           workshop_text_present(action->kind) &&
           workshop_text_present(action->customer_label) &&
           workshop_text_present(action->age_band) &&
           workshop_text_present(action->material_status) &&
           workshop_text_present(action->status) &&
           workshop_text_present(action->offer_label) &&
           workshop_text_present(action->price_label) &&
           workshop_text_present(action->customer_safe_status) &&
           workshop_text_present(action->operator_next_action) &&
           workshop_text_present(action->japan_copy_mode) &&
           strcmp(action->kind, "offer-launch-intake-action") == 0 &&
           !action->customer_visible &&
           action->customer_safe_for_receipt &&
           !action->webportal_export_ready &&
           action->app_owned_intake_state &&
           action->epoch_timing_provider_only &&
           !action->workshop_calendar_ownership &&
           !action->monitor_workflow_exposed &&
           !action->payment_live_enabled &&
           !action->provider_go_live_requested &&
           !action->live_provider_enabled &&
           !action->ai_forward_copy &&
           strcmp(action->japan_copy_mode, "ai-neutral") == 0 &&
           action->under_19_guard_required &&
           action->native_execution_ready;
}

int workshop_offer_launch_intake_receipt_is_customer_safe(const WorkshopOfferLaunchIntakeReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-intake") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_intake_state &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_activation_is_internal(const WorkshopOfferLaunchActivation *activation) {
    if (activation == 0) {
        return 0;
    }

    return workshop_text_present(activation->id) &&
           workshop_text_present(activation->intake_receipt_id) &&
           workshop_text_present(activation->service_request_id) &&
           workshop_text_present(activation->service_lane) &&
           workshop_text_present(activation->package_id) &&
           workshop_text_present(activation->kind) &&
           workshop_text_present(activation->customer_label) &&
           workshop_text_present(activation->status) &&
           workshop_text_present(activation->activation_path) &&
           workshop_text_present(activation->offer_label) &&
           workshop_text_present(activation->price_label) &&
           workshop_text_present(activation->customer_safe_status) &&
           workshop_text_present(activation->operator_next_action) &&
           workshop_text_present(activation->japan_copy_mode) &&
           strcmp(activation->kind, "offer-launch-activation") == 0 &&
           !activation->customer_visible &&
           activation->customer_safe_for_receipt &&
           !activation->webportal_export_ready &&
           activation->app_owned_activation_state &&
           activation->app_owned_intake_state &&
           activation->epoch_timing_provider_only &&
           !activation->workshop_calendar_ownership &&
           !activation->monitor_workflow_exposed &&
           !activation->payment_live_enabled &&
           !activation->provider_go_live_requested &&
           !activation->live_provider_enabled &&
           !activation->ai_forward_copy &&
           strcmp(activation->japan_copy_mode, "ai-neutral") == 0 &&
           activation->under_19_guard_required &&
           activation->native_execution_ready;
}

int workshop_offer_launch_activation_receipt_is_customer_safe(const WorkshopOfferLaunchActivationReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->activation_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-activation") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_activation_state &&
           receipt->app_owned_intake_state &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_service_setup_is_internal(const WorkshopOfferLaunchServiceSetup *setup) {
    if (setup == 0) {
        return 0;
    }

    return workshop_text_present(setup->id) &&
           workshop_text_present(setup->activation_receipt_id) &&
           workshop_text_present(setup->service_request_id) &&
           workshop_text_present(setup->service_lane) &&
           workshop_text_present(setup->package_id) &&
           workshop_text_present(setup->kind) &&
           workshop_text_present(setup->customer_label) &&
           workshop_text_present(setup->status) &&
           workshop_text_present(setup->setup_path) &&
           workshop_text_present(setup->offer_label) &&
           workshop_text_present(setup->price_label) &&
           workshop_text_present(setup->customer_safe_status) &&
           workshop_text_present(setup->operator_next_action) &&
           workshop_text_present(setup->japan_copy_mode) &&
           strcmp(setup->kind, "offer-launch-service-setup") == 0 &&
           !setup->customer_visible &&
           setup->customer_safe_for_receipt &&
           !setup->webportal_export_ready &&
           setup->app_owned_setup_state &&
           setup->app_owned_activation_state &&
           setup->epoch_timing_provider_only &&
           !setup->workshop_calendar_ownership &&
           !setup->monitor_workflow_exposed &&
           !setup->payment_live_enabled &&
           !setup->provider_go_live_requested &&
           !setup->live_provider_enabled &&
           !setup->ai_forward_copy &&
           strcmp(setup->japan_copy_mode, "ai-neutral") == 0 &&
           setup->under_19_guard_required &&
           setup->native_execution_ready;
}

int workshop_offer_launch_service_setup_receipt_is_customer_safe(const WorkshopOfferLaunchServiceSetupReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->setup_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-service-setup") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_setup_state &&
           receipt->app_owned_activation_state &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_delivery_workspace_is_internal(const WorkshopOfferLaunchDeliveryWorkspace *workspace) {
    if (workspace == 0) {
        return 0;
    }

    return workshop_text_present(workspace->id) &&
           workshop_text_present(workspace->setup_receipt_id) &&
           workshop_text_present(workspace->service_request_id) &&
           workshop_text_present(workspace->service_lane) &&
           workshop_text_present(workspace->package_id) &&
           workshop_text_present(workspace->kind) &&
           workshop_text_present(workspace->customer_label) &&
           workshop_text_present(workspace->status) &&
           workshop_text_present(workspace->workspace_path) &&
           workshop_text_present(workspace->setup_path) &&
           workshop_text_present(workspace->offer_label) &&
           workshop_text_present(workspace->price_label) &&
           workshop_text_present(workspace->customer_safe_status) &&
           workshop_text_present(workspace->operator_next_action) &&
           workshop_text_present(workspace->japan_copy_mode) &&
           strcmp(workspace->kind, "offer-launch-delivery-workspace") == 0 &&
           !workspace->customer_visible &&
           workspace->customer_safe_for_receipt &&
           !workspace->webportal_export_ready &&
           workspace->app_owned_workspace_state &&
           workspace->app_owned_setup_state &&
           workspace->epoch_timing_provider_only &&
           !workspace->workshop_calendar_ownership &&
           !workspace->monitor_workflow_exposed &&
           !workspace->payment_live_enabled &&
           !workspace->provider_go_live_requested &&
           !workspace->live_provider_enabled &&
           !workspace->ai_forward_copy &&
           strcmp(workspace->japan_copy_mode, "ai-neutral") == 0 &&
           workspace->under_19_guard_required &&
           workspace->native_execution_ready;
}

int workshop_offer_launch_delivery_workspace_receipt_is_customer_safe(const WorkshopOfferLaunchDeliveryWorkspaceReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->workspace_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-delivery-workspace") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_workspace_state &&
           receipt->app_owned_setup_state &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_delivery_kickoff_is_internal(const WorkshopOfferLaunchDeliveryKickoff *kickoff) {
    if (kickoff == 0) {
        return 0;
    }

    return workshop_text_present(kickoff->id) &&
           workshop_text_present(kickoff->workspace_receipt_id) &&
           workshop_text_present(kickoff->service_request_id) &&
           workshop_text_present(kickoff->service_lane) &&
           workshop_text_present(kickoff->package_id) &&
           workshop_text_present(kickoff->kind) &&
           workshop_text_present(kickoff->customer_label) &&
           workshop_text_present(kickoff->status) &&
           workshop_text_present(kickoff->kickoff_path) &&
           workshop_text_present(kickoff->workspace_path) &&
           workshop_text_present(kickoff->offer_label) &&
           workshop_text_present(kickoff->price_label) &&
           workshop_text_present(kickoff->customer_safe_status) &&
           workshop_text_present(kickoff->operator_next_action) &&
           workshop_text_present(kickoff->japan_copy_mode) &&
           strcmp(kickoff->kind, "offer-launch-delivery-kickoff") == 0 &&
           !kickoff->customer_visible &&
           kickoff->customer_safe_for_receipt &&
           !kickoff->webportal_export_ready &&
           kickoff->app_owned_kickoff_state &&
           kickoff->app_owned_workspace_state &&
           kickoff->epoch_timing_provider_only &&
           !kickoff->workshop_calendar_ownership &&
           !kickoff->monitor_workflow_exposed &&
           !kickoff->payment_live_enabled &&
           !kickoff->provider_go_live_requested &&
           !kickoff->live_provider_enabled &&
           !kickoff->ai_forward_copy &&
           strcmp(kickoff->japan_copy_mode, "ai-neutral") == 0 &&
           kickoff->under_19_guard_required &&
           kickoff->native_execution_ready;
}

int workshop_offer_launch_delivery_kickoff_receipt_is_customer_safe(const WorkshopOfferLaunchDeliveryKickoffReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->kickoff_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-delivery-kickoff") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_kickoff_state &&
           receipt->app_owned_workspace_state &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_delivery_milestone_is_internal(const WorkshopOfferLaunchDeliveryMilestone *milestone) {
    if (milestone == 0) {
        return 0;
    }

    return workshop_text_present(milestone->id) &&
           workshop_text_present(milestone->kickoff_receipt_id) &&
           workshop_text_present(milestone->service_request_id) &&
           workshop_text_present(milestone->service_lane) &&
           workshop_text_present(milestone->package_id) &&
           workshop_text_present(milestone->kind) &&
           workshop_text_present(milestone->customer_label) &&
           workshop_text_present(milestone->status) &&
           workshop_text_present(milestone->milestone_path) &&
           workshop_text_present(milestone->kickoff_path) &&
           workshop_text_present(milestone->offer_label) &&
           workshop_text_present(milestone->price_label) &&
           workshop_text_present(milestone->customer_safe_status) &&
           workshop_text_present(milestone->operator_next_action) &&
           workshop_text_present(milestone->japan_copy_mode) &&
           strcmp(milestone->kind, "offer-launch-delivery-milestone") == 0 &&
           !milestone->customer_visible &&
           milestone->customer_safe_for_receipt &&
           !milestone->webportal_export_ready &&
           milestone->app_owned_milestone_state &&
           milestone->app_owned_kickoff_state &&
           milestone->epoch_timing_provider_only &&
           !milestone->workshop_calendar_ownership &&
           !milestone->monitor_workflow_exposed &&
           !milestone->payment_live_enabled &&
           !milestone->provider_go_live_requested &&
           !milestone->live_provider_enabled &&
           !milestone->ai_forward_copy &&
           strcmp(milestone->japan_copy_mode, "ai-neutral") == 0 &&
           milestone->under_19_guard_required &&
           milestone->native_execution_ready;
}

int workshop_offer_launch_delivery_milestone_receipt_is_customer_safe(const WorkshopOfferLaunchDeliveryMilestoneReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->milestone_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-delivery-milestone") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_milestone_state &&
           receipt->app_owned_kickoff_state &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_delivery_outcome_is_internal(const WorkshopOfferLaunchDeliveryOutcome *outcome) {
    if (outcome == 0) {
        return 0;
    }

    return workshop_text_present(outcome->id) &&
           workshop_text_present(outcome->milestone_receipt_id) &&
           workshop_text_present(outcome->service_request_id) &&
           workshop_text_present(outcome->service_lane) &&
           workshop_text_present(outcome->package_id) &&
           workshop_text_present(outcome->kind) &&
           workshop_text_present(outcome->customer_label) &&
           workshop_text_present(outcome->status) &&
           workshop_text_present(outcome->outcome_path) &&
           workshop_text_present(outcome->milestone_path) &&
           workshop_text_present(outcome->offer_label) &&
           workshop_text_present(outcome->price_label) &&
           workshop_text_present(outcome->customer_safe_status) &&
           workshop_text_present(outcome->operator_next_action) &&
           workshop_text_present(outcome->japan_copy_mode) &&
           strcmp(outcome->kind, "offer-launch-delivery-outcome") == 0 &&
           !outcome->customer_visible &&
           outcome->customer_safe_for_receipt &&
           !outcome->webportal_export_ready &&
           outcome->app_owned_outcome_state &&
           outcome->app_owned_milestone_state &&
           outcome->epoch_timing_provider_only &&
           !outcome->workshop_calendar_ownership &&
           !outcome->monitor_workflow_exposed &&
           !outcome->payment_live_enabled &&
           !outcome->provider_go_live_requested &&
           !outcome->live_provider_enabled &&
           !outcome->ai_forward_copy &&
           strcmp(outcome->japan_copy_mode, "ai-neutral") == 0 &&
           outcome->under_19_guard_required &&
           outcome->native_execution_ready;
}

int workshop_offer_launch_delivery_outcome_receipt_is_customer_safe(const WorkshopOfferLaunchDeliveryOutcomeReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->outcome_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-delivery-outcome") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_outcome_state &&
           receipt->app_owned_milestone_state &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_delivery_follow_up_is_internal(const WorkshopOfferLaunchDeliveryFollowUp *follow_up) {
    if (follow_up == 0) {
        return 0;
    }

    return workshop_text_present(follow_up->id) &&
           workshop_text_present(follow_up->outcome_receipt_id) &&
           workshop_text_present(follow_up->service_request_id) &&
           workshop_text_present(follow_up->service_lane) &&
           workshop_text_present(follow_up->package_id) &&
           workshop_text_present(follow_up->kind) &&
           workshop_text_present(follow_up->customer_label) &&
           workshop_text_present(follow_up->status) &&
           workshop_text_present(follow_up->follow_up_path) &&
           workshop_text_present(follow_up->outcome_path) &&
           workshop_text_present(follow_up->offer_label) &&
           workshop_text_present(follow_up->price_label) &&
           workshop_text_present(follow_up->customer_safe_status) &&
           workshop_text_present(follow_up->operator_next_action) &&
           workshop_text_present(follow_up->japan_copy_mode) &&
           strcmp(follow_up->kind, "offer-launch-delivery-follow-up") == 0 &&
           !follow_up->customer_visible &&
           follow_up->customer_safe_for_receipt &&
           !follow_up->webportal_export_ready &&
           follow_up->app_owned_follow_up_state &&
           follow_up->app_owned_outcome_state &&
           follow_up->epoch_timing_provider_only &&
           !follow_up->workshop_calendar_ownership &&
           !follow_up->monitor_workflow_exposed &&
           !follow_up->payment_live_enabled &&
           !follow_up->provider_go_live_requested &&
           !follow_up->live_provider_enabled &&
           !follow_up->ai_forward_copy &&
           strcmp(follow_up->japan_copy_mode, "ai-neutral") == 0 &&
           follow_up->under_19_guard_required &&
           follow_up->native_execution_ready;
}

int workshop_offer_launch_delivery_follow_up_receipt_is_customer_safe(const WorkshopOfferLaunchDeliveryFollowUpReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->follow_up_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-delivery-follow-up") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_follow_up_state &&
           receipt->app_owned_outcome_state &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_delivery_growth_plan_is_internal(const WorkshopOfferLaunchDeliveryGrowthPlan *growth_plan) {
    if (growth_plan == 0) {
        return 0;
    }

    return workshop_text_present(growth_plan->id) &&
           workshop_text_present(growth_plan->follow_up_receipt_id) &&
           workshop_text_present(growth_plan->service_request_id) &&
           workshop_text_present(growth_plan->service_lane) &&
           workshop_text_present(growth_plan->package_id) &&
           workshop_text_present(growth_plan->kind) &&
           workshop_text_present(growth_plan->customer_label) &&
           workshop_text_present(growth_plan->status) &&
           workshop_text_present(growth_plan->growth_plan_path) &&
           workshop_text_present(growth_plan->follow_up_path) &&
           workshop_text_present(growth_plan->offer_label) &&
           workshop_text_present(growth_plan->price_label) &&
           workshop_text_present(growth_plan->customer_safe_status) &&
           workshop_text_present(growth_plan->operator_next_action) &&
           workshop_text_present(growth_plan->japan_copy_mode) &&
           strcmp(growth_plan->kind, "offer-launch-delivery-growth-plan") == 0 &&
           !growth_plan->customer_visible &&
           growth_plan->customer_safe_for_receipt &&
           !growth_plan->webportal_export_ready &&
           growth_plan->app_owned_growth_plan_state &&
           growth_plan->app_owned_follow_up_state &&
           growth_plan->follow_up_ready &&
           (growth_plan->renewal_ready || growth_plan->referral_ready) &&
           growth_plan->repeat_service_ready &&
           growth_plan->growth_plan_ready &&
           growth_plan->outcome_ready &&
           growth_plan->epoch_timing_provider_only &&
           !growth_plan->workshop_calendar_ownership &&
           !growth_plan->monitor_workflow_exposed &&
           !growth_plan->payment_live_enabled &&
           !growth_plan->provider_go_live_requested &&
           !growth_plan->live_provider_enabled &&
           !growth_plan->ai_forward_copy &&
           strcmp(growth_plan->japan_copy_mode, "ai-neutral") == 0 &&
           growth_plan->under_19_guard_required &&
           growth_plan->native_execution_ready;
}

int workshop_offer_launch_delivery_growth_plan_receipt_is_customer_safe(const WorkshopOfferLaunchDeliveryGrowthPlanReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->growth_plan_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-delivery-growth-plan") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_growth_plan_state &&
           receipt->app_owned_follow_up_state &&
           receipt->follow_up_ready &&
           (receipt->renewal_ready || receipt->referral_ready) &&
           receipt->repeat_service_ready &&
           receipt->growth_plan_ready &&
           receipt->outcome_ready &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_delivery_growth_plan_acceptance_is_internal(const WorkshopOfferLaunchDeliveryGrowthPlanAcceptance *acceptance) {
    if (acceptance == 0) {
        return 0;
    }

    return workshop_text_present(acceptance->id) &&
           workshop_text_present(acceptance->growth_plan_receipt_id) &&
           workshop_text_present(acceptance->service_request_id) &&
           workshop_text_present(acceptance->service_lane) &&
           workshop_text_present(acceptance->package_id) &&
           workshop_text_present(acceptance->kind) &&
           workshop_text_present(acceptance->customer_label) &&
           workshop_text_present(acceptance->status) &&
           workshop_text_present(acceptance->acceptance_path) &&
           workshop_text_present(acceptance->growth_plan_path) &&
           workshop_text_present(acceptance->offer_label) &&
           workshop_text_present(acceptance->price_label) &&
           workshop_text_present(acceptance->customer_safe_status) &&
           workshop_text_present(acceptance->operator_next_action) &&
           workshop_text_present(acceptance->japan_copy_mode) &&
           strcmp(acceptance->kind, "offer-launch-delivery-growth-plan-acceptance") == 0 &&
           !acceptance->customer_visible &&
           acceptance->customer_safe_for_receipt &&
           !acceptance->webportal_export_ready &&
           acceptance->app_owned_acceptance_state &&
           acceptance->app_owned_growth_plan_state &&
           acceptance->growth_plan_ready &&
           (acceptance->repeat_service_accepted || acceptance->renewal_accepted || acceptance->referral_accepted) &&
           acceptance->acceptance_ready &&
           !acceptance->compatibility_gate_required &&
           acceptance->epoch_timing_provider_only &&
           !acceptance->workshop_calendar_ownership &&
           !acceptance->monitor_workflow_exposed &&
           !acceptance->payment_live_enabled &&
           !acceptance->provider_go_live_requested &&
           !acceptance->live_provider_enabled &&
           !acceptance->ai_forward_copy &&
           strcmp(acceptance->japan_copy_mode, "ai-neutral") == 0 &&
           acceptance->under_19_guard_required &&
           acceptance->native_execution_ready;
}

int workshop_offer_launch_delivery_growth_plan_acceptance_receipt_is_customer_safe(const WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->acceptance_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-delivery-growth-plan-acceptance") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_acceptance_state &&
           receipt->app_owned_growth_plan_state &&
           receipt->growth_plan_ready &&
           (receipt->repeat_service_accepted || receipt->renewal_accepted || receipt->referral_accepted) &&
           receipt->acceptance_ready &&
           !receipt->compatibility_gate_required &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_request_is_internal(const WorkshopOfferLaunchDeliveryExpansionRequest *request) {
    if (request == 0) {
        return 0;
    }

    return workshop_text_present(request->id) &&
           workshop_text_present(request->acceptance_receipt_id) &&
           workshop_text_present(request->service_request_id) &&
           workshop_text_present(request->service_lane) &&
           workshop_text_present(request->package_id) &&
           workshop_text_present(request->kind) &&
           workshop_text_present(request->customer_label) &&
           workshop_text_present(request->status) &&
           workshop_text_present(request->expansion_path) &&
           workshop_text_present(request->acceptance_path) &&
           workshop_text_present(request->offer_label) &&
           workshop_text_present(request->price_label) &&
           workshop_text_present(request->customer_safe_status) &&
           workshop_text_present(request->operator_next_action) &&
           workshop_text_present(request->japan_copy_mode) &&
           strcmp(request->kind, "offer-launch-delivery-expansion-request") == 0 &&
           !request->customer_visible &&
           request->customer_safe_for_receipt &&
           !request->webportal_export_ready &&
           request->app_owned_expansion_request_state &&
           request->app_owned_acceptance_state &&
           request->acceptance_ready &&
           (request->repeat_service_requested || request->renewal_requested || request->referral_requested) &&
           request->expansion_request_ready &&
           !request->compatibility_gate_required &&
           request->epoch_timing_provider_only &&
           !request->workshop_calendar_ownership &&
           !request->monitor_workflow_exposed &&
           !request->payment_live_enabled &&
           !request->provider_go_live_requested &&
           !request->live_provider_enabled &&
           !request->ai_forward_copy &&
           strcmp(request->japan_copy_mode, "ai-neutral") == 0 &&
           request->under_19_guard_required &&
           request->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_request_receipt_is_customer_safe(const WorkshopOfferLaunchDeliveryExpansionRequestReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->expansion_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-delivery-expansion-request") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_expansion_request_state &&
           receipt->app_owned_acceptance_state &&
           receipt->acceptance_ready &&
           (receipt->repeat_service_requested || receipt->renewal_requested || receipt->referral_requested) &&
           receipt->expansion_request_ready &&
           !receipt->compatibility_gate_required &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_workspace_is_internal(const WorkshopOfferLaunchDeliveryExpansionWorkspace *workspace) {
    if (workspace == 0) {
        return 0;
    }

    return workshop_text_present(workspace->id) &&
           workshop_text_present(workspace->expansion_request_receipt_id) &&
           workshop_text_present(workspace->service_request_id) &&
           workshop_text_present(workspace->service_lane) &&
           workshop_text_present(workspace->package_id) &&
           workshop_text_present(workspace->kind) &&
           workshop_text_present(workspace->customer_label) &&
           workshop_text_present(workspace->status) &&
           workshop_text_present(workspace->expansion_workspace_path) &&
           workshop_text_present(workspace->expansion_path) &&
           workshop_text_present(workspace->offer_label) &&
           workshop_text_present(workspace->price_label) &&
           workshop_text_present(workspace->customer_safe_status) &&
           workshop_text_present(workspace->operator_next_action) &&
           workshop_text_present(workspace->japan_copy_mode) &&
           strcmp(workspace->kind, "offer-launch-delivery-expansion-workspace") == 0 &&
           !workspace->customer_visible &&
           workspace->customer_safe_for_receipt &&
           !workspace->webportal_export_ready &&
           workspace->app_owned_expansion_workspace_state &&
           workspace->app_owned_expansion_request_state &&
           workspace->expansion_request_ready &&
           (workspace->repeat_service_requested || workspace->renewal_requested || workspace->referral_requested) &&
           workspace->expansion_workspace_ready &&
           !workspace->compatibility_gate_required &&
           workspace->epoch_timing_provider_only &&
           !workspace->workshop_calendar_ownership &&
           !workspace->monitor_workflow_exposed &&
           !workspace->payment_live_enabled &&
           !workspace->provider_go_live_requested &&
           !workspace->live_provider_enabled &&
           !workspace->ai_forward_copy &&
           strcmp(workspace->japan_copy_mode, "ai-neutral") == 0 &&
           workspace->under_19_guard_required &&
           workspace->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_workspace_receipt_is_customer_safe(const WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->expansion_workspace_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-delivery-expansion-workspace") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_expansion_workspace_state &&
           receipt->app_owned_expansion_request_state &&
           receipt->expansion_request_ready &&
           (receipt->repeat_service_requested || receipt->renewal_requested || receipt->referral_requested) &&
           receipt->expansion_workspace_ready &&
           !receipt->compatibility_gate_required &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_kickoff_is_internal(const WorkshopOfferLaunchDeliveryExpansionKickoff *kickoff) {
    if (kickoff == 0) {
        return 0;
    }

    return workshop_text_present(kickoff->id) &&
           workshop_text_present(kickoff->expansion_workspace_receipt_id) &&
           workshop_text_present(kickoff->service_request_id) &&
           workshop_text_present(kickoff->service_lane) &&
           workshop_text_present(kickoff->package_id) &&
           workshop_text_present(kickoff->kind) &&
           workshop_text_present(kickoff->customer_label) &&
           workshop_text_present(kickoff->status) &&
           workshop_text_present(kickoff->expansion_kickoff_path) &&
           workshop_text_present(kickoff->expansion_workspace_path) &&
           workshop_text_present(kickoff->offer_label) &&
           workshop_text_present(kickoff->price_label) &&
           workshop_text_present(kickoff->customer_safe_status) &&
           workshop_text_present(kickoff->operator_next_action) &&
           workshop_text_present(kickoff->japan_copy_mode) &&
           strcmp(kickoff->kind, "offer-launch-delivery-expansion-kickoff") == 0 &&
           !kickoff->customer_visible &&
           kickoff->customer_safe_for_receipt &&
           !kickoff->webportal_export_ready &&
           kickoff->app_owned_expansion_kickoff_state &&
           kickoff->app_owned_expansion_workspace_state &&
           kickoff->expansion_kickoff_ready &&
           kickoff->expansion_workspace_ready &&
           (kickoff->repeat_service_requested || kickoff->renewal_requested || kickoff->referral_requested) &&
           !kickoff->compatibility_gate_required &&
           kickoff->epoch_timing_provider_only &&
           !kickoff->workshop_calendar_ownership &&
           !kickoff->monitor_workflow_exposed &&
           !kickoff->payment_live_enabled &&
           !kickoff->provider_go_live_requested &&
           !kickoff->live_provider_enabled &&
           !kickoff->ai_forward_copy &&
           strcmp(kickoff->japan_copy_mode, "ai-neutral") == 0 &&
           kickoff->under_19_guard_required &&
           kickoff->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_kickoff_receipt_is_customer_safe(const WorkshopOfferLaunchDeliveryExpansionKickoffReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->expansion_kickoff_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-delivery-expansion-kickoff") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_expansion_kickoff_state &&
           receipt->app_owned_expansion_workspace_state &&
           receipt->expansion_kickoff_ready &&
           receipt->expansion_workspace_ready &&
           (receipt->repeat_service_requested || receipt->renewal_requested || receipt->referral_requested) &&
           !receipt->compatibility_gate_required &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_milestone_is_internal(const WorkshopOfferLaunchDeliveryExpansionMilestone *milestone) {
    if (milestone == 0) {
        return 0;
    }

    return workshop_text_present(milestone->id) &&
           workshop_text_present(milestone->expansion_kickoff_receipt_id) &&
           workshop_text_present(milestone->service_request_id) &&
           workshop_text_present(milestone->service_lane) &&
           workshop_text_present(milestone->package_id) &&
           workshop_text_present(milestone->kind) &&
           workshop_text_present(milestone->customer_label) &&
           workshop_text_present(milestone->status) &&
           workshop_text_present(milestone->expansion_milestone_path) &&
           workshop_text_present(milestone->expansion_kickoff_path) &&
           workshop_text_present(milestone->offer_label) &&
           workshop_text_present(milestone->price_label) &&
           workshop_text_present(milestone->customer_safe_status) &&
           workshop_text_present(milestone->operator_next_action) &&
           workshop_text_present(milestone->japan_copy_mode) &&
           strcmp(milestone->kind, "offer-launch-delivery-expansion-milestone") == 0 &&
           !milestone->customer_visible &&
           milestone->customer_safe_for_receipt &&
           !milestone->webportal_export_ready &&
           milestone->app_owned_expansion_milestone_state &&
           milestone->app_owned_expansion_kickoff_state &&
           milestone->expansion_milestone_ready &&
           milestone->expansion_kickoff_ready &&
           (milestone->repeat_service_requested || milestone->renewal_requested || milestone->referral_requested) &&
           !milestone->compatibility_gate_required &&
           milestone->epoch_timing_provider_only &&
           !milestone->workshop_calendar_ownership &&
           !milestone->monitor_workflow_exposed &&
           !milestone->payment_live_enabled &&
           !milestone->provider_go_live_requested &&
           !milestone->live_provider_enabled &&
           !milestone->ai_forward_copy &&
           strcmp(milestone->japan_copy_mode, "ai-neutral") == 0 &&
           milestone->under_19_guard_required &&
           milestone->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_milestone_receipt_is_customer_safe(const WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->expansion_milestone_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-delivery-expansion-milestone") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_expansion_milestone_state &&
           receipt->app_owned_expansion_kickoff_state &&
           receipt->expansion_milestone_ready &&
           receipt->expansion_kickoff_ready &&
           (receipt->repeat_service_requested || receipt->renewal_requested || receipt->referral_requested) &&
           !receipt->compatibility_gate_required &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_outcome_is_internal(const WorkshopOfferLaunchDeliveryExpansionOutcome *outcome) {
    if (outcome == 0) {
        return 0;
    }

    return workshop_text_present(outcome->id) &&
           workshop_text_present(outcome->expansion_milestone_receipt_id) &&
           workshop_text_present(outcome->service_request_id) &&
           workshop_text_present(outcome->service_lane) &&
           workshop_text_present(outcome->package_id) &&
           workshop_text_present(outcome->kind) &&
           workshop_text_present(outcome->customer_label) &&
           workshop_text_present(outcome->status) &&
           workshop_text_present(outcome->expansion_outcome_path) &&
           workshop_text_present(outcome->expansion_milestone_path) &&
           workshop_text_present(outcome->offer_label) &&
           workshop_text_present(outcome->price_label) &&
           workshop_text_present(outcome->customer_safe_status) &&
           workshop_text_present(outcome->operator_next_action) &&
           workshop_text_present(outcome->japan_copy_mode) &&
           strcmp(outcome->kind, "offer-launch-delivery-expansion-outcome") == 0 &&
           !outcome->customer_visible &&
           outcome->customer_safe_for_receipt &&
           !outcome->webportal_export_ready &&
           outcome->app_owned_expansion_outcome_state &&
           outcome->app_owned_expansion_milestone_state &&
           outcome->expansion_outcome_ready &&
           outcome->expansion_milestone_ready &&
           (outcome->repeat_service_requested || outcome->renewal_requested || outcome->referral_requested) &&
           !outcome->compatibility_gate_required &&
           outcome->epoch_timing_provider_only &&
           !outcome->workshop_calendar_ownership &&
           !outcome->monitor_workflow_exposed &&
           !outcome->payment_live_enabled &&
           !outcome->provider_go_live_requested &&
           !outcome->live_provider_enabled &&
           !outcome->ai_forward_copy &&
           strcmp(outcome->japan_copy_mode, "ai-neutral") == 0 &&
           outcome->under_19_guard_required &&
           outcome->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_outcome_receipt_is_customer_safe(const WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->expansion_outcome_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-delivery-expansion-outcome") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_expansion_outcome_state &&
           receipt->app_owned_expansion_milestone_state &&
           receipt->expansion_outcome_ready &&
           receipt->expansion_milestone_ready &&
           (receipt->repeat_service_requested || receipt->renewal_requested || receipt->referral_requested) &&
           !receipt->compatibility_gate_required &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_follow_up_is_internal(const WorkshopOfferLaunchDeliveryExpansionFollowUp *follow_up) {
    if (follow_up == 0) {
        return 0;
    }

    return workshop_text_present(follow_up->id) &&
           workshop_text_present(follow_up->expansion_outcome_receipt_id) &&
           workshop_text_present(follow_up->service_request_id) &&
           workshop_text_present(follow_up->service_lane) &&
           workshop_text_present(follow_up->package_id) &&
           workshop_text_present(follow_up->kind) &&
           workshop_text_present(follow_up->customer_label) &&
           workshop_text_present(follow_up->status) &&
           workshop_text_present(follow_up->expansion_follow_up_path) &&
           workshop_text_present(follow_up->expansion_outcome_path) &&
           workshop_text_present(follow_up->offer_label) &&
           workshop_text_present(follow_up->price_label) &&
           workshop_text_present(follow_up->customer_safe_status) &&
           workshop_text_present(follow_up->operator_next_action) &&
           workshop_text_present(follow_up->japan_copy_mode) &&
           strcmp(follow_up->kind, "offer-launch-delivery-expansion-follow-up") == 0 &&
           !follow_up->customer_visible &&
           follow_up->customer_safe_for_receipt &&
           !follow_up->webportal_export_ready &&
           follow_up->app_owned_expansion_follow_up_state &&
           follow_up->app_owned_expansion_outcome_state &&
           follow_up->expansion_follow_up_ready &&
           follow_up->expansion_outcome_ready &&
           (follow_up->repeat_service_ready || follow_up->renewal_ready || follow_up->referral_ready) &&
           !follow_up->compatibility_gate_required &&
           follow_up->epoch_timing_provider_only &&
           !follow_up->workshop_calendar_ownership &&
           !follow_up->monitor_workflow_exposed &&
           !follow_up->payment_live_enabled &&
           !follow_up->provider_go_live_requested &&
           !follow_up->live_provider_enabled &&
           !follow_up->ai_forward_copy &&
           strcmp(follow_up->japan_copy_mode, "ai-neutral") == 0 &&
           follow_up->under_19_guard_required &&
           follow_up->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_follow_up_receipt_is_customer_safe(const WorkshopOfferLaunchDeliveryExpansionFollowUpReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->expansion_follow_up_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-delivery-expansion-follow-up") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_expansion_follow_up_state &&
           receipt->app_owned_expansion_outcome_state &&
           receipt->expansion_follow_up_ready &&
           receipt->expansion_outcome_ready &&
           (receipt->repeat_service_ready || receipt->renewal_ready || receipt->referral_ready) &&
           !receipt->compatibility_gate_required &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_growth_plan_is_internal(const WorkshopOfferLaunchDeliveryExpansionGrowthPlan *growth_plan) {
    if (growth_plan == 0) {
        return 0;
    }

    return workshop_text_present(growth_plan->id) &&
           workshop_text_present(growth_plan->expansion_follow_up_receipt_id) &&
           workshop_text_present(growth_plan->service_request_id) &&
           workshop_text_present(growth_plan->service_lane) &&
           workshop_text_present(growth_plan->package_id) &&
           workshop_text_present(growth_plan->kind) &&
           workshop_text_present(growth_plan->customer_label) &&
           workshop_text_present(growth_plan->status) &&
           workshop_text_present(growth_plan->expansion_growth_plan_path) &&
           workshop_text_present(growth_plan->expansion_follow_up_path) &&
           workshop_text_present(growth_plan->offer_label) &&
           workshop_text_present(growth_plan->price_label) &&
           workshop_text_present(growth_plan->customer_safe_status) &&
           workshop_text_present(growth_plan->operator_next_action) &&
           workshop_text_present(growth_plan->japan_copy_mode) &&
           strcmp(growth_plan->kind, "offer-launch-delivery-expansion-growth-plan") == 0 &&
           !growth_plan->customer_visible &&
           growth_plan->customer_safe_for_receipt &&
           !growth_plan->webportal_export_ready &&
           growth_plan->app_owned_expansion_growth_plan_state &&
           growth_plan->app_owned_expansion_follow_up_state &&
           growth_plan->expansion_follow_up_ready &&
           (growth_plan->repeat_service_ready || growth_plan->renewal_ready || growth_plan->referral_ready) &&
           growth_plan->expansion_growth_plan_ready &&
           growth_plan->expansion_outcome_ready &&
           !growth_plan->compatibility_gate_required &&
           growth_plan->epoch_timing_provider_only &&
           !growth_plan->workshop_calendar_ownership &&
           !growth_plan->monitor_workflow_exposed &&
           !growth_plan->payment_live_enabled &&
           !growth_plan->provider_go_live_requested &&
           !growth_plan->live_provider_enabled &&
           !growth_plan->ai_forward_copy &&
           strcmp(growth_plan->japan_copy_mode, "ai-neutral") == 0 &&
           growth_plan->under_19_guard_required &&
           growth_plan->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_growth_plan_receipt_is_customer_safe(const WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->expansion_growth_plan_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-delivery-expansion-growth-plan") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_expansion_growth_plan_state &&
           receipt->app_owned_expansion_follow_up_state &&
           receipt->expansion_follow_up_ready &&
           (receipt->repeat_service_ready || receipt->renewal_ready || receipt->referral_ready) &&
           receipt->expansion_growth_plan_ready &&
           receipt->expansion_outcome_ready &&
           !receipt->compatibility_gate_required &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_growth_plan_acceptance_is_internal(const WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptance *acceptance) {
    if (acceptance == 0) {
        return 0;
    }

    return workshop_text_present(acceptance->id) &&
           workshop_text_present(acceptance->expansion_growth_plan_receipt_id) &&
           workshop_text_present(acceptance->service_request_id) &&
           workshop_text_present(acceptance->service_lane) &&
           workshop_text_present(acceptance->package_id) &&
           workshop_text_present(acceptance->kind) &&
           workshop_text_present(acceptance->customer_label) &&
           workshop_text_present(acceptance->status) &&
           workshop_text_present(acceptance->expansion_growth_plan_acceptance_path) &&
           workshop_text_present(acceptance->expansion_growth_plan_path) &&
           workshop_text_present(acceptance->offer_label) &&
           workshop_text_present(acceptance->price_label) &&
           workshop_text_present(acceptance->customer_safe_status) &&
           workshop_text_present(acceptance->operator_next_action) &&
           workshop_text_present(acceptance->japan_copy_mode) &&
           strcmp(acceptance->kind, "offer-launch-delivery-expansion-growth-plan-acceptance") == 0 &&
           !acceptance->customer_visible &&
           acceptance->customer_safe_for_receipt &&
           !acceptance->webportal_export_ready &&
           acceptance->app_owned_expansion_growth_plan_acceptance_state &&
           acceptance->app_owned_expansion_growth_plan_state &&
           acceptance->app_owned_expansion_follow_up_state &&
           acceptance->expansion_growth_plan_ready &&
           acceptance->expansion_follow_up_ready &&
           acceptance->expansion_outcome_ready &&
           (acceptance->repeat_service_accepted || acceptance->renewal_accepted || acceptance->referral_accepted) &&
           acceptance->expansion_growth_plan_acceptance_ready &&
           !acceptance->compatibility_gate_required &&
           acceptance->epoch_timing_provider_only &&
           !acceptance->workshop_calendar_ownership &&
           !acceptance->monitor_workflow_exposed &&
           !acceptance->payment_live_enabled &&
           !acceptance->provider_go_live_requested &&
           !acceptance->live_provider_enabled &&
           !acceptance->ai_forward_copy &&
           strcmp(acceptance->japan_copy_mode, "ai-neutral") == 0 &&
           acceptance->under_19_guard_required &&
           acceptance->native_execution_ready;
}

int workshop_offer_launch_delivery_expansion_growth_plan_acceptance_receipt_is_customer_safe(const WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt *receipt) {
    if (receipt == 0) {
        return 0;
    }

    return workshop_text_present(receipt->id) &&
           workshop_text_present(receipt->service_request_id) &&
           workshop_text_present(receipt->service_lane) &&
           workshop_text_present(receipt->package_id) &&
           workshop_text_present(receipt->kind) &&
           workshop_text_present(receipt->customer_label) &&
           workshop_text_present(receipt->status) &&
           workshop_text_present(receipt->offer_label) &&
           workshop_text_present(receipt->price_label) &&
           workshop_text_present(receipt->expansion_growth_plan_acceptance_path) &&
           workshop_text_present(receipt->customer_safe_message) &&
           workshop_text_present(receipt->next_action) &&
           workshop_text_present(receipt->japan_copy_mode) &&
           strcmp(receipt->kind, "offer-launch-delivery-expansion-growth-plan-acceptance") == 0 &&
           receipt->customer_visible &&
           receipt->customer_safe &&
           receipt->customer_visible_receipt_ready &&
           receipt->webportal_export_ready &&
           receipt->app_owned_expansion_growth_plan_acceptance_state &&
           receipt->app_owned_expansion_growth_plan_state &&
           receipt->app_owned_expansion_follow_up_state &&
           receipt->expansion_growth_plan_ready &&
           receipt->expansion_follow_up_ready &&
           receipt->expansion_outcome_ready &&
           (receipt->repeat_service_accepted || receipt->renewal_accepted || receipt->referral_accepted) &&
           receipt->expansion_growth_plan_acceptance_ready &&
           !receipt->compatibility_gate_required &&
           receipt->epoch_timing_provider_only &&
           !receipt->workshop_calendar_ownership &&
           !receipt->monitor_workflow_exposed &&
           !receipt->payment_live_enabled &&
           !receipt->provider_go_live_requested &&
           !receipt->live_provider_enabled &&
           !receipt->ai_forward_copy &&
           strcmp(receipt->japan_copy_mode, "ai-neutral") == 0 &&
           receipt->under_19_guard_required &&
           receipt->native_execution_ready;
}

int workshop_ara_work_packet_requires_human_review(const WorkshopAraWorkPacket *packet) {
    if (packet == 0) {
        return 0;
    }

    return workshop_text_present(packet->id) &&
           workshop_text_present(packet->packet_kind) &&
           workshop_text_present(packet->linked_offer_id) &&
           workshop_text_present(packet->expected_output) &&
           packet->human_review_required &&
           !packet->customer_safe;
}

int workshop_owner_time_budget_warns_on_labor_trap(const WorkshopOwnerTimeBudget *budget) {
    if (budget == 0) {
        return 0;
    }

    return workshop_text_present(budget->id) &&
           workshop_text_present(budget->operator_next_action) &&
           budget->weekly_available_minutes > 0 &&
           budget->committed_minutes >= 0 &&
           budget->ara_delegable_minutes >= 0 &&
           (budget->labor_trap_warning || budget->committed_minutes <= budget->weekly_available_minutes);
}

int workshop_local_worktree_status_is_local_only(const WorkshopLocalWorktreeStatus *worktree) {
    if (worktree == 0) {
        return 0;
    }

    return workshop_text_present(worktree->id) &&
           workshop_text_present(worktree->path) &&
           workshop_text_present(worktree->local_branch) &&
           workshop_text_present(worktree->head) &&
           !worktree->external_sync_enabled;
}
