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
    WORKSHOP_STATUS_CANCELED = 11,
    WORKSHOP_STATUS_COMPATIBILITY_REVIEW = 12,
    WORKSHOP_STATUS_TIMING_CONFIRMED = 13,
    WORKSHOP_STATUS_TIMING_RESCHEDULE_REQUIRED = 14,
    WORKSHOP_STATUS_RECURRING_SERIES_ACTIVE = 15,
    WORKSHOP_STATUS_RECURRING_EXCEPTION_ACTION_REQUIRED = 16,
    WORKSHOP_STATUS_TIMING_WAITLISTED = 17,
    WORKSHOP_STATUS_TIMING_PROMOTED = 18
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

typedef enum WorkshopAraReviewStatus {
    WORKSHOP_ARA_REVIEW_NOT_REQUESTED = 0,
    WORKSHOP_ARA_REVIEW_QUEUED = 1,
    WORKSHOP_ARA_REVIEW_OPERATOR_REVIEW = 2,
    WORKSHOP_ARA_REVIEW_APPROVED = 3,
    WORKSHOP_ARA_REVIEW_REVISION_REQUIRED = 4,
    WORKSHOP_ARA_REVIEW_REJECTED = 5
} WorkshopAraReviewStatus;

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

typedef struct WorkshopPackageEligibility {
    const char *package_id;
    WorkshopPackageKind kind;
    WorkshopServiceStatus readiness_status;
    int customer_offer_ready;
    int lower_labor_default;
    int accepts_direct_adult_intake;
    int accepts_direct_under_19_intake;
    const char *operator_next_action;
    const char *customer_safe_status;
} WorkshopPackageEligibility;

typedef struct WorkshopEpochTimeHandoff {
    const char *id;
    const char *service_request_id;
    WorkshopEpochHandoffKind kind;
    WorkshopServiceStatus status;
    const char *requested_window_iso;
    const char *deadline_iso;
    const char *customer_safe_status;
} WorkshopEpochTimeHandoff;

typedef struct WorkshopDeliveryLifecycle {
    const char *id;
    const char *service_request_id;
    WorkshopServiceStatus current_status;
    WorkshopServiceStatus next_status;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *updated_iso;
    int customer_visible;
} WorkshopDeliveryLifecycle;

typedef struct WorkshopSubmissionReviewCycle {
    const char *id;
    const char *submission_id;
    const char *service_request_id;
    WorkshopSubmissionKind kind;
    WorkshopServiceStatus current_status;
    const char *intake_iso;
    const char *review_due_iso;
    const char *return_window_label;
    int customer_visible;
    int requires_epoch_time;
    const char *operator_next_action;
    const char *customer_safe_status;
} WorkshopSubmissionReviewCycle;

typedef struct WorkshopCohortPlan {
    const char *id;
    const char *package_id;
    WorkshopServiceStatus readiness_status;
    int enrolled_count;
    int target_capacity;
    int minimum_viable_count;
    int reusable_materials_ready;
    int epoch_window_required;
    const char *operator_next_action;
    const char *customer_safe_status;
} WorkshopCohortPlan;

typedef struct WorkshopCompatibilityGate {
    const char *id;
    const char *service_request_id;
    WorkshopServiceStatus gate_status;
    int customer_age;
    int guardian_terms_required;
    int blocks_auto_acceptance;
    const char *operator_next_action;
    const char *customer_safe_status;
} WorkshopCompatibilityGate;

typedef struct WorkshopCrmOpportunity {
    const char *id;
    const char *account_id;
    const char *service_request_id;
    WorkshopServiceLane lane;
    WorkshopServiceStatus status;
    int estimated_value_jpy;
    int qualified;
    int customer_visible;
    const char *operator_next_action;
    const char *customer_safe_status;
} WorkshopCrmOpportunity;

typedef struct WorkshopAraRevenuePacket {
    const char *id;
    const char *opportunity_id;
    const char *owner;
    WorkshopServiceStatus status;
    WorkshopAraReviewStatus review_status;
    int customer_visible;
    int requires_operator_review;
    const char *operator_next_action;
    const char *customer_safe_status;
} WorkshopAraRevenuePacket;

