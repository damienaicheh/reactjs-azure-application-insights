variable "environment" {
  type        = string
  default     = "dev"
  description = "The environment name"
  validation {
    condition     = can(regex("dev|stag|prod", var.environment))
    error_message = "The environment name value is not valid."
  }
}

variable "application" {
  type        = string
  default     = "mon"
  description = "The application name"
}

variable "location" {
  type        = string
  default     = "eastus2"
  description = "The Azure region where the resources should be created"
}

variable "tags" {
  type        = map(any)
  description = "The custom tags for all resources"
  default     = {}
}

variable "app_service_plan_sku" {
  type        = string
  default     = "B1"
  description = "The app service plan SKU"
}

variable "resource_group_name" {
  type        = string
  description = "The name of the resource group"
  default     = ""
}