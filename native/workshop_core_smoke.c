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
    WorkshopCohortCapacityPlan cohort_capacity_plan = {
        "capacity-plan-eiken-adults",
        "cohort-eiken-adults",
        "req-cohort-001",
        "pkg-cohort-subscription",
        WORKSHOP_STATUS_TIMING_WAITLISTED,
        3,
        6,
        3,
        1,
        1,
        1,
        "waitlisted",
        "Keep the cohort clustered while EPOCH returns timing-only capacity status",
        "Cohort capacity is ready; timing remains waitlisted with EPOCH.",
        "2026-06-03T10:35:00+09:00",
    };
    WorkshopSubscriptionPlan subscription_plan = {
        "subscription-plan-eiken-adults",
        "cohort-eiken-adults",
        "req-cohort-001",
        "pkg-cohort-subscription",
        WORKSHOP_STATUS_QUEUED,
        20000,
        3,
        20,
        12,
        0,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        "monthly materials and strategy access",
        "Open low-labor subscription access while cohort timing is resolved",
        "Materials access can continue without committing extra live calendar time.",
        "2026-06-03T10:35:00+09:00",
    };
    WorkshopSubscriptionPlan live_time_subscription_plan = {
        "subscription-plan-live-heavy",
        "cohort-eiken-adults",
        "req-cohort-001",
        "pkg-cohort-subscription",
        WORKSHOP_STATUS_QUEUED,
        20000,
        3,
        20,
        12,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        "monthly live-heavy access",
        "Do not open low-labor subscription until live-time dependency is removed",
        "Subscription access is waiting because it would require extra live time.",
        "2026-06-03T10:35:00+09:00",
    };
    WorkshopCohortPlanningReceipt cohort_planning_receipt = {
        "receipt-cohort-planning-001",
        "cohort-eiken-adults",
        "capacity-plan-eiken-adults",
        "subscription-plan-eiken-adults",
        "req-cohort-001",
        "cohort-subscription-planning",
        WORKSHOP_STATUS_QUEUED,
        "WORKSHOP cohort capacity and subscription planning are ready without taking calendar ownership.",
        "2026-06-03T10:36:00+09:00",
        1,
        "Cohort/subscription planning is ready; EPOCH remains responsible for timing.",
    };
    WorkshopCohortEnrollment cohort_enrollment = {
        "enrollment-eiken-adults-001",
        "cohort-eiken-adults",
        "req-cohort-001",
        "account-cohort-001",
        WORKSHOP_STATUS_TIMING_WAITLISTED,
        1,
        1,
        0,
        "Adult test-prep cohort seat",
        "Keep enrollment active while EPOCH returns timing-only status",
        "Enrollment is recorded; timing is still being resolved through EPOCH.",
        "2026-06-03T10:37:00+09:00",
    };
    WorkshopSubscriptionLifecycle subscription_lifecycle = {
        "subscription-life-eiken-adults-001",
        "subscription-plan-eiken-adults",
        "enrollment-eiken-adults-001",
        "req-cohort-001",
        "account-cohort-001",
        WORKSHOP_STATUS_QUEUED,
        20000,
        8,
        1,
        0,
        1,
        "monthly materials and strategy access",
        "Open materials access and renewal tracking without live payment automation",
        "Subscription access is queued and renewal-ready without live payment activation.",
        "2026-06-03T10:38:00+09:00",
    };
    WorkshopSubscriptionLifecycle live_payment_lifecycle = {
        "subscription-life-live-payment",
        "subscription-plan-eiken-adults",
        "enrollment-eiken-adults-001",
        "req-cohort-001",
        "account-cohort-001",
        WORKSHOP_STATUS_QUEUED,
        20000,
        8,
        1,
        1,
        1,
        "monthly payment automation",
        "Do not activate without approved payment integration",
        "Subscription is waiting because live payment automation is not approved.",
        "2026-06-03T10:38:00+09:00",
    };
    WorkshopSubscriptionLifecycleReceipt subscription_lifecycle_receipt = {
        "receipt-subscription-life-001",
        "subscription-life-eiken-adults-001",
        "enrollment-eiken-adults-001",
        "req-cohort-001",
        "subscription-lifecycle",
        WORKSHOP_STATUS_QUEUED,
        "WORKSHOP subscription lifecycle is queued without live payment activation.",
        "2026-06-03T10:39:00+09:00",
        1,
        "Subscription lifecycle is recorded; payment integration is not live.",
    };
    WorkshopCohortOutcomeReport cohort_outcome_report = {
        "outcome-report-eiken-adults-001",
        "cohort-eiken-adults",
        "enrollment-eiken-adults-001",
        "subscription-life-eiken-adults-001",
        "req-cohort-001",
        "account-cohort-001",
        WORKSHOP_STATUS_IN_PROGRESS,
        64,
        "renewal-ready",
        1,
        "Review progress and prepare renewal message without live payment automation",
        "Cohort progress is recorded; renewal can be reviewed while EPOCH owns timing.",
        "2026-06-03T10:40:00+09:00",
    };
    WorkshopSubscriptionRenewalReport subscription_renewal_report = {
        "renewal-report-eiken-adults-001",
        "subscription-life-eiken-adults-001",
        "outcome-report-eiken-adults-001",
        "req-cohort-001",
        "account-cohort-001",
        WORKSHOP_STATUS_QUEUED,
        1,
        22,
        20000,
        0,
        1,
        1,
        "Queue renewal review and request timing-only updates from EPOCH if needed",
        "Renewal readiness is recorded without live payment activation.",
        "2026-06-03T10:41:00+09:00",
    };
    WorkshopCohortProgressStatusEvent cohort_progress_event = {
        "progress-event-eiken-adults-001",
        "outcome-report-eiken-adults-001",
        "renewal-report-eiken-adults-001",
        "req-cohort-001",
        WORKSHOP_STATUS_IN_PROGRESS,
        "Cohort progress update ready",
        1,
        "Progress and renewal status are visible; schedule timing remains with EPOCH.",
        "2026-06-03T10:42:00+09:00",
    };
    WorkshopOutcomeRenewalReceipt outcome_renewal_receipt = {
        "receipt-outcome-renewal-001",
        "outcome-report-eiken-adults-001",
        "renewal-report-eiken-adults-001",
        "req-cohort-001",
        "cohort-outcome-renewal",
        WORKSHOP_STATUS_QUEUED,
        "WORKSHOP outcome and renewal reporting are recorded without live payment automation.",
        "2026-06-03T10:43:00+09:00",
        1,
        "Outcome and renewal reporting are recorded; payment automation is not live.",
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
    WorkshopRevenueOutcome reportable_outcome = {
        "outcome-systems-001",
        "req-time-001",
        "opp-systems-001",
        "lifecycle-001",
        "pkg-systems-block",
        WORKSHOP_LANE_CRM_DATABASE,
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        1,
        "Complete service plan review and issue customer-safe result",
        "A service result is being prepared after scope review.",
        "2026-06-03T15:35:00+09:00",
    };
    WorkshopRevenueOutcome gated_outcome = {
        "outcome-gated-001",
        "req-minor-001",
        "",
        "lifecycle-minor-001",
        "pkg-submission-4",
        WORKSHOP_LANE_EDUCATION_SUBMISSION,
        WORKSHOP_STATUS_COMPATIBILITY_REVIEW,
        16000,
        1,
        0,
        "Complete compatibility review before opening a result receipt",
        "Compatibility review must be completed before a delivery result can be issued.",
        "2026-06-03T15:35:00+09:00",
    };
    WorkshopDeliveryResultReceipt result_receipt = {
        "result-receipt-systems-001",
        "outcome-systems-001",
        "req-time-001",
        "delivery-result",
        WORKSHOP_STATUS_FIT_REVIEW,
        "Systems service result is being reviewed before customer delivery.",
        "2026-06-03T15:35:00+09:00",
        1,
        "A customer-safe service result is being prepared for review.",
    };
    WorkshopDeliveryResultReceipt unsafe_result_receipt = {
        "result-receipt-unsafe-001",
        "",
        "req-time-001",
        "delivery-result",
        WORKSHOP_STATUS_FIT_REVIEW,
        "Systems service result is being reviewed before customer delivery.",
        "2026-06-03T15:35:00+09:00",
        1,
        "A customer-safe service result is being prepared for review.",
    };
    WorkshopAraReviewCompletion open_review_completion = {
        "ara-review-completion-systems-001",
        "ara-assignment-systems-001",
        "ara-packet-systems-001",
        "outcome-systems-001",
        WORKSHOP_ARA_REVIEW_OPERATOR_REVIEW,
        0,
        0,
        "Complete review before sending the customer-facing result",
        "Service plan review is in progress.",
        "",
    };
    WorkshopAraReviewCompletion approved_review_completion = {
        "ara-review-completion-approved-001",
        "ara-assignment-systems-001",
        "ara-packet-systems-001",
        "outcome-systems-001",
        WORKSHOP_ARA_REVIEW_APPROVED,
        1,
        0,
        "Issue the customer-safe result receipt and queue follow-up",
        "Service review is complete.",
        "2026-06-03T15:50:00+09:00",
    };
    WorkshopAraReviewCompletion unsafe_review_completion = {
        "ara-review-completion-unsafe-001",
        "ara-assignment-systems-001",
        "ara-packet-systems-001",
        "outcome-systems-001",
        WORKSHOP_ARA_REVIEW_APPROVED,
        1,
        1,
        "Issue the customer-safe result receipt and queue follow-up",
        "Service review is complete.",
        "2026-06-03T15:50:00+09:00",
    };
    WorkshopCustomerAccount active_account = {
        "account-business-systems-001",
        "crm-priority-prospect",
        "Small business operator",
        "business",
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        1,
        1,
        1,
        "After service plan review",
        "Prepare a renewal or follow-up scope",
        "Service history is recorded and next systems step can be reviewed.",
        "2026-06-03T18:25:00+09:00",
    };
    WorkshopCustomerAccount unsafe_account = {
        "account-hidden-001",
        "crm-priority-prospect",
        "Hidden operator account",
        "business",
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        1,
        1,
        0,
        "After service plan review",
        "Prepare a renewal or follow-up scope",
        "Service history is recorded and next systems step can be reviewed.",
        "2026-06-03T18:25:00+09:00",
    };
    WorkshopCustomerAccountHistory account_history = {
        "history-systems-001",
        "account-business-systems-001",
        "req-time-001",
        "outcome-systems-001",
        "systems-result-review",
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        "Link service plan to account history",
        "Systems service history is recorded while the customer-safe result is prepared.",
        "2026-06-03T18:25:00+09:00",
    };
    WorkshopCustomerAccountHistory unsafe_history = {
        "history-unsafe-001",
        "account-business-systems-001",
        "",
        "outcome-systems-001",
        "systems-result-review",
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        "Link service plan to account history",
        "Systems service history is recorded while the customer-safe result is prepared.",
        "2026-06-03T18:25:00+09:00",
    };
    WorkshopRenewalOpportunity ready_renewal = {
        "renewal-systems-001",
        "account-business-systems-001",
        "outcome-systems-001",
        "pkg-systems-block",
        WORKSHOP_LANE_CRM_DATABASE,
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        1,
        1,
        "After service plan review",
        "Prepare the next scoped support block",
        "A next systems-support step can be reviewed after the current result is ready.",
        "2026-06-03T18:25:00+09:00",
    };
    WorkshopRenewalOpportunity unready_renewal = {
        "renewal-cohort-001",
        "account-cohort-001",
        "outcome-cohort-001",
        "pkg-cohort-subscription",
        WORKSHOP_LANE_COHORT,
        WORKSHOP_STATUS_QUEUED,
        120000,
        0,
        0,
        1,
        "After compatible demand clusters",
        "Do not prompt renewal until the cohort result report is ready",
        "Cohort follow-up opens after the group plan is ready.",
        "2026-06-03T18:30:00+09:00",
    };
    WorkshopCustomerFollowUp follow_up = {
        "followup-systems-001",
        "renewal-systems-001",
        "account-business-systems-001",
        "scope-follow-up",
        WORKSHOP_STATUS_FIT_REVIEW,
        1,
        1,
        "After service plan review",
        "Draft the next scoped support block",
        "A follow-up scope review can be requested after the current service result.",
        "2026-06-03T18:25:00+09:00",
    };
    WorkshopCustomerFollowUp unsafe_follow_up = {
        "followup-unsafe-001",
        "renewal-systems-001",
        "",
        "scope-follow-up",
        WORKSHOP_STATUS_FIT_REVIEW,
        1,
        1,
        "After service plan review",
        "Draft the next scoped support block",
        "A follow-up scope review can be requested after the current service result.",
        "2026-06-03T18:25:00+09:00",
    };
    WorkshopRetentionHealth actionable_retention = {
        "retention-systems-001",
        "account-business-systems-001",
        "renewal-systems-001",
        WORKSHOP_STATUS_FIT_REVIEW,
        76,
        "medium",
        1,
        1,
        1,
        "Prepare a scoped growth plan",
        "Your systems service path is active and the next support block can be reviewed.",
        "2026-06-03T19:45:00+09:00",
    };
    WorkshopRetentionHealth waiting_retention = {
        "retention-cohort-001",
        "account-cohort-001",
        "renewal-cohort-001",
        WORKSHOP_STATUS_QUEUED,
        48,
        "waiting",
        0,
        0,
        1,
        "Hold growth and referral prompts until the cohort plan clears",
        "Cohort follow-up is waiting until compatible demand is confirmed.",
        "2026-06-03T19:50:00+09:00",
    };
    WorkshopReferralOpportunity ready_referral = {
        "referral-systems-001",
        "account-business-systems-001",
        "retention-systems-001",
        WORKSHOP_LANE_CRM_DATABASE,
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        1,
        "Prepare a professional referral ask",
        "A referral path can be reviewed after the current systems result is accepted.",
        "2026-06-03T19:45:00+09:00",
    };
    WorkshopReferralOpportunity unsafe_referral = {
        "referral-unsafe-001",
        "",
        "retention-systems-001",
        WORKSHOP_LANE_CRM_DATABASE,
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        1,
        "Prepare a professional referral ask",
        "A referral path can be reviewed after the current systems result is accepted.",
        "2026-06-03T19:45:00+09:00",
    };
    WorkshopAccountGrowthPlan ready_growth_plan = {
        "growth-systems-001",
        "account-business-systems-001",
        "retention-systems-001",
        "referral-systems-001",
        "support-block-growth",
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        1,
        1,
        "Draft the next systems-support block",
        "The next systems support block can be reviewed after the current result is ready.",
        "2026-06-03T19:45:00+09:00",
    };
    WorkshopAccountGrowthPlan unsafe_growth_plan = {
        "growth-unsafe-001",
        "account-business-systems-001",
        "",
        "referral-systems-001",
        "support-block-growth",
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        1,
        1,
        "Draft the next systems-support block",
        "The next systems support block can be reviewed after the current result is ready.",
        "2026-06-03T19:45:00+09:00",
    };
    WorkshopGrowthFollowUpReceipt growth_receipt = {
        "growth-receipt-systems-001",
        "growth-systems-001",
        "account-business-systems-001",
        "account-growth-follow-up",
        WORKSHOP_STATUS_FIT_REVIEW,
        "Systems account-growth follow-up is ready for scope review.",
        "2026-06-03T19:45:00+09:00",
        1,
        "A next support block can be reviewed after the current service result.",
    };
    WorkshopGrowthFollowUpReceipt unsafe_growth_receipt = {
        "growth-receipt-unsafe-001",
        "",
        "account-business-systems-001",
        "account-growth-follow-up",
        WORKSHOP_STATUS_FIT_REVIEW,
        "Systems account-growth follow-up is ready for scope review.",
        "2026-06-03T19:45:00+09:00",
        1,
        "A next support block can be reviewed after the current service result.",
    };
    WorkshopReferralConversion ready_conversion = {
        "conversion-systems-001",
        "referral-systems-001",
        "account-business-systems-001",
        "growth-systems-001",
        WORKSHOP_LANE_CRM_DATABASE,
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        1,
        "Convert the growth path into a scoped support-block request",
        "A next systems-support block can be scoped after the current service result is accepted.",
        "2026-06-03T20:25:00+09:00",
    };
    WorkshopReferralConversion unsafe_conversion = {
        "conversion-unsafe-001",
        "",
        "account-business-systems-001",
        "growth-systems-001",
        WORKSHOP_LANE_CRM_DATABASE,
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        1,
        "Convert the growth path into a scoped support-block request",
        "A next systems-support block can be scoped after the current service result is accepted.",
        "2026-06-03T20:25:00+09:00",
    };
    WorkshopGrowthPlanAcceptance ready_acceptance = {
        "acceptance-systems-001",
        "growth-systems-001",
        "conversion-systems-001",
        "account-business-systems-001",
        WORKSHOP_STATUS_FIT_REVIEW,
        1,
        1,
        1,
        "Create the expansion request and request EPOCH timing only if needed",
        "The next systems-support block can be scoped; timing is reviewed only if needed.",
        "2026-06-03T20:25:00+09:00",
    };
    WorkshopGrowthPlanAcceptance unsafe_acceptance = {
        "acceptance-unsafe-001",
        "growth-systems-001",
        "",
        "account-business-systems-001",
        WORKSHOP_STATUS_FIT_REVIEW,
        1,
        1,
        1,
        "Create the expansion request and request EPOCH timing only if needed",
        "The next systems-support block can be scoped; timing is reviewed only if needed.",
        "2026-06-03T20:25:00+09:00",
    };
    WorkshopExpansionServiceRequest ready_expansion = {
        "expansion-systems-001",
        "acceptance-systems-001",
        "account-business-systems-001",
        WORKSHOP_LANE_CRM_DATABASE,
        "pkg-systems-block",
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        1,
        "Prepare the support-block scope and request EPOCH timing only for the planning session",
        "Your next systems-support block is ready for scope review.",
        "2026-06-03T20:25:00+09:00",
    };
    WorkshopExpansionServiceRequest unsafe_expansion = {
        "expansion-unsafe-001",
        "",
        "account-business-systems-001",
        WORKSHOP_LANE_CRM_DATABASE,
        "pkg-systems-block",
        WORKSHOP_STATUS_FIT_REVIEW,
        75000,
        1,
        1,
        "Prepare the support-block scope and request EPOCH timing only for the planning session",
        "Your next systems-support block is ready for scope review.",
        "2026-06-03T20:25:00+09:00",
    };
    WorkshopConversionStatusEvent conversion_status_event = {
        "conversion-status-systems-001",
        "conversion-systems-001",
        "expansion-systems-001",
        "account-business-systems-001",
        WORKSHOP_STATUS_FIT_REVIEW,
        "Expansion scope review",
        1,
        "The next systems-support block is ready for scope review.",
        "2026-06-03T20:25:00+09:00",
    };
    WorkshopConversionStatusEvent unsafe_conversion_status_event = {
        "conversion-status-unsafe-001",
        "conversion-systems-001",
        "",
        "account-business-systems-001",
        WORKSHOP_STATUS_FIT_REVIEW,
        "Expansion scope review",
        1,
        "The next systems-support block is ready for scope review.",
        "2026-06-03T20:25:00+09:00",
    };
    WorkshopConversionReceipt conversion_receipt = {
        "conversion-receipt-systems-001",
        "conversion-systems-001",
        "expansion-systems-001",
        "account-business-systems-001",
        "growth-execution",
        WORKSHOP_STATUS_FIT_REVIEW,
        "Systems account-growth conversion is ready for scoped support-block execution.",
        "2026-06-03T20:25:00+09:00",
        1,
        "Your next systems-support block can be scoped after the current service result.",
    };
    WorkshopConversionReceipt unsafe_conversion_receipt = {
        "conversion-receipt-unsafe-001",
        "conversion-systems-001",
        "",
        "account-business-systems-001",
        "growth-execution",
        WORKSHOP_STATUS_FIT_REVIEW,
        "Systems account-growth conversion is ready for scoped support-block execution.",
        "2026-06-03T20:25:00+09:00",
        1,
        "Your next systems-support block can be scoped after the current service result.",
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
    WorkshopEpochTimingReturnPayload timing_return_payload = {
        "epoch-time-return-001",
        "epoch-handoff-001",
        "req-time-001",
        "booking-confirmed",
        "returned",
        "2026-06-05 18:00 JST",
        1,
        0,
        "Confirmed timing returned locally to WORKSHOP.",
        "2026-06-03T21:00:00+09:00",
    };
    WorkshopEpochTimingReturnPayload conflict_return_payload = {
        "epoch-time-return-002",
        "epoch-handoff-002",
        "req-cohort-001",
        "availability-conflict",
        "needs-reschedule",
        "",
        1,
        0,
        "No local availability is open for the requested timing; choose a new window.",
        "2026-06-03T21:05:00+09:00",
    };
    WorkshopEpochTimingReturnPayload unsafe_timing_return_payload = {
        "epoch-time-return-unsafe",
        "epoch-handoff-001",
        "req-time-001",
        "booking-confirmed",
        "returned",
        "",
        1,
        1,
        "Confirmed timing returned locally to WORKSHOP.",
        "2026-06-03T21:00:00+09:00",
    };
    WorkshopEpochTimingReturnConsumption timing_consumption = {
        "timing-consumption-001",
        "epoch-handoff-001",
        "epoch-time-return-001",
        "req-time-001",
        WORKSHOP_STATUS_TIMING_CONFIRMED,
        1,
        "Proceed with WORKSHOP delivery using the confirmed timing window.",
        "Return timing is confirmed; WORKSHOP can proceed with delivery.",
        "2026-06-03T21:01:00+09:00",
    };
    WorkshopEpochTimingReturnConsumption conflict_consumption = {
        "timing-consumption-002",
        "epoch-handoff-002",
        "epoch-time-return-002",
        "req-cohort-001",
        WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED,
        1,
        "Choose a new timing window and send only the timing change to EPOCH.",
        "Timing needs a new window; WORKSHOP is preparing a revised timing request.",
        "2026-06-03T21:06:00+09:00",
    };
    WorkshopEpochTimingReturnConsumption unsafe_timing_consumption = {
        "timing-consumption-unsafe",
        "epoch-handoff-001",
        "epoch-time-return-001",
        "req-time-001",
        WORKSHOP_STATUS_BLOCKED,
        1,
        "Blocked",
        "Return timing is confirmed; WORKSHOP can proceed with delivery.",
        "2026-06-03T21:01:00+09:00",
    };
    WorkshopTimingReturnReceipt timing_receipt = {
        "receipt-timing-return-001",
        "timing-consumption-001",
        "epoch-time-return-001",
        "req-time-001",
        "epoch-timing-return",
        WORKSHOP_STATUS_TIMING_CONFIRMED,
        "Adult writing client consumed the EPOCH timing confirmation into WORKSHOP delivery status.",
        "2026-06-03T21:01:00+09:00",
        1,
        "Return timing is confirmed; WORKSHOP can proceed with delivery.",
    };
    WorkshopTimingReturnReceipt conflict_timing_receipt = {
        "receipt-timing-return-002",
        "timing-consumption-002",
        "epoch-time-return-002",
        "req-cohort-001",
        "epoch-timing-return",
        WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED,
        "Adult test-prep cohort consumed an EPOCH availability conflict.",
        "2026-06-03T21:06:00+09:00",
        1,
        "Timing needs a new window; WORKSHOP is preparing a revised timing request.",
    };
    WorkshopTimingReturnReceipt unsafe_timing_receipt = {
        "receipt-timing-return-unsafe",
        "timing-consumption-001",
        "epoch-time-return-001",
        "req-time-001",
        "delivery-result",
        WORKSHOP_STATUS_TIMING_CONFIRMED,
        "Wrong receipt kind.",
        "2026-06-03T21:01:00+09:00",
        1,
        "Return timing is confirmed; WORKSHOP can proceed with delivery.",
    };
    WorkshopEpochRevisedCalendarTimingPayload revised_timing_payload = {
        "epoch-revised-timing-payload-001",
        "epoch-handoff-002",
        "req-cohort-001",
        "revised-13-month",
        "13 x 28 projection, conversion held",
        "1 common-year day and 2 leap-year days outside months.",
        "Gregorian/revised conversion remains gated until owner approval.",
        "EPOCH-REVISED-CONSTRAINT-PROJECTION",
        1,
        0,
        1,
        0,
        "EPOCH returned a customer-safe revised-calendar timing projection; WORKSHOP keeps service delivery ownership only.",
        "2026-06-04T00:45:00+09:00",
    };
    WorkshopEpochRevisedCalendarTimingConsumption revised_timing_consumption = {
        "epoch-revised-timing-consumption-001",
        "epoch-revised-timing-payload-001",
        "epoch-handoff-002",
        "req-cohort-001",
        WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED,
        1,
        1,
        0,
        "Use the returned timing display as schedule context only; send any timing change back to EPOCH.",
        "Revised-calendar timing context is available from EPOCH; WORKSHOP is preparing the service step without calendar ownership.",
        "2026-06-04T00:46:00+09:00",
    };
    WorkshopRevisedCalendarTimingReceipt revised_timing_receipt = {
        "receipt-epoch-revised-timing-001",
        "epoch-revised-timing-consumption-001",
        "epoch-revised-timing-payload-001",
        "req-cohort-001",
        "epoch-revised-calendar-timing",
        WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED,
        "WORKSHOP consumed EPOCH revised-calendar timing projection as service status only.",
        "2026-06-04T00:46:00+09:00",
        1,
        1,
        0,
        "Revised-calendar timing context is available from EPOCH; WORKSHOP is preparing the service step without calendar ownership.",
    };
    WorkshopEpochCapacityWaitlistPayload capacity_waitlist_payload = {
        "epoch-capacity-payload-001",
        "epoch-handoff-002",
        "req-cohort-001",
        "EPOCH-CAPACITY-001",
        "EPOCH-WAITLIST-001",
        "",
        "",
        "EPOCH-CAPACITY-RECEIPT-001",
        "waitlisted",
        1,
        0,
        1,
        0,
        "Preferred timing is full; EPOCH placed the request on the local waitlist.",
        "2026-06-03T23:15:00+09:00",
    };
    WorkshopEpochCapacityWaitlistPayload capacity_promoted_payload = {
        "epoch-capacity-payload-002",
        "epoch-handoff-002",
        "req-cohort-001",
        "EPOCH-CAPACITY-002",
        "EPOCH-WAITLIST-001",
        "EPOCH-HOLD-RELEASE-001",
        "EPOCH-PROMOTION-001",
        "EPOCH-CAPACITY-RECEIPT-002",
        "promoted",
        0,
        1,
        1,
        0,
        "A released local hold promoted the waitlisted request into a timing slot.",
        "2026-06-03T23:20:00+09:00",
    };
    WorkshopEpochCapacityWaitlistPayload unsafe_capacity_payload = {
        "epoch-capacity-payload-unsafe",
        "epoch-handoff-002",
        "req-cohort-001",
        "EPOCH-CAPACITY-001",
        "EPOCH-WAITLIST-001",
        "",
        "",
        "EPOCH-CAPACITY-RECEIPT-001",
        "waitlisted",
        1,
        0,
        1,
        1,
        "Preferred timing is full; EPOCH placed the request on the local waitlist.",
        "2026-06-03T23:15:00+09:00",
    };
    WorkshopEpochCapacityWaitlistConsumption capacity_waitlist_consumption = {
        "capacity-consumption-001",
        "epoch-capacity-payload-001",
        "epoch-handoff-002",
        "req-cohort-001",
        WORKSHOP_STATUS_TIMING_WAITLISTED,
        1,
        "Keep cohort planning in WORKSHOP and wait for EPOCH promotion status.",
        "Preferred cohort timing is waitlisted; WORKSHOP is holding delivery planning without taking calendar ownership.",
        "2026-06-03T23:16:00+09:00",
    };
    WorkshopEpochCapacityWaitlistConsumption capacity_promoted_consumption = {
        "capacity-consumption-002",
        "epoch-capacity-payload-002",
        "epoch-handoff-002",
        "req-cohort-001",
        WORKSHOP_STATUS_TIMING_PROMOTED,
        1,
        "Prepare customer-safe cohort delivery after the promoted timing is confirmed by EPOCH.",
        "Waitlisted timing was promoted; WORKSHOP can prepare the service plan around the returned slot.",
        "2026-06-03T23:21:00+09:00",
    };
    WorkshopEpochCapacityWaitlistConsumption unsafe_capacity_consumption = {
        "capacity-consumption-unsafe",
        "epoch-capacity-payload-001",
        "epoch-handoff-002",
        "req-cohort-001",
        WORKSHOP_STATUS_BLOCKED,
        1,
        "Blocked",
        "Preferred cohort timing is waitlisted.",
        "2026-06-03T23:16:00+09:00",
    };
    WorkshopCapacityWaitlistReceipt capacity_waitlist_receipt = {
        "receipt-capacity-waitlist-001",
        "capacity-consumption-001",
        "epoch-capacity-payload-001",
        "req-cohort-001",
        "epoch-capacity-waitlist",
        WORKSHOP_STATUS_TIMING_WAITLISTED,
        "WORKSHOP consumed an EPOCH capacity waitlist update as service planning status only.",
        "2026-06-03T23:16:00+09:00",
        1,
        "Preferred cohort timing is waitlisted; WORKSHOP is holding delivery planning without taking calendar ownership.",
    };
    WorkshopCapacityWaitlistReceipt capacity_promoted_receipt = {
        "receipt-capacity-waitlist-002",
        "capacity-consumption-002",
        "epoch-capacity-payload-002",
        "req-cohort-001",
        "epoch-capacity-waitlist",
        WORKSHOP_STATUS_TIMING_PROMOTED,
        "WORKSHOP consumed an EPOCH waitlist promotion as delivery planning status only.",
        "2026-06-03T23:21:00+09:00",
        1,
        "Waitlisted timing was promoted; WORKSHOP can prepare the service plan around the returned slot.",
    };
    WorkshopCapacityWaitlistReceipt unsafe_capacity_receipt = {
        "receipt-capacity-waitlist-unsafe",
        "capacity-consumption-001",
        "epoch-capacity-payload-001",
        "req-cohort-001",
        "delivery-result",
        WORKSHOP_STATUS_TIMING_WAITLISTED,
        "Wrong receipt kind.",
        "2026-06-03T23:16:00+09:00",
        1,
        "Preferred cohort timing is waitlisted.",
    };
    WorkshopEpochRecurringSeriesPayload recurring_payload = {
        "epoch-recurring-payload-001",
        "epoch-handoff-002",
        "req-cohort-001",
        "EPOCH-SERIES-001",
        "exception-action-required",
        "Weekly cohort review window",
        "2026-06-17 19:00 JST",
        1,
        1,
        0,
        "EPOCH returned a recurring service timing update; one instance needs a new window.",
        "2026-06-03T22:45:00+09:00",
    };
    WorkshopEpochRecurringSeriesPayload unsafe_recurring_payload = {
        "epoch-recurring-payload-unsafe",
        "epoch-handoff-002",
        "req-cohort-001",
        "EPOCH-SERIES-001",
        "exception-action-required",
        "Weekly cohort review window",
        "2026-06-17 19:00 JST",
        1,
        1,
        1,
        "EPOCH returned a recurring service timing update; one instance needs a new window.",
        "2026-06-03T22:45:00+09:00",
    };
    WorkshopEpochRecurringSeriesConsumption recurring_consumption = {
        "recurring-consumption-001",
        "epoch-recurring-payload-001",
        "epoch-handoff-002",
        "req-cohort-001",
        WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED,
        1,
        "Prepare a new WORKSHOP timing request for the affected recurring cohort instance.",
        "Recurring service timing has one exception; WORKSHOP is preparing the next timing action.",
        "2026-06-03T22:46:00+09:00",
    };
    WorkshopEpochRecurringSeriesConsumption unsafe_recurring_consumption = {
        "recurring-consumption-unsafe",
        "epoch-recurring-payload-001",
        "epoch-handoff-002",
        "req-cohort-001",
        WORKSHOP_STATUS_BLOCKED,
        1,
        "Blocked",
        "Recurring service timing has one exception; WORKSHOP is preparing the next timing action.",
        "2026-06-03T22:46:00+09:00",
    };
    WorkshopRecurringSeriesReceipt recurring_receipt = {
        "receipt-recurring-series-001",
        "recurring-consumption-001",
        "epoch-recurring-payload-001",
        "req-cohort-001",
        "epoch-recurring-series",
        WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED,
        "WORKSHOP consumed a customer-safe recurring-series update from EPOCH without taking calendar ownership.",
        "2026-06-03T22:46:00+09:00",
        1,
        "Recurring service timing has one exception; WORKSHOP is preparing the next timing action.",
    };
    WorkshopRecurringSeriesReceipt unsafe_recurring_receipt = {
        "receipt-recurring-series-unsafe",
        "recurring-consumption-001",
        "epoch-recurring-payload-001",
        "req-cohort-001",
        "delivery-result",
        WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED,
        "Wrong recurring receipt kind.",
        "2026-06-03T22:46:00+09:00",
        1,
        "Recurring service timing has one exception; WORKSHOP is preparing the next timing action.",
    };
    WorkshopMarketResearchRecord market_record = {
        "market-eiken-writing-001",
        "EIKEN writing correction competitor scan",
        "https://www.eiken.or.jp/eiken/en/grades/",
        "adult-test-prep",
        "Premium structured review can differentiate from generic low-cost correction.",
        82,
        0,
    };
    WorkshopCompetitorPriceAnchor price_anchor = {
        "price-anchor-premium-001",
        "Premium online test-prep provider",
        "private writing/test-prep support",
        16000,
        45000,
        "local-market-research",
        1,
    };
    WorkshopOfferExperiment offer_experiment = {
        "offer-experiment-submission-001",
        "Adult Submission Review Pack",
        "submission-review",
        WORKSHOP_STATUS_AVAILABLE,
        160000,
        480,
        92,
        1,
    };
    WorkshopLaborEstimate labor_estimate = {
        "labor-estimate-submission-001",
        "offer-experiment-submission-001",
        60,
        0,
        240,
        60,
        160000,
        180,
    };
    WorkshopRoiRecord roi_record = {
        "roi-submission-001",
        "offer-experiment-submission-001",
        160000,
        20000,
        480,
        7,
        1,
    };
    WorkshopRevenueAuditRecord revenue_audit = {
        "revenue-audit-submission-001",
        "offer-experiment-submission-001",
        "Submission review pack is low-labor and testable before live-heavy teaching.",
        WORKSHOP_STATUS_AVAILABLE,
        1,
        0,
    };
    WorkshopRevenueReceipt revenue_receipt = {
        "revenue-receipt-submission-001",
        "revenue-experiment",
        "offer-experiment-submission-001",
        "Revenue Receipts product module recorded a testable lower-labor offer.",
        WORKSHOP_STATUS_QUEUED,
        1,
    };
    WorkshopDeliveryLogEntry delivery_log = {
        "delivery-log-submission-001",
        "req-edu-submission-001",
        "submission-review-queued",
        "Delivery Log product module recorded a customer-safe submission workflow.",
        WORKSHOP_STATUS_TIMING_CONFIRMED,
        1,
        0,
    };
    WorkshopRevenueSearchQuery owner_revenue_query = {
        "revenue-search-001",
        "submission",
        "owner",
        1,
        0,
    };
    WorkshopRevenueSearchQuery customer_revenue_query = {
        "revenue-search-002",
        "submission",
        "client",
        0,
        1,
    };
    WorkshopRevenueSearchResult revenue_search_result = {
        "revenue-result-001",
        "revenue-search-002",
        "pkg-submission-4",
        "offer-template",
        "Four Submission Review Pack",
        1,
    };
    WorkshopOfferTemplate offer_template = {
        "offer-template-submission-001",
        "Four Submission Review Pack",
        "submission-review",
        "JPY 16,000 / 4 submissions",
        1,
        1,
    };
    WorkshopServicePage service_page = {
        "service-page-submission-001",
        "Adult Submission Review Pack",
        "Adults, university students, and professionals",
        "Structured correction, revision priorities, and next-action notes.",
        "pkg-submission-4",
        "offer-template-submission-001",
        "EPOCH-SCHEDULE-TEMPLATE-001",
        "crm-pipeline-submission-review",
        "async-submission-review",
        "JPY 16,000 / 4 submissions",
        "submission-review-request",
        "ready",
        "ai-neutral",
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        "Request a submission review",
        "Submission review is available as an async-first service path.",
    };
    WorkshopMaterialAsset material_asset = {
        "material-asset-eiken-writing-rubric-001",
        "Adult EIKEN Writing Review Rubric",
        "rubric",
        "worksheet-rubric",
        "offer-experiment-submission-001",
        "service-page-submission-001",
        4,
        90,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "high",
        "ai-neutral",
        "A reusable review rubric supports consistent writing feedback.",
        "Keep the rubric App-owned and require human review before customer-facing use.",
    };
    WorkshopMarketingChannelExperiment marketing_channel = {
        "marketing-channel-direct-referral-001",
        "direct-referral",
        "service-page-submission-001",
        "adult-test-prep",
        "ready-to-list",
        6,
        35,
        96000,
        12,
        1,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        "Prepare direct referral copy that sells structure and turnaround.",
    };
    WorkshopOfferLaunchReadiness offer_launch_readiness = {
        "offer-launch-readiness-submission-001",
        "service-page-submission-001",
        "pkg-submission-4",
        "offer-experiment-submission-001",
        "marketing-channel-direct-referral-001",
        "submission-review",
        "ready-for-customer-safe-listing",
        3,
        160000,
        480,
        94,
        91,
        88,
        86,
        90,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        "List the customer-safe adult submission review path and route under-19 requests through compatibility review.",
    };
    WorkshopOfferLaunchReadinessReceipt offer_launch_receipt = {
        "offer-launch-receipt-submission-001",
        "service-page-submission-001",
        "pkg-submission-4",
        "submission-review",
        "offer-launch-readiness",
        "customer-safe-offer-launch-ready",
        "Launch receipt confirms a requestable adult submission review offer without exposing internal launch scoring.",
        "Adult submission review is ready for customer intake; EPOCH is used only for timing requests.",
        "Request the submission review path; under-19 requests require compatibility review.",
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
    };
    WorkshopOfferLaunchIntakeAction offer_launch_intake_action = {
        "offer-launch-intake-action-submission-001",
        "offer-launch-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-intake-action",
        "Launch Offer Prospect",
        "adult",
        "submission-ready",
        "offer-launch-intake-queued",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "Customer-safe launch offer intake is queued inside WORKSHOP; EPOCH remains timing-provider-only.",
        "Review the launch offer intake inside WORKSHOP and export only the customer-safe intake receipt.",
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchIntakeReceipt offer_launch_intake_receipt = {
        "offer-launch-intake-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-intake",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-intake-queued",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "Your request is queued for the adult submission review offer. EPOCH is used only for timing requests.",
        "Wait for WORKSHOP review. EPOCH timing is requested only if an appointment, deadline, or service window is needed.",
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchActivation offer_launch_activation = {
        "offer-launch-activation-submission-001",
        "offer-launch-intake-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-activation",
        "Launch Offer Prospect",
        "offer-launch-activation-ready",
        "adult-service-delivery-setup",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "Customer-safe launch offer activation is ready inside WORKSHOP; EPOCH remains timing-provider-only.",
        "Prepare delivery workspace inside WORKSHOP and export only the customer-safe activation receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchActivationReceipt offer_launch_activation_receipt = {
        "offer-launch-activation-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-activation",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-activation-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-delivery-setup",
        "Your WORKSHOP offer path is accepted for service setup. EPOCH is used only for timing requests.",
        "WORKSHOP will prepare service setup without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchServiceSetup offer_launch_service_setup = {
        "offer-launch-service-setup-submission-001",
        "offer-launch-activation-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-service-setup",
        "Launch Offer Prospect",
        "offer-launch-service-setup-ready",
        "adult-service-delivery-workspace",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "Customer-safe service setup is ready inside WORKSHOP; EPOCH remains timing-provider-only.",
        "Create the delivery workspace inside WORKSHOP and export only the customer-safe setup receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchServiceSetupReceipt offer_launch_service_setup_receipt = {
        "offer-launch-service-setup-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-service-setup",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-service-setup-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-delivery-workspace",
        "Your WORKSHOP service setup is prepared. EPOCH is used only for timing requests.",
        "WORKSHOP will continue delivery setup without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryWorkspace offer_launch_delivery_workspace = {
        "offer-launch-delivery-workspace-submission-001",
        "offer-launch-service-setup-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-workspace",
        "Launch Offer Prospect",
        "offer-launch-delivery-workspace-ready",
        "adult-service-delivery-workspace-active",
        "adult-service-delivery-workspace",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "Customer-safe delivery workspace is ready inside WORKSHOP; EPOCH remains timing-provider-only.",
        "Assign the reusable material path, delivery checklist, and review queue inside WORKSHOP before exporting only the customer-safe workspace receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryWorkspaceReceipt offer_launch_delivery_workspace_receipt = {
        "offer-launch-delivery-workspace-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-workspace",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-delivery-workspace-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-delivery-workspace-active",
        "Your WORKSHOP delivery workspace is ready. EPOCH is used only for timing requests.",
        "WORKSHOP will continue delivery inside the prepared workspace without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryKickoff offer_launch_delivery_kickoff = {
        "offer-launch-delivery-kickoff-submission-001",
        "offer-launch-delivery-workspace-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-kickoff",
        "Launch Offer Prospect",
        "offer-launch-delivery-kickoff-ready",
        "adult-service-delivery-kickoff-active",
        "adult-service-delivery-workspace-active",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "Customer-safe delivery kickoff is ready inside WORKSHOP; EPOCH remains timing-provider-only.",
        "Start the first delivery milestone and export only the customer-safe kickoff receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryKickoffReceipt offer_launch_delivery_kickoff_receipt = {
        "offer-launch-delivery-kickoff-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-kickoff",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-delivery-kickoff-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-delivery-kickoff-active",
        "Your WORKSHOP delivery kickoff is ready. EPOCH is used only for timing requests.",
        "WORKSHOP will begin the first delivery milestone without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryMilestone offer_launch_delivery_milestone = {
        "offer-launch-delivery-milestone-submission-001",
        "offer-launch-delivery-kickoff-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-milestone",
        "Launch Offer Prospect",
        "offer-launch-delivery-milestone-active",
        "adult-service-first-delivery-milestone-active",
        "adult-service-delivery-kickoff-active",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "Customer-safe first delivery milestone is active inside WORKSHOP; EPOCH remains timing-provider-only.",
        "Complete the first delivery milestone review and export only the customer-safe milestone receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryMilestoneReceipt offer_launch_delivery_milestone_receipt = {
        "offer-launch-delivery-milestone-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-milestone",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-delivery-milestone-active",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-first-delivery-milestone-active",
        "Your first WORKSHOP delivery milestone is active. EPOCH is used only for timing requests.",
        "WORKSHOP will continue the first milestone and ask EPOCH only if deadline, appointment, or reminder timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryOutcome offer_launch_delivery_outcome = {
        "offer-launch-delivery-outcome-submission-001",
        "offer-launch-delivery-milestone-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-outcome",
        "Launch Offer Prospect",
        "offer-launch-delivery-outcome-ready",
        "adult-service-launch-delivery-outcome-ready",
        "adult-service-first-delivery-milestone-active",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "Customer-safe delivery outcome is ready inside WORKSHOP; EPOCH remains timing-provider-only.",
        "Review outcome evidence and export only the customer-safe delivery outcome receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryOutcomeReceipt offer_launch_delivery_outcome_receipt = {
        "offer-launch-delivery-outcome-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-outcome",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-delivery-outcome-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-launch-delivery-outcome-ready",
        "Your first WORKSHOP delivery outcome is ready. EPOCH is used only for timing requests.",
        "WORKSHOP will review follow-up or renewal options without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryFollowUp offer_launch_delivery_follow_up = {
        "offer-launch-delivery-follow-up-submission-001",
        "offer-launch-delivery-outcome-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-follow-up",
        "Launch Offer Prospect",
        "offer-launch-delivery-follow-up-ready",
        "adult-service-launch-delivery-follow-up-ready",
        "adult-service-launch-delivery-outcome-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "Customer-safe follow-up, renewal, and referral review is ready inside WORKSHOP; EPOCH remains timing-provider-only.",
        "Review follow-up options and export only the customer-safe delivery follow-up receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryFollowUpReceipt offer_launch_delivery_follow_up_receipt = {
        "offer-launch-delivery-follow-up-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-follow-up",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-delivery-follow-up-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-launch-delivery-follow-up-ready",
        "Your WORKSHOP follow-up options are ready. EPOCH is used only for timing requests.",
        "WORKSHOP will review renewal or referral options without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryGrowthPlan offer_launch_delivery_growth_plan = {
        "offer-launch-delivery-growth-plan-submission-001",
        "offer-launch-delivery-follow-up-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-growth-plan",
        "Launch Offer Prospect",
        "offer-launch-delivery-growth-plan-ready",
        "adult-service-launch-delivery-growth-plan-ready",
        "adult-service-launch-delivery-follow-up-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "Customer-safe repeat-service, renewal, and referral planning is ready inside WORKSHOP; EPOCH remains timing-provider-only.",
        "Choose the next repeat-service, renewal, or referral motion and export only the customer-safe delivery growth-plan receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryGrowthPlanReceipt offer_launch_delivery_growth_plan_receipt = {
        "offer-launch-delivery-growth-plan-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-growth-plan",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-delivery-growth-plan-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-launch-delivery-growth-plan-ready",
        "Your WORKSHOP repeat-service, renewal, and referral options are ready for review. EPOCH is used only for timing requests.",
        "WORKSHOP will review the next repeat-service, renewal, or referral motion without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryGrowthPlanAcceptance offer_launch_delivery_growth_plan_acceptance = {
        "offer-launch-delivery-growth-plan-acceptance-submission-001",
        "offer-launch-delivery-growth-plan-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-growth-plan-acceptance",
        "Launch Offer Prospect",
        "offer-launch-delivery-growth-plan-acceptance-ready",
        "adult-service-launch-delivery-growth-plan-accepted",
        "adult-service-launch-delivery-growth-plan-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "Customer-safe repeat-service, renewal, and referral acceptance is ready inside WORKSHOP; EPOCH remains timing-provider-only.",
        "Confirm the accepted repeat-service, renewal, or referral motion and export only the customer-safe delivery growth-plan acceptance receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceipt offer_launch_delivery_growth_plan_acceptance_receipt = {
        "offer-launch-delivery-growth-plan-acceptance-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-growth-plan-acceptance",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-delivery-growth-plan-acceptance-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-launch-delivery-growth-plan-accepted",
        "Your WORKSHOP repeat-service, renewal, or referral path has been accepted for the next delivery step. EPOCH is used only for timing requests.",
        "WORKSHOP will prepare the accepted next service motion without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionRequest offer_launch_delivery_expansion_request = {
        "offer-launch-delivery-expansion-request-submission-001",
        "offer-launch-delivery-growth-plan-acceptance-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-request",
        "Launch Offer Prospect",
        "offer-launch-delivery-expansion-request-ready",
        "adult-service-launch-delivery-expansion-request-ready",
        "adult-service-launch-delivery-growth-plan-accepted",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "Customer-safe repeat-service, renewal, or referral request is ready inside WORKSHOP; EPOCH remains timing-provider-only.",
        "Prepare the next-service delivery workspace or intake and export only the customer-safe delivery expansion-request receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionRequestReceipt offer_launch_delivery_expansion_request_receipt = {
        "offer-launch-delivery-expansion-request-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-request",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-delivery-expansion-request-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-launch-delivery-expansion-request-ready",
        "Your WORKSHOP repeat-service, renewal, or referral request is ready for the next service step. EPOCH is used only for timing requests.",
        "WORKSHOP will prepare the next service step without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionWorkspace offer_launch_delivery_expansion_workspace = {
        "offer-launch-delivery-expansion-workspace-submission-001",
        "offer-launch-delivery-expansion-request-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-workspace",
        "Launch Offer Prospect",
        "offer-launch-delivery-expansion-workspace-ready",
        "adult-service-launch-delivery-expansion-workspace-ready",
        "adult-service-launch-delivery-expansion-request-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "WORKSHOP prepared the next-service expansion workspace; EPOCH remains timing-provider-only.",
        "Assign the next-service delivery plan inside WORKSHOP, then export only the customer-safe expansion workspace receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt offer_launch_delivery_expansion_workspace_receipt = {
        "offer-launch-delivery-expansion-workspace-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-workspace",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-delivery-expansion-workspace-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-launch-delivery-expansion-workspace-ready",
        "Your WORKSHOP next-service workspace is ready. EPOCH is used only if timing is needed.",
        "WORKSHOP will continue the next service step inside the expansion workspace without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionKickoff offer_launch_delivery_expansion_kickoff = {
        "offer-launch-delivery-expansion-kickoff-submission-001",
        "offer-launch-delivery-expansion-workspace-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-kickoff",
        "Launch Offer Prospect",
        "offer-launch-delivery-expansion-kickoff-ready",
        "adult-service-launch-delivery-expansion-kickoff-active",
        "adult-service-launch-delivery-expansion-workspace-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "WORKSHOP moved the next-service expansion workspace into kickoff; EPOCH remains timing-provider-only.",
        "Begin the next-service delivery kickoff inside WORKSHOP, then export only the customer-safe expansion kickoff receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionKickoffReceipt offer_launch_delivery_expansion_kickoff_receipt = {
        "offer-launch-delivery-expansion-kickoff-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-kickoff",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-delivery-expansion-kickoff-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-launch-delivery-expansion-kickoff-active",
        "Your WORKSHOP next-service kickoff is ready. EPOCH is used only if timing is needed.",
        "WORKSHOP will begin the next service milestone without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionMilestone offer_launch_delivery_expansion_milestone = {
        "offer-launch-delivery-expansion-milestone-submission-001",
        "offer-launch-delivery-expansion-kickoff-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-milestone",
        "Launch Offer Prospect",
        "offer-launch-delivery-expansion-milestone-active",
        "adult-service-launch-delivery-expansion-milestone-active",
        "adult-service-launch-delivery-expansion-kickoff-active",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "WORKSHOP started the next-service delivery milestone; EPOCH remains timing-provider-only.",
        "Complete the next-service delivery milestone review and export only the customer-safe expansion milestone receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt offer_launch_delivery_expansion_milestone_receipt = {
        "offer-launch-delivery-expansion-milestone-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-milestone",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-delivery-expansion-milestone-active",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-launch-delivery-expansion-milestone-active",
        "Your WORKSHOP next-service delivery milestone is active. EPOCH is used only if timing is needed.",
        "WORKSHOP will continue the next service milestone without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionOutcome offer_launch_delivery_expansion_outcome = {
        "offer-launch-delivery-expansion-outcome-submission-001",
        "offer-launch-delivery-expansion-milestone-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-outcome",
        "Launch Offer Prospect",
        "offer-launch-delivery-expansion-outcome-ready",
        "adult-service-launch-delivery-expansion-outcome-ready",
        "adult-service-launch-delivery-expansion-milestone-active",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "WORKSHOP completed the next-service delivery outcome; EPOCH remains timing-provider-only.",
        "Review expansion outcome evidence and export only the customer-safe expansion outcome receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt offer_launch_delivery_expansion_outcome_receipt = {
        "offer-launch-delivery-expansion-outcome-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-outcome",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-delivery-expansion-outcome-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-launch-delivery-expansion-outcome-ready",
        "Your WORKSHOP next-service delivery outcome is ready. EPOCH is used only if timing is needed.",
        "WORKSHOP will review the next service follow-up, renewal, or referral path without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionFollowUp offer_launch_delivery_expansion_follow_up = {
        "offer-launch-delivery-expansion-follow-up-submission-001",
        "offer-launch-delivery-expansion-outcome-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-follow-up",
        "Launch Offer Prospect",
        "offer-launch-delivery-expansion-follow-up-ready",
        "adult-service-launch-delivery-expansion-follow-up-ready",
        "adult-service-launch-delivery-expansion-outcome-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "WORKSHOP prepared next-service follow-up, renewal, and referral review; EPOCH remains timing-provider-only.",
        "Review the repeat-service, renewal, and referral path and export only the customer-safe expansion follow-up receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionFollowUpReceipt offer_launch_delivery_expansion_follow_up_receipt = {
        "offer-launch-delivery-expansion-follow-up-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-follow-up",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-delivery-expansion-follow-up-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-launch-delivery-expansion-follow-up-ready",
        "Your WORKSHOP next-service follow-up options are ready. EPOCH is used only if timing is needed.",
        "WORKSHOP will review repeat-service, renewal, or referral options without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionGrowthPlan offer_launch_delivery_expansion_growth_plan = {
        "offer-launch-delivery-expansion-growth-plan-submission-001",
        "offer-launch-delivery-expansion-follow-up-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-growth-plan",
        "Launch Offer Prospect",
        "offer-launch-delivery-expansion-growth-plan-ready",
        "adult-service-launch-delivery-expansion-growth-plan-ready",
        "adult-service-launch-delivery-expansion-follow-up-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "WORKSHOP prepared next-service repeat-service, renewal, and referral growth planning. EPOCH remains timing-provider-only.",
        "Choose the repeat-service, renewal, or referral motion and export only the customer-safe expansion growth-plan receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt offer_launch_delivery_expansion_growth_plan_receipt = {
        "offer-launch-delivery-expansion-growth-plan-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-growth-plan",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-delivery-expansion-growth-plan-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-launch-delivery-expansion-growth-plan-ready",
        "Your WORKSHOP next-service growth options are ready. EPOCH is used only if timing is needed.",
        "WORKSHOP will review the next repeat-service, renewal, or referral motion without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptance offer_launch_delivery_expansion_growth_plan_acceptance = {
        "offer-launch-delivery-expansion-growth-plan-acceptance-submission-001",
        "offer-launch-delivery-expansion-growth-plan-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-growth-plan-acceptance",
        "Launch Offer Prospect",
        "offer-launch-delivery-expansion-growth-plan-acceptance-ready",
        "adult-service-launch-delivery-expansion-growth-plan-accepted",
        "adult-service-launch-delivery-expansion-growth-plan-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "WORKSHOP accepted the next-service repeat-service, renewal, or referral motion. EPOCH remains timing-provider-only.",
        "Confirm the accepted next-service motion and export only the customer-safe expansion growth-plan acceptance receipt.",
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt offer_launch_delivery_expansion_growth_plan_acceptance_receipt = {
        "offer-launch-delivery-expansion-growth-plan-acceptance-receipt-submission-001",
        "service-request-webportal-submission-001",
        "submission-review",
        "pkg-submission-4",
        "offer-launch-delivery-expansion-growth-plan-acceptance",
        "Launch Offer Prospect",
        "customer-safe-offer-launch-delivery-expansion-growth-plan-acceptance-ready",
        "Adult Async Submission Review",
        "JPY 16,000 / 4 submissions",
        "adult-service-launch-delivery-expansion-growth-plan-accepted",
        "Your WORKSHOP next-service repeat-service, renewal, or referral motion has been accepted. EPOCH is used only if timing is needed.",
        "WORKSHOP will prepare the accepted next-service motion without adding calendar load unless timing becomes necessary.",
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        "ai-neutral",
        1,
        1,
        0,
    };
    WorkshopAraWorkPacket ara_work_packet = {
        "ara-work-packet-market-001",
        "market-research",
        "offer-experiment-submission-001",
        "Competitor scan and offer-positioning notes",
        1,
        0,
    };
    WorkshopOwnerTimeBudget owner_time_budget = {
        "owner-time-budget-week-001",
        900,
        720,
        240,
        0,
        "Prioritize submission packs, reusable materials, and ARA-prepared research before adding live classes.",
    };
    WorkshopLocalWorktreeStatus local_worktree = {
        "workshop-worktree-integrator",
        "C:\\KHYRON\\apps\\_worktrees\\WORKSHOP\\integrator",
        "local/workshop-integrator",
        "local-head-pending",
        0,
        0,
    };

    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_AVAILABLE), "available") == 0);
    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_FIT_REVIEW), "fit-review") == 0);
    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_EPOCH_TIME_REQUESTED), "epoch-time-requested") == 0);
    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_COMPATIBILITY_REVIEW), "compatibility-review") == 0);
    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_TIMING_CONFIRMED), "timing-confirmed") == 0);
    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED), "timing-reschedule-required") == 0);
    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_RECURRING_SERIES_ACTIVE), "recurring-series-active") == 0);
    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED), "recurring-exception-action-required") == 0);
    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_TIMING_WAITLISTED), "timing-waitlisted") == 0);
    assert(strcmp(workshop_status_label(WORKSHOP_STATUS_TIMING_PROMOTED), "timing-promoted") == 0);
    assert(workshop_status_from_label("materials-received", &parsed_status) == 1);
    assert(parsed_status == WORKSHOP_STATUS_MATERIALS_RECEIVED);
    assert(workshop_status_from_label("compatibility-review", &parsed_status) == 1);
    assert(parsed_status == WORKSHOP_STATUS_COMPATIBILITY_REVIEW);
    assert(workshop_status_from_label("timing-confirmed", &parsed_status) == 1);
    assert(parsed_status == WORKSHOP_STATUS_TIMING_CONFIRMED);
    assert(workshop_status_from_label("recurring-exception-action-required", &parsed_status) == 1);
    assert(parsed_status == WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED);
    assert(workshop_status_from_label("timing-waitlisted", &parsed_status) == 1);
    assert(parsed_status == WORKSHOP_STATUS_TIMING_WAITLISTED);
    assert(workshop_status_from_label("timing-promoted", &parsed_status) == 1);
    assert(parsed_status == WORKSHOP_STATUS_TIMING_PROMOTED);
    assert(workshop_status_from_label("not-real", &parsed_status) == 0);
    assert(workshop_status_is_terminal(WORKSHOP_STATUS_COMPLETE) == 1);
    assert(workshop_status_is_terminal(WORKSHOP_STATUS_CANCELED) == 1);
    assert(workshop_status_is_terminal(WORKSHOP_STATUS_BLOCKED) == 0);
    assert(workshop_status_needs_operator_attention(WORKSHOP_STATUS_FIT_REVIEW) == 1);
    assert(workshop_status_needs_operator_attention(WORKSHOP_STATUS_COMPATIBILITY_REVIEW) == 1);
    assert(workshop_status_needs_operator_attention(WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED) == 1);
    assert(workshop_status_needs_operator_attention(WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED) == 1);
    assert(workshop_status_needs_operator_attention(WORKSHOP_STATUS_TIMING_WAITLISTED) == 1);
    assert(workshop_status_needs_operator_attention(WORKSHOP_STATUS_TIMING_CONFIRMED) == 0);
    assert(workshop_status_needs_operator_attention(WORKSHOP_STATUS_RECURRING_SERIES_ACTIVE) == 0);
    assert(workshop_status_needs_operator_attention(WORKSHOP_STATUS_TIMING_PROMOTED) == 0);
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
    assert(workshop_cohort_capacity_plan_is_ready(&cohort_capacity_plan) == 1);
    assert(workshop_subscription_plan_is_low_labor_ready(&subscription_plan) == 1);
    assert(workshop_subscription_plan_is_low_labor_ready(&live_time_subscription_plan) == 0);
    subscription_plan.payment_live_enabled = 1;
    assert(workshop_subscription_plan_is_low_labor_ready(&subscription_plan) == 0);
    subscription_plan.payment_live_enabled = 0;
    subscription_plan.provider_go_live_requested = 1;
    assert(workshop_subscription_plan_is_low_labor_ready(&subscription_plan) == 0);
    subscription_plan.provider_go_live_requested = 0;
    subscription_plan.monitor_workflow_exposed = 1;
    assert(workshop_subscription_plan_is_low_labor_ready(&subscription_plan) == 0);
    subscription_plan.monitor_workflow_exposed = 0;
    subscription_plan.ai_forward_copy = 1;
    assert(workshop_subscription_plan_is_low_labor_ready(&subscription_plan) == 0);
    subscription_plan.ai_forward_copy = 0;
    subscription_plan.japan_copy_mode = "ai-forward";
    assert(workshop_subscription_plan_is_low_labor_ready(&subscription_plan) == 0);
    subscription_plan.japan_copy_mode = "ai-neutral";
    assert(workshop_cohort_planning_receipt_is_customer_safe(&cohort_planning_receipt) == 1);
    assert(workshop_cohort_enrollment_is_customer_safe(&cohort_enrollment) == 1);
    assert(workshop_subscription_lifecycle_is_active(&subscription_lifecycle) == 1);
    assert(workshop_subscription_lifecycle_is_active(&live_payment_lifecycle) == 0);
    assert(workshop_subscription_lifecycle_receipt_is_customer_safe(&subscription_lifecycle_receipt) == 1);
    assert(workshop_cohort_outcome_report_is_customer_safe(&cohort_outcome_report) == 1);
    assert(workshop_subscription_renewal_report_is_ready(&subscription_renewal_report) == 1);
    assert(workshop_cohort_progress_status_event_is_customer_safe(&cohort_progress_event) == 1);
    assert(workshop_outcome_renewal_receipt_is_customer_safe(&outcome_renewal_receipt) == 1);
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
    assert(workshop_revenue_outcome_is_reportable(&reportable_outcome) == 1);
    assert(workshop_revenue_outcome_is_reportable(&gated_outcome) == 0);
    assert(workshop_delivery_result_receipt_is_customer_safe(&result_receipt) == 1);
    assert(workshop_delivery_result_receipt_is_customer_safe(&unsafe_result_receipt) == 0);
    assert(workshop_ara_review_completion_is_ready(&open_review_completion) == 1);
    assert(workshop_ara_review_completion_is_ready(&approved_review_completion) == 1);
    assert(workshop_ara_review_completion_is_ready(&unsafe_review_completion) == 0);
    assert(workshop_customer_account_is_active(&active_account) == 1);
    assert(workshop_customer_account_is_active(&unsafe_account) == 0);
    assert(workshop_customer_account_history_is_customer_safe(&account_history) == 1);
    assert(workshop_customer_account_history_is_customer_safe(&unsafe_history) == 0);
    assert(workshop_renewal_opportunity_is_ready(&ready_renewal) == 1);
    assert(workshop_renewal_opportunity_is_ready(&unready_renewal) == 0);
    assert(workshop_customer_follow_up_is_customer_safe(&follow_up) == 1);
    assert(workshop_customer_follow_up_is_customer_safe(&unsafe_follow_up) == 0);
    assert(workshop_retention_health_is_actionable(&actionable_retention) == 1);
    assert(workshop_retention_health_is_actionable(&waiting_retention) == 0);
    assert(workshop_referral_opportunity_is_ready(&ready_referral) == 1);
    assert(workshop_referral_opportunity_is_ready(&unsafe_referral) == 0);
    assert(workshop_account_growth_plan_is_ready(&ready_growth_plan) == 1);
    assert(workshop_account_growth_plan_is_ready(&unsafe_growth_plan) == 0);
    assert(workshop_growth_follow_up_receipt_is_customer_safe(&growth_receipt) == 1);
    assert(workshop_growth_follow_up_receipt_is_customer_safe(&unsafe_growth_receipt) == 0);
    assert(workshop_referral_conversion_is_ready(&ready_conversion) == 1);
    assert(workshop_referral_conversion_is_ready(&unsafe_conversion) == 0);
    assert(workshop_growth_plan_acceptance_is_ready(&ready_acceptance) == 1);
    assert(workshop_growth_plan_acceptance_is_ready(&unsafe_acceptance) == 0);
    assert(workshop_expansion_service_request_is_ready(&ready_expansion) == 1);
    assert(workshop_expansion_service_request_is_ready(&unsafe_expansion) == 0);
    assert(workshop_conversion_status_event_is_customer_safe(&conversion_status_event) == 1);
    assert(workshop_conversion_status_event_is_customer_safe(&unsafe_conversion_status_event) == 0);
    assert(workshop_conversion_receipt_is_customer_safe(&conversion_receipt) == 1);
    assert(workshop_conversion_receipt_is_customer_safe(&unsafe_conversion_receipt) == 0);
    assert(workshop_epoch_handoff_is_customer_safe(&handoff) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_INTAKE_READY, WORKSHOP_STATUS_COMPATIBILITY_REVIEW) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_COMPATIBILITY_REVIEW, WORKSHOP_STATUS_QUEUED) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_EPOCH_TIME_REQUESTED, WORKSHOP_STATUS_TIMING_CONFIRMED) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_EPOCH_TIME_REQUESTED, WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_EPOCH_TIME_REQUESTED, WORKSHOP_STATUS_TIMING_WAITLISTED) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_TIMING_WAITLISTED, WORKSHOP_STATUS_TIMING_PROMOTED) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_TIMING_PROMOTED, WORKSHOP_STATUS_TIMING_CONFIRMED) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_TIMING_CONFIRMED, WORKSHOP_STATUS_IN_PROGRESS) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_TIMING_CONFIRMED, WORKSHOP_STATUS_RECURRING_SERIES_ACTIVE) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED, WORKSHOP_STATUS_EPOCH_TIME_REQUESTED) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_RECURRING_SERIES_ACTIVE, WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED, WORKSHOP_STATUS_EPOCH_TIME_REQUESTED) == 1);
    assert(workshop_delivery_transition_is_allowed(WORKSHOP_STATUS_COMPLETE, WORKSHOP_STATUS_IN_PROGRESS) == 0);
    assert(workshop_delivery_lifecycle_is_valid(&lifecycle) == 1);
    assert(workshop_customer_safe_status_event_is_valid(&event) == 1);
    assert(workshop_epoch_bridge_payload_is_ready(&bridge_payload) == 1);
    assert(workshop_epoch_timing_return_payload_is_customer_safe(&timing_return_payload) == 1);
    assert(workshop_epoch_timing_return_payload_is_customer_safe(&conflict_return_payload) == 1);
    assert(workshop_epoch_timing_return_payload_is_customer_safe(&unsafe_timing_return_payload) == 0);
    assert(workshop_epoch_timing_return_consumption_is_customer_safe(&timing_consumption) == 1);
    assert(workshop_epoch_timing_return_consumption_is_customer_safe(&conflict_consumption) == 1);
    assert(workshop_epoch_timing_return_consumption_is_customer_safe(&unsafe_timing_consumption) == 0);
    assert(workshop_timing_return_receipt_is_customer_safe(&timing_receipt) == 1);
    assert(workshop_timing_return_receipt_is_customer_safe(&conflict_timing_receipt) == 1);
    assert(workshop_timing_return_receipt_is_customer_safe(&unsafe_timing_receipt) == 0);
    assert(workshop_epoch_revised_calendar_timing_payload_is_customer_safe(&revised_timing_payload) == 1);
    assert(workshop_epoch_revised_calendar_timing_consumption_is_customer_safe(&revised_timing_consumption) == 1);
    assert(workshop_revised_calendar_timing_receipt_is_customer_safe(&revised_timing_receipt) == 1);
    assert(workshop_epoch_capacity_waitlist_payload_is_customer_safe(&capacity_waitlist_payload) == 1);
    assert(workshop_epoch_capacity_waitlist_payload_is_customer_safe(&capacity_promoted_payload) == 1);
    assert(workshop_epoch_capacity_waitlist_payload_is_customer_safe(&unsafe_capacity_payload) == 0);
    assert(workshop_epoch_capacity_waitlist_consumption_is_customer_safe(&capacity_waitlist_consumption) == 1);
    assert(workshop_epoch_capacity_waitlist_consumption_is_customer_safe(&capacity_promoted_consumption) == 1);
    assert(workshop_epoch_capacity_waitlist_consumption_is_customer_safe(&unsafe_capacity_consumption) == 0);
    assert(workshop_capacity_waitlist_receipt_is_customer_safe(&capacity_waitlist_receipt) == 1);
    assert(workshop_capacity_waitlist_receipt_is_customer_safe(&capacity_promoted_receipt) == 1);
    assert(workshop_capacity_waitlist_receipt_is_customer_safe(&unsafe_capacity_receipt) == 0);
    assert(workshop_epoch_recurring_series_payload_is_customer_safe(&recurring_payload) == 1);
    assert(workshop_epoch_recurring_series_payload_is_customer_safe(&unsafe_recurring_payload) == 0);
    assert(workshop_epoch_recurring_series_consumption_is_customer_safe(&recurring_consumption) == 1);
    assert(workshop_epoch_recurring_series_consumption_is_customer_safe(&unsafe_recurring_consumption) == 0);
    assert(workshop_recurring_series_receipt_is_customer_safe(&recurring_receipt) == 1);
    assert(workshop_recurring_series_receipt_is_customer_safe(&unsafe_recurring_receipt) == 0);
    assert(workshop_market_research_record_is_evidence_ready(&market_record) == 1);
    assert(workshop_competitor_price_anchor_is_ready(&price_anchor) == 1);
    assert(workshop_offer_experiment_is_testable(&offer_experiment) == 1);
    assert(workshop_labor_estimate_is_low_labor(&labor_estimate) == 1);
    assert(workshop_roi_record_is_test_ready(&roi_record) == 1);
    assert(workshop_revenue_audit_record_is_actionable(&revenue_audit) == 1);
    assert(workshop_revenue_receipt_is_customer_safe(&revenue_receipt) == 1);
    assert(workshop_delivery_log_entry_is_product_log(&delivery_log) == 1);
    assert(workshop_revenue_search_query_respects_role(&owner_revenue_query) == 1);
    assert(workshop_revenue_search_query_respects_role(&customer_revenue_query) == 1);
    assert(workshop_revenue_search_result_is_customer_safe(&revenue_search_result) == 1);
    assert(workshop_offer_template_is_ready(&offer_template) == 1);
    assert(workshop_service_page_is_customer_safe(&service_page) == 1);
    service_page.related_epoch_schedule_template_id = "epoch-template-submission-deadline";
    assert(workshop_service_page_is_customer_safe(&service_page) == 0);
    service_page.related_epoch_schedule_template_id = "EPOCH-SCHEDULE-TEMPLATE-001";
    service_page.monitor_workflow_exposed = 1;
    assert(workshop_service_page_is_customer_safe(&service_page) == 0);
    service_page.monitor_workflow_exposed = 0;
    service_page.payment_live_enabled = 1;
    assert(workshop_service_page_is_customer_safe(&service_page) == 0);
    service_page.payment_live_enabled = 0;
    assert(workshop_material_asset_requires_human_review(&material_asset) == 1);
    material_asset.webportal_export_ready = 1;
    assert(workshop_material_asset_requires_human_review(&material_asset) == 0);
    material_asset.webportal_export_ready = 0;
    material_asset.human_review_required = 0;
    assert(workshop_material_asset_requires_human_review(&material_asset) == 0);
    material_asset.human_review_required = 1;
    material_asset.ai_forward_copy = 1;
    assert(workshop_material_asset_requires_human_review(&material_asset) == 0);
    material_asset.ai_forward_copy = 0;
    material_asset.japan_copy_mode = "ai-forward";
    assert(workshop_material_asset_requires_human_review(&material_asset) == 0);
    material_asset.japan_copy_mode = "ai-neutral";
    assert(workshop_marketing_channel_experiment_is_testable(&marketing_channel) == 1);
    marketing_channel.webportal_export_ready = 1;
    assert(workshop_marketing_channel_experiment_is_testable(&marketing_channel) == 0);
    marketing_channel.webportal_export_ready = 0;
    marketing_channel.payment_live_enabled = 1;
    assert(workshop_marketing_channel_experiment_is_testable(&marketing_channel) == 0);
    marketing_channel.payment_live_enabled = 0;
    marketing_channel.ai_forward_copy = 1;
    assert(workshop_marketing_channel_experiment_is_testable(&marketing_channel) == 0);
    marketing_channel.ai_forward_copy = 0;
    marketing_channel.japan_copy_mode = "ai-forward";
    assert(workshop_marketing_channel_experiment_is_testable(&marketing_channel) == 0);
    marketing_channel.japan_copy_mode = "ai-neutral";
    assert(workshop_offer_launch_readiness_is_internal(&offer_launch_readiness) == 1);
    offer_launch_readiness.webportal_export_ready = 1;
    assert(workshop_offer_launch_readiness_is_internal(&offer_launch_readiness) == 0);
    offer_launch_readiness.webportal_export_ready = 0;
    assert(workshop_offer_launch_readiness_receipt_is_customer_safe(&offer_launch_receipt) == 1);
    offer_launch_receipt.monitor_workflow_exposed = 1;
    assert(workshop_offer_launch_readiness_receipt_is_customer_safe(&offer_launch_receipt) == 0);
    offer_launch_receipt.monitor_workflow_exposed = 0;
    assert(workshop_offer_launch_intake_action_is_internal(&offer_launch_intake_action) == 1);
    offer_launch_intake_action.provider_go_live_requested = 1;
    assert(workshop_offer_launch_intake_action_is_internal(&offer_launch_intake_action) == 0);
    offer_launch_intake_action.provider_go_live_requested = 0;
    assert(workshop_offer_launch_intake_receipt_is_customer_safe(&offer_launch_intake_receipt) == 1);
    offer_launch_intake_receipt.payment_live_enabled = 1;
    assert(workshop_offer_launch_intake_receipt_is_customer_safe(&offer_launch_intake_receipt) == 0);
    offer_launch_intake_receipt.payment_live_enabled = 0;
    assert(workshop_offer_launch_activation_is_internal(&offer_launch_activation) == 1);
    offer_launch_activation.webportal_export_ready = 1;
    assert(workshop_offer_launch_activation_is_internal(&offer_launch_activation) == 0);
    offer_launch_activation.webportal_export_ready = 0;
    assert(workshop_offer_launch_activation_receipt_is_customer_safe(&offer_launch_activation_receipt) == 1);
    offer_launch_activation_receipt.monitor_workflow_exposed = 1;
    assert(workshop_offer_launch_activation_receipt_is_customer_safe(&offer_launch_activation_receipt) == 0);
    offer_launch_activation_receipt.monitor_workflow_exposed = 0;
    assert(workshop_offer_launch_service_setup_is_internal(&offer_launch_service_setup) == 1);
    offer_launch_service_setup.webportal_export_ready = 1;
    assert(workshop_offer_launch_service_setup_is_internal(&offer_launch_service_setup) == 0);
    offer_launch_service_setup.webportal_export_ready = 0;
    assert(workshop_offer_launch_service_setup_receipt_is_customer_safe(&offer_launch_service_setup_receipt) == 1);
    offer_launch_service_setup_receipt.provider_go_live_requested = 1;
    assert(workshop_offer_launch_service_setup_receipt_is_customer_safe(&offer_launch_service_setup_receipt) == 0);
    offer_launch_service_setup_receipt.provider_go_live_requested = 0;
    assert(workshop_offer_launch_delivery_workspace_is_internal(&offer_launch_delivery_workspace) == 1);
    offer_launch_delivery_workspace.webportal_export_ready = 1;
    assert(workshop_offer_launch_delivery_workspace_is_internal(&offer_launch_delivery_workspace) == 0);
    offer_launch_delivery_workspace.webportal_export_ready = 0;
    assert(workshop_offer_launch_delivery_workspace_receipt_is_customer_safe(&offer_launch_delivery_workspace_receipt) == 1);
    offer_launch_delivery_workspace_receipt.provider_go_live_requested = 1;
    assert(workshop_offer_launch_delivery_workspace_receipt_is_customer_safe(&offer_launch_delivery_workspace_receipt) == 0);
    offer_launch_delivery_workspace_receipt.provider_go_live_requested = 0;
    assert(workshop_offer_launch_delivery_kickoff_is_internal(&offer_launch_delivery_kickoff) == 1);
    offer_launch_delivery_kickoff.webportal_export_ready = 1;
    assert(workshop_offer_launch_delivery_kickoff_is_internal(&offer_launch_delivery_kickoff) == 0);
    offer_launch_delivery_kickoff.webportal_export_ready = 0;
    assert(workshop_offer_launch_delivery_kickoff_receipt_is_customer_safe(&offer_launch_delivery_kickoff_receipt) == 1);
    offer_launch_delivery_kickoff_receipt.provider_go_live_requested = 1;
    assert(workshop_offer_launch_delivery_kickoff_receipt_is_customer_safe(&offer_launch_delivery_kickoff_receipt) == 0);
    offer_launch_delivery_kickoff_receipt.provider_go_live_requested = 0;
    assert(workshop_offer_launch_delivery_milestone_is_internal(&offer_launch_delivery_milestone) == 1);
    offer_launch_delivery_milestone.webportal_export_ready = 1;
    assert(workshop_offer_launch_delivery_milestone_is_internal(&offer_launch_delivery_milestone) == 0);
    offer_launch_delivery_milestone.webportal_export_ready = 0;
    assert(workshop_offer_launch_delivery_milestone_receipt_is_customer_safe(&offer_launch_delivery_milestone_receipt) == 1);
    offer_launch_delivery_milestone_receipt.provider_go_live_requested = 1;
    assert(workshop_offer_launch_delivery_milestone_receipt_is_customer_safe(&offer_launch_delivery_milestone_receipt) == 0);
    offer_launch_delivery_milestone_receipt.provider_go_live_requested = 0;
    assert(workshop_offer_launch_delivery_outcome_is_internal(&offer_launch_delivery_outcome) == 1);
    offer_launch_delivery_outcome.webportal_export_ready = 1;
    assert(workshop_offer_launch_delivery_outcome_is_internal(&offer_launch_delivery_outcome) == 0);
    offer_launch_delivery_outcome.webportal_export_ready = 0;
    assert(workshop_offer_launch_delivery_outcome_receipt_is_customer_safe(&offer_launch_delivery_outcome_receipt) == 1);
    offer_launch_delivery_outcome_receipt.provider_go_live_requested = 1;
    assert(workshop_offer_launch_delivery_outcome_receipt_is_customer_safe(&offer_launch_delivery_outcome_receipt) == 0);
    offer_launch_delivery_outcome_receipt.provider_go_live_requested = 0;
    assert(workshop_offer_launch_delivery_follow_up_is_internal(&offer_launch_delivery_follow_up) == 1);
    offer_launch_delivery_follow_up.webportal_export_ready = 1;
    assert(workshop_offer_launch_delivery_follow_up_is_internal(&offer_launch_delivery_follow_up) == 0);
    offer_launch_delivery_follow_up.webportal_export_ready = 0;
    assert(workshop_offer_launch_delivery_follow_up_receipt_is_customer_safe(&offer_launch_delivery_follow_up_receipt) == 1);
    offer_launch_delivery_follow_up_receipt.payment_live_enabled = 1;
    assert(workshop_offer_launch_delivery_follow_up_receipt_is_customer_safe(&offer_launch_delivery_follow_up_receipt) == 0);
    offer_launch_delivery_follow_up_receipt.payment_live_enabled = 0;
    assert(workshop_offer_launch_delivery_growth_plan_is_internal(&offer_launch_delivery_growth_plan) == 1);
    offer_launch_delivery_growth_plan.webportal_export_ready = 1;
    assert(workshop_offer_launch_delivery_growth_plan_is_internal(&offer_launch_delivery_growth_plan) == 0);
    offer_launch_delivery_growth_plan.webportal_export_ready = 0;
    assert(workshop_offer_launch_delivery_growth_plan_receipt_is_customer_safe(&offer_launch_delivery_growth_plan_receipt) == 1);
    offer_launch_delivery_growth_plan_receipt.provider_go_live_requested = 1;
    assert(workshop_offer_launch_delivery_growth_plan_receipt_is_customer_safe(&offer_launch_delivery_growth_plan_receipt) == 0);
    offer_launch_delivery_growth_plan_receipt.provider_go_live_requested = 0;
    assert(workshop_offer_launch_delivery_growth_plan_acceptance_is_internal(&offer_launch_delivery_growth_plan_acceptance) == 1);
    offer_launch_delivery_growth_plan_acceptance.webportal_export_ready = 1;
    assert(workshop_offer_launch_delivery_growth_plan_acceptance_is_internal(&offer_launch_delivery_growth_plan_acceptance) == 0);
    offer_launch_delivery_growth_plan_acceptance.webportal_export_ready = 0;
    assert(workshop_offer_launch_delivery_growth_plan_acceptance_receipt_is_customer_safe(&offer_launch_delivery_growth_plan_acceptance_receipt) == 1);
    offer_launch_delivery_growth_plan_acceptance_receipt.payment_live_enabled = 1;
    assert(workshop_offer_launch_delivery_growth_plan_acceptance_receipt_is_customer_safe(&offer_launch_delivery_growth_plan_acceptance_receipt) == 0);
    offer_launch_delivery_growth_plan_acceptance_receipt.payment_live_enabled = 0;
    assert(workshop_offer_launch_delivery_expansion_request_is_internal(&offer_launch_delivery_expansion_request) == 1);
    offer_launch_delivery_expansion_request.webportal_export_ready = 1;
    assert(workshop_offer_launch_delivery_expansion_request_is_internal(&offer_launch_delivery_expansion_request) == 0);
    offer_launch_delivery_expansion_request.webportal_export_ready = 0;
    assert(workshop_offer_launch_delivery_expansion_request_receipt_is_customer_safe(&offer_launch_delivery_expansion_request_receipt) == 1);
    offer_launch_delivery_expansion_request_receipt.monitor_workflow_exposed = 1;
    assert(workshop_offer_launch_delivery_expansion_request_receipt_is_customer_safe(&offer_launch_delivery_expansion_request_receipt) == 0);
    offer_launch_delivery_expansion_request_receipt.monitor_workflow_exposed = 0;
    assert(workshop_offer_launch_delivery_expansion_workspace_is_internal(&offer_launch_delivery_expansion_workspace) == 1);
    offer_launch_delivery_expansion_workspace.webportal_export_ready = 1;
    assert(workshop_offer_launch_delivery_expansion_workspace_is_internal(&offer_launch_delivery_expansion_workspace) == 0);
    offer_launch_delivery_expansion_workspace.webportal_export_ready = 0;
    assert(workshop_offer_launch_delivery_expansion_workspace_receipt_is_customer_safe(&offer_launch_delivery_expansion_workspace_receipt) == 1);
    offer_launch_delivery_expansion_workspace_receipt.payment_live_enabled = 1;
    assert(workshop_offer_launch_delivery_expansion_workspace_receipt_is_customer_safe(&offer_launch_delivery_expansion_workspace_receipt) == 0);
    offer_launch_delivery_expansion_workspace_receipt.payment_live_enabled = 0;
    assert(workshop_offer_launch_delivery_expansion_kickoff_is_internal(&offer_launch_delivery_expansion_kickoff) == 1);
    offer_launch_delivery_expansion_kickoff.webportal_export_ready = 1;
    assert(workshop_offer_launch_delivery_expansion_kickoff_is_internal(&offer_launch_delivery_expansion_kickoff) == 0);
    offer_launch_delivery_expansion_kickoff.webportal_export_ready = 0;
    assert(workshop_offer_launch_delivery_expansion_kickoff_receipt_is_customer_safe(&offer_launch_delivery_expansion_kickoff_receipt) == 1);
    offer_launch_delivery_expansion_kickoff_receipt.provider_go_live_requested = 1;
    assert(workshop_offer_launch_delivery_expansion_kickoff_receipt_is_customer_safe(&offer_launch_delivery_expansion_kickoff_receipt) == 0);
    offer_launch_delivery_expansion_kickoff_receipt.provider_go_live_requested = 0;
    assert(workshop_offer_launch_delivery_expansion_milestone_is_internal(&offer_launch_delivery_expansion_milestone) == 1);
    offer_launch_delivery_expansion_milestone.webportal_export_ready = 1;
    assert(workshop_offer_launch_delivery_expansion_milestone_is_internal(&offer_launch_delivery_expansion_milestone) == 0);
    offer_launch_delivery_expansion_milestone.webportal_export_ready = 0;
    assert(workshop_offer_launch_delivery_expansion_milestone_receipt_is_customer_safe(&offer_launch_delivery_expansion_milestone_receipt) == 1);
    offer_launch_delivery_expansion_milestone_receipt.provider_go_live_requested = 1;
    assert(workshop_offer_launch_delivery_expansion_milestone_receipt_is_customer_safe(&offer_launch_delivery_expansion_milestone_receipt) == 0);
    offer_launch_delivery_expansion_milestone_receipt.provider_go_live_requested = 0;
    assert(workshop_offer_launch_delivery_expansion_outcome_is_internal(&offer_launch_delivery_expansion_outcome) == 1);
    offer_launch_delivery_expansion_outcome.webportal_export_ready = 1;
    assert(workshop_offer_launch_delivery_expansion_outcome_is_internal(&offer_launch_delivery_expansion_outcome) == 0);
    offer_launch_delivery_expansion_outcome.webportal_export_ready = 0;
    assert(workshop_offer_launch_delivery_expansion_outcome_receipt_is_customer_safe(&offer_launch_delivery_expansion_outcome_receipt) == 1);
    offer_launch_delivery_expansion_outcome_receipt.payment_live_enabled = 1;
    assert(workshop_offer_launch_delivery_expansion_outcome_receipt_is_customer_safe(&offer_launch_delivery_expansion_outcome_receipt) == 0);
    offer_launch_delivery_expansion_outcome_receipt.payment_live_enabled = 0;
    assert(workshop_offer_launch_delivery_expansion_follow_up_is_internal(&offer_launch_delivery_expansion_follow_up) == 1);
    offer_launch_delivery_expansion_follow_up.webportal_export_ready = 1;
    assert(workshop_offer_launch_delivery_expansion_follow_up_is_internal(&offer_launch_delivery_expansion_follow_up) == 0);
    offer_launch_delivery_expansion_follow_up.webportal_export_ready = 0;
    assert(workshop_offer_launch_delivery_expansion_follow_up_receipt_is_customer_safe(&offer_launch_delivery_expansion_follow_up_receipt) == 1);
    offer_launch_delivery_expansion_follow_up_receipt.payment_live_enabled = 1;
    assert(workshop_offer_launch_delivery_expansion_follow_up_receipt_is_customer_safe(&offer_launch_delivery_expansion_follow_up_receipt) == 0);
    offer_launch_delivery_expansion_follow_up_receipt.payment_live_enabled = 0;
    assert(workshop_offer_launch_delivery_expansion_growth_plan_is_internal(&offer_launch_delivery_expansion_growth_plan) == 1);
    offer_launch_delivery_expansion_growth_plan.webportal_export_ready = 1;
    assert(workshop_offer_launch_delivery_expansion_growth_plan_is_internal(&offer_launch_delivery_expansion_growth_plan) == 0);
    offer_launch_delivery_expansion_growth_plan.webportal_export_ready = 0;
    assert(workshop_offer_launch_delivery_expansion_growth_plan_receipt_is_customer_safe(&offer_launch_delivery_expansion_growth_plan_receipt) == 1);
    offer_launch_delivery_expansion_growth_plan_receipt.provider_go_live_requested = 1;
    assert(workshop_offer_launch_delivery_expansion_growth_plan_receipt_is_customer_safe(&offer_launch_delivery_expansion_growth_plan_receipt) == 0);
    offer_launch_delivery_expansion_growth_plan_receipt.provider_go_live_requested = 0;
    assert(workshop_offer_launch_delivery_expansion_growth_plan_acceptance_is_internal(&offer_launch_delivery_expansion_growth_plan_acceptance) == 1);
    offer_launch_delivery_expansion_growth_plan_acceptance.webportal_export_ready = 1;
    assert(workshop_offer_launch_delivery_expansion_growth_plan_acceptance_is_internal(&offer_launch_delivery_expansion_growth_plan_acceptance) == 0);
    offer_launch_delivery_expansion_growth_plan_acceptance.webportal_export_ready = 0;
    assert(workshop_offer_launch_delivery_expansion_growth_plan_acceptance_receipt_is_customer_safe(&offer_launch_delivery_expansion_growth_plan_acceptance_receipt) == 1);
    offer_launch_delivery_expansion_growth_plan_acceptance_receipt.provider_go_live_requested = 1;
    assert(workshop_offer_launch_delivery_expansion_growth_plan_acceptance_receipt_is_customer_safe(&offer_launch_delivery_expansion_growth_plan_acceptance_receipt) == 0);
    offer_launch_delivery_expansion_growth_plan_acceptance_receipt.provider_go_live_requested = 0;
    assert(workshop_ara_work_packet_requires_human_review(&ara_work_packet) == 1);
    assert(workshop_owner_time_budget_warns_on_labor_trap(&owner_time_budget) == 1);
    assert(workshop_local_worktree_status_is_local_only(&local_worktree) == 1);

    return 0;
}
