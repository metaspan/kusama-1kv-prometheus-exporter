# kusama-1kv-prometheus-exporter
Prometheus Exporter for Kusama 1KV

For Polkadot go here https://github.com/metaspan/polkadot-1kv-prometheus-exporter

# Hosted service

A hosted service is available here: `http://ksm-1kv-prometheus.metaspan.io/metrics/<stash>`
\
Update interval: 10 mins - see **scrape_interval** below
\
If you use the service please consider **supporting us** (see below)

## Example output

```
ksm_1kv_updated_at{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 1655300169537
ksm_1kv_rank{stash="HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx"} 18
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

![image](https://user-imagess.githubusercontent.com/1845970/173845360-e82e065d-bb5a-4ecc-b214-211006185c4e.png)

Metric: `dot_1kv_score{category=~"spanInclusion|inclusion|discovered|nominated|rank|unclaimed|bonded|faults|offline|location|councilStake|democracy|randomness"}`

Legend: `{{category}}`

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
