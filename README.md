# Connecttion Pool
- Use pool when have or expect to have multiple concurrent requests. That is literally what it is there for: to provide a pool of re-usable open client instances (reduces latency whenever  client can be reused)
# Connecttion Client
doc: https://node-postgres.com/apis/client
- Use Client for transactions (do not use transactions with pool method)