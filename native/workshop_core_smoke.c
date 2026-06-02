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
    WorkshopEpochTimeHandoff handoff = {
        "epoch-handoff-001",
        "req-time-001",
        WORKSHOP_EPOCH_HANDOFF_DEADLINE,
        WORKSHOP_STATUS_EPOCH_TIME_REQUESTED,
        "2026-06-04T15:00:00+09:00/2026-06-05T18:00:00+09:00",
        "2026-06-05T18:00:00+09:00",
        "Review deadline requested",
    };

    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_AVAILABLE), "available") == 0);
    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_FIT_REVIEW), "fit-review") == 0);
    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_EPOCH_TIME_REQUESTED), "epoch-time-requested") == 0);
    assert(workshop_status_from_label("materials-received", &parsed_status) == 1);
    assert(parsed_status == WORKSHOP_STATUS_MATERIALS_RECEIVED);
    assert(workshop_status_from_label("not-real", &parsed_status) == 0);
    assert(workshop_status_is_terminal(WORKSHOP_STATUS_COMPLETE) == 1);
    assert(workshop_status_is_terminal(WORKSHOP_STATUS_CANCELED) == 1);
    assert(workshop_status_is_terminal(WORKSHOP_STATUS_BLOCKED) == 0);
    assert(workshop_status_needs_operator_attention(WORKSHOP_STATUS_FIT_REVIEW) == 1);
    assert(workshop_status_needs_operator_attention(WORKSHOP_STATUS_COMPLETE) == 0);

    assert(strcmp(workshop_lane_label(WORKSHOP_LANE_CRM_DATABASE), "crm-database") == 0);
    assert(strcmp(workshop_package_kind_label(WORKSHOP_PACKAGE_SUBSCRIPTION), "subscription") == 0);
    assert(strcmp(workshop_submission_kind_label(WORKSHOP_SUBMISSION_SYSTEMS_REQUEST), "systems-request") == 0);
    assert(strcmp(workshop_epoch_handoff_kind_label(WORKSHOP_EPOCH_HANDOFF_COHORT_WINDOW), "cohort-window") == 0);

    assert(workshop_package_is_lower_labor(&async_pack) == 1);
    assert(workshop_service_request_requires_guardian_flow(&minor_request) == 1);
    assert(workshop_service_request_needs_epoch_time(&minor_request) == 0);
    assert(workshop_service_request_needs_epoch_time(&timed_request) == 1);
    assert(workshop_submission_needs_review(&submission) == 1);
    assert(workshop_epoch_handoff_is_customer_safe(&handoff) == 1);

    return 0;
}
