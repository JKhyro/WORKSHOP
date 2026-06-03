#include "workshop_app_bridge.h"

#include <assert.h>
#include <string.h>

int main(void) {
    WorkshopAppBridgeSnapshot snapshot;
    WorkshopAppBridgeRevenueCommandResult command;

    assert(workshop_app_bridge_get_snapshot(&snapshot) == 1);
    assert(strcmp(workshop_app_bridge_product_name(), "WORKSHOP") == 0);
    assert(strcmp(snapshot.product_name, "WORKSHOP") == 0);
    assert(strcmp(snapshot.core_status, "native-core-ready") == 0);
    assert(strcmp(snapshot.revenue_lane, "education-submission") == 0);
    assert(strcmp(snapshot.offer_experiment_status, "intake-ready") == 0);
    assert(strcmp(snapshot.delivery_queue_status, "queued") == 0);
    assert(snapshot.low_labor_score == 87);
    assert(snapshot.monthly_revenue_target_jpy == 300000);
    assert(snapshot.expected_operator_minutes == 540);
    assert(snapshot.ara_human_review_required == 1);
    assert(snapshot.epoch_boundary_enforced == 1);
    assert(snapshot.monitor_boundary_enforced == 1);
    assert(workshop_app_bridge_preview_revenue_command(&command) == 1);
    assert(strcmp(command.service_request_id, "workshop-command-request-001") == 0);
    assert(strcmp(command.offer_experiment_id, "workshop-command-offer-001") == 0);
    assert(strcmp(command.roi_record_id, "workshop-command-roi-001") == 0);
    assert(strcmp(command.ara_packet_id, "workshop-command-ara-001") == 0);
    assert(strcmp(command.revenue_receipt_id, "workshop-command-receipt-001") == 0);
    assert(strcmp(command.delivery_log_id, "workshop-command-log-001") == 0);
    assert(strcmp(command.epoch_handoff_status, "epoch-time-requested") == 0);
    assert(command.low_labor_viable == 1);
    assert(command.roi_test_ready == 1);
    assert(command.ara_review_required == 1);
    assert(command.owner_time_budget_clear == 1);
    assert(command.epoch_timing_requested == 1);
    assert(command.native_command_ready == 1);
    assert(workshop_app_bridge_preview_revenue_command(0) == 0);
    assert(workshop_app_bridge_get_snapshot(0) == 0);

    return 0;
}
