# ReactJs Azure Application Insight Sample

## Disclaimer

This sample scripts are not supported under any Microsoft standard support program or service. The sample script is provided AS IS without warranty of any kind. Microsoft further disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you. In no event shall Microsoft, its authors, or anyone else involved in the creation, production, or delivery of the scripts be liable for any damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of the use of or inability to use the sample scripts or documentation, even if Microsoft has been advised of the possibility of such damages.

## Deploy

```bash
cd terraform && terraform init
```

```bash
export ARM_SUBSCRIPTION_ID=$(az account show --query id -o tsv)
```

```bash
terraform plan -out plan.out
```

Then apply the changes:

```bash
terraform apply plan.out
```

## React Js Setup

Inside `webapp/src/ApplicationInsightsService.jsx`, pass the instrumentation key. In a production project you will pass it with CI/CD pipeline when packaging the project or use managed identities to avoid to manage this key.

## Code Deployment


## Deployment

WIP: Need packaging
az webapp deployment source config-zip --resource-group <resource-group-name> --name <app-service-name> --src dist.zip

https://learn.microsoft.com/en-us/azure/azure-monitor/app/javascript-framework-extensions?tabs=react