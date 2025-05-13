# Deploy

# Vercel

How to use [Vercel](https://vercel.com)

## 1. deploy on the web

### 1.1 Link to GitHub

1. Authorize Vercel to access your GitHub repositories when prompted.

### 1.2. Import Your GitHub Repository

1. In the Vercel dashboard, click the “New Project” button.
1. Select “Import from GitHub”.
1. Choose the repository you want to deploy from your list of GitHub repositories.
1. Click “Import” to proceed.

### 1.3. Configure Deployment Settings

1. Vercel will automatically detect your project’s framework (e.g., Next.js, React, Vue, or plain HTML).
1. Adjust settings if needed (such as build command or output directory).
1. You can also set environment variables and branch rules at this stage.

### 1.4 Deploy Your Project

1.Click “Deploy” to start the deployment process.
1.Vercel will build and deploy your project.
1.Once finished, you’ll receive a live preview link to your deployed site.

### 1.5. (Optional) Set Up a Custom Domain

1. In your project settings, go to the Domains section.
1. Add your custom domain and update DNS records as instructed by Vercel.

## 2. Using the CLI

This process lets you deploy your project via CLI and map your own domain to the deployment, ensuring your site is accessible under your branded URL.

### 2.1 Install Vercel CLI

```sh
pnpm i -g vercel
```

### 2.2 Deploy Your Project

Navigate to your project root directory and run:
```sh
vercel --prod
```

1. This command deploys your project in production mode.
1. The first time, it will link your local directory to a Vercel project and create a `.vercel` directory storing project info.
1. After deployment, it outputs a unique deployment URL.

### 2.3 Assign Your Custom Domain

You can assign your custom domain to the deployment using the `vercel alias` command:
```sh
vercel alias [deployment-url] your-custom-domain.com
```

1. Replace `deployment-url` with the URL returned by the deployment command.
1. Do not include `https://` in the domain.
1. This maps your deployment to your custom domain.

### 2.4 Configure DNS Records

At your domain registrar (where you bought your domain), update DNS settings:
- For an Apex domain (e.g., `example.com`), add an A record pointing to Vercel’s IP addresses.
- For a subdomain (e.g., `www.example.com`), add a CNAME record pointing to `cname.vercel-dns.com`.

> [!note] Already used domain
> If your domain is used by another Vercel account, you may need to verify ownership by adding a TXT record as instructed by Vercel.

#### Optional: Automate Deployment and Alias in a Script

Example bash script to deploy and alias automatically:
```sh
vercel deploy > deployment-url.txt 2> error.txt
code=$?

if [ $code -eq 0 ]; then
  deploymentUrl=$(cat deployment-url.txt)
  vercel alias $deploymentUrl your-custom-domain.com
else
  errorMessage=$(cat error.txt)
  echo "Deployment failed: $errorMessage"
fi
```

# Netlify
