import { FaAtom } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityAnalytical() {
    const glob = import.meta.glob('/public/images/facilities/analytical/*.{png,jpg,jpeg,webp,mp4}', { eager: true, query: '?url', import: 'default' });
    const galleryImages = Object.values(glob).map(path => path.replace(/^\/public/, ''));

    return (
        <FacilityDetailLayout
            title="Analytical & Bioanalytical"
            subtitle="Method Development & Validation"
            galleryImages={galleryImages}
            intro="PRADO's Analytical and Bioanalytical (ABA) Laboratory is equipped with cutting-edge instrumentation for the precise quantification of drugs and metabolites in biological matrices. Every method is developed and validated in full compliance with ICH, FDA, and EMA guidelines."
            image="/images/facilities/analytical.png"
            icon={<FaAtom />}
            stats={[
                { value: 'LC-MS/MS', label: 'Platform' },
                { value: 'HPLC', label: 'UV/DAD' },
                { value: 'GLP', label: 'Validated Methods' },
                { value: 'ICH', label: 'Compliant' },
            ]}
            features={[
                {
                    title: 'LC-MS/MS Bioanalysis',
                    description: 'High-sensitivity liquid chromatography-tandem mass spectrometry for accurate quantification of small molecules and peptides in complex biological matrices.',
                    bullets: [
                        'Plasma, serum, urine, feces, bile, CSF analysis',
                        'Brain, liver, kidney, lung, ocular tissue analysis',
                        'Lower limit of quantification (LLOQ) in sub-ng/mL range',
                        'Simultaneous multi-analyte quantification (multiplex)',
                    ]
                },
                {
                    title: 'HPLC & UV/DAD Analysis',
                    description: 'High-performance liquid chromatography for formulation analysis, concentration verification, purity assessment, and stability testing.',
                    bullets: [
                        'Reversephase and normal-phase chromatography',
                        'Gradient and isocratic elution methods',
                        'Photodiode array (DAD) and UV detection',
                    ]
                },
                {
                    title: 'Method Development & Validation',
                    description: 'Full GLP-compliant analytical method development and validation covering all ICH Q2(R1) / FDA / EMA validation parameters.',
                    bullets: [
                        'Selectivity, sensitivity (LLOQ/ULOQ)',
                        'Accuracy, precision (intra- and inter-day)',
                        'Matrix effect, recovery, stability',
                        'Dilution integrity and carryover',
                    ]
                },
                {
                    title: 'Bioanalytical Support for PK/TK Studies',
                    description: 'Seamless integration with pharmacokinetic and toxicokinetic study design, providing sample analysis and PK parameter calculation support.',
                },
                {
                    title: 'Formulation Analysis',
                    description: 'Analytical confirmation of dose formulation accuracy, homogeneity, and stability to ensure study data integrity from the formulation stage onwards.',
                },
                {
                    title: 'Chemical Characterization',
                    description: 'Leachable and extractable analysis of medical device materials and packaging components to support biocompatibility risk assessments.',
                }
            ]}
        >
            <div className="max-w-4xl mx-auto space-y-8 text-lg text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                <p>
                    PRADO's Analytical and Bioanalytical (ABA) laboratory is a specialized facility designed for method development, validation, and sample analysis. Equipped with advanced liquid chromatography-tandem mass spectrometry (LC-MS/MS) and HPLC systems, the laboratory enables highly sensitive and precise quantification of drugs and metabolites in diverse biological matrices.
                </p>
                <p>
                    All bioanalytical services are conducted in full compliance with GLP, ICH, FDA, and EMA guidelines. The team supports pharmacokinetic (PK) and toxicokinetic (TK) studies, dose formulation verification, and chemical characterization to ensure data integrity from study design to regulatory submission.
                </p>
            </div>
        </FacilityDetailLayout>
    );
}
