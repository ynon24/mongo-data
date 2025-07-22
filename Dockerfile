    FROM mongo:4.4

    COPY seed-data/ /docker-entrypoint-initdb.d/
