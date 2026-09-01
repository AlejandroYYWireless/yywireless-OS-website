import { toCapitalCase } from "@/lib/utils";

interface CustomerInquiryTemplateProps {
  email: string;
  body: string;
  category: string;
}
export const CustomerInquiryTemplate = ({
  email,
  body,
  category,
}: CustomerInquiryTemplateProps) => {
  return (
    <div
      style={{
        backgroundColor: "#f4f4f5",
        fontFamily:
          "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        padding: "40px 16px",
        color: "#000000",
      }}
    >
      <table
        align="center"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        width="100%"
        style={{
          maxWidth: "600px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          border: "1px solid #e4e4e7",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: "#000000",
                padding: "32px 24px",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  color: "#ffffff",
                  fontSize: "24px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  margin: 0,
                }}
              >
                YYWIRELESS
              </h1>
              <p
                style={{
                  color: "#8aeb6a",
                  fontSize: "12px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: "6px",
                  marginBottom: 0,
                }}
              >
                Customer Inquiry
              </p>
            </td>
          </tr>

          <tr>
            <td
              style={{
                backgroundColor: "#8aeb6a",
                height: "4px",
                fontSize: "0px",
                lineHeight: "0px",
              }}
            >
              &nbsp;
            </td>
          </tr>

          <tr>
            <td style={{ padding: "32px 24px" }}>
              <table
                width="100%"
                cellPadding={0}
                cellSpacing={0}
                style={{
                  backgroundColor: "#f9fafb",
                  borderRadius: "6px",
                  border: "1px solid #f3f4f6",
                  marginBottom: "24px",
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ padding: "16px 20px" }}>
                      <p
                        style={{
                          fontSize: "11px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          color: "#6b7280",
                          letterSpacing: "0.05em",
                          margin: "0 0 4px 0",
                        }}
                      >
                        Department Category
                      </p>
                      <p
                        style={{
                          fontSize: "16px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          color: "#000000",
                          margin: "0 0 16px 0",
                        }}
                      >
                        {category || "General Inquiry"}
                      </p>

                      <p
                        style={{
                          fontSize: "11px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          color: "#6b7280",
                          letterSpacing: "0.05em",
                          margin: "0 0 4px 0",
                        }}
                      >
                        Customer Email
                      </p>
                      <a
                        href={`mailto:${email}?subject=In response to your ${toCapitalCase(category)} inquiery`}
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          color: "#111827",
                          textDecoration: "underline",
                          margin: 0,
                        }}
                      >
                        {email}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#000000",
                  marginBottom: "12px",
                }}
              >
                Customer Message
              </p>

              <div
                style={{
                  borderLeft: "4px solid #8aeb6a",
                  backgroundColor: "#fafafa",
                  padding: "16px 20px",
                  borderRadius: "0 6px 6px 0",
                  marginBottom: "32px",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.6",
                    color: "#374151",
                    whiteSpace: "pre-wrap",
                    margin: 0,
                  }}
                >
                  &quot;{body}&quot;
                </p>
              </div>

              <table width="100%" cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td align="center">
                      <a
                        href={`mailto:${email}?subject=In response to your ${toCapitalCase(category)} inquiery`}
                        style={{
                          backgroundColor: "#000000",
                          color: "#ffffff",
                          fontSize: "14px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          padding: "14px 28px",
                          borderRadius: "6px",
                          textDecoration: "none",
                          display: "inline-block",
                        }}
                      >
                        Reply To Customer
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td
              style={{
                backgroundColor: "#f9fafb",
                borderTop: "1px solid #e5e7eb",
                padding: "24px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  color: "#6b7280",
                  letterSpacing: "0.05em",
                  margin: "0 0 6px 0",
                }}
              >
                YYWIRELESS
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: "#9ca3af",
                  margin: 0,
                }}
              >
                Connecting people through technology — affordability,
                reliability, and sustainability.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CustomerInquiryTemplate;
