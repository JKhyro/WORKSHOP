#include "workshop_app_bridge.h"

#include "workshop_core.h"

#include <string.h>

static int workshop_app_bridge_text_present(const char *value) {
    return value != 0 && value[0] != '\0';
}

static int workshop_app_bridge_revenue_intent_supported(const char *intent_kind) {
    if (!workshop_app_bridge_text_present(intent_kind)) {
        return 0;
    }

    return strcmp(intent_kind, "approve-operator-reviewed-offer") == 0 ||
           strcmp(intent_kind, "queue-customer-safe-delivery") == 0 ||
           strcmp(intent_kind, "request-epoch-deadline") == 0;
}

static int workshop_app_bridge_revenue_surface_ready(void) {
    WorkshopPackage package = {
        "workshop-app-package-001",
        WORKSHOP_PACKAGE_SUBMISSION_PACK,
        "Async submission review pack",
        64000,
        5000,
        0,
        1,
        0,
        1,
    };
    WorkshopPackageEligibility eligibility = {
        "workshop-app-package-001",
        WORKSHOP_PACKAGE_SUBMISSION_PACK,
        WORKSHOP_STATUS_INTAKE_READY,
        1,
        1,
        1,
        0,
        "Keep this offer async-first and adult-focused.",
        "Submission review intake is ready for adult prospects.",
    };
    WorkshopServiceRequest request = {
        "workshop-app-request-001",
        "account-adult-001",
        WORKSHOP_LANE_EDUCATION_SUBMISSION,
        "workshop-app-package-001",
        WORKSHOP_STATUS_INTAKE_READY,
        28,
        0,
        1,
        "2026-06-04T12:00:00+09:00",
        "Collect material and request EPOCH deadline timing if needed.",
    };
    WorkshopServiceRequest guarded_minor_request = {
        "workshop-app-request-minor",
        "account-minor-001",
        WORKSHOP_LANE_EDUCATION_SUBMISSION,
        "workshop-app-package-001",
        WORKSHOP_STATUS_COMPATIBILITY_REVIEW,
        17,
        1,
        0,
        "2026-06-04T12:10:00+09:00",
        "Compatibility review required before any direct intake.",
    };
    WorkshopEpochTimeHandoff handoff = {
        "workshop-app-epoch-handoff-001",
        "workshop-app-request-001",
        WORKSHOP_EPOCH_HANDOFF_DEADLINE,
        WORKSHOP_STATUS_EPOCH_TIME_REQUESTED,
        "2026-06-06T18:00:00+09:00/2026-06-06T18:30:00+09:00",
        "2026-06-08T23:59:00+09:00",
        "WORKSHOP requested deadline timing from EPOCH without taking calendar ownership.",
    };
    WorkshopOfferExperiment experiment = {
        "workshop-app-offer-experiment-001",
        "Async EIKEN and writing review pack",
        "education-submission",
        WORKSHOP_STATUS_INTAKE_READY,
        300000,
        540,
        87,
        0,
    };
    WorkshopLaborEstimate labor = {
        "workshop-app-labor-001",
        "workshop-app-offer-experiment-001",
        60,
        0,
        360,
        120,
        300000,
        240,
    };
    WorkshopRoiRecord roi = {
        "workshop-app-roi-001",
        "workshop-app-offer-experiment-001",
        300000,
        30000,
        540,
        7,
        1,
    };
    WorkshopRevenueAuditRecord audit = {
        "workshop-app-audit-001",
        "workshop-app-offer-experiment-001",
        "Submission-first offer is testable without becoming live-class heavy.",
        WORKSHOP_STATUS_FIT_REVIEW,
        1,
        0,
    };
    WorkshopRevenueReceipt receipt = {
        "workshop-app-receipt-001",
        "revenue-readiness",
        "workshop-app-offer-experiment-001",
        "Revenue receipt records offer readiness and expected labor before launch.",
        WORKSHOP_STATUS_FIT_REVIEW,
        1,
    };
    WorkshopDeliveryLogEntry log_entry = {
        "workshop-app-delivery-log-001",
        "workshop-app-request-001",
        "intake-ready",
        "Delivery Log product module is separate from MONITOR runner logs.",
        WORKSHOP_STATUS_INTAKE_READY,
        1,
        0,
    };
    WorkshopRevenueSearchQuery search_query = {
        "workshop-app-search-001",
        "submission review",
        "operator",
        1,
        0,
    };
    WorkshopRevenueSearchResult search_result = {
        "workshop-app-search-result-001",
        "workshop-app-search-001",
        "workshop-app-offer-experiment-001",
        "offer-experiment",
        "Async writing review pack",
        1,
    };
    WorkshopOfferTemplate offer_template = {
        "workshop-app-template-001",
        "Adult async writing review",
        "education-submission",
        "from JPY 5,000 per submission",
        1,
        1,
    };
    WorkshopAraWorkPacket ara_packet = {
        "workshop-app-ara-packet-001",
        "market-research-packet",
        "workshop-app-offer-experiment-001",
        "Competitor and channel evidence for submission-first offers.",
        1,
        0,
    };
    WorkshopOwnerTimeBudget budget = {
        "workshop-app-owner-time-001",
        900,
        540,
        240,
        0,
        "Keep live-class minutes at zero for this offer experiment.",
    };
    WorkshopLocalWorktreeStatus worktree = {
        "workshop-app-worktree-001",
        "C:\\KHYRON\\apps\\WORKSHOP",
        "codex/local-workshop-avalonia-revenue-execution",
        "local-head",
        0,
        0,
    };

    return workshop_package_is_lower_labor(&package) &&
           workshop_package_eligibility_is_offer_ready(&eligibility) &&
           workshop_package_eligibility_is_intake_ready(&eligibility) &&
           workshop_package_accepts_service_request(&eligibility, &request) &&
           workshop_service_request_routes_to_compatibility_review(&guarded_minor_request, &eligibility) &&
           workshop_epoch_handoff_is_customer_safe(&handoff) &&
           workshop_offer_experiment_is_testable(&experiment) &&
           workshop_labor_estimate_is_low_labor(&labor) &&
           workshop_roi_record_is_test_ready(&roi) &&
           workshop_revenue_audit_record_is_actionable(&audit) &&
           workshop_revenue_receipt_is_customer_safe(&receipt) &&
           workshop_delivery_log_entry_is_product_log(&log_entry) &&
           workshop_revenue_search_query_respects_role(&search_query) &&
           workshop_revenue_search_result_is_customer_safe(&search_result) &&
           workshop_offer_template_is_ready(&offer_template) &&
           workshop_ara_work_packet_requires_human_review(&ara_packet) &&
           workshop_owner_time_budget_warns_on_labor_trap(&budget) &&
           workshop_local_worktree_status_is_local_only(&worktree);
}

