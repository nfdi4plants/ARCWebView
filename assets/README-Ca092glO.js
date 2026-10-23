const t=`# Facultative CAM in Talinum\r
\r
This ARC is based on Brilhaus et al. (2016). <https://doi.org/10.1104/pp.15.01076>. See [isa.investigation.xlsx](./isa.investigation.xlsx) for details.\r
The [Talinum Genome Draft](./studies/TalinumGenomeDraft) originates from <https://git.nfdi4plants.org/hhu-plant-biochemistry/talinum-fruticosum-genome>\r
\r
## Table of Contents\r
\r
- [Table of Contents](#table-of-contents)\r
  - [Description](#description)\r
- [Relationships between Assays and Studies](#relationships-between-assays-and-studies)\r
- [Workflow Overview](#workflow-overview)\r
- [Additional details](#additional-details)\r
- [Publication](#publication)\r
- [Study : *TalinumGenomeDraft*](#study--talinumgenomedraft)\r
  - [Additional details](#additional-details-1)\r
  - [Annotation headers](#annotation-headers)\r
- [Study : *TalinumSamples-STRI*](#study--talinumsamples-stri)\r
  - [Additional details](#additional-details-2)\r
  - [Annotation headers](#annotation-headers-1)\r
- [Assay : *MassHunter\\_targets*](#assay--masshunter_targets)\r
  - [Additional details](#additional-details-3)\r
  - [Annotation headers](#annotation-headers-2)\r
- [Assay : *RNASeq*](#assay--rnaseq)\r
  - [Additional details](#additional-details-4)\r
  - [Annotation headers](#annotation-headers-3)\r
- [Assay : *GCqTOF\\_targets*](#assay--gcqtof_targets)\r
  - [Additional details](#additional-details-5)\r
  - [Annotation headers](#annotation-headers-4)\r
\r
### Description\r
\r
Drought tolerance is a key factor for agriculture in the 21st century as it is a major determinant of plant survival in natural ecosystems as well as crop productivity. Plants have evolved a range of mechanisms to cope with drought, including a specialized type of photosynthesis termed Crassulacean acid metabolism (CAM). CAM is associated with stomatal closure during the day as atmospheric CO2 is assimilated primarily during the night, thus reducing transpirational water loss. The tropical herbaceous perennial species Talinum triangulare is capable of transitioning, in a facultative, reversible manner, from C3 photosynthesis to weakly expressed CAM in response to drought stress. The transcriptional regulation of this transition has been studied. Combining mRNA-Seq with targeted metabolite measurements, we found highly elevated levels of CAM-cycle enzyme transcripts and their metabolic products in T. triangulare leaves upon water deprivation. The carbohydrate metabolism is rewired to reduce the use of reserves for growth to support the CAM-cycle and the synthesis of compatible solutes. This large-scale expression dataset of drought-induced CAM demonstrates transcriptional regulation of the C3–CAM transition. We identified candidate transcription factors to mediate this photosynthetic plasticity, which may contribute in the future to the design of more drought-tolerant crops via engineered CAM.\r
\r
## Relationships between Assays and Studies\r
\r
\`\`\`mermaid\r
---\r
title: Facultative-CAM-in-Talinum\r
---\r
\r
flowchart LR\r
    Facultative-CAM-in-Talinum[Facultative-CAM-in-Talinum]\r
    Facultative-CAM-in-Talinum-->STUDY_TalinumGenomeDraft\r
    subgraph STUDY_TalinumGenomeDraft[Study:TalinumGenomeDraft]\r
        TalinumGenomeDraft[TalinumGenomeDraft]\r
    end\r
    Facultative-CAM-in-Talinum-->STUDY_TalinumSamples-STRI\r
    subgraph STUDY_TalinumSamples-STRI[Study:TalinumSamples-STRI]\r
        plant_material[plant_material]\r
    end\r
    subgraph ASSAY_MassHunter_targets[Assay:MassHunter_targets]\r
        mh-quant-results[mh-quant-results]\r
        mh-quant-report[mh-quant-report]\r
    end\r
    subgraph ASSAY_RNASeq[Assay:RNASeq]\r
        rna_extraction[rna_extraction]\r
        illumina[illumina]\r
    end\r
    subgraph ASSAY_GCqTOF_targets[Assay:GCqTOF_targets]\r
        metabolite_extraction[metabolite_extraction]\r
        gas_chromatography[gas_chromatography]\r
        mass_spec[mass_spec]\r
    end\r
    plant_material-->|6|rna_extraction\r
    plant_material-->|6|metabolite_extraction\r
    mh-quant-results-->|1|mh-quant-report\r
    rna_extraction-->|6|illumina\r
    metabolite_extraction-->|6|gas_chromatography\r
    gas_chromatography-->|20|mass_spec\r
    mass_spec-->|20|mh-quant-results\r
\r
classDef investigationStyle fill:#6c7885,color:#2d3e50,font-weight:bold;\r
classDef studyStyle fill:#62d4c1,color:#2d3e50,font-weight:bold;\r
classDef assayStyle fill:#ffd34d,color:#2d3e50,font-weight:bold;\r
classDef processStyle fill:#D46275,color:#2d3e50,font-weight:;\r
class Facultative-CAM-in-Talinum investigationStyle;\r
class STUDY_TalinumGenomeDraft,STUDY_TalinumSamples-STRI studyStyle;\r
class ASSAY_MassHunter_targets,ASSAY_RNASeq,ASSAY_GCqTOF_targets assayStyle;\r
class TalinumGenomeDraft,plant_material,mh-quant-results,mh-quant-report,rna_extraction,illumina,metabolite_extraction,gas_chromatography,mass_spec processStyle;\r
\`\`\`\r
\r
## Workflow Overview\r
\r
![arc.cwl](arc-cwl.svg)\r
\r
\r
## Additional details\r
\r
| Meta Data | Description |\r
| --------- | ----------- |\r
| Submission Date | July 07, 2015 |\r
| Public Release Date | Nov 05, 2015 |\r
| Study identifiers | TalinumGenomeDraft , TalinumSamples-STRI |\r
| Study Count | 2 |\r
| Assay identifiers | MassHunter_targets , RNASeq , GCqTOF_targets |\r
| Assay Count | 3 |\r
\r
## Publication\r
\r
| Meta Data | Description |\r
| ----------- | ----------- |\r
| Title | Reversible Burst of Transcriptional Changes during Induction of Crassulacean Acid Metabolism in Talinum triangulare. |\r
| Authors | Brilhaus, Dominik; Bräutigam, Andrea; Mettler-Altmann, Tabea; Winter, Klaus; Weber, Andreas P M |\r
| PubMedID | 26530316 |\r
| DOI | 10.1104/pp.15.01076 |\r
| Current status | Published |\r
\r
## Study : *TalinumGenomeDraft*\r
\r
### Additional details\r
\r
| Meta Data | Description |\r
| --------- | ----------- |\r
| Table Count | 1 |\r
| Table Names | TalinumGenomeDraft |\r
| Sample Count | 1 |\r
| Data File Count | 1 |\r
| Associated assays |  |\r
| Biological replicates | 0 |\r
\r
### Annotation headers\r
\r
## Study : *TalinumSamples-STRI*\r
\r
### Additional details\r
\r
| Meta Data | Description |\r
| --------- | ----------- |\r
| Table Count | 1 |\r
| Table Names | plant_material |\r
| Sample Count | 6 |\r
| Data File Count | 0 |\r
| Associated assays | RNASeq , GCqTOF_targets |\r
| Biological replicates | 0 |\r
\r
### Annotation headers\r
\r
**Characteristics**: [organism](https://bioregistry.io/OBI:0100026),[organism part](https://bioregistry.io/EFO:0000635),[plant age](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000033)\r
\r
**Parameters**: [growth day length](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000041),[light intensity exposure](https://bioregistry.io/PECO:0007224),[humidity day](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000005),[temperature day](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000007),[temperature night](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000008)\r
\r
**Factors**: [watering exposure](https://bioregistry.io/PECO:0007383),[Timepoint](https://bioregistry.io/NCIT:C68568),\`timepoint-ZT\`,\`Photosynthesis mode\`\r
\r
## Assay : *MassHunter_targets*\r
\r
### Additional details\r
\r
| Meta Data | Description |\r
| --------- | ----------- |\r
| Table Count | 2 |\r
| Table Names | mh-quant-results , mh-quant-report |\r
| Sample Count | 20 |\r
| Data File Count | 21 |\r
| Associated studies |  |\r
\r
### Annotation headers\r
\r
## Assay : *RNASeq*\r
\r
### Additional details\r
\r
| Meta Data | Description |\r
| --------- | ----------- |\r
| Measurement Type | mRNA Sequencing |\r
| Technology Type | Next Generation Sequencing |\r
| Table Count | 2 |\r
| Table Names | rna_extraction , illumina |\r
| Sample Count | 6 |\r
| Data File Count | 6 |\r
| Associated studies | TalinumSamples-STRI |\r
\r
### Annotation headers\r
\r
**Parameters**: [biosource amount](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000013),[extraction method](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000054),[extraction buffer](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000050),[extraction buffer volume](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000051),[RNA quality check](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000062),[library strategy](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000035),[library selection](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000036),[library layout](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000015),[library preparation kit](http://purl.obolibrary.org/obo/GENEPIO_0000085),[library preparation kit version](http://purl.obolibrary.org/obo/GENEPIO_0000149),[adapter sequence](http://purl.obolibrary.org/obo/GENEPIO_0000083),[next generation sequencing instrument model](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000040),[base-calling software](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000017),[base-calling software version](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000018),[Raw data file format](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000021)\r
\r
## Assay : *GCqTOF_targets*\r
\r
### Additional details\r
\r
| Meta Data | Description |\r
| --------- | ----------- |\r
| Measurement Type | GCqTOF targeted |\r
| Table Count | 3 |\r
| Table Names | metabolite_extraction , gas_chromatography , mass_spec |\r
| Sample Count | 20 |\r
| Data File Count | 20 |\r
| Associated studies | TalinumSamples-STRI |\r
\r
### Annotation headers\r
\r
**Parameters**: [Bio entity](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000012),[Biosource amount](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000013),[Biosource material state](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0010009),[Extraction buffer](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000050),[Extraction buffer volume](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000051),[Internal standard](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0010012),[Sample volume](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0010013),[MS sample post-extraction](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000043),[MS sample resuspension](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000044),[MS derivatization](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000052),[MS sample type](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000045),[Chromatography instrument model](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000046),[Chromatography autosampler model](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000047),[Chromatography column type](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000053),[Chromatography column model](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000048),[mobile phase](http://purl.obolibrary.org/obo/CHMO_0000995),[Chromatography injection volume](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0010014),[Chromatography injection mode](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0010015),[Chromatography gradient](http://purl.org/nfdi4plants/ontology/dpbo/DPBO_0000081),[scan polarity](https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000465),[scan window lower limit](https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000501),[scan window upper limit](https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000500),[scan rate](https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000015),[instrument model](https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000031),[ionization type](https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000008),[mass analyzer type](https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000443),[detector type](https://www.ebi.ac.uk/ols4/ontologies/ms/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMS_1000026)\r
`;export{t as default};
