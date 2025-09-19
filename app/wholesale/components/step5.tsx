import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Step5 = () => {
  return (
    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-8 xl:p-4">
      <div className="relative lg:max-w-[800px] h-[300px] sm:h-[400px] ">
        <Image
          src={"/images/wholesale_page/Scam-Guard.webp"}
          alt="Image representing alert to scamming, credit to Malwarebytes's Scam Guard"
          sizes="(max-width: 768px) 100vw, 700px"
          className="xl:rounded-xl"
          fill
        />
      </div>
      <div>
        <div className="bg-white max-w-4xl mx-auto p-6 space-y-6">
          <div className="text-center mb-8">
            <Shield className="mx-auto h-12 w-12 text-primary mb-4" />
            <h1 className="text-3xl font-bold text-foreground">
              Protect Yourself from Scams
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white text-black">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  How to verify
                </CardTitle>
                <CardDescription>
                  Follow these steps to ensure you&apos;re dealing with official
                  YYWireless communications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    All official YYWireless communications will come from an{" "}
                    <Badge variant="outline" className="font-mono">
                      @yywireless.com
                    </Badge>{" "}
                    email address or through our listed phone numbers.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    Payments are only made through{" "}
                    <strong>
                      official company invoices and approved payment methods
                    </strong>
                    .
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    If you are unsure, always contact us directly at{" "}
                    <Badge variant="outline" className="font-mono">
                      info@yywireless.com
                    </Badge>{" "}
                    or call your sales reps before making a payment.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white text-black">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  Warning signs of a scam
                </CardTitle>
                <CardDescription>
                  Be alert for these red flags that indicate fraudulent activity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    Requests for payment through personal accounts (Zelle,
                    CashApp, PayPal Friends & Family, etc.).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    Pressure tactics such as &quot;limited time offers&quot; or
                    threats to cut off supply if payment isn&apos;t made
                    quickly.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    Poor grammar, spelling errors, or unprofessional
                    communication.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white text-black">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                What to do if you suspect fraud
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">
                <strong>Do not</strong> send money.
              </p>
              <p className="text-sm">
                Take a screenshot of the message and forward it to{" "}
                <Badge variant="outline" className="font-mono">
                  info@yywireless.com
                </Badge>
                .
              </p>
              <p className="text-sm">
                Call us immediately to confirm whether the request is
                legitimate.
              </p>
            </CardContent>
          </Card>

          <div className="font-bold text-xl">Disclaimer</div>
          <Separator />
          <div>
            YYWireless is <strong>not responsible or liable</strong> for any
            losses, damages, or fraudulent transactions that occur as a result
            of dealing with unauthorized individuals or channels. Customers are
            solely responsible for verifying that they are working with official
            YYWireless representatives before making payments.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