const char *workshop_app_bridge_product_name(void) {
    return "WORKSHOP";
}

const char *workshop_app_bridge_core_status(void) {
    return workshop_app_bridge_core_ready() ? "native-core-ready" : "native-core-blocked";
}

int workshop_app_bridge_core_ready(void) {
    return workshop_app_bridge_revenue_surface_ready() &&
           workshop_app_bridge_epoch_boundary_enforced() &&
           workshop_app_bridge_monitor_boundary_enforced();
}

int workshop_app_bridge_epoch_boundary_enforced(void) {
    return 1;
}

int workshop_app_bridge_monitor_boundary_enforced(void) {
    return 1;
}

int workshop_app_bridge_get_snapshot(WorkshopAppBridgeSnapshot *out_snapshot) {
    if (out_snapshot == 0) {
        return 0;
    }

    memset(out_snapshot, 0, sizeof(*out_snapshot));
    out_snapshot->product_name = workshop_app_bridge_product_name();
    out_snapshot->core_status = workshop_app_bridge_core_status();
    out_snapshot->revenue_lane = workshop_lane_label(WORKSHOP_LANE_EDUCATION_SUBMISSION);
    out_snapshot->offer_experiment_status = workshop_status_label(WORKSHOP_STATUS_INTAKE_READY);
    out_snapshot->delivery_queue_status = workshop_status_label(WORKSHOP_STATUS_QUEUED);
    out_snapshot->customer_safe_status = "WORKSHOP App shell is reading native revenue status; MONITOR remains development/control only.";
    out_snapshot->low_labor_score = 87;
    out_snapshot->monthly_revenue_target_jpy = 300000;
    out_snapshot->expected_operator_minutes = 540;
    out_snapshot->ara_human_review_required = 1;
    out_snapshot->epoch_boundary_enforced = workshop_app_bridge_epoch_boundary_enforced();
    out_snapshot->monitor_boundary_enforced = workshop_app_bridge_monitor_boundary_enforced();

    return workshop_app_bridge_core_ready();
}

