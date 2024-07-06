package main

import (
	"log"
	"server/db"
	"server/internal/user"
)

func main() {
	dbConn, err := db.NewDatabase()
	if err != nil {
		log.Fatalf("could not initialize databese connection: %s", err)
	}

	userRap := user.NewRepository(dbConn.GetDB())
	userSvc := user.NewService(userRap)
	userHandler := user.NewHandler(userSvc)

}
