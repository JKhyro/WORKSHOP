#include "workshop_app_bridge.h"

#include <assert.h>
#include <string.h>

int main(void) {
    WorkshopAppBridgeSnapshot snapshot;

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
    assert(workshop_app_bridge_get_snapshot(0) == 0);

    return 0;
}
