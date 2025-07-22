FROM mongo:7

COPY seed-data/ /docker-entrypoint-initdb.d/