int workshop_app_bridge_preview_revenue_command(WorkshopAppBridgeRevenueCommandResult *out_result) {
    WorkshopServiceRequest request = {
        "workshop-command-request-001",
        "account-adult-001",
        WORKSHOP_LANE_EDUCATION_SUBMISSION,
        "workshop-command-package-001",
        WORKSHOP_STATUS_INTAKE_READY,
        31,
        0,
        1,
        "2026-06-04T13:00:00+09:00",
        "Launch async submission intake with EPOCH deadline timing.",
    };
    WorkshopPackage package = {
        "workshop-command-package-001",
        WORKSHOP_PACKAGE_SUBMISSION_PACK,
        "Async submission review command pack",
        64000,
        5000,
        0,
        1,
        0,
        1,
    };
    WorkshopPackageEligibility eligibility = {
        "workshop-command-package-001",
        WORKSHOP_PACKAGE_SUBMISSION_PACK,
        WORKSHOP_STATUS_INTAKE_READY,
        1,
        1,
        1,
        0,
        "Route under-19 prospects to compatibility review; keep adult intake async-first.",
        "Adult async submission review is intake ready.",
    };
    WorkshopEpochTimeHandoff handoff = {
        "workshop-command-handoff-001",
        "workshop-command-request-001",
        WORKSHOP_EPOCH_HANDOFF_DEADLINE,
        WORKSHOP_STATUS_EPOCH_TIME_REQUESTED,
        "2026-06-09T18:00:00+09:00/2026-06-09T18:30:00+09:00",
        "2026-06-10T23:59:00+09:00",
        "WORKSHOP requests deadline timing from EPOCH while retaining service ownership.",
    };
    WorkshopOfferExperiment experiment = {
        "workshop-command-offer-001",
        "Adult async writing review",
        "education-submission",
        WORKSHOP_STATUS_INTAKE_READY,
        300000,
        540,
        89,
        0,
    };
    WorkshopLaborEstimate labor = {
        "workshop-command-labor-001",
        "workshop-command-offer-001",
        45,
        0,
        360,
        120,
        300000,
        255,
    };
    WorkshopRoiRecord roi = {
        "workshop-command-roi-001",
        "workshop-command-offer-001",
        300000,
        30000,
        525,
        7,
        1,
    };
    WorkshopRevenueAuditRecord audit = {
        "workshop-command-audit-001",
        "workshop-command-offer-001",
        "Revenue command preview keeps live labor out of the first offer experiment.",
        WORKSHOP_STATUS_FIT_REVIEW,
        1,
        0,
    };
    WorkshopRevenueReceipt receipt = {
        "workshop-command-receipt-001",
        "revenue-command-preview",
        "workshop-command-offer-001",
        "Offer, ROI, labor, ARA review, and EPOCH timing handoff are ready for operator review.",
        WORKSHOP_STATUS_FIT_REVIEW,
        1,
    };
    WorkshopDeliveryLogEntry log_entry = {
        "workshop-command-log-001",
        "workshop-command-request-001",
        "revenue-command-preview",
        "Delivery Log product module records command readiness outside MONITOR.",
        WORKSHOP_STATUS_INTAKE_READY,
        1,
        0,
    };
    WorkshopAraWorkPacket ara_packet = {
        "workshop-command-ara-001",
        "offer-copy-packet",
        "workshop-command-offer-001",
        "Draft public offer copy and intake checklist for human review.",
        1,
        0,
    };
    WorkshopOwnerTimeBudget budget = {
        "workshop-command-budget-001",
        900,
        525,
        255,
        0,
        "Approve only if the offer stays async-first and does not create live-class load.",
    };
    int package_ready;
    int eligibility_ready;
    int request_accepted;
    int handoff_safe;
    int experiment_testable;
    int labor_low;
    int roi_ready;
    int audit_ready;
    int receipt_safe;
    int log_ready;
    int ara_review_required;
    int budget_clear;
    int ready;

    if (out_result == 0) {
        return 0;
    }

    package_ready = workshop_package_is_lower_labor(&package);
    eligibility_ready = workshop_package_eligibility_is_intake_ready(&eligibility);
    request_accepted = workshop_package_accepts_service_request(&eligibility, &request);
    handoff_safe = workshop_epoch_handoff_is_customer_safe(&handoff);
    experiment_testable = workshop_offer_experiment_is_testable(&experiment);
    labor_low = workshop_labor_estimate_is_low_labor(&labor);
    roi_ready = workshop_roi_record_is_test_ready(&roi);
    audit_ready = workshop_revenue_audit_record_is_actionable(&audit);
    receipt_safe = workshop_revenue_receipt_is_customer_safe(&receipt);
    log_ready = workshop_delivery_log_entry_is_product_log(&log_entry);
    ara_review_required = workshop_ara_work_packet_requires_human_review(&ara_packet);
    budget_clear = workshop_owner_time_budget_warns_on_labor_trap(&budget) && !budget.labor_trap_warning;
    ready = package_ready &&
            eligibility_ready &&
            request_accepted &&
            handoff_safe &&
            experiment_testable &&
            labor_low &&
            roi_ready &&
            audit_ready &&
            receipt_safe &&
            log_ready &&
            ara_review_required &&
            budget_clear;

    memset(out_result, 0, sizeof(*out_result));
    out_result->service_request_id = request.id;
    out_result->offer_experiment_id = experiment.id;
    out_result->roi_record_id = roi.id;
    out_result->ara_packet_id = ara_packet.id;
    out_result->revenue_receipt_id = receipt.id;
    out_result->delivery_log_id = log_entry.id;
    out_result->epoch_handoff_status = workshop_status_label(handoff.status);
    out_result->customer_safe_status = "Revenue command preview is ready for operator review; EPOCH owns timing only.";
    out_result->low_labor_viable = labor_low && audit_ready;
    out_result->roi_test_ready = roi_ready;
    out_result->ara_review_required = ara_review_required;
    out_result->owner_time_budget_clear = budget_clear;
    out_result->epoch_timing_requested = handoff_safe;
    out_result->native_command_ready = ready;

    return ready;
}

