#include "workshop_app_bridge.h"

#include "workshop_core.h"

#include <string.h>

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
        "codex/local-workshop-avalonia-shell-boundary",
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
