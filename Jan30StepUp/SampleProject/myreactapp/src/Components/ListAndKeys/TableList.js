import React from "react";

export const TableList = () => {
  const headers = ["Statement Date", "Type", "Customer Count", "Tenant ID"];
  const data = {
    arStatementsSummary: [
      {
        statementsId: "008d5dc2-f6a2-4e8d-b29d-b10979fe0d2b",
        statementDate: "2022-11-11",
        tenantId: "59bcd27f-a0dd-475c-8165-cb3aff11654f",
        statementType: "FINAL",
        customerCount: 68,
        appReferenceNo: null,
        fileExtension: null
      },
      {
        statementsId: "5f147257-170b-4e7a-bdbb-932f80ca561a",
        statementDate: "2023-03-31",
        tenantId: "59bcd27f-a0dd-475c-8165-cb3aff11654f",
        statementType: "INTERIM",
        customerCount: 13,
        appReferenceNo:
          "REVIEW_DOCUMENT_1680513641087_sys-user-dms-accounts-receivables",
        fileExtension: "EXCEL"
      },
      {
        statementsId: "c43f741d-5640-4ea4-9e50-e9bcad6a9ac1",
        statementDate: "2023-03-31",
        tenantId: "59bcd27f-a0dd-475c-8165-cb3aff11654f",
        statementType: "INTERIM",
        customerCount: 13,
        appReferenceNo:
          "REVIEW_DOCUMENT_1680513751754_sys-user-dms-accounts-receivables",
        fileExtension: "EXCEL"
      },
      {
        statementsId: "06edbe36-238b-4be2-b52e-26376b5fb7f0",
        statementDate: "2023-03-31",
        tenantId: "59bcd27f-a0dd-475c-8165-cb3aff11654f",
        statementType: "INTERIM",
        customerCount: 13,
        appReferenceNo:
          "REVIEW_DOCUMENT_1680517706226_sys-user-dms-accounts-receivables",
        fileExtension: "PDF"
      }
    ]
  };
  const keys = ["statementDate", "statementType", "customerCount", "tenantId"];
  return (
    <div>
      <table border="1px solid">
        <thead>
          <tr>
            {headers?.map((header, i) => {
              return <th key={header + i}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data?.arStatementsSummary?.map((obj) => {
            return (
              <tr>
                {keys?.map((k) => {
                  return <td>{obj[k]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
