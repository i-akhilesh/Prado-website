import { FaVial } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

export default function ServicePhysicalChemical() {
    return (
        <ServiceDetailLayout
            title="Physical - Chemical Testing"
            subtitle="Comprehensive Testing Services"
            intro="PRADO provides extensive Physical-Chemical testing services complying with international guidelines including CIPAC, EEC, OECD, OPPTS, and ASTM for a wide range of test items."
            image="/images/services/phys-chem.png"
            icon={<FaVial />}
            subServices={[
                {
                    title: "Collaborative International Pesticides Analytical Council (CIPAC)",
                    bullets: [
                        "pH, conductivity, viscosity, wettability, flowability, dustiness",
                        "Solubility in organic solvents, specific gravity, A.I content",
                        "Dissociation content – titration, spectrophotometric, conductometric methods",
                        "Weight loss on heating, Moisture content",
                        "Melting/freezing point, Ignition test, foam persistence",
                        "Material soluble in acetone and water",
                        "Pourability, suspensibility, emulsion stability",
                        "Spontaneity of Dispersion, particle size distribution",
                        "Acidity/alkalinity using potentiometric",
                        "Wet and dry sieve test/analysis, solution stability, attrition resistance, nominal size range, emulsifier content",
                        "Freeze/Thaw, Accelerated Storage, metal and metal ion Stability"
                    ]
                },
                {
                    title: "European Economic Community (EEC)",
                    bullets: [
                        "Boiling point, Surface tension",
                        "Oxidizing properties, Flash point",
                        "Volatility, vapour pressure",
                        "Vapour pressure and henry’s constant"
                    ]
                },
                {
                    title: "Organization for Economic Co-operation & Development (OECD)",
                    bullets: [
                        "Solubility in water, hydrolysis",
                        "Density, melting, boiling point",
                        "Viscosity, surface tension",
                        "Partition coefficient",
                        "Explosivity, photolysis",
                        "UV/Vis identification",
                        "Ready biodegradability"
                    ]
                },
                {
                    title: "Office of Prevention, Pesticides and Toxic Substances (OPPTS)",
                    bullets: [
                        "pH, solubility in water, hydrolysis, colour, odour & Physical state",
                        "Dissociation content – titration, spectrophotometric, conductometric methods",
                        "Density, Melting point, oxidation/ reduction – chemical incompatibility",
                        "Miscibility in water and organic solvents (02 solvents)",
                        "Container compatibility, Shelf – life (1 year and 30 months study)",
                        "Vapour Pressure and Henry’s constant as a single study",
                        "Vapour pressure, volatility",
                        "Explosivity",
                        "Flammability"
                    ]
                },
                {
                    title: "American Society for Testing and Materials (ASTM)",
                    bullets: [
                        "Corrosivity",
                        "Determination of hydroxyl value",
                        "Chemical compatibility"
                    ]
                },
                {
                    title: "OTHER STUDIES",
                    bullets: [
                        "Sulphonation Index",
                        "Iodine index (saponification)",
                        "Determination of Purity"
                    ]
                }
            ]}
        />
    );
}
