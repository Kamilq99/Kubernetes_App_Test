terraform {
  required_providers {
    null = {
      source = "hashicorp/null"
      version = "~> 3.2"
    }
  }
}

provider "null" {}

resource "null_resource" "create_kind_cluster" {
  provisioner "local-exec" {
    command = "kind create cluster --name moja-klasa --config kind-config.yaml"
  }

  triggers = {
    always_run = "${timestamp()}"
  }
}

resource "null_resource" "apply_k8s_deployment" {
  depends_on = [null_resource.create_kind_cluster]

  provisioner "local-exec" {
    command = "kubectl apply -f deployment.yaml"
  }
}
