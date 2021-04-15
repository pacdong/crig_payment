import { gql } from "@apollo/client";

export const EXCEL_CONVERT = gql`
  query excelConvert($tableName: TableName) {
    excelConvert(tableName: $tableName)
  }
`;
