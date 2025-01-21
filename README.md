## Personal Website

This is the open-source repository for my online resume. You can view it live at [https://cavalheiro.io](https://cavalheiro.io).

---

## Build

### Using Docker

To build and run the website using Docker:

```bash
docker build -f ./deploy/Dockerfile -t personal-website .
docker run -p 3000:3000 personal-website
```

### Manually

1. Install all the necessary dependencies:

   ```bash
yarn install
```

2. Start the development server:

   ```bash
yarn start
```

   Your site will now be running at `http://localhost:3000`.

---

## Deploying

### Helm

Push the Docker image to a registry:

```bash
docker build -t personal-website:latest . -f ./deploy/Dockerfile
docker tag personal-website:latest andrecavalheiro/personal-website:latest
docker push andrecavalheiro/personal-website:latest
```

Deploy the Helm chart onto a Kubernetes cluster:

```bash
helm install personal-website ./deploy/helm

# Optional: Forward a local port to the service for debugging
kubectl port-forward pod/<POD_NAME> 3000:3000
```

---

## Deploying with Fleek

You can deploy your site easily with Fleek. For detailed instructions, check out the [Fleek Deployment Guide](https://blog.fleek.co/posts/deploy-your-first-website-with-fleek/).

