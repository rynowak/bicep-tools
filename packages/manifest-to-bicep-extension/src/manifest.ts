import { parse } from 'yaml'

export interface ResourceProvider {
  name: string
  types: Record<string, ResourceType>
}

export interface ResourceType {
  defaultApiVersion?: string
  apiVersions: Record<string, APIVersion>
}

export interface APIVersion {
  schema: Schema
  capabilities?: string[]
}

export interface Schema {
  type: 'string' | 'object'
  description?: string
  properties?: Record<string, Schema>
  required?: string[]
  readOnly?: boolean
}

export function parseManifest(input: string): ResourceProvider {
  const parsed = parse(input) as ResourceProvider
  return parsed
}