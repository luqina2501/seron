# backend
```
git clone --depth 1 https://github.com/supabase/supabase
mkdir backend
cp -rf supabase/docker/* backend
cp supabase/docker/.env.example backend/.env

cd backend
docker compose pull
docker compose up -d
# docker compose ps
```

# frontend
```
bun create astro frontend
# w/ empty template, no git

```
