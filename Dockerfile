# Usar la imagen oficial de Bun
FROM oven/bun:1 AS base
WORKDIR /app

# Instalar dependencias en una capa separada para aprovechar el cache de Docker
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install

# Instalar dependencias de producción solamente
RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --production

# Copiar node_modules de las dependencias de desarrollo y construir la aplicación
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Construir la aplicación
ENV NODE_ENV=production
RUN bun run build

# Copiar la aplicación construida en una imagen limpia de producción
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /app/dist dist
COPY --from=prerelease /app/package.json .
COPY --from=prerelease /app/src src

# Exponer el puerto (Bun usa el puerto 3000 por defecto)
EXPOSE 3000

# El usuario que ejecuta la aplicación
USER bun

# Comando para ejecutar la aplicación
ENTRYPOINT [ "bun", "run", "start" ]
