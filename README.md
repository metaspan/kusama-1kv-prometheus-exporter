# kusama-1kv-prometheus-exporter
Prometheus Exporter for Kusama 1KV

# Hosted service

A hosted service is available here: http://ksm-1kv-prometheus.metaspan.io/metrics/<stash>
If you use the service please consider supporting us (see below)

# Useage

```
git clone https://github.com/metaspan/kusama-1kv-prometheus-exporter
cd kusama-1kv-prometheus-exporter
npm install
# edit PORT in prometheus-exporter.js
node prometheus-exporter.js
```

## Configure prometheus.yml

```yml
scrape_configs:
  - job_name: "ksm-1kv"
    metrics_path: "/metrics/HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"
    static_configs:
    - targets: ["192.168.1.20:3000"]
```

## Example output

```
ksm_1kv_updated_at{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 1655300169537
ksm_1kv_valid{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 1
ksm_1kv_active{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 0
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="CLIENT_UPGRADE"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="IDENTITY"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="CONNECTION_TIME"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="COMMISION"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="UNCLAIMED_REWARDS"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="ONLINE"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="ACCUMULATED_OFFLINE_TIME"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="SELF_STAKE"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="BLOCKED"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="VALIDATE_INTENTION"} 1
ksm_1kv_score{category="updated", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 1655300132304
ksm_1kv_score{category="total", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 290.26291682421623
ksm_1kv_score{category="aggregate", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 260.6202779362222
ksm_1kv_score{category="spanInclusion", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 0
ksm_1kv_score{category="inclusion", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 94.59459459459467
ksm_1kv_score{category="discovered", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 0
ksm_1kv_score{category="nominated", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 10.375964962378266
ksm_1kv_score{category="rank", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 0.017642907551164433
ksm_1kv_score{category="unclaimed", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 0
ksm_1kv_score{category="bonded", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 50
ksm_1kv_score{category="faults", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 5
ksm_1kv_score{category="offline", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 2
ksm_1kv_score{category="location", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 40
ksm_1kv_score{category="councilStake", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 37.5
ksm_1kv_score{category="democracy", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 21.132075471698116
ksm_1kv_score{category="randomness", stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 1.1137388046806092
```

# Grafana Panel config

Metric: `ksm_1kv_score{category=~"spanInclusion|inclusion|discovered|nominated|rank|unclaimed|bonded|faults|offline|location|councilStake|democracy|randomness"}`

Legend: `{{category}}`

# Support us

## Tips welcome

KSM: HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx

## Staking

Please nominate our METASPAN-KSM validator!
