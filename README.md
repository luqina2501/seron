# so-slow

prequesite: `docker`, `bun`

## in ./backend, run:
```
systemctl --user start docker-desktop
```

## in ./frontend, run:
```
bun run dev
# 'bun run build' is used in production,
# whose output is in ./frontend/dist
```