typedef struct WorkshopAraAssignment {
    const char *id;
    const char *packet_id;
    const char *assignee;
    WorkshopServiceStatus status;
    int accepted;
    int review_required;
    int review_complete;
    const char *operator_next_action;
    const char *customer_safe_status;
} WorkshopAraAssignment;

typedef struct WorkshopAraReviewReceipt {
    const char *id;
    const char *request_id;
    const char *opportunity_id;
    const char *packet_id;
    const char *kind;
    WorkshopAraReviewStatus review_status;
    const char *summary;
    const char *created_iso;
    int customer_visible;
    const char *customer_safe_status;
} WorkshopAraReviewReceipt;

typedef struct WorkshopRevenueOutcome {
    const char *id;
    const char *service_request_id;
    const char *opportunity_id;
    const char *lifecycle_id;
    const char *package_id;
    WorkshopServiceLane lane;
    WorkshopServiceStatus status;
    int estimated_value_jpy;
    int customer_visible;
    int result_receipt_ready;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *updated_iso;
} WorkshopRevenueOutcome;

typedef struct WorkshopDeliveryResultReceipt {
    const char *id;
    const char *outcome_id;
    const char *service_request_id;
    const char *kind;
    WorkshopServiceStatus status;
    const char *summary;
    const char *created_iso;
    int customer_visible;
    const char *customer_safe_status;
} WorkshopDeliveryResultReceipt;

typedef struct WorkshopAraReviewCompletion {
    const char *id;
    const char *assignment_id;
    const char *packet_id;
    const char *outcome_id;
    WorkshopAraReviewStatus review_status;
    int review_complete;
    int customer_visible;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *completed_iso;
} WorkshopAraReviewCompletion;

typedef struct WorkshopCustomerAccount {
    const char *id;
    const char *crm_account_id;
    const char *display_name;
    const char *account_type;
    WorkshopServiceStatus status;
    int lifetime_value_jpy;
    int active_request_count;
    int completed_result_count;
    int renewal_eligible;
    int customer_visible;
    const char *next_follow_up_due;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *updated_iso;
} WorkshopCustomerAccount;

typedef struct WorkshopCustomerAccountHistory {
    const char *id;
    const char *account_id;
    const char *service_request_id;
    const char *outcome_id;
    const char *event;
    WorkshopServiceStatus status;
    int value_jpy;
    int customer_visible;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *recorded_iso;
} WorkshopCustomerAccountHistory;

typedef struct WorkshopRenewalOpportunity {
    const char *id;
    const char *account_id;
    const char *source_outcome_id;
    const char *package_id;
    WorkshopServiceLane lane;
    WorkshopServiceStatus status;
    int value_jpy;
    int renewal_ready;
    int requires_epoch_time;
    int customer_visible;
    const char *follow_up_due;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *updated_iso;
} WorkshopRenewalOpportunity;

typedef struct WorkshopCustomerFollowUp {
    const char *id;
    const char *renewal_id;
    const char *account_id;
    const char *kind;
    WorkshopServiceStatus status;
    int requires_epoch_time;
    int customer_visible;
    const char *due_label;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *created_iso;
} WorkshopCustomerFollowUp;

typedef struct WorkshopRetentionHealth {
    const char *id;
    const char *account_id;
    const char *source_renewal_id;
    WorkshopServiceStatus status;
    int retention_score;
    const char *risk_level;
    int referral_eligible;
    int growth_ready;
    int customer_visible;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *updated_iso;
} WorkshopRetentionHealth;

typedef struct WorkshopReferralOpportunity {
    const char *id;
    const char *account_id;
    const char *source_retention_id;
    WorkshopServiceLane lane;
    WorkshopServiceStatus status;
    int value_jpy;
    int referral_ready;
    int customer_visible;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *updated_iso;
} WorkshopReferralOpportunity;

