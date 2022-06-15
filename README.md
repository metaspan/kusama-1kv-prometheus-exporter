# kusama-1kv-prometheus-exporter
Prometheus Exporter for Kusama 1KV

# Hosted service

A hosted service is available here: `http://ksm-1kv-prometheus.metaspan.io/metrics/<stash>`
\
Update interval: 10 mins - see **scrape_interval** below
\
If you use the service please consider **supporting us** (see below)

## Example output

```
ksm_1kv_updated_at{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 1655290636179
ksm_1kv_valid{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 1
ksm_1kv_active{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 0
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="CLIENT_UPGRADE"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="ACCUMULATED_OFFLINE_TIME"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="COMMISION"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="VALIDATE_INTENTION"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="SELF_STAKE"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="ONLINE"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="CONNECTION_TIME"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="IDENTITY"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="UNCLAIMED_REWARDS"} 1
ksm_1kv_validity{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx", type="BLOCKED"} 1
ksm_1kv_score_updated{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 1655290532577
ksm_1kv_score_total{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 270.5390898836776
ksm_1kv_score_aggregate{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 252.8306228522842
ksm_1kv_score_spanInclusion{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 0
ksm_1kv_score_inclusion{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 87.49999999999999
ksm_1kv_score_discovered{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 0
ksm_1kv_score_nominated{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 11.680892013354473
ksm_1kv_score_rank{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 0.017655367231638415
ksm_1kv_score_unclaimed{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 0
ksm_1kv_score_bonded{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 50
ksm_1kv_score_faults{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 5
ksm_1kv_score_offline{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 0
ksm_1kv_score_location{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 40
ksm_1kv_score_councilStake{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 37.5
ksm_1kv_score_democracy{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 21.132075471698116
ksm_1kv_score_randomness{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 1.0700408314136043
```

# Useage

```
git clone https://github.com/metaspan/kusama-1kv-prometheus-exporter
cd kusama-1kv-prometheus-exporter
npm install
# edit PORT in prometheus-exporter.js
node prometheus-exporter.js
```

### PM2

```
pm2 start prometheus-exporter.js
pm2 list
┌─────┬────────────────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name                   │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼────────────────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ prometheus-exporter    │ default     │ 1.0.0   │ fork    │ 1408738  │ 36m    │ 36   │ online    │ 0%       │ 67.7mb   │ derek    │ disabled │
└─────┴────────────────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
pm2 logs 0

0|prometheus-exporter  | { stash: 'HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx' }
0|prometheus-exporter  | 2022-06-15 12:27:48|ksm_1kv|query() stash: HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx
0|prometheus-exporter  | { stash: 'HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx' }
0|prometheus-exporter  | 2022-06-15 12:28:03|ksm_1kv|query() stash: HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx
```


## Configure prometheus.yml

```yml
scrape_configs:
  - job_name: "ksm-1kv"
    scrape_interval: 600s
    metrics_path: "/metrics/HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"
    static_configs:
    - targets: ["192.168.1.20:3000"]
```

# Support us

## Tips welcome

KSM: HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx

## Staking

Please nominate our METASPAN-KSM validator!
