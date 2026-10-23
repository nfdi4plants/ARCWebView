const a=`{\r
  "@context": [\r
    "https://w3id.org/ro/crate/1.1/context",\r
    {\r
      "Sample": "https://bioschemas.org/Sample",\r
      "additionalProperty": "http://schema.org/additionalProperty",\r
      "intendedUse": "https://bioschemas.org/intendedUse",\r
      "computationalTool": "https://bioschemas.org/computationalTool",\r
      "labEquipment": "https://bioschemas.org/labEquipment",\r
      "reagent": "https://bioschemas.org/reagent",\r
      "LabProtocol": "https://bioschemas.org/LabProtocol",\r
      "executesLabProtocol": "https://bioschemas.org/executesLabProtocol",\r
      "parameterValue": "https://bioschemas.org/parameterValue",\r
      "LabProcess": "https://bioschemas.org/LabProcess",\r
      "measurementMethod": "http://schema.org/measurementMethod",\r
      "sha256": "http://schema.org/sha256"\r
    }\r
  ],\r
  "@graph": [\r
    {\r
      "@id": "#Organization_Institute_of_Plant_Biochemistry,_HHU_Düsseldorf",\r
      "@type": "Organization",\r
      "name": "Institute of Plant Biochemistry, HHU Düsseldorf"\r
    },\r
    {\r
      "@id": "http://purl.org/spar/scoro/research-assistant",\r
      "@type": "DefinedTerm",\r
      "name": "research assistant",\r
      "termCode": "http://purl.org/spar/scoro/research-assistant"\r
    },\r
    {\r
      "@id": "http://orcid.org/0000-0001-9021-3197",\r
      "@type": "Person",\r
      "givenName": "Dominik",\r
      "affiliation": {\r
        "@id": "#Organization_Institute_of_Plant_Biochemistry,_HHU_Düsseldorf"\r
      },\r
      "email": [\r
        "dominik.brilhaus@hhu.de",\r
        "brilhaus@hhu.de"\r
      ],\r
      "familyName": "Brilhaus",\r
      "jobTitle": {\r
        "@id": "http://purl.org/spar/scoro/research-assistant"\r
      },\r
      "address": "HHU Düsseldorf, 22.07.U1.43, Universitätsstr. 1, 40225 Düsseldorf",\r
      "telephone": "0211-8115523"\r
    },\r
    {\r
      "@id": "http://orcid.org/0000-0002-5309-0527",\r
      "@type": "Person",\r
      "givenName": "Andrea",\r
      "affiliation": {\r
        "@id": "#Organization_Institute_of_Plant_Biochemistry,_HHU_Düsseldorf"\r
      },\r
      "email": "andrea.brauetigam@hhu.de",\r
      "familyName": "Bräutigam",\r
      "jobTitle": {\r
        "@id": "http://purl.org/spar/scoro/research-assistant"\r
      },\r
      "address": "Universitätsstr. 1, 40225 Düsseldorf"\r
    },\r
    {\r
      "@id": "http://orcid.org/0000-0002-9161-4889",\r
      "@type": "Person",\r
      "givenName": "Tabea",\r
      "affiliation": {\r
        "@id": "#Organization_Institute_of_Plant_Biochemistry,_HHU_Düsseldorf"\r
      },\r
      "email": "tabea.mettler@hhu.de",\r
      "familyName": "Mettler-Altmann",\r
      "jobTitle": {\r
        "@id": "http://purl.org/spar/scoro/research-assistant"\r
      },\r
      "address": "Universitätsstr. 1, 40225 Düsseldorf"\r
    },\r
    {\r
      "@id": "#Organization_Smithsonian_Tropical_Research_Institute,_Panama",\r
      "@type": "Organization",\r
      "name": "Smithsonian Tropical Research Institute, Panama"\r
    },\r
    {\r
      "@id": "http://purl.org/spar/scoro/co-investigator",\r
      "@type": "DefinedTerm",\r
      "name": "co-investigator",\r
      "termCode": "http://purl.org/spar/scoro/co-investigator"\r
    },\r
    {\r
      "@id": "#Person_Klaus_Winter",\r
      "@type": "Person",\r
      "givenName": "Klaus",\r
      "affiliation": {\r
        "@id": "#Organization_Smithsonian_Tropical_Research_Institute,_Panama"\r
      },\r
      "email": "winterk@si.edu",\r
      "familyName": "Winter",\r
      "jobTitle": {\r
        "@id": "http://purl.org/spar/scoro/co-investigator"\r
      },\r
      "address": "Balboa, Ancón, Republic of Panama",\r
      "disambiguatingDescription": "Comment {Name = \\"Worksheet\\"}"\r
    },\r
    {\r
      "@id": "http://purl.org/spar/scoro/principal-investigator",\r
      "@type": "DefinedTerm",\r
      "name": "principal investigator",\r
      "termCode": "http://purl.org/spar/scoro/principal-investigator"\r
    },\r
    {\r
      "@id": "http://orcid.org/0000-0003-0970-4672",\r
      "@type": "Person",\r
      "givenName": "Andreas",\r
      "affiliation": {\r
        "@id": "#Organization_Institute_of_Plant_Biochemistry,_HHU_Düsseldorf"\r
      },\r
      "email": "aweber@hhu.de",\r
      "familyName": "Weber",\r
      "jobTitle": {\r
        "@id": "http://purl.org/spar/scoro/principal-investigator"\r
      },\r
      "additionalName": "P M",\r
      "address": "Universitätsstr. 1, 40225 Düsseldorf"\r
    },\r
    {\r
      "@id": "http://orcid.org/0000-0001-9062-3516",\r
      "@type": "Person",\r
      "givenName": "Eva",\r
      "affiliation": {\r
        "@id": "#Organization_Institute_of_Plant_Biochemistry,_HHU_Düsseldorf"\r
      },\r
      "familyName": "Maleckova",\r
      "jobTitle": {\r
        "@id": "http://purl.org/spar/scoro/research-assistant"\r
      },\r
      "address": "Universitätsstr. 1, 40225 Düsseldorf"\r
    },\r
    {\r
      "@id": "#Person_Alisandra_Denton",\r
      "@type": "Person",\r
      "givenName": "Alisandra",\r
      "affiliation": {\r
        "@id": "#Organization_Institute_of_Plant_Biochemistry,_HHU_Düsseldorf"\r
      },\r
      "familyName": "Denton",\r
      "jobTitle": {\r
        "@id": "http://purl.org/spar/scoro/research-assistant"\r
      },\r
      "additionalName": "K",\r
      "address": "Universitätsstr. 1, 40225 Düsseldorf"\r
    },\r
    {\r
      "@id": "studies/TalinumGenomeDraft/resources/Talinum.gm.CDS.nt.fa",\r
      "@type": "File",\r
      "name": "studies/TalinumGenomeDraft/resources/Talinum.gm.CDS.nt.fa",\r
      "sha256": "29dca7b3f0807548db82f227157cdea39427e700b348e9fb2266ee985a71e609",\r
      "contentSize": "38610478b"\r
    },\r
    {\r
      "@id": "#Source_VariousTalinumData[WIP]",\r
      "@type": "Sample",\r
      "additionalType": "Source",\r
      "name": "VariousTalinumData[WIP]"\r
    },\r
    {\r
      "@id": "#Protocol_TalinumGenomeDraft_TalinumGenomeDraft",\r
      "@type": "LabProtocol",\r
      "name": "TalinumGenomeDraft"\r
    },\r
    {\r
      "@id": "#Process_S_TalinumGenomeDraft_TalinumGenomeDraft_0",\r
      "@type": "LabProcess",\r
      "name": "TalinumGenomeDraft",\r
      "object": {\r
        "@id": "#Source_VariousTalinumData[WIP]"\r
      },\r
      "result": {\r
        "@id": "studies/TalinumGenomeDraft/resources/Talinum.gm.CDS.nt.fa"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_TalinumGenomeDraft_TalinumGenomeDraft"\r
      }\r
    },\r
    {\r
      "@id": "studies/TalinumGenomeDraft/",\r
      "@type": "Dataset",\r
      "additionalType": "Study",\r
      "identifier": "TalinumGenomeDraft",\r
      "creator": [\r
        {\r
          "@id": "http://orcid.org/0000-0001-9062-3516"\r
        },\r
        {\r
          "@id": "http://orcid.org/0000-0001-9021-3197"\r
        },\r
        {\r
          "@id": "#Person_Alisandra_Denton"\r
        },\r
        {\r
          "@id": "http://orcid.org/0000-0003-0970-4672"\r
        }\r
      ],\r
      "dateModified": "2025-07-31T17:41:41.5528438",\r
      "hasPart": {\r
        "@id": "studies/TalinumGenomeDraft/resources/Talinum.gm.CDS.nt.fa"\r
      },\r
      "about": {\r
        "@id": "#Process_S_TalinumGenomeDraft_TalinumGenomeDraft_0"\r
      }\r
    },\r
    {\r
      "@id": "#CharacteristicValue_organism_Talinum_fruticosum",\r
      "@type": "PropertyValue",\r
      "additionalType": "CharacteristicValue",\r
      "name": "organism",\r
      "value": "Talinum fruticosum",\r
      "propertyID": "https://bioregistry.io/OBI:0100026",\r
      "valueReference": "http://purl.obolibrary.org/obo/NCBITaxon_110664",\r
      "columnIndex": "0"\r
    },\r
    {\r
      "@id": "#CharacteristicValue_organism_part_leaf",\r
      "@type": "PropertyValue",\r
      "additionalType": "CharacteristicValue",\r
      "name": "organism part",\r
      "value": "leaf",\r
      "propertyID": "https://bioregistry.io/EFO:0000635",\r
      "valueReference": "https://www.ebi.ac.uk/ols4/ontologies/po/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FPO_0025034",\r
      "columnIndex": "1"\r
    },\r
    {\r
      "@id": "#CharacteristicValue_plant_age_28_days_after_germination",\r
      "@type": "PropertyValue",\r
      "additionalType": "CharacteristicValue",\r
      "name": "plant age",\r
      "value": "28 days after germination",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000033",\r
      "columnIndex": "2"\r
    },\r
    {\r
      "@id": "#Source_DB_097",\r
      "@type": "Sample",\r
      "additionalType": "Source",\r
      "name": "DB_097",\r
      "additionalProperty": [\r
        {\r
          "@id": "#CharacteristicValue_organism_Talinum_fruticosum"\r
        },\r
        {\r
          "@id": "#CharacteristicValue_organism_part_leaf"\r
        },\r
        {\r
          "@id": "#CharacteristicValue_plant_age_28_days_after_germination"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#FactorValue_watering_exposure_12_days_drought",\r
      "@type": "PropertyValue",\r
      "additionalType": "FactorValue",\r
      "name": "watering exposure",\r
      "value": "12 days drought",\r
      "propertyID": "https://bioregistry.io/PECO:0007383",\r
      "columnIndex": "8"\r
    },\r
    {\r
      "@id": "#FactorValue_Timepoint_MD",\r
      "@type": "PropertyValue",\r
      "additionalType": "FactorValue",\r
      "name": "Timepoint",\r
      "value": "MD",\r
      "propertyID": "https://bioregistry.io/NCIT:C68568",\r
      "columnIndex": "9"\r
    },\r
    {\r
      "@id": "#FactorValue_timepoint-ZT_6",\r
      "@type": "PropertyValue",\r
      "additionalType": "FactorValue",\r
      "name": "timepoint-ZT",\r
      "value": "6",\r
      "columnIndex": "10"\r
    },\r
    {\r
      "@id": "#FactorValue_Photosynthesis_mode_CAM",\r
      "@type": "PropertyValue",\r
      "additionalType": "FactorValue",\r
      "name": "Photosynthesis mode",\r
      "value": "CAM",\r
      "columnIndex": "11"\r
    },\r
    {\r
      "@id": "#Sample_CAM_01",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "CAM_01",\r
      "additionalProperty": [\r
        {\r
          "@id": "#FactorValue_watering_exposure_12_days_drought"\r
        },\r
        {\r
          "@id": "#FactorValue_Timepoint_MD"\r
        },\r
        {\r
          "@id": "#FactorValue_timepoint-ZT_6"\r
        },\r
        {\r
          "@id": "#FactorValue_Photosynthesis_mode_CAM"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000164",\r
      "@type": "DefinedTerm",\r
      "name": "plant growth protocol",\r
      "termCode": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000164"\r
    },\r
    {\r
      "@id": "#Protocol_plant_material.md_plant_material",\r
      "@type": "LabProtocol",\r
      "name": "plant_material.md",\r
      "intendedUse": {\r
        "@id": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000164"\r
      }\r
    },\r
    {\r
      "@id": "#ParameterValue_growth_day_length_12_hr_light_/_12_hr_dark",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "growth day length",\r
      "value": "12 hr light / 12 hr dark",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000041",\r
      "columnIndex": "3"\r
    },\r
    {\r
      "@id": "#ParameterValue_light_intensity_exposure_425",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "light intensity exposure",\r
      "value": "425",\r
      "propertyID": "https://bioregistry.io/PECO:0007224",\r
      "unitCode": "https://bioregistry.io/UO:0000160",\r
      "unitText": "microeinstein per square meter per second",\r
      "columnIndex": "4"\r
    },\r
    {\r
      "@id": "#ParameterValue_humidity_day_37",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "humidity day",\r
      "value": "37",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000005",\r
      "unitCode": "https://bioregistry.io/UO:0000187",\r
      "unitText": "percent",\r
      "columnIndex": "5"\r
    },\r
    {\r
      "@id": "#ParameterValue_temperature_day_30",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "temperature day",\r
      "value": "30",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000007",\r
      "unitCode": "https://bioregistry.io/UO:0000027",\r
      "unitText": "degree celsius",\r
      "columnIndex": "6"\r
    },\r
    {\r
      "@id": "#ParameterValue_temperature_night_22",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "temperature night",\r
      "value": "22",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000008",\r
      "unitCode": "https://bioregistry.io/UO:0000027",\r
      "unitText": "degree celsius",\r
      "columnIndex": "7"\r
    },\r
    {\r
      "@id": "#Process_S_TalinumSamples-STRI_plant_material_0",\r
      "@type": "LabProcess",\r
      "name": "plant_material_0",\r
      "object": {\r
        "@id": "#Source_DB_097"\r
      },\r
      "result": {\r
        "@id": "#Sample_CAM_01"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_plant_material.md_plant_material"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_growth_day_length_12_hr_light_/_12_hr_dark"\r
        },\r
        {\r
          "@id": "#ParameterValue_light_intensity_exposure_425"\r
        },\r
        {\r
          "@id": "#ParameterValue_humidity_day_37"\r
        },\r
        {\r
          "@id": "#ParameterValue_temperature_day_30"\r
        },\r
        {\r
          "@id": "#ParameterValue_temperature_night_22"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Source_DB_099",\r
      "@type": "Sample",\r
      "additionalType": "Source",\r
      "name": "DB_099",\r
      "additionalProperty": [\r
        {\r
          "@id": "#CharacteristicValue_organism_Talinum_fruticosum"\r
        },\r
        {\r
          "@id": "#CharacteristicValue_organism_part_leaf"\r
        },\r
        {\r
          "@id": "#CharacteristicValue_plant_age_28_days_after_germination"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_CAM_02",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "CAM_02",\r
      "additionalProperty": [\r
        {\r
          "@id": "#FactorValue_watering_exposure_12_days_drought"\r
        },\r
        {\r
          "@id": "#FactorValue_Timepoint_MD"\r
        },\r
        {\r
          "@id": "#FactorValue_timepoint-ZT_6"\r
        },\r
        {\r
          "@id": "#FactorValue_Photosynthesis_mode_CAM"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_S_TalinumSamples-STRI_plant_material_1",\r
      "@type": "LabProcess",\r
      "name": "plant_material_1",\r
      "object": {\r
        "@id": "#Source_DB_099"\r
      },\r
      "result": {\r
        "@id": "#Sample_CAM_02"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_plant_material.md_plant_material"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_growth_day_length_12_hr_light_/_12_hr_dark"\r
        },\r
        {\r
          "@id": "#ParameterValue_light_intensity_exposure_425"\r
        },\r
        {\r
          "@id": "#ParameterValue_humidity_day_37"\r
        },\r
        {\r
          "@id": "#ParameterValue_temperature_day_30"\r
        },\r
        {\r
          "@id": "#ParameterValue_temperature_night_22"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Source_DB_103",\r
      "@type": "Sample",\r
      "additionalType": "Source",\r
      "name": "DB_103",\r
      "additionalProperty": [\r
        {\r
          "@id": "#CharacteristicValue_organism_Talinum_fruticosum"\r
        },\r
        {\r
          "@id": "#CharacteristicValue_organism_part_leaf"\r
        },\r
        {\r
          "@id": "#CharacteristicValue_plant_age_28_days_after_germination"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_CAM_03",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "CAM_03",\r
      "additionalProperty": [\r
        {\r
          "@id": "#FactorValue_watering_exposure_12_days_drought"\r
        },\r
        {\r
          "@id": "#FactorValue_Timepoint_MD"\r
        },\r
        {\r
          "@id": "#FactorValue_timepoint-ZT_6"\r
        },\r
        {\r
          "@id": "#FactorValue_Photosynthesis_mode_CAM"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_S_TalinumSamples-STRI_plant_material_2",\r
      "@type": "LabProcess",\r
      "name": "plant_material_2",\r
      "object": {\r
        "@id": "#Source_DB_103"\r
      },\r
      "result": {\r
        "@id": "#Sample_CAM_03"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_plant_material.md_plant_material"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_growth_day_length_12_hr_light_/_12_hr_dark"\r
        },\r
        {\r
          "@id": "#ParameterValue_light_intensity_exposure_425"\r
        },\r
        {\r
          "@id": "#ParameterValue_humidity_day_37"\r
        },\r
        {\r
          "@id": "#ParameterValue_temperature_day_30"\r
        },\r
        {\r
          "@id": "#ParameterValue_temperature_night_22"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Source_DB_161",\r
      "@type": "Sample",\r
      "additionalType": "Source",\r
      "name": "DB_161",\r
      "additionalProperty": [\r
        {\r
          "@id": "#CharacteristicValue_organism_Talinum_fruticosum"\r
        },\r
        {\r
          "@id": "#CharacteristicValue_organism_part_leaf"\r
        },\r
        {\r
          "@id": "#CharacteristicValue_plant_age_28_days_after_germination"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#FactorValue_watering_exposure_12_days_drought_+_2_days_rewatered",\r
      "@type": "PropertyValue",\r
      "additionalType": "FactorValue",\r
      "name": "watering exposure",\r
      "value": "12 days drought + 2 days rewatered",\r
      "propertyID": "https://bioregistry.io/PECO:0007383",\r
      "columnIndex": "8"\r
    },\r
    {\r
      "@id": "#FactorValue_Photosynthesis_mode_reC3",\r
      "@type": "PropertyValue",\r
      "additionalType": "FactorValue",\r
      "name": "Photosynthesis mode",\r
      "value": "reC3",\r
      "columnIndex": "11"\r
    },\r
    {\r
      "@id": "#Sample_reC3_01",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "reC3_01",\r
      "additionalProperty": [\r
        {\r
          "@id": "#FactorValue_watering_exposure_12_days_drought_+_2_days_rewatered"\r
        },\r
        {\r
          "@id": "#FactorValue_Timepoint_MD"\r
        },\r
        {\r
          "@id": "#FactorValue_timepoint-ZT_6"\r
        },\r
        {\r
          "@id": "#FactorValue_Photosynthesis_mode_reC3"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_S_TalinumSamples-STRI_plant_material_3",\r
      "@type": "LabProcess",\r
      "name": "plant_material_3",\r
      "object": {\r
        "@id": "#Source_DB_161"\r
      },\r
      "result": {\r
        "@id": "#Sample_reC3_01"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_plant_material.md_plant_material"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_growth_day_length_12_hr_light_/_12_hr_dark"\r
        },\r
        {\r
          "@id": "#ParameterValue_light_intensity_exposure_425"\r
        },\r
        {\r
          "@id": "#ParameterValue_humidity_day_37"\r
        },\r
        {\r
          "@id": "#ParameterValue_temperature_day_30"\r
        },\r
        {\r
          "@id": "#ParameterValue_temperature_night_22"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Source_DB_163",\r
      "@type": "Sample",\r
      "additionalType": "Source",\r
      "name": "DB_163",\r
      "additionalProperty": [\r
        {\r
          "@id": "#CharacteristicValue_organism_Talinum_fruticosum"\r
        },\r
        {\r
          "@id": "#CharacteristicValue_organism_part_leaf"\r
        },\r
        {\r
          "@id": "#CharacteristicValue_plant_age_28_days_after_germination"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_reC3_02",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "reC3_02",\r
      "additionalProperty": [\r
        {\r
          "@id": "#FactorValue_watering_exposure_12_days_drought_+_2_days_rewatered"\r
        },\r
        {\r
          "@id": "#FactorValue_Timepoint_MD"\r
        },\r
        {\r
          "@id": "#FactorValue_timepoint-ZT_6"\r
        },\r
        {\r
          "@id": "#FactorValue_Photosynthesis_mode_reC3"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_S_TalinumSamples-STRI_plant_material_4",\r
      "@type": "LabProcess",\r
      "name": "plant_material_4",\r
      "object": {\r
        "@id": "#Source_DB_163"\r
      },\r
      "result": {\r
        "@id": "#Sample_reC3_02"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_plant_material.md_plant_material"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_growth_day_length_12_hr_light_/_12_hr_dark"\r
        },\r
        {\r
          "@id": "#ParameterValue_light_intensity_exposure_425"\r
        },\r
        {\r
          "@id": "#ParameterValue_humidity_day_37"\r
        },\r
        {\r
          "@id": "#ParameterValue_temperature_day_30"\r
        },\r
        {\r
          "@id": "#ParameterValue_temperature_night_22"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Source_DB_165",\r
      "@type": "Sample",\r
      "additionalType": "Source",\r
      "name": "DB_165",\r
      "additionalProperty": [\r
        {\r
          "@id": "#CharacteristicValue_organism_Talinum_fruticosum"\r
        },\r
        {\r
          "@id": "#CharacteristicValue_organism_part_leaf"\r
        },\r
        {\r
          "@id": "#CharacteristicValue_plant_age_28_days_after_germination"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_reC3_03",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "reC3_03",\r
      "additionalProperty": [\r
        {\r
          "@id": "#FactorValue_watering_exposure_12_days_drought_+_2_days_rewatered"\r
        },\r
        {\r
          "@id": "#FactorValue_Timepoint_MD"\r
        },\r
        {\r
          "@id": "#FactorValue_timepoint-ZT_6"\r
        },\r
        {\r
          "@id": "#FactorValue_Photosynthesis_mode_reC3"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_S_TalinumSamples-STRI_plant_material_5",\r
      "@type": "LabProcess",\r
      "name": "plant_material_5",\r
      "object": {\r
        "@id": "#Source_DB_165"\r
      },\r
      "result": {\r
        "@id": "#Sample_reC3_03"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_plant_material.md_plant_material"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_growth_day_length_12_hr_light_/_12_hr_dark"\r
        },\r
        {\r
          "@id": "#ParameterValue_light_intensity_exposure_425"\r
        },\r
        {\r
          "@id": "#ParameterValue_humidity_day_37"\r
        },\r
        {\r
          "@id": "#ParameterValue_temperature_day_30"\r
        },\r
        {\r
          "@id": "#ParameterValue_temperature_night_22"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "studies/TalinumSamples-STRI/",\r
      "@type": "Dataset",\r
      "additionalType": "Study",\r
      "identifier": "TalinumSamples-STRI",\r
      "creator": [\r
        {\r
          "@id": "http://orcid.org/0000-0001-9021-3197"\r
        },\r
        {\r
          "@id": "#Person_Klaus_Winter"\r
        }\r
      ],\r
      "dateModified": "2025-07-31T17:41:41.5538662",\r
      "hasPart": [],\r
      "about": [\r
        {\r
          "@id": "#Process_S_TalinumSamples-STRI_plant_material_0"\r
        },\r
        {\r
          "@id": "#Process_S_TalinumSamples-STRI_plant_material_1"\r
        },\r
        {\r
          "@id": "#Process_S_TalinumSamples-STRI_plant_material_2"\r
        },\r
        {\r
          "@id": "#Process_S_TalinumSamples-STRI_plant_material_3"\r
        },\r
        {\r
          "@id": "#Process_S_TalinumSamples-STRI_plant_material_4"\r
        },\r
        {\r
          "@id": "#Process_S_TalinumSamples-STRI_plant_material_5"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Person_Dominik_Brilhaus",\r
      "@type": "Person",\r
      "givenName": "Dominik",\r
      "familyName": "Brilhaus",\r
      "disambiguatingDescription": "Comment {Name = \\"Worksheet\\"}",\r
      "affiliation": {\r
        "@id": "#Organization_Institute_of_Plant_Biochemistry,_HHU_Düsseldorf"\r
      },\r
      "email": "dominik.brilhaus@hhu.de",\r
      "jobTitle": {\r
        "@id": "http://purl.org/spar/scoro/research-assistant"\r
      },\r
      "address": "HHU Düsseldorf, 22.07.U1.43, Universitätsstr. 1, 40225 Düsseldorf",\r
      "telephone": "0211-8115523"\r
    },\r
    {\r
      "@id": "#Person_Tabea_Mettler-Altmann",\r
      "@type": "Person",\r
      "givenName": "Tabea",\r
      "familyName": "Mettler-Altmann",\r
      "disambiguatingDescription": "Comment {Name = \\"Worksheet\\"}"\r
    },\r
    {\r
      "@id": "#Person_Elisabeth_Klemp",\r
      "@type": "Person",\r
      "givenName": "Elisabeth",\r
      "familyName": "Klemp",\r
      "disambiguatingDescription": "Comment {Name = \\"Worksheet\\"}"\r
    },\r
    {\r
      "@id": "#Person_Maria_Graf",\r
      "@type": "Person",\r
      "givenName": "Maria",\r
      "familyName": "Graf",\r
      "disambiguatingDescription": "Comment {Name = \\"Worksheet\\"}"\r
    },\r
    {\r
      "@id": "#Person_Katrin_Weber",\r
      "@type": "Person",\r
      "givenName": "Katrin",\r
      "familyName": "Weber",\r
      "disambiguatingDescription": "Comment {Name = \\"Worksheet\\"}"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/GC.ini",\r
      "sha256": "70cf7c95e660d5cd458957234954db655291321eb798f713d2b454cdf169dae6",\r
      "contentSize": "9996b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/acqmeth.txt",\r
      "sha256": "7a4ea98560f7b535f23bc4421a61dc81c1ec103a289ff69ae25280e818e56987",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/checksum.xml",\r
      "sha256": "1f8e1ea149c19ce37aa9ebbe577c92f6ae642ec9a63d42785f59af5d519dc16d",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/pre_post.ini",\r
      "sha256": "e2c1b339274d0f046b0f924781958588b3081ade3b0f53b431e4adc5fcb9b5d8",\r
      "contentSize": "623b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/runstart.txt",\r
      "sha256": "6ad2a4e47e40ca8969eb9106b4a4567befd419de6e24ce722720c8fa7c25dca2",\r
      "contentSize": "1923b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/Contents.xml",\r
      "sha256": "44f636d91583f6d190a638cc6dbb7d77fb71b5680052db7d9a4cb078de2d7361",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "8764003e61a03e950748755ea406ea50fae442a6b6e6d2053c49c469a353224d",\r
      "contentSize": "1524b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/MSPeak.bin",\r
      "sha256": "bb8bb06ba37d14c3a72c097159c2f0bd6c948ebd92196a1f2bd866e92e16e242",\r
      "contentSize": "243430500b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/MSScan.bin",\r
      "sha256": "3de0862ba13f2116a662f3c20cc35de686854d6540aaafdec961c9d5b13ed1c1",\r
      "contentSize": "1286916b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/MSTS.xml",\r
      "sha256": "75541e7c2740fc5089bf7eae4cbeb3d09965c79226f3ece41fbe9018875f7b01",\r
      "contentSize": "470b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/TDA.bin",\r
      "sha256": "245d594e65d17c39ed3d701da6304fcbae3b068090518b1c74cc2b2579195310",\r
      "contentSize": "276205584b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/TDASpec.bin",\r
      "sha256": "b3ad8054570398511a39a50184661e2f050e52031b2421fbf6c1cba135558abe",\r
      "contentSize": "243650936b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "d4afde325d42c3bdd0522b1ca9c348ecd1633465c41e6e526f89ff61ae45cc00",\r
      "contentSize": "163111b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/sample_info.xml",\r
      "sha256": "0496f7802a13dfe3bb02e3beab5e34927c1e074f3b501a8af3adff559bdf1b19",\r
      "contentSize": "5828b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/sequence.xml",\r
      "sha256": "a48aebda2ccb75bd8e6130827f6c6c247d9573e4caeec3dde52389fe3ae329ff",\r
      "contentSize": "2384b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "sha256": "2cf37230ab009bb3c82e35052c3542ccfd5a5cb982afa712c97d4a14dcbe8905",\r
      "contentSize": "75688b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "sha256": "e9441cc06439e8e3183f49945cfbfae3eca18b2bde51ec51b7979a37f3154874",\r
      "contentSize": "13509b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "sha256": "6e957e28579af6e0132713d3c38b02118c4af3159eb5544b0d913bb7148fb4d7",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "sha256": "37d9769fe3bbb1649efb894ce7d860e768f47d1a31a4f56d3d87d40586717d57",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "sha256": "6cc85dfb23342b3795f4b4b8aa988eac262953cdd8bbefe1da119110e3596688",\r
      "contentSize": "20053b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "sha256": "a67a49baeebe8f580894574dd684587b03830741dedad783df17e0e31805da28",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "sha256": "571efe62cf19c1429bd57febecf31859f48f5f830f25ca6e0edb0bca35a07575",\r
      "contentSize": "244b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "sha256": "7113f9b53c854d439d468139d0b26be06047decdd6252fa4f4cd468a86f0bfe3",\r
      "contentSize": "1446b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "sha256": "17cb95bd03006f5baa59b3a16f79bc6dd0ec506dffda967a629eaab92d2e163f",\r
      "contentSize": "138b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "sha256": "34ba5ea1c379051ad092673205624db1cb00edcdf16656a718433228bbf4a38d",\r
      "contentSize": "3281b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_03.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150112_03.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/GC.ini",\r
      "sha256": "6e61396fd58b07fcb646fed7389ce0b61e1284b3eedd9ac09448c799ab2649e5",\r
      "contentSize": "9991b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/acqmeth.txt",\r
      "sha256": "3b8cc8a2923e010938538cabdf87b902dddafcac6a733f0d36a78b74adbc5ea4",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/checksum.xml",\r
      "sha256": "07585fd35ce5b860ba149cacb5aac5341a2dfd504853dd0f72711722d3169820",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/pre_post.ini",\r
      "sha256": "fa1b210f77f861fdfe8db1d2938aa74eb82500be3ced35d322b4d919f43b83df",\r
      "contentSize": "612b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/runstart.txt",\r
      "sha256": "31d1743c45aa68d6ae467bf6f6b56f942d8fd56d156938e55a9d5d0ab5b0d24b",\r
      "contentSize": "1912b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/Contents.xml",\r
      "sha256": "79e4243dfcc3d546604bb0ea8a9fe87183df762338d9d8b8a74d41ab4f91ce16",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "8764003e61a03e950748755ea406ea50fae442a6b6e6d2053c49c469a353224d",\r
      "contentSize": "1524b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/MSPeak.bin",\r
      "sha256": "f4fbf59817ed37f5c44a939b66e9d772fb4f7c85e059263178f8f6446ed2be1f",\r
      "contentSize": "192623780b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/MSScan.bin",\r
      "sha256": "7682c84fbd4a36e0847be8c52fc656b81d3f3380ff924eb724b0f71e083ffc13",\r
      "contentSize": "1295028b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/MSTS.xml",\r
      "sha256": "3f073ee1a77485106a4c93cf622e07c58ea41da3990c3f571f6b6f6169fc1974",\r
      "contentSize": "464b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/TDA.bin",\r
      "sha256": "410cbcd4d98d89215876f3cc69ca42822e63bb12946fd5ddf46615cac286b42e",\r
      "contentSize": "221859872b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/TDASpec.bin",\r
      "sha256": "a5f0e9d4cab03e15f20cf4b510c7ddcf0b393bea1cdba2f58bad734885d8823f",\r
      "contentSize": "192847528b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "77b5b97b6459f4b60a58c0de8c0a166eafbb0c8b96f891bb0b166a09991127bf",\r
      "contentSize": "164047b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/sample_info.xml",\r
      "sha256": "ca2aa5aa054d325287320823666f18779c573195d0ce10b3c0eb350d7edaa7f7",\r
      "contentSize": "5818b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/sequence.xml",\r
      "sha256": "65c93910b5815f35539a2f0429657167b2c80c1fc9d6b8fca63d5b4fd64b1cf0",\r
      "contentSize": "2381b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "sha256": "7bdc10a9437bda57ef8112c24c65508e49613705911f1c7ed82a0bc3b53ee212",\r
      "contentSize": "75676b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "sha256": "258f4c395fa4d4300a5b86e720f5a410b09dcae391cfe11213368b3866195d73",\r
      "contentSize": "11933b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "sha256": "623ed0b55fb0e5a10828577fb46c4e83034ee3341fad63aec2d1acb58936e6e6",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "sha256": "a584931166cd82bf8a2a855cb550b8fab8e5e336524d4b09f3083541ce2393fc",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "sha256": "2f2fea0c502273266f26c60402133204a9582b9306d767be7970e04d6179b4e0",\r
      "contentSize": "17589b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "sha256": "4bbee3ead43b538817457b5f5ebfcd8a6887866240a32734c9ca32211e174388",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "sha256": "75a6289ca65f7ea0d11596c2146a69f9db81b04ffab2387739f97fc18f7fa56c",\r
      "contentSize": "2315b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "sha256": "dd3e025b8cc61d7bf9cf76af79fa9f3e3972867627841b64429f8bc7c0338a66",\r
      "contentSize": "125b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "sha256": "a578c4aed064603a7679569e831fafa402093b9ba8796f51152a76b39480fe7c",\r
      "contentSize": "2591b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_04.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150112_04.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/GC.ini",\r
      "sha256": "ca8474e055c26335b4bd6232a32ba7585b88b55fbcbae112f44f1dab3fe1cb00",\r
      "contentSize": "9995b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/acqmeth.txt",\r
      "sha256": "d53ad8ac904883d342886c6651120bc776d80ff4de5c13b53cc5a13873f724c2",\r
      "contentSize": "13058b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/checksum.xml",\r
      "sha256": "d6c6925cf074138ba4efe95847fdf277b629e7a3eb2e2dd0a521181e85e3f743",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/pre_post.ini",\r
      "sha256": "8ae01981c51d5f363921a5762b028033975705304bf4f0a3578cb01bc3453405",\r
      "contentSize": "615b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/runstart.txt",\r
      "sha256": "0a4640d19227a05ec4a8f269359e5f8bbc2f572e0528afa61b5650e5371a8c9e",\r
      "contentSize": "1903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/Contents.xml",\r
      "sha256": "b26000557e7d3f058e31e6fd5d0dac974222236ee01af01491503c534c9e8d2a",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "2e77fae8346abf384d4c1a64289939ebec7531a7814c96eff19a756c5d714a9b",\r
      "contentSize": "1526b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/MSPeak.bin",\r
      "sha256": "471398b712d6e3536d60a750a8b1563e9950bbe024a01b67455d69b8214630d7",\r
      "contentSize": "219285540b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/MSScan.bin",\r
      "sha256": "bedf7be36221a48a9b4615a81938483a17d48a4ab36fd9d0f304ce15264cfefc",\r
      "contentSize": "1295028b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/MSTS.xml",\r
      "sha256": "7cb4e38d6a24e80489ccf5ae089349743345830bcf0a31c2dd6413cb061b8bc5",\r
      "contentSize": "470b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/TDA.bin",\r
      "sha256": "4dd0c931aabbbd6d1d29e42f3ab16a4081413f6973bf13025bbf70ff0d8d9552",\r
      "contentSize": "250749384b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/TDASpec.bin",\r
      "sha256": "10cdc86c9872b8faeef903c8f3adfdcbec01e7c5b4e550eb7acb8958fab81027",\r
      "contentSize": "219509360b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "939f96f538bf83303df3d57316f3447bfeb4c33aaebf3a7bb550474b326371dc",\r
      "contentSize": "164047b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/sample_info.xml",\r
      "sha256": "78c47c73b4afe041364eb090c116f3f0a9571a82639315ff3950fe6abf94cb90",\r
      "contentSize": "5814b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/sequence.xml",\r
      "sha256": "3c71afe2ca71908cdd0da2f6e50b1f9014a4ce651bddccd9b377f75763393c6c",\r
      "contentSize": "2370b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/7890Method.bin",\r
      "sha256": "c0b3d972be667df4d09df1e3edc2ff0f0aae094c85fd106ebcc96253529c274d",\r
      "contentSize": "75686b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/Acq.RTP.xml",\r
      "sha256": "ae12063b277a6b676bc3782f8255230bbfbbf0ac7449dde09852f8ea884a966e",\r
      "contentSize": "1527b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/Audit.txt",\r
      "sha256": "27c2a3d2094c434b802960c53cc7f27a9cae8da67ac525054b340b581b760185",\r
      "contentSize": "12181b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/LastData.mac",\r
      "sha256": "86b1626ac4ba666728ef0392dcd62724efcac92f0dbfbf851d4d07c6cc0da11f",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/acqmeth.txt",\r
      "sha256": "fc9b059f7641276d7b5f659c54c344d166957b0ed55a28714ff0c30ebfe050a4",\r
      "contentSize": "13058b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/maestro.mth",\r
      "sha256": "0a3f16e2aaed100102316dfa2d437a755c82aac354710f9dae4d34c4b73f8b77",\r
      "contentSize": "17592b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/method.ini",\r
      "sha256": "fa5e7dfbe945e34d531491ec61e1fb6fe5a37101b43e40fdb4a8b228a3cdc0dd",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/method.mac",\r
      "sha256": "ca4a6d96b465d390531c56859d21a4b485c8abab72238e7a702b14002ecd04af",\r
      "contentSize": "254b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/method.txt",\r
      "sha256": "75a6289ca65f7ea0d11596c2146a69f9db81b04ffab2387739f97fc18f7fa56c",\r
      "contentSize": "2315b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/method.xml",\r
      "sha256": "dd3e025b8cc61d7bf9cf76af79fa9f3e3972867627841b64429f8bc7c0338a66",\r
      "contentSize": "125b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/msacqmethod.xml",\r
      "sha256": "a578c4aed064603a7679569e831fafa402093b9ba8796f51152a76b39480fe7c",\r
      "contentSize": "2591b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_15.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150112_15.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D/AcqData/inject_EC5_2GHz_Fiensplitless.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/GC.ini",\r
      "sha256": "e9c52cd6ac6e5cdb3825e7ba2e590efe0ada2dd2fc53a0d33198ce828c9930de",\r
      "contentSize": "9991b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/acqmeth.txt",\r
      "sha256": "29ee73cfa44ae89633ccd33a4653105186b0a38092b088bcec6a91ac186d75fe",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/checksum.xml",\r
      "sha256": "90b2f1bccb54c9644de9c8f7ecb944ba2706705c51bad241335604a840f16470",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/pre_post.ini",\r
      "sha256": "ef406fd80390bbd60f7b12dd935fee21b69026ffc3b3b5c49c3ed162a635e7bc",\r
      "contentSize": "612b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/runstart.txt",\r
      "sha256": "83c6d23602c0bd4e5f8a6ca2434266462ec0d3b7d0801ce48f8b8cf9018719b1",\r
      "contentSize": "1900b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/Contents.xml",\r
      "sha256": "102e2ece229b48beb1944199f746f7626eb80e07964714c66af0ad6ebff50e3c",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "2e77fae8346abf384d4c1a64289939ebec7531a7814c96eff19a756c5d714a9b",\r
      "contentSize": "1526b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/MSPeak.bin",\r
      "sha256": "d083b7d1a989b6f609ce35a8a8aaeaf1b4ec9628ab27e509db00ed1ef5f875e2",\r
      "contentSize": "194351524b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/MSScan.bin",\r
      "sha256": "b9ab093136d76084cf15e4a7bae4ed5debdb0bc10cf1d99b59c6785f053228d8",\r
      "contentSize": "1294820b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/MSTS.xml",\r
      "sha256": "e3f20bccec5410c327457c979240a5b727443de4768e70945b12e2f54fcae093",\r
      "contentSize": "464b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/TDA.bin",\r
      "sha256": "70a6f7c26b6c18783e62c077cc1b93f720e1d5cfc9e92a83b14ebbf966ce7d95",\r
      "contentSize": "221365912b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/TDASpec.bin",\r
      "sha256": "2f8522775d85acb67cb64cd58ea275e8a8105be04d7067ba99b291ff5b5355ce",\r
      "contentSize": "194575308b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "fde62bb894abb2b845d6bbe36d459fb2cda79960989e11cb94b93466ab6c6774",\r
      "contentSize": "164023b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/sample_info.xml",\r
      "sha256": "f6e91a6c558c920a5d2f9f1c1f0f23aa7f6b312d7a28380c65be3333cab782a6",\r
      "contentSize": "5811b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/sequence.xml",\r
      "sha256": "3dd624307b60232e995c463c4928f40d58cc8d42b71385746ab5bc02adaa6728",\r
      "contentSize": "2367b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "sha256": "7bdc10a9437bda57ef8112c24c65508e49613705911f1c7ed82a0bc3b53ee212",\r
      "contentSize": "75676b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "sha256": "258f4c395fa4d4300a5b86e720f5a410b09dcae391cfe11213368b3866195d73",\r
      "contentSize": "11933b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "sha256": "d4fa9f9846f9e439d976c116c9ecaf9d50d7f5b62fb98d4ef82d4e8710ed175c",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "sha256": "a584931166cd82bf8a2a855cb550b8fab8e5e336524d4b09f3083541ce2393fc",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "sha256": "2f2fea0c502273266f26c60402133204a9582b9306d767be7970e04d6179b4e0",\r
      "contentSize": "17589b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "sha256": "4bbee3ead43b538817457b5f5ebfcd8a6887866240a32734c9ca32211e174388",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "sha256": "75a6289ca65f7ea0d11596c2146a69f9db81b04ffab2387739f97fc18f7fa56c",\r
      "contentSize": "2315b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "sha256": "dd3e025b8cc61d7bf9cf76af79fa9f3e3972867627841b64429f8bc7c0338a66",\r
      "contentSize": "125b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "sha256": "a578c4aed064603a7679569e831fafa402093b9ba8796f51152a76b39480fe7c",\r
      "contentSize": "2591b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_16.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150112_16.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/GC.ini",\r
      "sha256": "a8d7b993a63c6aeb348724e2ca830d532f6f675bf27223877ae527c8950639f5",\r
      "contentSize": "9993b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/acqmeth.txt",\r
      "sha256": "3cad7d2813c22c4aae7db1bd371bbc2051ab9a9442d3f6452e445d01b53b1bea",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/checksum.xml",\r
      "sha256": "11d8f17904b891cc49dd7ddce443a5ef304a34d10d6cadcb8699b72b6751f7bc",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/pre_post.ini",\r
      "sha256": "491710d64b30ba7bd320176a254b323be27949bae7a5c437514d20ea1593cd00",\r
      "contentSize": "623b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/runstart.txt",\r
      "sha256": "957aa55db2d30b8fc65aaade82d0572be6a28641c05f20f6a7a5e993fd65fd79",\r
      "contentSize": "1906b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/Contents.xml",\r
      "sha256": "f85456de20e60b8b14a6daa39217683f9c224de961a9372f90c60d8afbca9c9b",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "5749c6f88ef6bf7cce4ece6effb17a45fdb643f9bf9d2c8d71b4909f0cd10370",\r
      "contentSize": "1523b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/MSPeak.bin",\r
      "sha256": "f0034abf5dfddf1fc37e7a4469a10085d4e18d01f6fc1dab0029d5a6653d8634",\r
      "contentSize": "302937060b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/MSScan.bin",\r
      "sha256": "9272b66f8aa6b0f6eca32e756c593943238fe3676c09db907663296a35f8f6c5",\r
      "contentSize": "1286916b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/MSTS.xml",\r
      "sha256": "3e76b01121788ccbe8245ace0e6eb14b85df451f9fbad5c8a6ccce3935929cdf",\r
      "contentSize": "470b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/TDA.bin",\r
      "sha256": "494b0b556eabfe4217caf899b79cc7dabdee231d40cf86576aeef038fb54c961",\r
      "contentSize": "336541096b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/TDASpec.bin",\r
      "sha256": "f3971eb33bae3ab91e17991d3b89b0cf62ff4d6e5d08af0016b87ea639936997",\r
      "contentSize": "303158252b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "c89e2daaf518b177361a8ee6db6de847e8f84f406b0276ea602ea0784aa9c975",\r
      "contentSize": "163111b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/sample_info.xml",\r
      "sha256": "6904012d56dcc161bcdcc17094492ad3c467772c6c44110439cacd195e184504",\r
      "contentSize": "5821b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/sequence.xml",\r
      "sha256": "733117dfd62cff3ee270e26f10111de88a030218136edf7bc155d5e5c3b5e007",\r
      "contentSize": "2382b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "sha256": "2cf37230ab009bb3c82e35052c3542ccfd5a5cb982afa712c97d4a14dcbe8905",\r
      "contentSize": "75688b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "sha256": "ccce389cf85a41c9166d3a1ca83430cd96bf46624df8952a219bb1e70ccb666d",\r
      "contentSize": "13528b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "sha256": "fdbdf854f6011bffed6c725eca10f2d82e7743a58b5f1a29b822b93c493ec0cb",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "sha256": "1bc6ade2f8813d4e744930db055ea4fe77c56dc8b8c381c5033c5adb94fff152",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "sha256": "2dd1c43216a4f6c7060708d653987f5bf6eedea9a1aad7846a995b2341d85376",\r
      "contentSize": "20053b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "sha256": "de1cad3aa67f77e3fd9991d51e096b4ed74de422c2a7647c021894fe578865d0",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "sha256": "60cde12a299eb1e726c631f2d90aa23ac70bf0ace9898491f76a2e3715cdcc5b",\r
      "contentSize": "244b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "sha256": "a59883618631e7bd33a463924961f3efa3c97f5ba9106f748789fe01377d6e00",\r
      "contentSize": "1757b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "sha256": "b705438ea9b0461b0a47499a04560a55a75ad479485009d1fc5e9b20fa960b83",\r
      "contentSize": "138b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "sha256": "34ba5ea1c379051ad092673205624db1cb00edcdf16656a718433228bbf4a38d",\r
      "contentSize": "3281b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_55.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150112_55.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/GC.ini",\r
      "sha256": "26ce45bf8d5d1cc9ce3945477a48491e3da1d4060ab7ce8e57e748e2971b1d7d",\r
      "contentSize": "9990b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/acqmeth.txt",\r
      "sha256": "fa2f132c051915eaee03f65199964264f6c12280a0fb29f9fdd2a36bd0ed5180",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/checksum.xml",\r
      "sha256": "ff63c5a0daf9e99eaf1418b9606e470a421ae663e6620488be9a197b64f4d1b7",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/pre_post.ini",\r
      "sha256": "75600fca3964e46e04fcfa4aab4449118babe85ae670b740026d3efd36e11444",\r
      "contentSize": "612b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/runstart.txt",\r
      "sha256": "56085990cd1b05dd79091c3e542a8ae2b750132f148a1ba4e2f0be73e8a5dd27",\r
      "contentSize": "1895b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/Contents.xml",\r
      "sha256": "9f8d2b8b38fe5040c8dc7e8c8c995e9ee8cf80d13a8475a772e9da603cfa238d",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "5749c6f88ef6bf7cce4ece6effb17a45fdb643f9bf9d2c8d71b4909f0cd10370",\r
      "contentSize": "1523b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/MSPeak.bin",\r
      "sha256": "0de59e52a8651fc3e50663ad50c183819abaa4e65c087250ac1bd186d2fd2d3d",\r
      "contentSize": "216067940b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/MSScan.bin",\r
      "sha256": "869ffbe31621ee7771a92e6f0bcfa727b0f1ae28381e5a4b27bb993cfd9d9e69",\r
      "contentSize": "1294820b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/MSTS.xml",\r
      "sha256": "e3f20bccec5410c327457c979240a5b727443de4768e70945b12e2f54fcae093",\r
      "contentSize": "464b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/TDA.bin",\r
      "sha256": "864ca2d48f154ee0ecc323edf3e01d9b701d2dc85d72d0d75c528b8bb2048500",\r
      "contentSize": "246474972b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/TDASpec.bin",\r
      "sha256": "7094c32717d6817503060326906c66ba6321eaf72565c40372e41898d0d33bf0",\r
      "contentSize": "216291760b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "3758fa1cef6c486a4b76a64717c911424a2bc417310ce8735aed6aa8a7bddc0e",\r
      "contentSize": "164023b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/sample_info.xml",\r
      "sha256": "de6b0f4b8133004cf2024486676054356657be72ef430e9a744b90c06f3b37d8",\r
      "contentSize": "5807b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/sequence.xml",\r
      "sha256": "56d7dfaee51a30b022baf9a21dfc2cc6bf3fff0b3cf331e6fe26953a73ee9c20",\r
      "contentSize": "2365b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "sha256": "7bdc10a9437bda57ef8112c24c65508e49613705911f1c7ed82a0bc3b53ee212",\r
      "contentSize": "75676b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "sha256": "258f4c395fa4d4300a5b86e720f5a410b09dcae391cfe11213368b3866195d73",\r
      "contentSize": "11933b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "sha256": "b60bcdb64d03b0cd14df338198d0669934f4fc2bbe040620f2685274d0810873",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "sha256": "a584931166cd82bf8a2a855cb550b8fab8e5e336524d4b09f3083541ce2393fc",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "sha256": "2f2fea0c502273266f26c60402133204a9582b9306d767be7970e04d6179b4e0",\r
      "contentSize": "17589b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "sha256": "4bbee3ead43b538817457b5f5ebfcd8a6887866240a32734c9ca32211e174388",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "sha256": "75a6289ca65f7ea0d11596c2146a69f9db81b04ffab2387739f97fc18f7fa56c",\r
      "contentSize": "2315b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "sha256": "dd3e025b8cc61d7bf9cf76af79fa9f3e3972867627841b64429f8bc7c0338a66",\r
      "contentSize": "125b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "sha256": "a578c4aed064603a7679569e831fafa402093b9ba8796f51152a76b39480fe7c",\r
      "contentSize": "2591b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_56.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150112_56.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/GC.ini",\r
      "sha256": "85ef3285feb3e0483eeace1f171e9b8a6ed05d3b8ce93e0f26d5ea3996742e9d",\r
      "contentSize": "9995b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/acqmeth.txt",\r
      "sha256": "20b145fc323d3678a4069692ab579f6690cf948f6ff6d7241c0eb17d34fecf4d",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/checksum.xml",\r
      "sha256": "6f81b945f065a3cd9cc6ae81386d90e0146c1e26fdd91326ae71ddcbee4eda45",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/pre_post.ini",\r
      "sha256": "9d8dc8df75fb532e6be2e88eed8e360c902920f46cf4c3455f73956c47796365",\r
      "contentSize": "623b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/runstart.txt",\r
      "sha256": "d378cb3442a84b595a0bc26e727ac5b7bc152d407f0db14e19c972c6a660537c",\r
      "contentSize": "1906b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/Contents.xml",\r
      "sha256": "861ec313c02c71469d7833e5991dd7007213f73bff2db29976c53d656dbc6c1e",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "fd006f51dad21b6c98e93a274f583b4334da8d911ca3f131db5562f904bef6d0",\r
      "contentSize": "1524b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/MSPeak.bin",\r
      "sha256": "2efdccf4822750fcf1f05a96ca38c62b47f53cffed9a52a0e93fb8fb42f52564",\r
      "contentSize": "242346724b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/MSScan.bin",\r
      "sha256": "136fb22402b97a6546cd5d791c45f1fcfea75d04de3c002d68b4ac8511787c1d",\r
      "contentSize": "1286916b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/MSTS.xml",\r
      "sha256": "88beb8e0b16598f71be277d101cff57d2cb162ef1a95773099932f98cd08e0b0",\r
      "contentSize": "464b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/TDA.bin",\r
      "sha256": "d97b00134285c7b260584a8d8076512a7cd8b56df9e21f9b7c196981db6d45d7",\r
      "contentSize": "274588988b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/TDASpec.bin",\r
      "sha256": "e94800b2b7f7a155169719edadb87f0e791e53540d4aee8f7776691e3206fbf6",\r
      "contentSize": "242567268b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "3cbcb17e97b12d46791d69ad750062a759bf6cd8606254e67a84142688d470e9",\r
      "contentSize": "163111b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/sample_info.xml",\r
      "sha256": "dc108ef81190cc8acca4321d5b90fefa3a13c2f68fe834787effd096b132399f",\r
      "contentSize": "5819b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/sequence.xml",\r
      "sha256": "8638e23c91b90948d74e5e5225ab1e647cf7d3679e6c15f4fd9d6d9145f1140b",\r
      "contentSize": "2382b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "sha256": "2cf37230ab009bb3c82e35052c3542ccfd5a5cb982afa712c97d4a14dcbe8905",\r
      "contentSize": "75688b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "sha256": "5cf9b208a061f165513c5aac58e5f632e5259ffc5e188d46fbbb6bac3c13bf21",\r
      "contentSize": "13522b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "sha256": "f9e46249ff9010893cacb684da24b927fe0973497dfefaf341559b13ae9c5b59",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "sha256": "721a64818002c3c2109d530ed908868f937383ac9295c22a32134033d737f2bf",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "sha256": "6df6bc132f03d40813bcc05dd5685900c46155e8b452c17ba2f4c2bd4caea4a5",\r
      "contentSize": "20053b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "sha256": "d15d9e17d2bc2f1f4cd74156d1a255df40ab5343acaf7e58bb3ded7f3540a5cf",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "sha256": "60cde12a299eb1e726c631f2d90aa23ac70bf0ace9898491f76a2e3715cdcc5b",\r
      "contentSize": "244b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "sha256": "dfaaab9269987be4bcffb327afac5a01d4ac42f8fe0a307d39e6a7494ff3b9ab",\r
      "contentSize": "2068b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "sha256": "b705438ea9b0461b0a47499a04560a55a75ad479485009d1fc5e9b20fa960b83",\r
      "contentSize": "138b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "sha256": "34ba5ea1c379051ad092673205624db1cb00edcdf16656a718433228bbf4a38d",\r
      "contentSize": "3281b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_61.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150112_61.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/GC.ini",\r
      "sha256": "6fc5975fcc7890c964ebfa3b57dfa042a736a6ea3c86f316a475ed070b5769be",\r
      "contentSize": "9989b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/acqmeth.txt",\r
      "sha256": "6340a27f78dd05ab33f6202da13b0fae3a4231a7835290bcc71045baf25e5332",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/checksum.xml",\r
      "sha256": "b2315b3f363aa74058735885cd79e7db17e7e461f593df1566224f43a25235c5",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/pre_post.ini",\r
      "sha256": "ad1db1fc30022991322575636e73d5822d9c15b8222db576de1528b1f7ab25d3",\r
      "contentSize": "612b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/runstart.txt",\r
      "sha256": "3a2471cd0e8e351c7166ae4ca9b6e0de850d4c13d686df5fdf8a46417bb09aa6",\r
      "contentSize": "1895b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/Contents.xml",\r
      "sha256": "44507a59eea544d8e5acbec9aaf3f83984b65b9b5002992a58def26989fbd6f4",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "fd006f51dad21b6c98e93a274f583b4334da8d911ca3f131db5562f904bef6d0",\r
      "contentSize": "1524b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/MSPeak.bin",\r
      "sha256": "526823287e2a297a351c0dc5c81940d8f94679b1ca5b21f7d0a3aa3b19249638",\r
      "contentSize": "209303956b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/MSScan.bin",\r
      "sha256": "8a7552035add0fd71895bd0cdcb01ea34c5cb80a66ec32b2d2d415d04ef4e32d",\r
      "contentSize": "1294820b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/MSTS.xml",\r
      "sha256": "bad2fc455e31ce186d8008ec74d93ecfb7d235e8a398aac534389ea3c24b0490",\r
      "contentSize": "459b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/TDA.bin",\r
      "sha256": "80216ca3ddb7945135aa1d2f12314fe328aa6c86e5d13233b5fc68440fc34afa",\r
      "contentSize": "239441156b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/TDASpec.bin",\r
      "sha256": "f9a92b6f576cc423a8b986cfba087d1f119f97f54c465d8d4e32fd95d8149ca9",\r
      "contentSize": "209527740b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "b86ac15af27bfa3e0f192b04dcc1f5221fc29b1fbc4a76a2892562b85287f660",\r
      "contentSize": "164023b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/sample_info.xml",\r
      "sha256": "7c86e54d8b84fbde5b7f0a763ce735755148327711adcbbbc48a00978e9080e4",\r
      "contentSize": "5811b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/sequence.xml",\r
      "sha256": "bf8258e38d149494d5f1e7d5870d56d5478689bcddfab6c3170dd26d9451d836",\r
      "contentSize": "2365b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "sha256": "7bdc10a9437bda57ef8112c24c65508e49613705911f1c7ed82a0bc3b53ee212",\r
      "contentSize": "75676b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "sha256": "258f4c395fa4d4300a5b86e720f5a410b09dcae391cfe11213368b3866195d73",\r
      "contentSize": "11933b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "sha256": "9863eb278762349d69d0598fbd80d39dcc3cd78164933aeb091368b5e6377655",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "sha256": "a584931166cd82bf8a2a855cb550b8fab8e5e336524d4b09f3083541ce2393fc",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "sha256": "2f2fea0c502273266f26c60402133204a9582b9306d767be7970e04d6179b4e0",\r
      "contentSize": "17589b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "sha256": "4bbee3ead43b538817457b5f5ebfcd8a6887866240a32734c9ca32211e174388",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "sha256": "75a6289ca65f7ea0d11596c2146a69f9db81b04ffab2387739f97fc18f7fa56c",\r
      "contentSize": "2315b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "sha256": "dd3e025b8cc61d7bf9cf76af79fa9f3e3972867627841b64429f8bc7c0338a66",\r
      "contentSize": "125b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "sha256": "a578c4aed064603a7679569e831fafa402093b9ba8796f51152a76b39480fe7c",\r
      "contentSize": "2591b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_62.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150112_62.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/GC.ini",\r
      "sha256": "b7ee0070bb82b27aa630ff4a7094251d51df821027be38958077649cff9bb30b",\r
      "contentSize": "9993b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/acqmeth.txt",\r
      "sha256": "7ee81ce90b99e210fd51c9528cb338c60bae2708144dcc5baaf220244ecafc5a",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/checksum.xml",\r
      "sha256": "57ef80aba640e607edbaf89a620855a3a59e917a5ffffe1aaa236db974c34965",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/pre_post.ini",\r
      "sha256": "d9e55a8d0b299417f4e39c3eb12dd94fad0d54eb52ca0d91ae2cb444bbdcb0ad",\r
      "contentSize": "623b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/runstart.txt",\r
      "sha256": "3e8f7f6f740091c1f01f3eb87cada4b19d04f4ac36b3b3e26e76b9a85dc65144",\r
      "contentSize": "1906b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/Contents.xml",\r
      "sha256": "71ade38de3001bd644c2a8373ddc119a19fc848f463930414001eb629dc29260",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "fd006f51dad21b6c98e93a274f583b4334da8d911ca3f131db5562f904bef6d0",\r
      "contentSize": "1524b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/MSPeak.bin",\r
      "sha256": "e90fad75f2a9fbd6e62430012ca95267f77b819dcda880695566a8fdb616a262",\r
      "contentSize": "263327156b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/MSScan.bin",\r
      "sha256": "02f993cd0a5c006bda35627707b2d7ff37661970216384e69ea88147a1a90388",\r
      "contentSize": "1286916b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/MSTS.xml",\r
      "sha256": "846edb5506abcb30f8a0e4509a0574843ed5b6a94c9a48814db963f99f894012",\r
      "contentSize": "470b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/TDA.bin",\r
      "sha256": "7c29dbae6d77753fb65189ecac670a17fcf08d0b61ff044eb0fc52a68814b29d",\r
      "contentSize": "296154944b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/TDASpec.bin",\r
      "sha256": "203e31e245b9fef6df89a398398b693e27639d552b457e9a0713f22c8b4fb450",\r
      "contentSize": "263547772b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "8d23a6b7a2914ab80d33fc66f869545b62918c163b96c1ca3ed267f8625a3b6c",\r
      "contentSize": "163111b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/sample_info.xml",\r
      "sha256": "898af1a39782b79ec077d9d882136db55be5dbf40b5c824fef94fc11daac3160",\r
      "contentSize": "5820b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/sequence.xml",\r
      "sha256": "ee8d27137c489fd01586042a944e068ef27ed5287a842fa1b4364796999284c6",\r
      "contentSize": "2382b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "sha256": "2cf37230ab009bb3c82e35052c3542ccfd5a5cb982afa712c97d4a14dcbe8905",\r
      "contentSize": "75688b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "sha256": "5cf9b208a061f165513c5aac58e5f632e5259ffc5e188d46fbbb6bac3c13bf21",\r
      "contentSize": "13522b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "sha256": "493d5586c71388f291f9b13a3d979ff2025286c4b743b2394df21a4475fb6aec",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "sha256": "721a64818002c3c2109d530ed908868f937383ac9295c22a32134033d737f2bf",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "sha256": "6df6bc132f03d40813bcc05dd5685900c46155e8b452c17ba2f4c2bd4caea4a5",\r
      "contentSize": "20053b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "sha256": "d15d9e17d2bc2f1f4cd74156d1a255df40ab5343acaf7e58bb3ded7f3540a5cf",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "sha256": "60cde12a299eb1e726c631f2d90aa23ac70bf0ace9898491f76a2e3715cdcc5b",\r
      "contentSize": "244b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "sha256": "dfaaab9269987be4bcffb327afac5a01d4ac42f8fe0a307d39e6a7494ff3b9ab",\r
      "contentSize": "2068b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "sha256": "b705438ea9b0461b0a47499a04560a55a75ad479485009d1fc5e9b20fa960b83",\r
      "contentSize": "138b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "sha256": "34ba5ea1c379051ad092673205624db1cb00edcdf16656a718433228bbf4a38d",\r
      "contentSize": "3281b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_65.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150112_65.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D/AcqData/73_84_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/GC.ini",\r
      "sha256": "27624fe8efbdf42766e4ee03d5eff14155ae986527c398ce61c1239fe3265830",\r
      "contentSize": "9990b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/acqmeth.txt",\r
      "sha256": "b044f43921c482cbc0d8ff2ca912e1ab0b143b960647cc844688169e2edcd7f1",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/checksum.xml",\r
      "sha256": "e0870618203d087a108c08b32de2dd88e931b9ea5dce778a835f5f3f082164b8",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/pre_post.ini",\r
      "sha256": "aa8bdc18a81798f4746e7d36b4c3db4f7b65c8794b03a20f93805030bb6e0db9",\r
      "contentSize": "612b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/runstart.txt",\r
      "sha256": "1028615d4cecd5f06a4536c1db2a04f8cdcf76efc9f85f71a0ab7f12f9d56de6",\r
      "contentSize": "1895b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/Contents.xml",\r
      "sha256": "332d494e0ccbe4f670da17875c8aa75d49c1b00af0416041b71511f53549bdff",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "fd006f51dad21b6c98e93a274f583b4334da8d911ca3f131db5562f904bef6d0",\r
      "contentSize": "1524b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/MSPeak.bin",\r
      "sha256": "6fcb74d101eee751e1e20c4afdc97b43a2d5abd81303e538b75a146c7d61c822",\r
      "contentSize": "210922132b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/MSScan.bin",\r
      "sha256": "0e853f69ebe28b8c5fba4b26d261f9418535d1ebf535c0f3c715ca6b7fb225e6",\r
      "contentSize": "1295028b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/MSTS.xml",\r
      "sha256": "3587b1aa9ba076ae07c89564f234301e5a21ecd5b161f2208920850e3b563634",\r
      "contentSize": "470b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/TDA.bin",\r
      "sha256": "66ec1b7f9326011101c54779b19d76653452c573e2f24d6dbeb15d82c701328e",\r
      "contentSize": "241046656b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/TDASpec.bin",\r
      "sha256": "6a365d4b09905048c46e2ac27183a9bcacd92c8133ee08d5afe4bc7729af5179",\r
      "contentSize": "211146060b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "bd3f6cedc21ae490f03ede528a7da39bae595880c0f0800433e62dc4135f2e42",\r
      "contentSize": "164047b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/sample_info.xml",\r
      "sha256": "8310bc8b9a7687aa15cfaed753d1954e57aa61fb2f149e0e4beb94ff66fd5d84",\r
      "contentSize": "5807b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/sequence.xml",\r
      "sha256": "9ddd2ce0438d736759a2ebca62371d0c8ebb46457e8a0eb67aaffb21f85ce8d4",\r
      "contentSize": "2365b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "sha256": "7bdc10a9437bda57ef8112c24c65508e49613705911f1c7ed82a0bc3b53ee212",\r
      "contentSize": "75676b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "sha256": "258f4c395fa4d4300a5b86e720f5a410b09dcae391cfe11213368b3866195d73",\r
      "contentSize": "11933b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "sha256": "71fae576613dc389c531bd7fe3f9b799b6953270cdfafd9f8d94a37e49dbca13",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "sha256": "a584931166cd82bf8a2a855cb550b8fab8e5e336524d4b09f3083541ce2393fc",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "sha256": "2f2fea0c502273266f26c60402133204a9582b9306d767be7970e04d6179b4e0",\r
      "contentSize": "17589b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "sha256": "4bbee3ead43b538817457b5f5ebfcd8a6887866240a32734c9ca32211e174388",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "sha256": "75a6289ca65f7ea0d11596c2146a69f9db81b04ffab2387739f97fc18f7fa56c",\r
      "contentSize": "2315b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "sha256": "dd3e025b8cc61d7bf9cf76af79fa9f3e3972867627841b64429f8bc7c0338a66",\r
      "contentSize": "125b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "sha256": "a578c4aed064603a7679569e831fafa402093b9ba8796f51152a76b39480fe7c",\r
      "contentSize": "2591b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150112_66.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150112_66.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/GC.ini",\r
      "sha256": "4b8a7b79912f1f8619649a9b5ab5f7685127fab11b1d610de6787df960f29182",\r
      "contentSize": "9994b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/acqmeth.txt",\r
      "sha256": "94411fff81d1ac30ac34c922434e0ee4c86d982fb4e11d7f3aec7402832026bc",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/checksum.xml",\r
      "sha256": "d477143105047a47b929f8a83d5a40880428567107707db9372daefeba796145",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/pre_post.ini",\r
      "sha256": "5f12afd236fb41ff7632d0a6cfb88af577deb7222314cde7610d7b9987cf20bd",\r
      "contentSize": "624b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/runstart.txt",\r
      "sha256": "579b59b5701a76f838c0c2c28d1f6641661a560be0746a7897882c3f3557f140",\r
      "contentSize": "1923b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/Contents.xml",\r
      "sha256": "894cafb3e288674f7bdfdc7fcc3f25957d3e74ba87da2f0aeba397a409b4507b",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "458495eb08c7e41a145f0d50738c122cc2db80aafbb1ed427aff553231f3fa6d",\r
      "contentSize": "1524b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/MSPeak.bin",\r
      "sha256": "e1de33a5938813e1de9e54b8cd5666b140a9671d3549da52ba4b64cd5ba9c154",\r
      "contentSize": "203506100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/MSScan.bin",\r
      "sha256": "23dc1f15433f706c48f172165a172f8af2a02b65feff0469f6aa0c5976d4fa49",\r
      "contentSize": "1286708b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/MSTS.xml",\r
      "sha256": "a31604136e59cc41c8efafdfcf603e8c707665dbc910fb12d95970e18255bf33",\r
      "contentSize": "470b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/TDA.bin",\r
      "sha256": "7e9afeacb028b63f1e06d320c46e823710edac7642c7eb6df9c85d64bb36f13e",\r
      "contentSize": "234965876b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/TDASpec.bin",\r
      "sha256": "b7d077e68428e7c16b9b72926da679d5361ccab6ef632a871b4b98c7f951833f",\r
      "contentSize": "203726068b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "8c6c727f7ded6f16406957ab1ade49af28269c342a234407363946ffdf3fec0b",\r
      "contentSize": "163087b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/sample_info.xml",\r
      "sha256": "f32bceadb8e80cc7d007c880d598f4fac60459649da1dff12f033c574d92f6fd",\r
      "contentSize": "5829b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/sequence.xml",\r
      "sha256": "b8ca48c766f81ce8e9a957922a5c25839466752feb61d0e53df0922686cdb39b",\r
      "contentSize": "2384b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "sha256": "2cf37230ab009bb3c82e35052c3542ccfd5a5cb982afa712c97d4a14dcbe8905",\r
      "contentSize": "75688b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "sha256": "17e9ab0a7f587b30c72dbe0189fc759d85018953edb86fd0144a6bc5458f508e",\r
      "contentSize": "14021b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "sha256": "46d90acdc69d7d1c66dc79a2bd0cee1a762249696a297fdc524d8ddb21aac292",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "sha256": "32ddba81b4e7e70206911da9d941b2bf4c50e99244d029c705d20b1f4355cd40",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "sha256": "9c17c7a8e204e888f6525cd54e99740b75500a740c2663103191bab2aec8dc64",\r
      "contentSize": "20053b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "sha256": "f464524d2457550545b3eab2df4f9989da0166b29b37d37777c545f6f4cf25d3",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "sha256": "571efe62cf19c1429bd57febecf31859f48f5f830f25ca6e0edb0bca35a07575",\r
      "contentSize": "244b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "sha256": "7113f9b53c854d439d468139d0b26be06047decdd6252fa4f4cd468a86f0bfe3",\r
      "contentSize": "1446b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "sha256": "17cb95bd03006f5baa59b3a16f79bc6dd0ec506dffda967a629eaab92d2e163f",\r
      "contentSize": "138b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "sha256": "34ba5ea1c379051ad092673205624db1cb00edcdf16656a718433228bbf4a38d",\r
      "contentSize": "3281b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_03.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150115_03.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/GC.ini",\r
      "sha256": "15d767f7a782a03b0e261c77ea6a50bc2f9e418e7628c7364dc9538e7e30a6de",\r
      "contentSize": "9991b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/acqmeth.txt",\r
      "sha256": "84bde2f528fcc82777f51edbc1b7e00f077febb4862bf992e87e5861dbfaba9d",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/checksum.xml",\r
      "sha256": "dbef379841e1a8736985fa2f48c5791004c4283e4e6209d2b65f72ae30a90c34",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/pre_post.ini",\r
      "sha256": "dc875d315fa1ba26afc8edb0c3119ad73dffd05ada373b3a86316db6c94b38b5",\r
      "contentSize": "613b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/runstart.txt",\r
      "sha256": "9036f9bd1e974630ed4f3be3664b1f6840206aebd11d245e7536f4ad905ad616",\r
      "contentSize": "1912b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/Contents.xml",\r
      "sha256": "5eba8955e9b8ea1ebcfb412bc20258bc5f2648651b3b4743e5d744bdc1be61fb",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "458495eb08c7e41a145f0d50738c122cc2db80aafbb1ed427aff553231f3fa6d",\r
      "contentSize": "1524b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/MSPeak.bin",\r
      "sha256": "59d498e33b3bc530c9ee82fcc399fa66d436ab5cae52e93d4794991a42f144c2",\r
      "contentSize": "171512132b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/MSScan.bin",\r
      "sha256": "9e34b207cd0acea0bdbc28d1049c12da5dcbe2b6cc7729df0a1b43aaf8dd914f",\r
      "contentSize": "1295236b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/MSTS.xml",\r
      "sha256": "486e8d482d3130a8f202068c10df2728081d0e45c9c611360d0beaa623a47649",\r
      "contentSize": "470b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/TDA.bin",\r
      "sha256": "6ceb84fb91cf7bfe0cdd4601a7f94e5865014626897f772f051a3bb1fc5bf10a",\r
      "contentSize": "199365812b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/TDASpec.bin",\r
      "sha256": "223e96ccdf7a778c28a0d0135548665f21e74ca58e4890df854added9a16dc63",\r
      "contentSize": "171735916b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "fcc7fd00980cc5b0f889f87c4930a23353f60c37d4a5b441b97133c9723ccf8d",\r
      "contentSize": "164071b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/sample_info.xml",\r
      "sha256": "7dbfe5495837448e0e94193ca58efb76224bf2509d2c768987ea4c1911ab6a10",\r
      "contentSize": "5817b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/sequence.xml",\r
      "sha256": "cc546a4b2ae9a38aec518e72bc851dc4d15efcfea53f4f4ba5dbffa89ece0612",\r
      "contentSize": "2381b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "sha256": "7bdc10a9437bda57ef8112c24c65508e49613705911f1c7ed82a0bc3b53ee212",\r
      "contentSize": "75676b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "sha256": "258f4c395fa4d4300a5b86e720f5a410b09dcae391cfe11213368b3866195d73",\r
      "contentSize": "11933b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "sha256": "c01b7103a7de381407c33d2762f52ce0a686ac7e0d8698b81eb5d7a63be6fd89",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "sha256": "a584931166cd82bf8a2a855cb550b8fab8e5e336524d4b09f3083541ce2393fc",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "sha256": "2f2fea0c502273266f26c60402133204a9582b9306d767be7970e04d6179b4e0",\r
      "contentSize": "17589b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "sha256": "4bbee3ead43b538817457b5f5ebfcd8a6887866240a32734c9ca32211e174388",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "sha256": "75a6289ca65f7ea0d11596c2146a69f9db81b04ffab2387739f97fc18f7fa56c",\r
      "contentSize": "2315b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "sha256": "dd3e025b8cc61d7bf9cf76af79fa9f3e3972867627841b64429f8bc7c0338a66",\r
      "contentSize": "125b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "sha256": "a578c4aed064603a7679569e831fafa402093b9ba8796f51152a76b39480fe7c",\r
      "contentSize": "2591b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_04.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150115_04.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/GC.ini",\r
      "sha256": "d9584297e401ea91a1ffef72aa969628c2084be8ab605cf27ed445394fd39a4f",\r
      "contentSize": "9995b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/acqmeth.txt",\r
      "sha256": "cdcf0be261aefa9c6865bf6415daa6f29b68d142c82e8381a1c4704ec22a5d20",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/checksum.xml",\r
      "sha256": "8d823f5d4792498a566263faa19f5890d55140a0c27350501ae2c98f3e5a658a",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/pre_post.ini",\r
      "sha256": "f1fa74402e7db69a31d94e3b34eb0f60219fca8baccd13a7e8c5a964fb4b1de3",\r
      "contentSize": "624b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/runstart.txt",\r
      "sha256": "08ebb2b2bf45c69a4bc70dfb6dea1877cadccbb0a56d8b2b0393dfe7cd098020",\r
      "contentSize": "1905b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/Contents.xml",\r
      "sha256": "a903739fa51611668a6ae33417228fe0cbd321b0c1eb40035f22426fe4fcd55e",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "458495eb08c7e41a145f0d50738c122cc2db80aafbb1ed427aff553231f3fa6d",\r
      "contentSize": "1524b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/MSPeak.bin",\r
      "sha256": "aba19be0947760d3b46106fc2a1dfbf5526a8365a18e2d325bfda74644a9a4ce",\r
      "contentSize": "263162484b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/MSScan.bin",\r
      "sha256": "3ee2b848ae62886de709401d370b4f96b96b12e73917dcc16fcf00f9f7be1153",\r
      "contentSize": "1286916b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/MSTS.xml",\r
      "sha256": "717e71369490ce9536f50479bc3962cc40e4ed5c8bdff1b4dfc731e1438a1f22",\r
      "contentSize": "470b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/TDA.bin",\r
      "sha256": "d4edf39872df748ed059cdaf66e019e17edb741c93be26be0febeeda9242e6e2",\r
      "contentSize": "296212128b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/TDASpec.bin",\r
      "sha256": "735a9705907de7cf6ca1b2ef9f5140b4954d8e6cb5598715f91d504e2aec1fd7",\r
      "contentSize": "263383064b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "000265a1daa9fc25f643aa1cc5245a5ffc6dac83ad162dc0a779cb65f41a8719",\r
      "contentSize": "163111b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/sample_info.xml",\r
      "sha256": "79491bfa9f50dbefb9c133b1fbcd79ea16b21da66b24522e6b77aa18fee349ec",\r
      "contentSize": "5819b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/sequence.xml",\r
      "sha256": "4f28305fe71cc72b433ef9e6ec3a88287cc5c8a06d4bb0988820f644d2bc5c35",\r
      "contentSize": "2381b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "sha256": "2cf37230ab009bb3c82e35052c3542ccfd5a5cb982afa712c97d4a14dcbe8905",\r
      "contentSize": "75688b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "sha256": "17e9ab0a7f587b30c72dbe0189fc759d85018953edb86fd0144a6bc5458f508e",\r
      "contentSize": "14021b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "sha256": "a49238e93f64fcbf3cb67751ac25b7b97a1ce44809e5ef9781ca60761fdf8d04",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "sha256": "32ddba81b4e7e70206911da9d941b2bf4c50e99244d029c705d20b1f4355cd40",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "sha256": "9c17c7a8e204e888f6525cd54e99740b75500a740c2663103191bab2aec8dc64",\r
      "contentSize": "20053b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "sha256": "f464524d2457550545b3eab2df4f9989da0166b29b37d37777c545f6f4cf25d3",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "sha256": "571efe62cf19c1429bd57febecf31859f48f5f830f25ca6e0edb0bca35a07575",\r
      "contentSize": "244b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "sha256": "7113f9b53c854d439d468139d0b26be06047decdd6252fa4f4cd468a86f0bfe3",\r
      "contentSize": "1446b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "sha256": "17cb95bd03006f5baa59b3a16f79bc6dd0ec506dffda967a629eaab92d2e163f",\r
      "contentSize": "138b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "sha256": "34ba5ea1c379051ad092673205624db1cb00edcdf16656a718433228bbf4a38d",\r
      "contentSize": "3281b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_11.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150115_11.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/GC.ini",\r
      "sha256": "f80d510cd13c325dcb036ccde1f303e30ca837ba380ba605e2359c62022b3afd",\r
      "contentSize": "9989b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/acqmeth.txt",\r
      "sha256": "f060148c6c8149e966a2adfbd1e3d3cebfaadccede258e359d84ec8a77cdc2ac",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/checksum.xml",\r
      "sha256": "9ae0d5e782cd11b626dd3be4143eb71473d77558517d201ebe135a6dcde4ec0f",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/pre_post.ini",\r
      "sha256": "679b11cea0e88439577cce506f4299b704b2e22a9d1220726263446a637d9336",\r
      "contentSize": "613b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/runstart.txt",\r
      "sha256": "5c655a1c6e32843ae0c0c6e5ef43cbb0ceb3664aadd103ec473e1e3ad27afe60",\r
      "contentSize": "1894b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/Contents.xml",\r
      "sha256": "1adae0702e6c0de4c2e8a678b08ebd9fd340af6ad0d4740128b6e532cfb2ed83",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "458495eb08c7e41a145f0d50738c122cc2db80aafbb1ed427aff553231f3fa6d",\r
      "contentSize": "1524b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/MSPeak.bin",\r
      "sha256": "e9f8d4b8c6dbd9f878b8406442992a637be23e1122579094f0e75b1d498bb7a3",\r
      "contentSize": "221329220b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/MSScan.bin",\r
      "sha256": "c3a4094ce3664bebbe3a8312c83fa6dc8e09dc75d60661f0dabe89f8c2480194",\r
      "contentSize": "1295028b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/MSTS.xml",\r
      "sha256": "594a9b9f07cd15fad6bad28bfa0c5779166f62beaffad00ee12ba7285a29a07d",\r
      "contentSize": "455b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/TDA.bin",\r
      "sha256": "59f7e558b78cd236cfa4ae64ea40236ba27d1f2d4c61bc889e2afd006dd542b1",\r
      "contentSize": "252009488b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/TDASpec.bin",\r
      "sha256": "d71bb45483d95f19fe43ec1a00e87828dd396fdb495665acd9fd7118b171d0ec",\r
      "contentSize": "221553004b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "e121e15bfa165c80c155403c1c9b87d8098628d841d54dc3e59323c3c167398a",\r
      "contentSize": "164047b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/sample_info.xml",\r
      "sha256": "c81147045375aabe86f319295322a019d1c0efc020f9601598f667400da04260",\r
      "contentSize": "5810b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/sequence.xml",\r
      "sha256": "3edecb3d22bcf9bf989b666b03ecd8ae4111797d80fbda338386269bd29ba333",\r
      "contentSize": "2364b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "sha256": "7bdc10a9437bda57ef8112c24c65508e49613705911f1c7ed82a0bc3b53ee212",\r
      "contentSize": "75676b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "sha256": "258f4c395fa4d4300a5b86e720f5a410b09dcae391cfe11213368b3866195d73",\r
      "contentSize": "11933b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "sha256": "98bcc39deb9da1da9cd082ab2c667aec09e6dcf31468eebd9b6deef946b5a6eb",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "sha256": "a584931166cd82bf8a2a855cb550b8fab8e5e336524d4b09f3083541ce2393fc",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "sha256": "2f2fea0c502273266f26c60402133204a9582b9306d767be7970e04d6179b4e0",\r
      "contentSize": "17589b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "sha256": "4bbee3ead43b538817457b5f5ebfcd8a6887866240a32734c9ca32211e174388",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "sha256": "75a6289ca65f7ea0d11596c2146a69f9db81b04ffab2387739f97fc18f7fa56c",\r
      "contentSize": "2315b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "sha256": "dd3e025b8cc61d7bf9cf76af79fa9f3e3972867627841b64429f8bc7c0338a66",\r
      "contentSize": "125b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "sha256": "a578c4aed064603a7679569e831fafa402093b9ba8796f51152a76b39480fe7c",\r
      "contentSize": "2591b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_12.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150115_12.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/GC.ini",\r
      "sha256": "0359abfd0caae1f05189c94a38679c360cd94d8538b03d5cfad1e8e26f27e250",\r
      "contentSize": "9993b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/acqmeth.txt",\r
      "sha256": "11f81bf1c1706e301413ddc03802d2c999d14728a60211942b1856ccd8666a70",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/checksum.xml",\r
      "sha256": "e791355e44c180c22e7265dacb442f9672c216f380d4ebe37f0b171cc315f8d0",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/pre_post.ini",\r
      "sha256": "97cd018ac6d568c261988ecab6833478f66cbbf2ffa81c98b1bd3b393ff89793",\r
      "contentSize": "624b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/runstart.txt",\r
      "sha256": "c89725ba4ccbd529b04b5648d6613ca64bcd36b0d92dbc5661f1a115d9a2a56e",\r
      "contentSize": "1905b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/Contents.xml",\r
      "sha256": "d16a9f9cde274740bd6b9ec2c9a754075a5aab286f57577ef850a25cf5d28af7",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "458495eb08c7e41a145f0d50738c122cc2db80aafbb1ed427aff553231f3fa6d",\r
      "contentSize": "1524b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/MSPeak.bin",\r
      "sha256": "6fe6201f6024de2c95dd2c6aed6d770624645f32b684e798d3ea1fe3e09439c0",\r
      "contentSize": "279402964b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/MSScan.bin",\r
      "sha256": "03f566d53dbb60a1f6e6ea078fc40dcfdc4748f7fac8a1146221c3bd0af088de",\r
      "contentSize": "1286916b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/MSTS.xml",\r
      "sha256": "21a8319e1413017dfb0cc3277f5351a4acd820cc5d2ed3894580b274e7109473",\r
      "contentSize": "453b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/TDA.bin",\r
      "sha256": "708cb62f7bf03f01a210dfb5979ba3349a1d142182c22730960d77e59e215845",\r
      "contentSize": "312656476b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/TDASpec.bin",\r
      "sha256": "dc854e7b38700aec61215f66255c1e4d079dad5a3ef2f3dcefcda7641b7b7882",\r
      "contentSize": "279623724b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "28b8ee2d940a4d2cd3fc1b146ff33eaf878550fd908e77d4b6161fd782fa1e5d",\r
      "contentSize": "163111b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/sample_info.xml",\r
      "sha256": "e8a186b40090218fa5739cc48f128ae4bf6a706959f7138279633e0ebd77da94",\r
      "contentSize": "5817b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/sequence.xml",\r
      "sha256": "3f512f47b2a8843c3b00be51ef6bfc7b7a726a80e32a054a32fec38a75db671b",\r
      "contentSize": "2381b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "sha256": "2cf37230ab009bb3c82e35052c3542ccfd5a5cb982afa712c97d4a14dcbe8905",\r
      "contentSize": "75688b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "sha256": "17e9ab0a7f587b30c72dbe0189fc759d85018953edb86fd0144a6bc5458f508e",\r
      "contentSize": "14021b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "sha256": "f26db7c65aac7d2d9e648c6a7b28b1313cd2de1306c05a8697ce843be6a5cd96",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "sha256": "32ddba81b4e7e70206911da9d941b2bf4c50e99244d029c705d20b1f4355cd40",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "sha256": "9c17c7a8e204e888f6525cd54e99740b75500a740c2663103191bab2aec8dc64",\r
      "contentSize": "20053b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "sha256": "f464524d2457550545b3eab2df4f9989da0166b29b37d37777c545f6f4cf25d3",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "sha256": "571efe62cf19c1429bd57febecf31859f48f5f830f25ca6e0edb0bca35a07575",\r
      "contentSize": "244b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "sha256": "7113f9b53c854d439d468139d0b26be06047decdd6252fa4f4cd468a86f0bfe3",\r
      "contentSize": "1446b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "sha256": "17cb95bd03006f5baa59b3a16f79bc6dd0ec506dffda967a629eaab92d2e163f",\r
      "contentSize": "138b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "sha256": "34ba5ea1c379051ad092673205624db1cb00edcdf16656a718433228bbf4a38d",\r
      "contentSize": "3281b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_13.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150115_13.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/GC.ini",\r
      "sha256": "d0b6954378902d8243559f61e7ac6944dadab817bce96e0f1bcd8672cc733313",\r
      "contentSize": "9990b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/acqmeth.txt",\r
      "sha256": "16ebbc90dba8df449ef6ae453fd6a7921022994ac30e7f76a5e2fbc9115dc7ba",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/checksum.xml",\r
      "sha256": "fb2e6ada8da6c1a0e8bf0684dffd8ae02e596cdc2b4aebe782b31e7ec1d6e3e0",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/pre_post.ini",\r
      "sha256": "71c543ddf9ea81c008a9ec60c855f257e20eebd7c01ec9099d946982f05381d5",\r
      "contentSize": "613b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/runstart.txt",\r
      "sha256": "8cb24e077a2c6c3ef4586e41288fe68f7687f1c21dd507ecc1e2b68679a55b47",\r
      "contentSize": "1894b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/Contents.xml",\r
      "sha256": "0e96ba37472e64407653ec1906521fff5c9b32a7f653c816420aa9b6926f634d",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "458495eb08c7e41a145f0d50738c122cc2db80aafbb1ed427aff553231f3fa6d",\r
      "contentSize": "1524b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/MSPeak.bin",\r
      "sha256": "035c490df90c919f3f68086f2570342c5297f65c1746ee0a3bc9b0eb7a80c37e",\r
      "contentSize": "239991076b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/MSScan.bin",\r
      "sha256": "acac3f1cf6828df4f38dcdd6e2dbd99c80b7a405f51707c7ff7c09c3e1bf17bf",\r
      "contentSize": "1295028b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/MSTS.xml",\r
      "sha256": "8af1c00861705b97e8a8d94913e70ef7a874be93d1b85289c849c5050cb5dd04",\r
      "contentSize": "464b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/TDA.bin",\r
      "sha256": "b656b7df3ed6bfc568b2e05276ffbf6fc2d98fc13f99cbcabdfb41ea2049866c",\r
      "contentSize": "271507888b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/TDASpec.bin",\r
      "sha256": "b55101d8cbc9655e01e84fa119f930a1bce91fd1ac7526dbd82e2d3671689376",\r
      "contentSize": "240214968b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "c7eedf74d232ae5c255472b463151fc40aeb50a0b5687c76250abaa87421625c",\r
      "contentSize": "164047b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/sample_info.xml",\r
      "sha256": "4e0da7f6764b0d30a363782fb667a0d7654627cf337c3b063c248e9de6436c87",\r
      "contentSize": "5806b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/sequence.xml",\r
      "sha256": "cb929b9cfe3489392faa6fd2fcb2238975be1cc594217d6cc84b0e3c9c233a3f",\r
      "contentSize": "2364b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "sha256": "7bdc10a9437bda57ef8112c24c65508e49613705911f1c7ed82a0bc3b53ee212",\r
      "contentSize": "75676b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "sha256": "258f4c395fa4d4300a5b86e720f5a410b09dcae391cfe11213368b3866195d73",\r
      "contentSize": "11933b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "sha256": "535b79f3f909ab759904a4f66bfde64d6e40f843166a6be25896c9860d81eef1",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "sha256": "a584931166cd82bf8a2a855cb550b8fab8e5e336524d4b09f3083541ce2393fc",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "sha256": "2f2fea0c502273266f26c60402133204a9582b9306d767be7970e04d6179b4e0",\r
      "contentSize": "17589b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "sha256": "4bbee3ead43b538817457b5f5ebfcd8a6887866240a32734c9ca32211e174388",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "sha256": "75a6289ca65f7ea0d11596c2146a69f9db81b04ffab2387739f97fc18f7fa56c",\r
      "contentSize": "2315b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "sha256": "dd3e025b8cc61d7bf9cf76af79fa9f3e3972867627841b64429f8bc7c0338a66",\r
      "contentSize": "125b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "sha256": "a578c4aed064603a7679569e831fafa402093b9ba8796f51152a76b39480fe7c",\r
      "contentSize": "2591b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_14.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150115_14.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/GC.ini",\r
      "sha256": "11810b7161fb820355d61d005e14884a1c6bee799e5199ca1be893761168adbf",\r
      "contentSize": "9993b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/acqmeth.txt",\r
      "sha256": "43bce15fe72b0da20809aacafc8984a84f1663cb875958a66e4d7eee00078e40",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/checksum.xml",\r
      "sha256": "e19b86c5e4fb26391965843ab543199bf75554f702fb38e67df4f8148b5913ce",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/pre_post.ini",\r
      "sha256": "72d22407b1e0a0287599f239d5c0ec876f6a05cc157be4ecc977ba4c0a82ba99",\r
      "contentSize": "624b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/runstart.txt",\r
      "sha256": "08f17f0aa7f0498d82cc5d07d97bebbe7c206a5a47445865f29cb3e4fbc73454",\r
      "contentSize": "1905b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/Contents.xml",\r
      "sha256": "29b5d1a32d62946d318f216541da6c38f6fcd4d15f1fbf3c8a34289d5f81dbfb",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "458495eb08c7e41a145f0d50738c122cc2db80aafbb1ed427aff553231f3fa6d",\r
      "contentSize": "1524b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/MSPeak.bin",\r
      "sha256": "e60f721400e955c47e09815b0e854a41584f922410c7ebecca4dfb103f628269",\r
      "contentSize": "282124804b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/MSScan.bin",\r
      "sha256": "fc95618accda3fa1173c74da37740498dabd08b3dfb70887a26f7fe064dd0883",\r
      "contentSize": "1287124b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/MSTS.xml",\r
      "sha256": "bbc72daa582d06f878d2e4823a6bee69aebb1cf4a013421b805eb2dcabca1dc3",\r
      "contentSize": "464b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/TDA.bin",\r
      "sha256": "5f5e31073a344e3eafefec1541f753c6d31ba5c79e0335d6c8ab69ddbc5d00fd",\r
      "contentSize": "315262276b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/TDASpec.bin",\r
      "sha256": "ab33e04b47121c95ef167c0d9b82936127766d00820f241000761743a8e5092e",\r
      "contentSize": "282345348b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "4801632fcc38b083704fecf7468936e20e22e1458ffae4f91c5e33e237eb1ec2",\r
      "contentSize": "163135b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/sample_info.xml",\r
      "sha256": "469b2f2b93baffaecc703eeb9b73a28f56b950a4c5ae16ca75ee0ebb51e89fe8",\r
      "contentSize": "5818b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/sequence.xml",\r
      "sha256": "807e591c99a04e7af1645541aa91efa18ed708e71737fb82050cd059a99fc30d",\r
      "contentSize": "2381b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "sha256": "2cf37230ab009bb3c82e35052c3542ccfd5a5cb982afa712c97d4a14dcbe8905",\r
      "contentSize": "75688b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "sha256": "17e9ab0a7f587b30c72dbe0189fc759d85018953edb86fd0144a6bc5458f508e",\r
      "contentSize": "14021b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "sha256": "d7bf609379723565282e3657b5980475ea39db862d635b660a5f5ae541f4d163",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "sha256": "32ddba81b4e7e70206911da9d941b2bf4c50e99244d029c705d20b1f4355cd40",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "sha256": "9c17c7a8e204e888f6525cd54e99740b75500a740c2663103191bab2aec8dc64",\r
      "contentSize": "20053b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "sha256": "f464524d2457550545b3eab2df4f9989da0166b29b37d37777c545f6f4cf25d3",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "sha256": "571efe62cf19c1429bd57febecf31859f48f5f830f25ca6e0edb0bca35a07575",\r
      "contentSize": "244b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "sha256": "7113f9b53c854d439d468139d0b26be06047decdd6252fa4f4cd468a86f0bfe3",\r
      "contentSize": "1446b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "sha256": "17cb95bd03006f5baa59b3a16f79bc6dd0ec506dffda967a629eaab92d2e163f",\r
      "contentSize": "138b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "sha256": "34ba5ea1c379051ad092673205624db1cb00edcdf16656a718433228bbf4a38d",\r
      "contentSize": "3281b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_15.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150115_15.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D/AcqData/71_82_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/GC.ini",\r
      "sha256": "697fb9b246ca2936415cae9ab6d738abfeb35a2fee00d34e88436f07c3c7b21c",\r
      "contentSize": "9989b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/acqmeth.txt",\r
      "sha256": "e3b0ab84c265661c3534aade78b7f701b54c671cc441cdd66a0e1d5c35e66074",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/checksum.xml",\r
      "sha256": "d9479ca0bbf7ee456068405266a53424bb553de36dd893fab60441b27a9da8a0",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/pre_post.ini",\r
      "sha256": "ca16c2fc1cdbb1fc70841763c048262effc9977eeeacf829cf622f75e48673fd",\r
      "contentSize": "613b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/runstart.txt",\r
      "sha256": "f7bff4e9d532d43c56073b617db71b617cd3c1306bc5a7b3da50b551b5432b1f",\r
      "contentSize": "1894b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/Contents.xml",\r
      "sha256": "f1f67987e40588a4a5db17d9593994cdf536fcd6f448699222c21a6f27b2e4a2",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "458495eb08c7e41a145f0d50738c122cc2db80aafbb1ed427aff553231f3fa6d",\r
      "contentSize": "1524b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/MSPeak.bin",\r
      "sha256": "84ea32e59f5c587bc2d3ca8021ce1cf9ce6d10c5f841d8feaf25ce15d78c98b9",\r
      "contentSize": "230428916b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/MSScan.bin",\r
      "sha256": "ab1b1c3f7a9e3ab0e2e1566d35f1b64b72227a23ee4239927fa121da9256265d",\r
      "contentSize": "1295028b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/MSTS.xml",\r
      "sha256": "aaef51e33bf80daf2153dd5fbd151aba7f14b802c5696f9b46963cd0d39968d3",\r
      "contentSize": "470b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/TDA.bin",\r
      "sha256": "9545578f2d71e06243fae4ecd91def65bbb608aacad601c5c96c297bd9a7c082",\r
      "contentSize": "261843908b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/TDASpec.bin",\r
      "sha256": "cc8a8f0d25d919dd6742d1d3e572e59edaa6f11ee77ea2413a37b77633e93997",\r
      "contentSize": "230652844b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "fd2ad8ad5b3e1cbc14b8e70c1529fbedb3ed3e4f951ddaf5a65f0db27ab4a75f",\r
      "contentSize": "164047b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/sample_info.xml",\r
      "sha256": "66828a19e3be2cf869ac2b8ad58f85c5c95c4b34b09eee5813ef93bf59295164",\r
      "contentSize": "5806b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/sequence.xml",\r
      "sha256": "47c0de8bdfbc1303f6ddd04db5ba8d29948fff5bd9c5e7e381633fb3ddabc55e",\r
      "contentSize": "2364b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "sha256": "7bdc10a9437bda57ef8112c24c65508e49613705911f1c7ed82a0bc3b53ee212",\r
      "contentSize": "75676b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "sha256": "258f4c395fa4d4300a5b86e720f5a410b09dcae391cfe11213368b3866195d73",\r
      "contentSize": "11933b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "sha256": "4808f01c0059bc6d496ee896a1912a493ed482491120f5650b9a3ec547c0faf1",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "sha256": "a584931166cd82bf8a2a855cb550b8fab8e5e336524d4b09f3083541ce2393fc",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "sha256": "2f2fea0c502273266f26c60402133204a9582b9306d767be7970e04d6179b4e0",\r
      "contentSize": "17589b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "sha256": "4bbee3ead43b538817457b5f5ebfcd8a6887866240a32734c9ca32211e174388",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "sha256": "75a6289ca65f7ea0d11596c2146a69f9db81b04ffab2387739f97fc18f7fa56c",\r
      "contentSize": "2315b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "sha256": "dd3e025b8cc61d7bf9cf76af79fa9f3e3972867627841b64429f8bc7c0338a66",\r
      "contentSize": "125b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "sha256": "a578c4aed064603a7679569e831fafa402093b9ba8796f51152a76b39480fe7c",\r
      "contentSize": "2591b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_16.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150115_16.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/GC.ini",\r
      "sha256": "1452e108ac9c510e6f4172f6fdb4933100fe2b6073ca9d23721a1b280f8ab3eb",\r
      "contentSize": "9994b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/acqmeth.txt",\r
      "sha256": "0015f62fca967ee46c7f36bb4ab495aba170ea35cb634d01cc29d7097badb18e",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/checksum.xml",\r
      "sha256": "05b62c64230d2292454effa8c195d726b6a2b76d0577c4f1d78276048f2e7a70",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/pre_post.ini",\r
      "sha256": "c401ed18a75000429ae6755dc04b1d4909ba982f92d1ac4ca7cf8d731bdae294",\r
      "contentSize": "624b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/runstart.txt",\r
      "sha256": "91461532d9ad18ae2ce98beff6bf38411c30d68dd676254b31b34068d47ca28e",\r
      "contentSize": "1912b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/Contents.xml",\r
      "sha256": "84e0b3f82f5594e45f93ed2f932eae3b09a72222cf2d20b1351e0ae6dc910dbf",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "973144034e4573da67ad59c26eea4922870c5a0a9b7e5d7a736f9d44494d1b3e",\r
      "contentSize": "1525b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/MSPeak.bin",\r
      "sha256": "71bc5d590810c6710488fbbc002db666c771e6cbcb623267b8048dbbdc51dee9",\r
      "contentSize": "216276020b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/MSScan.bin",\r
      "sha256": "02ae634ee1a10092906cbf839a8e5c9bb48cbcb7d4519b2d6b6cab30e0d0ef99",\r
      "contentSize": "1286916b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/MSTS.xml",\r
      "sha256": "c04cbb7de8b392a76935df7dbf95ad6d366f781ea890db36fd1b561301c91828",\r
      "contentSize": "454b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/TDA.bin",\r
      "sha256": "969d30c187e228bbc1d13d56d222438f380a6cf83ff2647720ef1f340ed10788",\r
      "contentSize": "247579692b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/TDASpec.bin",\r
      "sha256": "2b68b525e3971accaecc90404c5a2a7551bcd2494f98383396745ed9157b4528",\r
      "contentSize": "216496312b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "ddc8607c1d9fa96c6ebf739662f373e68a1e13c45a344c3e7514b4ed1cf76155",\r
      "contentSize": "163111b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/sample_info.xml",\r
      "sha256": "bde947b07c9fb53ad612ac527035e628ad04230777a501e437915ba0193903e1",\r
      "contentSize": "5822b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/sequence.xml",\r
      "sha256": "66c7c7bf866c8f3969c8c9448872980d428c34f56c7e7649bffba445ffa0c9c8",\r
      "contentSize": "2379b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin",\r
      "sha256": "2cf37230ab009bb3c82e35052c3542ccfd5a5cb982afa712c97d4a14dcbe8905",\r
      "contentSize": "75688b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt",\r
      "sha256": "81846eec63e3c10c1aa7538dde47de4774e6c70584efd0a15e83acbc7f090161",\r
      "contentSize": "14040b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac",\r
      "sha256": "2ff4435ad4771639582f228c7289461b7738ae94d190d8d80e738cd0e2f09bb8",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt",\r
      "sha256": "2246eb74771b10edcb82d5b5315f317271a03457369ea7f921676e272854ab13",\r
      "contentSize": "21098b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth",\r
      "sha256": "8ac032564531c3324eb903e14496e36b68a339a0d7bd5a6145671a52648848d6",\r
      "contentSize": "20053b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini",\r
      "sha256": "e35dffda0f349972203d504812756dd6680519d74e78c6c8572c63df861a280f",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac",\r
      "sha256": "60cde12a299eb1e726c631f2d90aa23ac70bf0ace9898491f76a2e3715cdcc5b",\r
      "contentSize": "244b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt",\r
      "sha256": "a59883618631e7bd33a463924961f3efa3c97f5ba9106f748789fe01377d6e00",\r
      "contentSize": "1757b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml",\r
      "sha256": "b705438ea9b0461b0a47499a04560a55a75ad479485009d1fc5e9b20fa960b83",\r
      "contentSize": "138b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml",\r
      "sha256": "34ba5ea1c379051ad092673205624db1cb00edcdf16656a718433228bbf4a38d",\r
      "contentSize": "3281b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_25.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150115_25.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D/AcqData/72_83_EC5_2GHz_Fiensplitless_wo_sugar.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/GC.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/GC.ini",\r
      "sha256": "56898a6056718049aabd80a216875f4b8a45a91626d6d1dadcf791ea18395ddc",\r
      "contentSize": "9989b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/acqmeth.txt",\r
      "sha256": "931678cab68b396a4fbe0fb65b99795d2aecb58ad647cbe45f363ba75c6d0249",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/checksum.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/checksum.xml",\r
      "sha256": "469e212a525e3bfb670174078c036162c1e95a40a8543d2c128028268dc7d651",\r
      "contentSize": "570b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/pre_post.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/pre_post.ini",\r
      "sha256": "da07f1d0919a9d6a5f8ca260c34d1a95fcd74dad2e6df5182e1bcaa2b0551be2",\r
      "contentSize": "613b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/runstart.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/runstart.txt",\r
      "sha256": "57601c491e7967c8488ea542bdbae5b8f09958878faed54c249546027b351325",\r
      "contentSize": "1901b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/Atunes2GHz.ei.tune.xml",\r
      "sha256": "48f5fd1485f6aab7ef3a555fd5a849ba9cdfe6cd3fbaac8e57db92b9dcbaa5c4",\r
      "contentSize": "14204b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/Contents.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/Contents.xml",\r
      "sha256": "fde4cb50374eb278a83c470ae74d4c2b24d74e103438252b3bcff17efce18886",\r
      "contentSize": "903b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/DefaultMassCal.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/DefaultMassCal.xml",\r
      "sha256": "973144034e4573da67ad59c26eea4922870c5a0a9b7e5d7a736f9d44494d1b3e",\r
      "contentSize": "1525b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/Devices.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/Devices.xml",\r
      "sha256": "e78742a9e0d04cd914ac7317cf32488c431c7a39d22f8030a464a4bace8ba611",\r
      "contentSize": "552b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/MSPeak.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/MSPeak.bin",\r
      "sha256": "d81f9f57281c839d2643180ac2502458007811e94b80da67e4a90a65cc2d6950",\r
      "contentSize": "175301188b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/MSScan.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/MSScan.bin",\r
      "sha256": "feb68054c5caff11a759e89b23debbd3e21dd387f47639663280811a6734b750",\r
      "contentSize": "1295028b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/MSScan.xsd",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/MSScan.xsd",\r
      "sha256": "8355e33676837225403a942df0e8af8fbf21463b8bc579aca7701e3cdff5e7c8",\r
      "contentSize": "4234b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/MSTS.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/MSTS.xml",\r
      "sha256": "36db6d1e74b4f9fb2921ba0270067703c42145b7f1f6b3964aa4aa7a819d32ec",\r
      "contentSize": "470b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/TDA.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/TDA.bin",\r
      "sha256": "2aa1ffeeaed0e09064090ff7a433390d225b2203c7c1124615c24423bbc48755",\r
      "contentSize": "202049320b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/TDASpec.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/TDASpec.bin",\r
      "sha256": "bdf12e8d2e5b4d9bb2fc02b6012f8a610273882436131858d238c99a26f47836",\r
      "contentSize": "175524900b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/TOFDataIndex.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/TOFDataIndex.bin",\r
      "sha256": "8d6dc0b453fadd277c19eaab76c7a4fe5d20a45c1e305bd5a3a829368d3a09f0",\r
      "contentSize": "164047b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/sample_info.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/sample_info.xml",\r
      "sha256": "a229baeccc5b069ec28b123271b83287f5e5acc8013d4df0db23c118f272cc2f",\r
      "contentSize": "5810b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/sequence.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/sequence.xml",\r
      "sha256": "30b049c1fb58f6d3b9a1b97295d732999af76024915883611017a3df5aae6e83",\r
      "contentSize": "2368b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin",\r
      "sha256": "7bdc10a9437bda57ef8112c24c65508e49613705911f1c7ed82a0bc3b53ee212",\r
      "contentSize": "75676b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml",\r
      "sha256": "cc166cbcdc99fd1fecc47098f774928f1e92a387f930467edc64bb5cbd910aec",\r
      "contentSize": "6714b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml",\r
      "sha256": "0c09806308067de40a791dffe75e85031b8ddf280ca2444f49cd81132db83db2",\r
      "contentSize": "1529b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml",\r
      "sha256": "048d1a78faa50cdb9ed687b881a4006777d4956838339f3c6cba8bb5e44994f5",\r
      "contentSize": "1010b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt",\r
      "sha256": "258f4c395fa4d4300a5b86e720f5a410b09dcae391cfe11213368b3866195d73",\r
      "contentSize": "11933b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac",\r
      "sha256": "8d4f8d66ab5abfe9f16ff38e0e0a95d43ae3ba4620f89392dbaee167509db18c",\r
      "contentSize": "174b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl",\r
      "sha256": "75f8f3208cc6ba48c0d641c4858b85a6884d6fe92867c4489b67fb035af4c630",\r
      "contentSize": "100b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt",\r
      "sha256": "a584931166cd82bf8a2a855cb550b8fab8e5e336524d4b09f3083541ce2393fc",\r
      "contentSize": "13130b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth",\r
      "sha256": "2f2fea0c502273266f26c60402133204a9582b9306d767be7970e04d6179b4e0",\r
      "contentSize": "17589b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini",\r
      "sha256": "4bbee3ead43b538817457b5f5ebfcd8a6887866240a32734c9ca32211e174388",\r
      "contentSize": "96b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac",\r
      "sha256": "fcd50360a864f234224a2f326a484ede97c1b9165a8d69446e5d05d3df662661",\r
      "contentSize": "232b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt",\r
      "sha256": "75a6289ca65f7ea0d11596c2146a69f9db81b04ffab2387739f97fc18f7fa56c",\r
      "contentSize": "2315b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml",\r
      "sha256": "dd3e025b8cc61d7bf9cf76af79fa9f3e3972867627841b64429f8bc7c0338a66",\r
      "contentSize": "125b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac",\r
      "sha256": "03da4bfab37dfbc2026e29ab18f179f09cad6ced01050a68438240b779341567",\r
      "contentSize": "79b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml",\r
      "sha256": "a578c4aed064603a7679569e831fafa402093b9ba8796f51152a76b39480fe7c",\r
      "contentSize": "2591b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "@type": "File",\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt",\r
      "sha256": "7cb1d1f7726daa3e8d8080829400d6030fb9e053849c675586a000edde9a4b1f",\r
      "contentSize": "1431b"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/dataset/150115_26.D",\r
      "@type": [\r
        "File",\r
        "Dataset"\r
      ],\r
      "name": "assays/GCqTOF_targets/dataset/150115_26.D",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/GC.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/checksum.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/pre_post.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/runstart.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/Atunes2GHz.ei.tune.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/Contents.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/DefaultMassCal.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/Devices.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/MSPeak.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/MSScan.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/MSScan.xsd"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/MSTS.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/TDA.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/TDASpec.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/TOFDataIndex.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/sample_info.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/sequence.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/7890Method.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.Monitors.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTP.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Acq.RTPGC.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/Audit.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/LastData.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acq.ctl"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/acqmeth.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/maestro.mth"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.$$$"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.ini"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.txt"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/method.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/methver.mac"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msacqmethod.xml"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D/AcqData/inject_EC5_2GHz_Fiensplit5.ei.M/msinsctl-exe-unhandled-exception-stack-trace.txt"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_DB23",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "DB23"\r
    },\r
    {\r
      "@id": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000171",\r
      "@type": "DefinedTerm",\r
      "name": "extraction protocol",\r
      "termCode": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000171"\r
    },\r
    {\r
      "@id": "#Protocol_metabolite_extraction.md_metabolite_extraction",\r
      "@type": "LabProtocol",\r
      "name": "metabolite_extraction.md",\r
      "intendedUse": {\r
        "@id": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000171"\r
      }\r
    },\r
    {\r
      "@id": "#ParameterValue_Bio_entity_metabolites",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Bio entity",\r
      "value": "metabolites",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000012",\r
      "columnIndex": "0"\r
    },\r
    {\r
      "@id": "#ParameterValue_Biosource_amount_6.1",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Biosource amount",\r
      "value": "6.1",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000013",\r
      "unitCode": "https://bioregistry.io/UO:0000022",\r
      "unitText": "milligram",\r
      "columnIndex": "1"\r
    },\r
    {\r
      "@id": "#ParameterValue_Biosource_material_state_Dry_material",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Biosource material state",\r
      "value": "Dry material",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0010009",\r
      "valueReference": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0010011",\r
      "columnIndex": "2"\r
    },\r
    {\r
      "@id": "#ParameterValue_Extraction_buffer_water:methanol:chloroform_1:2.5:1_(v:v:v)",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Extraction buffer",\r
      "value": "water:methanol:chloroform 1:2.5:1 (v:v:v)",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000050",\r
      "columnIndex": "3"\r
    },\r
    {\r
      "@id": "#ParameterValue_Extraction_buffer_volume_1500",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Extraction buffer volume",\r
      "value": "1500",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000051",\r
      "columnIndex": "4"\r
    },\r
    {\r
      "@id": "#ParameterValue_Internal_standard_ribitol",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Internal standard",\r
      "value": "ribitol",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0010012",\r
      "valueReference": "https://bioregistry.io/CHEBI:15963",\r
      "columnIndex": "5"\r
    },\r
    {\r
      "@id": "#ParameterValue_Sample_volume_50",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Sample volume",\r
      "value": "50",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0010013",\r
      "unitCode": "https://bioregistry.io/UO:0000101",\r
      "unitText": "microliter",\r
      "columnIndex": "6"\r
    },\r
    {\r
      "@id": "#ParameterValue_MS_sample_post-extraction_dried_in_vacuum_concentrator",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "MS sample post-extraction",\r
      "value": "dried in vacuum concentrator",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000043",\r
      "columnIndex": "7"\r
    },\r
    {\r
      "@id": "#ParameterValue_MS_sample_resuspension_-",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "MS sample resuspension",\r
      "value": "-",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000044",\r
      "columnIndex": "8"\r
    },\r
    {\r
      "@id": "#ParameterValue_MS_derivatization_(1)_with_10_μl_methoxyamine_hydrochloride_(Acros_organics;_freshly_prepared_at_20_mg/ml_in_pure_pyridine_(Sigma-Aldrich))_and_shaking_at_37_◦C\\nfor_90_min,_(2)_adding_90_μl_N-Methyl-N-(trimethylsilyl)trifluoroacetamide_(MSTFA;_Macherey-Nagel)_and_shaking_at_37_◦C_for_30_min._",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "MS derivatization",\r
      "value": "(1) with 10 μl methoxyamine hydrochloride (Acros organics; freshly prepared at 20 mg/ml in pure pyridine (Sigma-Aldrich)) and shaking at 37 ◦C\\nfor 90 min, (2) adding 90 μl N-Methyl-N-(trimethylsilyl)trifluoroacetamide (MSTFA; Macherey-Nagel) and shaking at 37 ◦C for 30 min. ",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000052",\r
      "columnIndex": "9"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_metabolite_extraction_0",\r
      "@type": "LabProcess",\r
      "name": "metabolite_extraction_0",\r
      "object": {\r
        "@id": "#Sample_CAM_01"\r
      },\r
      "result": {\r
        "@id": "#Sample_DB23"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_metabolite_extraction.md_metabolite_extraction"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_Bio_entity_metabolites"\r
        },\r
        {\r
          "@id": "#ParameterValue_Biosource_amount_6.1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Biosource_material_state_Dry_material"\r
        },\r
        {\r
          "@id": "#ParameterValue_Extraction_buffer_water:methanol:chloroform_1:2.5:1_(v:v:v)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Extraction_buffer_volume_1500"\r
        },\r
        {\r
          "@id": "#ParameterValue_Internal_standard_ribitol"\r
        },\r
        {\r
          "@id": "#ParameterValue_Sample_volume_50"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_sample_post-extraction_dried_in_vacuum_concentrator"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_sample_resuspension_-"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_derivatization_(1)_with_10_μl_methoxyamine_hydrochloride_(Acros_organics;_freshly_prepared_at_20_mg/ml_in_pure_pyridine_(Sigma-Aldrich))_and_shaking_at_37_◦C\\nfor_90_min,_(2)_adding_90_μl_N-Methyl-N-(trimethylsilyl)trifluoroacetamide_(MSTFA;_Macherey-Nagel)_and_shaking_at_37_◦C_for_30_min._"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_DB24",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "DB24"\r
    },\r
    {\r
      "@id": "#ParameterValue_Biosource_amount_5.2",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Biosource amount",\r
      "value": "5.2",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000013",\r
      "unitCode": "https://bioregistry.io/UO:0000022",\r
      "unitText": "milligram",\r
      "columnIndex": "1"\r
    },\r
    {\r
      "@id": "#ParameterValue_MS_derivatization_10_μl_methoxyamine_hydrochloride_and_90_μl_N-Methyl-N-(trimethylsilyl)trifluoroacetamide_MSTFA",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "MS derivatization",\r
      "value": "10 μl methoxyamine hydrochloride and 90 μl N-Methyl-N-(trimethylsilyl)trifluoroacetamide MSTFA",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000052",\r
      "columnIndex": "9"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_metabolite_extraction_1",\r
      "@type": "LabProcess",\r
      "name": "metabolite_extraction_1",\r
      "object": {\r
        "@id": "#Sample_CAM_02"\r
      },\r
      "result": {\r
        "@id": "#Sample_DB24"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_metabolite_extraction.md_metabolite_extraction"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_Bio_entity_metabolites"\r
        },\r
        {\r
          "@id": "#ParameterValue_Biosource_amount_5.2"\r
        },\r
        {\r
          "@id": "#ParameterValue_Biosource_material_state_Dry_material"\r
        },\r
        {\r
          "@id": "#ParameterValue_Extraction_buffer_water:methanol:chloroform_1:2.5:1_(v:v:v)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Extraction_buffer_volume_1500"\r
        },\r
        {\r
          "@id": "#ParameterValue_Internal_standard_ribitol"\r
        },\r
        {\r
          "@id": "#ParameterValue_Sample_volume_50"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_sample_post-extraction_dried_in_vacuum_concentrator"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_sample_resuspension_-"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_derivatization_10_μl_methoxyamine_hydrochloride_and_90_μl_N-Methyl-N-(trimethylsilyl)trifluoroacetamide_MSTFA"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_DB26",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "DB26"\r
    },\r
    {\r
      "@id": "#ParameterValue_Biosource_amount_8.2",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Biosource amount",\r
      "value": "8.2",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000013",\r
      "unitCode": "https://bioregistry.io/UO:0000022",\r
      "unitText": "milligram",\r
      "columnIndex": "1"\r
    },\r
    {\r
      "@id": "#ParameterValue_MS_derivatization_MaHCl_and_MSTFA",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "MS derivatization",\r
      "value": "MaHCl and MSTFA",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000052",\r
      "columnIndex": "9"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_metabolite_extraction_2",\r
      "@type": "LabProcess",\r
      "name": "metabolite_extraction_2",\r
      "object": {\r
        "@id": "#Sample_CAM_03"\r
      },\r
      "result": {\r
        "@id": "#Sample_DB26"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_metabolite_extraction.md_metabolite_extraction"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_Bio_entity_metabolites"\r
        },\r
        {\r
          "@id": "#ParameterValue_Biosource_amount_8.2"\r
        },\r
        {\r
          "@id": "#ParameterValue_Biosource_material_state_Dry_material"\r
        },\r
        {\r
          "@id": "#ParameterValue_Extraction_buffer_water:methanol:chloroform_1:2.5:1_(v:v:v)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Extraction_buffer_volume_1500"\r
        },\r
        {\r
          "@id": "#ParameterValue_Internal_standard_ribitol"\r
        },\r
        {\r
          "@id": "#ParameterValue_Sample_volume_50"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_sample_post-extraction_dried_in_vacuum_concentrator"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_sample_resuspension_-"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_derivatization_MaHCl_and_MSTFA"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_DB39",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "DB39"\r
    },\r
    {\r
      "@id": "#ParameterValue_Biosource_amount_4.9",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Biosource amount",\r
      "value": "4.9",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000013",\r
      "unitCode": "https://bioregistry.io/UO:0000022",\r
      "unitText": "milligram",\r
      "columnIndex": "1"\r
    },\r
    {\r
      "@id": "#ParameterValue_MS_derivatization_methoxyamination_+_trimethylsylilation_(TMS)",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "MS derivatization",\r
      "value": "methoxyamination + trimethylsylilation (TMS)",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000052",\r
      "columnIndex": "9"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_metabolite_extraction_3",\r
      "@type": "LabProcess",\r
      "name": "metabolite_extraction_3",\r
      "object": {\r
        "@id": "#Sample_reC3_01"\r
      },\r
      "result": {\r
        "@id": "#Sample_DB39"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_metabolite_extraction.md_metabolite_extraction"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_Bio_entity_metabolites"\r
        },\r
        {\r
          "@id": "#ParameterValue_Biosource_amount_4.9"\r
        },\r
        {\r
          "@id": "#ParameterValue_Biosource_material_state_Dry_material"\r
        },\r
        {\r
          "@id": "#ParameterValue_Extraction_buffer_water:methanol:chloroform_1:2.5:1_(v:v:v)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Extraction_buffer_volume_1500"\r
        },\r
        {\r
          "@id": "#ParameterValue_Internal_standard_ribitol"\r
        },\r
        {\r
          "@id": "#ParameterValue_Sample_volume_50"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_sample_post-extraction_dried_in_vacuum_concentrator"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_sample_resuspension_-"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_derivatization_methoxyamination_+_trimethylsylilation_(TMS)"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_DB40",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "DB40"\r
    },\r
    {\r
      "@id": "#ParameterValue_Biosource_amount_6",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Biosource amount",\r
      "value": "6",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000013",\r
      "unitCode": "https://bioregistry.io/UO:0000022",\r
      "unitText": "milligram",\r
      "columnIndex": "1"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_metabolite_extraction_4",\r
      "@type": "LabProcess",\r
      "name": "metabolite_extraction_4",\r
      "object": {\r
        "@id": "#Sample_reC3_02"\r
      },\r
      "result": {\r
        "@id": "#Sample_DB40"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_metabolite_extraction.md_metabolite_extraction"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_Bio_entity_metabolites"\r
        },\r
        {\r
          "@id": "#ParameterValue_Biosource_amount_6"\r
        },\r
        {\r
          "@id": "#ParameterValue_Biosource_material_state_Dry_material"\r
        },\r
        {\r
          "@id": "#ParameterValue_Extraction_buffer_water:methanol:chloroform_1:2.5:1_(v:v:v)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Extraction_buffer_volume_1500"\r
        },\r
        {\r
          "@id": "#ParameterValue_Internal_standard_ribitol"\r
        },\r
        {\r
          "@id": "#ParameterValue_Sample_volume_50"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_sample_post-extraction_dried_in_vacuum_concentrator"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_sample_resuspension_-"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_derivatization_methoxyamination_+_trimethylsylilation_(TMS)"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_DB41",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "DB41"\r
    },\r
    {\r
      "@id": "#ParameterValue_Biosource_amount_6.2",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Biosource amount",\r
      "value": "6.2",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000013",\r
      "unitCode": "https://bioregistry.io/UO:0000022",\r
      "unitText": "milligram",\r
      "columnIndex": "1"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_metabolite_extraction_5",\r
      "@type": "LabProcess",\r
      "name": "metabolite_extraction_5",\r
      "object": {\r
        "@id": "#Sample_reC3_03"\r
      },\r
      "result": {\r
        "@id": "#Sample_DB41"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_metabolite_extraction.md_metabolite_extraction"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_Bio_entity_metabolites"\r
        },\r
        {\r
          "@id": "#ParameterValue_Biosource_amount_6.2"\r
        },\r
        {\r
          "@id": "#ParameterValue_Biosource_material_state_Dry_material"\r
        },\r
        {\r
          "@id": "#ParameterValue_Extraction_buffer_water:methanol:chloroform_1:2.5:1_(v:v:v)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Extraction_buffer_volume_1500"\r
        },\r
        {\r
          "@id": "#ParameterValue_Internal_standard_ribitol"\r
        },\r
        {\r
          "@id": "#ParameterValue_Sample_volume_50"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_sample_post-extraction_dried_in_vacuum_concentrator"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_sample_resuspension_-"\r
        },\r
        {\r
          "@id": "#ParameterValue_MS_derivatization_methoxyamination_+_trimethylsylilation_(TMS)"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_Std._Mix_5µM",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "Std. Mix 5µM"\r
    },\r
    {\r
      "@id": "#Sample_150112_03",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150112_03"\r
    },\r
    {\r
      "@id": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000177",\r
      "@type": "DefinedTerm",\r
      "name": "assay protocol",\r
      "termCode": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000177"\r
    },\r
    {\r
      "@id": "#Protocol_gas_chromatography.md_gas_chromatography",\r
      "@type": "LabProtocol",\r
      "name": "gas_chromatography.md",\r
      "intendedUse": {\r
        "@id": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000177"\r
      }\r
    },\r
    {\r
      "@id": "#ParameterValue_MS_sample_type",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "MS sample type",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000045",\r
      "columnIndex": "0"\r
    },\r
    {\r
      "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Chromatography instrument model",\r
      "value": "Agilent 7890B GC",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000046",\r
      "columnIndex": "1"\r
    },\r
    {\r
      "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Chromatography autosampler model",\r
      "value": "GERSTEL MultiPurpose Sampler (MPS) Dual Head",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000047",\r
      "columnIndex": "2"\r
    },\r
    {\r
      "@id": "#ParameterValue_Chromatography_column_type_low_polarity",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Chromatography column type",\r
      "value": "low polarity",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000053",\r
      "columnIndex": "3"\r
    },\r
    {\r
      "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Chromatography column model",\r
      "value": "Agilent 19091S-433",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000048",\r
      "columnIndex": "4"\r
    },\r
    {\r
      "@id": "#ParameterValue_mobile_phase_helium(0)",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "mobile phase",\r
      "value": "helium(0)",\r
      "propertyID": "http://purl.obolibrary.org/obo/CHMO_0000995",\r
      "valueReference": "https://bioregistry.io/CHEBI:33681",\r
      "columnIndex": "5"\r
    },\r
    {\r
      "@id": "#ParameterValue_Chromatography_injection_volume_1",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Chromatography injection volume",\r
      "value": "1",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0010014",\r
      "unitCode": "https://bioregistry.io/UO:0000101",\r
      "unitText": "microliter",\r
      "columnIndex": "6"\r
    },\r
    {\r
      "@id": "#ParameterValue_Chromatography_injection_mode_splitless",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Chromatography injection mode",\r
      "value": "splitless",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0010015",\r
      "columnIndex": "7"\r
    },\r
    {\r
      "@id": "#ParameterValue_Chromatography_gradient_gradient_elution",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Chromatography gradient",\r
      "value": "gradient elution",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000081",\r
      "columnIndex": "8"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_0",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_0",\r
      "object": {\r
        "@id": "#Sample_Std._Mix_5µM"\r
      },\r
      "result": {\r
        "@id": "#Sample_150112_03"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_splitless"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150112_04",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150112_04"\r
    },\r
    {\r
      "@id": "#ParameterValue_Chromatography_injection_mode_split",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Chromatography injection mode",\r
      "value": "split",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0010015",\r
      "valueReference": "https://bioregistry.io/PATO:0001786",\r
      "columnIndex": "7"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_1",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_1",\r
      "object": {\r
        "@id": "#Sample_Std._Mix_5µM"\r
      },\r
      "result": {\r
        "@id": "#Sample_150112_04"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_split"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_blank_1",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "blank 1"\r
    },\r
    {\r
      "@id": "#Sample_150112_15",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150112_15"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_2",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_2",\r
      "object": {\r
        "@id": "#Sample_blank_1"\r
      },\r
      "result": {\r
        "@id": "#Sample_150112_15"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_splitless"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150112_16",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150112_16"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_3",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_3",\r
      "object": {\r
        "@id": "#Sample_blank_1"\r
      },\r
      "result": {\r
        "@id": "#Sample_150112_16"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_split"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150112_55",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150112_55"\r
    },\r
    {\r
      "@id": "#ParameterValue_MS_sample_type_material_sample",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "MS sample type",\r
      "value": "material sample",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000045",\r
      "valueReference": "https://bioregistry.io/OBI:0000747",\r
      "columnIndex": "0"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_4",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_4",\r
      "object": {\r
        "@id": "#Sample_DB23"\r
      },\r
      "result": {\r
        "@id": "#Sample_150112_55"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type_material_sample"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_splitless"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150112_56",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150112_56"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_5",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_5",\r
      "object": {\r
        "@id": "#Sample_DB23"\r
      },\r
      "result": {\r
        "@id": "#Sample_150112_56"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type_material_sample"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_split"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150112_61",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150112_61"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_6",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_6",\r
      "object": {\r
        "@id": "#Sample_DB24"\r
      },\r
      "result": {\r
        "@id": "#Sample_150112_61"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type_material_sample"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_splitless"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150112_62",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150112_62"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_7",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_7",\r
      "object": {\r
        "@id": "#Sample_DB24"\r
      },\r
      "result": {\r
        "@id": "#Sample_150112_62"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type_material_sample"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_split"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150112_65",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150112_65"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_8",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_8",\r
      "object": {\r
        "@id": "#Sample_DB26"\r
      },\r
      "result": {\r
        "@id": "#Sample_150112_65"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type_material_sample"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_splitless"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150112_66",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150112_66"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_9",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_9",\r
      "object": {\r
        "@id": "#Sample_DB26"\r
      },\r
      "result": {\r
        "@id": "#Sample_150112_66"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type_material_sample"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_split"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150115_03",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150115_03"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_10",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_10",\r
      "object": {\r
        "@id": "#Sample_Std._Mix_5µM"\r
      },\r
      "result": {\r
        "@id": "#Sample_150115_03"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_splitless"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150115_04",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150115_04"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_11",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_11",\r
      "object": {\r
        "@id": "#Sample_Std._Mix_5µM"\r
      },\r
      "result": {\r
        "@id": "#Sample_150115_04"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_split"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150115_11",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150115_11"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_12",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_12",\r
      "object": {\r
        "@id": "#Sample_DB39"\r
      },\r
      "result": {\r
        "@id": "#Sample_150115_11"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type_material_sample"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_splitless"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150115_12",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150115_12"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_13",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_13",\r
      "object": {\r
        "@id": "#Sample_DB39"\r
      },\r
      "result": {\r
        "@id": "#Sample_150115_12"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type_material_sample"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_split"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150115_13",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150115_13"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_14",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_14",\r
      "object": {\r
        "@id": "#Sample_DB40"\r
      },\r
      "result": {\r
        "@id": "#Sample_150115_13"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type_material_sample"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_splitless"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150115_14",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150115_14"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_15",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_15",\r
      "object": {\r
        "@id": "#Sample_DB40"\r
      },\r
      "result": {\r
        "@id": "#Sample_150115_14"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type_material_sample"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_split"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150115_15",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150115_15"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_16",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_16",\r
      "object": {\r
        "@id": "#Sample_DB41"\r
      },\r
      "result": {\r
        "@id": "#Sample_150115_15"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type_material_sample"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_splitless"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150115_16",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150115_16"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_17",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_17",\r
      "object": {\r
        "@id": "#Sample_DB41"\r
      },\r
      "result": {\r
        "@id": "#Sample_150115_16"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type_material_sample"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_split"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_blank_2",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "blank 2"\r
    },\r
    {\r
      "@id": "#Sample_150115_25",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150115_25"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_18",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_18",\r
      "object": {\r
        "@id": "#Sample_blank_2"\r
      },\r
      "result": {\r
        "@id": "#Sample_150115_25"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_splitless"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_150115_26",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "150115_26"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_gas_chromatography_19",\r
      "@type": "LabProcess",\r
      "name": "gas_chromatography_19",\r
      "object": {\r
        "@id": "#Sample_blank_2"\r
      },\r
      "result": {\r
        "@id": "#Sample_150115_26"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_gas_chromatography.md_gas_chromatography"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_MS_sample_type"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_instrument_model_Agilent_7890B_GC"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_autosampler_model_GERSTEL_MultiPurpose_Sampler_(MPS)_Dual_Head"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_type_low_polarity"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_column_model_Agilent_19091S-433"\r
        },\r
        {\r
          "@id": "#ParameterValue_mobile_phase_helium(0)"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_volume_1"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_injection_mode_split"\r
        },\r
        {\r
          "@id": "#ParameterValue_Chromatography_gradient_gradient_elution"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Protocol_mass_spec.md_mass_spec",\r
      "@type": "LabProtocol",\r
      "name": "mass_spec.md",\r
      "intendedUse": {\r
        "@id": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000177"\r
      }\r
    },\r
    {\r
      "@id": "#ParameterValue_scan_polarity_positive",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "scan polarity",\r
      "value": "positive",\r
      "propertyID": "https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000465",\r
      "columnIndex": "0"\r
    },\r
    {\r
      "@id": "#ParameterValue_scan_window_lower_limit_60",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "scan window lower limit",\r
      "value": "60",\r
      "propertyID": "https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000501",\r
      "columnIndex": "1"\r
    },\r
    {\r
      "@id": "#ParameterValue_scan_window_upper_limit_800",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "scan window upper limit",\r
      "value": "800",\r
      "propertyID": "https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000500",\r
      "columnIndex": "2"\r
    },\r
    {\r
      "@id": "#ParameterValue_scan_rate_20",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "scan rate",\r
      "value": "20",\r
      "propertyID": "https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000015",\r
      "unitCode": "https://bioregistry.io/UO:0000106",\r
      "unitText": "hertz",\r
      "columnIndex": "3"\r
    },\r
    {\r
      "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "instrument model",\r
      "value": "7200 GC-QTOF (Agilent Technologies)",\r
      "propertyID": "https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000031",\r
      "columnIndex": "4"\r
    },\r
    {\r
      "@id": "#ParameterValue_ionization_type_electron_ionization",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "ionization type",\r
      "value": "electron ionization",\r
      "propertyID": "https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000008",\r
      "valueReference": "https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000389",\r
      "columnIndex": "5"\r
    },\r
    {\r
      "@id": "#ParameterValue_mass_analyzer_type_quadrupole",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "mass analyzer type",\r
      "value": "quadrupole",\r
      "propertyID": "https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000443",\r
      "valueReference": "https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000081",\r
      "columnIndex": "6"\r
    },\r
    {\r
      "@id": "#ParameterValue_detector_type_electron_multiplier",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "detector type",\r
      "value": "electron multiplier",\r
      "propertyID": "https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000026",\r
      "valueReference": "https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000253",\r
      "columnIndex": "7"\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_0",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_0",\r
      "object": {\r
        "@id": "#Sample_150112_03"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_03.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_1",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_1",\r
      "object": {\r
        "@id": "#Sample_150112_04"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_04.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_2",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_2",\r
      "object": {\r
        "@id": "#Sample_150112_15"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_15.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_3",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_3",\r
      "object": {\r
        "@id": "#Sample_150112_16"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_16.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_4",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_4",\r
      "object": {\r
        "@id": "#Sample_150112_55"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_55.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_5",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_5",\r
      "object": {\r
        "@id": "#Sample_150112_56"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_56.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_6",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_6",\r
      "object": {\r
        "@id": "#Sample_150112_61"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_61.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_7",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_7",\r
      "object": {\r
        "@id": "#Sample_150112_62"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_62.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_8",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_8",\r
      "object": {\r
        "@id": "#Sample_150112_65"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_65.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_9",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_9",\r
      "object": {\r
        "@id": "#Sample_150112_66"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_66.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_10",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_10",\r
      "object": {\r
        "@id": "#Sample_150115_03"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_03.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_11",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_11",\r
      "object": {\r
        "@id": "#Sample_150115_04"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_04.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_12",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_12",\r
      "object": {\r
        "@id": "#Sample_150115_11"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_11.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_13",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_13",\r
      "object": {\r
        "@id": "#Sample_150115_12"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_12.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_14",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_14",\r
      "object": {\r
        "@id": "#Sample_150115_13"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_13.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_15",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_15",\r
      "object": {\r
        "@id": "#Sample_150115_14"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_14.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_16",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_16",\r
      "object": {\r
        "@id": "#Sample_150115_15"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_15.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_17",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_17",\r
      "object": {\r
        "@id": "#Sample_150115_16"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_16.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_18",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_18",\r
      "object": {\r
        "@id": "#Sample_150115_25"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_25.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_GCqTOF_targets_mass_spec_19",\r
      "@type": "LabProcess",\r
      "name": "mass_spec_19",\r
      "object": {\r
        "@id": "#Sample_150115_26"\r
      },\r
      "result": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_26.D"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mass_spec.md_mass_spec"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_scan_polarity_positive"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_lower_limit_60"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_window_upper_limit_800"\r
        },\r
        {\r
          "@id": "#ParameterValue_scan_rate_20"\r
        },\r
        {\r
          "@id": "#ParameterValue_instrument_model_7200_GC-QTOF_(Agilent_Technologies)"\r
        },\r
        {\r
          "@id": "#ParameterValue_ionization_type_electron_ionization"\r
        },\r
        {\r
          "@id": "#ParameterValue_mass_analyzer_type_quadrupole"\r
        },\r
        {\r
          "@id": "#ParameterValue_detector_type_electron_multiplier"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#PV_GCqTOF_targeted",\r
      "@type": "PropertyValue",\r
      "name": "GCqTOF targeted"\r
    },\r
    {\r
      "@id": "assays/GCqTOF_targets/",\r
      "@type": "Dataset",\r
      "additionalType": "Assay",\r
      "identifier": "GCqTOF_targets",\r
      "creator": [\r
        {\r
          "@id": "#Person_Dominik_Brilhaus"\r
        },\r
        {\r
          "@id": "#Person_Tabea_Mettler-Altmann"\r
        },\r
        {\r
          "@id": "#Person_Elisabeth_Klemp"\r
        },\r
        {\r
          "@id": "#Person_Maria_Graf"\r
        },\r
        {\r
          "@id": "#Person_Katrin_Weber"\r
        }\r
      ],\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D"\r
        }\r
      ],\r
      "about": [\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_metabolite_extraction_0"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_metabolite_extraction_1"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_metabolite_extraction_2"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_metabolite_extraction_3"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_metabolite_extraction_4"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_metabolite_extraction_5"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_0"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_1"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_2"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_3"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_4"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_5"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_6"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_7"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_8"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_9"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_10"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_11"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_12"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_13"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_14"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_15"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_16"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_17"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_18"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_gas_chromatography_19"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_0"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_1"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_2"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_3"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_4"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_5"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_6"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_7"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_8"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_9"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_10"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_11"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_12"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_13"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_14"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_15"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_16"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_17"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_18"\r
        },\r
        {\r
          "@id": "#Process_A_GCqTOF_targets_mass_spec_19"\r
        }\r
      ],\r
      "variableMeasured": {\r
        "@id": "#PV_GCqTOF_targeted"\r
      }\r
    },\r
    {\r
      "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin",\r
      "@type": "File",\r
      "name": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin",\r
      "sha256": "c20898d9852b97042247e32fec78abd264ec07f7650351fed0f7de8e255bc40f",\r
      "contentSize": "1242226b"\r
    },\r
    {\r
      "@id": "assays/MassHunter_targets/dataset/QuantReports/22-0005_exp001.batch_a.bin/190614_QuantReport_ISTD_DB.xlsx",\r
      "@type": "File",\r
      "name": "assays/MassHunter_targets/dataset/QuantReports/22-0005_exp001.batch_a.bin/190614_QuantReport_ISTD_DB.xlsx",\r
      "sha256": "69e947f9e7848445288e313edb4a69bf98300df21d476ea45faf375fad83352d",\r
      "contentSize": "170686b"\r
    },\r
    {\r
      "@id": "#Protocol_mh-quant-results",\r
      "@type": "LabProtocol"\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_0",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_0",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_03.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_1",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_1",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_04.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_2",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_2",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_15.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_3",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_3",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_16.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_4",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_4",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_55.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_5",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_5",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_56.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_6",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_6",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_61.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_7",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_7",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_62.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_8",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_8",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_65.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_9",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_9",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150112_66.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_10",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_10",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_03.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_11",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_11",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_04.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_12",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_12",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_11.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_13",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_13",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_12.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_14",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_14",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_13.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_15",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_15",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_14.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_16",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_16",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_15.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_17",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_17",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_16.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_18",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_18",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_25.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-results_19",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-results_19",\r
      "object": {\r
        "@id": "assays/GCqTOF_targets/dataset/150115_26.D"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-results"\r
      }\r
    },\r
    {\r
      "@id": "#Protocol_mh-quant-report",\r
      "@type": "LabProtocol"\r
    },\r
    {\r
      "@id": "#Process_A_MassHunter_targets_mh-quant-report_0",\r
      "@type": "LabProcess",\r
      "name": "mh-quant-report",\r
      "object": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
      },\r
      "result": {\r
        "@id": "assays/MassHunter_targets/dataset/QuantReports/22-0005_exp001.batch_a.bin/190614_QuantReport_ISTD_DB.xlsx"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_mh-quant-report"\r
      }\r
    },\r
    {\r
      "@id": "assays/MassHunter_targets/",\r
      "@type": "Dataset",\r
      "additionalType": "Assay",\r
      "identifier": "MassHunter_targets",\r
      "hasPart": [\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_03.D"\r
        },\r
        {\r
          "@id": "assays/MassHunter_targets/dataset/QuantResults/22-0005_exp001.batch_a.bin.batch.bin"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_04.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_15.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_16.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_55.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_56.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_61.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_62.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_65.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150112_66.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_03.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_04.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_11.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_12.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_13.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_14.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_15.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_16.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_25.D"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/dataset/150115_26.D"\r
        },\r
        {\r
          "@id": "assays/MassHunter_targets/dataset/QuantReports/22-0005_exp001.batch_a.bin/190614_QuantReport_ISTD_DB.xlsx"\r
        }\r
      ],\r
      "about": [\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_0"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_1"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_2"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_3"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_4"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_5"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_6"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_7"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_8"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_9"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_10"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_11"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_12"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_13"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_14"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_15"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_16"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_17"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_18"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-results_19"\r
        },\r
        {\r
          "@id": "#Process_A_MassHunter_targets_mh-quant-report_0"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "http://purl.org/spar/scoro/technician",\r
      "@type": "DefinedTerm",\r
      "name": "technician",\r
      "termCode": "http://purl.org/spar/scoro/technician"\r
    },\r
    {\r
      "@id": "#Person_Samantha_Kurz",\r
      "@type": "Person",\r
      "givenName": "Samantha",\r
      "affiliation": {\r
        "@id": "#Organization_Institute_of_Plant_Biochemistry,_HHU_Düsseldorf"\r
      },\r
      "familyName": "Kurz",\r
      "jobTitle": {\r
        "@id": "http://purl.org/spar/scoro/technician"\r
      },\r
      "address": "Universitätsstr. 1, 40225 Düsseldorf",\r
      "disambiguatingDescription": "Comment {Name = \\"Worksheet\\"}"\r
    },\r
    {\r
      "@id": "#Organization_Biological_Medical_Research_Centre,_HHU_Düsseldorf",\r
      "@type": "Organization",\r
      "name": "Biological Medical Research Centre, HHU Düsseldorf"\r
    },\r
    {\r
      "@id": "#Person_Thorsten_Wachtmeister",\r
      "@type": "Person",\r
      "givenName": "Thorsten",\r
      "affiliation": {\r
        "@id": "#Organization_Biological_Medical_Research_Centre,_HHU_Düsseldorf"\r
      },\r
      "familyName": "Wachtmeister",\r
      "jobTitle": {\r
        "@id": "http://purl.org/spar/scoro/technician"\r
      },\r
      "address": "Universitätsstr. 1, 40225 Düsseldorf",\r
      "disambiguatingDescription": "Comment {Name = \\"Worksheet\\"}"\r
    },\r
    {\r
      "@id": "assays/RNASeq/dataset/DB_097_CAMMD_CAGATC_L001_R1_001.fastq.gz",\r
      "@type": "File",\r
      "name": "assays/RNASeq/dataset/DB_097_CAMMD_CAGATC_L001_R1_001.fastq.gz",\r
      "sha256": "7f0b61abc9971ade750ce54f0f10aa50a6bc42a517be8ba60257e0cf6776d1c7",\r
      "contentSize": "1451886904b"\r
    },\r
    {\r
      "@id": "assays/RNASeq/dataset/DB_099_CAMMD_CTTGTA_L001_R1_001.fastq.gz",\r
      "@type": "File",\r
      "name": "assays/RNASeq/dataset/DB_099_CAMMD_CTTGTA_L001_R1_001.fastq.gz",\r
      "sha256": "2d4200a78e57bc821b46c1b6c84b1c5bcf5889eaba82e6baff16cc35f2e77651",\r
      "contentSize": "1879439049b"\r
    },\r
    {\r
      "@id": "assays/RNASeq/dataset/DB_103_CAMMD_AGTCAA_L001_R1_001.fastq.gz",\r
      "@type": "File",\r
      "name": "assays/RNASeq/dataset/DB_103_CAMMD_AGTCAA_L001_R1_001.fastq.gz",\r
      "sha256": "b7f7f26c5eb54c04aad9b4168b3104fcf17c6cbaff4ce4300d07c8955dbbeb28",\r
      "contentSize": "1713418642b"\r
    },\r
    {\r
      "@id": "assays/RNASeq/dataset/DB_161_reC3MD_GTCCGC_L001_R1_001.fastq.gz",\r
      "@type": "File",\r
      "name": "assays/RNASeq/dataset/DB_161_reC3MD_GTCCGC_L001_R1_001.fastq.gz",\r
      "sha256": "827908c02722e3bf22ca4cdfaeda269d999a36ae82e54ffeefc1602f7d3938f5",\r
      "contentSize": "1684786710b"\r
    },\r
    {\r
      "@id": "assays/RNASeq/dataset/DB_163_reC3MD_GTGAAA_L001_R1_001.fastq.gz",\r
      "@type": "File",\r
      "name": "assays/RNASeq/dataset/DB_163_reC3MD_GTGAAA_L001_R1_001.fastq.gz",\r
      "sha256": "08a331f71ef4ba111d5c8c0a76cb5e767b93b208ba9d50c93c4b632115bfea03",\r
      "contentSize": "1880798768b"\r
    },\r
    {\r
      "@id": "assays/RNASeq/dataset/DB_165_re-C3MD_GTGAAA_L002_R1_001.fastq.gz",\r
      "@type": "File",\r
      "name": "assays/RNASeq/dataset/DB_165_re-C3MD_GTGAAA_L002_R1_001.fastq.gz",\r
      "sha256": "dc8e318352b10c72c032ebf1609ea14cd57c454e0f922a7a0c14f1d8f754dfb9",\r
      "contentSize": "1801995178b"\r
    },\r
    {\r
      "@id": "#Sample_CAM_01_ext",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "CAM_01_ext"\r
    },\r
    {\r
      "@id": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000173",\r
      "@type": "DefinedTerm",\r
      "name": "RNA extraction protocol",\r
      "termCode": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000173"\r
    },\r
    {\r
      "@id": "#Protocol_rna_extraction.md_rna_extraction",\r
      "@type": "LabProtocol",\r
      "name": "rna_extraction.md",\r
      "intendedUse": {\r
        "@id": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000173"\r
      }\r
    },\r
    {\r
      "@id": "#ParameterValue_biosource_amount_80",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "biosource amount",\r
      "value": "80",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000013",\r
      "unitCode": "https://bioregistry.io/UO:0000022",\r
      "unitText": "milligram",\r
      "columnIndex": "0"\r
    },\r
    {\r
      "@id": "#ParameterValue_extraction_method_Roboklon_EURx_GeneMATRIX_Universal_RNA_Purification_version_2.3_September_2011",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "extraction method",\r
      "value": "Roboklon EURx GeneMATRIX Universal RNA Purification version 2.3 September 2011",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000054",\r
      "columnIndex": "1"\r
    },\r
    {\r
      "@id": "#ParameterValue_extraction_buffer_Roboklon_commercial_buffers",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "extraction buffer",\r
      "value": "Roboklon commercial buffers",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000050",\r
      "columnIndex": "2"\r
    },\r
    {\r
      "@id": "#ParameterValue_extraction_buffer_volume_300",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "extraction buffer volume",\r
      "value": "300",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000051",\r
      "unitCode": "https://bioregistry.io/UO:0000101",\r
      "unitText": "microliter",\r
      "columnIndex": "3"\r
    },\r
    {\r
      "@id": "#ParameterValue_RNA_quality_check_RIN_7.6_(Agilent_Bioanalyzer_2100_expert_Plant_RNA_Nano)",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "RNA quality check",\r
      "value": "RIN 7.6 (Agilent Bioanalyzer 2100 expert_Plant RNA Nano)",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000062",\r
      "columnIndex": "4"\r
    },\r
    {\r
      "@id": "#Process_A_RNASeq_rna_extraction_0",\r
      "@type": "LabProcess",\r
      "name": "rna_extraction_0",\r
      "object": {\r
        "@id": "#Sample_CAM_01"\r
      },\r
      "result": {\r
        "@id": "#Sample_CAM_01_ext"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_rna_extraction.md_rna_extraction"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_biosource_amount_80"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_method_Roboklon_EURx_GeneMATRIX_Universal_RNA_Purification_version_2.3_September_2011"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_buffer_Roboklon_commercial_buffers"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_buffer_volume_300"\r
        },\r
        {\r
          "@id": "#ParameterValue_RNA_quality_check_RIN_7.6_(Agilent_Bioanalyzer_2100_expert_Plant_RNA_Nano)"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_CAM_02_ext",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "CAM_02_ext"\r
    },\r
    {\r
      "@id": "#ParameterValue_biosource_amount_78",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "biosource amount",\r
      "value": "78",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000013",\r
      "unitCode": "https://bioregistry.io/UO:0000022",\r
      "unitText": "milligram",\r
      "columnIndex": "0"\r
    },\r
    {\r
      "@id": "#ParameterValue_RNA_quality_check_RIN_7.7_(Agilent_Bioanalyzer_2100_expert_Plant_RNA_Nano)",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "RNA quality check",\r
      "value": "RIN 7.7 (Agilent Bioanalyzer 2100 expert_Plant RNA Nano)",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000062",\r
      "columnIndex": "4"\r
    },\r
    {\r
      "@id": "#Process_A_RNASeq_rna_extraction_1",\r
      "@type": "LabProcess",\r
      "name": "rna_extraction_1",\r
      "object": {\r
        "@id": "#Sample_CAM_02"\r
      },\r
      "result": {\r
        "@id": "#Sample_CAM_02_ext"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_rna_extraction.md_rna_extraction"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_biosource_amount_78"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_method_Roboklon_EURx_GeneMATRIX_Universal_RNA_Purification_version_2.3_September_2011"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_buffer_Roboklon_commercial_buffers"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_buffer_volume_300"\r
        },\r
        {\r
          "@id": "#ParameterValue_RNA_quality_check_RIN_7.7_(Agilent_Bioanalyzer_2100_expert_Plant_RNA_Nano)"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_CAM_03_ext",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "CAM_03_ext"\r
    },\r
    {\r
      "@id": "#ParameterValue_biosource_amount_93",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "biosource amount",\r
      "value": "93",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000013",\r
      "unitCode": "https://bioregistry.io/UO:0000022",\r
      "unitText": "milligram",\r
      "columnIndex": "0"\r
    },\r
    {\r
      "@id": "#ParameterValue_RNA_quality_check_RIN_6.5_(Agilent_Bioanalyzer_2100_expert_Plant_RNA_Nano)",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "RNA quality check",\r
      "value": "RIN 6.5 (Agilent Bioanalyzer 2100 expert_Plant RNA Nano)",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000062",\r
      "columnIndex": "4"\r
    },\r
    {\r
      "@id": "#Process_A_RNASeq_rna_extraction_2",\r
      "@type": "LabProcess",\r
      "name": "rna_extraction_2",\r
      "object": {\r
        "@id": "#Sample_CAM_03"\r
      },\r
      "result": {\r
        "@id": "#Sample_CAM_03_ext"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_rna_extraction.md_rna_extraction"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_biosource_amount_93"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_method_Roboklon_EURx_GeneMATRIX_Universal_RNA_Purification_version_2.3_September_2011"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_buffer_Roboklon_commercial_buffers"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_buffer_volume_300"\r
        },\r
        {\r
          "@id": "#ParameterValue_RNA_quality_check_RIN_6.5_(Agilent_Bioanalyzer_2100_expert_Plant_RNA_Nano)"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_reC3_01_ext",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "reC3_01_ext"\r
    },\r
    {\r
      "@id": "#ParameterValue_biosource_amount_82",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "biosource amount",\r
      "value": "82",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000013",\r
      "unitCode": "https://bioregistry.io/UO:0000022",\r
      "unitText": "milligram",\r
      "columnIndex": "0"\r
    },\r
    {\r
      "@id": "#ParameterValue_RNA_quality_check_RIN_7.8_(Agilent_Bioanalyzer_2100_expert_Plant_RNA_Nano)",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "RNA quality check",\r
      "value": "RIN 7.8 (Agilent Bioanalyzer 2100 expert_Plant RNA Nano)",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000062",\r
      "columnIndex": "4"\r
    },\r
    {\r
      "@id": "#Process_A_RNASeq_rna_extraction_3",\r
      "@type": "LabProcess",\r
      "name": "rna_extraction_3",\r
      "object": {\r
        "@id": "#Sample_reC3_01"\r
      },\r
      "result": {\r
        "@id": "#Sample_reC3_01_ext"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_rna_extraction.md_rna_extraction"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_biosource_amount_82"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_method_Roboklon_EURx_GeneMATRIX_Universal_RNA_Purification_version_2.3_September_2011"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_buffer_Roboklon_commercial_buffers"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_buffer_volume_300"\r
        },\r
        {\r
          "@id": "#ParameterValue_RNA_quality_check_RIN_7.8_(Agilent_Bioanalyzer_2100_expert_Plant_RNA_Nano)"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_reC3_02_ext",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "reC3_02_ext"\r
    },\r
    {\r
      "@id": "#ParameterValue_biosource_amount_96",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "biosource amount",\r
      "value": "96",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000013",\r
      "unitCode": "https://bioregistry.io/UO:0000022",\r
      "unitText": "milligram",\r
      "columnIndex": "0"\r
    },\r
    {\r
      "@id": "#Process_A_RNASeq_rna_extraction_4",\r
      "@type": "LabProcess",\r
      "name": "rna_extraction_4",\r
      "object": {\r
        "@id": "#Sample_reC3_02"\r
      },\r
      "result": {\r
        "@id": "#Sample_reC3_02_ext"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_rna_extraction.md_rna_extraction"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_biosource_amount_96"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_method_Roboklon_EURx_GeneMATRIX_Universal_RNA_Purification_version_2.3_September_2011"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_buffer_Roboklon_commercial_buffers"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_buffer_volume_300"\r
        },\r
        {\r
          "@id": "#ParameterValue_RNA_quality_check_RIN_7.6_(Agilent_Bioanalyzer_2100_expert_Plant_RNA_Nano)"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Sample_reC3_03_ext",\r
      "@type": "Sample",\r
      "additionalType": "Sample",\r
      "name": "reC3_03_ext"\r
    },\r
    {\r
      "@id": "#Process_A_RNASeq_rna_extraction_5",\r
      "@type": "LabProcess",\r
      "name": "rna_extraction_5",\r
      "object": {\r
        "@id": "#Sample_reC3_03"\r
      },\r
      "result": {\r
        "@id": "#Sample_reC3_03_ext"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_rna_extraction.md_rna_extraction"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_biosource_amount_78"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_method_Roboklon_EURx_GeneMATRIX_Universal_RNA_Purification_version_2.3_September_2011"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_buffer_Roboklon_commercial_buffers"\r
        },\r
        {\r
          "@id": "#ParameterValue_extraction_buffer_volume_300"\r
        },\r
        {\r
          "@id": "#ParameterValue_RNA_quality_check_RIN_7.6_(Agilent_Bioanalyzer_2100_expert_Plant_RNA_Nano)"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Protocol_illumina.md_illumina",\r
      "@type": "LabProtocol",\r
      "name": "illumina.md",\r
      "intendedUse": {\r
        "@id": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000177"\r
      }\r
    },\r
    {\r
      "@id": "#ParameterValue_library_strategy_RNA-seq",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "library strategy",\r
      "value": "RNA-seq",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000035",\r
      "valueReference": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000003",\r
      "columnIndex": "0"\r
    },\r
    {\r
      "@id": "#ParameterValue_library_selection_cDNA_method",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "library selection",\r
      "value": "cDNA method",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000036",\r
      "columnIndex": "1"\r
    },\r
    {\r
      "@id": "#ParameterValue_library_layout_single-end",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "library layout",\r
      "value": "single-end",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000015",\r
      "valueReference": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000086",\r
      "columnIndex": "2"\r
    },\r
    {\r
      "@id": "#ParameterValue_library_preparation_kit_Illumina_TruSeq_RNA_Sample_Prep_Kit",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "library preparation kit",\r
      "value": "Illumina TruSeq RNA Sample Prep Kit",\r
      "propertyID": "http://purl.obolibrary.org/obo/GENEPIO_0000085",\r
      "columnIndex": "3"\r
    },\r
    {\r
      "@id": "#ParameterValue_library_preparation_kit_version_version_2",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "library preparation kit version",\r
      "value": "version 2",\r
      "propertyID": "http://purl.obolibrary.org/obo/GENEPIO_0000149",\r
      "columnIndex": "4"\r
    },\r
    {\r
      "@id": "#ParameterValue_adapter_sequence_CAGATC",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "adapter sequence",\r
      "value": "CAGATC",\r
      "propertyID": "http://purl.obolibrary.org/obo/GENEPIO_0000083",\r
      "columnIndex": "5"\r
    },\r
    {\r
      "@id": "#ParameterValue_next_generation_sequencing_instrument_model_Illumina_HiSeq_2000",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "next generation sequencing instrument model",\r
      "value": "Illumina HiSeq 2000",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000040",\r
      "valueReference": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_1000041",\r
      "columnIndex": "6"\r
    },\r
    {\r
      "@id": "#ParameterValue_base-calling_software_Illumina_Cassava",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "base-calling software",\r
      "value": "Illumina Cassava",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000017",\r
      "columnIndex": "7"\r
    },\r
    {\r
      "@id": "#ParameterValue_base-calling_software_version_v1.8.2",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "base-calling software version",\r
      "value": "v1.8.2",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000018",\r
      "columnIndex": "8"\r
    },\r
    {\r
      "@id": "#ParameterValue_Raw_data_file_format_*.fastq.gz",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "Raw data file format",\r
      "value": "*.fastq.gz",\r
      "propertyID": "http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000021",\r
      "columnIndex": "9"\r
    },\r
    {\r
      "@id": "#Process_A_RNASeq_illumina_0",\r
      "@type": "LabProcess",\r
      "name": "illumina_0",\r
      "object": {\r
        "@id": "#Sample_CAM_01_ext"\r
      },\r
      "result": {\r
        "@id": "assays/RNASeq/dataset/DB_097_CAMMD_CAGATC_L001_R1_001.fastq.gz"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_illumina.md_illumina"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_library_strategy_RNA-seq"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_selection_cDNA_method"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_layout_single-end"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_preparation_kit_Illumina_TruSeq_RNA_Sample_Prep_Kit"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_preparation_kit_version_version_2"\r
        },\r
        {\r
          "@id": "#ParameterValue_adapter_sequence_CAGATC"\r
        },\r
        {\r
          "@id": "#ParameterValue_next_generation_sequencing_instrument_model_Illumina_HiSeq_2000"\r
        },\r
        {\r
          "@id": "#ParameterValue_base-calling_software_Illumina_Cassava"\r
        },\r
        {\r
          "@id": "#ParameterValue_base-calling_software_version_v1.8.2"\r
        },\r
        {\r
          "@id": "#ParameterValue_Raw_data_file_format_*.fastq.gz"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#ParameterValue_adapter_sequence_CTTGTA",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "adapter sequence",\r
      "value": "CTTGTA",\r
      "propertyID": "http://purl.obolibrary.org/obo/GENEPIO_0000083",\r
      "columnIndex": "5"\r
    },\r
    {\r
      "@id": "#Process_A_RNASeq_illumina_1",\r
      "@type": "LabProcess",\r
      "name": "illumina_1",\r
      "object": {\r
        "@id": "#Sample_CAM_02_ext"\r
      },\r
      "result": {\r
        "@id": "assays/RNASeq/dataset/DB_099_CAMMD_CTTGTA_L001_R1_001.fastq.gz"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_illumina.md_illumina"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_library_strategy_RNA-seq"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_selection_cDNA_method"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_layout_single-end"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_preparation_kit_Illumina_TruSeq_RNA_Sample_Prep_Kit"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_preparation_kit_version_version_2"\r
        },\r
        {\r
          "@id": "#ParameterValue_adapter_sequence_CTTGTA"\r
        },\r
        {\r
          "@id": "#ParameterValue_next_generation_sequencing_instrument_model_Illumina_HiSeq_2000"\r
        },\r
        {\r
          "@id": "#ParameterValue_base-calling_software_Illumina_Cassava"\r
        },\r
        {\r
          "@id": "#ParameterValue_base-calling_software_version_v1.8.2"\r
        },\r
        {\r
          "@id": "#ParameterValue_Raw_data_file_format_*.fastq.gz"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#ParameterValue_adapter_sequence_AGTCAA",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "adapter sequence",\r
      "value": "AGTCAA",\r
      "propertyID": "http://purl.obolibrary.org/obo/GENEPIO_0000083",\r
      "columnIndex": "5"\r
    },\r
    {\r
      "@id": "#Process_A_RNASeq_illumina_2",\r
      "@type": "LabProcess",\r
      "name": "illumina_2",\r
      "object": {\r
        "@id": "#Sample_CAM_03_ext"\r
      },\r
      "result": {\r
        "@id": "assays/RNASeq/dataset/DB_103_CAMMD_AGTCAA_L001_R1_001.fastq.gz"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_illumina.md_illumina"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_library_strategy_RNA-seq"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_selection_cDNA_method"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_layout_single-end"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_preparation_kit_Illumina_TruSeq_RNA_Sample_Prep_Kit"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_preparation_kit_version_version_2"\r
        },\r
        {\r
          "@id": "#ParameterValue_adapter_sequence_AGTCAA"\r
        },\r
        {\r
          "@id": "#ParameterValue_next_generation_sequencing_instrument_model_Illumina_HiSeq_2000"\r
        },\r
        {\r
          "@id": "#ParameterValue_base-calling_software_Illumina_Cassava"\r
        },\r
        {\r
          "@id": "#ParameterValue_base-calling_software_version_v1.8.2"\r
        },\r
        {\r
          "@id": "#ParameterValue_Raw_data_file_format_*.fastq.gz"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#ParameterValue_adapter_sequence_GTCCGC",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "adapter sequence",\r
      "value": "GTCCGC",\r
      "propertyID": "http://purl.obolibrary.org/obo/GENEPIO_0000083",\r
      "columnIndex": "5"\r
    },\r
    {\r
      "@id": "#Process_A_RNASeq_illumina_3",\r
      "@type": "LabProcess",\r
      "name": "illumina_3",\r
      "object": {\r
        "@id": "#Sample_reC3_01_ext"\r
      },\r
      "result": {\r
        "@id": "assays/RNASeq/dataset/DB_161_reC3MD_GTCCGC_L001_R1_001.fastq.gz"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_illumina.md_illumina"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_library_strategy_RNA-seq"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_selection_cDNA_method"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_layout_single-end"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_preparation_kit_Illumina_TruSeq_RNA_Sample_Prep_Kit"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_preparation_kit_version_version_2"\r
        },\r
        {\r
          "@id": "#ParameterValue_adapter_sequence_GTCCGC"\r
        },\r
        {\r
          "@id": "#ParameterValue_next_generation_sequencing_instrument_model_Illumina_HiSeq_2000"\r
        },\r
        {\r
          "@id": "#ParameterValue_base-calling_software_Illumina_Cassava"\r
        },\r
        {\r
          "@id": "#ParameterValue_base-calling_software_version_v1.8.2"\r
        },\r
        {\r
          "@id": "#ParameterValue_Raw_data_file_format_*.fastq.gz"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#ParameterValue_adapter_sequence_GTGAAA",\r
      "@type": "PropertyValue",\r
      "additionalType": "ParameterValue",\r
      "name": "adapter sequence",\r
      "value": "GTGAAA",\r
      "propertyID": "http://purl.obolibrary.org/obo/GENEPIO_0000083",\r
      "columnIndex": "5"\r
    },\r
    {\r
      "@id": "#Process_A_RNASeq_illumina_4",\r
      "@type": "LabProcess",\r
      "name": "illumina_4",\r
      "object": {\r
        "@id": "#Sample_reC3_02_ext"\r
      },\r
      "result": {\r
        "@id": "assays/RNASeq/dataset/DB_163_reC3MD_GTGAAA_L001_R1_001.fastq.gz"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_illumina.md_illumina"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_library_strategy_RNA-seq"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_selection_cDNA_method"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_layout_single-end"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_preparation_kit_Illumina_TruSeq_RNA_Sample_Prep_Kit"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_preparation_kit_version_version_2"\r
        },\r
        {\r
          "@id": "#ParameterValue_adapter_sequence_GTGAAA"\r
        },\r
        {\r
          "@id": "#ParameterValue_next_generation_sequencing_instrument_model_Illumina_HiSeq_2000"\r
        },\r
        {\r
          "@id": "#ParameterValue_base-calling_software_Illumina_Cassava"\r
        },\r
        {\r
          "@id": "#ParameterValue_base-calling_software_version_v1.8.2"\r
        },\r
        {\r
          "@id": "#ParameterValue_Raw_data_file_format_*.fastq.gz"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "#Process_A_RNASeq_illumina_5",\r
      "@type": "LabProcess",\r
      "name": "illumina_5",\r
      "object": {\r
        "@id": "#Sample_reC3_03_ext"\r
      },\r
      "result": {\r
        "@id": "assays/RNASeq/dataset/DB_165_re-C3MD_GTGAAA_L002_R1_001.fastq.gz"\r
      },\r
      "executesLabProtocol": {\r
        "@id": "#Protocol_illumina.md_illumina"\r
      },\r
      "parameterValue": [\r
        {\r
          "@id": "#ParameterValue_library_strategy_RNA-seq"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_selection_cDNA_method"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_layout_single-end"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_preparation_kit_Illumina_TruSeq_RNA_Sample_Prep_Kit"\r
        },\r
        {\r
          "@id": "#ParameterValue_library_preparation_kit_version_version_2"\r
        },\r
        {\r
          "@id": "#ParameterValue_adapter_sequence_GTGAAA"\r
        },\r
        {\r
          "@id": "#ParameterValue_next_generation_sequencing_instrument_model_Illumina_HiSeq_2000"\r
        },\r
        {\r
          "@id": "#ParameterValue_base-calling_software_Illumina_Cassava"\r
        },\r
        {\r
          "@id": "#ParameterValue_base-calling_software_version_v1.8.2"\r
        },\r
        {\r
          "@id": "#ParameterValue_Raw_data_file_format_*.fastq.gz"\r
        }\r
      ]\r
    },\r
    {\r
      "@id": "http://purl.obolibrary.org/obo/NCIT_C101293",\r
      "@type": "DefinedTerm",\r
      "name": "Next Generation Sequencing",\r
      "termCode": "http://purl.obolibrary.org/obo/NCIT_C101293"\r
    },\r
    {\r
      "@id": "#OA_Illumina_HiSeq_2500",\r
      "@type": "DefinedTerm",\r
      "name": "Illumina HiSeq 2500"\r
    },\r
    {\r
      "@id": "#PV_mRNA_Sequencing",\r
      "@type": "PropertyValue",\r
      "name": "mRNA Sequencing",\r
      "propertyID": "http://purl.obolibrary.org/obo/NCIT_C129432"\r
    },\r
    {\r
      "@id": "assays/RNASeq/",\r
      "@type": "Dataset",\r
      "additionalType": "Assay",\r
      "identifier": "RNASeq",\r
      "creator": [\r
        {\r
          "@id": "#Person_Dominik_Brilhaus"\r
        },\r
        {\r
          "@id": "#Person_Klaus_Winter"\r
        },\r
        {\r
          "@id": "#Person_Samantha_Kurz"\r
        },\r
        {\r
          "@id": "#Person_Thorsten_Wachtmeister"\r
        }\r
      ],\r
      "hasPart": [\r
        {\r
          "@id": "assays/RNASeq/dataset/DB_097_CAMMD_CAGATC_L001_R1_001.fastq.gz"\r
        },\r
        {\r
          "@id": "assays/RNASeq/dataset/DB_099_CAMMD_CTTGTA_L001_R1_001.fastq.gz"\r
        },\r
        {\r
          "@id": "assays/RNASeq/dataset/DB_103_CAMMD_AGTCAA_L001_R1_001.fastq.gz"\r
        },\r
        {\r
          "@id": "assays/RNASeq/dataset/DB_161_reC3MD_GTCCGC_L001_R1_001.fastq.gz"\r
        },\r
        {\r
          "@id": "assays/RNASeq/dataset/DB_163_reC3MD_GTGAAA_L001_R1_001.fastq.gz"\r
        },\r
        {\r
          "@id": "assays/RNASeq/dataset/DB_165_re-C3MD_GTGAAA_L002_R1_001.fastq.gz"\r
        }\r
      ],\r
      "about": [\r
        {\r
          "@id": "#Process_A_RNASeq_rna_extraction_0"\r
        },\r
        {\r
          "@id": "#Process_A_RNASeq_rna_extraction_1"\r
        },\r
        {\r
          "@id": "#Process_A_RNASeq_rna_extraction_2"\r
        },\r
        {\r
          "@id": "#Process_A_RNASeq_rna_extraction_3"\r
        },\r
        {\r
          "@id": "#Process_A_RNASeq_rna_extraction_4"\r
        },\r
        {\r
          "@id": "#Process_A_RNASeq_rna_extraction_5"\r
        },\r
        {\r
          "@id": "#Process_A_RNASeq_illumina_0"\r
        },\r
        {\r
          "@id": "#Process_A_RNASeq_illumina_1"\r
        },\r
        {\r
          "@id": "#Process_A_RNASeq_illumina_2"\r
        },\r
        {\r
          "@id": "#Process_A_RNASeq_illumina_3"\r
        },\r
        {\r
          "@id": "#Process_A_RNASeq_illumina_4"\r
        },\r
        {\r
          "@id": "#Process_A_RNASeq_illumina_5"\r
        }\r
      ],\r
      "measurementMethod": {\r
        "@id": "http://purl.obolibrary.org/obo/NCIT_C101293"\r
      },\r
      "measurementTechnique": {\r
        "@id": "#OA_Illumina_HiSeq_2500"\r
      },\r
      "variableMeasured": {\r
        "@id": "#PV_mRNA_Sequencing"\r
      }\r
    },\r
    {\r
      "@id": "10.1104/pp.15.01076",\r
      "@type": "PropertyValue",\r
      "name": "DOI",\r
      "value": "10.1104/pp.15.01076",\r
      "propertyID": "http://purl.obolibrary.org/obo/OBI_0002110"\r
    },\r
    {\r
      "@id": "26530316",\r
      "@type": "PropertyValue",\r
      "name": "PubMedID",\r
      "value": "26530316",\r
      "propertyID": "http://purl.obolibrary.org/obo/OBI_0001617"\r
    },\r
    {\r
      "@id": "#Person_Brilhaus",\r
      "@type": "Person",\r
      "givenName": "Brilhaus"\r
    },\r
    {\r
      "@id": "#Person__Dominik;_Bräutigam",\r
      "@type": "Person",\r
      "givenName": " Dominik; Bräutigam"\r
    },\r
    {\r
      "@id": "#Person__Andrea;_Mettler-Altmann",\r
      "@type": "Person",\r
      "givenName": " Andrea; Mettler-Altmann"\r
    },\r
    {\r
      "@id": "#Person__Tabea;_Winter",\r
      "@type": "Person",\r
      "givenName": " Tabea; Winter"\r
    },\r
    {\r
      "@id": "#Person__Klaus;_Weber",\r
      "@type": "Person",\r
      "givenName": " Klaus; Weber"\r
    },\r
    {\r
      "@id": "#Person__Andreas_P_M",\r
      "@type": "Person",\r
      "givenName": " Andreas P M"\r
    },\r
    {\r
      "@id": "#OA_Published",\r
      "@type": "DefinedTerm",\r
      "name": "Published"\r
    },\r
    {\r
      "@id": "#Reversible_Burst_of_Transcriptional_Changes_during_Induction_of_Crassulacean_Acid_Metabolism_in_Talinum_triangulare.",\r
      "@type": "ScholarlyArticle",\r
      "headline": "Reversible Burst of Transcriptional Changes during Induction of Crassulacean Acid Metabolism in Talinum triangulare.",\r
      "identifier": [\r
        {\r
          "@id": "10.1104/pp.15.01076"\r
        },\r
        {\r
          "@id": "26530316"\r
        }\r
      ],\r
      "author": [\r
        {\r
          "@id": "#Person_Brilhaus"\r
        },\r
        {\r
          "@id": "#Person__Dominik;_Bräutigam"\r
        },\r
        {\r
          "@id": "#Person__Andrea;_Mettler-Altmann"\r
        },\r
        {\r
          "@id": "#Person__Tabea;_Winter"\r
        },\r
        {\r
          "@id": "#Person__Klaus;_Weber"\r
        },\r
        {\r
          "@id": "#Person__Andreas_P_M"\r
        }\r
      ],\r
      "creativeWorkStatus": {\r
        "@id": "#OA_Published"\r
      }\r
    },\r
    {\r
      "@id": "./",\r
      "@type": "Dataset",\r
      "additionalType": "Investigation",\r
      "identifier": "Facultative-CAM-in-Talinum",\r
      "creator": [\r
        {\r
          "@id": "http://orcid.org/0000-0001-9021-3197"\r
        },\r
        {\r
          "@id": "http://orcid.org/0000-0002-5309-0527"\r
        },\r
        {\r
          "@id": "http://orcid.org/0000-0002-9161-4889"\r
        },\r
        {\r
          "@id": "#Person_Klaus_Winter"\r
        },\r
        {\r
          "@id": "http://orcid.org/0000-0003-0970-4672"\r
        }\r
      ],\r
      "datePublished": "2025-07-31T17:41:41.5577612",\r
      "description": "Drought tolerance is a key factor for agriculture in the 21st century as it is a major determinant of plant survival in natural ecosystems as well as crop productivity. Plants have evolved a range of mechanisms to cope with drought, including a specialized type of photosynthesis termed Crassulacean acid metabolism (CAM). CAM is associated with stomatal closure during the day as atmospheric CO2 is assimilated primarily during the night, thus reducing transpirational water loss. The tropical herbaceous perennial species Talinum triangulare is capable of transitioning, in a facultative, reversible manner, from C3 photosynthesis to weakly expressed CAM in response to drought stress. The transcriptional regulation of this transition has been studied. Combining mRNA-Seq with targeted metabolite measurements, we found highly elevated levels of CAM-cycle enzyme transcripts and their metabolic products in T. triangulare leaves upon water deprivation. The carbohydrate metabolism is rewired to reduce the use of reserves for growth to support the CAM-cycle and the synthesis of compatible solutes. This large-scale expression dataset of drought-induced CAM demonstrates transcriptional regulation of the C3–CAM transition. We identified candidate transcription factors to mediate this photosynthetic plasticity, which may contribute in the future to the design of more drought-tolerant crops via engineered CAM.\\n\\n<<Test ARC registry>>",\r
      "hasPart": [\r
        {\r
          "@id": "studies/TalinumGenomeDraft/"\r
        },\r
        {\r
          "@id": "studies/TalinumSamples-STRI/"\r
        },\r
        {\r
          "@id": "assays/GCqTOF_targets/"\r
        },\r
        {\r
          "@id": "assays/MassHunter_targets/"\r
        },\r
        {\r
          "@id": "assays/RNASeq/"\r
        }\r
      ],\r
      "name": "Facultative CAM in Talinum triangulare",\r
      "citation": {\r
        "@id": "#Reversible_Burst_of_Transcriptional_Changes_during_Induction_of_Crassulacean_Acid_Metabolism_in_Talinum_triangulare."\r
      },\r
      "license": "ALL RIGHTS RESERVED BY THE AUTHORS"\r
    },\r
    {\r
      "@id": "ro-crate-metadata.json",\r
      "@type": "CreativeWork",\r
      "conformsTo": {\r
        "@id": "https://w3id.org/ro/crate/1.1"\r
      },\r
      "about": {\r
        "@id": "./"\r
      }\r
    }\r
  ]\r
}`;export{a as default};