typedef struct WorkshopAccountGrowthPlan {
    const char *id;
    const char *account_id;
    const char *source_retention_id;
    const char *source_referral_id;
    const char *plan_kind;
    WorkshopServiceStatus status;
    int value_jpy;
    int growth_ready;
    int requires_epoch_time;
    int customer_visible;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *updated_iso;
} WorkshopAccountGrowthPlan;

typedef struct WorkshopGrowthFollowUpReceipt {
    const char *id;
    const char *growth_plan_id;
    const char *account_id;
    const char *kind;
    WorkshopServiceStatus status;
    const char *summary;
    const char *created_iso;
    int customer_visible;
    const char *customer_safe_status;
} WorkshopGrowthFollowUpReceipt;

typedef struct WorkshopReferralConversion {
    const char *id;
    const char *referral_id;
    const char *account_id;
    const char *source_growth_plan_id;
    WorkshopServiceLane lane;
    WorkshopServiceStatus status;
    int value_jpy;
    int conversion_ready;
    int customer_visible;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *updated_iso;
} WorkshopReferralConversion;

typedef struct WorkshopGrowthPlanAcceptance {
    const char *id;
    const char *growth_plan_id;
    const char *conversion_id;
    const char *account_id;
    WorkshopServiceStatus status;
    int accepted;
    int requires_epoch_time;
    int customer_visible;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *accepted_iso;
} WorkshopGrowthPlanAcceptance;

typedef struct WorkshopExpansionServiceRequest {
    const char *id;
    const char *acceptance_id;
    const char *account_id;
    WorkshopServiceLane lane;
    const char *package_id;
    WorkshopServiceStatus status;
    int value_jpy;
    int epoch_time_needed;
    int customer_visible;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *created_iso;
} WorkshopExpansionServiceRequest;

typedef struct WorkshopConversionStatusEvent {
    const char *id;
    const char *conversion_id;
    const char *expansion_request_id;
    const char *account_id;
    WorkshopServiceStatus status;
    const char *label;
    int customer_visible;
    const char *customer_safe_status;
    const char *created_iso;
} WorkshopConversionStatusEvent;

typedef struct WorkshopConversionReceipt {
    const char *id;
    const char *conversion_id;
    const char *expansion_request_id;
    const char *account_id;
    const char *kind;
    WorkshopServiceStatus status;
    const char *summary;
    const char *created_iso;
    int customer_visible;
    const char *customer_safe_status;
} WorkshopConversionReceipt;

typedef struct WorkshopCustomerSafeStatusEvent {
    const char *id;
    const char *service_request_id;
    WorkshopServiceStatus status;
    const char *label;
    const char *customer_safe_status;
    const char *created_iso;
    int customer_visible;
} WorkshopCustomerSafeStatusEvent;

typedef struct WorkshopEpochBridgePayload {
    const char *source_handoff_id;
    const char *requester;
    const char *need;
    const char *requested_window;
    const char *timezone;
    const char *status;
    int sandbox_only;
    int provider_go_live_requested;
    const char *customer_safe_status;
    const char *created_iso;
} WorkshopEpochBridgePayload;

typedef struct WorkshopEpochTimingReturnPayload {
    const char *id;
    const char *source_handoff_id;
    const char *service_request_id;
    const char *return_type;
    const char *epoch_status;
    const char *confirmed_window;
    int customer_visible;
    int provider_go_live_requested;
    const char *customer_safe_status;
    const char *returned_iso;
} WorkshopEpochTimingReturnPayload;

typedef struct WorkshopEpochTimingReturnConsumption {
    const char *id;
    const char *source_handoff_id;
    const char *return_payload_id;
    const char *service_request_id;
    WorkshopServiceStatus status;
    int customer_visible;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *consumed_iso;
} WorkshopEpochTimingReturnConsumption;

typedef struct WorkshopTimingReturnReceipt {
    const char *id;
    const char *consumption_id;
    const char *return_payload_id;
    const char *service_request_id;
    const char *kind;
    WorkshopServiceStatus status;
    const char *summary;
    const char *created_iso;
    int customer_visible;
    const char *customer_safe_status;
} WorkshopTimingReturnReceipt;

