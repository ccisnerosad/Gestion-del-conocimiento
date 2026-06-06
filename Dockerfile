# ============================================================
# Stage 1: build
# ============================================================
FROM node:24-alpine AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV CI=true
RUN corepack enable

WORKDIR /app

# Cache de dependencias — copia solo manifests primero
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* .npmrc* ./
RUN pnpm install --frozen-lockfile

# Código fuente y build
COPY . .
RUN pnpm run build

# ============================================================
# Stage 2: serve con nginx
# ============================================================
FROM nginx:alpine AS runtime

# Config custom (escucha en 8082, sin exponer puertos internos en errores)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Site estático compilado
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8082

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8082/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
