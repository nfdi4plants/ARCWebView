import type { ArcWorkflow } from '@nfdi4plants/arctrl'
import {Stack, Text, Heading } from '@primer/react'
import { MetadataField, PersonsField } from '../MetadataHelper'

interface WorkflowMetadataProps {
  workflow: ArcWorkflow;
}

export default function WorkflowMetadata({workflow}: WorkflowMetadataProps) {

  return (
    <Stack spacing={2}>
      <Heading as='h2'>{workflow.Identifier}</Heading>
      <MetadataField label="Title" exists={!!workflow.Title}>
        <Text>{workflow.Title}</Text>
      </MetadataField>
      <MetadataField label="Description" exists={!!workflow.Description}>
        <Text>{workflow.Description}</Text>
      </MetadataField>
      <MetadataField label="Workflow Type" exists={!!workflow.WorkflowType}>
        <Text>{workflow.WorkflowType?.NameText}</Text>
      </MetadataField>
      <MetadataField label="URI" exists={!!workflow.URI}>
        <Text>{workflow.URI}</Text>
      </MetadataField>
      <MetadataField label="Version" exists={!!workflow.Version}>
        <Text>{workflow.Version}</Text>
      </MetadataField>

      <MetadataField label="Sub-Workflow Identifiers" exists={workflow.SubWorkflowIdentifiers.length > 0}>
        <Stack>
          {workflow.SubWorkflowIdentifiers.map((subWorkflowId, index) => (
            <Text key={index}>- {subWorkflowId}</Text>
          ))}
        </Stack>
      </MetadataField>

      <MetadataField label="Parameters" exists={workflow.Parameters.length > 0}>
        <Stack>
          {workflow.Parameters.map((param, index) => (
            <Text key={index}>- {param.NameText}</Text>
          ))}
        </Stack>
      </MetadataField>

      <MetadataField label="Components" exists={workflow.Components.length > 0}>
        <Stack>
          {workflow.Components.map((component, index) => {
            // Handle potential F# option type
            const componentType = component.ComponentType as any;
            const typeName = componentType?.NameText || 'Unknown Component';
            return <Text key={index}>- {typeName}</Text>;
          })}
        </Stack>
      </MetadataField>

      <MetadataField label="Contacts" exists={workflow.Contacts.length > 0}>
        <PersonsField persons={workflow.Contacts} />
      </MetadataField>
    </Stack>
  )
}
