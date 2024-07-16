# LiveChat

- A live chat app

## tech stack

**Backend**

- Golang
- Gin
- Postgres SQL
- Websocket

## Migration

```bash
migrate create -ext sql -dir db/migrations migration_name
```

- Create Migration table **User**
- Push migrate to yours db

```bash
migrate -path db/migrations -database "postgresql://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_NAME?sslmode=DB_SSLMODE" -verbose up
```

---

**Frontend**

- React.js
- Next.js
- Tailwind