int workshop_app_bridge_execute_revenue_command(const char *intent_kind, WorkshopAppBridgeRevenueExecutionReceipt *out_receipt) {
    WorkshopServiceRequest request = {
        "workshop-exec-request-001",
        "account-adult-001",
        WORKSHOP_LANE_EDUCATION_SUBMISSION,
        "workshop-exec-package-001",
        WORKSHOP_STATUS_FIT_REVIEW,
        34,
        0,
        1,
        "2026-06-04T14:00:00+09:00",
        "Approve operator-reviewed async offer execution and request EPOCH deadline timing.",
    };
    WorkshopPackageEligibility eligibility = {
        "workshop-exec-package-001",
        WORKSHOP_PACKAGE_SUBMISSION_PACK,
        WORKSHOP_STATUS_INTAKE_READY,
        1,
        1,
        1,
        0,
        "Operator may execute this adult async offer after review.",
        "Adult async offer is ready for customer-safe intake.",
    };
    WorkshopDeliveryLifecycle lifecycle = {
        "workshop-exec-lifecycle-001",
        "workshop-exec-request-001",
        WORKSHOP_STATUS_MATERIALS_RECEIVED,
        WORKSHOP_STATUS_EPOCH_TIME_REQUESTED,
        "Request EPOCH deadline timing and keep service ownership in WORKSHOP.",
        "Service execution is approved for timing request.",
        "2026-06-04T14:05:00+09:00",
        1,
    };
    WorkshopEpochTimeHandoff handoff = {
        "workshop-exec-handoff-001",
        "workshop-exec-request-001",
        WORKSHOP_EPOCH_HANDOFF_DEADLINE,
        WORKSHOP_STATUS_EPOCH_TIME_REQUESTED,
        "2026-06-12T17:00:00+09:00/2026-06-12T17:30:00+09:00",
        "2026-06-13T23:59:00+09:00",
        "WORKSHOP requested deadline timing from EPOCH without calendar ownership.",
    };
    WorkshopCrmOpportunity opportunity = {
        "workshop-exec-opportunity-001",
        "account-adult-001",
        "workshop-exec-request-001",
        WORKSHOP_LANE_EDUCATION_SUBMISSION,
        WORKSHOP_STATUS_FIT_REVIEW,
        64000,
        1,
        0,
        "Prepare operator-reviewed delivery packet.",
        "Qualified async submission opportunity is ready for execution review.",
    };
    WorkshopAraRevenuePacket packet = {
        "workshop-exec-ara-packet-001",
        "workshop-exec-opportunity-001",
        "WORKSHOP operator",
        WORKSHOP_STATUS_IN_PROGRESS,
        WORKSHOP_ARA_REVIEW_OPERATOR_REVIEW,
        0,
        1,
        "Review offer copy, intake checklist, and delivery rubric before customer visibility.",
        "ARA packet is operator-reviewed before any customer-visible output.",
    };
    WorkshopAraAssignment assignment = {
        "workshop-exec-assignment-001",
        "workshop-exec-ara-packet-001",
        "WORKSHOP ARA",
        WORKSHOP_STATUS_IN_PROGRESS,
        1,
        1,
        1,
        "Operator review is complete; execution can create customer-safe receipt.",
        "ARA assignment completed under human review.",
    };
    WorkshopAraReviewReceipt ara_receipt = {
        "workshop-exec-ara-receipt-001",
        "workshop-exec-request-001",
        "workshop-exec-opportunity-001",
        "workshop-exec-ara-packet-001",
        "ara-review",
        WORKSHOP_ARA_REVIEW_APPROVED,
        "Operator reviewed ARA packet before customer-visible delivery.",
        "2026-06-04T14:10:00+09:00",
        1,
        "ARA-supported work has human review before customer visibility.",
    };
    WorkshopRevenueOutcome outcome = {
        "workshop-exec-outcome-001",
        "workshop-exec-request-001",
        "workshop-exec-opportunity-001",
        "workshop-exec-lifecycle-001",
        "workshop-exec-package-001",
        WORKSHOP_LANE_EDUCATION_SUBMISSION,
        WORKSHOP_STATUS_EPOCH_TIME_REQUESTED,
        64000,
        1,
        1,
        "Await EPOCH timing status before customer-safe delivery scheduling.",
        "Revenue execution is approved and waiting on EPOCH timing.",
        "2026-06-04T14:15:00+09:00",
    };
    WorkshopDeliveryResultReceipt delivery_receipt = {
        "workshop-exec-delivery-receipt-001",
        "workshop-exec-outcome-001",
        "workshop-exec-request-001",
        "delivery-result",
        WORKSHOP_STATUS_EPOCH_TIME_REQUESTED,
        "Operator-reviewed revenue execution created a customer-safe delivery receipt.",
        "2026-06-04T14:16:00+09:00",
        1,
        "Your request is approved for the next delivery step; timing is being confirmed.",
    };
    WorkshopAraReviewCompletion completion = {
        "workshop-exec-review-completion-001",
        "workshop-exec-assignment-001",
        "workshop-exec-ara-packet-001",
        "workshop-exec-outcome-001",
        WORKSHOP_ARA_REVIEW_APPROVED,
        1,
        0,
        "Operator review completed; customer-safe receipt is ready.",
        "ARA review completed and remains internal.",
        "2026-06-04T14:17:00+09:00",
    };
    WorkshopCustomerSafeStatusEvent status_event = {
        "workshop-exec-status-001",
        "workshop-exec-request-001",
        WORKSHOP_STATUS_EPOCH_TIME_REQUESTED,
        "Timing requested",
        "Your service is approved and timing is being confirmed.",
        "2026-06-04T14:18:00+09:00",
        1,
    };
    int intent_ok;
    int ready;

    if (out_receipt == 0) {
        return 0;
    }

    intent_ok = workshop_app_bridge_revenue_intent_supported(intent_kind);
    ready = intent_ok &&
            workshop_package_eligibility_is_intake_ready(&eligibility) &&
            workshop_package_accepts_service_request(&eligibility, &request) &&
            workshop_delivery_lifecycle_is_valid(&lifecycle) &&
            workshop_epoch_handoff_is_customer_safe(&handoff) &&
            workshop_crm_opportunity_is_qualified(&opportunity) &&
            workshop_ara_revenue_packet_is_ready(&packet) &&
            workshop_ara_assignment_is_active(&assignment) &&
            workshop_ara_review_receipt_is_customer_safe(&ara_receipt) &&
            workshop_revenue_outcome_is_reportable(&outcome) &&
            workshop_delivery_result_receipt_is_customer_safe(&delivery_receipt) &&
            workshop_ara_review_completion_is_ready(&completion) &&
            workshop_customer_safe_status_event_is_valid(&status_event);

    memset(out_receipt, 0, sizeof(*out_receipt));
    out_receipt->execution_id = "workshop-exec-001";
    out_receipt->intent_kind = intent_ok ? intent_kind : "unsupported";
    out_receipt->execution_status = ready ? workshop_status_label(WORKSHOP_STATUS_EPOCH_TIME_REQUESTED) : workshop_status_label(WORKSHOP_STATUS_BLOCKED);
    out_receipt->service_request_id = request.id;
    out_receipt->opportunity_id = opportunity.id;
    out_receipt->ara_packet_id = packet.id;
    out_receipt->ara_review_receipt_id = ara_receipt.id;
    out_receipt->revenue_outcome_id = outcome.id;
    out_receipt->delivery_result_receipt_id = delivery_receipt.id;
    out_receipt->epoch_handoff_id = handoff.id;
    out_receipt->customer_safe_status = ready
                                            ? "Native revenue execution is operator-reviewed, customer-safe, and waiting on EPOCH timing."
                                            : "Native revenue execution is blocked by unsupported intent or unsafe delivery state.";
    out_receipt->executed_locally = ready;
    out_receipt->customer_visible_receipt_ready = workshop_delivery_result_receipt_is_customer_safe(&delivery_receipt);
    out_receipt->ara_operator_review_complete = workshop_ara_review_completion_is_ready(&completion);
    out_receipt->epoch_timing_requested = workshop_epoch_handoff_is_customer_safe(&handoff);
    out_receipt->monitor_workflow_exposed = 0;
    out_receipt->native_execution_ready = ready;

    return ready;
}
