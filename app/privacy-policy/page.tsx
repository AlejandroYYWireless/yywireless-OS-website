import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Mail,
  MapPin,
  Calendar,
  Lock,
  Users,
  Cookie,
  FileText,
  AlertCircle,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "information-collect",
      title: "Information We Collect",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: "data-protection",
      title: "Data Protection & Security",
      icon: <Lock className="w-5 h-5" />,
    },
    {
      id: "cookies",
      title: "Cookies & Tracking Technologies",
      icon: <Cookie className="w-5 h-5" />,
    },
    {
      id: "third-party",
      title: "Third-Party Disclosure",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      id: "compliance",
      title: "Compliance with Privacy Regulations",
      icon: <AlertCircle className="w-5 h-5" />,
    },
    {
      id: "your-rights",
      title: "Your Rights & Choices",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: "policy-updates",
      title: "Policy Updates",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      id: "contact",
      title: "Contact Information",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <div className=" min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Hidden on mobile */}
          <div className="lg:col-span-1 hidden lg:block">
            <Card className="sticky gap-0 top-24 border-lime-500">
              <CardHeader>
                <CardTitle className="text-lg">Contents</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center space-x-2 text-sm text-stone-200 hover:text-lime-500 transition-colors p-2 rounded-md hover:bg-stone-950"
                    >
                      {section.icon}
                      <span>{section.title}</span>
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 pt-[50px]">
            {/* Hero Section */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div>
                  <h1 className="text-3xl text-white md:text-4xl font-bold tracking-tight">
                    Privacy Policy
                  </h1>
                </div>
              </div>
              <p className="font-semibold text-stone-200 leading-relaxed">
                YYWireless/Bayshine Trading Inc. (&quot;Company,&quot;
                &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed
                to protecting the privacy of our users and ensuring transparency
                regarding the collection, use, and protection of personal
                information. This Privacy Policy explains how we handle data
                when you visit our website (yywireless.com) or engage with our
                services.
              </p>
            </div>

            {/* Section 1: Information We Collect */}
            <Card
              id="information-collect"
              className="mb-6 border-muted-foreground"
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <Users className="text-white w-6 h-6 " />
                  <span>1. Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="italic">
                  We may collect and process the following types of information:
                </p>
                <div className="grid gap-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">Personal Information</h4>
                    <p className="text-sm text-stone-200">
                      Name, email address, phone number, and company details,
                      provided voluntarily through forms, subscriptions, or
                      transactions.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">Transaction Data</h4>
                    <p className="text-sm text-stone-200">
                      Purchase details, payment information, and order history.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">Technical Data</h4>
                    <p className="text-sm text-stone-200">
                      IP address, browser type, device information, and site
                      usage analytics.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: How We Use Your Information */}
            <Card id="how-we-use" className="mb-6 border-muted-foreground">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <FileText className="w-6 text-white h-6" />
                  <span>2. How We Use Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white italic mb-4">
                  We utilize collected data to:
                </p>
                <div className="border-muted-foreground border rounded-lg p-1 grid md:grid-cols-2 gap-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">
                      Process transactions and provide customer support.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">
                      Send order confirmations, promotional content (where
                      consent is given), and important service updates.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">
                      Improve website performance, security, and user
                      experience.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">
                      Comply with legal and regulatory obligations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Data Protection & Security */}
            <Card id="data-protection" className="mb-6 border-muted-foreground">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <Lock className="w-6 h-6 text-white" />
                  <span>3. Data Protection & Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg">
                  <p className="text-sm leading-relaxed text-stone-200">
                    We employ industry-standard security measures, including
                    malware scanning, to safeguard personal data.{" "}
                    <span className="font-semibold underline">
                      However, no online system is entirely secure
                    </span>
                    , and users are encouraged to exercise caution when sharing
                    information.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Cookies & Tracking Technologies */}
            <Card id="cookies" className="mb-6 border-muted-foreground">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <Cookie className="w-6 h-6 text-white" />
                  <span>4. Cookies & Tracking Technologies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-stone-200 leading-relaxed">
                  We may use cookies and similar technologies for site
                  functionality and analytics. Users can manage cookie
                  preferences via browser settings, though certain features may
                  be affected.
                </p>
              </CardContent>
            </Card>

            {/* Section 5: Third-Party Disclosure */}
            <Card id="third-party" className="mb-6 border-muted-foreground">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <Shield className="w-6 h-6 text-white" />
                  <span>5. Third-Party Disclosure</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-stone-200 leading-relaxed">
                  We do not sell, trade, or rent personal information to third
                  parties. However, we may share data with trusted service
                  providers (e.g., payment processors, shipping carriers)
                  strictly for operational purposes.
                </p>
              </CardContent>
            </Card>

            {/* Section 6: Compliance with Privacy Regulations */}
            <Card id="compliance" className="mb-6 border-muted-foreground">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <AlertCircle className="w-6 h-6 text-white" />
                  <span>6. Compliance with Privacy Regulations</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white italic">
                  We adhere to applicable privacy laws, including:
                </p>
                <div className="space-y-3">
                  <div className="border border-muted-foreground rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-1">
                      California Online Privacy Protection Act (CalOPPA)
                    </h4>
                    <p className="text-xs text-stone-200">
                      Users can access our policy from our homepage and are
                      notified of updates on this page.
                    </p>
                  </div>
                  <div className="border border-muted-foreground rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-1">
                      Children&rsquo;s Online Privacy Protection Act (COPPA)
                    </h4>
                    <p className="text-xs text-stone-200">
                      We do not knowingly collect information from individuals
                      under 13.
                    </p>
                  </div>
                  <div className="border border-muted-foreground rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-1">CAN-SPAM Act</h4>
                    <p className="text-xs text-stone-200">
                      We ensure all marketing emails contain an opt-out option,
                      and requests to unsubscribe are honored promptly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 7: Your Rights & Choices */}
            <Card id="your-rights" className="mb-6 border-muted-foreground">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <Users className="w-6 h-6 text-white" />
                  <span>7. Your Rights & Choices</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white italic mb-4">
                  Depending on applicable laws, users may have rights to:
                </p>
                <div className="space-y-2 text-stone-200">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">
                      Request access to, correction of, or deletion of personal
                      information.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">
                      Opt out of marketing communications at any time via the
                      unsubscribe link in emails.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">
                      Manage cookie settings to control tracking preferences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 8: Policy Updates */}
            <Card id="policy-updates" className="mb-6 border-muted-foreground">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <Calendar className="w-6 h-6 text-white" />
                  <span>8. Policy Updates</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-stone-200 leading-relaxed">
                  We may update this Privacy Policy periodically to reflect
                  changes in our practices or legal requirements. The most
                  recent version will always be available on this page.
                </p>
              </CardContent>
            </Card>

            {/* Section 9: Contact Information */}
            <Card id="contact" className="mb-8 border-muted-foreground">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <Mail className="w-6 h-6 text-white" />
                  <span>9. Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-200 mb-4">
                  For questions about this Privacy Policy or your data, contact
                  us at:
                </p>
                <div className="grid md:grid-cols-2  gap-4">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Mail className="w-5 h-5 text-stone-200 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <a
                        href="mailto:info@yywireless.com"
                        className="text-sm text-stone-200 hover:underline"
                      >
                        info@yywireless.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 border rounded-lg">
                    <MapPin className="w-5 h-5 text-stone-200 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Address</p>
                      <p className="text-sm text-stone-200">
                        2075 NW 94th St
                        <br />
                        Clive, IA 50325
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t text-white bg-stone-950 border-lime-500">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold">YYWireless</span>
              </div>
              <p className="text-sm text-stone-200">
                Committed to protecting your privacy and ensuring transparency
                in all our data practices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="text-sm text-stone-200 hover:text-lime-500 transition-colors block"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="space-y-2">
                <p className="text-sm text-stone-200">info@yywireless.com</p>
                <p className="text-sm text-stone-200">Clive, IA 50325</p>
              </div>
            </div>
          </div>
          <Separator className="my-6 bg-lime-500" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 YYWireless/Bayshine Trading Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
