import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { 
  FileText,
  Gavel,
  Briefcase,
  Users,
  Group,
  DollarSign,
  ClipboardCheck,
  Calculator,
  TrendingUp,
  Shield,
  HandHelping,
  Clipboard,
  PieChart,
  BarChart,
  AlertCircle,
  Rocket,
  Building,
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface ServiceProps {
  icon: React.ElementType;
  title: string;
  items: string[];
}

const ServiceCard: React.FC<ServiceProps> = ({ icon: Icon, title, items }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="flex items-center text-xl">
        <Icon className="mr-2 h-5 w-5" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-5 space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-sm">{item}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const ServicesPage: React.FC = () => {
  const services: ServiceProps[] = [
    {
      icon: FileText,
      title: "Corporate Secretarial Services",
      items: [
        "Business Set-up Services",
        "Company Law Management",
        "Corporate Restructuring",
        "Financial Restructuring",
        "Secretarial Audit",
        "Due-Diligence",
        "Certifications",
        "SEBI and Listing Compliances",
        "Compliances under Foreign Exchange laws",
        " Closure of Business",
      ]
    },
    {
      icon: Gavel,
      title: "Legal Services",
      items: [
        "Our Legal Services are housed under ATG & Co. headed by Ms. Pooja Anand",
        "Insolvency and Bankruptcy Code, 2016",
        "Litigation in Original and Appellate Jurisdictions",
        "Non-litigation services such as drafting & vetting of documents, legal opinions, legal audits, Corporate Legal consultancy",
        "Intellectual Property Rights"
      ]
    },
    {
      icon: Briefcase,
      title: "Business Advisory",
      items: [
        "Structuring and Planning",
        "Project financing",
        "Fund raising",
        "Private equity and debt financing",
        "Fund raising for SMEs and start-ups",
        "Restructuring of fund",
        "Setting up Venture Capital/AIF",
        "Asset Management Company incorporation"
      ]
    },
    {
      icon: Users,
      title: "Placement Services",
      items: [
        "Our HR services are lead by Mr. Mukul Tyagi.",
        " Mr. Mukul Tyagi, as it's Managing Director alongwith the expertise team from last 20 years recruitments, having expertise placements and secondment of professionals such as:",
        "Company Secretary(Qualified, Semi-qualified, trainees)",
        "Lawyers(Advocates, Counsel, Interns)",
        "Chartered Accountants (Qualified, Semi-qualified, Accountants)",
        "Chief Financial Officer",
        "Chief Executive Officer",
        "Directorships (Women Director, Independent Director, Non-executive Director)"
      ]
    },
    {
      icon: Group,
      title: "ESOP Services",
      items: [
        "ESOP Plan, Design, Implementation and Roll Out",
        "Administration of ESOP",
        "ESOPdocumentation",
        "CompaniesActcompliances",
        "Legalcompliances",
        "Valuation",
        "ESOPCertificate"
      ]
    },
    {
      icon: DollarSign,
      title: "Finance Services",
      items: [
        "Finance",
        "Conducting Internal Audit",
        "Forensic Audit & RTA audit",
        "Preparation of Balance sheet as per Schedule VI",
        "Preparation of various MIS on requirement basis",
        "Preparation of Budgets"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Other Services, Applications and Approvals",
      items: [
        "Registration of PAN / TAN",
        "Registration of a Partnership Firm",
        "Registration of GST",
        "Registration of Shops & Establishment",
        "Registration of Import & Export Code",
        "Registrations and search report for Banks & Financial Institutions: Central Government, National Company Law Tribunal, Regional Director, Registrar of Companies, Reserve Bank of India, Securities and Exchange Board of India, etc.",
        "BoardEvaluation",
      ]
    },
    {
      icon: Calculator,
      title: "Accounting Services",
      items: [
        "Maintaining accounts of various entities",
        "Preparation of monthly, quarterly & yearly financial statements.",
        "Employeepayroll maintenance",
        "TaxreviewandDueDiligence",
        "Preparation of payroll statements",
        "Providing Valuation Reports",
        "Virtual CFO services",
        "Process Reconciliation statement"
      ]
    },
    {
      icon: TrendingUp,
      title: "Alternate Investment Fund Services",
      items: [
        "Registration and setting up of AIF",
        "Routine &Event based compliances"
      ]
    },
    {
      icon: Shield,
      title: "Regulatory",
      items: [
        "Consultation about Provident fund related compliances",
        "Filing of returns for Income tax, Service tax, GST etc.",
        "Tax consulting for GST, Service tax, Income tax and Professional tax",
        "Taxlitigation and representations",
        "Registration of PAN / TAN & GST",
        "Registration of a Partnership Firm",
        "Registration of Shops & Establishment",
        "Registration of Import & Export Code"
      ]
    },
    {
      icon: HandHelping,
      title: "Corporate Social Responsibility advisory",
      items: [
      "CSR Compliance related to Sec 135 and Schedule VII: Applicability of CSR to Company, Calculation of Net Profit, Formation of CSR Committee, Preparation & filing of e-forms with MCA, Checking unspent amount and required treatment of the same",
      "Preparation of CSR Report",
      "Verification of activity falls under Schedule VII",
      "Drafting: CSR Resolution and Minutes, CSR Policy",
      "CSR Audit",
      "Training of CSR Compliances",
      ]
    },
    {
      icon: Clipboard,
      title: "NGO Due Diligence",
      items: [
        "Organizational Due Diligence",
        "Verification of Regulatory compliances",
        "Director’s Due Diligence",
        "Verification of financial track record",
        "Assessment of project proposal, if required"
      ]
    },
    {
      icon: PieChart,
      title: "Services related to BRSR",
      items: [
        "Preparation of full BRSR Report",
        "Filing of BRSR in XBRL format with Stock Exchanges"
      ]
    },
    {
      icon: BarChart,
      title: "Social Stock Exchange Advisory",
      items: [
        "Determining eligibility for registration",
        "Verifying documents & providing assistance to the NPO for readiness of registration",
        "Drafting of Fund Raising document",
        "Guiding NPOs for listing on Social Stock Exchange",
      ]
    },
    {
      icon: AlertCircle,
      title: "Bankruptcy & Insolvency related services",
      items: [
       "Acting as Interim Resolution Professional, Resolution Professional, and Liquidator.",
       "Crafting of comprehensive Information Memorandum",
       "Oering strategic guidance to Resolution Applicants and the Committee of Creditors",
       "Advising on the eective execution of resolution plans",
       "Overseeing the implementation process",
       "Providing expertise on legal, operational, and compliance matters",
       "Skillful preparation of Resolution Plans that align with the objectives of all stakeholders and regulatory mandates",
      ]
    },
    {
      icon: Rocket,
      title: "Start-up Registration Services",
      items: [
        "Start-up Registration",
        "AngelTaxExemption",
        "IncomeTaxExemption",
        "ImportExport Code",
        "FDICompliance",
        "E-Commercecompliance",
        "Statutory registrations"
      ]
    },
    {
      icon: Building,
      title: "Asset Reconstruction Company related services",
      items: [
        "DueDiligence for acquisition of NPA",
        "Secretarial search reports",
        "Entire Secretarial Compliance and Audit",
        "Registering charges with MCA, CERSAI and IU",
        "Drafting of Oer Documents and Trust Deed",
        "Drafting of Policies and amendments thereto as directed by RBI",
        "Drafting CSR Policy and compliance thereto",
        "Initiating IBC process against defaulting borrowers for the purpose of recovery",
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-6 py-8">    
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;