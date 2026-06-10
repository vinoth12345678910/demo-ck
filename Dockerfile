# ============================================
# BUILD TO SCALE — DOCKER MULTI-STAGE BUILD
# ============================================
# Stage 1: Dependencies
# Install all dependencies (including devDependencies)
# needed to build the Next.js application.
# --------------------------------------------
FROM node:20-alpine AS deps
WORKDIR /app

# Copy package files for layer caching
COPY package.json package-lock.json ./

# Install ALL dependencies (including dev)
RUN npm ci --only=production=false

# ============================================
# Stage 2: Builder
# Build the Next.js application for production.
# --------------------------------------------
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# ============================================
# Stage 3: Runner (Production Image)
# Minimal image with only what's needed to RUN
# the application. No build tools, no source.
# --------------------------------------------
FROM node:20-alpine AS runner
WORKDIR /app

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Enable Next.js standalone output
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy standalone build output
# (only the files needed to run)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Set correct permissions
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose the application port
EXPOSE 3000

# Start the Next.js server
CMD ["node", "server.js"]
