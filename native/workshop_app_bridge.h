#ifndef WORKSHOP_APP_BRIDGE_H
#define WORKSHOP_APP_BRIDGE_H

#ifdef _WIN32
#define WORKSHOP_APP_BRIDGE_API __declspec(dllexport)
#else
#define WORKSHOP_APP_BRIDGE_API __attribute__((visibility("default")))
#endif

#ifdef __cplusplus
extern "C" {
#endif

typedef struct WorkshopAppBridgeSnapshot {
    const char *product_name;
    const char *core_status;
    const char *revenue_lane;
    const char *offer_experiment_status;
    const char *delivery_queue_status;
    const char *customer_safe_status;
    int low_labor_score;
    int monthly_revenue_target_jpy;
    int expected_operator_minutes;
    int ara_human_review_required;
    int epoch_boundary_enforced;
    int monitor_boundary_enforced;
} WorkshopAppBridgeSnapshot;

typedef struct WorkshopAppBridgeRevenueCommandResult {
    const char *service_request_id;
    const char *offer_experiment_id;
    const char *roi_record_id;
    const char *ara_packet_id;
    const char *revenue_receipt_id;
    const char *delivery_log_id;
    const char *epoch_handoff_status;
    const char *customer_safe_status;
    int low_labor_viable;
    int roi_test_ready;
    int ara_review_required;
    int owner_time_budget_clear;
    int epoch_timing_requested;
    int native_command_ready;
} WorkshopAppBridgeRevenueCommandResult;

typedef struct WorkshopAppBridgeRevenueExecutionReceipt {
    const char *execution_id;
    const char *intent_kind;
    const char *execution_status;
    const char *service_request_id;
    const char *opportunity_id;
    const char *ara_packet_id;
    const char *ara_review_receipt_id;
    const char *revenue_outcome_id;
    const char *delivery_result_receipt_id;
    const char *epoch_handoff_id;
    const char *customer_safe_status;
    int executed_locally;
    int customer_visible_receipt_ready;
    int ara_operator_review_complete;
    int epoch_timing_requested;
    int monitor_workflow_exposed;
    int native_execution_ready;
} WorkshopAppBridgeRevenueExecutionReceipt;

WORKSHOP_APP_BRIDGE_API const char *workshop_app_bridge_product_name(void);
WORKSHOP_APP_BRIDGE_API const char *workshop_app_bridge_core_status(void);
WORKSHOP_APP_BRIDGE_API int workshop_app_bridge_get_snapshot(WorkshopAppBridgeSnapshot *out_snapshot);
WORKSHOP_APP_BRIDGE_API int workshop_app_bridge_preview_revenue_command(WorkshopAppBridgeRevenueCommandResult *out_result);
WORKSHOP_APP_BRIDGE_API int workshop_app_bridge_execute_revenue_command(const char *intent_kind, WorkshopAppBridgeRevenueExecutionReceipt *out_receipt);
WORKSHOP_APP_BRIDGE_API int workshop_app_bridge_core_ready(void);
WORKSHOP_APP_BRIDGE_API int workshop_app_bridge_epoch_boundary_enforced(void);
WORKSHOP_APP_BRIDGE_API int workshop_app_bridge_monitor_boundary_enforced(void);

#ifdef __cplusplus
}
#endif

#endif