typedef struct WorkshopEpochCapacityWaitlistPayload {
    const char *id;
    const char *source_handoff_id;
    const char *service_request_id;
    const char *capacity_snapshot_id;
    const char *waitlist_entry_id;
    const char *hold_release_id;
    const char *promotion_candidate_id;
    const char *capacity_receipt_id;
    const char *epoch_status;
    int waitlist_position;
    int released_capacity;
    int customer_visible;
    int provider_go_live_requested;
    const char *customer_safe_status;
    const char *returned_iso;
} WorkshopEpochCapacityWaitlistPayload;

typedef struct WorkshopEpochCapacityWaitlistConsumption {
    const char *id;
    const char *capacity_payload_id;
    const char *source_handoff_id;
    const char *service_request_id;
    WorkshopServiceStatus status;
    int customer_visible;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *consumed_iso;
} WorkshopEpochCapacityWaitlistConsumption;

typedef struct WorkshopCapacityWaitlistReceipt {
    const char *id;
    const char *consumption_id;
    const char *capacity_payload_id;
    const char *service_request_id;
    const char *kind;
    WorkshopServiceStatus status;
    const char *summary;
    const char *created_iso;
    int customer_visible;
    const char *customer_safe_status;
} WorkshopCapacityWaitlistReceipt;

typedef struct WorkshopEpochRecurringSeriesPayload {
    const char *id;
    const char *source_handoff_id;
    const char *service_request_id;
    const char *series_id;
    const char *series_status;
    const char *recurrence_label;
    const char *next_occurrence_label;
    int exception_count;
    int customer_visible;
    int provider_go_live_requested;
    const char *customer_safe_status;
    const char *returned_iso;
} WorkshopEpochRecurringSeriesPayload;

typedef struct WorkshopEpochRecurringSeriesConsumption {
    const char *id;
    const char *recurring_payload_id;
    const char *source_handoff_id;
    const char *service_request_id;
    WorkshopServiceStatus status;
    int customer_visible;
    const char *operator_next_action;
    const char *customer_safe_status;
    const char *consumed_iso;
} WorkshopEpochRecurringSeriesConsumption;

typedef struct WorkshopRecurringSeriesReceipt {
    const char *id;
    const char *consumption_id;
    const char *recurring_payload_id;
    const char *service_request_id;
    const char *kind;
    WorkshopServiceStatus status;
    const char *summary;
    const char *created_iso;
    int customer_visible;
    const char *customer_safe_status;
} WorkshopRecurringSeriesReceipt;

