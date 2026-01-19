import type { ArcRun } from '@nfdi4plants/arctrl'
import {Stack, Text, Heading } from '@primer/react'
import { MetadataField, PersonsField } from '../MetadataHelper'

interface RunMetadataProps {
  run: ArcRun;
}

export default function RunMetadata({run}: RunMetadataProps) {

  return (
    <Stack spacing={2}>
      <Heading as='h2'>{run.Identifier}</Heading>
      <MetadataField label="Title" exists={!!run.Title}>
        <Text>{run.Title}</Text>
      </MetadataField>
      <MetadataField label="Description" exists={!!run.Description}>
        <Text>{run.Description}</Text>
      </MetadataField>
      <MetadataField label="Measurement Type" exists={!!run.MeasurementType}>
        <Text>{run.MeasurementType?.NameText}</Text>
      </MetadataField>
      <MetadataField label="Technology Type" exists={!!run.TechnologyType}>
        <Text>{run.TechnologyType?.NameText}</Text>
      </MetadataField>
      <MetadataField label="Technology Platform" exists={!!run.TechnologyPlatform}>
        <Text>{run.TechnologyPlatform?.NameText}</Text>
      </MetadataField>

      <MetadataField label="Workflow Identifiers" exists={run.WorkflowIdentifiers.length > 0}>
        <Stack>
          {run.WorkflowIdentifiers.map((workflowId, index) => (
            <Text key={index}>- {workflowId}</Text>
          ))}
        </Stack>
      </MetadataField>

      <MetadataField label="Performers" exists={run.Performers.length > 0}>
        <PersonsField persons={run.Performers} />
      </MetadataField>
    </Stack>
  )
}
