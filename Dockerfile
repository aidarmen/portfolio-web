# Step 1: Build
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

# Declare and use build args
ARG VITE_LINKIDIN_URL
ARG VITE_GOOGLESHEET_URL

# Expose them as env so Vite can use them
ENV VITE_LINKIDIN_URL=$VITE_LINKIDIN_URL
ENV VITE_GOOGLESHEET_URL=$VITE_GOOGLESHEET_URL

RUN npm install
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]