const char *workshop_status_label(WorkshopServiceStatus status);
int workshop_status_from_label(const char *label, WorkshopServiceStatus *out_status);
int workshop_status_is_terminal(WorkshopServiceStatus status);
int workshop_status_needs_operator_attention(WorkshopServiceStatus status);
const char *workshop_lane_label(WorkshopServiceLane lane);
const char *workshop_package_kind_label(WorkshopPackageKind kind);
const char *workshop_submission_kind_label(WorkshopSubmissionKind kind);
const char *workshop_epoch_handoff_kind_label(WorkshopEpochHandoffKind kind);
const char *workshop_ara_review_status_label(WorkshopAraReviewStatus status);
int workshop_service_request_requires_guardian_flow(const WorkshopServiceRequest *request);
int workshop_service_request_needs_epoch_time(const WorkshopServiceRequest *request);
int workshop_package_is_lower_labor(const WorkshopPackage *package);
int workshop_package_eligibility_is_offer_ready(const WorkshopPackageEligibility *eligibility);
int workshop_package_eligibility_is_intake_ready(const WorkshopPackageEligibility *eligibility);
int workshop_service_request_routes_to_compatibility_review(const WorkshopServiceRequest *request, const WorkshopPackageEligibility *eligibility);
int workshop_package_accepts_service_request(const WorkshopPackageEligibility *eligibility, const WorkshopServiceRequest *request);
int workshop_submission_needs_review(const WorkshopSubmission *submission);
int workshop_submission_review_cycle_is_ready(const WorkshopSubmissionReviewCycle *cycle);
int workshop_submission_review_cycle_is_customer_safe(const WorkshopSubmissionReviewCycle *cycle);
int workshop_cohort_plan_is_enrollment_ready(const WorkshopCohortPlan *plan);
int workshop_cohort_plan_supports_subscription(const WorkshopCohortPlan *plan);
int workshop_compatibility_gate_blocks_auto_accept(const WorkshopCompatibilityGate *gate);
int workshop_crm_opportunity_is_qualified(const WorkshopCrmOpportunity *opportunity);
int workshop_ara_revenue_packet_is_ready(const WorkshopAraRevenuePacket *packet);
int workshop_ara_assignment_is_active(const WorkshopAraAssignment *assignment);
int workshop_ara_review_receipt_is_customer_safe(const WorkshopAraReviewReceipt *receipt);
int workshop_revenue_outcome_is_reportable(const WorkshopRevenueOutcome *outcome);
int workshop_delivery_result_receipt_is_customer_safe(const WorkshopDeliveryResultReceipt *receipt);
int workshop_ara_review_completion_is_ready(const WorkshopAraReviewCompletion *completion);
int workshop_customer_account_is_active(const WorkshopCustomerAccount *account);
int workshop_customer_account_history_is_customer_safe(const WorkshopCustomerAccountHistory *history);
int workshop_renewal_opportunity_is_ready(const WorkshopRenewalOpportunity *renewal);
int workshop_customer_follow_up_is_customer_safe(const WorkshopCustomerFollowUp *follow_up);
int workshop_retention_health_is_actionable(const WorkshopRetentionHealth *retention);
int workshop_referral_opportunity_is_ready(const WorkshopReferralOpportunity *referral);
int workshop_account_growth_plan_is_ready(const WorkshopAccountGrowthPlan *growth_plan);
int workshop_growth_follow_up_receipt_is_customer_safe(const WorkshopGrowthFollowUpReceipt *receipt);
int workshop_referral_conversion_is_ready(const WorkshopReferralConversion *conversion);
int workshop_growth_plan_acceptance_is_ready(const WorkshopGrowthPlanAcceptance *acceptance);
int workshop_expansion_service_request_is_ready(const WorkshopExpansionServiceRequest *request);
int workshop_conversion_status_event_is_customer_safe(const WorkshopConversionStatusEvent *event);
int workshop_conversion_receipt_is_customer_safe(const WorkshopConversionReceipt *receipt);
int workshop_epoch_handoff_is_customer_safe(const WorkshopEpochTimeHandoff *handoff);
int workshop_delivery_transition_is_allowed(WorkshopServiceStatus from_status, WorkshopServiceStatus to_status);
int workshop_delivery_lifecycle_is_valid(const WorkshopDeliveryLifecycle *lifecycle);
int workshop_customer_safe_status_event_is_valid(const WorkshopCustomerSafeStatusEvent *event);
int workshop_epoch_bridge_payload_is_ready(const WorkshopEpochBridgePayload *payload);
int workshop_epoch_timing_return_payload_is_customer_safe(const WorkshopEpochTimingReturnPayload *payload);
int workshop_epoch_timing_return_consumption_is_customer_safe(const WorkshopEpochTimingReturnConsumption *consumption);
int workshop_timing_return_receipt_is_customer_safe(const WorkshopTimingReturnReceipt *receipt);
int workshop_epoch_capacity_waitlist_payload_is_customer_safe(const WorkshopEpochCapacityWaitlistPayload *payload);
int workshop_epoch_capacity_waitlist_consumption_is_customer_safe(const WorkshopEpochCapacityWaitlistConsumption *consumption);
int workshop_capacity_waitlist_receipt_is_customer_safe(const WorkshopCapacityWaitlistReceipt *receipt);
int workshop_epoch_recurring_series_payload_is_customer_safe(const WorkshopEpochRecurringSeriesPayload *payload);
int workshop_epoch_recurring_series_consumption_is_customer_safe(const WorkshopEpochRecurringSeriesConsumption *consumption);
int workshop_recurring_series_receipt_is_customer_safe(const WorkshopRecurringSeriesReceipt *receipt);

#ifdef __cplusplus
}
#endif

#endif
