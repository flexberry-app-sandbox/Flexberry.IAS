docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ias/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t ias/app ../..
