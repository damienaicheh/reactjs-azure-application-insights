resource "azurerm_service_plan" "this" {
  name                = format("asp-%s", local.resource_suffix_kebabcase)
  resource_group_name = local.resource_group_name
  location            = local.resource_group_location
  os_type             = "Linux"
  sku_name            = var.app_service_plan_sku
  tags                = local.tags
}

resource "azurerm_linux_web_app" "this" {
  name                = format("app-%s", local.resource_suffix_kebabcase)
  resource_group_name = local.resource_group_name
  location            = azurerm_service_plan.this.location
  service_plan_id     = azurerm_service_plan.this.id
  tags = local.tags

  site_config {
    app_command_line = "node server.js"
    application_stack {
      node_version = "22-lts"
    }
  }

  app_settings = {
    "APPINSIGHTS_INSTRUMENTATIONKEY"             = azurerm_application_insights.this.instrumentation_key
    "APPLICATIONINSIGHTS_CONNECTION_STRING"      = azurerm_application_insights.this.connection_string
    "ApplicationInsightsAgent_EXTENSION_VERSION" = "~3"
    "ENABLE_ORYX_BUILD"                          = "true"
    "SCM_DO_BUILD_DURING_DEPLOYMENT"             = "true"
  }
}
