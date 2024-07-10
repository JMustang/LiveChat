# LiveChat

- A live chat app, backend, golang, frontend, next.js.
  Postgres db

- Create Migration table **User**

```bash
migrate create -ext sql -dir db/migrations migration_name
```

- Push migrate to yours db

```bash
migrate -path db/migrations -database "postgresql://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_NAME?sslmode=DB_SSLMODE" -verbose up
```

Framework: gin
Web socket: gorilla/websocket
JWT: golang-jwt
