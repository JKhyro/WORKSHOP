#include "workshop_core.h"

#include <assert.h>
#include <string.h>

int main(void) {
    WorkshopServiceStatus parsed_status = WORKSHOP_STATUS_DRAFT;
    WorkshopPackage async_pack = {
        "pkg-submission-4",
        WORKSHOP_PACKAGE_SUBMISSION_PACK,
        "Four Submission Review Pack",
        0,
        16000,
        0,
        1,
        0,
        1,
    };
    WorkshopPackageEligibility async_pack_eligibility = {
        "pkg-submission-4",
        WORKSHOP_PACKAGE_SUBMISSION_PACK,
        WORKSHOP_STATUS_AVAILABLE,
        1,
        1,
        1,
        0,
        "Accept adult submission intake and route minors through compatibility review",
        "Submission review pack is available for adult intake.",
    };
    WorkshopServiceRequest minor_request = {
        "req-minor-001",
        "cust-guardian-aware",
        WORKSHOP_LANE_EDUCATION_SUBMISSION,
        "pkg-submission-4",
        WORKSHOP_STATUS_FIT_REVIEW,
        17,
        1,
        0,
        "2026-06-03T09:00:00+09:00",
        "Run compatibility assessment before accepting work",
    };
    WorkshopServiceRequest timed_request = {
        "req-time-001",
        "cust-adult-001",
        WORKSHOP_LANE_PREMIUM_PROGRAM,
        "pkg-premium-001",
        WORKSHOP_STATUS_EPOCH_TIME_REQUESTED,
        29,
        0,
        1,
        "2026-06-03T09:30:00+09:00",
        "Send timing need to EPOCH",
    };
    WorkshopSubmission submission = {
        "sub-writing-001",
        "req-time-001",
        WORKSHOP_SUBMISSION_WRITING,
        WORKSHOP_STATUS_MATERIALS_RECEIVED,
        "EIKEN Pre-1 essay draft",
        "2026-06-03T10:00:00+09:00",
        "2026-06-05T18:00:00+09:00",
        1,
    };
    WorkshopSubmissionReviewCycle review_cycle = {
        "cycle-writing-001",
        "sub-writing-001",
        "req-time-001",
        WORKSHOP_SUBMISSION_WRITING,
        WORKSHOP_STATUS_MATERIALS_RECEIVED,
        "2026-06-03T10:00:00+09:00",
        "2026-06-05T18:00:00+09:00",
        "Return after EPOCH timing confirmation",
        1,
        1,
        "Assign reviewer after timing confirmation",
        "Draft received; review timing is being confirmed.",
    };
    WorkshopCohortPlan cohort_plan = {
        "cohort-eiken-adults",
        "pkg-cohort-subscription",
        WORKSHOP_STATUS_QUEUED,
        3,
        6,
        3,
        1,
        1,
        "Open enrollment and prepare EPOCH timing after cohort clears intake",
        "Cohort enrollment is open for compatible adult learners.",
    };
    WorkshopCompatibilityGate compatibility_gate = {
        "gate-under-19-001",
        "req-minor-001",
        WORKSHOP_STATUS_COMPATIBILITY_REVIEW,
        17,
        1,
        1,
        "Confirm guardian-aware terms and compatibility before accepting work",
        "Compatibility review is required before service acceptance.",
    };
    WorkshopCrmOpportunity crm_opportunity = {
        "opp-systems-001",
        "crm-small-business",
        "req-time-001",
        WORKSHOP_LANE_CRM_DATABASE,
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        1,
        "Convert the qualified opportunity into an ARA-assisted delivery packet",
        "Scope review is in progress for the requested system setup.",
    };
    WorkshopCrmOpportunity unqualified_opportunity = {
        "opp-unqualified-001",
        "crm-small-business",
        "req-time-001",
        WORKSHOP_LANE_CRM_DATABASE,
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        0,
        1,
        "Complete fit review before assignment",
        "Scope review is still pending.",
    };
    WorkshopCrmOpportunity unlinked_opportunity = {
        "opp-unlinked-001",
        "crm-small-business",
        "",
        WORKSHOP_LANE_CRM_DATABASE,
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        1,
        "Convert the qualified opportunity into an ARA-assisted delivery packet",
        "Scope review is in progress for the requested system setup.",
    };
    WorkshopAraRevenuePacket ara_packet = {
        "ara-packet-systems-001",
        "opp-systems-001",
        "SYMBIOSIS",
        WORKSHOP_STATUS_QUEUED,
        WORKSHOP_ARA_REVIEW_OPERATOR_REVIEW,
        0,
        1,
        "Prepare scoped CRM cleanup plan and delivery checklist",
        "A service plan is being prepared for review.",
    };
    WorkshopAraRevenuePacket invalid_review_packet = {
        "ara-packet-invalid-001",
        "opp-systems-001",
        "SYMBIOSIS",
        WORKSHOP_STATUS_QUEUED,
        WORKSHOP_ARA_REVIEW_NOT_REQUESTED,
        0,
        1,
        "Prepare scoped CRM cleanup plan and delivery checklist",
        "A service plan is being prepared for review.",
    };
    WorkshopAraRevenuePacket blocked_packet = {
        "ara-packet-blocked-001",
        "opp-systems-001",
        "SYMBIOSIS",
        WORKSHOP_STATUS_BLOCKED,
        WORKSHOP_ARA_REVIEW_OPERATOR_REVIEW,
        0,
        1,
        "Resolve blocker before packet review",
        "A service plan is blocked before review.",
    };
    WorkshopAraAssignment ara_assignment = {
        "ara-assignment-systems-001",
        "ara-packet-systems-001",
        "SYMBIOSIS",
        WORKSHOP_STATUS_IN_PROGRESS,
        1,
        1,
        0,
        "Review packet output before sending a customer-safe plan",
        "Service plan preparation is active.",
    };
    WorkshopAraAssignment completed_review_assignment = {
        "ara-assignment-complete-001",
        "ara-packet-systems-001",
        "SYMBIOSIS",
        WORKSHOP_STATUS_IN_PROGRESS,
        1,
        0,
        1,
        "Deliver approved customer-safe plan",
        "Service plan review is complete.",
    };
    WorkshopAraAssignment ownerless_assignment = {
        "ara-assignment-ownerless-001",
        "ara-packet-systems-001",
        "",
        WORKSHOP_STATUS_IN_PROGRESS,
        1,
        1,
        0,
        "Review packet output before sending a customer-safe plan",
        "Service plan preparation is active.",
    };
    WorkshopAraAssignment blocked_assignment = {
        "ara-assignment-blocked-001",
        "ara-packet-systems-001",
        "SYMBIOSIS",
        WORKSHOP_STATUS_BLOCKED,
        1,
        1,
        0,
        "Resolve blocker before review resumes",
        "Service plan preparation is blocked.",
    };
    WorkshopAraReviewReceipt ara_receipt = {
        "receipt-ara-review-001",
        "req-time-001",
        "opp-systems-001",
        "ara-packet-systems-001",
        "operator-review",
        WORKSHOP_ARA_REVIEW_OPERATOR_REVIEW,
        "Operator review opened for scoped service plan.",
        "2026-06-03T11:00:00+09:00",
        1,
        "Service plan review is in progress.",
    };
    WorkshopAraReviewReceipt unsafe_receipt = {
        "receipt-ara-review-unsafe-001",
        "",
        "opp-systems-001",
        "ara-packet-systems-001",
        "operator-review",
        WORKSHOP_ARA_REVIEW_OPERATOR_REVIEW,
        "Operator review opened for scoped service plan.",
        "2026-06-03T11:00:00+09:00",
        1,
        "Service plan review is in progress.",
    };
    WorkshopEpochTimeHandoff handoff = {
        "epoch-handoff-001",
        "req-time-001",
        WORKSHOP_EPOCH_HANDOFF_DEADLINE,
        WORKSHOP_STATUS_EPOCH_TIME_REQUESTED,
        "2026-06-04T15:00:00+09:00/2026-06-05T18:00:00+09:00",
        "2026-06-05T18:00:00+09:00",
        "Review deadline requested",
    };
    WorkshopDeliveryLifecycle lifecycle = {
        "lifecycle-001",
        "req-time-001",
        WORKSHOP_STATUS_EPOCH_TIME_REQUESTED,
        WORKSHOP_STATUS_IN_PROGRESS,
        "Confirm the EPOCH return window and assign reviewer",
        "Submission received; review timing is being confirmed.",
        "2026-06-03T10:05:00+09:00",
        1,
    };
    WorkshopCustomerSafeStatusEvent event = {
        "status-event-001",
        "req-time-001",
        WORKSHOP_STATUS_EPOCH_TIME_REQUESTED,
        "Timing request queued",
        "Timing request sent to EPOCH for scheduling review.",
        "2026-06-03T10:05:00+09:00",
        1,
    };
    WorkshopEpochBridgePayload bridge_payload = {
        "epoch-handoff-001",
        "WORKSHOP timing handoff",
        "submission-review-return",
        "2026-06-05 18:00 JST",
        "Asia/Tokyo",
        "queued",
        1,
        0,
        "Timing request received; availability is being checked.",
        "2026-06-03T10:05:00+09:00",
    };

    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_AVAILABLE), "available") == 0);
    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_FIT_REVIEW), "fit-review") == 0);
    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_EPOCH_TIME_REQUESTED), "epoch-time-requested") == 0);
    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_COMPATIBILITY_REVIEW), "compatibility-review") == 0);
    assert(workshop_status_from_label("materials-received", &parsed_status) == 1);
    assert(parsed_status == WORKSHOP_STATUS_MATERIALS_RECEIVED);
    assert(workshop_status_from_label("compatibility-review", &parsed_status) == 1);
    assert(parsed_status == WORKSHOP_STATUS_COMPATIBILITY_REVIEW);
    assert(workshop_status_from_label("not-real", &parsed_status) == 0);
    assert(workshop_status_is_terminal(WORKSHOP_STATUS_COMPLETE) == 1);
    assert(workshop_status_is_terminal(WORKSHOP_STATUS_CANCELED) == 1);
    assert(workshop_status_is_terminal(WORKSHOP_STATUS_BLOCKED) == 0);
    assert(workshop_status_needs_operator_attention(WORKSHOP_STATUS_FIT_REVIEW) == 1);
    assert(workshop_status_needs_operator_attention(WORKSHOP_STATUS_COMPATIBILITY_REVIEW) == 1);
    assert(workshop_status_needs_operator_attention(WORKSHOP_STATUS_COMPLETE) == 0);

    assert(strcmp(workshop_lane_label(WORKSHOP_LANE_CRM_DATABASE), "crm-database") == 0);
    assert(strcmp(workshop_package_kind_label(WORKSHOP_PACKAGE_SUBSCRIPTION), "subscription") == 0);
    assert(strcmp(workshop_submission_kind_label(WORKSHOP_SUBMISSION_SYSTEMS_REQUEST), "systems-request") == 0);
    assert(strcmp(workshop_epoch_handoff_kind_label(WORKSHOP_EPOCH_HANDOFF_COHORT_WINDOW), "cohort-window") == 0);
    assert(strcmp(workshop_ara_review_status_label(WORKSHOP_ARA_REVIEW_OPERATOR_REVIEW), "operator-review") == 0);
    assert(strcmp(workshop_ara_review_status_label(WORKSHOP_ARA_REVIEW_REVISION_REQUIRED), "revision-required") == 0);

    assert(workshop_package_is_lower_labor(&async_pack) == 1);
    assert(workshop_package_eligibility_is_offer_ready(&async_pack_eligibility) == 1);
    assert(workshop_package_eligibility_is_intake_ready(&async_pack_eligibility) == 1);
    assert(workshop_service_request_requires_guardian_flow(&minor_request) == 1);
    assert(workshop_service_request_routes_to_compatibility_review(&minor_request, &async_pack_eligibility) == 1);
    assert(workshop_service_request_needs_epoch_time(&minor_request) == 0);
    assert(workshop_service_request_needs_epoch_time(&timed_request) == 1);
    assert(workshop_package_accepts_service_request(&async_pack_eligibility, &minor_request) == 0);
    assert(workshop_submission_needs_review(&submission) == 1);
    assert(workshop_submission_review_cycle_is_ready(&review_cycle) == 1);
    assert(workshop_submission_review_cycle_is_customer_safe(&review_cycle) == 1);
    assert(workshop_cohort_plan_is_enrollment_ready(&cohort_plan) == 1);
    assert(workshop_cohort_plan_supports_subscription(&cohort_plan) == 1);
    assert(workshop_compatibility_gate_blocks_auto_accept(&compatibility_gate) == 1);
    assert(workshop_crm_opportunity_is_qualified(&crm_opportunity) == 1);
    assert(workshop_crm_opportunity_is_qualified(&unqualified_opportunity) == 0);
    assert(workshop_crm_opportunity_is_qualified(&unlinked_opportunity) == 0);
    assert(workshop_ara_revenue_packet_is_ready(&ara_packet) == 1);
    assert(workshop_ara_revenue_packet_is_ready(&invalid_review_packet) == 0);
    assert(workshop_ara_revenue_packet_is_ready(&blocked_packet) == 0);
    assert(workshop_ara_assignment_is_active(&ara_assignment) == 1);
    assert(workshop_ara_assignment_is_active(&completed_review_assignment) == 1);
    assert(workshop_ara_assignment_is_active(&ownerless_assignment) == 0);
    assert(workshop_ara_assignment_is_active(&blocked_assignment) == 0);
    assert(workshop_ara_review_receipt_is_customer_safe(&ara_receipt) == 1);
    assert(workshop_ara_review_receipt_is_customer_safe(&unsafe_receipt) == 0);
    assert(workshop_epoch_handoff_is_customer_safe(&handoff) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_INTAKE_READY, WORKSHOP_STATUS_COMPATIBILITY_REVIEW) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_COMPATIBILITY_REVIEW, WORKSHOP_STATUS_QUEUED) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_COMPLETE, WORKSHOP_STATUS_IN_PROGRESS) == 0);
    assert(workshop_delivery_lifecycle_is_valid(&lifecycle) == 1);
    assert(workshop_customer_safe_status_event_is_valid(&event) == 1);
    assert(workshop_epoch_bridge_payload_is_ready(&bridge_payload) == 1);

    return 0;
}
